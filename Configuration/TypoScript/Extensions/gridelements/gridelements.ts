#tt_content.gridelements_pi1.10 = < lib.stdheader

tt_content.gridelements_pi1.20.10.setup {
	snettmplbasic_twocol < lib.gridelements.defaultGridSetup
	snettmplbasic_twocol {
		cObject = FLUIDTEMPLATE
		cObject.file = {$snet_tmpl_basic.templateRootPath}/Extensions/Gridelements/TwoCol.html
		cObject.variables.headline < lib.stdheader
	}
}

tt_content.gridelements_pi1.20.10.setup {
	snettmplbasic_threecol < lib.gridelements.defaultGridSetup
	snettmplbasic_threecol {
		cObject = FLUIDTEMPLATE
		cObject.file = {$snet_tmpl_basic.templateRootPath}/Extensions/Gridelements/ThreeCol.html
		cObject.variables.headline < lib.stdheader
	}
}