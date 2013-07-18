lib.footer = COA
lib.footer {
	 10 = CONTENT
	 10 {
		 table = tt_content
		 select.where = colPos = 0
		 select.pidInList = {$snet_tmpl_basic.pid.footerPid}
		 select.languageField = sys_language_uid
	 }
 }