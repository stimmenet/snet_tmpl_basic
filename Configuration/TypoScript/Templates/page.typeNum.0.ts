page = PAGE
page {
	typeNum = 0
	bodyTag = <body>

	includeCSS.styles = {$snet_tmpl_basic.cssRootPath}/pages/main.css

	includeJS {
		headjs = //cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js
		headjs.external = 1
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

}