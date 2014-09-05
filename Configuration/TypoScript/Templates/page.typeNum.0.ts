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

	includeJS {
		headjs = //cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js
		## Pathname Helper Values and function
		headjs.allWrap = <script>if(!window.snet){window.snet = {};}snet.resolveExtPath=function(path){return path.replace('EXT:','/typo3conf/ext/');};snet.jsRootPath=snet.resolveExtPath('{$snet_tmpl_basic.jsRootPath}');snet.cssRootPath=snet.resolveExtPath('{$snet_tmpl_basic.cssRootPath}');</script> |
		scriptloader = {$snet_tmpl_basic.jsRootPath}/scriptloader.js
	}

	### Favicon setzen ###
	shortcutIcon = {$snet_tmpl_basic.imgRootPath}/favicon.ico

	### Viewport ###
	headerData.12 = TEXT
	headerData.12.value = <meta name="viewport" content="width=device-width, initial-scale=1.0" />

}