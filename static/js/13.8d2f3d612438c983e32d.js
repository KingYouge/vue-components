webpackJsonp([13],{HrwK:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"main__securitySetting"},[s("div",{staticClass:"securitySettingBox"},[s("nav",{staticClass:"securitySetting__nav"},[s("ul",{staticClass:"navBox"},t._l(t.navList,function(i){return s("li",{key:i.key,class:["nav__item",i.key===t.navActive&&"is-active"],on:{click:function(s){t.navActive=i.key}}},[t._v("\n          "+t._s(i.name)+"\n        ")])}),0)]),t._v(" "),s("main",{staticClass:"securitySetting__content"},[1===t.navActive?s("section",{staticClass:"content__item"},[s("p",{staticClass:"item__title"},[t._v("安全设置")]),t._v(" "),s("ul",[s("li",{staticClass:"item__detail"},[t._m(0),t._v(" "),s("section",[s("el-button",[t._v("修改")])],1)]),t._v(" "),s("li",{staticClass:"item__detail"},[t._m(1),t._v(" "),s("section",[s("el-button",[t._v("修改")])],1)]),t._v(" "),s("li",{staticClass:"item__detail"},[t._m(2),t._v(" "),s("section",[s("el-button",[t._v("修改")])],1)])])]):s("section",{staticClass:"content__item"},[s("p",{staticClass:"item__title"},[t._v("通知设置")]),t._v(" "),s("ul",[s("li",{staticClass:"item__detail"},[t._m(3),t._v(" "),s("section",[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.noticeSetting.system,callback:function(i){t.$set(t.noticeSetting,"system",i)},expression:"noticeSetting.system"}})],1)]),t._v(" "),s("li",{staticClass:"item__detail"},[t._m(4),t._v(" "),s("section",[s("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.noticeSetting.account,callback:function(i){t.$set(t.noticeSetting,"account",i)},expression:"noticeSetting.account"}})],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("section",[i("span",{staticClass:"detail__title"},[i("i",{staticClass:"icon-person mr-5"}),this._v("帐号密码")]),i("br"),this._v(" "),i("span",{staticClass:"detail__text"},[this._v("更新当前帐号密码")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("section",[i("span",{staticClass:"detail__title"},[i("i",{staticClass:"icon-smartphone mr-5"}),this._v("绑定手机")]),i("br"),this._v(" "),i("span",{staticClass:"detail__text"},[this._v("设置您的绑定手机号码")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("section",[i("span",{staticClass:"detail__title"},[i("i",{staticClass:"icon-email mr-5"}),this._v("绑定邮箱")]),i("br"),this._v(" "),i("span",{staticClass:"detail__text"},[this._v("设置您的绑定邮箱")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("section",[i("span",{staticClass:"detail__title"},[i("i",{staticClass:"icon-person mr-5"}),this._v("系统消息")]),i("br"),this._v(" "),i("span",{staticClass:"detail__text"},[this._v("系统性的通知或者更新消息")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("section",[i("span",{staticClass:"detail__title"},[i("i",{staticClass:"icon-smartphone mr-5"}),this._v("帐号消息")]),i("br"),this._v(" "),i("span",{staticClass:"detail__text"},[this._v("帐号变更的通知消息")])])}]};var a=s("C7Lr")({name:"SecuritySetting",data:function(){return{navList:[{key:1,name:"安全设置"},{key:2,name:"通知设置"}],navActive:1,noticeSetting:{system:!0,account:!0}}},methods:{}},e,!1,function(t){s("ilT/")},"data-v-55ae64de",null);i.default=a.exports},"ilT/":function(t,i){}});
//# sourceMappingURL=13.8d2f3d612438c983e32d.js.map