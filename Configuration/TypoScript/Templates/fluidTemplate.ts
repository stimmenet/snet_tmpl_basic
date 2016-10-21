lib.templateName = COA
lib.templateName {
	10 = TEXT
	10 {
		cObject = TEXT
		cObject {
			data = levelfield:-1, backend_layout_next_level, slide
			override.field = backend_layout
			required = 1
			stdWrap.replacement {
				10 {
					search = pagets__
					replace =
				}
				20 {
					search = #^snettmpl\w+_(.*)$#i
					replace = \1
					useRegExp = 1
				}
			}
		}
		ifEmpty = Default
		case = ucfirst
	}

	20 < .10
	20.case = lower
}

page {
	10 = FLUIDTEMPLATE
	10 {

		templateName < lib.templateName.10

	 	templateRootPaths  {
	 		10 = {$snet_tmpl_basic.templateRootPath}/Pages/
	 	}
		layoutRootPaths {
			10 = {$snet_tmpl_basic.layoutRootPath}/
		}
		partialRootPaths {
			10 = {$snet_tmpl_basic.partialRootPath}/
		}

		variables {
			metanav < lib.menuMeta
			mainnav < lib.menuMain
			subnav < lib.menuSub
			breadcrumb < lib.menuBreadcrumb
			IE6advice < lib.oldIE
			footer < lib.footer
			header_img < lib.headerImage
			logo < lib.logo
			templateName < lib.templateName.20

			content-main <  styles.content.get
            content-main.select.where = colPos = 0

            content-complement <  styles.content.get
            content-complement.select.where = colPos = 3
		}

		settings {
			analyticsProperty = {$snet_tmpl_basic.misc.analyticsProperty}
		}
	}
}

