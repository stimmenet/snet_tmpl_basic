page {
	10 = FLUIDTEMPLATE
	10 {
	 	file = {$snet_tmpl_basic.templateRootPath}/Pages/fluidTemplate.html
		layoutRootPath = {$snet_tmpl_basic.layoutRootPath}/
		partialRootPath = {$snet_tmpl_basic.partialRootPath}/

		variables {
			metanav < lib.menuMeta
			mainnav < lib.menuMain
			subnav < lib.menuSub
			breadcrumb < lib.menuBreadcrumb
			IE6advice < lib.oldIE
			footer < lib.footer
			header_img < lib.headerImage

			content-main <  styles.content.get
            content-main.select.where = colPos = 0

            content-complement <  styles.content.get
            content-complement.select.where = colPos = 3
		}
	}
}

