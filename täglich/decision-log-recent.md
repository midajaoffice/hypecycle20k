# Decision Log — Recent (Project)

**Nur die letzten ~14 Tage** — fürs ChatGPT Project.  
Vollständige Historie: [`decision-log.md`](decision-log.md) · Archiv: [`../archiv/decision-log-archive.md`](../archiv/decision-log-archive.md)

**Nach jedem Briefing:** `# NEW_LOG_ENTRY` hier **und** in `decision-log.md` einfügen.  
**Monatlich:** Einträge älter als 14 Tage → nach `archiv/`, hier löschen.
**QA Pflicht:** jede neue Zeile enthält `zielpfad_status`, `drawdown_stufe`, `regelkonflikt`.

---

## 2026-05-27 (Maintenance-Hold, kein neuer Export)

**North Star:** 19121.79→38243.58 EUR | Ist 19121.79 EUR | Fortschritt 50.0% | Lücke 19121.79 EUR
**DQ:** A | **Fazit:** Halten im maintenance-Modus; keine Kurs-/P&L-Änderung | **Kaufen prüfen:** — | **Verkauf prüfen:** —
**Ausführung:** keine
**QA:** zielpfad_status=on_track; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** keine; §4 unverändert | **Watchlist:** unverändert
**Gebühren/Steuer:** keine neuen Gebühren; Steuer nur Modell | **Risiko:** Cash=0 unter 20%-Reserve; Alarmpositionen nur nach MC-Update prüfen
**Nächster Schritt:** Cashbestand bestätigen; neuen Broker-Export liefern; FR0010221234/US08862L2025 mit Kurs+News prüfen
**Lernnotiz:** Ohne neuen Broker-Export bleibt Halten aktiv; Cashmangel verhindert neue Risikoaufnahme.

---

## 2026-05-27 (Prompt-Vorbereitung)

**North Star:** 19.121,79→38.243,58 EUR | Ist 19.121,79 EUR | Fortschritt 50,0 % | Lücke 19.121,79 EUR
**DQ:** A | **Fazit:** Bestand übernommen, heute Prompt-Lauf auf Basisdaten 26.05 | **Kaufen prüfen:** — | **Verkauf prüfen:** Fokus Alarmpositionen
**Ausführung:** keine
**QA:** zielpfad_status=on_track; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** Keine neue Ausführung; OPERATOR-Stand für Tageslauf 27.05 vorbereitet | **Watchlist:** unverändert
**Gebühren/Steuer:** keine neuen Gebühren | **Risiko:** mehrere High-Risk-Positionen mit hohem Drawdown
**Nächster Schritt:** Daily Prompt 27.05 mit aktuellem OPERATOR_VIEW durchführen
**Lernnotiz:** Historie klar trennen: 26.05 = erstes Portfolio-Update, 27.05 = operativer Prompt-Tag.

---

## 2026-05-26 (Erstes Realportfolio-Update)

**North Star:** 19.121,79→38.243,58 EUR | Ist 19.121,79 EUR | Fortschritt 50,0 % | Lücke 19.121,79 EUR
**DQ:** A | **Fazit:** Vollständiges reales Broker-Portfolio initial übernommen | **Kaufen prüfen:** — | **Verkauf prüfen:** BEYOND AIR, EUTELSAT
**Ausführung:** keine
**QA:** zielpfad_status=on_track; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** 20 Aktien + 2 ETFs in `portfolio-state` dokumentiert; PV 19.121,79 EUR; Invest 19.630,76 EUR | **Watchlist:** Kernpositionen priorisiert
**Gebühren/Steuer:** keine neuen Transaktionen im Update | **Risiko:** Gesamt-P/L -508,97 EUR (-2,59 %)
**Nächster Schritt:** Trigger-Review §6 und Tagesbriefing 27.05
**Lernnotiz:** Erstes Datenfundament muss vor Strategie-/Action-Calls stehen.

---

## 2026-05-27 (Execution-Framework aktiviert)

**North Star:** 4.148,25→8.296,50 EUR | Ist 4.148,25 EUR | Fortschritt 50,0 % | Lücke 4.148,25 EUR
**DQ:** A- | **Fazit:** Konkretes 6-Monats-Framework für 2x-Ziel aktiviert | **Kaufen prüfen:** nur innerhalb Risikobudget | **Verkauf prüfen:** bei Alarmstufe/Trendbruch
**Ausführung:** keine Order; Regelwerk geschärft
**QA:** zielpfad_status=on_track; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** `portfolio-state.md` §6 erweitert (Risikobudget, Drawdown-Stufen, Rebalancing, Exit-Regeln, Review-Rhythmus) | **Watchlist:** unverändert
**Gebühren/Steuer:** unverändert | **Risiko:** Ziel bleibt aggressiv, Regelwerk reduziert Verhaltensfehler
**Nächster Schritt:** erste Wochenprüfung nach neuem Framework durchführen und Drawdown-Basiswert festhalten
**Lernnotiz:** Ambitioniertes Ziel braucht harte, vorab definierte Prozessregeln.

---

## 2026-05-27 (Ziel-Reset auf 2x in 6 Monaten)

**North Star:** 4.148,25→8.296,50 EUR | Ist 4.148,25 EUR | Fortschritt 50,0 % | Lücke 4.148,25 EUR
**DQ:** A- | **Fazit:** North Star auf Portfolio-Verdopplung in 6 Monaten umgestellt | **Kaufen prüfen:** nach Risikobudget | **Verkauf prüfen:** bei Regime-/Trendbruch
**Ausführung:** keine Order; Ziel-/Regelupdate
**QA:** zielpfad_status=on_track; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** `portfolio-state.md` §0/§1/OPERATOR_VIEW auf neues Ziel und Zeitfenster aktualisiert | **Watchlist:** keine neue Position
**Gebühren/Steuer:** unverändert | **Risiko:** Ziel ist aggressiv, Drawdown-Kontrolle bleibt zwingend
**Nächster Schritt:** konkrete Rebalancing- und Risikobudget-Regeln für das 6-Monats-Ziel definieren
**Lernnotiz:** Hartes Ziel nur mit klaren Exit- und Risikoregeln nachhaltig.

---

## 2026-05-27 (Broker-App v2 Migration)

**North Star:** 500→5000 EUR | Ist 4.148,25 EUR | Fortschritt 83,0 % | Lücke 851,75 EUR
**DQ:** A- | **Fazit:** Bestand auf reales Broker-Portfolio umgestellt | **Kaufen prüfen:** — | **Verkauf prüfen:** —
**Ausführung:** keine Order; Datenmigration
**QA:** zielpfad_status=ahead; drawdown_stufe=normal; regelkonflikt=ja
**Änderungen:** RKLB/UEC aus `portfolio-state.md` entfernt; nur IE00063FT9K6 + IE00B53SZB19 als Positionen übernommen; Kapitalwerte auf Broker-Export gesetzt | **Watchlist:** §5 auf neue Positionen synchronisiert
**Gebühren/Steuer:** keine neue Transaktion; Steuer weiter Modellannahme | **Risiko:** Cash nicht separat im CSV ausgewiesen
**Nächster Schritt:** nächsten Export mit Cashfeld/Broker-Saldo ergänzen
**Lernnotiz:** Bei App-/Datenversionswechsel immer Bestand aus Broker-Export priorisieren.

---

## 2026-05-27

**North Star:** 500→5000 EUR | Ist 498 EUR | Fortschritt 10,0 % | Lücke 4.502 EUR
**DQ:** B | **Fazit:** Halten; keine neue Kauf-/Verkauf-Prüfung | **Kaufen prüfen:** — | **Verkauf prüfen:** —
**Ausführung:** keine
**Änderungen:** OPERATOR_VIEW Tag 3/365; keine Cash-/Positionsänderung | **Watchlist:** keine Statusänderung
**Gebühren/Steuer:** keine neuen Gebühren; Steuer nicht relevant | **Risiko:** Broker-Fill/FX/Kurse offen; 10×-Ziel ambitioniert
**Nächster Schritt:** Broker-Fills und aktuelle Kurse nachziehen
**Lernnotiz:** Ohne bestätigte neue Kurs-/Fill-Daten keine P&L- oder Statusänderung.

---

## 2026-05-26

**North Star:** 500→5000 EUR | Ist 498 EUR | Fortschritt 10,0 % | Lücke 4.502 EUR
**DQ:** B | **Fazit:** Erstkauf RKLB + UEC | **Kaufen prüfen:** — | **Verkauf prüfen:** —
**Ausführung:** Kauf bestätigt
**Änderungen:** RKLB 125 EUR, UEC 100 EUR; Cash 273 EUR; 2× Gebühr 1 EUR | **Watchlist:** RKLB/UEC → Position
**Gebühren/Steuer:** 2 EUR Orders; PV 498 nach Gebühren | **Risiko:** 45 % investiert, 55 % Cash
**Nächster Schritt:** Broker-Fills in §4; Kurse aktualisieren; ASTS/RCAT beobachten
**Lernnotiz:** Gates eingehalten (125/100 €); Reserve bewusst groß gelassen.

---

## 2026-05-25

**North Star:** 500→5000 EUR | Ist 500 EUR | Fortschritt 10,0 % | Lücke 4.500 EUR
**DQ:** C | **Fazit:** Watchlist erstellt, keine Ausführung | **Kaufen prüfen:** RKLB 125 €, UEC 100 € | **Verkauf prüfen:** —
**Ausführung:** keine
**Änderungen:** OPERATOR_VIEW watchlist_top=RKLB,UEC; Positionen weiter keine | **Watchlist:** 8 Kandidaten
**Gebühren/Steuer:** RKLB RT 2,63 €/BE 2,10 %; UEC RT 2,50 €/BE 2,50 %; DE-Modell 26,375 % über 1.000 € Freistellung
**Risiko:** 10×-Ziel extrem ambitioniert; DQ C wegen Broker/Fractionals/FX offen
**Nächster Schritt:** Mission Control prüft Broker-Ausführung, Fractionals, Limitkurs, danach §4 nur bei echter Order ergänzen
**Lernnotiz:** Bei 500 € Start keine Kleinsttickets; Gebühren erzwingen hohe Conviction.
