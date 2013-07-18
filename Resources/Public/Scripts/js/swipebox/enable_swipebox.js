jQuery(document).ready(function() {
    jQuery('a.lightbox').swipebox({
        useCSS : true,      // false will force the use of jQuery for animations
        hideBarsDelay : 0   // 0 to always show caption and action bar
    });
});