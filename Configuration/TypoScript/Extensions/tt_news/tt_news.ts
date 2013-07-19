### tt_news ###
################

page.includeCSS.tt_news = {$snet_tmpl_basic.cssRootPath}/Extensions/tt_news/tt_news.css

plugin.tt_news {
	#enableConfigValidation = 0
    #SysFolder mit Newsmeldungen
    pid_list = {$snet_tmpl_basic.pid.newsStoragePid}

    #Seite mit der Singleansicht
    singlePid = {$snet_tmpl_basic.pid.newsSinglePid}

    limit = 10
    latestLimit = 3

	sys_language_mode = strict

	allowCaching = 1

    defaultCode = LIST
    templateFile = {$snet_tmpl_basic.templateRootPath}/Extensions/tt_news/tt_newsTemplate.html

    ### Datum in Newsansicht neu formatieren ###
    displaySingle.date_stdWrap.strftime = %A, %e. %B %Y
    displayList.date_stdWrap.strftime = %e. %B %Y
    displayList.time_stdWrap.strftime = %H:%M

    ### Soll in der Listansicht HTML-Code angezeigt werden, bitte folgende Option auf 0 setzen
    displayList.subheader_stdWrap.stripHtml = 1

    _LOCAL_LANG.de {
        more = {$glb.lang.tt_news.more}
        backToList = {$glb.lang.tt_news.back}
    }
}