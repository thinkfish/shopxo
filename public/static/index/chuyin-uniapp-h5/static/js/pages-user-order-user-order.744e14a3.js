(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-order-user-order"],{"0ca4":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"empty-content"},[a("v-uni-image",{staticClass:"empty-content-image",attrs:{src:t.setSrc,mode:"aspectFit"}})],1)},o=[]},"10b9":function(t,e,a){"use strict";a.r(e);var i=a("a8f2");for(var n in i)"default"!==n&&function(t){a.d(e,t,(function(){return i[t]}))}(n);var o,r,s,d,l=a("f0c5"),c=Object(l["a"])(i["default"],o,r,!1,null,null,null,!1,s,d);e["default"]=c.exports},"24ee":function(t,e,a){"use strict";var i=a("94c2"),n=a.n(i);n.a},2504:function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiModal",props:{show:{type:Boolean,default:!1},width:{type:String,default:"84%"},backgroundColor:{type:String,default:"#fff"},padding:{type:String,default:"40rpx 64rpx"},radius:{type:String,default:"24rpx"},title:{type:String,default:""},content:{type:String,default:""},color:{type:String,default:"#999"},size:{type:Number,default:28},shape:{type:String,default:"square"},button:{type:Array,default:function(){return[{text:"取消",type:"red",plain:!0},{text:"确定",type:"red",plain:!1}]}},maskClosable:{type:Boolean,default:!0},fadeIn:{type:Boolean,default:!1},custom:{type:Boolean,default:!1},zIndex:{type:Number,default:9997},maskZIndex:{type:Number,default:9990}},data:function(){return{}},methods:{handleClick:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:Number(e.index)})}},handleClickCancel:function(){this.maskClosable&&this.$emit("cancel")}}};e.default=i},2909:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=d;var i=s(a("6005")),n=s(a("db90")),o=s(a("06c5")),r=s(a("3427"));function s(t){return t&&t.__esModule?t:{default:t}}function d(t){return(0,i.default)(t)||(0,n.default)(t)||(0,o.default)(t)||(0,r.default)()}},"2e94":function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"tui-modal__container",class:[t.show?"tui-modal-show":""],style:{zIndex:t.zIndex},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e)}}},[a("v-uni-view",{staticClass:"tui-modal-box",class:[t.fadeIn||t.show?"tui-modal-normal":"tui-modal-scale",t.show?"tui-modal-show":""],style:{width:t.width,padding:t.padding,borderRadius:t.radius,backgroundColor:t.backgroundColor,zIndex:t.zIndex+1}},[t.custom?a("v-uni-view",[t._t("default")],2):a("v-uni-view",[t.title?a("v-uni-view",{staticClass:"tui-modal-title"},[t._v(t._s(t.title))]):t._e(),a("v-uni-view",{staticClass:"tui-modal-content",class:[t.title?"":"tui-mtop"],style:{color:t.color,fontSize:t.size+"rpx"}},[t._v(t._s(t.content))]),a("v-uni-view",{staticClass:"tui-modalBtn-box",class:[2!=t.button.length?"tui-flex-column":""]},[t._l(t.button,(function(e,i){return[a("v-uni-button",{key:i+"_0",staticClass:"tui-modal-btn",class:["tui-"+(e.type||"primary")+(e.plain?"-outline":""),2!=t.button.length?"tui-btn-width":"",t.button.length>2?"tui-mbtm":"","circle"==t.shape?"tui-circle-btn":""],attrs:{"hover-class":"tui-"+(e.plain?"outline":e.type||"primary")+"-hover","data-index":i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)}}},[t._v(t._s(e.text||"确定"))])]}))],2)],1)],1),a("v-uni-view",{staticClass:"tui-modal-mask",class:[t.show?"tui-mask-show":""],style:{zIndex:t.maskZIndex},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClickCancel.apply(void 0,arguments)}}})],1)},o=[]},"317d":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".uni-load-more[data-v-fa82f31c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-fa82f31c]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-fa82f31c]{height:24px;width:24px;margin-right:10px}.uni-load-more__img .load[data-v-fa82f31c]{position:absolute}.uni-load-more__img .load .child_load[data-v-fa82f31c]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-fa82f31c 1.56s ease infinite;animation:load-data-v-fa82f31c 1.56s ease infinite}.uni-load-more__img .load .child_load[data-v-fa82f31c]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img .load .child_load[data-v-fa82f31c]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img .load .child_load[data-v-fa82f31c]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img .load .child_load[data-v-fa82f31c]:nth-child(4){top:11px;left:0}.load1[data-v-fa82f31c],\n.load2[data-v-fa82f31c],\n.load3[data-v-fa82f31c]{height:24px;width:24px}.load2[data-v-fa82f31c]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-fa82f31c]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 .child_load[data-v-fa82f31c]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 .child_load[data-v-fa82f31c]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 .child_load[data-v-fa82f31c]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 .child_load[data-v-fa82f31c]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 .child_load[data-v-fa82f31c]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 .child_load[data-v-fa82f31c]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 .child_load[data-v-fa82f31c]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 .child_load[data-v-fa82f31c]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 .child_load[data-v-fa82f31c]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 .child_load[data-v-fa82f31c]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 .child_load[data-v-fa82f31c]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 .child_load[data-v-fa82f31c]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-fa82f31c{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},3427:function(t,e,a){"use strict";function i(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"39c7":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=i},"3c58":function(t,e,a){"use strict";a.r(e);var i=a("e87d"),n=a("5bc4");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e634");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"fa82f31c",null,!1,i["a"],r);e["default"]=d.exports},"42ac":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(a("31b2"));var n={data:function(){return{initLoading:0,loading:0}},watch:{loading:function(t,e){t>0?uni.showLoading({mask:!0,title:"加载中"}):uni.hideLoading()},initLoading:function(t,e){}},created:function(){},methods:{}};e.default=n},"5bc4":function(t,e,a){"use strict";a.r(e);var i=a("39c7"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"5ef6":function(t,e,a){"use strict";a.r(e);var i=a("2e94"),n=a("6b4e");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("6fcf");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"52f890a6",null,!1,i["a"],r);e["default"]=d.exports},6005:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(a("6b75"));function n(t){return t&&t.__esModule?t:{default:t}}function o(t){if(Array.isArray(t))return(0,i.default)(t)}},"68d1":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={props:{src:{type:String,default:"empty"}},data:function(){return{typeSrc:{empty:"/static/emptyData.png"}}},computed:{setSrc:function(){return this.typeSrc[this.src]}}};e.default=i},"6b4e":function(t,e,a){"use strict";a.r(e);var i=a("2504"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"6fcf":function(t,e,a){"use strict";var i=a("70ad"),n=a.n(i);n.a},7051:function(t,e,a){var i=a("317d");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("62466d64",i,!0,{sourceMap:!1,shadowMode:!1})},"70ad":function(t,e,a){var i=a("dfa0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("416e365e",i,!0,{sourceMap:!1,shadowMode:!1})},"7ef0b":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={uniLoadMore:a("3c58").default,tuiModal:a("5ef6").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.initLoading?t._e():a("v-uni-view",{staticClass:"content"},["mp-weixin"==t.platform||"wechat"==t.platform?[t.cache_shop_user_info_key.avatar&&t.cache_shop_user_info_key.nickname?a("v-uni-view",{staticClass:"persons"},[a("v-uni-view",{staticClass:"imgHeader"},[a("v-uni-image",{attrs:{src:t.cache_shop_user_info_key.avatar||"/static/errorImage.jpg"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageError.apply(void 0,arguments)},load:function(e){arguments[0]=e=t.$handleEvent(e),t.onImageLoad.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"personInfo flex1"},[a("v-uni-text",{staticClass:"nickname"},[t._v(t._s(t.cache_shop_user_info_key.nickname))]),a("v-uni-text",{staticClass:"receAddr",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addrChange.apply(void 0,arguments)}}},[t._v("收货地址 >")])],1),a("v-uni-view",{staticClass:"personConate"},[a("v-uni-text",{staticClass:"iconfont icon-wodekefu"})],1)],1):a("v-uni-view",{staticClass:"authorLogin"},[a("v-uni-button",{staticClass:"nav_btnchat",attrs:{"open-type":"getUserInfo",lang:"zh_CN"},on:{getuserinfo:function(e){arguments[0]=e=t.$handleEvent(e),t.userInfo.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"iconfont icon-weixin wechat"}),t._v("微信授权")],1)],1)]:t._e(),a("v-uni-view",{staticClass:"order-express-navbar"},[t._l(t.navList,(function(e,i){return a("v-uni-view",{key:i,ref:"nav_tabs",refInFor:!0,staticClass:"nav-item",class:{current:t.tabCurrentIndex===i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabClick(i,e)}}},[t._v(t._s(e.text))])})),a("v-uni-text",{staticClass:"moveLines",style:{left:t.s_fcrollX>0?t.s_fcrollX+"px":""}})],2),a("v-uni-swiper",{ref:"swiper",staticClass:"swiper-box",class:"mp-weixin"==t.platform||"wechat"==t.platform?"personal":"",attrs:{current:t.tabCurrentIndex,duration:"300"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeTab.apply(void 0,arguments)}}},t._l(t.navList,(function(e,i){return a("v-uni-swiper-item",{key:i,staticClass:"tab-content"},[a("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadData.apply(void 0,arguments)}}},[!0===e.loaded&&0===e.orderList.length?a("empty"):t._e(),t._l(e.orderList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"order-item"},[4==t.tabCurrentIndex?[a("v-uni-view",{staticClass:"i-top"},[a("v-uni-text",{staticClass:"time"},[t._v(t._s(e.order_no))]),a("v-uni-text",{staticClass:"state",staticStyle:{color:"#A3A3A3"}},[t._v(t._s(e.apply_time_time))])],1),a("v-uni-view",{staticClass:"goods-box-single",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.orderDetail(e)}}},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:e.order_data?e.order_data.items.images:"/static/errorImage.jpg",mode:"aspectFill"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(e.order_data?e.order_data.items.title:""))]),a("v-uni-view",{staticClass:"net-box"},[a("v-uni-text",{staticClass:"price"},[a("span",{staticClass:"currency_symbol"},[t._v(t._s(t.cache_config_info_key.currency_symbol))]),t._v(t._s(e.price))]),a("v-uni-text",{staticClass:"num"},[t._v("申请数量："+t._s(e.number))])],1)],1)],1),a("v-uni-view",{staticClass:"afterSale-box"},[a("v-uni-text",{staticClass:"update_time"},[t._v(t._s(e.update_time))]),a("v-uni-text",[t._v(t._s(e.type_text)+"-"+t._s(e.status_text))])],1)]:[e.items&&e.items.length>0?[a("v-uni-view",{staticClass:"i-top"},[a("v-uni-text",{staticClass:"time"},[t._v(t._s(e.add_time))]),a("v-uni-text",{staticClass:"state"},[t._v(t._s(e.status_name))])],1),e.items&&e.items.length>1?[e.items.length>3?a("v-uni-view",{staticClass:"moreProgress"},[a("v-uni-view",{staticClass:"progress"},[a("v-uni-view",{staticClass:"flex1 progressRelative"},[a("v-uni-text",{staticClass:"scareline",style:{width:e.width+"%",left:e.percent+"%"}})],1)],1)],1):t._e(),a("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":!0},on:{scroll:function(a){arguments[0]=a=t.$handleEvent(a),t.scrollAction(e,a)},click:function(a){arguments[0]=a=t.$handleEvent(a),t.orderDetail(e)}}},t._l(e.items,(function(t,e){return a("v-uni-view",{key:e,staticClass:"goods-item"},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:t.images,mode:"aspectFill"}})],1)})),1)]:t._e(),t._l(e.items,(function(i,n){return 1===e.items.length?a("v-uni-view",{key:n,staticClass:"goods-box-single",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.orderDetail(e)}}},[a("v-uni-image",{staticClass:"goods-img",attrs:{src:i.images,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",{staticClass:"title"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"net-box"},[a("v-uni-text",{staticClass:"price"},[a("v-uni-text",{staticClass:"currency_symbol"},[t._v(t._s(t.cache_config_info_key.currency_symbol))]),t._v(t._s(e.total_price))],1),a("v-uni-text",{staticClass:"num"},[t._v("共"+t._s(e.buy_number_count)+"件")])],1)],1)],1):t._e()})),e.items.length>1?a("v-uni-view",{staticClass:"price-box"},[a("v-uni-text",{staticClass:"price"},[t._v(t._s(e.total_price))]),a("v-uni-text",{staticClass:"num"},[t._v("共"+t._s(e.buy_number_count)+"件")])],1):t._e(),1==e.status?a("v-uni-view",{staticClass:"action-box"},[a("v-uni-button",{staticClass:"action-btn recom",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.orderPayAction(e)}}},[t._v("切换支付")])],1):2==e.status?a("v-uni-view",{staticClass:"action-box"},[a("v-uni-button",{staticClass:"action-btn recom",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.orderRush.apply(void 0,arguments)}}},[t._v("催催")])],1):3==e.status?a("v-uni-view",{staticClass:"action-box"},[1==t.expressType?a("v-uni-navigator",{staticClass:"nav_express",attrs:{target:"miniProgram",path:"pages/result/result?nu="+e.express_number+"&querysource=third_xcx","app-id":"wx6885acbedba59c14","hover-class":"none"}},[a("v-uni-button",{staticClass:"action-btn"},[t._v("查看物流")])],1):t._e(),2==t.expressType?a("v-uni-navigator",{staticClass:"nav_express",attrs:{url:"/pages/order-express/order-express?order_id="+e.id,"hover-class":"none"}},[a("v-uni-button",{staticClass:"action-btn"},[t._v("查看物流")])],1):t._e(),a("v-uni-button",{staticClass:"action-btn recom",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.expreArriveAction(e,i)}}},[t._v("确认收货")])],1):4==e.status?a("v-uni-view",{staticClass:"action-box"},[0==e.is_comments?a("v-uni-button",{staticClass:"action-btn",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.doEvaluate(e)}}},[t._v("评价晒单")]):t._e(),1==t.expressType?a("v-uni-navigator",{staticClass:"nav_express",attrs:{target:"miniProgram",path:"pages/result/result?nu="+e.express_number+"&querysource=third_xcx","app-id":"wx6885acbedba59c14","hover-class":"none"}},[a("v-uni-button",{staticClass:"action-btn"},[t._v("查看物流")])],1):t._e(),2==t.expressType?a("v-uni-navigator",{staticClass:"nav_express",attrs:{url:"/pages/order-express/order-express?order_id="+e.id,"hover-class":"none"}},[a("v-uni-button",{staticClass:"action-btn recom"},[t._v("查看物流")])],1):t._e(),0!=e.is_comments?a("v-uni-button",{staticClass:"action-btn recom",attrs:{"hover-class":"none"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.buyAgainAction(e)}}},[t._v("再次购买")]):t._e()],1):5==e.status||6==e.status?a("v-uni-view",{staticClass:"action-box"},[a("v-uni-button",{staticClass:"action-btn recom",attrs:{"hover-class":"none"},on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.buyAgainAction(e)}}},[t._v("再次购买")])],1):t._e()]:t._e()]],2)})),a("uni-load-more",{attrs:{status:e.loadingType}})],2)],1)})),1),a("tui-modal",{attrs:{show:t.mode_show,content:"请选择支付方式",button:t.payment_list},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleClick.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCancel.apply(void 0,arguments)}}})],2)},o=[]},"83f2":function(t,e,a){"use strict";a.r(e);var i=a("7ef0b"),n=a("d2e2");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("24ee");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"543146b0",null,!1,i["a"],r);e["default"]=d.exports},"89a8":function(t,e,a){var i=a("b594");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("7dd3bddd",i,!0,{sourceMap:!1,shadowMode:!1})},"94c2":function(t,e,a){var i=a("9d51");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("4cbff87a",i,!0,{sourceMap:!1,shadowMode:!1})},"9d51":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-543146b0],\n.content[data-v-543146b0]{background:#f3f3f3;height:100%}.swiper-box[data-v-543146b0]{height:calc(100% - 70px)}.swiper-box.personal[data-v-543146b0]{height:calc(100% - %?320?%)}.list-scroll-content[data-v-543146b0]{height:100%}.navbar[data-v-543146b0]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;padding:0 5px;background:#fff;box-shadow:0 1px 5px rgba(0,0,0,.06);position:relative;z-index:10}.navbar .nav-item[data-v-543146b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#303133;position:relative}.navbar .nav-item.current[data-v-543146b0]{color:#fa436a}.navbar .nav-item.current[data-v-543146b0]:after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:44px;height:0;border-bottom:2px solid #fa436a}.uni-swiper-item[data-v-543146b0]{height:auto}\n/* load-more */.uni-load-more[data-v-543146b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-load-more__text[data-v-543146b0]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-543146b0]{height:24px;width:24px;margin-right:10px}.uni-load-more__img > uni-view[data-v-543146b0]{position:absolute}.uni-load-more__img > uni-view uni-view[data-v-543146b0]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-543146b0 1.56s ease infinite;animation:load-data-v-543146b0 1.56s ease infinite}.uni-load-more__img > uni-view uni-view[data-v-543146b0]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-543146b0]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img > uni-view uni-view[data-v-543146b0]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img > uni-view uni-view[data-v-543146b0]:nth-child(4){top:11px;left:0}.load1[data-v-543146b0],\n.load2[data-v-543146b0],\n.load3[data-v-543146b0]{height:24px;width:24px}.load2[data-v-543146b0]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-543146b0]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-543146b0]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-543146b0]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-543146b0]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-543146b0]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-543146b0]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-543146b0]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-543146b0]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-543146b0]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-543146b0]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-543146b0]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-543146b0]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-543146b0]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-543146b0{0%{opacity:1}100%{opacity:.2}}body.?%PAGE?%[data-v-543146b0]{background:#f3f3f3}',""]),t.exports=e},a8f2:function(t,e,a){"use strict";a.r(e);var i=a("42ac"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},b594:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.empty-content[data-v-136d8a90]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:fixed;left:0;top:0;right:0;bottom:0;background:#f3f3f3;padding-bottom:%?120?%}.empty-content-image[data-v-136d8a90]{width:%?240?%;height:%?344?%}',""]),t.exports=e},b745:function(t,e,a){"use strict";a.r(e);var i=a("68d1"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},bfc8:function(t,e,a){"use strict";var i=a("4ea4");a("99af"),a("c740"),a("4160"),a("d81d"),a("a434"),a("acd8"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909"));a("96cf");var o=i(a("1da1")),r=i(a("5530")),s=i(a("3c58")),d=i(a("c8db")),l=i(a("9fc0")),c=i(a("10b9")),u=a("2f62"),f=(i(a("c1f4")),{components:{uniLoadMore:s.default,empty:d.default},mixins:[c.default],data:function(){return{tabCurrentIndex:0,current:1,snav_width:[],payment_list:[],pay_item:null,mode_show:!1,btn_type:["green","","red","warning","gray"],expressType:0,messageTmplIds:[],navList:[{status:-1,text:"全部",loadingType:"more",orderList:[],page:1},{status:1,text:"待付款",loadingType:"more",orderList:[],page:1},{status:2,text:"待发货",loadingType:"more",orderList:[],page:1},{status:3,text:"待收货",loadingType:"more",orderList:[],page:1},{status:-4,text:"售后",loadingType:"more",orderList:[],List:[],page:1}]}},computed:(0,r.default)((0,r.default)({},(0,u.mapGetters)(["pager","platform","mallToken","pay_info","cache_config_info_key","cache_shop_user_info_key","wechatUserInfo"])),{},{s_fcrollX:function(){var t=this.snav_width.length>0?this.snav_width[this.tabCurrentIndex]:0;return t+21}}),onLoad:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.expressType=getApp().globalData.expressType||0,e.messageTmplIds=getApp().globalData.messageTmplIds||[],a.next=4,e.initLoadingFn((0,o.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.navList.findIndex((function(e){return e.status==t.nav_table})),e.tabCurrentIndex=i>0?i:0,a.next=4,e.loadData("tabChange");case 4:case"end":return a.stop()}}),a)}))));case 4:return i=e,a.next=7,i.$app.getMenuItemTop("nav-item");case 7:i.snav_width=a.sent,window.payAction=function(t){var e=t;"string"===typeof t&&(e=JSON.parse(t)),1==e["type"]?(i.$api.msg("支付成功",2500),uni.redirectTo({url:"/pages/pay/result?type=1&order_no="+e["order_no"]+"&pay_money="+e["pay_money"]})):2==e["type"]&&i.$api.msg("支付失败",2500)};case 9:case"end":return a.stop()}}),a)})))()},onPullDownRefresh:function(){this.loadData("tabChange"),setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},methods:{loadData:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var i,o,r,s,d,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=e.tabCurrentIndex,o=e.navList[i],o.status,"tabChange"===t&&(o.loaded=!1,o.page=1),"loading"!==o.loadingType&&!0!==o.loaded){a.next=6;break}return a.abrupt("return");case 6:return o.loadingType="loading",r=-4==o.status?"/api/orderaftersale/index":"/api/order/index",s=-4==o.status?-1:o.status,a.next=11,e.loadingFn((0,l.default)(r,"POST",{is_more:1,keywords:"",page:o.page,status:s}));case 11:d=a.sent,c=d.data,-4!=o.status&&(e.payment_list=c.payment_list.map((function(t,a){return{id:t.id,text:t.name,type:e.btn_type[a]||"",plain:!0}}))),1==o.page&&(o.orderList=c.data),o.page>1&&(o.orderList=o.orderList.concat((0,n.default)(c.data))),c["page_total"]<=o.page?(o.loadingType="nomore",e.$set(o,"loaded",!0)):(o.loadingType="more",o.page++);case 17:case"end":return a.stop()}}),a)})))()},userInfo:function(t){this.$store.commit("SETUSERS",JSON.stringify(t.detail.userInfo)),this.$store.commit("SET_LOGOURL",t.detail.userInfo["avatarUrl"]),this.$store.commit("SET_NICKNAME",t.detail.userInfo["nickName"]);var e=JSON.parse(this.wechatUserInfo);this.$store.dispatch("modifyUserInfo",e["unionid"])},orderRush:function(){this.$api.msg("催促成功",2e3,!1,"success")},handleCancel:function(){this.mode_show=!1},orderPayAction:function(t){this.payment_list.length>0&&(this.mode_show=!0,this.pay_item=t)},handleClick:function(t){var e=t.index,a=this.payment_list[e]["id"],i=this.pay_item["id"];this.payHandle({payment_id:a,ids:i})},payHandle:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var i,o,r,s,d,c,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.ids,o=t.payment_id,(0,n.default)(e.messageTmplIds),r=e,"wxpay",a.prev=4,s={ids:i,payment_id:o},d="/api/order/pay",a.next=9,e.loadingFn((0,l.default)(d,"POST",s));case 9:c=a.sent,u=c.data,u.data,e.mode_show=!1,a.t0=u.is_payment_type,a.next=0===a.t0?16:1===a.t0?18:2===a.t0?20:23;break;case 16:return e.mode_show=!1,a.abrupt("break",25);case 18:return r.$api.msg("处理成功，请等待卖家确认"),a.abrupt("break",25);case 20:return r.$api.msg("支付成功",1200,!0,"success"),r.btnLoading=!0,a.abrupt("break",25);case 23:return e.$api.msg("支付类型有误"),a.abrupt("break",25);case 25:a.next=30;break;case 27:a.prev=27,a.t1=a["catch"](4),r.$api.msg("支付失败");case 30:case"end":return a.stop()}}),a,null,[[4,27]])})))()},expreArriveAction:function(t,e){var a=this;return(0,o.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,a.$app.commonModal({title:"温馨提示",content:"是否要确认收货？"});case 2:a.receiveAction(t,e);case 3:case"end":return i.stop()}}),i)})))()},receiveAction:function(t,e){var a=this;return(0,o.default)(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,a.loadingFn((0,l.default)("/api/order/collect","POST",{id:t.id}));case 2:uni.showToast({title:"订单确认收货成功！",icon:"none",duration:2e3}),t["order_status"]=4,a.navList[a.tabCurrentIndex].orderList.splice(e,1),a.navList[a.tabCurrentIndex+1].orderList.push(t);case 6:case"end":return i.stop()}}),i)})))()},buyAgainAction:function(t){var e=this;return(0,o.default)(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,i=t.items.map((function(t){return{goods_id:t.goods_id,stock:t.buy_number,spec:t.spec?JSON.stringify(t.spec):""}})),a.next=4,i.forEach(function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadingFn((0,l.default)("/api/cart/save","POST",a));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:return a.next=6,e.$app.commonModal({content:"加入购物车成功,请至购物车结算"});case 6:setTimeout((function(){uni.switchTab({url:"/pages/cart/cart"})}),1e3),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()},changeTab:function(t){this.tabCurrentIndex=t.target.current,this.loadData("tabChange")},tabClick:function(t,e){this.tabCurrentIndex=t},onImageError:function(){},onImageLoad:function(t){},addrChange:function(){uni.navigateTo({url:"/pages/user-address/user-address?source=2"})},orderDetail:function(t){4==this.tabCurrentIndex?uni.navigateTo({url:"/pages/afservice/detail?oid=".concat(t.order_id,"&did=").concat(t.order_detail_id)}):uni.navigateTo({url:"/pages/user-order-detail/user-order-detail?id=".concat(t.id)})},orderDel:function(t,e){var a=this;uni.showModal({content:"是否要删除该订单？",success:function(i){i.confirm&&a.orderDelAction(t,e)}})},goLogin:function(){appLogin()},orderDelAction:function(t,e){var a=this;uni.showLoading({title:"加载中"}),(0,l.default)("/Order/Delete","POST",{order_id:t["order_id"]},"").then((function(t){uni.hideLoading(),200==t.ret?(a.navList[a.tabCurrentIndex].orderList.splice(e,1),uni.showToast({title:"订单删除成功！",icon:"none",duration:2e3})):uni.showToast({title:t.msg,icon:"none",duration:2e3})})).catch((function(t){uni.hideLoading()}))},invoicesView:function(t){},doEvaluate:function(t){uni.navigateTo({url:"/pages/order/evaluate?order_id=".concat(t.id)})},scrollAction:function(t,e){var a=parseFloat(100*e.detail.scrollLeft/e.detail.scrollWidth);t.percent=a}}});e.default=f},c8db:function(t,e,a){"use strict";a.r(e);var i=a("0ca4"),n=a("b745");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("cd11");var r,s=a("f0c5"),d=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"136d8a90",null,!1,i["a"],r);e["default"]=d.exports},cd11:function(t,e,a){"use strict";var i=a("89a8"),n=a.n(i);n.a},d2e2:function(t,e,a){"use strict";a.r(e);var i=a("bfc8"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},db90:function(t,e,a){"use strict";function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},dfa0:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'.tui-modal__container[data-v-52f890a6]{width:100%;height:100%;position:fixed;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;visibility:hidden}.tui-modal-box[data-v-52f890a6]{position:relative;opacity:0;visibility:hidden;box-sizing:border-box;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.tui-modal-scale[data-v-52f890a6]{-webkit-transform:scale(0);transform:scale(0)}.tui-modal-normal[data-v-52f890a6]{-webkit-transform:scale(1);transform:scale(1)}.tui-modal-show[data-v-52f890a6]{opacity:1;visibility:visible}.tui-modal-mask[data-v-52f890a6]{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.6);-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-52f890a6]{visibility:visible;opacity:1}.tui-modal-title[data-v-52f890a6]{text-align:center;font-size:%?34?%;color:#333;padding-top:%?20?%;font-weight:700}.tui-modal-content[data-v-52f890a6]{text-align:center;color:#999;font-size:%?28?%;padding-top:%?20?%;padding-bottom:%?60?%}.tui-mtop[data-v-52f890a6]{margin-top:%?30?%}.tui-mbtm[data-v-52f890a6]{margin-bottom:%?30?%}.tui-modalBtn-box[data-v-52f890a6]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-flex-column[data-v-52f890a6]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.tui-modal-btn[data-v-52f890a6]{width:46%;height:%?68?%;line-height:%?68?%;position:relative;border-radius:%?10?%;font-size:%?26?%;overflow:visible;margin-left:0;margin-right:0}.tui-modal-btn[data-v-52f890a6]::after{content:" ";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5) translateZ(0);transform:scale(.5) translateZ(0);left:0;top:0;border-radius:%?20?%;z-index:2}.tui-btn-width[data-v-52f890a6]{width:80%!important}.tui-primary[data-v-52f890a6]{background:#5677fc;color:#fff}.tui-primary-hover[data-v-52f890a6]{background:#4a67d6;color:#e5e5e5}.tui-primary-outline[data-v-52f890a6]{color:#5677fc;background:transparent}.tui-primary-outline[data-v-52f890a6]::after{border:1px solid #5677fc}.tui-danger[data-v-52f890a6]{background:#ed3f14;color:#fff}.tui-danger-hover[data-v-52f890a6]{background:#d53912;color:#e5e5e5}.tui-danger-outline[data-v-52f890a6]{color:#ed3f14;background:transparent}.tui-danger-outline[data-v-52f890a6]::after{border:1px solid #ed3f14}.tui-red[data-v-52f890a6]{background:#e41f19;color:#fff}.tui-red-hover[data-v-52f890a6]{background:#c51a15;color:#e5e5e5}.tui-red-outline[data-v-52f890a6]{color:#e41f19;background:transparent}.tui-red-outline[data-v-52f890a6]::after{border:1px solid #e41f19}.tui-warning[data-v-52f890a6]{background:#ff7900;color:#fff}.tui-warning-hover[data-v-52f890a6]{background:#e56d00;color:#e5e5e5}.tui-warning-outline[data-v-52f890a6]{color:#ff7900;background:transparent}.tui-warning-outline[data-v-52f890a6]::after{border:1px solid #ff7900}.tui-green[data-v-52f890a6]{background:#19be6b;color:#fff}.tui-green-hover[data-v-52f890a6]{background:#16ab60;color:#e5e5e5}.tui-green-outline[data-v-52f890a6]{color:#19be6b;background:transparent}.tui-green-outline[data-v-52f890a6]::after{border:1px solid #19be6b}.tui-white[data-v-52f890a6]{background:#fff;color:#333}.tui-white-hover[data-v-52f890a6]{background:#f7f7f9;color:#666}.tui-white-outline[data-v-52f890a6]{color:#333;background:transparent}.tui-white-outline[data-v-52f890a6]::after{border:1px solid #333}.tui-gray[data-v-52f890a6]{background:#ededed;color:#999}.tui-gray-hover[data-v-52f890a6]{background:#d5d5d5;color:#898989}.tui-gray-outline[data-v-52f890a6]{color:#999;background:transparent}.tui-gray-outline[data-v-52f890a6]::after{border:1px solid #999}.tui-outline-hover[data-v-52f890a6]{opacity:.6}.tui-circle-btn[data-v-52f890a6]{border-radius:%?40?%!important}.tui-circle-btn[data-v-52f890a6]::after{border-radius:%?80?%!important}',""]),t.exports=e},e634:function(t,e,a){"use strict";var i=a("7051"),n=a.n(i);n.a},e87d:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-load-more"},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[a("v-uni-view",{staticClass:"load1 load"},[a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load2 load"},[a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}})],1),a("v-uni-view",{staticClass:"load3 load"},[a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}}),a("v-uni-view",{staticClass:"child_load",style:{background:t.color}})],1)],1),a("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},o=[]}}]);