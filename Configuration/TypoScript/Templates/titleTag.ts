lib.titleTag = COA
lib.titleTag {
	# default append for all items
	5 = TEXT
	5.value (


	)

	# page title
	10 = TEXT
	10.append < .5
	10.data = page:subtitle//page:title
	10.stdWrap.noTrimWrap = || {$snet_tmpl_basic.meta.titleTagApendix}|
	10.wrap = <title>|</title>
	10.required = 1

}