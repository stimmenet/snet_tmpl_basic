### Headergrafik ###

# Variante als CSS-Hintergrundbild
lib.headerImageCSS = COA
lib.headerImageCSS {
      10 = TEXT
      10.value = <style type="text/css">
      15 = TEXT
      15.value = #header {background: url(
      20 = IMG_RESOURCE
      20.file.import = uploads/media/
      20.file.import.data = levelmedia:-1, slide
      20.file.import.listNum = 0
      20.file.width = {$snet_tmpl_basic.dims.headerMaxWidth}
      20.file.height = {$snet_tmpl_basic.dims.headerMaxHeight}
      25 = TEXT
      25.value = ) no-repeat center;}
      30 = TEXT
      30.value = </style>
}

# Variante als IMG
lib.headerImage = IMAGE
lib.headerImage {
	file {
		import = uploads/media/
		import.data = levelmedia:-1, slide
		import.listNum = 0
		width = {$snet_tmpl_basic.dims.headerMaxWidth}
		height = {$snet_tmpl_basic.dims.headerMaxHeight}
	}
	altText = {$snet_tmpl_basic.config.siteName}
	titleText = {$snet_tmpl_basic.config.siteName}
}