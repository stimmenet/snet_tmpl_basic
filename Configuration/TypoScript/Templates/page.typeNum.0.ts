page = PAGE
page {
	typeNum = 0
	bodyTag = <body>

	### META ###
	meta {
		#X-UA-Compatible = IE=edge
		publisher = {$snet_tmpl_basic.meta.authorCompany} - {$snet_tmpl_basic.meta.authorName} ({$snet_tmpl_basic.meta.authorEmail})
		robots = index,follow
		revisit-after = 30 days
		google-site-verification = {$snet_tmpl_basic.meta.googleWebmastercode}
		description = {$snet_tmpl_basic.meta.defaultMetaDescription}
		description.override.field = description
		keywords = {$snet_tmpl_basic.meta.defaultMetaKeywords}
		keywords.override.field = keywords
		author = {$snet_tmpl_basic.meta.authorName}
		author.override.field = author
		page-topic = {$snet_tmpl_basic.meta.defaultMetaKeywords}
		# //TODO: this namespace is not validated by the TypoScript parser   og:image = http://www.stimme.de/stupl/pics/logo_stimmede_quadratisch.gif
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

	includeJSlibs {
		#jQuery-easing = {$snet_tmpl_basic.jsRootPath}/jquery.easing-1.3.js
		#jQuery-ui = //ajax.googleapis.com/ajax/libs/jqueryui/1.9.2/jquery-ui.min.js
		#jQuery-ui.external = 1
	}

	includeJS {
		html5shim = //html5shim.googlecode.com/svn/trunk/html5.js
	}

	### Favicon setzen ###
	shortcutIcon = {$snet_tmpl_basic.imgRootPath}/favicon.ico

	### Viewport ###
	headerData.12 = TEXT
	headerData.12.value = <meta name="viewport" content="width=device-width, initial-scale=1.0" />
}