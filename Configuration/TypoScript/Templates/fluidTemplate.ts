lib.test = TEXT
lib.test.value = Hello Fluidworld

page {
	10 = FLUIDTEMPLATE
	10 {
	 	file = {$snet_tmpl_basic.templateRootPath}/Pages/fluidTemplate.html
		layoutRootPath = {$snet_tmpl_basic.layoutRootPath}/
		partialRootPath = {$snet_tmpl_basic.partialRootPath}/

		variables {
			testValue < lib.test
			col3_content < styles.content.get
			metanav < lib.menuMeta
			mainnav < lib.menuMain
			subnav < lib.menuSub
			breadcrumb < lib.menuBreadcrumb
			IE6advice < lib.oldIE
			footer < lib.footer
			header_img < lib.headerImage
		}
	}
}

