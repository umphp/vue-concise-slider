!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define("vue-concise-slider",[],i):"object"==typeof exports?exports["vue-concise-slider"]=i():t["vue-concise-slider"]=i()}(this,function(){return function(t){function i(n){if(e[n])return e[n].exports;var s=e[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}var e={};return i.m=t,i.c=e,i.p="",i(0)}([function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=e(1),o=n(s),a=e(20),r=n(a),l=e(25),d=n(l),c=e(30),u=n(c),p=e(35),h=n(p);new Vue(o.default),new Vue(r.default),new Vue(d.default),new Vue(u.default),new Vue(h.default)},function(t,i,e){var n,s,o={};e(2),n=e(6),s=e(19),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(3);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}",""])},function(t,i){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],i=0;i<this.length;i++){var e=this[i];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(i,e){"string"==typeof i&&(i=[[null,i,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<i.length;s++){var a=i[s];"number"==typeof a[0]&&n[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(t,i,e){function n(t,i){for(var e=0;e<t.length;e++){var n=t[e],s=u[n.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](n.parts[o]);for(;o<n.parts.length;o++)s.parts.push(l(n.parts[o],i))}else{for(var a=[],o=0;o<n.parts.length;o++)a.push(l(n.parts[o],i));u[n.id]={id:n.id,refs:1,parts:a}}}}function s(t){for(var i=[],e={},n=0;n<t.length;n++){var s=t[n],o=s[0],a=s[1],r=s[2],l=s[3],d={css:a,media:r,sourceMap:l};e[o]?e[o].parts.push(d):i.push(e[o]={id:o,parts:[d]})}return i}function o(t,i){var e=f(),n=b[b.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(i,n.nextSibling):e.appendChild(i):e.insertBefore(i,e.firstChild),b.push(i);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(i)}}function a(t){t.parentNode.removeChild(t);var i=b.indexOf(t);i>=0&&b.splice(i,1)}function r(t){var i=document.createElement("style");return i.type="text/css",o(t,i),i}function l(t,i){var e,n,s;if(i.singleton){var o=g++;e=m||(m=r(i)),n=d.bind(null,e,o,!1),s=d.bind(null,e,o,!0)}else e=r(i),n=c.bind(null,e),s=function(){a(e)};return n(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;n(t=i)}else s()}}function d(t,i,e,n){var s=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=v(i,s);else{var o=document.createTextNode(s),a=t.childNodes;a[i]&&t.removeChild(a[i]),a.length?t.insertBefore(o,a[i]):t.appendChild(o)}}function c(t,i){var e=i.css,n=i.media,s=i.sourceMap;if(n&&t.setAttribute("media",n),s&&(e+="\n/*# sourceURL="+s.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}var u={},p=function(t){var i;return function(){return"undefined"==typeof i&&(i=t.apply(this,arguments)),i}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=p(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,b=[];t.exports=function(t,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=h()),"undefined"==typeof i.insertAt&&(i.insertAt="bottom");var e=s(t);return n(e,i),function(t){for(var o=[],a=0;a<e.length;a++){var r=e[a],l=u[r.id];l.refs--,o.push(l)}if(t){var d=s(t);n(d,i)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete u[l.id]}}}};var v=function(){var t=[];return function(i,e){return t[i]=e,t.filter(Boolean).join("\n")}}()},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=n(s);i.default={el:"#sliderbasic",data:function(){return{someList:[],sliderinit:{currentPage:1,thresholdDistance:100,thresholdTime:300,duration:300,timingFunction:"ease",loop:!1,autoplay:0}}},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:'<div class="slide1">slide1</div>',style:{background:"#1bbc9b"}},{html:"slide2",style:{background:"#4bbfc3"}},{html:"slide3",style:{background:"#7baabe"}}]},2e3)},components:{slider:o.default},methods:{turnTo:function(t){this.$children[0].$emit("slideTo",t)},slideNext:function(){this.$children[0].$emit("slideNext")},slidePre:function(){this.$children[0].$emit("slidePre")},autoplayStart:function(){this.$children[0].$emit("autoplayStart")},autoplayStop:function(){this.$children[0].$emit("autoplayStop")},loadingShow:function(){this.$children[0].$emit("loadingShow")},loadingHide:function(){this.$children[0].$emit("loadingHide")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff"}})},slide:function(t){console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}}},function(t,i,e){var n,s,o={};e(8),n=e(10),s=e(18),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(9);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".slider-container{margin:0 auto;overflow:hidden;z-index:1;height:100%;width:100%;position:relative;white-space:nowrap}.slider-center-center{margin:auto;z-index:1;position:absolute;top:0;left:0;right:0;bottom:0}.slider-touch{height:100%}.slider-wrapper{box-sizing:content-box;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;position:relative;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%;z-index:1}.swiper-container-vertical .slider-wrapper{-webkit-box-orient:vertical;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.slider-item{-ms-flex-negative:0;flex-shrink:0;height:100%;position:relative;width:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#fff none repeat scroll 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:40px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;color:#fff;background-position:50%!important;background-size:cover!important}.slider-pagination{position:absolute;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:10}.slider-pagination-bullets{bottom:10px;left:0;width:100%}.slider-pagination-bullet{background:#000 none repeat scroll 0 0;border-radius:100%;display:inline-block;height:8px;opacity:.2;width:8px;cursor:pointer;margin:0 5px}.swiper-container-vertical .slider-pagination-bullets{bottom:auto;left:auto;width:auto;right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.swiper-container-vertical .slider-pagination-bullet{display:block;margin:5px 0}.slider-pagination-bullet-active{background:#fff none repeat scroll 0 0;opacity:1}.slider-loading{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.slider-button-next,.slider-button-prev{background-position:50%;background-repeat:no-repeat;background-size:27px 44px;cursor:pointer;height:44px;margin-top:-22px;position:absolute;top:50%;width:27px;z-index:10}.slider-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z' fill='%23fff'/%3E%3C/svg%3E\");left:10px;right:auto}.slider-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 27 44'%3E%3Cpath d='M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z' fill='%23fff'/%3E%3C/svg%3E\");left:auto;right:10px}@media screen and (max-width:414px){.slider-container{height:200px;margin:20px auto;width:90%}}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(11),o=n(s),a=e(12),r=n(a),l=e(15),d=n(l);i.default={props:["sliderinit","pages"],data:function(){return{basicdata:{poswidth:"0",posheight:"0",start:{},end:{},currentPage:this.sliderinit.currentPage||0},temporaryData:{prefixes:(0,o.default)(),transitionEnding:!1,setIntervalid:"",tracking:!1,animation:!1,loading:!1,containerClass:{"swiper-container-vertical":!1},pageInit:!1}}},computed:{styleobj:function(){var t={};return t.transform="translate3D("+this.basicdata.poswidth+","+this.basicdata.posheight+",0)",t[this.temporaryData.prefixes.transition+"TimingFunction"]=this.sliderinit.timingFunction||"ease",t[this.temporaryData.prefixes.transition+"Duration"]=(this.temporaryData.animation?this.sliderinit.duration||300:0)+"ms",t},pagenums:function(){var t=this;return this.pages.length&&!this.temporaryData.pageInit&&(this.temporaryData.pageInit=!0,this.$nextTick(function(){t.slide(t.basicdata.currentPage,"animationnone")})),this.pages.length},currentView:function(){return this.sliderinit.loop?"basicLoop":"basic"},currentWidth:{get:function(){if(!this.pagenums)return 0;var t=void 0,i=this.basicdata.currentPage;this.sliderinit.loop&&(i=this.sliderinit.infinite?this.basicdata.currentPage+(this.sliderinit.infinite<=this.pagenums?this.sliderinit.infinite:this.pagenums):this.basicdata.currentPage+1);for(var e in this.$el.children)/slider-touch/gi.test(this.$el.children[e].className)&&(t=this.$el.children[e]);var n=t.children[0].children,s=n[i].offsetLeft;return this.sliderinit.loop&&(s=n[i].offsetLeft),s},set:function(t){return t}},currentHeight:function(){if(!this.pages.length)return 0;var t=0,i=void 0,e=this.basicdata.currentPage-1;this.sliderinit.loop&&(e=this.sliderinit.infinite?this.basicdata.currentPage+(this.sliderinit.infinite<=this.pages.length?this.sliderinit.infinite:this.pages.length)-1:this.basicdata.currentPage+1);for(var n in this.$el.children)/slider-touch/gi.test(this.$el.children[n].className)&&(i=this.$el.children[n]);var s=i.children[0].children;for(var o in s)o<=e&&(t+=s[o].offsetHeight,t+=parseInt(s[o].style.marginTop||0),t+=parseInt(s[o].style.marginBottom||0));return t}},mounted:function(){var t=this,i=this;this.$emit("init",this.basicdata),this.$on("slideTo",function(i){t.slide(i)}),this.$on("slideNext",function(){t.next()}),this.$on("slidePre",function(){t.pre()}),this.$on("autoplayStart",function(e){t.sliderinit.autoplay=e||1e3,t.clock().begin(i)}),this.$on("autoplayStop",function(){t.sliderinit.autoplay=0,t.clock().stop(i)}),this.$on("loadingShow",function(){t.temporaryData.loading=!0}),this.$on("loadingHide",function(){t.temporaryData.loading=!1}),this.sliderinit.autoplay&&this.clock().begin(i),"vertical"===this.sliderinit.direction&&(this.temporaryData.containerClass["swiper-container-vertical"]=!0)},methods:{swipeStart:function(t){var i=this;if(!this.temporaryData.transitionEnding)if(this.temporaryData.animation=!1,this.sliderinit.autoplay&&this.clock().stop(i),this.sliderinit.preventDocumentMove===!0&&document.addEventListener("touchmove",i.preventDefault(t)),"touchstart"===t.type){if(t.touches.length>1)return void(this.temporaryData.tracking=!1);this.temporaryData.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.targetTouches[0].clientX,this.basicdata.start.y=t.targetTouches[0].clientY,this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY}else this.temporaryData.tracking=!0,this.basicdata.start.t=(new Date).getTime(),this.basicdata.start.x=t.clientX,this.basicdata.start.y=t.clientY,this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY},swipeMove:function(t){if(this.temporaryData.tracking){if("touchmove"===t.type?(t.preventDefault(),this.basicdata.end.x=t.targetTouches[0].clientX,this.basicdata.end.y=t.targetTouches[0].clientY):(t.preventDefault(),this.basicdata.end.x=t.clientX,this.basicdata.end.y=t.clientY),"vertical"===this.sliderinit.direction)return void(this.basicdata.posheight=-this.currentHeight+this.basicdata.end.y-this.basicdata.start.y+"px");this.basicdata.poswidth=-this.currentWidth+this.basicdata.end.x-this.basicdata.start.x+"px"}},swipeEnd:function(t){this.temporaryData.tracking=!1;var i=(new Date).getTime(),e=i-this.basicdata.start.t,n=this.basicdata.end.x-this.basicdata.start.x,s=this.basicdata.end.y-this.basicdata.start.y;if(this.sliderinit.autoplay){var o=this;setTimeout(function(){o.clock().begin(o)},this.sliderinit.autoplay)}if(document.removeEventListener("touchmove",this.preventDefault(t)),e>this.sliderinit.thresholdTime)return void this.slide(this.basicdata.currentPage);if("vertical"!==this.sliderinit.direction){if(n>this.sliderinit.thresholdDistance&&Math.abs(s)<this.sliderinit.thresholdDistance)return void this.pre();if(-n>this.sliderinit.thresholdDistance&&Math.abs(s)<this.sliderinit.thresholdDistance)return void this.next();if(!(e<300&&Math.abs(n)<10&&Math.abs(s)<10))return void this.slide(this.basicdata.currentPage);this.$emit("tap",this.basicdata),this.slide(this.basicdata.currentPage)}else{if(s>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance)return void this.pre();if(-s>this.sliderinit.thresholdDistance&&Math.abs(n)<this.sliderinit.thresholdDistance)return void this.next();if(!(e<300&&Math.abs(n)<10&&Math.abs(s)<10))return void this.slide(this.basicdata.currentPage);this.$emit("tap",this.basicdata),this.slide(this.basicdata.currentPage)}},pre:function(){this.basicdata.currentPage>=1?(this.basicdata.currentPage-=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&0===this.basicdata.currentPage?(this.basicdata.currentPage-=this.sliderinit.slidesToScroll||1,this.temporaryData.transitionEnding=!0,this.slide()):this.slide(),this.$emit("slide",this.basicdata)},next:function(){this.basicdata.currentPage<this.pagenums-1?(this.basicdata.currentPage+=this.sliderinit.slidesToScroll||1,this.slide()):this.sliderinit.loop&&this.basicdata.currentPage===this.pagenums-1?(this.basicdata.currentPage+=this.sliderinit.slidesToScroll||1,this.temporaryData.transitionEnding=!0,this.slide()):this.slide(),this.$emit("slide",this.basicdata)},slide:function(t,i){var e=this;e.temporaryData.animation=!0,"animationnone"===i&&(e.temporaryData.animation=!1),(t||0===t)&&(e.basicdata.currentPage=t),"vertical"===e.sliderinit.direction?e.basicdata.posheight=-e.currentHeight+"px":e.basicdata.poswidth=-e.currentWidth+"px",e.basicdata.currentPage<0||e.basicdata.currentPage>=e.pagenums},clock:function(){return{begin:function(t){t.temporaryData.setIntervalid||(t.temporaryData.setIntervalid=setInterval(function(){t.next(),t.basicdata.currentPage!==t.pagenums-1||t.sliderinit.loop||(clearInterval(t.temporaryData.setIntervalid),t.temporaryData.setIntervalid=0)},t.sliderinit.autoplay))},stop:function(t){clearInterval(t.temporaryData.setIntervalid),t.temporaryData.setIntervalid=0}}},preventDefault:function(t){t.preventDefault()},onTransitionEnd:function(){var t=this;setTimeout(function(){t.sliderinit.loop&&(t.temporaryData.transitionEnding=!1,t.basicdata.currentPage<0?t.slide(t.pagenums+t.basicdata.currentPage,"animationnone"):t.basicdata.currentPage>=t.pagenums&&t.slide(0+t.basicdata.currentPage-t.pagenums,"animationnone"))},0)}},components:{basic:r.default,basicLoop:d.default}}},function(t,i){(function(t){"use strict";function e(){var i=void 0,e=void 0,n=void 0,s=void 0;return function(){var o=document.createElement("_"),a=o.style,r=void 0;""===a[r="webkitTransition"]&&(n="webkitTransitionEnd",e=r),""===a[r="transition"]&&(n="transitionend",e=r),""===a[r="webkitTransform"]&&(i=r),""===a[r="msTransform"]&&(i=r),""===a[r="transform"]&&(i=r),document.body.insertBefore(o,null),a[i]="translate3d(0, 0, 0)",s=!!t.getComputedStyle(o).getPropertyValue(i),document.body.removeChild(o)}(),{transform:i,transition:e,transitionEnd:n,hasTranslate3d:s}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=e}).call(i,function(){return this}())},function(t,i,e){var n,s,o={};n=e(13),s=e(14),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:["sliderinit","pages"],data:function(){return{}}}},function(t,i){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-for="item in pages"> <div class=slider-item :style=item.style> <div v-html=item.html></div> </div> </template> </template> </div> '},function(t,i,e){var n,s,o={};n=e(16),s=e(17),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={props:["sliderinit","pages"],data:function(){return{}}}},function(t,i){t.exports=' <div class=slider-wrapper> <template v-if=pages.length> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index+sliderinit.infinite-pages.length>=0" class=slider-item :style=item.style v-html=item.html></div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[pages.length-1].style v-html=pages[pages.length-1].html></div> </template> <template v-for="item in pages"> <div class=slider-item :style=item.style v-html=item.html></div> </template> <template v-if=sliderinit.infinite v-for="(item, index) in pages"> <div v-if="index-sliderinit.infinite<0" class=slider-item :style=item.style v-html=item.html></div> </template> <template v-if=!sliderinit.infinite> <div class=slider-item :style=pages[0].style v-html=pages[0].html></div> </template> </template> </div> '},function(t,i){t.exports=' <div class=slider-container :class=temporaryData.containerClass> <div class=slider-touch :style=styleobj @touchmove=swipeMove @touchstart=swipeStart @touchend=swipeEnd @mousedown=swipeStart @mouseup=swipeEnd @mousemove=swipeMove @webkit-transition-end=onTransitionEnd @transitionend=onTransitionEnd> <component :pages=pages :sliderinit=sliderinit v-bind:is=currentView></component> </div> <div class="slider-pagination slider-pagination-bullets"> <template v-for="n in pagenums"> <span @click=slide(n-1) class=slider-pagination-bullet :class="n-1 === basicdata.currentPage? \'slider-pagination-bullet-active\':\'\'"></span> </template> </div> <div class=slider-loading v-show=!pagenums||temporaryData.loading> <slot name=loading></slot> </div> </div> '},function(t,i){t.exports=' <div> <div style="width:70%;margin:20px auto;height:400px"> <slider :pages=someList :sliderinit=sliderinit @slide=slide @tap=onTap @init=onInit> <div slot=loading> <div class=loadingDot> <i></i> <i></i> <i></i> <i></i> </div> </div> </slider> </div> <div class=sliderButton> <button @click=slidePre>上一页</button> <button @click=slideNext>下一页</button> <button @click=appendslider>添加一页</button> <button @click=turnTo(2)>跳转到第三页</button> <button @click=autoplayStart>启动自动滚动</button> <button @click=autoplayStop>停止自动滚动</button> <button @click=loadingShow>loading显示</button> <button @click=loadingHide>loading关闭</button> </div> </div> '},function(t,i,e){var n,s,o={};e(21),n=e(23),s=e(24),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(22);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=n(s);i.default={el:"#slidervariableWidth",data:function(){return{someList:[],sliderinit:{currentPage:1,tracking:!1,thresholdDistance:100,thresholdTime:300}}},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:"slide1",style:{background:"#1bbc9b",width:"80%","margin-right":"20px"}},{html:"slide2",style:{background:"#4bbfc3",width:"60%","margin-right":"20px"}},{html:"slide3",style:{background:"#7baabe",width:"40%","margin-right":"20px"}}]},2e3)},components:{slider:o.default},methods:{turnTo:function(t){this.$children[0].$emit("slideTo",t)},slideNext:function(){this.$children[0].$emit("slideNext")},slidePre:function(){this.$children[0].$emit("slidePre")},autoplayStart:function(){this.$children[0].$emit("autoplayStart")},autoplayStop:function(){this.$children[0].$emit("autoplayStop")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff"}})},slide:function(t){console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}}},function(t,i){t.exports=' <div> <div style="width:70%;margin:20px auto;height:400px"> <slider :pages=someList :sliderinit=sliderinit @slide=slide @tap=onTap @init=onInit> <div slot=loading> <div class=loadingDot> <i></i> <i></i> <i></i> <i></i> </div> </div> </slider> </div> <div class=sliderButton> <button @click=slidePre>上一页</button> <button @click=slideNext>下一页</button> <button @click=appendslider>添加一页</button> <button @click=turnTo(2)>跳转到第三页</button> <button @click=autoplayStart>启动自动滚动</button> <button @click=autoplayStop>停止自动滚动</button> </div> </div> '},function(t,i,e){var n,s,o={};e(26),n=e(28),s=e(29),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(27);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=n(s);i.default={el:"#sliderbasicloop",data:function(){return{someList:[],sliderinit:{currentPage:1,tracking:!1,thresholdDistance:100,thresholdTime:300,loop:!0}}},components:{slider:o.default},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:'<div class="slide1">slide1</div>',style:{background:"#1bbc9b"}},{html:"slide2",style:{background:"#4bbfc3"}},{html:"slide3",style:{background:"#7baabe"}}]},2e3)},methods:{turnTo:function(t){this.$children[0].$emit("slideTo",t)},slideNext:function(){this.$children[0].$emit("slideNext")},slidePre:function(){this.$children[0].$emit("slidePre")},autoplayStart:function(){this.$children[0].$emit("autoplayStart")},autoplayStop:function(){this.$children[0].$emit("autoplayStop")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff"}})},slide:function(t){console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}}},function(t,i){t.exports=' <div> <div style="width:70%;margin:20px auto;height:400px"> <slider :pages=someList :sliderinit=sliderinit @slide=slide @tap=onTap @init=onInit> <div slot=loading> <div class=loadingDot> <i></i> <i></i> <i></i> <i></i> </div> </div> </slider> </div> <div class=sliderButton> <button @click=slidePre>上一页</button> <button @click=slideNext>下一页</button> <button @click=appendslider>添加一页</button> <button @click=turnTo(2)>跳转到第三页</button> <button @click=autoplayStart>启动自动滚动</button> <button @click=autoplayStop>停止自动滚动</button> </div> </div> '},function(t,i,e){var n,s,o={};e(31),n=e(33),s=e(34),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(32);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=n(s);i.default={el:"#slidervertical",data:function(){return{someList:[],sliderinit:{currentPage:1,tracking:!1,thresholdDistance:100,thresholdTime:300,direction:"vertical",loop:!0,infinite:4}}},components:{slider:o.default},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:'<div class="slide1">slide1</div>',style:{background:"#1bbc9b"}},{html:"slide2",style:{background:"#4bbfc3"}},{html:"slide3",style:{background:"#7baabe"}}]},2e3)},methods:{turnTo:function(t){this.$children[0].$emit("slideTo",t)},slideNext:function(){this.$children[0].$emit("slideNext")},slidePre:function(){this.$children[0].$emit("slidePre")},autoplayStart:function(){this.$children[0].$emit("autoplayStart")},autoplayStop:function(){this.$children[0].$emit("autoplayStop")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff"}})},slide:function(t){console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}}},function(t,i){t.exports=' <div> <div style="width:70%;margin:20px auto;height:400px"> <slider :pages=someList :sliderinit=sliderinit @slide=slide @tap=onTap @init=onInit> <div slot=loading> <div class=loadingDot> <i></i> <i></i> <i></i> <i></i> </div> </div> </slider> </div> <div class=sliderButton> <button @click=slidePre>上一页</button> <button @click=slideNext>下一页</button> <button @click=appendslider>添加一页</button> <button @click=turnTo(2)>跳转到第三页</button> <button @click=autoplayStart>启动自动滚动</button> <button @click=autoplayStop>停止自动滚动</button> </div> </div> '},function(t,i,e){var n,s,o={};e(36),n=e(38),s=e(39),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports.default);var a="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;s&&(a.template=s),a.computed||(a.computed={}),Object.keys(o).forEach(function(t){var i=o[t];a.computed[t]=function(){return i}})},function(t,i,e){var n=e(37);"string"==typeof n&&(n=[[t.id,n,""]]);e(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,i,e){i=t.exports=e(4)(),i.push([t.id,".sliderButton{text-align:center}.sliderButton button{display:inline-block;background:#fff;border-radius:3px;height:30px;border:1px solid #333;line-height:30px;margin-left:10px;padding:0 15px;margin-top:10px}",""])},function(t,i,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(i,"__esModule",{value:!0});var s=e(7),o=n(s);i.default={el:"#slidermultipleSlide",data:function(){return{someList:[],sliderinit:{currentPage:0,tracking:!1,thresholdDistance:100,thresholdTime:300,infinite:4,slidesToScroll:4,loop:!0}}},components:{slider:o.default},mounted:function(){var t=this;setTimeout(function(){t.someList=[{html:"slide1",style:{background:"#1bbc9b",width:"23.5%","margin-right":"2%"}},{html:"slide2",style:{background:"#4bbfc3",width:"23.5%","margin-right":"2%"}},{html:"slide3",style:{background:"#7baabe",width:"23.5%","margin-right":"2%"}},{html:"slide4",style:{background:"#7caabe",width:"23.5%","margin-right":"2%"}},{html:"slide5",style:{background:"#1bbc9b",width:"23.5%","margin-right":"2%"}},{html:"slide6",style:{background:"#4bbfc3",width:"23.5%","margin-right":"2%"}},{html:"slide7",style:{background:"#7baabe",width:"23.5%","margin-right":"2%"}},{html:"slide8",style:{background:"#7caabe",width:"23.5%","margin-right":"2%"}}]},2e3)},methods:{turnTo:function(t){this.$children[0].$emit("slideTo",t)},slideNext:function(){this.$children[0].$emit("slideNext")},slidePre:function(){this.$children[0].$emit("slidePre")},autoplayStart:function(){this.$children[0].$emit("autoplayStart")},autoplayStop:function(){this.$children[0].$emit("autoplayStop")},appendslider:function(){this.someList.push({html:"slidernew",style:{background:"#333",color:"#fff",width:"23.5%","margin-right":"2%"}})},slide:function(t){console.log(t)},onTap:function(t){console.log(t)},onInit:function(t){console.log(t)}}}},function(t,i){t.exports=' <div> <div style="width:70%;margin:20px auto;height:400px"> <slider :pages=someList :sliderinit=sliderinit @slide=slide @tap=onTap @init=onInit> <div slot=loading> <div class=loadingDot> <i></i> <i></i> <i></i> <i></i> </div> </div> </slider> </div> <div class=sliderButton> <button @click=slidePre>上一页</button> <button @click=slideNext>下一页</button> <button @click=appendslider>添加一页</button> <button @click=turnTo(2)>跳转到第三页</button> <button @click=autoplayStart>启动自动滚动</button> <button @click=autoplayStop>停止自动滚动</button> </div> </div> '}])});