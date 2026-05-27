# Portfolio State

**Letztes Update:** 2026-05-27
**Datenqualität:** A
**Modus:** Reales Broker-Portfolio / Bestandsführung

> **Einzige Quelle der Wahrheit** für Bestand, Cash und Kurse. ChatGPT Memory zählt nicht.

---

## OPERATOR_VIEW

> Operator: **zuerst nur diesen Block lesen.** Bei jedem Update vollständig aktualisieren.

```
north_star: 19121.79→38243.58|EUR|fortschritt:50.0%|luecke:19121.79|tag:2/182|ziel_datum:2026-11-27
kapital: cash=0|investiert=19630.76|pv=19121.79|dq=A
modus: maintenance
positionen: CA00288U1066,DE0005158703,US08862L2025,AU000000BHP4,CA13321L1085,US1912161007,US26740W1099,FR0010221234,US5510733075,CH0038863350,BMG657731060,US6701002056,US6748705067,US7731211089,GB00B63H8491,DE0007236101,US86738R1086,FR001400H2X4,FR0000124141,FR0000125486,IE00063FT9K6,IE00B53SZB19
positionen_detail: CA00288U1066 pnl=9.75% trigger_kurs=ok trigger_news=watch next=earnings|CA13321L1085 pnl=-8.60% trigger_kurs=watch trigger_news=uran next=uran_update|FR0010221234 pnl=-55.70% trigger_kurs=alarm trigger_news=watch next=turnaround_check|US08862L2025 pnl=-93.58% trigger_kurs=alarm trigger_news=watch next=liquidity_check|IE00B53SZB19 pnl=28.71% trigger_kurs=ok trigger_news=macro next=fed_cpi|IE00063FT9K6 pnl=0.08% trigger_kurs=ok trigger_news=copper next=china_pmi
watchlist_top: IE00B53SZB19,CA13321L1085,DE0007236101
letzte_entscheidung: update|reales_portfolio_vollstaendig_uebernommen|2026-05-27
gebuehren_modell: broker_real_export|steuer_modell:26.375pct_DE
```

**Felder:** `modus` = maintenance | thesis_scan | action (MC setzt vor Chat, siehe `anleitung/mc-datenritual.md`). `positionen_detail` — MC: pnl, next; Operator: trigger_kurs, trigger_news.

---

## 0. North Star

| Feld | Wert |
|---|---|
| **Starsumme (Startkapital)** | **19.121,79 EUR** |
| **Startdatum North Star** | **2026-05-26** |
| **Zielhorizont** | bis **2026-11-27** |
| **Ziel-Multiple** | **2×** in 6 Monaten |
| **Zielwert (TARGET_VALUE_EUR)** | **38.243,58 EUR** |
| **Aktueller Fortschritt %** | **50,0 %** (19.121,79 ÷ 38.243,58) |
| **Lücke bis Ziel (EUR)** | **19.121,79 EUR** |
| **Erforderliche Gesamtrendite** | +100 % in 6 Monaten (sehr ambitioniert) |

### Kosten- & Steuer-Modell

| Feld | Wert |
|---|---|
| Broker-Modell | Reales Broker-Depot (CSV-Export) |
| Gebühr pro Order | 1,00 EUR |
| Slippage-Annahme pro Seite | 0,25 % |
| Steuersatz Modell DE | 26,375 % |
| Freistellungsauftrag | 1.000 EUR/Jahr |
| Kirchensteuer | nein |

---

## 1. Mission

Reales Broker-Portfolio wird als operative Basis geführt. North Star ist: Portfolio in 6 Monaten verdoppeln (19.121,79 EUR auf 38.243,58 EUR); Bestand und Kurse werden aus Broker-Exporten übernommen.

**Erlaubt:** Aktien, ETFs, Rohstoff-ETPs/ETCs — Xetra, Frankfurt, NYSE, NASDAQ, Euronext  
**Ausgeschlossen:** Krypto, Forex, CFDs, Optionen, Hebelprodukte, illiquide/unregulierte Märkte.

---

## 2. Kapital

| Feld | Wert |
|---|---:|
| Startkapital | 500 |
| Aktueller geschätzter Portfoliowert | 19.121,79 |
| Verfügbares Cash | 0 |
| Investiertes Kapital | 19.630,76 |
| Nicht verifizierte Werte | Cashbestand nicht separat im Export ausgewiesen |

---

## 3. Portfolio-Regeln

- Keine echten Trades ohne menschliche Bestätigung.
- Max. **25** gleichzeitige Positionen in §4.
- Min. **20 %** Cash-Reserve am PV (Standard; temporärer Override nur mit Log-Begründung).
- Keine Position über 30 % des Portfolios (Standard; temporärer Override nur für dokumentierten Rebalance-Pfad).
- Hype-Ideen maximal 5–10 %, normale Spekulationen 10–20 % (nur für neue Satelliten-Ideen).
- Keine Nachkäufe aus Hoffnung.
- Jede Position braucht These, Katalysator und **Exit-Kriterium** (Stop/These in §4).
- **Gewinnmitnahme:** optional prüfen; bei ETF-Core primär Rebalancing-/Risikostufen aus §6 nutzen.
- Keine Kaufprüfung ohne aktuelle Kursprüfung.
- Watchlist-Radar: **5–8** Namen (Beobachten/Kaufen prüfen); Verworfenes → `ideen/rejected-ideas.md`.
- Lebenszyklus-Details: `chatgpt/operator-protocol.md` → **Portfolio-Lebenszyklus**.
- Jede neue Allokationsentscheidung muss auf das 6-Monats-Ziel einzahlen (Renditepotenzial vs. Drawdown-Risiko explizit dokumentieren).
- Bei aktivem Regelkonflikt (Cash/Positionsgewicht) gilt: keine Risikoerhöhung bis Rückkehr in Standardgrenzen oder dokumentierter MC-Override.

---

## 4. Aktuelle Positionen

| Asset | Ticker | Markt | Kaufdatum | Kaufkurs | Aktueller Kurs | Positionsgröße | Positionswert | These | Katalysator | Trigger-Typ | Nächstes Event | Stop/Exit | Status | DQ |
|---|---|---|---|---:|---:|---:|---:|---|---|---|---|---|---|---|
| ABCELLERA BIOLOGICS | CA00288U1066 | Direkthandel | 2026-05-26 | 4,2142 EUR | 4,625 EUR | 505,71 EUR | 555,00 | Biotech-Exposure mit Turnaround-Option | Pipeline-/Finanzierungsnews | Beides | Nächste Earnings | Exit prüfen bei weiterem Strukturbruch/These-Bruch | Offen | A |
| BECHTLE AG O.N. | DE0005158703 | Direkthandel | 2026-05-26 | 28,514 EUR | 30,66 EUR | 855,42 EUR | 919,80 | IT-Services Qualitätstitel DE | IT-Nachfrage/Outlook | Beides | Guidance/Quartalsbericht | Exit prüfen bei Guidance-Bruch | Offen | A |
| BEYOND AIR INC. O.N. | US08862L2025 | USA | 2026-05-26 | 5,63 EUR | 0,3613 EUR | 45,04 EUR | 2,89 | Hochrisiko-Biotech-Spekulation | Regulatorik/Finanzierung | Beides | Liquidität/Delisting-Risiko | Alarmposition: Exit bei weiterer Verschlechterung | Offen | A |
| BHP GROUP LTD. DL -,50 | AU000000BHP4 | Direkthandel | 2026-05-26 | 23,8022 EUR | 36,885 EUR | 214,22 EUR | 331,97 | Rohstoff-MegaCap als defensiver Zykliker | Eisenerz/Kupferpreise | Beides | Rohstoffzyklus | Exit prüfen bei Zyklusbruch | Offen | A |
| CAMECO CORP. | CA13321L1085 | Direkthandel | 2026-05-26 | 101,5974 EUR | 92,86 EUR | 3.149,52 EUR | 2.878,66 | Uran-Exposure mit Angebotsknappheitsthese | Uranpreis, Vertragsabschlüsse | Beides | Uranpreis-/Nuklearnews | Exit prüfen bei These-Bruch | Offen | A |
| COCA-COLA CO. DL-,25 | US1912161007 | Direkthandel | 2026-05-26 | 65,3633 EUR | 69,20 EUR | 196,09 EUR | 207,60 | Defensiver Qualitätsanker | Pricing-Power, Dividende | Beides | Earnings | Exit bei strukturellem Margenbruch | Offen | A |
| D-WAVE QUANTUM DL-,0001 | US26740W1099 | Direkthandel | 2026-05-26 | 17,69 EUR | 23,57 EUR | 17,69 EUR | 23,57 | Quantum-Spekulation | Kommerzialisierungsnews | News | Produkt-/Umsatznews | Exit bei These-Bruch | Offen | A |
| EUTELSAT COMMS EO 1 | FR0010221234 | Direkthandel | 2026-05-26 | 9,6626 EUR | 4,281 EUR | 2.029,15 EUR | 899,01 | Turnaround-/Satcom-Spezialsituation | Finanzierung/Execution | Beides | Bilanz-/Funding-News | Alarmposition: Risikoreduktion prüfen | Offen | A |
| LYNAS RARE EAR. SP. ADR 1 | US5510733075 | Frankfurt | 2026-05-26 | 9,5509 EUR | 11,60 EUR | 964,64 EUR | 1.171,60 | Rare-Earth-Lieferkette | Geopolitik, Fördervolumen | Beides | China-/Supply-Chain-News | Exit bei Preis-/These-Bruch | Offen | A |
| NESTLE NAM. SF-,10 | CH0038863350 | Direkthandel | 2026-05-26 | 95,87 EUR | 86,62 EUR | 287,61 EUR | 259,86 | Defensiver Konsumwert | Margen/Volumen | Beides | Earnings | Exit bei strukturellem Underperformance-Regime | Offen | A |
| NORDIC AMER.TANKER.DL-,01 | BMG657731060 | Direkthandel | 2026-05-26 | 5,145 EUR | 4,512 EUR | 2.058,02 EUR | 1.804,80 | Tanker-Zykluswette | Frachtraten, Flottenzyklus | Beides | Shipping-Rates | Exit bei Zyklusbruch | Offen | A |
| NOVO-NORDISK B ADR/1DK 10 | US6701002056 | Direkthandel | 2026-05-26 | 36,7791 EUR | 38,18 EUR | 1.250,49 EUR | 1.298,12 | Qualitätswachstum Healthcare | GLP-1 Nachfrage | Beides | Earnings/Guidance | Exit bei Trend-/These-Bruch | Offen | A |
| OCEAN POWER TECH. DL-,01 | US6748705067 | Direkthandel | 2026-05-26 | 0,5209 EUR | 0,3062 EUR | 11,46 EUR | 6,74 | Small-cap Spekulation | Auftragslage | News | Liquiditäts-/Auftragsnews | Exit bei weiterem Strukturbruch | Offen | A |
| ROCKET LAB CORP. DL-,0001 | US7731211089 | Direkthandel | 2026-05-26 | 128,61 EUR | 123,40 EUR | 128,61 EUR | 123,40 | Space-Defense Wachstum | Launch-Manifest, Neutron | Beides | Launch-/Earnings-News | Exit bei These-Bruch | Offen | A |
| ROLLS ROYCE HLDGS LS 0.20 | GB00B63H8491 | Direkthandel | 2026-05-26 | 14,5881 EUR | 14,476 EUR | 1.021,17 EUR | 1.013,32 | Industrials/Defense Qualität | Cashflow-Verbesserung | Beides | Halbjahreszahlen | Exit bei operativem Rückschritt | Offen | A |
| SIEMENS AG NA O.N. | DE0007236101 | Direkthandel | 2026-05-26 | 210,35 EUR | 272,30 EUR | 1.051,75 EUR | 1.361,50 | Industrials/Automation-Qualität | Auftragseingang, Marge | Beides | Quartalszahlen | Exit bei Trendbruch | Offen | A |
| SUNHYDROGEN INC. DL -,001 | US86738R1086 | Stuttgart | 2026-05-26 | 0,0292 EUR | 0,0222 EUR | 29,20 EUR | 22,20 | Wasserstoff-Spekulation | Technologie-/Finanzierungsfortschritt | News | Funding-/Projektnews | Exit bei These-Bruch | Offen | A |
| TONNER DRON. S.A. EO-,0125 | FR001400H2X4 | Frankfurt | 2026-05-26 | 0,0314 EUR | 0,04 EUR | 31,41 EUR | 40,00 | Micro-cap Drohnen-Spekulation | Auftragsnews | News | Liquidität/Execution | Exit bei Strukturbruch | Offen | A |
| VEOLIA ENVIRONNE. EO 5 | FR0000124141 | Direkthandel | 2026-05-26 | 32,0477 EUR | 35,21 EUR | 961,43 EUR | 1.056,30 | Defensive Umweltinfrastruktur | Regulierung, Margen | Beides | Earnings | Exit bei operativem Bruch | Offen | A |
| VINCI S.A. INH. EO 2,50 | FR0000125486 | Direkthandel | 2026-05-26 | 120,0162 EUR | 124,65 EUR | 960,13 EUR | 997,20 | Infrastrukturqualität Europa | Infrastrukturpipeline | Beides | Auftragseingang | Exit bei Trendbruch | Offen | A |
| iShares Copper Miners UCITS ETF | IE00063FT9K6 | Direkthandel | 2026-05-26 | 9,5445 EUR | 9,552 EUR | 2.872,88 EUR | 2.875,15 | Kupferminen-Exposure als Rohstoff-/Elektrifizierungs-Beta | Kupferpreiszyklus, Minenmargen | Beides | Rohstoffzyklus / China-Nachfrage | Exit bei Trendbruch Kupfer + Underperformance-Regime | Offen | A |
| iShares Nasdaq 100 UCITS ETF (Acc) | IE00B53SZB19 | Direkthandel | 2026-05-26 | 1.149,2442 EUR | 1.479,20 EUR | 989,12 EUR | 1.273,10 | Breites US-Tech-Momentum mit Qualitätsfokus | US-Earnings, AI-Capex-Zyklus | Beides | US-Makro / Earnings-Saison | Exit bei klarer Regimewende Growth/Tech | Offen | A |

---

## 5. Watchlist-Zusammenfassung

| Asset | Ticker | Markt | Thema | Katalysator | Risiko | Story | Setup | Score | Status | Nächster Prüfpunkt |
|---|---|---|---|---|---|---:|---:|---:|---|---|
| iShares Nasdaq 100 UCITS ETF (Acc) | IE00B53SZB19 | Direkthandel | US-Tech-Beta | US-Earnings, AI-Capex, Fed-Pfad | Bewertungs-/Makro-Risiko | 7.0 | 7.0 | 7.0 | Position | Earnings + Fed-Tonlage prüfen |
| iShares Copper Miners UCITS ETF | IE00063FT9K6 | Direkthandel | Rohstoffe/Kupferminen | Kupferpreis, China-Nachfrage, Minenmargen | Zyklizität/China-Risiko | 6.6 | 6.6 | 6.6 | Position | Kupfer-Trend + China-Daten prüfen |
| CAMECO CORP. | CA13321L1085 | Direkthandel | Uran/Rohstoffe | Uranpreis, Lieferverträge | Commodity-Zyklik | 6.8 | 6.2 | 6.5 | Position | Uranpreis + Contract-News |
| SIEMENS AG | DE0007236101 | Direkthandel | Industrials/Automation | Auftragseingang, Marge | Konjunktur | 6.7 | 6.5 | 6.6 | Position | Auftragseingang + Margenentwicklung |
| AST SpaceMobile | ASTS | NASDAQ | Space/Satcom | 2026 Revenue Guidance, FCC, Satelliten-Ramp | Launch-/Capex-Risiko | 6.6 | 6.6 | 6.6 | Beobachten | BlueBird-Launch-Kadenz prüfen |
| Red Cat | RCAT | NASDAQ | Defense/Drohnen | Army/SRR, Q1 Umsatzsprung | Earnings-Miss, Margen | 6.5 | 6.5 | 6.5 | Beobachten | Q2 Margen/Army-Deliveries |
| Kratos Defense | KTOS | NASDAQ | Defense/Unmanned | Q1 Wachstum, Guidance erhöht | hohe Bewertung | 6.4 | 6.4 | 6.4 | Beobachten | neue Contracts/Backlog |
| Super Micro | SMCI | NASDAQ | KI-Infrastruktur | AI-Server-Umsatz, FY26 Sales-Guidance | Cashflow/Review/Margen | 6.2 | 6.2 | 6.2 | Beobachten | Cashflow + Export-Control-Review |
| Vertiv | VRT | NYSE | KI-Infrastruktur | Data-center sales +30 %, Guidance erhöht | Preis > 150 € ohne Fractionals, Bewertung | 6.1 | 6.1 | 6.1 | Daten prüfen | Fractional möglich? Bewertung prüfen |
| Corsair Gaming | CRSR | NASDAQ | Gaming/Hardware | Q1 Umsatz +10 %, profitabler Turnaround | Konsum/PC-Zyklus | 5.8 | 5.8 | 5.8 | Beobachten | Gaming-Hardware-Nachfrage |

---

## 6. 6-Monats-Execution-Framework (2x-Ziel)

### 6.1 Risikobudget

| Regel | Schwelle |
|---|---|
| Max. Portfolio-Drawdown vom letzten Hoch | **-12 %** |
| Alarmstufe 1 (Risiko reduzieren) | bei **-8 %** Drawdown |
| Alarmstufe 2 (Defense-Modus) | bei **-12 %** Drawdown |
| Max. Einzelpositionsgewicht | **70 %** vom PV |
| Ziel-Exposure (investiert) | **80–100 %** je nach Regime |

### 6.2 Rebalancing-Logik (wöchentlich)

| Situation | Aktion |
|---|---|
| IE00B53SZB19 Outperformance > 15 %-Punkte vs. IE00063FT9K6 | 5–10 %-Punkte in Underperformer umschichten (nur wenn Trend intakt) |
| IE00063FT9K6 Outperformance > 15 %-Punkte vs. IE00B53SZB19 | 5–10 %-Punkte in Underperformer umschichten (nur wenn Trend intakt) |
| Beide Trends intakt (keine Alarmstufe) | Zielmix **60/40 bis 70/30** (Nasdaq/Copper) halten |
| Alarmstufe 1 aktiv | Risiko um **10–20 %** senken (Teilgewinne/leichte Cash-Quote) |
| Alarmstufe 2 aktiv | Defense-Modus: Risiko deutlich senken, bis Drawdown < -8 % |

### 6.3 Exit- und Gewinnsicherungsregeln

- **Trendbruch-Regel:** Zwei schwache Wochen in Folge + Makro-/Themenbruch -> Verkauf prüfen.
- **Trailing-Ansatz:** Nach starken Anstiegen Teilgewinn realisieren, Restposition mit engem Review weiterlaufen lassen.
- **Keine Hoffnungstrades:** Verlierer nicht aufstocken, wenn These/Regime schwächer wird.
- **Re-Entry nur mit Trigger:** Rückkauf erst bei bestätigter Trendstabilisierung.

### 6.4 Operativer Rhythmus

- **Wöchentlich (Pflicht):** Performance Delta der Top-Positionen, Drawdown-Stufe, Zielpfad-Check.
- **Monatlich (Pflicht):** Zielpfad vs. Ist (2x in 182 Tagen), ggf. Risiko neu kalibrieren.
- **Event-basiert:** Fed, CPI, große US-Earnings, China-/Kupferdaten -> außerplanmäßige Prüfung.

### 6.5 Offene Prüfpunkte

- Cashbestand separat aus Broker-App bestätigen (CSV zeigt nur Positionswerte).
- Für Kernpositionen/Top-Risiken Börsenkürzel im Broker eindeutig dokumentieren.
- Prüfen, ob Warrant-/Restpositionen bewusst ausgeschlossen bleiben.
- **Ohne neuen Broker-Export:** Operator bleibt in `modus: maintenance` (kein erfundenes pnl). Ritual: [`anleitung/mc-datenritual.md`](../anleitung/mc-datenritual.md).

---

## 7. Bekannte Unsicherheiten

- Vollständiges reales Portfolio (Aktien + ETFs) aus Broker-CSV übernommen; Intraday kann bis zum nächsten Export abweichen.
- DQ **A**: Werte stammen direkt aus Broker-Export (Kurse, Einstand, P/L).
- PV basiert auf Summe der ausgewiesenen Positionswerte.
- Verdopplung in 6 Monaten ist sehr ambitioniert und keine Garantie.
- Steuer bleibt Modellannahme; Brokerdaten selbst sind Echtbestand.

---

## 8. Letzte Änderungen

- 2026-05-27: Vollständiges reales Portfolio (20 Aktien + 2 ETFs) aus Broker-Export übernommen; PV auf 19.121,79 EUR gesetzt.
- 2026-05-27: North Star angepasst auf 2× in 6 Monaten (19.121,79 EUR -> 38.243,58 EUR bis 2026-11-27).
- 2026-05-27: 6-Monats-Execution-Framework ergänzt (Risikobudget, Rebalancing, Exit- und Review-Rhythmus).
- 2026-05-26: Erstes reales Portfolio-Update als Basisdatum gesetzt.
- 2026-05-25: Ursprungsportfolio; Watchlist mit 8 Kandidaten; RKLB/UEC „Kaufen prüfen“, keine Positionen.
