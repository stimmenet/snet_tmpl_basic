# Regeln für snet_feBaseline #

## Ordnerstruktur ##

* **css**

    * main.css
    * start.css

* **scss**

    * **_pages**
        * **main.scss:**

                @import '../functions/all';
                @import '../mixins/all';
                @import '../framework/all';
                @import '../modules/all';

        * **start.scss:**

                @import '../content-start';

    * **_sections** (enthält Extensions)
    * **_vendor** (enthält z. B. JS-Schnipsel wie die Swipebox)

    * **framework** (enthält Basisdateien)
        * **_all.scss:** importiert die nachfolgenden Dateien
        * **_base.scss:** Styles für HTML-Elemente
        * **_layout.scss:**
        * **_normalize.scss:** für gleiche Ausgangsbasis in versch. Browsern
        * **_variables.scss:** für Projekt definierte Variablen (Farbwerte, Schriftarten + -Größen, Breitenangaben...)
    * **functions**

    * **mixins**
        * **_mq.scss:** Mediaqueries
        * **_rem.scss**

    * **modules**
        * **_all.scss:** importiert die nachfolgenden Dateien (außer die für die Startseite)
        * **_header.scss**
        * **_content.scss**
        * **_content-start.scss**
        * **_footer.scss**
        * etc.

## HTML / CSS Namensgebung ##

* IDs nicht für Styling, nur für Javascript oder Anker benutzen
* Klassennamen sinnvoll vergeben nach Inhalt, nicht nach Aussehen
* CSS Selektoren nur auf Klassen beziehen, nicht auf Elementname, wenn möglich
* Benennung nach BEM
    * = block-element- -modifier

            nav-list--level1
    * Kleinschreibung, kein CamelCase!

            .headerimage statt .headerImage
    * Keine Bindestriche, außer für BEM-Syntax
    * Keine Unterstriche
    * Es kann Sub-Elemente von Elementen geben

            .nav-list-item

    * Es kann Sub-Modifier von Modifiern geben

            .nav-list--level1--active

    * Nur der Block bzw. das Eltern-Element enthält den Modifier, die darunterliegenden Elemente nicht

            .nav-list--level2 > .nav-list-item
    * Ein Element muss im eindeutigen Kontext zum Block bzw. Eltern-Element stehen
    * Allgemeine globale Klassen sind gültig
    * Allgemeine Klassen, die sich innerhalb eines Blocks geringfügig anders verhalten, werden in Abhängigkeit vom Block gestyled, aber nicht als BEM-Klassen

            .logo { }
            .header .logo { }
    * Helferklassen zur Userinteraktion sind nicht nach BEM-Muster benannt

            .active, .inactive
    * Klassen, die nicht zur Gestaltung eines Elements, sondern ausschließlich zum Interagieren mit Javascript bestehen, sollten mit dem Präfix `js-` gekennzeichnet werden

            div class="js-draggable", a class="js-togglecontent", ...
    * zu testen: Jeder CSS-"Befehl" sollte aus nicht mehr als 3 einzelnen Selektoren bestehen (Pseudo-Klassen NICHT inbegriffen)

            .nav--main .nav-list--level1 > .nav-list-item
    * Widerspricht nicht dem Einsatz von Bootstrap oder anderen Frameworks, diese sind wie bisher als globale Klassen ohne BEM zu benutzen, grundsätzlich sollten größere Externe Komponenten wie CSS-Frameworks, allerdings, sofern möglich, ebenfalls mit einem eindeutigen Präfix versehen werden, z.B. `tbs-Klassenname`
    * Hilfsklassen (Wrapper- oder Container-Klassen) werden innerhalb der Block-Klasse als Element-Klasse "blockname-frame" aufgeführt, können aber in Unter-Element-Klassen aus semantischen Gründen aus dem BEM-String weggelassen werden

            .content
                .content-frame --> Hilfsklasse für Breitenangaben/Margins
                    .content-main
                    .content-additional

## Javascript-Loading ##

Einführung von `yepnope.js` als "conditional resource loader" zum besseren steuern, welches Skript wann in welcher Abhängigkeit geladen werden soll.

 - Über TYPOSCRIPT werden nur noch `yepnope.js` selbst und die Datei `scriptloader.js` geladen, die als Einstieg dienen.
 - In der `scriptloader.js` werden alle nötigen weiteren Skripte geladen und definiert.
 - Das "herkömmliche Laden" von CSS-Dateien und Skripten aus Extensions (z.B. Powermail) wird, sofern möglich, über TYPOSCRIPT vollständig deaktiviert, stattdessen werden die Skripte über die  `scriptloader.js` Datei eingebaut
 - Das Grundgerüst des neuen Workflows besteht aus 4 Skripten
     - [yepnope.js][1] für asynchrones Laden von Ressourcen
     - [Modernizr][2] für Javascript-basierte Feature Detection
     - [jQuery][3] für Element-Selektion und -Manipulation
     - [MediaCheck][4] für Code-Ausführung beim Betreten und Verlassen von Responsive Breakpoints
 - Diese vier Skripte stellen die Basis dar um sauber und strukturiert mit Javascript zu arbeiten, sollen aber im Produktiveinsatz nur dann auch geladen werden, wenn sie gebraucht werden
 - Beispiele zum Einsatz und zur Syntax von `yepnope.js` sind in der `scriptloader.js` vorhanden.
 - Für das Laden eigener Skripte gibt es in der `scriptloader.js` zwei Platzhalder
     - `PLACEHOLDER 1` wird genutzt, wenn das jeweilige Skript so bald wie möglich im Seiten-Lade-Vorgang geladen werden und zur Verfügung stehen soll
     - `PLACEHOLDER 2` wird genutzt, wenn das jeweilige Skript erst nach erfolgreichem Seiten-Lade-Vorgang geladen und zur Verfügung stehen soll bzw. kann
     - Tiefergreifende Erklärungen zu Syntax und Einsatzzwecken der Tools finden sich auf den jeweiligen Homepages


  [1]: http://yepnopejs.com/
  [2]: http://modernizr.com/
  [3]: http://jquery.com/
  [4]: https://github.com/sparkbox/mediaCheck