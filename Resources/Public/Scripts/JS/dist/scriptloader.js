if(head.browser.ie&&head.browser.version<9&&head.load(["//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js","//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7/html5shiv.min.js"]),window.jQuery)var jQuerySrc=snet.jsRootPath+"/jqueryAlreadyLoaded.js";else var jQuerySrc="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";head.load([{jquery:jQuerySrc},{modernizr:"//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.min.js"},{mediacheck:snet.jsRootPath+"/mediaCheck.js"}]),head.ready(document,function(){head.ready(["jquery"],function(){jQuery("a.lightbox, div.mediaelement-image > a").length>0&&head.load([snet.cssRootPath+"/vendor/Swipebox/styles/swipebox.css",{swipebox:snet.jsRootPath+"/jquery.swipebox.js"}],function(){jQuery("a.lightbox, div.mediaelement-image > a").swipebox({useCSS:!0,hideBarsDelay:0})}),jQuery(".csc-mailform").length>0&&head.load([snet.cssRootPath+"/sections/form.css"])})});
//# sourceMappingURL=scriptloader.js.map