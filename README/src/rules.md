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
    * zu testen: Jeder CSS-"Befehl" sollte aus nicht mehr als 3 einzelnen Selektoren bestehen (Pseudo-Klassen NICHT inbegriffen)
            
            .nav--main .nav-list--level1 > .nav-list-item
    * Widerspricht nicht dem Einsatz von Bootstrap oder anderen Frameworks, diese sind wie bisher als globale Klassen ohne BEM zu benutzen
    * Hilfsklassen (Wrapper- oder Container-Klassen) werden innerhalb der Block-Klasse als Element-Klasse "blockname-frame" aufgeführt, können aber in Unter-Element-Klassen aus semantischen Gründen aus dem BEM-String weggelassen werden
    
            .content 
                .content-frame --> Hilfsklasse für Breitenangaben/Margins
                    .content-main
                    .content-additional

## Bilder Namensgebung ##

* Kategorisierung
    * Icons
        * Social Media Icons
        * Kontakt Icons
        * Language Icons
        * Pfeile?
    * Hintergrund
    * weitere Kategorien?
* Benennung mit Präfix
    * icon_ / icon-
    * bg_ / bg-
    * arrow_ / arrow- ?