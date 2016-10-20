page = PAGE
page {
	typeNum = 0
	bodyTag = <body>

	includeCSS.styles = {$snet_tmpl_basic.cssRootPath}/pages/main.css

	includeJS {
		headjs = {$snet_tmpl_basic.jsRootPath}/head.js
		headjs.excludeFromConcatenation = 1
		headjs.disableCompression = 1
		headjs.forceOnTop = 1
		## Pathname Helper Values and function
		headjs.allWrap = <script>if(!window.snet){window.snet = {};}snet.resolveExtPath=function(path){return path.replace('EXT:','/typo3conf/ext/');};snet.jsRootPath=snet.resolveExtPath('{$snet_tmpl_basic.jsRootPath}');snet.cssRootPath=snet.resolveExtPath('{$snet_tmpl_basic.cssRootPath}');</script> |
		scriptloader = {$snet_tmpl_basic.jsRootPath}/scriptloader.js
	}

	### Favicon setzen ###
	shortcutIcon = {$snet_tmpl_basic.imgRootPath}/favicon.ico

	### Viewport ###
	headerData.12 = TEXT
	headerData.12.value = <meta name="viewport" content="width=device-width, initial-scale=1.0" />

	### canonical tag ###
	headerData.19 = TEXT
	headerData.19 {
	    # Aktuelle Seite
	    typolink.parameter.data = TSFE:id
	    # Gib nur die URL zurück
	    typolink.returnLast = url
	    # Erstelle eine absolute URL
	    typolink.forceAbsoluteUrl = 1
	    # Fügt alle GET-Parameter hinzu, wie z.B. tt_news, L und auch cHash
	    typolink.addQueryString = 1
	    typolink.addQueryString.method = GET
	    # Schliesst bestimmte Parameter aus, z.B. cHash oder auch backPid von tt_news
	    typolink.addQueryString.exclude = cHash,backPid,tx_news_pi1[overwriteDemand][categories],tx_form_form[action]
	    # Wrappen und mit dem richtigen Tag einbinden.
	    # Das Leerzeichen nach dem öffnenden Tag bitte entfernen
	    wrap = <link rel="canonical" href="|" />
	}

}