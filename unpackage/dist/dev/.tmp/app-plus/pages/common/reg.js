(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/reg"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar graceChecker = __webpack_require__(/*! ../../graceUI/graceChecker.js */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\graceUI\\\\graceChecker.js\");var _default =\n{\n  data: function data() {\n    return {\n      vcodeBtnName: \"获取验证码\",\n      countNum: 120,\n      countDownTimer: null,\n      phoneno: '',\n      password: '',\n      yzm: '' };\n\n  },\n  methods: {\n    loginWithWx: function loginWithWx() {\n      uni.showToast({\n        title: \"微信登录功能开发中\",\n        icon: \"none\" });\n\n    },\n    changePre: function changePre(e) {\n      this.pnpre = this.pnpres[e.detail.value];\n    },\n    regNow: function regNow(e) {\n      // 表单验证\n      var rule = [{\n        name: \"phone\",\n        checkType: \"phoneno\",\n        errorMsg: \"请输入正确的手机号\" },\n      {\n        name: \"yzm\",\n        checkType: \"string\",\n        checkRule: \"6,6\",\n        errorMsg: \"短信验证码输入错误\" },\n      {\n        name: \"password\",\n        checkType: \"string\",\n        checkRule: \"8,20\",\n        errorMsg: \"密码长度应为8-20个字符\" }];\n\n      var formData = e.detail.value;\n      var checkRes = graceChecker.check(formData, rule);\n      // 验证通过\n      if (checkRes) {\n        var data = e.detail.value;\n        data.verificationCode = this.yzm;\n        uni.request({\n          url: this.GLOBAL.serverSrc + 'register',\n          method: 'POST',\n          data: data,\n          success: function success(res) {\n            if (res.data.status === 200) {\n              uni.showToast({\n                title: res.data.msg,\n                icon: \"none\" });\n\n              uni.reLaunch({\n                url: '../index/index' });\n\n            }\n            console.log(JSON.stringify(res));\n          },\n          fail: function fail() {},\n          complete: function complete() {} });\n\n        console.log(JSON.stringify(e));\n      } else {\n        uni.showToast({\n          title: graceChecker.error,\n          icon: \"none\" });\n\n      }\n    },\n    getVCode: function getVCode() {var _this = this;\n      var myreg = /^[1][1,2,3,4,5,7,8,9][0-9]{9}$/;\n      if (!myreg.test(this.phoneno)) {\n        uni.showToast({\n          title: '请填写正确的手机号码',\n          icon: \"none\" });\n\n        return false;\n      }\n      // 手机号码为 :  this.phoneno\n      // vcodeBtnName 可以阻止按钮被多次点击 多次发送 return 会终止函数继续运行\n      if (this.vcodeBtnName != '获取验证码' && this.vcodeBtnName != '重新发送') {\n        return;\n      }\n      this.vcodeBtnName = \"发送中...\";\n      // 与后端 api 交互，发送验证码\n      uni.request({\n        url: this.GLOBAL.serverSrc + 'register/sendSms/' + this.phoneno,\n        method: 'GET',\n        success: function success(res) {\n          console.log(JSON.stringify(res));\n          if (res.data.status === 200) {\n            uni.showToast({\n              title: res.data.msg,\n              icon: \"none\" });\n\n            _this.yzm = res.data.verificationCode;\n            // 倒计时\n            _this.countNum = 120;\n            _this.countDownTimer = setInterval(function () {\n              this.countDown();\n            }.bind(_this), 1000);\n          } else if (res.data.status === 400) {\n            uni.showToast({\n              title: res.data.msg,\n              icon: \"none\" });\n\n            _this.vcodeBtnName = \"获取验证码\";\n          }\n        },\n        fail: function fail() {\n          console.log(JSON.stringify('123213'));\n        },\n        complete: function complete() {} });\n\n    },\n    countDown: function countDown() {\n      if (this.countNum < 1) {\n        clearInterval(this.countDownTimer);\n        this.vcodeBtnName = \"重新发送\";\n        return;\n      }\n      this.countNum--;\n      this.vcodeBtnName = this.countNum + '秒重发';\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js */ \"./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus/dist/index.js\")[\"default\"]))\n\n//# sourceURL=uni-app:///pages/common/reg.vue?vue&type=script&lang=js&?163a");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=template&id=315e22ac&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=template&id=315e22ac& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"view\", { staticClass: \"grace-padding\" }, [\n    _vm._m(0),\n    _c(\n      \"view\",\n      {\n        staticClass: \"grace-form\",\n        staticStyle: { width: \"95%\", margin: \"0 auto\" }\n      },\n      [\n        _c(\n          \"form\",\n          { attrs: { eventid: \"9b50365a-3\" }, on: { submit: _vm.regNow } },\n          [\n            _c(\"view\", { staticClass: \"grace-items  item-border\" }, [\n              _c(\"view\", { staticClass: \"grace-label\" }, [\n                _c(\"view\", { staticClass: \"iconfont icon-shouji\" })\n              ]),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.phoneno,\n                    expression: \"phoneno\"\n                  }\n                ],\n                staticClass: \"input\",\n                attrs: {\n                  type: \"number\",\n                  name: \"phone\",\n                  placeholder: \"请输入手机号\",\n                  eventid: \"9b50365a-0\"\n                },\n                domProps: { value: _vm.phoneno },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.phoneno = $event.target.value\n                  }\n                }\n              })\n            ]),\n            _c(\"view\", { staticClass: \"grace-items  item-border\" }, [\n              _c(\"view\", { staticClass: \"grace-label\" }, [\n                _c(\"view\", { staticClass: \"iconfont icon-mima1\" })\n              ]),\n              _c(\"input\", {\n                directives: [\n                  {\n                    name: \"model\",\n                    rawName: \"v-model\",\n                    value: _vm.password,\n                    expression: \"password\"\n                  }\n                ],\n                staticClass: \"input\",\n                attrs: {\n                  type: \"text\",\n                  password: \"\",\n                  name: \"password\",\n                  placeholder: \"请输入密码\",\n                  eventid: \"9b50365a-1\"\n                },\n                domProps: { value: _vm.password },\n                on: {\n                  input: function($event) {\n                    if ($event.target.composing) {\n                      return\n                    }\n                    _vm.password = $event.target.value\n                  }\n                }\n              })\n            ]),\n            _c(\n              \"view\",\n              {\n                staticClass: \"grace-space-between item-border\",\n                staticStyle: { \"margin-top\": \"28rpx\", \"max-height\": \"95rpx\" }\n              },\n              [\n                _c(\n                  \"view\",\n                  { staticClass: \"grace-items\", staticStyle: { width: \"70%\" } },\n                  [\n                    _c(\"view\", { staticClass: \"grace-label\" }, [\n                      _c(\"view\", { staticClass: \"iconfont icon-yanzhengma\" })\n                    ]),\n                    _c(\"input\", {\n                      staticClass: \"input\",\n                      attrs: {\n                        type: \"number\",\n                        name: \"yzm\",\n                        placeholder: \"请输入验证码\"\n                      }\n                    })\n                  ]\n                ),\n                _c(\n                  \"view\",\n                  {\n                    staticStyle: {\n                      width: \"28%\",\n                      \"margin-left\": \"2%\",\n                      paading: \"0\"\n                    }\n                  },\n                  [\n                    _c(\n                      \"button\",\n                      {\n                        staticClass: \"login-sendmsg-btn\",\n                        attrs: { type: \"primary\", eventid: \"9b50365a-2\" },\n                        on: { tap: _vm.getVCode }\n                      },\n                      [_vm._v(_vm._s(_vm.vcodeBtnName))]\n                    )\n                  ],\n                  1\n                )\n              ]\n            ),\n            _c(\n              \"button\",\n              {\n                staticStyle: { background: \"#fc4243\", \"margin-top\": \"30px\" },\n                attrs: { \"form-type\": \"submit\", type: \"primary\" }\n              },\n              [\n                _vm._v(\"注册\"),\n                _c(\"text\", { staticClass: \"grace-iconfont icon-arrow-right\" })\n              ]\n            )\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _c(\"view\", { staticClass: \"ymkj-footer\" }, [\n      _c(\"view\", { staticClass: \"item-border\" }),\n      _vm._m(1),\n      _c(\n        \"view\",\n        {\n          staticClass: \"grace-login-three\",\n          staticStyle: { \"margin-top\": \"8px\" }\n        },\n        [\n          _c(\"view\", {\n            staticClass: \"grace-iconfont icon-weixin\",\n            staticStyle: { color: \"#00c40b\" },\n            attrs: { eventid: \"9b50365a-4\" },\n            on: { tap: _vm.loginWithWx }\n          }),\n          _c(\"view\", {\n            staticClass: \"grace-iconfont icon-qq\",\n            staticStyle: { color: \"#01a1e5\" }\n          }),\n          _c(\"view\", {\n            staticClass: \"grace-iconfont icon-weibo\",\n            staticStyle: { color: \"#fc4243\" }\n          })\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\n      \"view\",\n      {\n        staticClass: \"grace-center\",\n        staticStyle: { \"margin-top\": \"50px\", \"margin-bottom\": \"38px\" }\n      },\n      [\n        _c(\"image\", {\n          staticClass: \"ym-logo\",\n          attrs: { src: \"../../static/logo.png\" }\n        })\n      ]\n    )\n  },\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"view\", { staticClass: \"grace-title\" }, [\n      _c(\n        \"view\",\n        {\n          staticClass: \"grace-h5 grace-blod grace-center\",\n          staticStyle: { color: \"grey\" }\n        },\n        [_vm._v(\"使用其他账号登录\")]\n      )\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=template&id=315e22ac&");

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\main.js?{\"page\":\"pages%2Fcommon%2Freg\"}":
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/schoolJiangHu/main.js?{"page":"pages%2Fcommon%2Freg"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages.json\");\nvar _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ \"./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js\"));\nvar _reg = _interopRequireDefault(__webpack_require__(/*! ./pages/common/reg.vue */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue\"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory.default)(_reg.default));\n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/main.js?%7B%22page%22:%22pages%252Fcommon%252Freg%22%7D");

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue":
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reg.vue?vue&type=template&id=315e22ac& */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=template&id=315e22ac&\");\n/* harmony import */ var _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reg.vue?vue&type=script&lang=js& */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=script&lang=js&\");\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reg.vue?vue&type=style&index=0&lang=css& */ \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue");

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_project_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=uni-app:///pages/common/reg.vue?vue&type=script&lang=js&?b591");

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_E_project_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_E_project_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=style&index=0&lang=css&");

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\pages\\common\\reg.vue?vue&type=template&id=315e22ac&":
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=template&id=315e22ac& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./reg.vue?vue&type=template&id=315e22ac& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\\\Users\\\\Administrator\\\\Desktop\\\\schoolJiangHu\\\\pages\\\\common\\\\reg.vue?vue&type=template&id=315e22ac&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_project_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_project_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_reg_vue_vue_type_template_id_315e22ac___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=C:/Users/Administrator/Desktop/schoolJiangHu/pages/common/reg.vue?vue&type=template&id=315e22ac&");

/***/ })

},[["C:\\Users\\Administrator\\Desktop\\schoolJiangHu\\main.js?{\"page\":\"pages%2Fcommon%2Freg\"}","common/runtime","common/vendor"]]]);