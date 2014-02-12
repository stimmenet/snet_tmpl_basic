page = PAGE
page {
	typeNum = 0
	bodyTag = <body>

	includeCSS.styles = {$snet_tmpl_basic.cssRootPath}/Pages/styles_basic.css

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

	includeJSlibs {
		#jQuery-easing = {$snet_tmpl_basic.jsRootPath}/jquery.easing-1.3.js
		#jQuery-ui = //ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js
		#jQuery-ui.external = 1
	}
	
	includeJS {
		html5shim = http://html5shim.googlecode.com/svn/trunk/html5.js
	}

	### Favicon setzen ###
	shortcutIcon = {$snet_tmpl_basic.imgRootPath}/favicon.ico
	
	### Viewport ###
	headerData.12 = TEXT
	headerData.12.value = <meta name="viewport" content="width=device-width, initial-scale=1.0" />
}