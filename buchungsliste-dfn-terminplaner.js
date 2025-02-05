// ==UserScript==
// @name         Eingabefeld, Button und RadioButton Handling
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fügt ein Eingabefeld und einen Button zu einer Website hinzu, liest Zeilen des Textfelds aus und fügt sie in dynamisch identifizierte Eingabefelder ein.
// @author       Sie
// @match        https://terminplaner6.dfn.de/de/node/add/booking
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Radiobutton beim Laden der Seite selektieren
    const radioButton = document.getElementById("edit-field-selector-und-text");
    if (radioButton) {
        radioButton.click();
    }

    // Erstelle das Textfeld
    const textarea = document.createElement('textarea');
    textarea.rows = 4;  // Setzt die Höhe des Textareas auf 4 Zeilen
    textarea.style.position = 'fixed';
    textarea.style.top = '10px';
    textarea.style.left = '10px';
    textarea.style.zIndex = 1000; // damit es über anderen Inhalten erscheint

    // Erstelle den Button
    const button = document.createElement('button');
    button.innerText = 'Eintragen';
    button.style.position = 'fixed';
    button.style.top = '150px';
    button.style.left = '10px';
    button.style.zIndex = 1000; // damit es über anderen Inhalten erscheint

    // Funktion, die beim Klicken des Buttons ausgelöst wird
    button.addEventListener('click', function() {
        eintragenFunction();
    });


    // Die Eintragen-Funktion
    async function eintragenFunction() {
        const lines = textarea.value.split('\n');
        let i = 0;
        for (let line of lines) {
            const targetInputFieldId = "edit-field-flagcollection-und-" + i + "-field-optiontext-und-0-value";
            const targetInputField = document.getElementById(targetInputFieldId);
            if (targetInputField) {
                targetInputField.value = line;

                // Wenn es nicht der letzte Durchlauf ist, klicke den Button
                if (i < lines.length - 1) {
                    let targetButtonId = "edit-field-flagcollection-und-add-more";
                    if (i > 0) {
                        targetButtonId += "--" + (i + 1);
                    }

                    const targetButton = document.getElementById(targetButtonId);
                    if (targetButton) {
                        triggerMouseEvent(targetButton, 'mousedown');
                    } else {
                        console.error("Button mit der ID '" + targetButtonId + "' nicht gefunden");
                    }
                }
            } else {
                console.error("Input-Feld mit der ID '" + targetInputFieldId + "' nicht gefunden");
            }

            await sleep(1000);  // Wartet 1 Sekunde
            i++;
        }
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    function triggerMouseEvent(element, eventName) {
        const event = new MouseEvent(eventName, {
            'bubbles': true,
            'cancelable': true,
            'view': window
        });
        element.dispatchEvent(event);
    }

    // Füge Textfeld und Button dem Dokument hinzu
    document.body.appendChild(textarea);
    document.body.appendChild(button);

})();
