# Regeln für snet_feBaseline / snet_tmpl_basic #

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

## CSS Grid ##

Mit [Neat](http://neat.bourbon.io/) wurde ein neues Grid-System eingeführt. Neat ist eine leichtgewichtige Sammlung an Mixins und Variablen für Sass und basiert auf [Bourbon](http://bourbon.io/), ebenfalls eine Mixin-Sammlung für Sass.

Die Installation der beiden Tools erfolgt automatisch mit dem Befehl `npm install` über das Node-Plugin `node-neat`, anschließend stehen die beiden Libraries ohne weiteres Zutun zur Verfügung.

Um das Grid-System zu nutzen, müssen die drei Sass-Variablen `$width-total`, `$width-margin` und `$width-column` in der Datei `framework/_variables.scss` mit konkreten Pixelwerten befüllt werden. In der Datei `framework/_grid.scss` lässt sich über die Variable `$grid-columns` die Anzahl der zu verwendenden Spalten festlegen. Anhand der vier oben genannten Variablen werden automatisch die nötigen prozentualen Werte für Spaltenbreite und -abstände berechnet.

Anschließend kann man den gewünschten HTML-Elementen über den Mixin Aufruf

    @include span-columns(SPALTENZAHL);

eine Spaltigkeit zuweisen. Für das Definieren einer Spalte innerhalb einer Spalte in der richtigen Breite gibt es ebenfalls einen Aufruf:

    @include span-columns(KIND-SPALTENZAHL of ELTERN-SPALTENZAHL);

Sowohl Bourbon als auch Neat besitzen natürlich eine Vielzahl weiterer Mixins und Funktionen, die ebenfalls benutzt werden können, hierfür lohnt sich ein Blick in die jeweiligen Dokumentationen ([Bourbon](http://bourbon.io/docs/), [Neat](http://neat.bourbon.io/docs/)).

## CSS-Minimierung ##

Beim Ändern bzw. Speichern von scss-Dateien generiert grunt automatisch eine minimierte Version aller aus Sass generierten CSS Dateien. Diese werden im Ordner `Resources/Public/Styles/css/` abgelegt. Dieser Pfad wird auch für die TS-Konstante `$snet_tmpl_basic.cssRootPath` verwendet. Aus Performancegründen sollten im Produktiveinsatz grundsätzlich die minimierten Dateien zum Einsatz kommen.

Dank der Sourcemaps sind die minimierten Dateien trotzdem auch zum Debuggen und Testen geeignet (siehe unten).

## CSS Source Maps ##

Die aus den Sass-Dateien generierten CSS-Files werden im Ordner `Resources/Public/Styles/css/` abgelegt. Dank der CSS Source Maps kann man trotz Nutzung der generierten CSS-Dateien direkt im Browser prüfen, aus welcher Sass-Datei genau welche Styleregel stammt.

Diese Funktion kann in aktuellen Versionen der Browser `Chrome` und `Firefox` genutzt werden. Dazu muss man lediglich die Developer Tools (Taste `F12`) öffnen und in den Einstellungen die Source Maps aktivieren. Anschließend kann man über den Inspektor direkt die Herkunft der Styleregeln aus den Sass-Dateien einsehen.

## Javascript-Loading ##

Einführung von `headjs` als "conditional resource loader" zum besseren steuern, welches Skript wann in welcher Abhängigkeit geladen werden soll.

 - Über TYPOSCRIPT werden nur noch `headjs` selbst und die Datei `scriptloader.js` geladen, die als Einstieg dienen.
 - In der `scriptloader.js` werden alle nötigen weiteren Skripte geladen und definiert.
 - Das "herkömmliche Laden" von CSS-Dateien und Skripten aus Extensions (z.B. Powermail) wird, sofern möglich, über TYPOSCRIPT vollständig deaktiviert, stattdessen werden die Skripte über die  `scriptloader.js` Datei eingebaut
 - Das Grundgerüst des neuen Workflows besteht aus 4 Skripten
     - [headjs](http://headjs.com/) für asynchrones Laden von Ressourcen
     - [Modernizr](http://modernizr.com/) für Javascript-basierte Feature Detection
     - [jQuery](http://jquery.com/) für Element-Selektion und -Manipulation
     - [MediaCheck](https://github.com/sparkbox/mediaCheck) für Code-Ausführung beim Betreten und Verlassen von Responsive Breakpoints
 - Diese vier Skripte stellen die Basis dar um sauber und strukturiert mit Javascript zu arbeiten, sollen aber im Produktiveinsatz nur dann auch geladen werden, wenn sie gebraucht werden
 - Einige Beispiele zum Einsatz und zur Syntax von `headjs` sind in der `scriptloader.js` vorhanden.
 - Tiefergreifende Erklärungen zu Syntax und Einsatzzwecken der jeweiligen Tools finden sich auf den jeweiligen Homepages

## Javascript-Optimierung ##

Auch Javascript-Dateien werden künftig mithilfe von `grunt` verarbeitet und optimiert. Dazu gibt es eine neue Ordnerstruktur: Der Ordner `Resources/Public/Scripts/JS/src/` enthält alle unverarbeiteten Dateien, wogegen der Ordner `Resources/Public/Scripts/JS/dist/` die optimierten Javascripte beinhaltet und daher auch zum Laden von Javascript-Dateien im Live-Betrieb verwendet werden sollte. Der `src` Ordner unterteilt sich in zwei Unterordner:  Im Ordner `external` sollten alle externen Skripte und Ressourcen wie Lightboxen, Slider, Polyfills o.ä. gespeichert werden, der Ordner `internal` ist für eigene, manuelle Javascript-Entwicklungen gedacht.

Grunt überwacht beide Ordner. Sobald eine Javascript-Datei geändert wurde, werden zunächst alle .js Dateien im Ordner `internal` mithilfe von [`jshint`](http://www.jshint.com/) auf syntaktische Fehler und Probleme überprüft. Nur wenn bei dieser Prüfung keine Fehler erkannt wurden, werden im nächsten Schritt alle .ja Dateien aus `internal` und `external` minimiert und mit Source Maps im Ordner `Resources/Public/JS/dist` gespeichert. Ähnlich wie bei den CSS Source Maps kann hier über die Browser Developer Tools trotz Minimierung eine Verknüpfung zu den Original-Dateien  hergestellt werden.

Da die Dateien, auch externe, ohnehin minimiert werden, können bzw. sollten externe Plugins und Skripte zur besseren Einsicht und Nachvollziehbarkeit unminimiert in den `src` Ordner gespeichert werden.

## Bild-Optimierung ##

Für das Seitenlayout oder CSS verwendete Bilder werden künftig in den Ordner `Resources/Public/Images/src/` gespeichert. Mithilfe von grunt werden diese Bilder bei einer Änderung automatisch verlustfrei optimiert und im Ordner `Resources/Public/Images/dist/` abgelegt. Dieser Ordner wird für die Einbindung der Bilder auf der Seite verwendet. Durch die automatische Bildoptimierung werden die Dateigrößen signifikant verringert.

## Tipps ##

- Externe Skripte sollten, sofern möglich, von einem CDN geladen werden. Gute Anlaufstellen hierfür sind [Google Hosted Libraries](https://developers.google.com/speed/libraries/devguide?hl=de) oder [cdnjs](http://de.cdnjs.com/)
- Bei der Einbindung von Ressourcen (egal ob CSS, Javascript oder Bilder) von einem anderen Server sollten immer [protokoll-relative URLs](http://www.paulirish.com/2010/the-protocol-relative-url/) benutzt werden
- Damit die TYPOSCRIPT-Konstanten `{$snet_tmpl_basic.jsRootPath}` und `{$snet_tmpl_basic.cssRootPath}` auch in Javascript genutzt werden können, stehen diese dort als die Variablen `snet.cssRootPath` und `snet.jsRootPath` zur Verfügung.
- Zudem kann die Funktion `snet.resolveExtPath(PATH)` dazu verwendet werden, um aus einer in TYPO3-üblichen Pfadangabe `EXT:extensionname/pfad/zur/datei.endung` das `EXT:` durch `/typo3conf/ext/` zu ersetzen.
- Falls es aufgrund anderer Skripte zu Kompatibilitätsproblemen mit der von `headjs` benutzten Variable `head` geben sollte, lässt sich diese über das [Konfigurations-Objekt](http://headjs.com/site/api/v1.00.html#configuration) auch jederzeit umbenennen (in z.B. `headjs`). Allerdings muss danach darauf geachtet werden dass alle Funktionsaufrufe von `headjs` ebenfalls umbenannt werden.
- Das grunt-Plugin `uglify` ist, falls gewünscht, auch in der Lage, mehrere Javascript-Dateien zu einer einzigen zu mergen, um damit die Seiten-Performance weiter zu steigern. Dazu lohnt sich ein Blick auf die [Dokumentation](https://github.com/gruntjs/grunt-contrib-uglify) des Tools.
