(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-afservice-apply"],{"054f":function(t,e,n){"use strict";n.r(e);var i=n("30b4"),a=n("36f8");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("06fd");var c,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"1945a82c",null,!1,i["a"],c);e["default"]=o.exports},"06fd":function(t,e,n){"use strict";var i=n("5ba3"),a=n.n(i);a.a},"10b9":function(t,e,n){"use strict";n.r(e);var i=n("a8f2");for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);var s,c,r,o,u=n("f0c5"),l=Object(u["a"])(i["default"],s,c,!1,null,null,null,!1,r,o);e["default"]=l.exports},"11b4":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-1945a82c]{background:#f3f3f3;padding-bottom:%?120?%}body.?%PAGE?%[data-v-1945a82c]{background:#f3f3f3}',""]),t.exports=e},"20b0":function(t,e,n){"use strict";var i=n("4ea4");n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c1f4")),s=i(n("757a")),c={},r=function(t){var e=t.url,n=t.data,i=t.name,r=t.isFull,o=t.path_type;c["token"]="".concat(s.default.getters.cache_user_login_key),c["platform"]="".concat(s.default.getters.platform);var u=s.default.getters.cache_shop_user_info_key,l=u&&u["token"]?u["token"]:"",d="&application=app&application_client_type=weixin&ajax=ajax&token="+l+"&uuid="+s.default.getters.cache_user_uuid_key||!1,f=r?e:a.default+"/index.php?s="+e;return new Promise((function(t,e){uni.uploadFile({url:f+d,header:c,filePath:n,fileType:"image",formData:{action:"uploadimage",path_type:o},name:i}).then((function(n){var i="string"==typeof n[1].data?JSON.parse(n[1].data):n[1].data;if(!n[1].statusCode||200!=n[1].statusCode)throw e(i);if(0!=i["code"])throw i;t(i)})).catch((function(t){switch(t.code){case 401:uni.clearStorageSync();break;default:uni.showToast({title:t.msg,icon:"none"});break}}))}))},o=r;e.default=o},"30b4":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.initLoading?t._e():n("v-uni-view",{staticClass:"container"},[1==t.selectPros.length?n("v-uni-view",{staticClass:"afsInfo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.applySelect.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:t.selectPros[0].images}}),n("v-uni-text",{staticClass:"afProname flex1"},[t._v(t._s(t.selectPros[0].title))])],1):t.selectPros.length>1?n("v-uni-view",{staticClass:"afsInfo",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.applySelect.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"flex1 scrollFix"},[n("v-uni-scroll-view",{staticClass:"goods-box",attrs:{"scroll-x":!0}},t._l(t.selectPros,(function(e,i){return n("v-uni-view",{key:i,staticClass:"goods-item"},[n("v-uni-image",{staticClass:"goods-img",attrs:{src:e.product_image,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"buyNums"},[t._v("X"+t._s(e.nums))])],1)})),1)],1),n("v-uni-text",{staticClass:"iconfont icon-xiayiyeqianjinchakangengduo posArrow"})],1):t._e(),n("v-uni-view",{staticClass:"afsActionCommfield"},[n("v-uni-view",{staticClass:"wekitBox"},[n("v-uni-text",{staticClass:"title"},[t._v("商品状态")]),n("v-uni-view",{staticClass:"flex1 radioOption"},[n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.reasons,(function(e,i){return n("v-uni-view",{key:i,staticClass:"radioList"},[n("v-uni-radio",{attrs:{value:e.value,checked:t.receiving_status==e.value,color:"#FE6167"}}),t._v(t._s(e.name))],1)})),1)],1)],1)],1),n("v-uni-view",{staticClass:"afsActionCommfield"},[n("v-uni-view",{staticClass:"wekitBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.serviceAction.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"title"},[t._v("申请原因")]),n("v-uni-view",{staticClass:"resonOption flex1"},[n("v-uni-text",{staticClass:"askfor_reason"},[t._v(t._s(t.reason))]),n("v-uni-view",{staticClass:"more"},[n("v-uni-image",{attrs:{src:"/static/more.png",mode:"aspectFill"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"afsActionCommfield"},[1==t.selectPros.length&&1==t.type?n("v-uni-view",{staticClass:"wekitBox"},[n("v-uni-text",{staticClass:"title"},[t._v("申请数量")]),n("v-uni-view",{staticClass:"count"},[n("v-uni-text",{staticClass:"commBtn",class:t.count<=1?"disabled":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.prCount("minus")}}},[n("v-uni-text",{staticClass:"iconfont icon-jian"})],1),n("v-uni-text",{staticClass:"nowCount"},[t._v(t._s(t.count))]),n("v-uni-text",{staticClass:"commBtn",class:t.count>=t.returned_data.returned_quantity?"disabled":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.prCount("plus")}}},[n("v-uni-text",{staticClass:"iconfont icon-jia"})],1)],1)],1):t._e(),n("v-uni-view",{staticClass:"wekitBox boderLine"},[n("v-uni-text",{staticClass:"title"},[t._v("退款金额")]),n("v-uni-input",{staticClass:"input refund flex1",attrs:{type:"text",maxlength:"8",placeholder:"","placeholder-class":"placeholder"},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.refundFoucs.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.refundAction.apply(void 0,arguments)}},model:{value:t.form_price,callback:function(e){t.form_price=e},expression:"form_price"}}),t.form_price?n("v-uni-text",{staticClass:"moneyCell"},[t._v(t._s(t.cache_config_info_key["currency_symbol"]))]):t._e(),n("v-uni-text",{staticClass:"moneyReturn"},[t._v("（不超过"+t._s(t.refund_price)+"）")])],1),n("v-uni-view",{staticClass:"wekitBox"},[n("v-uni-text",{staticClass:"title"},[t._v("退款说明")]),n("v-uni-input",{staticClass:"input flex1",attrs:{type:"text",placeholder:"选填","placeholder-class":"placeholder"},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})],1)],1),n("v-uni-view",{staticClass:"afsActionCommfield"},[n("v-uni-view",{staticClass:"wekitBox h80"},[n("v-uni-text",{staticClass:"title"},[t._v("上传凭证")])],1),n("v-uni-view",{staticClass:"evaluate-image"},[t._l(t.images,(function(e,i){return n("v-uni-view",{key:i,staticClass:"img-show"},[n("v-uni-image",{staticClass:"img",attrs:{src:e,mode:"aspectFill"}}),n("v-uni-text",{staticClass:"iconfont icon-guanbi close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.imgDel(i)}}})],1)})),n("v-uni-image",{staticClass:"goods-img",attrs:{src:"/static/imgAdd.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImg()}}})],2)],1),t._e(),n("v-uni-view",{staticClass:"salefooter"},[n("v-uni-text",{staticClass:"submit",class:t.isLoading?"disabled":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saleSubmit.apply(void 0,arguments)}}},[t._v("提交")])],1),n("afreasons",{ref:"afreasons",attrs:{"receiving-status":t.receiving_status,reasons:t.reason_data},on:{"on-cancel":function(e){arguments[0]=e=t.$handleEvent(e),t.ocancelAction.apply(void 0,arguments)}}}),n("afservice",{ref:"afservice",attrs:{"cart-list":t.proInfos},on:{"on-checkSelect":function(e){arguments[0]=e=t.$handleEvent(e),t.checkSelectAction.apply(void 0,arguments)},"on-prosConfirm":function(e){arguments[0]=e=t.$handleEvent(e),t.prosConfirm.apply(void 0,arguments)}}})],1)},s=[]},"30b4d":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"popup spec",class:t.specClass,staticStyle:{"z-index":"998"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"mask"}),n("v-uni-view",{staticClass:"servicelayer attr-content special",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-scroll-view",{staticClass:"list-scroll-content",attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"cart-list"},t._l(t.cartList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"forCartList pr30"},[n("v-uni-view",{staticClass:"cart-item"},[n("v-uni-view",{staticClass:"image-wrapper"},[n("v-uni-image",{staticClass:"loaded",attrs:{src:e.product_image,mode:"aspectFill","lazy-load":!0}}),n("v-uni-view",{staticClass:"iconfont checkbox",class:e.isChecked?"checked icon-xuanzhong":"icon-weixuanzhong",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.checkSel(e,i)}}})],1),n("v-uni-view",{staticClass:"item-right"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(e.product_name))]),n("v-uni-text",{staticClass:"attr"},[t._v(t._s(e.option_value_str))]),n("v-uni-view",{staticClass:"priceMore"},[n("v-uni-text",{staticClass:"price"},[n("v-uni-text",{staticClass:"bgde"},[t._v("¥")]),t._v(t._s(e.product_sku_one_amount))],1),n("v-uni-view",{staticClass:"count"},[n("v-uni-text",{staticClass:"commBtn",class:e.nums<=1?"disabled":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.prCount(e,"minus")}}},[n("v-uni-text",{staticClass:"iconfont icon-jian"})],1),n("v-uni-text",{staticClass:"nowCount"},[t._v(t._s(e.nums))]),n("v-uni-text",{staticClass:"commBtn",class:parseInt(e.nums)>=parseInt(e.actual_can_return_count)?"disabled":"",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.prCount(e,"plus")}}},[n("v-uni-text",{staticClass:"iconfont icon-jia"})],1)],1)],1)],1)],1)],1)})),1)],1),n("v-uni-view",{staticClass:"service-section"},[n("v-uni-view",{staticClass:"selAction"},[n("v-uni-text",{staticClass:"iconfont checkbox",class:t.allChecked?"checked icon-xuanzhong":"icon-weixuanzhong",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isCheackAll()}}}),t._v("全选")],1),n("v-uni-view",{staticClass:"selBtns"},[n("v-uni-button",{staticClass:"no-border reset-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"no-border confirm-btn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirmSelected.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1)},s=[]},"36f8":function(t,e,n){"use strict";n.r(e);var i=n("e2a9"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"3cee":function(t,e,n){"use strict";n.r(e);var i=n("cf1a"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"42ac":function(t,e,n){"use strict";var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i(n("31b2"));var a={data:function(){return{initLoading:0,loading:0}},watch:{loading:function(t,e){t>0?uni.showLoading({mask:!0,title:"加载中"}):uni.hideLoading()},initLoading:function(t,e){}},created:function(){},methods:{}};e.default=a},5867:function(t,e,n){"use strict";var i=n("7bc7"),a=n.n(i);a.a},"5ba3":function(t,e,n){var i=n("11b4");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7bd9314e",i,!0,{sourceMap:!1,shadowMode:!1})},"7bc7":function(t,e,n){var i=n("fe38");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("1c5666fe",i,!0,{sourceMap:!1,shadowMode:!1})},9450:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"popup spec",class:t.specClass,staticStyle:{"z-index":"998"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec()}}},[n("v-uni-view",{staticClass:"mask"}),n("v-uni-view",{staticClass:"layer attr-content",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"poupService"},[n("v-uni-view",{staticClass:"poupService"},[n("v-uni-text",{staticClass:"name"},[t._v("申请退款")])],1),n("v-uni-view",{staticClass:"cancel-tips"},[n("v-uni-text",{staticClass:"reason"},[t._v("请选择申请退款的原因（必选）：")]),n("v-uni-view",{staticClass:"radios"},[n("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioChange.apply(void 0,arguments)}}},t._l(t.reasons[t.receivingStatus],(function(e,i){return n("v-uni-view",{key:i,staticClass:"radioList"},[n("v-uni-radio",{attrs:{value:e,checked:i===t.curSeleIndex,color:"#FE6167"}}),t._v(t._s(e))],1)})),1)],1)],1)],1),n("v-uni-button",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleSpec("submit")}}},[t._v("提交")])],1)],1)},s=[]},"947c":function(t,e,n){"use strict";n.r(e);var i=n("9450"),a=n("d00c");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);var c,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=o.exports},"9e5f":function(t,e,n){"use strict";n.r(e);var i=n("30b4d"),a=n("3cee");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("5867");var c,r=n("f0c5"),o=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"09297f4a",null,!1,i["a"],c);e["default"]=o.exports},a8f2:function(t,e,n){"use strict";n.r(e);var i=n("42ac"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},cf1a:function(t,e,n){"use strict";var i=n("4ea4");n("4160"),n("e25e"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5530")),s=n("2f62"),c=(n("2493"),i(n("9fc0")),{components:{},props:{cartList:{type:Array,default:null}},data:function(){return{specClass:"none",allChecked:!1,allCheckedSkus:[]}},onLoad:function(){},watch:{cartList:function(t){}},computed:(0,a.default)({},(0,s.mapGetters)(["mallToken","platform"])),methods:{prCount:function(t,e){var n=parseInt(t["nums"]);"plus"==e?n<t["actual_can_return_count"]&&n++:"minus"==e&&n>1&&n--,t["nums"]=n},checkSel:function(t,e){this.$emit("on-checkSelect",{data:t.order_list_id})},isCheackAll:function(){this.allChecked=!this.allChecked,this.$emit("on-checkSelect",{data:"all",flag:this.allChecked})},confirmSelected:function(){var t=this,e=0;this.cartList.forEach((function(t){t.isChecked&&e++})),e<=0?this.$api.msg("至少选择一个退货商品",2500):(this.$emit("on-prosConfirm"),setTimeout((function(){t.toggleSpec()}),100))},stopPrevent:function(){},toggleSpec:function(t){var e=this;"slideIn"===this.specClass?(this.specClass="slideOut",setTimeout((function(){e.specClass="none"}),500)):"none"===this.specClass&&(this.specClass="slideIn")}}});e.default=c},d00c:function(t,e,n){"use strict";n.r(e);var i=n("efcc"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},e2a9:function(t,e,n){"use strict";var i=n("4ea4");n("99af"),n("4160"),n("a434"),n("acd8"),n("e25e"),n("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=i(n("1da1")),s=i(n("5530")),c=i(n("9fc0")),r=i(n("20b0")),o=i(n("9e5f")),u=i(n("947c")),l=i(n("10b9")),d=n("2f62"),f={components:{afservice:o.default,afreasons:u.default},mixins:[l.default],data:function(){return{oid:"",did:"",order_list:"",type:"0",proInfos:[],selectPros:[],images:[],user_name:"",phone_number:"",reason:"",msg:"",receiving_status:0,count:1,form_price:"",ori_refund_amount:"",isLoading:!1,returned_data:{},reason_data:[],editor_path_type:"",reasons:[{name:"未收到货",value:"0"},{name:"已收到货",value:"1"}]}},onLoad:function(t){t.oid&&t.did?(this.oid=t.oid,this.did=t.did,this.loadData()):uni.redirectTo({url:"/pages/error/index"})},computed:(0,s.default)((0,s.default)({},(0,d.mapGetters)(["platform","cache_config_info_key"])),{},{per_price:function(){var t=this.returned_data["refund_price"]/this.returned_data["returned_quantity"];return t},refund_price:function(){return this.form_price=this.returned_data?this.returned_data.refund_price:0,this.returned_data?this.returned_data.refund_price:0}}),methods:{loadData:function(t){var e=this;return(0,a.default)(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.loadingFn((0,c.default)("/api/orderaftersale/aftersale","POST",{did:e.did,oid:e.oid}));case 2:n=t.sent,i=n.data,e.editor_path_type=i.editor_path_type,e.returned_data=i.returned_data,e.count=parseInt(e.returned_data.returned_quantity),e.form_price=e.returned_data.refund_price,e.selectPros.push(i.order_data.items),e.reason_data=[i.return_only_money_reason,i.return_money_goods_reason];case 10:case"end":return t.stop()}}),t)})))()},serproConfirm:function(t){return(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return");case 2:case"end":return t.stop()}}),t)})))()},prosConfirm:function(){},afsApplyAction:function(t){uni.navigateTo({url:"/pages/afservice/apply?id=".concat(id,"&order_id=")+this.oid})},applySelect:function(){1!=this.proInfos.length&&(this.$refs.afservice["specClass"]="slideIn")},serviceAction:function(){this.$refs.afreasons["specClass"]="show"},ocancelAction:function(t){this.reason=t},refundFoucs:function(){this.isLoading=!0},refundAction:function(t){var e=this;/^[0-9]+.?[0-9]*$/.test(t.target.value)?parseFloat(t.target.value)>this.returned_data.refund_price&&(this.$api.msg("不能超过最大可退金额！",2e3),this.form_price=this.returned_data.refund_price):(this.$api.msg("退款金额填写有误！",2e3),this.form_price=this.returned_data.refund_price),setTimeout((function(){e.isLoading&&(e.isLoading=!1)}),500)},radioChange:function(t){this.receiving_status!=t.target.value&&(this.reason=""),this.receiving_status=parseInt(t.target.value),this.type=parseInt(t.target.value)},checkSelectAction:function(t){var e=this;if("all"==t.data)this.proInfos.forEach((function(e){t.flag?e.isChecked=!0:e.isChecked=!1}));else{var n=!0;this.proInfos.forEach((function(i){t.data==i.order_list_id&&(i.isChecked=!i.isChecked),i.isChecked||(e.$refs.afservice["allChecked"]=!1,n=!1)})),n&&(this.$refs.afservice["allChecked"]=!0)}},prCount:function(t){"plus"==t?this.count<this.returned_data.returned_quantity&&(this.count=parseInt(this.count)+1):"minus"==t&&this.count>1&&(this.count=parseInt(this.count)-1);var e=JSON.stringify([{order_list_id:this.order_list_id,number:this.count}]);this.order_list=e,this.serproConfirm(e)},chooseImg:function(){if(this.images.length>=3)this.$api.msg("最多支持上传3张图片！",2e3);else{var t=this;uni.chooseImage({count:3,sizeType:["compressed"],success:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.tempFilePaths.forEach(function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(n){var i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadingFn((0,r.default)({url:"/api/ueditor/index",data:n,name:"upfile",path_type:t.editor_path_type}));case 2:i=e.sent,a=i.data,t.images=t.images.concat(a.url);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()})}},imgDel:function(t){this.images.splice(t,1)},saleSubmit:function(){var t=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var n,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[{fields:"reason",msg:"请选择退款原因！"},{fields:"price",msg:"请选填写退款金额！"}],i={order_id:t.oid,order_detail_id:t.did,type:t.type,reason:t.reason,msg:t.msg,images:JSON.stringify(t.images),price:t.form_price},1==t.type&&(i["number"]=t.count),e.next=5,t.$app.fields_check(i,n);case 5:if(a=e.sent,!a){e.next=20;break}return e.prev=7,t.isLoading=!0,e.next=11,t.loadingFn((0,c.default)("/api/orderaftersale/create","POST",i));case 11:s=e.sent,s.data,t.$api.msg("退货申请提交成功！",2e3),setTimeout((function(){uni.navigateTo({url:"/pages/user-order/user-order?nav_table=4"})}),1500),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](7),t.isLoading=!1;case 20:case"end":return e.stop()}}),e,null,[[7,17]])})))()}}};e.default=f},efcc:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={components:{},props:{receivingStatus:{type:Number,default:1},reasons:{type:Array,default:function(){return[]}}},watch:{},data:function(){return{specClass:"none",curSeleIndex:0,reason:"空包裹/少货"}},methods:{toggleSpec:function(t){var e=this;"submit"!=t||""!=this.reason?("show"===this.specClass?(this.specClass="hide",setTimeout((function(){e.specClass="none"}),100)):"none"===this.specClass&&(this.specClass="show"),"submit"==t&&this.$emit("on-cancel",this.reason)):this.$api.msg("至少选择一个退货原因",2e3)},stopPrevent:function(){},radioChange:function(t){var e=t.target.value;this.reason=e}}};e.default=i},fe38:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/*远素间距*/\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-09297f4a]{background:#f3f3f3}body.?%PAGE?%[data-v-09297f4a]{background:#f3f3f3}',""]),t.exports=e}}]);