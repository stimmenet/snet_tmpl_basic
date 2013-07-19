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
        wrap = <ul class="navlist navlist-level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_first">| |*| <li id="item_{elementUid}" class=" navlist-item navlist-item-level1 no">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_last">|
            allWrap = <li class="navlist-item navlist-item-level1 no no_first">| |*| <li class=" navlist-item navlist-item-level1 no">| |*| <li class="navlist-item navlist-item-level1 no no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_last">|
            allWrap = <li class="navlist-item navlist-item-level1 act act_first">| |*| <li class="navlist-item navlist-item-level1 act">| |*| <li class="navlist-item navlist-item-level1 act act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_last">|
            allWrap = <li class="navlist-item navlist-item-level1 cur cur_first">| |*| <li class="navlist-item navlist-item-level1 cur">| |*| <li class="navlist-item navlist-item-level1 cur cur_last">|
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
        wrap = <ul class="navlist navlist-level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_last">|
            allWrap = <li class="navlist-item navlist-item-level1 no no_first">| |*| <li class="navlist-item navlist-item-level1 no">| |*| <li class="navlist-item navlist-item-level1 no no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_last">|
            allWrap = <li class="navlist-item navlist-item-level1 act act_first">| |*| <li class="navlist-item navlist-item-level1 act">| |*| <li class="navlist-item navlist-item-level1 act act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_last">|
            allWrap = <li class="navlist-item navlist-item-level1 cur cur_first">| |*| <li class="navlist-item navlist-item-level1 cur">| |*| <li class="navlist-item navlist-item-level1 cur cur_last">|
            wrapItemAndSub = |</li>
        }
    }

    2 < .1
    2 = TMENU
    2.noBlur = 1
    2 {
        #expAll = 1
        wrap = <ul class="navlist navlist-level2">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level2 no1 no_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 no1">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 no1 no_last">|
            allWrap = <li class="navlist-item navlist-item-level2 no1 no_first">| |*| <li class="navlist-item navlist-item-level2 no1">| |*| <li class="navlist-item navlist-item-level2 no1 no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level2 act1 act_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 act1">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 act1 act_last">|
            allWrap = <li class="navlist-item navlist-item-level2 act1 act_first">| |*| <li class="navlist-item navlist-item-level2 act1">| |*| <li class="navlist-item navlist-item-level2 act1 act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level2 cur1 cur_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 cur1">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level2 cur1 cur_last">|
            allWrap = <li class="navlist-item navlist-item-level2 cur1 cur_first">| |*| <li class="navlist-item navlist-item-level2 cur1">| |*| <li class="navlist-item navlist-item-level2 cur1 cur_last">|
            wrapItemAndSub = |</li>
        }
    }

    3 < .1
    3 = TMENU
    3.noBlur = 1
    3 {
        #expAll = 1
        wrap = <ul class="navlist navlist-level3">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level3 no2 no_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 no2">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 no2 no_last">|
            allWrap = <li class="navlist-item navlist-item-level3 no2 no_first">| |*| <li class="navlist-item navlist-item-level3 no2">| |*| <li class="navlist-item navlist-item-level3 no2 no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level3 act2 act_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 act2">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 act2 act_last">|
            allWrap = <li class="navlist-item navlist-item-level3 act2 act_first">| |*| <li class="navlist-item navlist-item-level3 act2">| |*| <li class="navlist-item navlist-item-level3 act2 act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level3 cur2 cur_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 cur2">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level3 cur2 cur_last">|
            allWrap = <li class="navlist-item navlist-item-level3 cur2 cur_first">| |*| <li class="navlist-item navlist-item-level3 cur2">| |*| <li class="navlist-item navlist-item-level3 cur2 cur_last">|
            wrapItemAndSub = |</li>
        }
    }

    4 < .1
    4 = TMENU
    4.noBlur = 1
    4 {
        #expAll = 1
        wrap = <ul class="navlist navlist-level4">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level4 no3 no_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 no3">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 no3 no_last">|
            allWrap = <li class="navlist-item navlist-item-level4 no3 no_first">| |*| <li class="navlist-item navlist-item-level4 no3">| |*| <li class="navlist-item navlist-item-level4 no3 no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level4 act3 act_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 act3">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 act3 act_last">|
            allWrap = <li class="navlist-item navlist-item-level4 act3 act_first">| |*| <li class="navlist-item navlist-item-level4 act3">| |*| <li class="navlist-item navlist-item-level4 act3 act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level4 cur3 cur_first">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 cur3">| |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level4 cur3 cur_last">|
            allWrap = <li class="navlist-item navlist-item-level4 cur3 cur_first">| |*| <li class="navlist-item navlist-item-level4 cur3">| |*| <li class="navlist-item navlist-item-level4 cur3 cur_last">|
            wrapItemAndSub = |</li>
        }
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
        wrap = <ul class="navlist navlist-level1">|</ul>
        NO = 1
        NO {
            ATagParams = class="no"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 no no_last">|
            allWrap = <li class="navlist-item navlist-item-level1 no no_first">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 no">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 no no_last">|
            wrapItemAndSub = |</li>
        }
        ACT = 1
        ACT {
            ATagParams = class="act"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 act act_last">|
            allWrap = <li class="navlist-item navlist-item-level1 act act_first">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 act">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 act act_last">|
            wrapItemAndSub = |</li>
        }
        CUR = 1
        CUR {
            ATagParams = class="cur"
            ATagTitle.field = subtitle//title
            #subst_elementUid = 1
            #allWrap = <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_first">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur">|<span>&Iota;</span> |*| <li id="item_{elementUid}" class="navlist-item navlist-item-level1 cur cur_last">|
            allWrap = <li class="navlist-item navlist-item-level1 cur cur_first">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 cur">|<span>&Iota;</span> |*| <li class="navlist-item navlist-item-level1 cur cur_last">|
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

    stdWrap.prepend = TEXT
    stdWrap.prepend.value = {$glb.lang.menuBreadcrumb.prepend}

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