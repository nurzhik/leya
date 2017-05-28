!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.hidden="hidden",e.paused=!1,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,f,d),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0),e.checkResponsive(!0)}var b=0;return c}(),b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=c.options.asNavFor;d&&null!==d&&(d=a(d).not(c.$slider)),null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="'+b.options.dotsClass+'">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.html(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.target);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=0!==d.slideCount%d.options.slidesToScroll,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&(a("li",b.$dots).off("click.slick",b.changeSlide),b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).off("mouseenter.slick",a.proxy(b.setPaused,b,!0)).off("mouseleave.slick",a.proxy(b.setPaused,b,!1))),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.$list.off("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.html(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.options.arrows===!0&&(c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove())),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=-1*(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth,e=-1*(b.options.slidesToShow-(a-b.slideCount))*d):(b.slideOffset=-1*b.slideCount%b.options.slidesToScroll*b.slideWidth,e=-1*b.slideCount%b.options.slidesToScroll*d))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.setPaused,b,!0)).on("mouseleave.slick",a.proxy(b.setPaused,b,!1))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.$list.on("mouseenter.slick",a.proxy(b.setPaused,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.setPaused,b,!1)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}}))},b.prototype.lazyLoad=function(){function g(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy"),d=document.createElement("img");d.onload=function(){b.animate({opacity:0},100,function(){b.attr("src",c).animate({opacity:1},200,function(){b.removeAttr("data-lazy").removeClass("slick-loading")})})},d.src=c})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow,b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.paused=!1,a.autoPlay()},b.prototype.postSlide=function(a){var b=this;b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay(),b.options.accessibility===!0&&b.initADA()},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]",b.$slider).length,c>0&&(d=a("img[data-lazy]",b.$slider).first(),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad(),b.options.adaptiveHeight===!0&&b.setPosition()}).error(function(){d.removeAttr("data-lazy"),b.progressiveLazyLoad()}))},b.prototype.refresh=function(b){var c=this,d=c.currentSlide;c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),b.$slider.trigger("reInit",[b]),b.options.autoplay===!0&&b.focusHandler()},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,d.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(b,c,d){var f,g,e=this;if("responsive"===b&&"array"===a.type(c))for(g in c)if("array"!==a.type(e.options.responsive))e.options.responsive=[c[g]];else{for(f=e.options.responsive.length-1;f>=0;)e.options.responsive[f].breakpoint===c[g].breakpoint&&e.options.responsive.splice(f,1),f--;e.options.responsive.push(c[g])}else e.options[b]=c;d===!0&&(e.unload(),e.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.setPaused=function(a){var b=this;b.options.autoplay===!0&&b.options.pauseOnHover===!0&&(b.paused=a,a?b.autoPlayClear():b.autoPlay())},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),c.asNavFor(e),void 0):(c.slideHandler(e),void 0)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d)),void 0):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?0!==i.slideCount%i.options.slidesToScroll?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?0!==i.slideCount%i.options.slidesToScroll?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)
})):i.postSlide(e),i.animateHeight(),void 0):(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"left":"right":"vertical"},b.prototype.swipeEnd=function(){var c,b=this;if(b.dragging=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe)switch(b.swipeDirection()){case"left":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.slideHandler(c),b.currentDirection=0,b.touchObject={},b.$slider.trigger("swipe",[b,"left"]);break;case"right":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.slideHandler(c),b.currentDirection=1,b.touchObject={},b.$slider.trigger("swipe",[b,"right"])}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.swipeLeft=b.options.vertical===!1?d+f*g:d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.dragging=!0,void 0)},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;document[a.hidden]?(a.paused=!0,a.autoPlayClear()):a.options.autoplay===!0&&(a.paused=!1,a.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.activateADA=function(){var a=this,b=a.$slider.find("*").is(":focus");a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false",tabindex:"0"}).find("a, input, button, select").attr({tabindex:"0"}),b&&a.$slideTrack.find(".slick-active").focus()},b.prototype.focusHandler=function(){var b=this;b.$slider.on("focus.slick blur.slick","*",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.isPlay&&(d.is(":focus")?(b.autoPlayClear(),b.paused=!0):(b.paused=!1,b.autoPlay()))},0)})},a.fn.slick=function(){var g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length,f=0;for(f;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

jQuery(document).ready(function ($) {
  var StickyElement = function(node){
  var doc = $(document), 
      fixed = false,
      anchor = node.find('.header-bottom-height'),
      content = node.find('.header-bottom');
  
  var onScroll = function(e){
    var docTop = doc.scrollTop(),
        anchorTop = anchor.offset().top;
    
    console.log('scroll', docTop, anchorTop);
    if(docTop > anchorTop){
      if(!fixed){
        anchor.height(content.outerHeight());
        content.addClass('fixed');        
        fixed = true;
      }
    }  else   {
      if(fixed){
        anchor.height(0);
        content.removeClass('fixed'); 
        fixed = false;
      }
    }
  };
  
  $(window).on('scroll', onScroll);
};

var demo = new StickyElement($('.header-fix'));
  $('.storitelsto-news__slider').slick({
 			accessibility: !1,
            autoplay: !1,
            autoplaySpeed: 3e3,
            speed: 1e3,
            infinite: !0,
            arrows: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
            pauseOnHover: !1,
            centerMode: !0,
        prevArrow: '<span class="slider-prev slider-nav" aria-label="previous"></span>',
        nextArrow: '<span class="slider-next slider-nav" aria-label="next"></span>',
        });      
  $('.slider-plan').slick({
 		infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows:false,
  dots:true,
        }); 
$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'none',
		closeEffect	: 'none'
	});
	var overlay = $('#overlay');
    var open_modal = $('.open_modal'); 
    var close = $('.modal_close, #overlay'); 
    var modal = $('.modal_div'); 
	
     open_modal.click( function(event){ 
         event.preventDefault(); 
         var div = $(this).attr('href'); 
         overlay.fadeIn(400,
             function(){
                 $(div) 
                     .css('display', 'block') 
                     .animate({opacity: 1, }, 200);
         });
     });

     close.click( function(){
            modal.animate({opacity: 0, }, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
             );
     });
});

  




    
     //menu
   $('.mob_start').click(function(e) {
    var $mob_part = $('.menu');
    if ($mob_part.hasClass('m_menu')) {
        $mob_part.removeClass('m_menu');
         $(this).removeClass('active-start');
     }
    else{
         $(this).addClass('active-start');
         $mob_part.addClass('m_menu');
    };
     });
 	
 	$('.searach-container__icon').click(function(e) {
    var $mob_part = $('.searach-container__input');
    if ($mob_part.hasClass('show')) {
	        $mob_part.removeClass('show');
	        $(this).removeClass('active-start');
	     }
	    else{
	        $(this).addClass('active-start');
	        $mob_part.addClass('show');
	    };
    });

 }); 

     //end



; /* Start:"a:4:{s:4:"full";s:59:"/bitrix/templates/.default/js/pages/home.js?145311072918128";s:6:"source";s:43:"/bitrix/templates/.default/js/pages/home.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _modulesPointTimer = require('../modules/PointTimer');

var _modulesPointTimer2 = _interopRequireDefault(_modulesPointTimer);

var _modulesEvent = require('../modules/event');

var _modulesEvent2 = _interopRequireDefault(_modulesEvent);

var _default = (function () {
  function _default(wrapper) {
    _classCallCheck(this, _default);

    if (!this.create(wrapper)) return false;
    this.changePosition();
    this.addPosition();
    this.addNext();
    this.showNext();
    this.bindMobileNav();
    this.bindSwipe();
  }

  _default.prototype.create = function create(wrapper) {
    var self = this;
    this.wrapper = wrapper;
    this.cover = this.wrapper.querySelectorAll('.cover_frame');
    this.itemAll = this.wrapper.querySelectorAll('[data-js="item"]');
    this.event = _modulesEvent2['default']();

    if (this.itemAll.length < 2) {
      this.itemAll[0].className = this.itemAll[0].className.replace(/\s*js-active/, '') + ' js-active';
      this.changePosition();
      this.addPosition();
      return false;
    }

    this.wrapper.className = this.wrapper.className + ' js-active';

    this.timer = new _modulesPointTimer2['default']({
      el: this.wrapper.querySelector('[data-timer]'),
      callback: function callback() {
        self.showNext.call(self);
      }
    });
    this.timer.end = function () {
      alert('end');
    };
    this.nextBtn = this.wrapper.querySelector('[data-js="next-btn"]');
    this.mNavDots = this.wrapper.querySelectorAll('.cover_mnav-dot');
    this.maxInd = this.itemAll.length - 1;
    this.curInd = this.maxInd;
    this.mobNavTimeout = false;
    return true;
  };

  _default.prototype.addPosition = function addPosition() {
    var self = this;
    this.event.add(window, 'resize', function () {
      self.changePosition.call(self);
    });
  };

  _default.prototype.changePosition = function changePosition() {
    var wrapper = this.wrapper;
    Array.prototype.forEach.call(this.cover, function (el, i) {
      el.style.width = wrapper.offsetWidth + 'px';
      var multiplier = window.innerWidth < 760 ? 1.16029411764706 : 0.86029411764706;
      el.style.marginLeft = -Math.round(wrapper.offsetWidth * multiplier) + 'px';
    });
    Array.prototype.forEach.call(this.itemAll, function (el, i) {
      el.style.height = wrapper.offsetWidth * 2 + 'px';
      el.style.top = -Math.round(1040 - (2720 - wrapper.offsetWidth * 2) / 2) + 'px';
    });
  };

  _default.prototype.addNext = function addNext() {
    var self = this;
    this.nextBtn.onclick = function () {
      self.showNext.call(self);
      return false;
    };
  };

  _default.prototype.bindSwipe = function bindSwipe() {
    var self = this;
    var $wrapper = $(this.wrapper);
    $wrapper.swipe({
      allowPageScroll: "vertical",
      preventDefaultEvents: false,
      swipeLeft: function swipeLeft(event, direction, distance, duration, fingerCount) {
        if (self.mobNavTimeout || window.innerWidth > 759) {
          return false;
        }
        self.showNext.call(self);
      },
      swipeRight: function swipeRight(event, direction, distance, duration, fingerCount) {
        if (self.mobNavTimeout || window.innerWidth > 759) {
          return false;
        }
        self.showPrev.call(self);
      }
    });
  };

  _default.prototype.bindMobileNav = function bindMobileNav() {
    var self = this;
    Array.prototype.forEach.call(this.mNavDots, function (el, i) {
      el.onclick = function () {
        if (self.mobNavTimeout) {
          return false;
        }
        self.goToSlide.call(self, i);
      };
    });
  };

  _default.prototype.showNext = function showNext() {
    this.timer.reset();

    var newInd = this.getNextInd();
    this.mNavDots[this.curInd].className = this.mNavDots[this.curInd].className.replace(/\s*js-active/, '');
    this.itemAll[this.curInd].className = this.itemAll[this.curInd].className.replace(/\s*js-active/, '');
    this.itemAll[newInd].className = this.itemAll[newInd].className.replace(/\s*js-prepare/, '') + ' js-active';

    this.curInd = newInd;
    var prepareInd = this.getNextInd();
    this.itemAll[prepareInd].className = this.itemAll[prepareInd].className + ' js-prepare';
    this.mNavDots[this.curInd].className = this.mNavDots[this.curInd].className + ' js-active';

    this.timer.start();
    this.fixIe8Preview(newInd);
  };

  _default.prototype.showPrev = function showPrev() {
    var self = this;
    self.mobNavTimeout = true;
    this.timer.reset();

    var newInd = this.getPrevInd();
    var prepareInd = this.getNextInd();
    this.itemAll[prepareInd].className = this.itemAll[prepareInd].className.replace(/\s*js-prepare/, '');
    this.itemAll[newInd].className = this.itemAll[newInd].className + ' js-prepare';

    // Needed for correct animation
    setTimeout(function () {
      self.itemAll[self.curInd].className = self.itemAll[self.curInd].className.replace(/\s*js-active/, '');
      self.itemAll[newInd].className = self.itemAll[newInd].className.replace(/\s*js-prepare/, '') + ' js-active';
      self.mNavDots[self.curInd].className = self.mNavDots[self.curInd].className.replace(/\s*js-active/, '');
      self.mNavDots[newInd].className = self.mNavDots[newInd].className + ' js-active';
    }, 10);

    setTimeout(function () {
      self.curInd = newInd;
      prepareInd = self.getNextInd();
      self.itemAll[prepareInd].className = self.itemAll[prepareInd].className + ' js-prepare';

      self.timer.start();
      self.fixIe8Preview(newInd);
      self.mobNavTimeout = false;
    }, 1000);
  };

  _default.prototype.goToSlide = function goToSlide(index) {
    var self = this;
    self.mobNavTimeout = true;
    if (index === this.curInd) {
      return;
    }
    var prepareInd = this.getNextInd();
    if (index != prepareInd) {
      this.itemAll[prepareInd].className = this.itemAll[prepareInd].className.replace(/\s*js-prepare/, '');
      this.itemAll[index].className = this.itemAll[index].className + ' js-prepare';
    }
    this.timer.reset();

    var newInd = index;

    // Needed for correct animation
    setTimeout(function () {
      self.itemAll[self.curInd].className = self.itemAll[self.curInd].className.replace(/\s*js-active/, '');
      self.itemAll[newInd].className = self.itemAll[newInd].className.replace(/\s*js-prepare/, '') + ' js-active';
      self.mNavDots[self.curInd].className = self.mNavDots[self.curInd].className.replace(/\s*js-active/, '');
      self.mNavDots[newInd].className = self.mNavDots[newInd].className + ' js-active';
    }, 10);

    setTimeout(function () {
      self.curInd = newInd;
      prepareInd = self.getNextInd();
      self.itemAll[prepareInd].className = self.itemAll[prepareInd].className + ' js-prepare';

      self.timer.start();
      self.fixIe8Preview(newInd);
      self.mobNavTimeout = false;
    }, 1000);
  };

  _default.prototype.getNextInd = function getNextInd() {
    var next = this.curInd + 1 > this.maxInd ? 0 : this.curInd + 1;
    return next;
  };

  _default.prototype.getPrevInd = function getPrevInd() {
    var prev = this.curInd - 1 < 0 ? this.maxInd : this.curInd - 1;
    return prev;
  };

  _default.prototype.fixIe8Preview = function fixIe8Preview(newInd) {
    var isIE8 = document.all && !document.addEventListener;
    var self = this;
    if (isIE8) {
      var preview = self.itemAll[newInd].querySelector('.cover_preview');
      preview.style.display = 'block';
      preview.fireEvent("onmove");
    }
  };

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];

},{"../modules/PointTimer":2,"../modules/event":3}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _default = (function () {
	function _default(initial) {
		_classCallCheck(this, _default);

		this.create(initial);
		this.addHTML();
	}

	_default.prototype.create = function create(initial) {
		this.el = initial.el;
		this.callback = initial.callback;
		this.data = JSON.parse(this.el.getAttribute('data-timer'));
		this.data.stepTime = this.data.time * 1000 / this.data.points;
		this.pointAll = [];
		this.curPoint = 0;
		this.maxPoint = this.data.points.length - 1;
	};

	_default.prototype.addHTML = function addHTML() {
		var r = this.data.r;
		var x0 = r;
		var y0 = x0;
		var stepAngel = 360 / this.data.points;

		for (var i = 0; i < this.data.points; i++) {
			var point = document.createElement('SPAN');
			var angel = (stepAngel * i - 90) / 180 * Math.PI;

			point.className = this.data.className;
			point.style.left = x0 + r * Math.cos(angel) + 'px';
			point.style.top = y0 + r * Math.sin(angel) + 'px';
			this.pointAll.push(point);
			this.el.appendChild(point);
		}
	};

	_default.prototype.reset = function reset() {
		try {
			clearInterval(this.clearTimer);
		} catch (e) {}
		this.curPoint = 0;

		for (var i = 0; i < this.data.points; i++) {
			this.pointAll[i].className = this.pointAll[i].className.replace(/\s*js-active/, '');
		}
	};

	_default.prototype.start = function start() {
		var self = this;
		this.clearTimer = setInterval(function () {
			self.changePoint.call(self);
		}, this.data.stepTime);
	};

	_default.prototype.changePoint = function changePoint() {
		if (this.curPoint === this.data.points) {
			clearInterval(this.clearTimer);
			try {
				this.callback();
			} catch (e) {};
		} else {
			this.pointAll[this.curPoint].className = this.pointAll[this.curPoint].className.replace(/\s*js-active/, '') + ' js-active';
			this.curPoint++;
		}
	};

	return _default;
})();

exports['default'] = _default;
;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function () {

  var guid = 0;

  function fixEvent(event) {
    event = event || window.event;

    if (event.isFixed) {
      return event;
    }
    event.isFixed = true;

    event.preventDefault = event.preventDefault || function () {
      this.returnValue = false;
    };
    event.stopPropagation = event.stopPropagaton || function () {
      this.cancelBubble = true;
    };

    if (!event.target) {
      event.target = event.srcElement;
    }

    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement == event.target ? event.toElement : event.fromElement;
    }

    if (event.pageX == null && event.clientX != null) {
      var html = document.documentElement,
          body = document.body;
      event.pageX = event.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
      event.pageY = event.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
    }

    if (!event.which && event.button) {
      event.which = event.button & 1 ? 1 : event.button & 2 ? 3 : event.button & 4 ? 2 : 0;
    }

    return event;
  }

  /* Вызывается в контексте элемента всегда this = element */
  function commonHandle(event) {
    event = fixEvent(event);

    var handlers = this.events[event.type];

    for (var g in handlers) {
      var handler = handlers[g];

      var ret = handler.call(this, event);
      if (ret === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  }

  return {
    add: function add(elem, type, handler) {
      if (elem.setInterval && elem != window && !elem.frameElement) {
        elem = window;
      }

      if (!handler.guid) {
        handler.guid = ++guid;
      }

      if (!elem.events) {
        elem.events = {};
        elem.handle = function (event) {
          if (typeof Event !== "undefined") {
            return commonHandle.call(elem, event);
          }
        };
      }

      if (!elem.events[type]) {
        elem.events[type] = {};

        if (elem.addEventListener) elem.addEventListener(type, elem.handle, false);else if (elem.attachEvent) elem.attachEvent("on" + type, elem.handle);
      }

      elem.events[type][handler.guid] = handler;
    },

    remove: function remove(elem, type, handler) {
      var handlers = elem.events && elem.events[type];

      if (!handlers) return;

      delete handlers[handler.guid];

      for (var any in handlers) return;
      if (elem.removeEventListener) elem.removeEventListener(type, elem.handle, false);else if (elem.detachEvent) elem.detachEvent("on" + type, elem.handle);

      delete elem.events[type];

      for (var any in elem.events) return;
      try {
        delete elem.handle;
        delete elem.events;
      } catch (e) {
        // IE
        elem.removeAttribute("handle");
        elem.removeAttribute("events");
      }
    }
  };
};

module.exports = exports["default"];

},{}],4:[function(require,module,exports){


},{"../modules/event":3}],5:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports["default"] = function (func) {

	var isDOM,
	    detach = function detach() {
		if (document.addEventListener) {
			document.removeEventListener("DOMContentLoaded", checkDOM, false);
			window.removeEventListener("load", checkDOM, false);
		} else {
			document.detachEvent("onreadystatechange", checkDOM);
			window.detachEvent("onload", checkDOM);
		}
	},
	    checkDOM = function checkDOM() {
		if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
			detach();
			DOMReady();
		}
	},
	    DOMReady = function DOMReady() {
		if (isDOM) return;
		isDOM = true;

		func();
	};

	//			
	if (document.readyState === "complete") {
		setTimeout(DOMReady);
	} else if (document.addEventListener) {
		document.addEventListener("DOMContentLoaded", checkDOM, false);
		window.addEventListener("load", checkDOM, false);
	} else {
		document.attachEvent("onreadystatechange", checkDOM);
		window.attachEvent("onload", checkDOM);

		var top = false;

		try {
			top = window.frameElement == null && document.documentElement;
		} catch (e) {}

		if (top && top.doScroll) {
			(function doScrollCheck() {
				if (!isDOM) {

					try {
						top.doScroll("left");
					} catch (e) {
						return setTimeout(doScrollCheck, 50);
					}

					detach();
					DOMReady();
				}
			})();
		}
	}
};

;
module.exports = exports["default"];

},{}],6:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modulesReady = require('../modules/ready');

var _modulesReady2 = _interopRequireDefault(_modulesReady);

var _modulesCover = require('../modules/Cover');

var _modulesCover2 = _interopRequireDefault(_modulesCover);

var _modulesNav = require('../modules/nav');

var _modulesNav2 = _interopRequireDefault(_modulesNav);

//
_modulesReady2['default'](function () {
	new _modulesCover2['default'](document.querySelector('[data-js="cover"]'));

});

},{"../modules/Cover":1,"../modules/nav":4,"../modules/ready":5}]},{},[6]);

/* End */
;; /* /bitrix/templates/.default/js/pages/home.js?145311072918128*/


(function($) {
    'use strict';

    $.extend(true, window, {
        aic: {
            nsIndex: {}
        }
    });
}(jQuery));



/* Index Polygon **********************************************************************************************************************************************/
(function($) {
    'use strict';

    window.aic.nsIndex.Polygon = function($el, config) {
        this.initialize($el, config);
        this.initItems();
        this.initArrows();
        this.initButtons();
        this.updArrows();
        this.initStartSide();
        this.$container.addClass('m-slide-0');
        this.$container.on('click', '.js-goto-slide', $.proxy(function(ev) {
            this.$pagination.find('.r-list > li').eq(parseInt($(ev.currentTarget).attr('js-index'))).trigger('click');
            ev.preventDefault();
        }, this));
    };

    _.extend(window.aic.nsIndex.Polygon.prototype, {

        initialize: function($container, config) {
            _.extend(this, {
                width: 1000,
                height: 500,
                tZoom: window.aic.nsAnimation.tIndexZoom,
                tSlide: window.aic.nsAnimation.tIndexSlide,
                index: 0,
                cbReady: $.noop
            }, config, {
                busy: false,
                $container: $($container)
            });

            _.extend(this, {
                $tWrap: this.$container.find('.l-wrap-translate'),
                $ul: this.$container.find('.r-side-list')
            });

            _.extend(this, {
                $items: this.$ul.find('> li')
            });

            this.angle = 180 - 360 / (this.$items.length * 2);
            this.radius = Math.round(this.width / 2 * Math.tan(this.angle / 2 * Math.PI / 180) * 100) / 100;
        },

        initStartSide: function() {
            this.$container.addClass('m-fx-off');
            this.$tWrap.css({ transform: 'translate3d(0, 0, ' + this.radius + 'px)' });
            this.$ul.css({ transform: 'rotateY(' + (this.aItems[this.index].angle) + 'deg)' });
            this.$items.eq(this.index).addClass('is-active');
        },

        initItems: function() {
            var _this = this,
                oDeferred = {};
            this.aItems = [];
            _.each(this.$items, function(el, index) {
                oDeferred[index] = $.Deferred();
                this.aItems.push(new window.aic.nsIndex.Side($(el), {
                    index: index,
                    angle: index * (180 - this.angle),
                    zTranslate: -this.radius,
                    cbReady: function() {
                        oDeferred[index].resolve();
                    }
                }));
            }, this);
            $.when.apply(null, _.values(oDeferred)).done(function() {
                _this.$container.addClass('m-ready');
                _this.cbReady();
            });
        },

        initArrows: function() {
            var _this = this,
                $wnd = $(window),
                $wrap = $('<div class="b-polygon-arrows"></div>').insertAfter(this.$container),

                hResize = function() {
                    var w = Math.max(1000, Math.min(1160, $wnd.width()));
                    $wrap.css({ width: w, marginLeft: -w / 2 });
                },

                hPrev = function() {
                    _this.$pagination.find('.r-list > li').eq((_this.index + _this.$items.length - 1) % _this.$items.length).trigger('click');
                },

                hNext = function() {
                    _this.$pagination.find('.r-list > li').eq((_this.index + 1) % _this.$items.length).trigger('click');
                };

            _.extend(this, {
                $left: $('<a class="e-arrow m-left"></a>').appendTo($wrap).on('click', hPrev),
                $right: $('<a class="e-arrow m-right"></a>').appendTo($wrap).on('click', hNext)
            });

            hResize();
            $wnd.on('resize', hResize);
        },

        updArrows: function(newIndex) {
            newIndex = newIndex === undefined ? this.index : newIndex;
            this.$left.toggleClass('m-hide', newIndex === 0);
            this.$right.toggleClass('m-hide', newIndex === this.$items.length - 1);
        },

        initButtons: function() {
            this.$pagination = $('<div></div>').insertAfter(this.$container);
            new window.aic.nsContent.Pagination(
                this.$pagination,
                this.$items.length,
                {
                    index: this.index,
                    cbChange: $.proxy(function(newIndex) {
                        return this.set(newIndex);
                    }, this)
                }
            );
        },

        set: function(newIndex) {
            if (this.busy || newIndex === this.index) {
                return false;
            }
            this.busy = true;

            var _this = this,

                fnZoomIn = function(cb) {
                    _this.$container.removeClass('m-fx-off').addClass('m-fx-on m-fx-zoom-out');
                    _this.$tWrap.css({ transform: 'translate3d(0, 0, ' + (_this.radius - 500) + 'px)' });
                    setTimeout(function() {
                        _this.$container.removeClass('m-fx-zoom-out');
                        (cb || $.noop)();
                    }, _this.tZoom);
                    if (newIndex === 0) {
                        _this.$container.addClass('m-slide-0');
                    }
                },

                fnSlide = function(cb) {
                    _this.$ul.css({ transform: 'rotateY(' + _this.aItems[newIndex].angle + 'deg)' });
                    setTimeout(cb || $.noop, _this.tSlide);
                },

                fnZoomOut = function(cb) {
                    _this.$items.removeClass('is-active').eq(newIndex).addClass('is-active');
                    _this.$container.addClass('m-fx-zoom-in');
                    _this.$tWrap.css({ transform: 'translate3d(0, 0, ' + _this.radius + 'px)' });
                    setTimeout(function() {
                        _this.$container.removeClass('m-fx-zoom-in m-fx-on');
                        setTimeout(function() {
                            _this.$container.addClass('m-fx-off');
                            (cb || $.noop)();
                        }, window.aic.nsAnimation.delay);
                    }, _this.tZoom);
                    if (newIndex !== 0) {
                        _this.$container.removeClass('m-slide-0');
                    }
                };

            if (Modernizr.csstransforms3d && Modernizr.preserve3d) {
                fnZoomIn(function() {
                    fnSlide(function() {
                        fnZoomOut(function() {
                            _this.index = newIndex;
                            _this.busy = false;
                        });
                    });
                });
            } else {
                _this.$items.removeClass('is-active').eq(newIndex).addClass('is-active');
                _this.index = newIndex;
                _this.busy = false;
            }

            this.updArrows(newIndex);
        }

    });
}(jQuery));



/* Index Side *************************************************************************************************************************************************/
(function($) {
    'use strict';

    window.aic.nsIndex.Side = function($el, config) {
        this.initialize($el, config);
    };

    _.extend(window.aic.nsIndex.Side.prototype, {

        initialize: function($el, config) {
            _.extend(this, {
                index: 0,
                angle: 0,
                zTranslate: 0,
                cbReady: $.noop
            }, config);

            this.$el = $el.css({ transform: 'rotateY(' + -this.angle + 'deg)' });
            this.$grid = this.$el.find('.b-grid').css({ transform: 'translate3d(0, 0, ' + this.zTranslate + 'px)' });
            this.oGrid = new window.aic.nsIndex.Grid(this.$grid, { zTranslate: this.zTranslate, cbReady: this.cbReady });
        }

    });
}(jQuery));



/* Index Grid *************************************************************************************************************************************************/
(function($) {
    'use strict';

    window.aic.nsIndex.Grid = function($el, config) {
        this.initialize($el, config);
        this.initModel();
        this.updateView();
        this.initBack();
    };

    _.extend(window.aic.nsIndex.Grid.prototype, {

        initialize: function($container, config) {
            _.extend(this, {
                cols: 4,
                rows: 2,
                width: 250,
                height: 250,
                zTranslate: 0,
                cbReady: $.noop
            }, config);

            this.$container = $container;
            this.$items = this.$container.find('> li');

            this.aItems = _.map(this.$items.toArray(), function(el, index) {
                var $el = $(el),
                    size = $el.attr('size') || '11';
                return {
                    $el: $el,
                    oEl: new window.aic.nsIndex.Cell($el),
                    index: index,
                    width: parseInt(size.charAt(0), 10),
                    height: parseInt(size.charAt(1), 10)
                };
            }, this);
        },

        initModel: function() {
            var _this = this,
                i, j;

            this.aGrid = [];
            for (i = 0; i < this.rows; i++) {
                this.aGrid.push([]);
            }

            (function() {
                var pNext = { top: 0, left: 0 },

                    fnCheckPosition = function() {
                        if (pNext.left >= _this.cols) {
                            pNext.top++;
                            pNext.left = 0;
                        }
                    };

                _.each(this.aItems, function(oItem) {
                    while (this.aGrid[pNext.top][pNext.left] !== undefined) {
                        pNext.left++;
                        fnCheckPosition();
                    }

                    for (var i = pNext.top; i < pNext.top + oItem.height; i++) {
                        for (var j = pNext.left; j < pNext.left + oItem.width; j++) {
                            this.aGrid[i][j] = oItem;
                        }
                    }

                    pNext.left += oItem.width;
                    fnCheckPosition();
                }, this);
            }).apply(this);

            (function() {
                var last = -1;
                _.each(this.aGrid, function(aRow, i) {
                    _.each(aRow, function(oItem, j) {
                        if (oItem.index > last) {
                            oItem.top = i;
                            oItem.left = j;
                            last = oItem.index;
                        }
                    });
                });
            }).apply(this);
        },

        updateView: function() {
            this.$container
                .width(this.width * this.cols)
                .height(this.height * this.rows);

            _.each(this.aItems, function(oItem) {
                oItem.$el
                    .attr('top', oItem.top)
                    .attr('left', oItem.left);
            }, this);
        },

        initBack: function() {
            if (!Modernizr.cssfilters || !$('html').hasClass('index-cell-zoom')) {
                this.cbReady();
                return;
            }

            var $bg = $('<div class="i-grid-background"></div>').css({ transform: 'translate3d(0, 0, ' + (this.zTranslate - 50) + 'px)' }).insertAfter(this.$container),
                $wrap = $('<div class="l-wrap"></div>').appendTo($bg);

            _.each(this.aItems, function(obj) {
                $('<i></i>')
                    .attr('top', obj.top)
                    .attr('left', obj.left)
                    .attr('size', obj.width * 10 + obj.height)
                    .css({ background: obj.$el.find('.b-cell').css('background') })
                    .appendTo($wrap);
            }, this);
            this.cbReady();
        }

    });
}(jQuery));



/* Index Cell *************************************************************************************************************************************************/
(function($) {
    'use strict';

    window.aic.nsIndex.Cell = function($el, config) {
        this.initialize($el, config);
        this.bindHandlers();
    };

    _.extend(window.aic.nsIndex.Cell.prototype, {

        initialize: function($el, config) {
            _.extend(this, {
                tHover: window.aic.nsAnimation.tHover
            }, config);

            this.$container = $el;
            this.$parent = this.$container.parent();
            this.$cell = this.$container.find('.b-cell');
            this.width = this.$cell.width();
            this.height = this.$cell.height();
        },

        bindHandlers: function() {
            var _this = this;

            this.$container
                .on('mouseenter', function() {
                    _this.$parent.addClass('is-child-hover');
                    _this.$container.removeClass('is-fx-hide').addClass('is-fx-show is-active is-hover');
                    setTimeout(function() {
                        _this.$container.removeClass('is-fx-show');
                    }, _this.tHover);
                })
                .on('mouseleave', function() {
                    _this.$parent.removeClass('is-child-hover');
                    _this.$container.removeClass('is-fx-show is-hover').addClass('is-fx-hide');
                    setTimeout(function() {
                        _this.$container.removeClass('is-fx-hide is-active');
                    }, _this.tHover);
                });
        }

    });
}(jQuery));