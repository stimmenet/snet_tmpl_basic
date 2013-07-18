### Komprimierung fuer den Editor aktivieren ##
RTE.default {
	gzip = 1
	gzipFileCache = 1
}

### Neue Seiten Benutzergruppe 1 (All BE Users) zuweisen ###
TCEMAIN.permissions.groupid = 1

### Standardrechte setzen ###
TCEMAIN.permissions.group = show, editcontent, edit, new, delete
TCEMAIN.permissions.everybody = show


### Überschriften definieren ###
TCEFORM.tt_content.header_layout {
    altLabels {
        0 = h1 - Seitenüberschrift
        1 =
        2 = h2 - Themenüberschrift
        3 = h3 - Absatzüberschrift
        4 =
        5 =
       }
   removeItems = 1,4,5
}

### Anpassung Dateiverweise ###
TCEFORM.tt_content.layout.types.uploads {
	removeItems = 3
    	altLabels.0 = Normal
	altLabels.1 = Icon
	altLabels.2 = Vorschau
}

### Bezeichnung anpassen ###
TCEFORM.tt_content.spaceBefore.label.default = Abstand vor (0-50)
TCEFORM.tt_content.spaceAfter.label.default = Abstand nach (0-50)
TCEFORM.tt_content.spaceBefore.label.de = Abstand vor (0-50)
TCEFORM.tt_content.spaceAfter.label.de = Abstand nach (0-50)
TCEFORM.pages.subtitle.label = Title-Tag (Untertitel)

### Alternierende Farben in List-Ansicht ###
mod.web_list.alternateBgColors = 1

### Content element wizard abschalten ###
#mod.web_layout.disableNewContentElementWizard=1

### Gridelements-CE in Modul Liste ausblenden ###
TCEFORM.tt_content.tx_gridelements_backend_layout.removeChildrenFromList = 1

### Dateigroesse fuer Upload anpassen (20MB)
TCEFORM.tt_content.image.config.max_size = 20480
TCEFORM.tt_content.media.config.max_size = 20480
TCEFORM.tt_content.media.config.maxitems = 100
TCEFORM.tt_content.multimedia.config.max_size = 20480
TCEFORM.tt_content.multimedia.config.maxitems = 100

### Quelle fuer Backend-Layouts festlegen
TCEFORM.pages.backend_layout.PAGE_TSCONFIG_ID = 16
TCEFORM.pages.backend_layout_next_level.PAGE_TSCONFIG_ID = 16