VORGABEN snet_tmpl_basic
=================

SNET-intern - BEGIN
* pull von biergit
* lokales bearbeiten über vagrant
* push als neue ext auf biergit und auf mittwald
* keine änderung direkt auf mittwald
SNET-intern - END

* Wenn die Startseite nicht im Hauptmenü, sondern nur im Metamenü auftaucht, wird diese trotzdem direkt im Hautpmenü als erste Seite angelegt und auf "im Menü verbergen" gesetzt. Somit haben wir immer /start.html anstelle von /meta/start.html Achtung: Hier ggf. nochmals Änderung vornehmen wegen default-Seite als Verweis!
* Seiten unterhalb von Funktionsseite werden im Normalfall aus Indizierung und von RealURL ausgeschlossen. Ausnahmen: 404 Seite muss für RealURL konfiguriert sein. Evt. weitere Seiten wenn diese eine spezielle Aufgabe übernehmen

* Struktur TypoScript->Extensions->[ext_key]->[ext_key].ts + evt. [ext_key.constants.ts]
* Struktur TypoScript->Templates-> [lowerCamelCase].ts + constants.ts (--> keine Änderungen in constants.ts)

* Benutzer + Benutzergruppen-TS-Config werden [user_name].tsconfig.ts bzw. [group_name].tsconfig.ts benannt und in das Verzeichnis "Configuration/TSconfig/User" bzw. "Configuration/TSconfig/UserGroup" gespeichert. Diese Datei muss dann im entsprechenden Datensatz per "include-typoscript" eingebunden werden

* Seiten-TS-Config für bestimmte Seiten werden page.[pid].tsconfig.ts benannt und in das Verzeichnis "" gespeichert. Diese Datei muss dann auf der entsprechenden Seite per "include-typoscript" eingebunden werden
* Seiten-TS-Config für mehrere Seiten werden page.[pid1]-[pid2]-[pid3].tsconfig.ts benannt und in das Verzeichnis "" gespeichert. Diese Datei muss dann auf allen entsprechenden Seite per "include-typoscript" eingebunden werden

* HTML-Templates werden Ihrer Verwendung entsprechend benannt. z.B. defaultTemplate.html + startTemplate.html

* lib-Objekte werden über variables an Fluid übergeben

* Typoscript-Objekte (Snippets) in page.0.ts erzeugen und dann über variables an Fluid übergeben

* RealURL-Konfiguration befindet sich in der ext_localconf.php in der snet_tmpl_basic

* Alle Conditions befinden sich in der Datei conditions.ts und werden dort sinnvoll in Blöcke (includes, templates, extensions) unterteilt.
* Typoscript für bestimmte/mehrere Seiten werden in der consitions.ts in einem entsprechendwn Block (includes) eingebunden

* Pfade werden immer über Konstanten verwendet, diese liegen dann zentral in constants.ts

* Weitere benötigte Extensions in ext_emconf.php hinterlegen und deren TS ggf. in constants.txt und setup.txt hinterlegen