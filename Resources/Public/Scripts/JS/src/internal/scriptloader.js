// Headjs is used as resource loader, for full documentation on how to use, see <http://headjs.com/site/api/v1.00.html>

// Load polyfill scripts for internet Explorer 8 and below
if (head.browser.ie && head.browser.version < 9) {
    head.load([
        // Selectivizr / CSS3 selectors for IE / <http://selectivizr.com/>
        '//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js',
        // HTML5Shiv / HTML5 elements for IE / <https://code.google.com/p/html5shiv/>
        '//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js'
    ]);
}

// Load as soon as possible and execute in order
head.load([
    // jQuery / Javascript library / <http://jquery.com/>
    { jquery:       '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js' },
    // Modernizr / Javascript feature detection / development use only, for production use a custom build / <http://modernizr.com/>
    { modernizr:    '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js' },
    // MediaCheck / run code on entry and exit from media queries / use only if website has responsive styles / <https://github.com/sparkbox/mediaCheck>
    { mediacheck:   snet.jsRootPath + '/mediaCheck.js'}
]);

// Load and execute after document is ready
head.ready(document, function(){
    head.ready(["jquery"], function(){
        // Swipebox / a simple lightbox / <http://brutaldesign.github.io/swipebox/>
        if (jQuery('a.lightbox, div.mediaelement-image > a').length > 0) {
            head.load([
                snet.cssRootPath + '/vendor/Swipebox/styles/swipebox.css',
                { swipebox: snet.jsRootPath + '/jquery.swipebox.js' },
            ], function() {
                jQuery('a.lightbox, div.mediaelement-image > a').swipebox({
                    useCSS : true,      // false will force the use of jQuery for animations
                    hideBarsDelay : 0   // 0 to always show caption and action bar
                });
            });
        }
        if (jQuery('.csc-mailform').length > 0) {
            head.load([
                snet.cssRootPath + '/sections/form.css'
            ]);
        }
    });
});