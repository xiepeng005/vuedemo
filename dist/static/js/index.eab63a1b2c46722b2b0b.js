webpackJsonp([0],{"1vp6":function(t,s){},BeAu:function(t,s,a){"use strict";var e={data:function(){return{}},props:["stockList"],filters:{transNumber:function(t){var s=Number(t);return s>0?"+"+s:s}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"common-stock-market"},[a("ul",t._l(t.stockList,function(s,e){return a("li",{key:e},[a("p",[t._v(t._s(s[0]))]),t._v(" "),a("div",{class:{"font-red":s[3]>0,"font-green":s[3]<0}},[a("strong",[t._v(t._s(s[1]))]),t._v(" "),a("span",[t._v(t._s(t._f("transNumber")(s[2])))]),t._v(" "),a("span",[t._v(t._s(t._f("transNumber")(s[3]))+"%")])])])}))])},staticRenderFns:[]};var i=a("VU/8")(e,n,!1,function(t){a("SBLl")},null,null);s.a=i.exports},EVnE:function(t,s){},SBLl:function(t,s){},TVmP:function(t,s,a){"use strict";var e={name:"Footer",props:["nownav"],mounted:function(){console.log(this.nownav)}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer-nav clearfix"},[a("a",{class:{active:1===t.nownav},attrs:{href:"/index.html"},on:{click:function(s){t.nownav=1}}},[a("i",{staticClass:"i1"}),a("span",[t._v("首页")])]),t._v(" "),a("a",{class:{active:2===t.nownav},attrs:{href:"/personcenter/stock_pool.html"},on:{click:function(s){t.nownav=2}}},[a("i",{staticClass:"i5"}),a("span",[t._v("自选")])]),t._v(" "),a("a",{class:{active:3===t.nownav},attrs:{href:"/trade/dayTrade.html"},on:{click:function(s){t.nownav=3}}},[a("i",{staticClass:"i2"}),a("span",[t._v("申请资金")])]),t._v(" "),a("a",{class:{active:4===t.nownav},attrs:{href:"/trade/myTrade.html"},on:{click:function(s){t.nownav=4}}},[a("i",{staticClass:"i3"}),a("span",[t._v("交易")])]),t._v(" "),a("a",{class:{active:5===t.nownav},attrs:{href:"/personcenter/personcenterIndex.html"},on:{click:function(s){t.nownav=5}}},[a("i",{staticClass:"i4"}),a("span",[t._v("我的")])])])},staticRenderFns:[]};var i=a("VU/8")(e,n,!1,function(t){a("wun6")},null,null);s.a=i.exports},U67u:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),n=a("Uoek"),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"m-body"},[a("div",{staticClass:"swiper-container"},[a("mt-swipe",{attrs:{auto:4e3}},[t._l(t.adList,function(t,s){return[a("mt-swipe-item",{key:s},[a("img",{attrs:{src:t.img_url}})])]})],2)],1),t._v(" "),a("div",{staticClass:"index-menu"},[a("ul",[a("li",[a("a",{staticClass:"flex-box"},[a("div",{staticClass:"flex-box icon"},[a("img",{attrs:{src:t.imgs[0]}})]),t._v(" "),a("p",{staticClass:"flex"},[t._v("帮助中心")])])]),t._v(" "),a("li",[a("a",{staticClass:"flex-box"},[a("div",{staticClass:"flex-box icon icon-blue"},[a("img",{attrs:{src:t.imgs[1]}})]),t._v(" "),a("p",{staticClass:"flex"},[t._v("规则说明")])])])])]),t._v(" "),a("Stock",{attrs:{stockList:t.stockList}}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)],1),t._v(" "),a("Footer",{attrs:{nownav:1}})],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-product"},[a("div",{staticClass:"product-flag"},[t._v("免息")]),t._v(" "),a("div",{staticClass:"product-wrap"},[a("div",{staticClass:"name"},[a("strong",[t._v("免息体验")]),a("span",[t._v("0利息")])]),t._v(" "),a("dl",{staticClass:"des flex-box"},[a("dd",[a("span",{staticClass:"font-red"},[t._v("20000")]),t._v("元体验金")]),t._v(" "),a("dd",{staticClass:"separate"}),t._v(" "),a("dd",{staticClass:"flex"},[t._v("盈利"),a("span",{staticClass:"font-red"},[t._v("100%")]),t._v("归您")])]),t._v(" "),a("a",{staticClass:"btn",attrs:{href:"/trade/interestFree.html"}},[t._v("立即申请")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-product"},[a("div",{staticClass:"product-flag flag-yel"},[t._v("短线")]),t._v(" "),a("div",{staticClass:"product-wrap"},[a("div",{staticClass:"name"},[a("strong",[t._v("按天操盘")]),a("span",[t._v("按天计息")])]),t._v(" "),a("dl",{staticClass:"des flex-box"},[a("dd",[a("span",{staticClass:"font-yel"},[t._v("3-10")]),t._v("倍杠杆")]),t._v(" "),a("dd",{staticClass:"separate"}),t._v(" "),a("dd",{staticClass:"flex"},[t._v("盈利"),a("span",{staticClass:"font-yel"},[t._v("100%")]),t._v("归您")])]),t._v(" "),a("a",{staticClass:"btn btn-yel",attrs:{href:"/trade/dayTrade.html"}},[t._v("立即申请")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"index-product"},[a("div",{staticClass:"product-flag flag-blue"},[t._v("长线")]),t._v(" "),a("div",{staticClass:"product-wrap"},[a("div",{staticClass:"name"},[a("strong",[t._v("按月操盘")]),a("span",[t._v("按月计息")])]),t._v(" "),a("dl",{staticClass:"des flex-box"},[a("dd",[a("span",{staticClass:"font-blue"},[t._v("3-8")]),t._v("倍杠杆")]),t._v(" "),a("dd",{staticClass:"separate"}),t._v(" "),a("dd",{staticClass:"flex"},[t._v("盈利"),a("span",{staticClass:"font-blue"},[t._v("100%")]),t._v("归您")])]),t._v(" "),a("a",{staticClass:"btn btn-blue",attrs:{href:"/trade/monthTrade.html"}},[t._v("立即申请")])])])}]};var o=function(t){a("EVnE"),a("1vp6"),a("Zde6")},c=a("VU/8")(n.a,i,!1,o,null,null).exports,l=a("Au9i"),r=a.n(l);a("sVYa"),a("d8/S");e.default.config.productionTip=!1,e.default.use(r.a),new e.default({el:"#app",components:{App:c},template:"<App/>"})},Uoek:function(t,s,a){"use strict";(function(t){var e=a("wesB"),n=a("gGbG"),i=a("Au9i"),o=(a.n(i),a("BeAu")),c=a("TVmP");s.a={name:"App",components:{Toast:n.a,Swipe:i.Swipe,SwipeItem:i.SwipeItem,Stock:o.a,Footer:c.a},data:function(){return{adList:[],imgs:[a("fJtM"),a("fObv")],stockList:{}}},methods:{getAdList:function(){var s=this;t.ajax({type:"POST",url:e.a.baseUrl+"/tools/list_ajax.ashx?act=adlist",dataType:"json",timeout:2e4,success:function(t,a){null===t&&""===t||(s.adList=t.adList)},error:function(t,s,a){console.log("状态："+s+"；出错提示："+a)}})},stock_grial:function(){var s=this;t.get(e.a.baseUrl+"/tools/list_ajax.ashx",{act:"stock_grail",t:new Date},function(t){var a=t.split("#");a.length>0&&(s.$set(s.stockList,"sh_list",a[0].split(",")),s.$set(s.stockList,"zs_list",a[1].split(",")),s.$set(s.stockList,"sc_list",a[2].split(",")))})}},mounted:function(){var t=this;this.$nextTick(function(){t.getAdList(),t.stock_grial(),setInterval(t.stock_grial,5e3)})}}}).call(s,a("7t+N"))},Zde6:function(t,s){},"d8/S":function(t,s){},fJtM:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABC1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAACJg4+MAAAAV3RSTlMAJqDc4d/g3tS9bQ0kl/vrmCKW5cws5ufpnJCTkanNqMYTAzSn/jMCyhgRphDLGeLjMgyyBJSVmkrSRscPQisv+bHV01dMxe/y8fW8Q01JS6H9C2mizt2/QMbjAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAVZJREFUOMvtlGlTgkAYgFclQU1F1DzzSkErLY8sU0TFK++83v//T1opNpFm3K/N+Hxg4NmHdwZmZ5HFamOudOws53C6EMbldHCsnSwwNus1cnvAiJf3IeTjvSfaIyA/mAgEgwGzvUEhCEeiMZ34LYNtIoEv9mSc6GgkDCE8NZVGv2TustqMXFaUjnQ6BX6c5gvomPvkIX14NMhCXkuLJYNF4hPAc9noSsU/00oVoFqhSms8gJChSqUXgJhElWbqAHW6qZf0P6WH7cLXqFLpFcBNt13QW6PxjuhSZLEg2tTMJf1Jm63zaauppZzcLuuICnmvpYhEt2UOpyHoMKxdh2G7ynepdFmGaJbp4EOzd3rkqn18wrv66qnvocFwNCZ8jLGbTAVhOsE3+JEwGg7w0TmbD3QWy9WnPiW3Wi7IwnxWMH3qeqPmtFDdrM/+F3m72+93W9m08AUu85qQspsaKAAAAABJRU5ErkJggg=="},fObv:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAkCAMAAAAn1TMnAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABmFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAADALfN6AAAAhnRSTlMAVPSaF93VInS0K/nqMW+tKfHkLiovAVGIiYeKdQhsq1OPix/wKCaEgDUhlfvzFmiprF4UI+1iBJ32p5KWmYMJa12XHieYvVvJpduot9pxc7XsckzmFc/KBzcZLCB5foVnD/05nqajHRgRYOnS7j0KNjo/AqrYubjgZEdPTkb4d0DDkxsFWf+Ypx8AAAABYktHRACIBR1IAAAACXBIWXMAAAsSAAALEgHS3X78AAABYElEQVQ4y2NgQABGJmYGFMDCysbOgB1wtHGiCnBx8/DiUMvXxo8qICAoJEysWhFBIVEUATFxCUkpKSlpGVm5NnkGBUUpKJBW4lJWEVJVUwfJKmloApVqaeu0gYGunn6bAYNhGwIYGasImTBCOaZm5gwWbZZW1jY2NrZ29g5Acx0tnGwgwFab11lFyEXE2hXIsXZr43FnYGtzxedemN9YPNo8Gbza5IgKB+82HwbfNj8Y178tAM1c7kBY+JobAiV924JgUsEh1qhqQ8PCtXCojYiMQgtxkWgxHGrxgUGmNibWLg4XiE9IRFEb14YHJAWjqE1OSU3DBQyk0wddONBMbYaWMy6glYmqNis7MBsXUMnRRFErx5NriguosOahqM0vyCvEBYq4igdRmHm18RGjtrgEmOdL2+KIUStbBiw8ytsqKquqCYCaWru6pHqGhsY24kBTM0NLa1iuCmEQ6MPLAAAurOapBgB6+AAAAABJRU5ErkJggg=="},gGbG:function(t,s,a){"use strict";var e=a("7+uW"),n={props:{message:String,className:{type:String,default:""},position:{type:String,default:"middle"},iconClass:{type:String,default:""}},data:function(){return{visible:!1}},computed:{customClass:function(){var t=[];switch(this.position){case"top":t.push("placetop");break;case"bottom":t.push("placebottom");break;default:t.push("placemiddle")}return t.push(this.className),t.join(" ")}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"toast-pop"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"toast",class:t.customClass,style:{padding:""===t.iconClass?"10px":"20px"}},[""!=t.iconClass?a("i",{staticClass:"toast-icon",class:t.iconClass}):t._e(),t._v(" "),a("span",{staticClass:"toast-text",style:{"padding-top":""===t.iconClass?"0":"10px"}},[t._v(t._s(t.message))])])])},staticRenderFns:[]};var o=a("VU/8")(n,i,!1,function(t){a("hsXt")},"data-v-5a54a580",null).exports;const c=e.default.extend(o);let l=[],r=t=>{t.target.parentNode&&t.target.parentNode.removeChild(t.target)};c.prototype.close=function(){var t;this.visible=!1,this.$el.addEventListener("transitionend",r),this.closed=!0,(t=this)&&l.push(t)};var A=(t={})=>{let s=t.duration||3e3,a=(()=>{if(l.length>0){let t=l[0];return l.splice(0,1),t}return new c({el:document.createElement("div")})})();return a.closed=!1,clearTimeout(a.timer),a.message="string"==typeof t?t:t.message,a.position=t.position||"middle",a.className=t.className||"",a.iconClass=t.iconClass||"",document.body.appendChild(a.$el),e.default.nextTick(function(){a.visible=!0,a.$el.removeEventListener("transitionend",r),~s&&(a.timer=setTimeout(function(){a.closed||a.close()},s))}),a};a.d(s,"a",function(){return A});const d=function(t,s={}){d.installed||(t.$toast=t.prototype.$toast=A)};"undefined"!=typeof window&&window.Vue&&d(window.Vue)},hsXt:function(t,s){},wesB:function(t,s,a){"use strict";s.a={baseUrl:"http://localhost:13365/",name:"点点聚",phone:"18888888888"}},wun6:function(t,s){}},["U67u"]);
//# sourceMappingURL=index.eab63a1b2c46722b2b0b.js.map