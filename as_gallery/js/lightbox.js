!function(e,t,n,i){"use strict";e.fn.simpleLightbox=function(i){var a="",i=e.extend({lefticon:"&lsaquo;",righticon:"&rsaquo;",overlay:!0,spinner:!0,nav:!0,captions:!0,captionDelay:0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",close:!0,closeText:!1,showCounter:!0,fileExt:"png|jpg|jpeg|gif",animationSlide:!0,animationSpeed:250,preloading:!0,enableKeyboard:!0,loop:!0,docClose:!0,swipeTolerance:50,className:"simple-lightbox",widthRatio:.8,heightRatio:.9,disableRightClick:!1,disableScroll:!0,alertError:!0,alertErrorMessage:"Image not found, next image will be loaded",additionalHtml:!1},i);i.closeText===!1&&(a="×");var o=(t.navigator.pointerEnabled||t.navigator.msPointerEnabled,0),s=e(),l=function(){var e=n.body||n.documentElement,e=e.style;return""==e.WebkitTransition?"-webkit-":""==e.MozTransition?"-moz-":""==e.OTransition?"-o-":""==e.transition?"":!1},r=!1,d=[],c=this,l=l(),p=l!==!1?!0:!1,h="simplelb",g=e("<div>").addClass("sl-overlay"),f=e("<button>").addClass("sl-close").html(a),u=e("<div>").addClass("sl-spinner").html("<div></div>"),m=e("<div>").addClass("sl-navigation").html('<button class="sl-prev">'+i.lefticon+'</button><button class="sl-next">'+i.righticon+"</button>"),v=e("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'),x=!1,b=0,y=e("<div>").addClass("sl-caption pos-"+i.captionPosition),w=e("<div>").addClass("sl-image"),E=e("<div>").addClass("sl-wrapper").addClass(i.className),C=function(t){return i.fileExt?"a"==e(t).prop("tagName").toLowerCase()&&new RegExp(".("+i.fileExt+")$","i").test(e(t).attr("href")):!0},T=function(){i.close&&f.appendTo(E),i.showCounter&&c.length>1&&(v.appendTo(E),v.find(".sl-total").text(c.length)),i.nav&&m.appendTo(E),i.spinner&&u.appendTo(E)},S=function(t){t.trigger(e.Event("show.simplelightbox")),i.disableScroll&&W("hide"),E.appendTo("body"),w.appendTo(E),i.overlay&&g.appendTo(e("body")),x=!0,b=c.index(t),s=e("<img/>").hide().attr("src",t.attr("href")),-1==d.indexOf(t.attr("href"))&&d.push(t.attr("href")),w.html("").attr("style",""),s.appendTo(w),D(),g.fadeIn("fast"),e(".sl-close").fadeIn("fast"),u.show(),m.fadeIn("fast"),e(".sl-wrapper .sl-counter .sl-current").text(b+1),v.fadeIn("fast"),k(),i.preloading&&R(),setTimeout(function(){t.trigger(e.Event("shown.simplelightbox"))},i.animationSpeed)},k=function(n){if(s.length){var a=new Image,o=e(t).width()*i.widthRatio,l=e(t).height()*i.heightRatio;a.src=s.attr("src"),e(a).bind("error",function(t){return c.eq(b).trigger(e.Event("error.simplelightbox")),x=!1,r=!0,u.hide(),i.alertError?(alert(i.alertErrorMessage),void O(1==n||-1==n?n:1)):void 0}),a.onload=function(){"undefined"!=typeof n&&c.eq(b).trigger(e.Event("changed.simplelightbox")).trigger(e.Event((1===n?"nextDone":"prevDone")+".simplelightbox")),-1==d.indexOf(s.attr("src"))&&d.push(s.attr("src"));var h=a.width,g=a.height;if(h>o||g>l){var f=h/g>o/l?h/o:g/l;h/=f,g/=f}e(".sl-image").css({top:(e(t).height()-g)/2+"px",left:(e(t).width()-h)/2+"px"}),u.hide(),s.css({width:h+"px",height:g+"px"}).fadeIn("fast"),r=!0;var m="self"==i.captionSelector?c.eq(b):c.eq(b).find(i.captionSelector);if("data"==i.captionType)var v=m.data(i.captionsData);else if("text"==i.captionType)var v=m.html();else var v=m.prop(i.captionsData);if(i.loop||(0==b&&e(".sl-prev").hide(),b>=c.length-1&&e(".sl-next").hide(),b>0&&e(".sl-prev").show(),b<c.length-1&&e(".sl-next").show()),1==c.length&&e(".sl-prev, .sl-next").hide(),1==n||-1==n){var y={opacity:1};i.animationSlide&&(p?(q(0,100*n+"px"),setTimeout(function(){q(i.animationSpeed/1e3,"0px"),50})):y.left=parseInt(e(".sl-image").css("left"))+100*n+"px"),e(".sl-image").animate(y,i.animationSpeed,function(){x=!1,I(v)})}else x=!1,I(v);i.additionalHtml&&0==e(".sl-additional-html").length&&e("<div>").html(i.additionalHtml).addClass("sl-additional-html").appendTo(e(".sl-image"))}}},I=function(t){""!=t&&"undefined"!=typeof t&&i.captions&&y.html(t).hide().appendTo(e(".sl-image")).delay(i.captionDelay).fadeIn("fast")},q=function(t,n){var i={};i[l+"transform"]="translateX("+n+")",i[l+"transition"]=l+"transform "+t+"s linear",e(".sl-image").css(i)},D=function(){e(t).on("resize."+h,k),e(n).on("click."+h+" touchstart."+h,".sl-close",function(e){e.preventDefault(),r&&P()}),m.on("click."+h,"button",function(t){t.preventDefault(),o=0,O(e(this).hasClass("sl-next")?1:-1)});var a=0,s=0,l=!1,d=0;w.on("touchstart."+h+" mousedown."+h,function(e){return l?!0:(p&&(d=parseInt(w.css("left"))),l=!0,a=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,!1)}).on("touchmove."+h+" mousemove."+h+" pointermove MSPointerMove",function(e){return l?(e.preventDefault(),s=e.originalEvent.pageX||e.originalEvent.touches[0].pageX,o=a-s,void(i.animationSlide&&(p?q(0,-o+"px"):w.css("left",d-o+"px")))):!0}).on("touchend."+h+" mouseup."+h+" touchcancel."+h+" mouseleave."+h+" pointerup pointercancel MSPointerUp MSPointerCancel",function(e){if(l){l=!1;var t=!0;i.loop||(0==b&&0>o&&(t=!1),b>=c.length-1&&o>0&&(t=!1)),Math.abs(o)>i.swipeTolerance&&t?O(o>0?1:-1):i.animationSlide&&(p?q(i.animationSpeed/1e3,"0px"):w.animate({left:d+"px"},i.animationSpeed/2))}})},M=function(){m.off("click","button"),e(n).off("click."+h,".sl-close"),e(t).off("resize."+h)},R=function(){var t=0>b+1?c.length-1:b+1>=c.length-1?0:b+1,n=0>b-1?c.length-1:b-1>=c.length-1?0:b-1;e("<img />").attr("src",c.eq(t).attr("href")).load(function(){-1==d.indexOf(e(this).attr("src"))&&d.push(e(this).attr("src")),c.eq(b).trigger(e.Event("nextImageLoaded.simplelightbox"))}),e("<img />").attr("src",c.eq(n).attr("href")).load(function(){-1==d.indexOf(e(this).attr("src"))&&d.push(e(this).attr("src")),c.eq(b).trigger(e.Event("prevImageLoaded.simplelightbox"))})},O=function(t){c.eq(b).trigger(e.Event("change.simplelightbox")).trigger(e.Event((1===t?"next":"prev")+".simplelightbox"));var n=b+t;if(!(x||(0>n||n>=c.length)&&0==i.loop)){b=0>n?c.length-1:n>c.length-1?0:n,e(".sl-wrapper .sl-counter .sl-current").text(b+1);var a={opacity:0};i.animationSlide&&(p?q(i.animationSpeed/1e3,-100*t-o+"px"):a.left=parseInt(e(".sl-image").css("left"))+-100*t+"px"),e(".sl-image").animate(a,i.animationSpeed,function(){setTimeout(function(){var n=c.eq(b);s.attr("src",n.attr("href")),-1==d.indexOf(n.attr("href"))&&u.show(),e(".sl-caption").remove(),k(t),i.preloading&&R()},100)})}},P=function(){if(!x){var t=c.eq(b),n=!1;t.trigger(e.Event("close.simplelightbox")),e(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast",function(){i.disableScroll&&W("show"),e(".sl-wrapper, .sl-overlay").remove(),M(),n||t.trigger(e.Event("closed.simplelightbox")),n=!0}),s=e(),r=!1,x=!1}},W=function(i){if("hide"==i){var a=t.innerWidth;if(!a){var o=n.documentElement.getBoundingClientRect();a=o.right-Math.abs(o.left)}if(n.body.clientWidth<a){var s=n.createElement("div"),l=parseInt(e("body").css("padding-right"),10);s.className="sl-scrollbar-measure",e("body").append(s);var r=s.offsetWidth-s.clientWidth;e(n.body)[0].removeChild(s),e("body").data("padding",l),r>0&&e("body").addClass("hidden-scroll").css({"padding-right":l+r})}}else e("body").removeClass("hidden-scroll").css({"padding-right":e("body").data("padding")})};return T(),c.on("click."+h,function(t){if(C(this)){if(t.preventDefault(),x)return!1;S(e(this))}}),e(n).on("click."+h+" touchstart."+h,function(t){r&&i.docClose&&0==e(t.target).closest(".sl-image").length&&0==e(t.target).closest(".sl-navigation").length&&P()}),i.disableRightClick&&e(n).on("contextmenu",".sl-image img",function(e){return!1}),i.enableKeyboard&&e(n).on("keyup."+h,function(e){if(e.preventDefault(),o=0,r){var t=e.keyCode;27==t&&P(),(37==t||39==e.keyCode)&&O(39==e.keyCode?1:-1)}}),this.open=function(t){t=t||e(this[0]),S(t)},this.next=function(){O(1)},this.prev=function(){O(-1)},this.close=function(){P()},this.destroy=function(){e(n).unbind("click."+h).unbind("keyup."+h),P(),e(".sl-overlay, .sl-wrapper").remove()},this}}(jQuery,window,document);