!function(window,document,$,undefined){$.swipebox=function(elem,options){var ui,$elem,defaults={useCSS:!0,useSVG:!0,initialIndexOnArray:0,closeBySwipe:!0,hideBarsOnMobile:!0,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"CCCCCC",beforeOpen:null,afterOpen:null,afterClose:null,loopAtEnd:!1},plugin=this,elements=[],selector=elem.selector,$selector=$(selector),isMobile=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),isTouch=null!==isMobile||document.createTouch!==undefined||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,supportSVG=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,winWidth=window.innerWidth?window.innerWidth:$(window).width(),winHeight=window.innerHeight?window.innerHeight:$(window).height(),currentX=0,html='<div id="swipebox-overlay">                    <div id="swipebox-slider"></div>                    <div id="swipebox-caption"></div>                    <div id="swipebox-action">                        <a id="swipebox-close"></a>                        <a id="swipebox-prev"></a>                        <a id="swipebox-next"></a>                    </div>            </div>';plugin.settings={},$.swipebox.close=function(){ui.closeSlide()},$.swipebox.extend=function(){return ui},plugin.init=function(){plugin.settings=$.extend({},defaults,options),$.isArray(elem)?(elements=elem,ui.target=$(window),ui.init(plugin.settings.initialIndexOnArray)):$(document).on("click",selector,function(event){if("slide current"===event.target.parentNode.className)return!1;$.isArray(elem)||(ui.destroy(),$elem=$(selector),ui.actions()),elements=[];var index,relType,relVal;relVal||(relType="data-rel",relVal=$(this).attr(relType)),relVal||(relType="rel",relVal=$(this).attr(relType)),$elem=relVal&&""!==relVal&&"nofollow"!==relVal?$selector.filter("["+relType+'="'+relVal+'"]'):$(selector),$elem.each(function(){var title=null,href=null;$(this).attr("title")&&(title=$(this).attr("title")),$(this).attr("href")&&(href=$(this).attr("href")),elements.push({href:href,title:title})}),index=$elem.index($(this)),event.preventDefault(),event.stopPropagation(),ui.target=$(event.target),ui.init(index)})},ui={init:function(index){plugin.settings.beforeOpen&&plugin.settings.beforeOpen(),this.target.trigger("swipebox-start"),$.swipebox.isOpen=!0,this.build(),this.openSlide(index),this.openMedia(index),this.preloadMedia(index+1),this.preloadMedia(index-1),plugin.settings.afterOpen&&plugin.settings.afterOpen()},build:function(){var bg,$this=this;$("body").append(html),$this.doCssTrans()&&($("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease","-moz-transition":"-moz-transform 0.4s ease","-o-transition":"-o-transform 0.4s ease","-khtml-transition":"-khtml-transform 0.4s ease","-ms-transition":"-ms-transform 0.4s ease",transition:"transform 0.4s ease"}),$("#swipebox-overlay").css({"-webkit-transition":"opacity 1s ease","-moz-transition":"opacity 1s ease","-o-transition":"opacity 1s ease","-khtml-transition":"opacity 1s ease","-ms-transition":"opacity 1s ease",transition:"opacity 1s ease"}),$("#swipebox-action, #swipebox-caption").css({"-webkit-transition":"0.5s","-moz-transition":"0.5s","-o-transition":"0.5s","-khtml-transition":"0.5s","-ms-transition":"0.5s",transition:"0.5s"})),supportSVG&&plugin.settings.useSVG===!0&&(bg=$("#swipebox-action #swipebox-close").css("background-image"),bg=bg.replace("png","svg"),$("#swipebox-action #swipebox-prev,#swipebox-action #swipebox-next,#swipebox-action #swipebox-close").css({"background-image":bg})),isMobile&&plugin.settings.hideBarsOnMobile===!0&&$("#swipebox-action, #swipebox-caption").hide(),$.each(elements,function(){$("#swipebox-slider").append('<div class="slide"></div>')}),$this.setDim(),$this.actions(),isTouch&&$this.gesture(),$this.keyboard(),$this.animBars(),$this.resize()},setDim:function(){var width,height,sliderCss={};"onorientationchange"in window?window.addEventListener("orientationchange",function(){0===window.orientation?(width=winWidth,height=winHeight):90!==window.orientation&&-90!==window.orientation||(width=winHeight,height=winWidth)},!1):(width=window.innerWidth?window.innerWidth:$(window).width(),height=window.innerHeight?window.innerHeight:$(window).height()),sliderCss={width:width,height:height},$("#swipebox-overlay").css(sliderCss)},resize:function(){var $this=this;$(window).resize(function(){$this.setDim()}).resize()},supportTransition:function(){var i,prefixes="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(i=0;i<prefixes.length;i++)if(document.createElement("div").style[prefixes[i]]!==undefined)return prefixes[i];return!1},doCssTrans:function(){return plugin.settings.useCSS&&this.supportTransition()?!0:void 0},gesture:function(){var $this=this,hDistance=null,vDistance=null,hDistanceLast=null,vDistanceLast=null,vSwipe=!1,hSwipe=!1,hSwipMinDistance=10,vSwipMinDistance=50,startCoords={},endCoords={},bars=$("#swipebox-caption, #swipebox-action"),slider=$("#swipebox-slider");bars.addClass("visible-bars"),$this.setTimeout(),$("body").bind("touchstart",function(event){return $(this).addClass("touching"),vSwipe=!1,hSwipe=!1,endCoords=event.originalEvent.targetTouches[0],startCoords.pageX=event.originalEvent.targetTouches[0].pageX,startCoords.pageY=event.originalEvent.targetTouches[0].pageY,$("#swipebox-slider").css({"-webkit-transform":"translateX("+currentX+"%)","-moz-transform":"translateX("+currentX+"%)","-o-transform":"translateX("+currentX+"%)","-khtml-transform":"translateX("+currentX+"%)","-ms-transform":"translateX("+currentX+"%)",transform:"translateX("+currentX+"%)"}),$(".touching").bind("touchmove",function(event){if(event.preventDefault(),event.stopPropagation(),endCoords=event.originalEvent.targetTouches[0],!hSwipe&&plugin.settings.closeBySwipe&&(vDistanceLast=vDistance,vDistance=endCoords.pageY-startCoords.pageY,Math.abs(vDistance)>=vSwipMinDistance||vSwipe)){var opacity=.75-Math.abs(vDistance)/slider.height();slider.css({top:vDistance+"px"}),slider.css({opacity:opacity}),vSwipe=!0}hDistanceLast=hDistance,hDistance=endCoords.pageX-startCoords.pageX,hDistancePercent=100*hDistance/winWidth,!hSwipe&&!vSwipe&&Math.abs(hDistance)>=hSwipMinDistance&&($("#swipebox-slider").css({"-webkit-transition":"","-moz-transition":"","-o-transition":"","-khtml-transition":"","-ms-transition":"",transition:""}),hSwipe=!0),hSwipe&&$("#swipebox-slider").css({"-webkit-transform":"translateX("+(currentX+hDistancePercent)+"%)","-moz-transform":"translateX("+(currentX+hDistancePercent)+"%)","-o-transform":"translateX("+(currentX+hDistancePercent)+"%)","-khtml-transform":"translateX("+(currentX+hDistancePercent)+"%)","-ms-transform":"translateX("+(currentX+hDistancePercent)+"%)",transform:"translateX("+(currentX+hDistancePercent)+"%)"})}),!1}).bind("touchend",function(event){if(event.preventDefault(),event.stopPropagation(),$("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease","-moz-transition":"-moz-transform 0.4s ease","-o-transition":"-o-transform 0.4s ease","-khtml-transition":"-khtml-transform 0.4s ease","-ms-transition":"-ms-transform 0.4s ease",transition:"transform 0.4s ease"}),vDistance=endCoords.pageY-startCoords.pageY,hDistance=endCoords.pageX-startCoords.pageX,hDistancePercent=100*hDistance/winWidth,vSwipe)if(vSwipe=!1,Math.abs(vDistance)>=2*vSwipMinDistance&&Math.abs(vDistance)>Math.abs(vDistanceLast)){var vOffset=vDistance>0?slider.height():-slider.height();slider.animate({top:vOffset+"px",opacity:0},300,function(){$this.closeSlide()})}else slider.animate({top:0,opacity:1},300);else hSwipe?(hSwipe=!1,hDistance>=hSwipMinDistance&&hDistance>=hDistanceLast?$this.getPrev():-hSwipMinDistance>=hDistance&&hDistanceLast>=hDistance&&$this.getNext()):bars.hasClass("visible-bars")?($this.clearTimeout(),$this.hideBars()):($this.showBars(),$this.setTimeout());$("#swipebox-slider").css({"-webkit-transform":"translateX("+currentX+"%)","-moz-transform":"translateX("+currentX+"%)","-o-transform":"translateX("+currentX+"%)","-khtml-transform":"translateX("+currentX+"%)","-ms-transform":"translateX("+currentX+"%)",transform:"translateX("+currentX+"%)"}),$(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(plugin.settings.hideBarsDelay>0){var $this=this;$this.clearTimeout(),$this.timeout=window.setTimeout(function(){$this.hideBars()},plugin.settings.hideBarsDelay)}},clearTimeout:function(){window.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var bars=$("#swipebox-caption, #swipebox-action");this.doCssTrans()?bars.addClass("visible-bars"):($("#swipebox-caption").animate({top:0},500),$("#swipebox-action").animate({bottom:0},500),setTimeout(function(){bars.addClass("visible-bars")},1e3))},hideBars:function(){var bars=$("#swipebox-caption, #swipebox-action");this.doCssTrans()?bars.removeClass("visible-bars"):($("#swipebox-caption").animate({top:"-50px"},500),$("#swipebox-action").animate({bottom:"-50px"},500),setTimeout(function(){bars.removeClass("visible-bars")},1e3))},animBars:function(){var $this=this,bars=$("#swipebox-caption, #swipebox-action");bars.addClass("visible-bars"),$this.setTimeout(),$("#swipebox-slider").click(function(){bars.hasClass("visible-bars")||($this.showBars(),$this.setTimeout())}),$("#swipebox-action").hover(function(){$this.showBars(),bars.addClass("visible-bars"),$this.clearTimeout()},function(){plugin.settings.hideBarsDelay>0&&(bars.removeClass("visible-bars"),$this.setTimeout())})},keyboard:function(){var $this=this;$(window).bind("keyup",function(event){event.preventDefault(),event.stopPropagation(),37===event.keyCode?$this.getPrev():39===event.keyCode?$this.getNext():27===event.keyCode&&$this.closeSlide()})},actions:function(){var $this=this,action="touchend click";elements.length<2?$("#swipebox-prev, #swipebox-next").hide():($("#swipebox-prev").bind(action,function(event){event.preventDefault(),event.stopPropagation(),$this.getPrev(),$this.setTimeout()}),$("#swipebox-next").bind(action,function(event){event.preventDefault(),event.stopPropagation(),$this.getNext(),$this.setTimeout()})),$("#swipebox-close").bind(action,function(){$this.closeSlide()})},setSlide:function(index,isFirst){isFirst=isFirst||!1;var slider=$("#swipebox-slider");currentX=100*-index,this.doCssTrans()?slider.css({"-webkit-transform":"translateX("+100*-index+"%)","-moz-transform":"translateX("+100*-index+"%)","-o-transform":"translateX("+100*-index+"%)","-khtml-transform":"translateX("+100*-index+"%)","-ms-transform":"translateX("+100*-index+"%)",transform:"translateX("+100*-index+"%)"}):slider.animate({left:100*-index+"%"}),$("#swipebox-slider .slide").removeClass("current"),$("#swipebox-slider .slide").eq(index).addClass("current"),this.setTitle(index),isFirst&&slider.fadeIn(),$("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===index?$("#swipebox-prev").addClass("disabled"):index===elements.length-1&&plugin.settings.loopAtEnd!==!0&&$("#swipebox-next").addClass("disabled")},openSlide:function(index){$("html").addClass("swipebox-html"),isTouch&&$("html").addClass("swipebox-touch"),$(window).trigger("resize"),this.setSlide(index,!0)},preloadMedia:function(index){var $this=this,src=null;elements[index]!==undefined&&(src=elements[index].href),$this.isVideo(src)?$this.openMedia(index):setTimeout(function(){$this.openMedia(index)},1e3)},openMedia:function(index){var $this=this,src=null;if(elements[index]!==undefined&&(src=elements[index].href),0>index||index>=elements.length)return!1;var slide=$("#swipebox-slider .slide").eq(index);$this.isVideo(src)?slide.html($this.getVideo(src)):(slide.addClass("slide-loading"),$this.loadMedia(src,function(){slide.removeClass("slide-loading"),slide.html(this)}))},setTitle:function(index){var title=null;$("#swipebox-caption").empty(),elements[index]!==undefined&&(title=elements[index].title),title&&$("#swipebox-caption").append(title)},isVideo:function(src){if(src){if(src.match(/youtube\.com\/watch\?v=([a-zA-Z0-9\-_]+)/)||src.match(/vimeo\.com\/([0-9]*)/)||src.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(src.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},getVideo:function(url){var iframe="",youtubeUrl=url.match(/watch\?v=([a-zA-Z0-9\-_]+)/),youtubeShortUrl=url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/),vimeoUrl=url.match(/vimeo\.com\/([0-9]*)/);return youtubeUrl||youtubeShortUrl?(youtubeShortUrl&&(youtubeUrl=youtubeShortUrl),iframe='<iframe width="560" height="315" src="//www.youtube.com/embed/'+youtubeUrl[1]+'" frameborder="0" allowfullscreen></iframe>'):vimeoUrl&&(iframe='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+vimeoUrl[1]+"?byline=0&amp;portrait=0&amp;color="+plugin.settings.vimeoColor+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),youtubeShortUrl||youtubeShortUrl||vimeoUrl||(iframe='<iframe width="560" height="315" src="'+url+'" frameborder="0" allowfullscreen></iframe>'),'<div class="swipebox-video-container" style="max-width:'+plugin.settings.videomaxWidth+'px"><div class="swipebox-video">'+iframe+"</div></div>"},loadMedia:function(src,callback){if(!this.isVideo(src)){var img=$("<img>").on("load",function(){callback.call(img)});img.attr("src",src)}},getNext:function(){var $this=this,index=$("#swipebox-slider .slide").index($("#swipebox-slider .slide.current"));if(index+1<elements.length){var src=$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src",src),index++,$this.setSlide(index),$this.preloadMedia(index+1)}else if(plugin.settings.loopAtEnd===!0){var src=$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src",src),index=0,$this.preloadMedia(index),$this.setSlide(index),$this.preloadMedia(index+1)}else $("#swipebox-slider").addClass("rightSpring"),setTimeout(function(){$("#swipebox-slider").removeClass("rightSpring")},500)},getPrev:function(){var index=$("#swipebox-slider .slide").index($("#swipebox-slider .slide.current"));if(index>0){var src=$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src");$("#swipebox-slider .slide").eq(index).contents().find("iframe").attr("src",src),index--,this.setSlide(index),this.preloadMedia(index-1)}else $("#swipebox-slider").addClass("leftSpring"),setTimeout(function(){$("#swipebox-slider").removeClass("leftSpring")},500)},closeSlide:function(){$("html").removeClass("swipebox-html"),$("html").removeClass("swipebox-touch"),$(window).trigger("resize"),this.destroy()},destroy:function(){$(window).unbind("keyup"),$("body").unbind("touchstart"),$("body").unbind("touchmove"),$("body").unbind("touchend"),$("#swipebox-slider").unbind(),$("#swipebox-overlay").remove(),$.isArray(elem)||elem.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),$.swipebox.isOpen=!1,plugin.settings.afterClose&&plugin.settings.afterClose()}},plugin.init()},$.fn.swipebox=function(options){if(!$.data(this,"_swipebox")){var swipebox=new $.swipebox(this,options);this.data("_swipebox",swipebox)}return this.data("_swipebox")}}(window,document,jQuery);
//# sourceMappingURL=jquery.swipebox.js.map