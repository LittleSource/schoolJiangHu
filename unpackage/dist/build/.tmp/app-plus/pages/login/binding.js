(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/binding"],{7014:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",[n("view",{staticClass:"grace-padding",staticStyle:{"background-color":"#fffcfa"}},[n("view",{staticClass:"grace-form",staticStyle:{width:"95%",margin:"0 auto"}},[n("form",{attrs:{eventid:"6cb9909c-2"},on:{submit:e.bindNow}},[n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("view",{staticClass:"iconfont icon-shouji"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneno,expression:"phoneno"}],staticClass:"input",attrs:{type:"number",name:"phone",placeholder:"请输入手机号",maxlength:"11",eventid:"6cb9909c-0"},domProps:{value:e.phoneno},on:{input:function(t){t.target.composing||(e.phoneno=t.target.value)}}})]),n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("view",{staticClass:"iconfont icon-mima1"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input",attrs:{type:"text",password:"",name:"password",placeholder:"请输入密码",maxlength:"20",eventid:"6cb9909c-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("button",{staticStyle:{background:"linear-gradient(to right,#fc6666,#ff8c55)","margin-top":"30px"},attrs:{loading:e.btnLoading,"form-type":"submit",type:"primary"}},[e._v("开始绑定"),n("text",{staticClass:"grace-iconfont icon-arrow-right"})])],1)],1)])])},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},bd31:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r=n("4e77"),s={data:function(){return{key:""}},computed:(0,a.mapState)(["user"]),methods:o({},(0,a.mapMutations)(["login"]),{bindNow:function(t){var n=this,a=[{name:"phone",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"password",checkType:"string",checkRule:"8,20",errorMsg:"密码长度应为8-20个字符"}],o=t.detail.value,i=r.check(o,a);if(i){this.btnLoading=!0;var s=t.detail.value;s.openId=this.user.openId,s.type=this.user.type,e.request({url:this.GLOBAL.serverSrc+"common/login/binding",method:"POST",data:s,success:function(t){console.log(JSON.stringify(t)),200===t.data.status?(n.login(t.data),e.showToast({title:"绑定成功"}),e.reLaunch({url:"../index/index"})):e.showToast({title:t.data.msg,icon:"none"})},fail:function(e){n.GLOBAL.requestFail(e)},complete:function(){n.btnLoading=!1}})}else e.showToast({title:r.error,icon:"none"})}})};t.default=s}).call(this,n("6e42")["default"])},c302:function(e,t,n){"use strict";n.r(t);var a=n("bd31"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},ca94:function(e,t,n){"use strict";n("859d");var a=i(n("b0ce")),o=i(n("ddbb"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(o.default))},ddbb:function(e,t,n){"use strict";n.r(t);var a=n("7014"),o=n("c302");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);var r=n("2877"),s=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=s.exports}},[["ca94","common/runtime","common/vendor"]]]);