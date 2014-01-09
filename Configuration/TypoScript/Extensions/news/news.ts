plugin.tx_news {

	persistence.storagePid = {$snet_tmpl_basic.pid.newsStoragePid}
	#mvc.callDefaultActionIfActionCantBeResolved = 1

	settings {
		facebookLocale < config.locale_all
		googlePlusLocale < config.language

		defaultPid = {$snet_tmpl_basic.pid.newsListPid}
		detailPid = {$snet_tmpl_basic.pid.newsSinglePid}
		overrideFlexformSettingsIfEmpty := addToList(detailPid)
		startingpoint = {$snet_tmpl_basic.pid.newsStoragePid}
		overrideFlexformSettingsIfEmpty := addToList(startingpoint)

		orderByAllowed = author,uid,title,teaser,author,tstamp,crdate,datetime,categories,title
		cropMaxCharacters = 270

		list {
			media.image {
				maxWidth = 280
				maxHeight = 140c
			}

			paginate {
				itemsPerPage = 6
				insertAbove = FALSE
				insertBelow = TRUE
			}
			rss {
				channel {
					title = {$snet_tmpl_basic.config.siteName}
					description = {$glb.lang.news.rss.description}
					language < config.locale_all
					copyright = {$snet_tmpl_basic.meta.authorCompany}
					generator = {$snet_tmpl_basic.meta.authorCompany}
					link < config.baseUrl
					category = {$glb.lang.news.rss.category}
				}
			}
		}

		detail {
			media.image {
				lightbox = alternate
				maxWidth = 900
				maxHeight = 300c
			}
		}
	}

	view {
		defaultPid = {$snet_tmpl_basic.pid.newsListPid}
		#templateRootPath =
		#partialRootPath =
		#layoutRootPath =
	}
}