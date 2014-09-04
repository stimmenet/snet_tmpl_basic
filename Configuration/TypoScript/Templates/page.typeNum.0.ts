page = PAGE
page {
	typeNum = 0
	bodyTag = <body>

	### META ###
	meta {
		google-site-verification = {$snet_tmpl_basic.meta.googleWebmastercode}
	}

	includeCSS.styles = {$snet_tmpl_basic.cssRootPath}/pages/main.css

	javascriptLibs {
		jQuery = 1
		jQuery {
			//TODO: fix-version not latest
			version = latest
			source = google
			noConflict = 0
			#noConflict.namespace = jQuery
		}
	}

	includeJS {
		yepnope = //cdnjs.cloudflare.com/ajax/libs/yepnope/1.5.4/yepnope.min.js
		scriptloader = {$snet_tmpl_basic.jsRootPath}/scriptloader.js
	}

	### Favicon setzen ###
	shortcutIcon = {$snet_tmpl_basic.imgRootPath}/favicon.ico

	### Viewport ###
	headerData.12 = TEXT
	headerData.12.value = <meta name="viewport" content="width=device-width, initial-scale=1.0" />
}