page {
	headerData.10 = TEMPLATE
	headerData.10 {
		template = FILE
		template.file = {$snet_tmpl_basic.templateRootPath}/Pages/classicTemplate.html

		workOnSubpart = DOCUMENT_HEADER

		### Titletag setzen ###
		#Definition lib.titleTag in Templates/titleTag.ts
		subparts.title-tag < lib.titleTag
	}

	10 = TEMPLATE
	10 {
		template = FILE
		template.file = {$snet_tmpl_basic.templateRootPath}/Pages/classicTemplate.html

		workOnSubpart = DOCUMENT_BODY

		### Rechte Spalte ###
		marks.col2_content < styles.content.getBorder

		### Inhalt ###
		marks.col3_content < styles.content.get
		marks.col3_content.wrap = <!--TYPO3SEARCH_begin-->|<!-- TYPO3SEARCH_end -->

		### Metamenue ###
		#Definition lib.menuMeta in Templates/menu.ts
		marks.metanav < lib.menuMeta

		### Hauptnavigation ###
		#Definition lib.menuMain in Templates/menu.ts
		marks.mainnav < lib.menuMain

		### Submenue in linker Spalte ###
		#Definition lib.menuSub in Templates/menu.ts
		marks.subnav < lib.menuSub

		### Breadcrumb-Menue ###
		#Definition lib.menuBreadcrumb in Templates/menu.ts
		marks.breadcrumb < lib.menuBreadcrumb

		### Hinweis für Benutzer mit alten IE ###
		#Definition lib.menuBreadcrumb in Templates/oldIE.ts
		marks.IE6 < lib.oldIE

		### Sprachauswahl ###
		#marks.sprachen < lib.language

		### Suchbox ###
		# //TODO: Diese Extension ist nicht installiert
		#Definition plugin.tx_macinasearchbox_pi1 in .../templates/ext/macinasearchbox/setup.ts
		#marks.suche < plugin.tx_macinasearchbox_pi1

		### Fusszeilentext einbinden ###
		marks.footer = < lib.footer

		### Headergrafik Variante als CSS-Hintergrundbild siehe weiter unten ###
		#headerData.30 < lib.headerImageCSS
		#10.marks.header_img = TEXT
		#10.marks.header_img.value =
		### Headergrafik Variante als IMG ###
		marks.header_img < lib.headerImage
		headerData.30 >
	}
}