(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/reg"],{"1db1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=n("4e77"),c={data:function(){return{positionTop:500,vcodeBtnName:"获取验证码",countNum:120,countDownTimer:null,phoneno:"",password:"",btnLoading:!1}},onLoad:function(){this.positionTop=t.getSystemInfoSync().windowHeight-105},methods:a({},(0,o.mapMutations)(["regSetPhoneAndPass"]),{loginWithWx:function(){t.showToast({title:"微信登录功能开发中",icon:"none"})},regNow:function(e){var n=this,o=[{name:"phone",checkType:"phoneno",errorMsg:"请输入正确的手机号"},{name:"yzm",checkType:"string",checkRule:"6,6",errorMsg:"短信验证码不正确"},{name:"password",checkType:"string",checkRule:"8,20",errorMsg:"密码长度应为8-20个字符"}],a=e.detail.value,i=s.check(a,o);i?(this.btnLoading=!0,t.request({url:this.GLOBAL.serverSrc+"common/register/verifyVCode",method:"POST",data:{phone:e.detail.value.phone,vCode:e.detail.value.yzm},success:function(o){if(200===o.data.status){var a={phone:e.detail.value.phone,password:e.detail.value.password};n.regSetPhoneAndPass(a),t.navigateTo({url:"./selectSex"})}else t.showToast({title:o.data.msg,icon:"none"})},fail:function(t){n.GLOBAL.requestFail(t)},complete:function(){n.btnLoading=!1}})):t.showToast({title:s.error,icon:"none"})},getVCode:function(){var e=this,n=/^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;if(!n.test(this.phoneno))return t.showToast({title:"请填写正确的手机号码",icon:"none"}),!1;"获取验证码"!=this.vcodeBtnName&&"重新发送"!=this.vcodeBtnName||(this.vcodeBtnName="发送中...",t.request({url:this.GLOBAL.serverSrc+"common/register/sendVcode?phone="+this.phoneno,method:"GET",success:function(n){200===n.data.status?(t.showToast({title:n.data.msg,icon:"none"}),e.countNum=120,e.countDownTimer=setInterval(function(){this.countDown()}.bind(e),1e3)):(t.showToast({title:n.data.msg,icon:"none"}),e.vcodeBtnName="获取验证码")},fail:function(n){0===n.statusCode?t.showToast({title:"未知的网络错误, 请确保设备处在联网状态",icon:"none"}):t.showToast({title:"发生网络错误，错误码为："+n.statusCode,icon:"none"}),e.vcodeBtnName="获取验证码"}}))},countDown:function(){if(this.countNum<1)return clearInterval(this.countDownTimer),void(this.vcodeBtnName="重新发送");this.countNum--,this.vcodeBtnName=this.countNum+"秒重发"}})};e.default=c}).call(this,n("6e42")["default"])},"2fd3":function(t,e,n){},"36b9":function(t,e,n){"use strict";n.r(e);var o=n("f6aa"),a=n("4dfa");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("ed3e");var s=n("2877"),c=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},"4dfa":function(t,e,n){"use strict";n.r(e);var o=n("1db1"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},"798c":function(t,e,n){"use strict";n("859d");var o=i(n("b0ce")),a=i(n("36b9"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},ed3e:function(t,e,n){"use strict";var o=n("2fd3"),a=n.n(o);a.a},f6aa:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"grace-padding"},[t._m(0),n("view",{staticClass:"grace-form",staticStyle:{width:"95%",margin:"0 auto"}},[n("form",{attrs:{eventid:"4c98c0cb-3"},on:{submit:t.regNow}},[n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("view",{staticClass:"iconfont icon-shouji"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneno,expression:"phoneno"}],staticClass:"input",attrs:{type:"number",name:"phone",placeholder:"请输入手机号",maxlength:"11",eventid:"4c98c0cb-0"},domProps:{value:t.phoneno},on:{input:function(e){e.target.composing||(t.phoneno=e.target.value)}}})]),n("view",{staticClass:"grace-items  item-border"},[n("view",{staticClass:"grace-label"},[n("view",{staticClass:"iconfont icon-mima1"})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"text",password:"",name:"password",placeholder:"请输入密码",maxlength:"20",eventid:"4c98c0cb-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("view",{staticClass:"grace-space-between item-border",staticStyle:{"margin-top":"28rpx","max-height":"95rpx"}},[n("view",{staticClass:"grace-items",staticStyle:{width:"70%"}},[n("view",{staticClass:"grace-label"},[n("view",{staticClass:"iconfont icon-yanzhengma"})]),n("input",{staticClass:"input",attrs:{type:"number",name:"yzm",placeholder:"请输入验证码"}})]),n("view",{staticStyle:{width:"28%","margin-left":"2%",paading:"0"}},[n("button",{staticClass:"login-sendmsg-btn",attrs:{type:"primary",eventid:"4c98c0cb-2"},on:{tap:t.getVCode}},[t._v(t._s(t.vcodeBtnName))])],1)]),n("button",{staticStyle:{background:"#fc4243","margin-top":"30px"},attrs:{loading:t.btnLoading,"form-type":"submit",type:"primary"}},[t._v("注册"),n("text",{staticClass:"grace-iconfont icon-arrow-right"})])],1)],1),n("view",{staticClass:"reg-footer",style:{top:t.positionTop+"px"}},[n("view",{staticClass:"item-border"}),t._m(1),n("view",{staticClass:"grace-login-three"},[n("view",{staticClass:"grace-iconfont icon-weixin",staticStyle:{color:"#00c40b"},attrs:{eventid:"4c98c0cb-4"},on:{tap:t.loginWithWx}}),n("view",{staticClass:"grace-iconfont icon-qq",staticStyle:{color:"#01a1e5"}}),n("view",{staticClass:"grace-iconfont icon-weibo",staticStyle:{color:"#fc4243"}})])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"grace-center",staticStyle:{"margin-top":"40px","margin-bottom":"10px"}},[n("image",{staticClass:"ym-logo",attrs:{src:"../../static/logo.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"grace-title"},[n("view",{staticClass:"grace-h5 grace-blod grace-center",staticStyle:{color:"grey"}},[t._v("使用其他账号登录")])])}];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})}},[["798c","common/runtime","common/vendor"]]]);