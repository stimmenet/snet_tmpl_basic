jQuery(document).ready(function() {
    jQuery('a.lightbox, div.mediaelement-image > a').swipebox({
        useCSS : true,      // false will force the use of jQuery for animations
        hideBarsDelay : 0   // 0 to always show caption and action bar
    });
});