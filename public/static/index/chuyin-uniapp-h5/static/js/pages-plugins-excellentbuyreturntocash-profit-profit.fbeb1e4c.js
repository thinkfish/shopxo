(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-plugins-excellentbuyreturntocash-profit-profit"],{"0a8d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{src:{type:String,default:"empty"},empty_text:{type:String,default:"没有搜索内容"},textIcon:{type:String,default:"icon-sousuojieguoweikong"}},data:function(){return{typeSrc:{empty:"/static/emptyData.png"}}},computed:{setSrc:function(){return this.typeSrc[this.src]}}};e.default=n},"11c1":function(t,e,a){"use strict";a.r(e);var n=a("0a8d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"364e":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={tuiTabs:a("8c2a").default,uniLoadMore:a("3c58").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return-10==t.authCode?a("v-uni-view",{staticClass:"disPlayFlex",staticStyle:{width:"100%",height:"100%"}},[a("empty-data",{staticStyle:{width:"100%"},attrs:{empty_text:t.errorMsg}})],1):[t.initLoading?t._e():a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"order-express-navbar",staticStyle:{padding:"18upx 0 32upx 0"}},[a("tui-tabs",{attrs:{tabs:t.navList,isFixed:!1,currentTab:t.tabCurrentIndex,selectedColor:"#E41F19",sliderBgColor:"#E41F19",itemWidth:"16.66%"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick.apply(void 0,arguments)}}})],1),a("v-uni-swiper",{ref:"swiper",staticClass:"swiper-box",class:"mp-weixin"==t.platform||"wechat"==t.platform?"personal":"",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.navList,(function(e,n){return a("v-uni-swiper-item",{key:n,staticClass:"tab-content"},[a("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadData.apply(void 0,arguments)}}},[0===e.orderList.length?a("empty"):[t._l(e.orderList,(function(e,n){return a("v-uni-view",{key:e.id,staticClass:"disPlayFlex interal_list invoice_list flexSpaceBwteen",staticStyle:{"margin-top":"16upx"}},[a("v-uni-view",{staticClass:"disPlayFlex flexDireColumn interal_item flex1"},[a("v-uni-view",{staticClass:"disPlayFlex flexSpaceBwteen"},[a("v-uni-text",[t._v(t._s(e.add_time))]),0!=e.status?a("v-uni-text",{staticStyle:{color:"#fa436a"}},[t._v(t._s(e.status_name))]):t._e()],1),a("v-uni-navigator",{staticClass:"disPlayFlex flexDireColumn",staticStyle:{outline:"none"},attrs:{url:"/pages/plugins/excellentbuyreturntocash/profit-detail/profit-detail?id="+e.id,"hover-class":"none"}},[a("v-uni-text",{staticClass:"interal_operate mt10"},[t._v("订单金额："),a("v-uni-text",{staticClass:"item_new",staticStyle:{"margin-left":"0"}},[t._v(t._s(t.cache_config_info_key.currency_symbol)+t._s(e.total_price))])],1),a("v-uni-text",{staticClass:"interal_operate mt10"},[t._v("退款金额："),a("v-uni-text",{staticClass:"item_new",staticStyle:{"margin-left":"0"}},[t._v(t._s(t.cache_config_info_key.currency_symbol)+t._s(e.refund_price))])],1),a("v-uni-text",{staticClass:"interal_operate mt10"},[t._v("有效金额："),a("v-uni-text",{staticClass:"item_new",staticStyle:{"margin-left":"0"}},[t._v(t._s(t.cache_config_info_key.currency_symbol)+t._s(e.valid_price))])],1),a("v-uni-text",{staticClass:"interal_operate mt10"},[t._v("返现金额："),a("v-uni-text",{staticClass:"item_new",staticStyle:{"margin-left":"0"}},[t._v(t._s(t.cache_config_info_key.currency_symbol)+t._s(e.profit_price))])],1)],1),a("v-uni-view",{staticClass:"operate-more"},[a("v-uni-button",{staticClass:"operate-btn",attrs:{type:"default",size:"mini"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.viewOrder(e)}}},[t._v("查看订单")]),2==e.status?a("v-uni-button",{staticClass:"operate-btn ml20",attrs:{type:"warn",size:"mini"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.settlement(e)}}},[t._v("立即结算")]):t._e()],1)],1)],1)})),a("uni-load-more",{attrs:{status:e.loadingType}})]],2)],1)})),1)],1)]},r=[]},"411b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.empty-data[data-v-77f59f3b]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-bottom:%?120?%;color:#c0c4cc}.empty-data .iconfont[data-v-77f59f3b]{font-size:%?120?%!important}.empty-data .empty-title[data-v-77f59f3b]{font-size:%?28?%;color:#c0c4cc}',""]),t.exports=e},"4d0b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-5b88d5b4],\n.content[data-v-5b88d5b4]{background:#f3f3f3;height:100%}.swiper-box[data-v-5b88d5b4]{height:calc(100% - 70px)}.swiper-box.personal[data-v-5b88d5b4]{height:calc(100% - %?320?%)}.list-scroll-content[data-v-5b88d5b4]{height:100%}.navbar[data-v-5b88d5b4]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-5b88d5b4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-5b88d5b4]{color:#fa436a}.navbar .nav-item.current[data-v-5b88d5b4]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-5b88d5b4]{height:auto}\n/* load-more */.uni-load-more[data-v-5b88d5b4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-5b88d5b4]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-5b88d5b4]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-5b88d5b4]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-5b88d5b4]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-5b88d5b4 1.56s ease infinite;animation:load-data-v-5b88d5b4 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-5b88d5b4]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-5b88d5b4]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-5b88d5b4]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-5b88d5b4]:nth-child(4){top:11px;left:0}.load1[data-v-5b88d5b4],\n.load2[data-v-5b88d5b4],\n.load3[data-v-5b88d5b4]{height:24px;width:24px}.load2[data-v-5b88d5b4]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-5b88d5b4]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-5b88d5b4]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-5b88d5b4]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-5b88d5b4]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-5b88d5b4]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-5b88d5b4]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-5b88d5b4]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-5b88d5b4]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-5b88d5b4]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-5b88d5b4]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-5b88d5b4]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-5b88d5b4]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-5b88d5b4]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-5b88d5b4{0%{opacity:1}100%{opacity:.2}}body.?%PAGE?%[data-v-5b88d5b4]{background:#f3f3f3}',""]),t.exports=e},7645:function(t,e,a){var n=a("411b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("bd120050",n,!0,{sourceMap:!1,shadowMode:!1})},a9bb:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"empty-data flex1",staticStyle:{width:"100%",height:"100%"}},[a("v-uni-text",{staticClass:"iconfont",class:t.textIcon}),a("v-uni-text",{staticClass:"empty-title"},[t._v(t._s(t.empty_text))])],1)},r=[]},be55:function(t,e,a){var n=a("4d0b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("27ff436d",n,!0,{sourceMap:!1,shadowMode:!1})},c64b:function(t,e,a){"use strict";a.r(e);var n=a("ca42"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c874:function(t,e,a){"use strict";var n=a("be55"),i=a.n(n);i.a},ca42:function(t,e,a){"use strict";var n=a("4ea4");a("99af"),a("c740"),a("c975"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2909"));a("96cf");var r=n(a("1da1")),o=n(a("5530")),s=n(a("3c58")),d=n(a("3624")),l=n(a("c8db")),c=n(a("9fc0")),u=n(a("10b9")),b=a("2f62"),f=n(a("d90f")),p={components:{uniLoadMore:s.default,empty:l.default,emptyData:f.default},mixins:[u.default],data:function(){return{tabCurrentIndex:0,current:1,snav_width:[],errorMsg:"",authCode:"",navList:[{status:"-1",name:"全部",loadingType:"more",orderList:[],page:1},{status:"0",name:"待生效",loadingType:"nomore",orderList:[],page:1},{status:"1",name:"生效中",loadingType:"nomore",orderList:[],page:1},{status:"2",name:"待结算",loadingType:"nomore",orderList:[],page:1},{status:"3",name:"已结算",loadingType:"nomore",orderList:[],page:1},{status:"4",name:"已失效",loadingType:"nomore",orderList:[],page:1}]}},computed:(0,o.default)((0,o.default)({},(0,b.mapGetters)(["platform","cache_config_info_key","cache_shop_user_info_key","wechatUserInfo"])),{},{s_fcrollX:function(){var t=this.snav_width.length>0?this.snav_width[this.tabCurrentIndex]:0;return t+21}}),onLoad:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.initLoadingFn((0,r.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.navList.findIndex((function(e){return e.status==t.nav_table})),e.tabCurrentIndex=n>0?n:0,a.next=4,e.loadData("tabChange");case 4:case"end":return a.stop()}}),a)}))));case 2:case"end":return a.stop()}}),a)})))()},onPullDownRefresh:function(){this.loadData("tabChange"),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},methods:{loadData:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n,r,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,n=e.tabCurrentIndex,r=e.navList[n],r.status,"tabChange"===t&&(r.loaded=!1,r.loadingType="more",r.page=1),"loading"!==r.loadingType&&!0!==r.loaded){a.next=7;break}return a.abrupt("return");case 7:return r.loadingType="loading",a.next=10,e.loadingFn((0,c.default)("/api/plugins/index","POST",{pluginsname:"excellentbuyreturntocash",pluginscontrol:"profit",pluginsaction:"index",status:r.status,page:r.page,is_more:1}));case 10:o=a.sent,s=o.data,1==r.page&&(r.orderList=s.data),r.page>1&&(r.orderList=r.orderList.concat((0,i.default)(s.data))),s["page_total"]<=r.page?(r.loadingType="nomore",e.$set(r,"loaded",!0)):(r.loadingType="more",r.page++),-10==e.authCode&&(e.authCode=""),a.next=22;break;case 18:a.prev=18,a.t0=a["catch"](0),e.authCode=a.t0.code,e.errorMsg=a.t0.msg;case 22:case"end":return a.stop()}}),a,null,[[0,18]])})))()},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},dateFormat:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD";return(0,d.default)(t).format(e)},tabClick:function(t){this.tabCurrentIndex=t.index},getSignUrl:function(t){var e="";return t.indexOf("not_use")>-1?e="/static/img_couponcentre_received.png":t.indexOf("already_use")>-1?e="/static/img_coupon_beused.png":t.indexOf("already_expire")>-1&&(e="/static/img_coupon_failure.png"),e},settlement:function(t){var e=this;return(0,r.default)(regeneratorRuntime.mark((function a(){var n,i,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n={pluginsname:"excellentbuyreturntocash",pluginscontrol:"profit",pluginsaction:"auto",id:t.id},a.next=4,e.loadingFn((0,c.default)("/api/plugins/index","POST",n));case 4:i=a.sent,r=i.msg,t.status=3,e.$api.msg(r,2e3,!0,"success"),a.next=12;break;case 10:a.prev=10,a.t0=a["catch"](0);case 12:case"end":return a.stop()}}),a,null,[[0,10]])})))()},viewOrder:function(t){return(0,r.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.navigateTo({url:"/pages/user-order-detail/user-order-detail?id="+t.order_id});case 1:case"end":return e.stop()}}),e)})))()}}};e.default=p},d66b:function(t,e,a){"use strict";var n=a("7645"),i=a.n(n);i.a},d90f:function(t,e,a){"use strict";a.r(e);var n=a("a9bb"),i=a("11c1");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d66b");var o,s=a("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"77f59f3b",null,!1,n["a"],o);e["default"]=d.exports},f456:function(t,e,a){"use strict";a.r(e);var n=a("364e"),i=a("c64b");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c874");var o,s=a("f0c5"),d=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5b88d5b4",null,!1,n["a"],o);e["default"]=d.exports}}]);