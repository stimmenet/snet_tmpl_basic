### DO NOT OVERWRITE !!! ###
# changes only allowed in constant editor! #

snet_tmpl_basic {

	# customsubcategory=basic=Basic Settings
	config  {

		# cat=SNET Basic Template/basic/001; type=string; label= SiteName
		siteName = SNET TYPO3 Mogg

		# cat=SNET Basic Template/basic/002; type=string; label= baseURL: URL nach(!) Onlinegang ohne "http://www" und ohne / am Ende - also domain.tld oder sublevel.domain.tld.
		baseURL = mogg.local

		# cat=SNET Basic Template/basic/003; type=string; label= Mittwald pNummer: pXXXXXX inkl. p am Anfang
		pnummer = p191349

		# cat=SNET Basic Template/basic/004; type=boolean; label= RealUrl aktivieren: default On
		enableRealUrl = 1

		# cat=SNET Basic Template/basic/005; type=options[all, cached, output]; label= prefixLocalAnchor: all: der Inhalt wird grundsätzlich voher verarbeitet. cached: nur, wenn die Seite in den Cache geschrieben wird.: output: nur der Ausgabecode genau bevor er ausgegeben wird.
		prefixLocalAnchor = all

		### Seitencache on/off                 ###
		# 0 = ein (Seiten werden gecached)       #
		# 1 = aus (Seiten werden nicht gecached) #
		##########################################
		# cat=SNET Basic Template/basic/006; type=boolean; label= Caching deaktivieren: default Off: bei Onlinegang Caching aktivieren - uncheck checkbox
		no_cache = 1

		# cat=SNET Basic Template/basic/007; type=boolean; label= Admin-Panel: CAdmin-Panel im FE aktivieren - default Off
		admPanel = 0

		# cat=SNET Basic Template/basic/008; type=boolean; label= Enable CSS compression and Concatenation: default Off
		cssCnC = 0

		# cat=SNET Basic Template/basic/009; type=boolean; label= Enable JS compression and Concatenation: default Off
		jsCnC = 0
	}

	# customsubcategory=meta=Meta Settings
	meta {
		# cat=SNET Basic Template/meta/001; type=string; label= Google Webmastercode
		googleWebmastercode =
	}

	# customsubcategory=misc=Other Settings
	misc {
		# cat=SNET Basic Template/misc/001; type=string; label= Analytics Property (z.B. Google Analytics)
		analyticsProperty =
	}

	# cat=SNET Basic Template/dims/002; type=int+; label= Maximale Headerbreite
	dims.headerMaxWidth = 900

	# cat=SNET Basic Template/dims/003; type=int+; label= Maximale Headerhöhe
	dims.headerMaxHeight = 100

	pid {
		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= Startpunkt des Auftritts
		rootPage = 1

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= Startpunkt des Hauptmenüs
		mainMenuStartPid = 1

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= Startpunkt des Metamenüs
		metaMenuStartPid = 3

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= News-Storage
		newsStoragePid = 11

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= News-Listview
		newsListPid = 12

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= News-Singleview
		newsSinglePid = 13

		# customsubcategory=pageuid=PID Werte
		# cat=SNET Basic Template/pageuid/0010; type=int+; label= Funktionsseite Footer
		footerPid = 9
	}

	helper.mwUrlString = mittwaldserver.info

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den Templates
	templateRootPath = EXT:snet_tmpl_basic/Resources/Private/Templates

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den Layouts
	layoutRootPath = EXT:snet_tmpl_basic/Resources/Private/Layouts

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den Partials
	partialRootPath = EXT:snet_tmpl_basic/Resources/Private/Partials

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den Stylesheets
	cssRootPath = EXT:snet_tmpl_basic/Resources/Public/Styles/dist

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den Images
	imgRootPath = EXT:snet_tmpl_basic/Resources/Public/Images/dist

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den JS-Dateien
	jsRootPath = EXT:snet_tmpl_basic/Resources/Public/Scripts/JS/dist

#	# cat=SNET Basic Template/file; type=string; label= Pfad zu den PHP-Dateien
	phpRootPath = EXT:snet_tmpl_basic/Resources/Public/Scripts/PHP

	protocol.prefix.secure = https://
	protocol.prefix.unsecure = http://

}

styles.content {
	imgtext {
		maxW = 1000
		maxWInText = 1000
		linkWrap.width = 800
		linkWrap.lightboxEnabled = 1
	}
	uploads.filesizeBytesLabels = " | KB| MB| GB"
}