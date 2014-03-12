tt_content.image.20.1.imageLinkWrap {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams {
		dataWrap = class="lightbox" rel="alternate"
	}
}
tt_content.image.20.1.imageLinkWrap.height =
tt_content.image.20.1.imageLinkWrap.width =

page.includeJS {
	# Lightbox plugin
	lightbox = {$snet_tmpl_basic.jsRootPath}/Swipebox/jquery.swipebox.min.js
	# Custom javascript for activation and configuration
	enable_lightbox = {$snet_tmpl_basic.jsRootPath}/Swipebox/enable_swipebox.js
}

page.includeCSS {
	# CSS for Lightbox
	lightbox = {$snet_tmpl_basic.cssRootPath}/vendor/Swipebox/swipebox.css
}