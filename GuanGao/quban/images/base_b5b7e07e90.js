define("wap/showcase/base/fuwuhover",["require","zenjs/util/args"],function(e){var o=e("zenjs/util/args"),t=$('<div class="fuwu-hover-container"><p class="pull-left">感觉不错? 赶紧联系拍档吧!</p><a class="btn btn-green pull-right" href="">去拍档主页</a></div>');return function(){var e=o.get("fpd");e&&""!==e&&(t.find("a").attr("href",_global.url.wap+"/fuwu/provider/"+e+"/detail"),$("body").append(t))}}),define("bower_components/imagePreview/views/wx_preview",[],function(){function e(e){return(e.attr("data-src")||e.attr("src")).replace(/!.*?\.jpg/i,"!640x320.jpg").replace(/\?imageView2\/.*/i,"!640x320.jpg")}function o(e){var o,t=e.closest("a");return!!(t.length&&(o=t.attr("href"))&&/[http|https|tel|mailto]:/i.test(o))}function t(){var o=e($(this));i(o,[o])}var a=[],i=function(e,o){window.WeixinJSBridge&&window.WeixinJSBridge.invoke("imagePreview",{current:e,urls:o})},n={init:function(n){n=n?n:".js-view-image-list";var s=$(n);if(!s.data("swp-preview-init")){s.data("swp-preview-init",!0);$(".js-view-image").each(function(){var t=$(this),n=e(t);o(t)||t.width()>=0&&n&&(a.push(n),t.on("click",function(){i(n,a)}))}),s.each(function(t){var a=$(this);a.on("click","img",function(t){var n=a.find(".js-view-image-item");if(0===n.length&&(n=a.find("img")),!o($(t.target))){n=n.map(function(){return e($(this))}).toArray();var s=e($(this));n.indexOf(s)<0&&(n=[s]),i(s,n)}})}),$(document.body).off("click",".js-view-single-image",t).on("click",".js-view-single-image",t)}},clear:function(){a=[]}};return window.imagePreview=n,n}),define("bower_components/last_position/main",["require","zenjs/util/args"],function(e){function o(e){function o(){clearTimeout(h);var e=i.scrollTop();a.forEach(function(e,o){var t=$(e);0!==t.length&&t.each(function(o,t){try{sessionStorage.setItem(d+"_"+e+"_"+o,$(t).css("height"))}catch(e){}})});try{sessionStorage.setItem(d,e)}catch(e){}}if(location&&sessionStorage){for(var a=e.needMemoryClass||[],i=$(window),n=["sf","fm","reft","spm"],s=location.href,r=0,l=n.length;r<l;r++)s=t.remove(s,n[r]);var c,d=location.pathname+"?"+(s.split("?")[1]||"");try{c=parseInt(sessionStorage.getItem(d))}catch(e){c=0}a.forEach(function(e,o){var t=$(e);if(0!==t.length){var a;t.each(function(o,t){try{a=sessionStorage.getItem(d+"_"+e+"_"+o)}catch(e){a="auto"}$(t).css({"min-height":a})})}});var u=parseInt(i.height())+c;$("body").css({"min-height":u}),c>0&&(i.scrollTop(c),i.trigger("scroll"));var h;i.scroll(function(){setTimeout(o,1e3)})}}var t=e("zenjs/util/args");return o}),function(){function e(){clearTimeout(i),o.addClass("done")}var o=$(".js-tpl-weixin-list-item"),t=$(".js-tpl-weixin-bg");if(!(t.length<=0)){var a=t[0],i=setTimeout(function(){e()},2e3);a.onload=a.onerror=a.onabort=e,a.complete&&e()}}(),function(){var e=$(".js-tpl-shop");e.length&&$._ajax({url:"/v2/showcase/homepage/goodscount.json",type:"GET",dataType:"json",data:{kdt_id:window._global.kdt_id}}).done(function(o){if(0==+o.code){var t=e.find(".js-all-goods"),a=e.find(".js-new-goods"),i=e.find(".js-order"),n=o.data,s="";s=(n.all_goods.count+"").length,t.find("a").attr("href",n.all_goods.url),t.find(".count").html(n.all_goods.count).addClass("l-"+s),s=(n.new_goods.count+"").length,a.find("a").attr("href",n.new_goods.url),a.find(".count").html(n.new_goods.count).addClass("l-"+s),i.find("a").attr("href",n.order.url)}})}(),function(){$(".js-select-coupon").on("click",function(){var e=$(this),o=window.motify;$._ajax({url:"/v2/ump/promocard/fetchalias.json",type:"POST",data:{kdt_id:e.data("kdt-id"),id:e.data("id")}}).done(function(e){0==+e.code?window.location.href=e.data.url:o.log(e.msg||"网络错误")}).fail(function(){o.log("网络错误")})})}(),window.init_custom_notice=function(e){var o=$(".js-scroll-notice",$(e||"body"));o.length&&o.each(function(){var e,o,t=$(this),a=t.parents(".custom-notice-inner"),i=a.width();t.parent().css("width",$(window).width()-20);var n=document.createElement("span");n.innerText=t.text(),n.style.whiteSpace="nowrap",n.style.fontSize="12px",document.body.appendChild(n),o=n.offsetWidth+20,document.body.removeChild(n),t.removeClass("scroll-notice-default"),o<=i||(t.addClass("scroll-notice"),e=Math.ceil((o+i)/40),t.css({"-webkit-animation-duration":e+"s","-moz-animation-duration":e+"s","animation-duration":e+"s"}))})},window.init_custom_notice(),define("wap/showcase/homepage/homepage",function(){}),function(){var e=$(".js-custom-level"),o=$(".js-custom-point"),t=$(".js-custom-level-title-section");if(!(+_global.fans_id<=0&&+_global.buyer_id<=0)){var a=window._global.url.wap+"/showcase/component/point.jsonp?"+$.param({kdt_id:window._global.kdt_id});(e.length>0||o.length>0)&&$._ajax({dataType:"jsonp",type:"GET",url:a,success:function(a){0==+a.code&&(e.html(a.data.nickname||"会员"),o.html(a.data.point||"暂无数据"),t.removeClass("hide"))}})}}(),define("wap/uc/title",function(){}),define("wap/components/app_h5/main",["require","exports","module"],function(e,o,t){t.exports={currentUrl:"",currentTime:Date.now(),doCall:function(e,o){window.onReady("YouzanJSBridge",function(){window.YouzanJSBridge.doCall(e,o)})},compareVersion:function(e,o){for(e=e.split(".").join(""),o=o.split(".").join("");e.length!==o.length;)e.length>o.length?o+="0":e+="0";return e=Number(e),o=Number(o),e>o?"gt":e===o?"eq":"lt"},eq:function(e,o){return"eq"===this.compareVersion(e,o)},gte:function(e,o){var t=this.compareVersion(e,o);return"eq"===t||"gt"===t},lte:function(e,o){var t=this.compareVersion(e,o);return"eq"===t||"lt"===t},configNative:function(e){this.doCall("configNative",e)},getData:function(e,o){o.datatype=e,this.doCall("getData",o)},putData:function(e,o){if("youzanwxd"===_global.platform)if(this.gte(_global.platform_version,"1.5.0"))o.datatype=e,this.doCall("putData",o);else switch(e){case"supplierInfo":this.doCall("tellSupplierInfo",{supplier_kdt_id:o.supplier_kdt_id});break;case"goodsInfo":this.doCall("tellGoodsInfo",{goods_id:o.goods_id})}else o.datatype=e,this.doCall("putData",o)},gotoWebview:function(e){if(this.currentUrl===e.url&&Date.now()-this.currentTime<100)this.currentTime=Date.now();else if(this.currentUrl=e.url,this.currentTime=Date.now(),"youzanwxd"===_global.platform)if(this.gte(_global.platform_version,"1.5.0"))this.doCall("gotoWebview",e);else switch(e.page){case"supplierHomepage":this.doCall("goHomePage",{homeurl:e.url,name:e.name});break;case"goodsList":this.doCall("viewGoodsList",{url:e.url});break;case"goodsDetail":this.doCall("viewGoodsDetail",{detail_url:e.url,average_profit:e.average_profit,alias:e.alias,seller_goods_alias:e.seller_goods_alias});break;case"newsDetail":this.doCall("viewNewsDetail",{detail_url:e.url})}else this.doCall("gotoWebview",e)},gotoNative:function(e){if("youzanwxd"===_global.platform)if(this.gte(_global.platform_version,"1.5.0"))this.doCall("gotoNative",e);else switch(e.page){case"addGoods":this.doCall("addGoodsToShop",{alias:e.alias,seller_goods_alias:e.seller_goods_alias})}else this.doCall("gotoNative",e)},doAction:function(e){if("youzanwxd"===_global.platform)if(this.gte(_global.platform_version,"1.5.0"))this.doCall("doAction",e);else switch(e.action){case"back":this.doCall("gotoLogin",{});break;case"appWXPay":this.doCall("appWXPay",{kdt_id:e.kdt_id,order_no:e.order_no});break;case"deliverGoods":this.doCall("deliverGoods",{order_number:e.order_number})}else if("youzanwsc"===_global.platform)if(this.gte(_global.platform_version,"2.8.5"))this.doCall("doAction",e);else switch(e.action){case"back":this.doCall("previousStep",{})}},onAddGoodsSuccess:function(e){window.onReady("YouzanJSBridge",function(){window.YouzanJSBridge.on("addGoodsSuccess",function(o){e(o)})})},on:function(e,o){window.onReady("YouzanJSBridge",function(){window.YouzanJSBridge.on("dataReady",function(t){var a=t.datatype,i=t.data,n={};if("object"==typeof i)n=i;else try{n=JSON.parse(i)}catch(e){}a===e&&o(n)})})}}}),define("wap/showcase/shop_nav/main",["vendor/zepto/outer","wap/components/app_h5/main","zenjs/util/ua"],function(e,o,t){var a=$("#shop-nav");if(a.length&&window._global.showcase_type){a.hide();var i=$(),n=i.find(".js-nav-pop"),s=function(e){var o=$(e.target),t=o.parents(".nav-item"),a=o.hasClass(".js-mainmenu")?o:t.find(".js-mainmenu"),i=t.find(".js-submenu"),n=i.find(".arrow"),s=o.parents(".js-navmenu"),r=s.find(".nav-item");i.css("opacity","0").toggle();var l=r.length,c=r.index(t),d=a.outerWidth(),u=(i.outerWidth()-a.outerWidth())/2,h=i.outerWidth()/2;if(0===i.size())$(".js-submenu:visible").hide();else{var f=i.outerWidth(),p=t.outerWidth(),m="auto",g="auto",w="auto",v="auto";0===c?(m=a.position().left-u,g=h-n.outerWidth()/2):c===l-1&&f>p?(w=8,v=d/2-w):(m=a.position().left-u,g=h-n.outerWidth()/2);m<0&&(g=g+m+5,m=5),w<0&&(v=v+w+5,w=5),i.css({left:m,right:w}),n.css({left:g,right:v}),$(".js-submenu:visible").not(i).hide(),i.css("opacity","1")}};$(document).on("click",function(e){i[0]&&(e.target==i[0]||$.contains(i[0],e.target)||($(".js-submenu:visible").hide(0),i.hasClass("nav-show")&&(i.removeClass("nav-show").addClass("nav-hide"),setTimeout(function(){n.hide(0)},500))))}),$("body").on("click",".js-navmenu",function(e){var o=$(e.target);e.fromMenu=!0,window.Logger&&Logger.log({fm:"click",title:o.prop("title")||o.text()})}),$("body").on("click",".js-submenu",function(e){var o=$(e.target);e.fromMenu=!0,window.Logger&&Logger.log({fm:"click",title:o.prop("title")||o.text()}),e.stopPropagation()}),$("body").on("click",".js-mainmenu",function(e){s(e)});var r;$(window).on("scroll",function(e){e.preventDefault(),i[0]&&i.hasClass("nav-show")&&(i.removeClass("nav-show").addClass("nav-hide"),setTimeout(function(){n.hide(0)},500))}),$("body").on("click",".js-nav-special",function(e){$(e.target);i[0]&&"animation"!=i.data("animation")&&(i.data("animation","animation"),i.hasClass("nav-show")?(i.removeClass("nav-show").addClass("nav-hide"),r=setTimeout(function(){n.css("display","none"),i.data("animation","")},600)):(n.css("display","block"),i.addClass("nav-show").removeClass("nav-hide"),setTimeout(function(){i.data("animation","")},600)))});var l=_global.open_app_config.hide_shop_nav,c="c2a7b9269fd095fa5b1467769433688"===_global.platform,d=_global.is_takeout_tpl;"youzanmars"==_global.platform&&"feature"==_global.showcase_type||c||l||d||$._ajax({url:"/v2/showcase/shopnav/nav.json?kdt_id="+window._global.kdt_id,type:"GET",dataType:"json",data:{showcase_type:window._global.showcase_type,url:window.location.href,css:"version_wap_css.stylesheets/wap/pages/showcase/shopnav_custom/shopnav_custom"},success:function(e){if(0==e.code){var o=e.data||{},t=o.html||"",s=o.css||"";if(window.Loader.async([s],function(){a.show()}),a.html(t),i=a.find(".js-navmenu"),i.length){n=i.find(".js-nav-pop");4!=i.data("type")&&$("body").addClass("body-fixed-bottom")}}}});var u=t.isIOS();$(".js-share-gift").on("click",function(){var e="http://img.yzcdn.cn/public_files/2015/11/08/5fc8b4ef2d3b54901da505fb8078c4f1.gif",t={action:"share",title:"朋友圈狂欢节，狂撒亿元现金券，抢到就是赚到！~",desc:"今年11.11，你的购物清单我承包了！",link:window.getShareLink(_global.lucky_money_url),imgs_url:[e]};u&&(t.imgs_url=e),o.doAction(t)})}}),window.Zepto&&function(e){e.fn.serializeArray=function(){var o,t,a=[],i=function(e){if(e.forEach)return e.forEach(i);a.push({name:o,value:e})};return this[0]&&e.each(this[0].elements,function(a,n){t=n.type,o=n.name,o&&"fieldset"!=n.nodeName.toLowerCase()&&!n.disabled&&"submit"!=t&&"reset"!=t&&"button"!=t&&"file"!=t&&("radio"!=t&&"checkbox"!=t||n.checked)&&i(e(n).val())}),a},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(o){e.push(encodeURIComponent(o.name)+"="+encodeURIComponent(o.value))}),e.join("&")},e.fn.submit=function(o){if(0 in arguments)this.bind("submit",o);else if(this.length){var t=e.Event("submit");this.eq(0).trigger(t),t.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),define("vendor/zepto/form",function(){}),define("wap/showcase/search_bar/main",["vendor/zepto/form"],function(){$.fn.searchBar=function(){var e=$.fn.searchBar.container;return e||(e=$.fn.searchBar.init()),this.each(function(){$(this).on("click",function(){e.css("display","block"),e.find(".search-input").focus()})})},$.fn.searchBar.keywords=function(e,o){$._ajax({url:"/v2/showcase/goods/searchSuggest.json",type:"GET",dataType:"json",timeout:5e3,data:{q:e,kdt_id:window._global.kdt_id},success:function(e){var t=e.code,a=e.data;if(0===t){var i="",n=a.tips,s=n.length;$(".js-tag-clear").addClass("hide"),s>0&&($.each(n,function(e,o){i+="<li><p>"+o+"</p></li>"}),s%2&&(i+="<li><p>&nbsp;</p></li>"),o.html(i).addClass("search-recom-list"))}},error:function(e,o,t){}})},$.fn.searchBar.init=function(){var e,o=window.localStorage,t=$('<div class="search-bar" style="display:none;"></div>'),a=$(['<form class="search-form" action="/v2/search" method="GET">','<input type="search" class="search-input" placeholder="搜索商品" name="q" value="">','<input type="hidden" name="kdt_id" value="'+window._global.kdt_id+'">','<a class="js-search-cancel search-cancel" href="javascript:;">取消</a>','<span class="search-icon"></span>','<span class="close-icon hide"></span>',"</form>"].join("")),i=$('<div class="history-wrap center"></div>'),n=a.find(".js-search-cancel"),s=$('<ul class="history-list search-recom-list js-history-list clearfix"></ul>'),r=$('<a class="tag tag-clear js-tag-clear c-gray-darker hide" href="javascript:;">清除历史搜索</a>'),l=a.find(".search-input"),c=a.find(".close-icon"),d="";return o&&(e=(JSON.parse(o.getItem("searchhistory"))||{}).result)&&($.each(e,function(e,o){d+="<li>"+o+"</li>"}),s.append(d).removeClass("search-recom-list"),r.removeClass("hide")),i.append(s).append(r),t.append(a).append(i),$("body").append(t),$.fn.searchBar.container=t,a.on("submit",function(){var t=$.trim(l.val());if(t.length>100)return void motify.log("搜索关键字不能超过100字");o&&t&&(e=e||[],e=$.grep(e,function(e){return e!=t}),e.unshift(t),o.setItem("searchhistory",JSON.stringify({result:e})))}).on("input",function(){var e=$.trim(l.val());""!==e?(c.removeClass("hide"),$.fn.searchBar.keywords(e,s)):(s.html(d).removeClass("search-recom-list"),i.removeClass("hide"),c.addClass("hide"),r.removeClass("hide"))}),$(".custom-search-input").on("blur",function(){""===$(this).val()&&$(".input-cover").removeClass("hide")}),c.on("click",function(){l.val(""),c.addClass("hide")}),n.on("click",function(){t.css("display","none")}),s.on("click","li",function(e){l.val($(e.currentTarget).text()),a.submit()}),r.on("click",function(){o&&(o.removeItem("searchhistory"),e=null),i.html("")}),t}}),require(["wap/showcase/base/fuwuhover","bower_components/imagePreview/views/wx_preview","bower_components/last_position/main","vendor/zepto/outer","wap/showcase/homepage/homepage","wap/uc/title","wap/showcase/shop_nav/main","wap/showcase/search_bar/main"],function(e,o,t){var a=window._global||{};e(),a.spm&&"h"===a.spm.logType&&a.spm.logType2&&window.onReady&&window.onReady("Logger",function(){window.Logger&&window.Logger.log({spm:a.spm.logType2+a.spm.logId2,fm:"display"})}),$(".js-search").searchBar(),"feature"!==a.showcase_type&&"homepage"!==a.showcase_type||t({needMemoryClass:[".custom-richtext",".js-goods-list.waterfall",".js-image-ad-seperated",".js-ump-activity",".custom-cube2-table-wrapper",".custom-nav-4"]}),a.goods_id||o.init(),function(){var e=$.map(window.showcase_js_map||[],function(e){return e.url});window.Loader.sync(e)}()}),define("main",function(){});