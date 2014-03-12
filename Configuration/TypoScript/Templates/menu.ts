lib.menuMain = HMENU
lib.menuMain {
    special = directory

    #Start für menuMain festlegen
    special.value = {$snet_tmpl_basic.pid.mainMenuStartPid}

    #menuMeta und newSinglePid ausblenden
    excludeUidList = {$snet_tmpl_basic.pid.metaMenuStartPid},{$snet_tmpl_basic.pid.newsSinglePid}


    1 = TMENU
    1.noBlur = 1
    1 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li class="nav-list-item no first">| |*| <li class="nav-list-item no">| |*| <li class="nav-list-item no last">|
            allWrap = <li class="nav-list-item">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li class="nav-list-item act act_first">| |*| <li class="nav-list-item act">| |*| <li class="nav-list-item act act_last">|
            allWrap = <li class="nav-list-item nav-list-item--act">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li class="nav-list-item cur cur_first">| |*| <li id="item_{elementUid}" class="nav-list-item cur">| |*| <li id="item_{elementUid}" class="nav-list-item cur cur_last">|
            allWrap = <li class="nav-list-item nav-list-item--cur">|
            wrapItemAndSub = |</li>
        }
    }

    #2 < .1
    #3 < .1
    #4 < .1
}


lib.menuSub = HMENU
lib.menuSub {
    entryLevel = 1

    #menuMeta und newSinglePid ausblenden
    excludeUidList = {$snet_tmpl_basic.pid.metaMenuStartPid},{$snet_tmpl_basic.pid.newsSinglePid}

    1 = TMENU
    1.noBlur = 1
    1 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item no no_first">| |*| <li id="item_{elementUid}" class="nav-list-item no">| |*| <li id="item_{elementUid}" class="nav-list-item no no_last">|
            allWrap = <li class="nav-list-item">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item act act_first">| |*| <li id="item_{elementUid}" class="nav-list-item act">| |*| <li id="item_{elementUid}" class="nav-list-item act act_last">|
            allWrap = <li class="nav-list-item nav-list-item--act">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item cur cur_first">| |*| <li id="item_{elementUid}" class="nav-list-item cur">| |*| <li id="item_{elementUid}" class="nav-list-item cur cur_last">|
            allWrap = <li class="nav-list-item nav-list-item--cur">|
            wrapItemAndSub = |</li>
        }
    }

    2 < .1
    2 = TMENU
    2.noBlur = 1
    2 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level2">|</ul>
    }

    3 < .1
    3 = TMENU
    3.noBlur = 1
    3 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level3">|</ul>
    }

    4 < .1
    4 = TMENU
    4.noBlur = 1
    4 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level4">|</ul>
    }
}

### Fuer Metanavigation Submenue eine Ebene tiefer beginnen
[PIDupinRootline = {$snet_tmpl_basic.pid.metaMenuStartPid}]
    lib.menuSub.entryLevel = 2
[global]


lib.menuMeta = HMENU
lib.menuMeta {
    special = directory
    special.value = {$snet_tmpl_basic.pid.metaMenuStartPid}

    1 = TMENU
    1.noBlur = 1
    1 {
        #expAll = 1
        wrap = <ul class="nav-list nav-list--level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item no no_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item no">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item no no_last">|
            allWrap = <li class="nav-list-item">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item act act_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item act">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item act act_last">|
            allWrap = <li class="nav-list-item nav-list-item--act">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="nav-list-item cur cur_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item cur">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="nav-list-item cur cur_last">|
            allWrap = <li class="nav-list-item nav-list-item--cur">|
            wrapItemAndSub = |</li>
        }
    }
}

lib.menuBreadcrumb = HMENU
lib.menuBreadcrumb {
    special = rootline

    # zeige komplette rootline an
    special.range = 1|-1
    # Variation: Link nur auf die uebergeordnete Seite
    #special.range = -2|-2

    wrap = {$glb.lang.menuBreadcrumb.prepend}|

    #stdWrap.prepend = TEXT
    #stdWrap.prepend.value = {$glb.lang.menuBreadcrumb.prepend}

    1 = TMENU
    1.target = _top
    1.noBlur = 1
    1.NO = 1
    1.NO {
        stdWrap.htmlSpecialChars = 1
        ATagTitle.field = subtitle//title
        ATagTitle.stdWrap.noTrimWrap = |{$glb.lang.menuBreadcrumb.ATagTitle} ||

        # Layout 1: Seite 1 > Seite 2 > Seite 3
        linkWrap = |&nbsp;>&nbsp;|*||*| |
        #  Layout 2: Seite 1 | Seite 2 | Seite 3
        #linkWrap = |&nbsp;&raquo;&nbsp;|*||*| |

        doNotLinkIt = |*| 0 |*| 1
    }
}


### Sprachen ###
lib.language = HMENU
lib.language {
  special = language
  # Reihenfolge und Auswahl der Sprachen im Menü
  special.value = 0,1
  special.normalWhenNoLanguage = 0
  wrap = <div id="language">{$glb.lang.LanguageLabel}<ul id="language_content">|</ul></div>
  1 = TMENU
  1 {
  noBlur = 1
  # Standard Sprachen
  NO = 1
  NO {
    linkWrap (
      <li><img src="fileadmin/default/images/layout/flags/de.gif" title="de" alt="de">&nbsp;&nbsp;|</li> ||
      <li><img src="fileadmin/default/images/layout/flags/gb.gif" title="en" alt="en">&nbsp;&nbsp;|</li>
    )
    # Standard-Titel für den Link wäre Seitenttitel
    # => anderer Text als Link-Text (Optionsschift)
    stdWrap.override = Deutsch || English
    # Standardmäßige Verlinkung des Menüs ausschalten
    # Da diese sonstige GET-Parameter nicht enthält
    doNotLinkIt = 1
    # Nun wird der Link mit den aktuellen GET-Parametern neu aufgebaut
    stdWrap.typolink.parameter.data = page:uid
    stdWrap.typolink.additionalParams = &L=0 || &L=1
    stdWrap.typolink.addQueryString = 1
    stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
    stdWrap.typolink.addQueryString.method = GET
    stdWrap.typolink.useCacheHash = 1
    stdWrap.typolink.no_cache = 0
  }
  # Aktive Sprache
  ACT < .NO
  ACT.linkWrap (
      <li class="active"><img src="fileadmin/default/images/layout/flags/de.gif" title="de" alt="de">&nbsp;&nbsp;|</li> ||
      <li class="active"><img src="fileadmin/default/images/layout/flags/gb.gif" title="en" alt="en">&nbsp;&nbsp;|</li>
    )
  # NO + Übersetzung nicht vorhanden
  USERDEF1 = 1
  USERDEF1.allWrap (
      <li class="noTranslation"><img src="fileadmin/default/images/layout/flags/de_grey.gif" title="de" alt="de">&nbsp;&nbsp;Deutsch</li> ||
      <li class="noTranslation"><img src="fileadmin/default/images/layout/flags/gb_grey.gif" title="en" alt="en">&nbsp;&nbsp;English</li>
    )
  USERDEF1.doNotLinkIt = 1
  USERDEF1.doNotShowLink = 1

  # ACT + Übersetzung nicht vorhanden
  USERDEF2 = 1
  USERDEF2.allWrap (
      <li class="noTranslation"><img src="fileadmin/default/images/layout/flags/de_grey.gif" title="de" alt="de">&nbsp;&nbsp;Deutsch</li> ||
      <li class="noTranslation"><img src="fileadmin/default/images/layout/flags/gb_grey.gif" title="en" alt="en">&nbsp;&nbsp;English</li>
    )
  USERDEF2.doNotLinkIt = 1
  USERDEF2.doNotShowLink = 1
  }
}