# 🐒 Tampermonkey Script Collection

Diese Sammlung enthält nützliche **[Tampermonkey](https://www.tampermonkey.net/)**-Benutzerskripte, die alltägliche Aufgaben im Browser automatisieren oder vereinfachen.  
Jedes Skript ist unabhängig nutzbar und kann direkt über Tampermonkey installiert werden.

---

## 📜 Übersicht der Skripte

### 1. **buchungsliste-dfn-terminplaner.js**

**Zweck:**  
Dieses Skript automatisiert die **Erstellung einer Buchungsliste im DFN Terminplaner** (Version 6) auf der Seite  
[`https://terminplaner6.dfn.de/de/node/add/booking`](https://terminplaner6.dfn.de/de/node/add/booking).  

Es ermöglicht, **mehrere vorgegebene Termine** auf einmal in die Eingabefelder des DFN-Formulars einzutragen, anstatt sie manuell einzeln hinzufügen zu müssen.

---

### 🧠 Funktionsweise

- Fügt oben links auf der Seite ein **Textfeld** und einen **„Eintragen“-Button** hinzu.  
- Liest jede Zeile aus dem Textfeld aus und trägt sie nacheinander in die Formularfelder für die Buchungsliste ein.  
- Fügt bei Bedarf automatisch neue Eingabefelder hinzu.  
- Wartet zwischen den Einträgen kurz (1 Sekunde), um die Formularaktualisierung sicherzustellen.  

---

### 💡 Beispiel-Nutzung

1. Öffne die Seite  
   👉 [`https://terminplaner6.dfn.de/de/node/add/booking`](https://terminplaner6.dfn.de/de/node/add/booking)

2. Gib im eingeblendeten Textfeld deine Terminliste (eine Zeile pro Termin) ein, z. B.:

   ```
   10.10.2025 09:00–10:00
   11.10.2025 14:00–15:30
   14.10.2025 08:30–09:30
   ```

3. Klicke auf **„Eintragen“** – das Skript erstellt automatisch die vollständige Buchungsliste mit allen Terminen.

---

### ⚙️ Technische Details

- Kein externer Zugriff oder Grant notwendig (`@grant none`)  
- Dynamische Identifikation der Formularfelder (`edit-field-flagcollection-und-X-field-optiontext-und-0-value`)  
- Simpler Ablauf mit eingebautem Delay (`sleep(ms)`)  
- Kompatibel mit aktuellem DFN Terminplaner 6  
