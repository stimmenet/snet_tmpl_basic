// Load as soon as possible
yepnope([
    // jQuery
    {
        test : window.jQuery,
        nope : '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js',
    },
    // The basics
    {
        load : [
            // Selectivizr / CSS3 selectors for IE / <http://selectivizr.com/>
            'ielt9!//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js',
            // HTML5Shiv / HTML5 elements for IE / <https://code.google.com/p/html5shiv/>
            'ielt9!//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js',
            // Modernizr / Javascript feature detection / development use only, for production use a custom build / <http://modernizr.com/>
            '//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js',
            // MediaCheck / run code on entry and exit from media queries / use only if website has responsive styles / <https://github.com/sparkbox/mediaCheck>
            '/typo3conf/ext/snet_tmpl_basic/Resources/Public/Scripts/JS/mediaCheck/mediaCheck.min.js'
        ]
    },

    /*

        ...PLACEHOLDER 1 : YOUR OWN CODE GOES HERE...

    */

    // we fake some loading to do the loading within our helper function in order
    {
        complete : function() {
            console.log('HALLO WELT');
            loadOnReady();
        },
    },
]);

// Helper function to make sure that jQuery is already loaded when we try to use it.
function loadOnReady() {
    // Everything that can / must wait to load till document is ready goes in here
    jQuery(document).ready(function() {
        yepnope([
            {
                // Swipebox / a simple lightbox / <http://brutaldesign.github.io/swipebox/>
                test: jQuery('a.lightbox, div.mediaelement-image > a').length,
                yep: [
                    '/typo3conf/ext/snet_tmpl_basic/Resources/Public/Scripts/JS/Swipebox/jquery.swipebox.min.js',
                    '/typo3conf/ext/snet_tmpl_basic/Resources/Public/Scripts/JS/Swipebox/enable_swipebox.js',
                    '/typo3conf/ext/snet_tmpl_basic/Resources/Public/Styles/css/vendor/Swipebox/swipebox.css'
                ]
            }
            /*

                ...PLACEHOLDER 2 : YOUR OWN CODE GOES HERE...

            */
        ]);
    });

}