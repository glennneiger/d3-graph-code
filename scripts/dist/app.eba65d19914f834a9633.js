/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor.bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AccountHeader.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AccountHeader.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-account-header img {\n  height: 2.5em;\n  width: auto;\n  border-radius: 9px;\n  margin: 0.375rem 0.75rem; }\n\n.my-navbar {\n  display: flex;\n  justify-content: flex-end; }\n\n.caret {\n  background-image: url(" + escape(__webpack_require__(/*! ../img/down-arrow.png */ "./scripts/src/img/down-arrow.png")) + ");\n  background-repeat: no-repeat;\n  background-position: right;\n  padding: 10px;\n  display: block; }\n\n@media (max-width: 575px) {\n  .nova-account-header {\n    position: absolute;\n    top: 10px;\n    right: 0; }\n  .nova-header {\n    margin-bottom: 20px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AuthPage.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AuthPage.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".auth-page-container {\n  height: 100%; }\n  .auth-page-container .auth-form-container {\n    width: 500px;\n    height: auto;\n    border-radius: 20px;\n    box-shadow: 0 4px 10px 0 rgba(38, 50, 77, 0.14), 0 0 1px 0 rgba(38, 50, 77, 0.3);\n    background-color: #ffffff;\n    margin-bottom: 100px; }\n    .auth-page-container .auth-form-container .auth-tab {\n      width: 250px;\n      height: 70px;\n      box-shadow: inset 1px -1px 0 0 #dfe2e5;\n      background-color: rgba(244, 245, 246, 0.5);\n      font-size: 18px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #939da7;\n      text-align: center;\n      padding-top: 5%;\n      cursor: pointer; }\n      .auth-page-container .auth-form-container .auth-tab:first-child {\n        border-top-left-radius: 20px; }\n      .auth-page-container .auth-form-container .auth-tab:last-child {\n        border-top-right-radius: 20px; }\n      .auth-page-container .auth-form-container .auth-tab.active {\n        box-shadow: none;\n        background-color: #ffffff;\n        color: #313e59; }\n  .auth-page-container .push {\n    display: flex;\n    justify-content: center;\n    margin-top: -8vh; }\n  .auth-page-container .anora-row-head {\n    height: 40vh; }\n\n.signup-form .form-group {\n  margin-bottom: 7px; }\n\n.login-form .form-group {\n  margin-bottom: 15px; }\n\n.signup-form button.sign-in-up-btn {\n  margin-top: 0; }\n\n.forgot-pass-form button.sign-in-up-btn {\n  margin-top: 0; }\n\n.login-form, .signup-form, .forgot-pass-form {\n  padding: 50px 100px;\n  /* The container */\n  /* Hide the browser's default checkbox */\n  /* Create a custom checkbox */\n  /* Create the checkmark/indicator (hidden when not checked) */\n  /* Show the checkmark when checked */\n  /* Style the checkmark/indicator */ }\n  .login-form .form-text-input, .signup-form .form-text-input, .forgot-pass-form .form-text-input {\n    height: 46px;\n    border-radius: 6px;\n    border: solid 1px #e9ebed;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal; }\n    .login-form .form-text-input::placeholder, .signup-form .form-text-input::placeholder, .forgot-pass-form .form-text-input::placeholder {\n      color: #939da7; }\n  .login-form .sign-in-up-btn, .signup-form .sign-in-up-btn, .forgot-pass-form .sign-in-up-btn {\n    border-radius: 6px;\n    box-shadow: 0 4px 10px 0 rgba(38, 50, 77, 0.14);\n    background-color: #9adf55;\n    width: 100%;\n    height: 46px;\n    border: none;\n    font-family: Roboto;\n    font-size: 16px;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff;\n    margin-top: 20px;\n    outline: none;\n    cursor: pointer; }\n    .login-form .sign-in-up-btn:active, .signup-form .sign-in-up-btn:active, .forgot-pass-form .sign-in-up-btn:active {\n      opacity: 0.7; }\n  .login-form div[class*=\"col-\"], .signup-form div[class*=\"col-\"], .forgot-pass-form div[class*=\"col-\"] {\n    padding: 0; }\n  .login-form .horiz-line, .signup-form .horiz-line, .forgot-pass-form .horiz-line {\n    width: 62px;\n    border-bottom: 1px solid #c9ced3;\n    margin-top: 5px;\n    opacity: 0.5; }\n  .login-form .sign-in-with, .signup-form .sign-in-with, .forgot-pass-form .sign-in-with {\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: 3px;\n    text-align: center;\n    color: #939da7; }\n  .login-form .forgot-password, .login-form form.forgot-pass-form .back-to-login, form.forgot-pass-form .login-form .back-to-login, .signup-form .forgot-password, .signup-form form.forgot-pass-form .back-to-login, form.forgot-pass-form .signup-form .back-to-login, .forgot-pass-form .forgot-password, form.forgot-pass-form .back-to-login {\n    font-size: 10px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7;\n    float: right;\n    margin-top: 5px;\n    cursor: pointer; }\n  .login-form .social-login-separator, .signup-form .social-login-separator, .forgot-pass-form .social-login-separator {\n    margin-top: 30px; }\n    .login-form .social-login-separator div[class*='col-']:last-child > .horiz-line, .signup-form .social-login-separator div[class*='col-']:last-child > .horiz-line, .forgot-pass-form .social-login-separator div[class*='col-']:last-child > .horiz-line {\n      float: right; }\n  .login-form .social-login-container, .signup-form .social-login-container, .forgot-pass-form .social-login-container {\n    margin-top: 20px; }\n    .login-form .social-login-container .fa-linkedin-in, .login-form .social-login-container .fa-google, .signup-form .social-login-container .fa-linkedin-in, .signup-form .social-login-container .fa-google, .forgot-pass-form .social-login-container .fa-linkedin-in, .forgot-pass-form .social-login-container .fa-google {\n      color: #ffffff;\n      font-size: 16px;\n      margin-right: 10px; }\n    .login-form .social-login-container .fa-linkedin-in, .signup-form .social-login-container .fa-linkedin-in, .forgot-pass-form .social-login-container .fa-linkedin-in {\n      font-size: 20px; }\n    .login-form .social-login-container .linkedin-btn, .login-form .social-login-container .google-btn, .signup-form .social-login-container .linkedin-btn, .signup-form .social-login-container .google-btn, .forgot-pass-form .social-login-container .linkedin-btn, .forgot-pass-form .social-login-container .google-btn {\n      height: 46px;\n      border-radius: 6px;\n      background-color: #0077b5;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n      width: calc(100% - 6px);\n      border: none;\n      outline: none;\n      cursor: pointer; }\n      .login-form .social-login-container .linkedin-btn:active, .login-form .social-login-container .google-btn:active, .signup-form .social-login-container .linkedin-btn:active, .signup-form .social-login-container .google-btn:active, .forgot-pass-form .social-login-container .linkedin-btn:active, .forgot-pass-form .social-login-container .google-btn:active {\n        opacity: 0.7; }\n    .login-form .social-login-container .google-btn, .signup-form .social-login-container .google-btn, .forgot-pass-form .social-login-container .google-btn {\n      background-color: #4285f4;\n      float: right; }\n  .login-form .form-checkbox, .signup-form .form-checkbox, .forgot-pass-form .form-checkbox {\n    height: 20px;\n    width: 20px;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    font-size: 10px;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    color: #939da7;\n    white-space: nowrap;\n    display: table-cell;\n    vertical-align: middle; }\n  .login-form .form-checkbox input, .signup-form .form-checkbox input, .forgot-pass-form .form-checkbox input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0; }\n  .login-form .checkmark, .signup-form .checkmark, .forgot-pass-form .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border-radius: 4px;\n    border: solid 1px #e9ebed; }\n  .login-form .checkmark:after, .signup-form .checkmark:after, .forgot-pass-form .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none; }\n  .login-form .form-checkbox input:checked ~ .checkmark:after, .signup-form .form-checkbox input:checked ~ .checkmark:after, .forgot-pass-form .form-checkbox input:checked ~ .checkmark:after {\n    display: block; }\n  .login-form .form-checkbox .checkmark:after, .signup-form .form-checkbox .checkmark:after, .forgot-pass-form .form-checkbox .checkmark:after {\n    left: 7px;\n    top: 4px;\n    width: 5px;\n    height: 10px;\n    border: solid #9adf55;\n    border-width: 0 3px 3px 0;\n    -webkit-transform: rotate(45deg);\n    -ms-transform: rotate(45deg);\n    transform: rotate(45deg); }\n\n.error {\n  border-color: #dc3545 !important; }\n\n.err-msg {\n  font-size: 12px;\n  color: #dc3545; }\n\nform.forgot-pass-form {\n  padding-top: 20%;\n  padding-bottom: 20%;\n  position: relative; }\n  form.forgot-pass-form .back-to-login {\n    position: absolute;\n    top: 25px;\n    left: 30px;\n    font-size: 15px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/App.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/App.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato|Raleway|Roboto:300,400,700);", ""]);
exports.push([module.i, "@import url(https://use.fontawesome.com/releases/v5.0.13/css/all.css);", ""]);

// module
exports.push([module.i, ".App {\n  padding: 0;\n  position: relative; }\n\n.App *:not(i) {\n  font-family: Roboto, sans-serif; }\n\nhtml {\n  height: 100vh; }\n\nbody, #main, .App {\n  min-height: 100vh; }\n\nh5, a {\n  color: #01abdd; }\n\na:hover {\n  color: #01abdd; }\n\nnav .btn {\n  font-size: 16px;\n  color: #01abdd; }\n  nav .btn :hover {\n    text-transform: none; }\n  nav .btn .active {\n    border: solid 1px #01abdd; }\n\n.btn.btn-primary {\n  background: none;\n  color: #01abdd; }\n\n.navbar-text {\n  margin: 0;\n  padding: 0; }\n\n#navbar-bottom {\n  height: 50px;\n  position: absolute;\n  bottom: 0;\n  background: #fff;\n  width: 100vw;\n  max-width: 100%;\n  padding: 0px;\n  margin: 0; }\n\n.nova_description_table td {\n  text-align: right; }\n\n.nova_description_table th {\n  min-width: 150px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Document/Document.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Document/Document.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-document-container {\n  position: relative;\n  cursor: pointer;\n  display: block;\n  width: 100%; }\n\n.nova-document-not-found-blur {\n  top: 0;\n  position: absolute;\n  background: rgba(255, 255, 255, 0.8);\n  right: 0;\n  left: 0;\n  bottom: 0; }\n\n.nova-document-not-found-blur-text {\n  font-size: 1.5em;\n  padding: 100px;\n  padding-top: 150px;\n  text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Five10KPage/Five10KPage.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Five10KPage/Five10KPage.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PMAPage/PMAPage.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PMAPage/PMAPage.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/ProductCodePage/ProductCodePage.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/ProductCodePage/ProductCodePage.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inbox {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n#recall-vis-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-content: flex-start; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PropertyGrid/_PropertyGrid.scss":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PropertyGrid/_PropertyGrid.scss ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-property-grid h3 {\n  text-align: center;\n  font-weight: bold; }\n\n.nova-property-grid > div {\n  text-align: center; }\n\n.nova-property-grid dt {\n  font-size: 1.5em;\n  font-weight: normal; }\n\n.nova-property-grid dd {\n  color: #01abdd;\n  font-size: 2em;\n  font-weight: bold; }\n\n.nova-property-grid hr {\n  border-top: 3px solid rgba(0, 0, 0, 0.3);\n  width: 50%;\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/RegulationNumberPage/RegnumPage.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/RegulationNumberPage/RegnumPage.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#proCodePie {\n  display: flex;\n  flex-direction: column; }\n\n#doubleGraphRow {\n  display: flex;\n  flex-direction: row; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box-info {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start; }\n  .search-box-info .search-box-info-item {\n    margin-right: 30px; }\n    .search-box-info .search-box-info-item-key {\n      font-family: Roboto;\n      font-size: 10px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #939da7; }\n    .search-box-info .search-box-info-item-value {\n      font-family: Roboto;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #313e59; }\n    .search-box-info .search-box-info-item .grey-text {\n      opacity: 0.2;\n      font-family: Roboto;\n      font-size: 14px;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #313e59; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova_description_table {\n  max-width: 500px; }\n  .nova_description_table td, .nova_description_table th {\n    border: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Tabs/Tabs.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Tabs/Tabs.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-tabs {\n  display: flex;\n  width: 100%;\n  margin-top: 16px;\n  border-bottom: 1px solid #ccc; }\n  .nav-tabs .nav-item {\n    cursor: pointer; }\n\n.tab-content {\n  padding: 20px;\n  border-left: 1px solid #dee2e6;\n  min-height: 80vh; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/TextView/TextView.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/TextView/TextView.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova_description_table td, .nova_description_table th {\n  border: 0; }\n\n.nova-text-view {\n  line-height: 200%; }\n\n.nova-text-view-inline dt, .nova-text-view-inline dd {\n  display: inline; }\n\n.nova-text-view-inline dt::after {\n  content: \": \"; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Footer/Footer.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Footer/Footer.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#footer {\n  padding: 30px 0 20px;\n  margin-top: 40px; }\n  #footer .footer-copyright {\n    color: #939da7; }\n    #footer .footer-copyright img {\n      max-width: 18px;\n      float: left;\n      margin-right: 20px; }\n  #footer .footer-links a {\n    color: #939da7; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Header/Header.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Header/Header.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-header {\n  align-items: center;\n  color: white;\n  background-color: #313e59;\n  padding: 5px 0px; }\n\n@media (min-width: 576px) {\n  .nova-header-logo {\n    width: 90%; } }\n\n@media (max-width: 575px) {\n  .nova-header-logo {\n    width: 40%; } }\n\n.nova-header-logo-container {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  padding-left: 1rem; }\n  @media (max-width: 575px) {\n    .nova-header-logo-container {\n      padding-left: 1.5rem;\n      padding-right: 1.5rem; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraBody.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraBody.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".anora-body {\n  background-color: #f4f5f6;\n  padding: 50px;\n  min-height: 100%;\n  height: 52vh; }\n  .anora-body p {\n    display: block;\n    width: 509px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #939da7; }\n\n.curated-button {\n  margin: 15px;\n  width: 256px;\n  height: 43px;\n  border-radius: 24.5px;\n  background-color: #e9ebed;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n  .curated-button .text {\n    width: 196px;\n    height: 16px;\n    font-family: Roboto;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraHeader.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraHeader.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".anora-nav {\n  position: absolute;\n  z-index: 4;\n  width: 95%;\n  margin: 30px; }\n  .anora-nav button.anora-nav-button {\n    border: 0px;\n    padding: 5px 10px;\n    font-size: 0.8rem;\n    font-weight: bold;\n    color: #69748b;\n    width: 100px;\n    height: 43px;\n    border-radius: 24.5px;\n    box-shadow: 0 3px 5px 0 rgba(38, 50, 77, 0.3);\n    background-color: #939da7;\n    color: #ffffff;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    font-size: 16px; }\n  .anora-nav button.anora-nav-button:hover {\n    background-color: #838c96; }\n\n.row {\n  margin-left: 0px;\n  margin-right: 0px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraRowHead.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraRowHead.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".anora-row-head {\n  margin: 0;\n  height: 40vh;\n  background-image: linear-gradient(113deg, #4a5a77, #313e59);\n  padding-bottom: 0px !important;\n  padding-left: 0px !important;\n  padding-right: 0px !important;\n  z-index: 3; }\n  .anora-row-head img {\n    display: block; }\n\n.my-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.push {\n  display: flex;\n  justify-content: center;\n  margin-top: -4vh; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/Landing.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/Landing.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".anora-page-landing {\n  padding: 0;\n  height: 100%;\n  overflow-y: auto;\n  margin: auto;\n  font-family: Arial; }\n  .anora-page-landing .container {\n    max-width: 750px; }\n  .anora-page-landing h1, .anora-page-landing h2, .anora-page-landing h3 {\n    font-family: Arial; }\n  .anora-page-landing .anora-body-text {\n    font-family: Arial; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Loading/Loading.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Loading/Loading.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sk-fading-circle-container {\n  position: fixed;\n  top: 50%;\n  left: 50%; }\n\n.sk-fading-circle {\n  margin: 100px auto;\n  width: 40px;\n  height: 40px;\n  position: relative; }\n\n.sk-fading-circle .sk-circle {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-fading-circle .sk-circle:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #333;\n  border-radius: 100%;\n  -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleFadeDelay 1.2s infinite ease-in-out both; }\n\n.sk-fading-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  -ms-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-fading-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  -ms-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-fading-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-fading-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  -ms-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-fading-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  -ms-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-fading-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-fading-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  -ms-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-fading-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  -ms-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-fading-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-fading-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  -ms-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-fading-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  -ms-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-fading-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-fading-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-fading-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-fading-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-fading-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-fading-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-fading-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-fading-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-fading-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-fading-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-fading-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n\n@keyframes sk-circleFadeDelay {\n  0%, 39%, 100% {\n    opacity: 0; }\n  40% {\n    opacity: 1; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/billing/billing.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/billing/billing.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile-main .top-tabs .billing_contnet_main h2 {\n  border-bottom: 1px solid #ced4da;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 500;\n  color: #313e59;\n  padding-bottom: 10px; }\n\n#profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid {\n  padding: 20px 0px;\n  border-bottom: 1px solid #ced4da;\n  position: relative; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row {\n    margin-left: -15px;\n    margin-right: -15px; }\n    #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_left_side_col {\n      max-width: 13%;\n      flex: 0 0 13%; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_left_side_col h4 {\n        font-family: Roboto;\n        font-size: 14px;\n        color: #939da7; }\n    #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col {\n      max-width: 87%;\n      flex: 0 0 87%; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table {\n        margin-bottom: 0; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tbody > tr > td, #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tbody > tr > th {\n          padding: 15px 8px;\n          border-top: none;\n          border-bottom: 1px solid #ced4da; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tfoot > tr > td, #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tfoot > tr > th {\n          padding: 15px 8px;\n          border-top: none;\n          border-bottom: 1px solid #ced4da; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > thead > tr > td, #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > thead > tr > th {\n          padding: 15px 8px;\n          border-top: none;\n          border-bottom: 1px solid #ced4da; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tbody > tr > td {\n          font-family: Roboto;\n          font-size: 14px;\n          color: #313e59; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table .table > tbody > tr:last-child > td {\n          border-bottom: none; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .history_table tbody tr .view_pdf_link {\n        font-family: Roboto;\n        font-size: 14px;\n        color: #5856d6; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col ul.visa_uline li {\n        color: #5e6d7c;\n        font-family: Roboto;\n        font-size: 14px;\n        font-weight: 500;\n        padding-right: 50px; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col ul.visa_uline li img {\n          max-width: 28px;\n          margin-right: 10px; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .biling_change_link {\n        font-family: Roboto;\n        font-size: 14px;\n        color: #5856d6;\n        padding-right: 8px; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .trail_headline p {\n        font-family: Roboto;\n        font-size: 14px;\n        font-weight: 500;\n        margin-bottom: 0;\n        color: #5e6d7c; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .trail_expire_date span {\n        font-family: Roboto;\n        font-size: 14px;\n        color: #939da7;\n        padding-right: 8px; }\n      #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .plan_description {\n        border-radius: 8px;\n        background-color: #e9ebed;\n        margin-top: 10px;\n        padding: 10px; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .plan_description .plan_p p {\n          margin: 0;\n          color: #5e6d7c;\n          font-size: 14px; }\n        #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .plan_description ul.plan_uline li {\n          color: #5e6d7c;\n          padding-left: 0; }\n          #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col .plan_content .plan_description ul.plan_uline li a {\n            border-radius: 6px;\n            box-shadow: 0 2px 5px 0 rgba(38, 50, 77, 0.14);\n            background-color: #9adf55;\n            height: 38px;\n            display: inline-block;\n            line-height: 38px;\n            padding: 0px 15px;\n            color: #fff;\n            font-family: Roboto;\n            font-size: 16px;\n            font-weight: bold; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .biling_right_side_col .history_table .table thead tr th {\n    padding-top: 0 !important;\n    opacity: 0.65;\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: 500;\n    color: #6f788b;\n    border-bottom: none; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid:last-child {\n    padding-bottom: 0; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/change-password/changes-password.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/change-password/changes-password.scss ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile-main .top-tabs .change_password_div h2 {\n  box-shadow: inset 0 -1px 0 0 #ced4da;\n  font-family: Roboto;\n  font-size: 24px;\n  font-weight: 500;\n  color: #313e59;\n  padding-bottom: 10px; }\n\n#profile-main .top-tabs .change_password_div form.passrd_form.row {\n  padding-top: 30px;\n  margin-left: -15px;\n  margin-right: -15px; }\n\n#profile-main .top-tabs .change_password_div form.passrd_form input.form-control {\n  height: 46px;\n  border-radius: 6px;\n  border: solid 1px #e9ebed;\n  background-color: #ffffff;\n  color: #939da7;\n  font-family: Roboto;\n  font-size: 14px;\n  box-shadow: none; }\n  #profile-main .top-tabs .change_password_div form.passrd_form input.form-control:focus {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n#profile-main .top-tabs .change_password_div form.passrd_form .form-group {\n  margin-bottom: 10px; }\n\n#profile-main .top-tabs .change_password_div form.passrd_form .update_pass_btn {\n  height: 46px;\n  border-radius: 6px;\n  box-shadow: 0 4px 10px 0 rgba(38, 50, 77, 0.14);\n  background-color: #9adf55;\n  border: none;\n  color: #fff;\n  width: 100%;\n  font-family: Roboto;\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 12px; }\n  #profile-main .top-tabs .change_password_div form.passrd_form .update_pass_btn:focus {\n    outline: none; }\n\n#profile-main .top-tabs .change_password_div form.passrd_form .forgot_pass a {\n  font-family: Roboto;\n  font-size: 14px;\n  color: #939da7;\n  margin-top: 20px;\n  display: inline-block; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/mySaves/mySaves.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/mySaves/mySaves.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\nbody {\n  font-family: 'Roboto', sans-serif;\n  background: #f4f5f6;\n  font-size: 14px; }\n\nimg {\n  width: 100%; }\n\nh1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\n  margin: 0; }\n\nh4, h5 {\n  font-size: 14px; }\n\nh6 {\n  font-size: 12px; }\n\na:hover, a:focus {\n  text-decoration: none; }\n\nul, li {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n\nul.list-inline li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px; }\n\n.container-fluid.App {\n  padding-right: 0;\n  padding-left: 0; }\n\n.pull-right {\n  float: right !important; }\n\n@media (min-width: 1200px) {\n  .container {\n    padding: 0; } }\n\n/*==========================================================\r\n        #profile-main\r\n==========================================================*/\n#profile-main {\n  padding: 47px 0; }\n  #profile-main .profile-main-avatar {\n    box-shadow: 0px 1px 3px 0px rgba(38, 50, 77, 0.3);\n    padding: 56px 0 0;\n    text-align: center;\n    border-radius: 6px;\n    background: #fff;\n    position: relative;\n    z-index: 0; }\n    #profile-main .profile-main-avatar .profile-avatar-image {\n      max-width: 136px;\n      position: relative;\n      background-clip: padding-box;\n      /* !importanté */\n      border: solid 2px transparent;\n      margin: 0 auto; }\n      #profile-main .profile-main-avatar .profile-avatar-image img {\n        max-width: 132px;\n        border-radius: 50%; }\n      #profile-main .profile-main-avatar .profile-avatar-image:before {\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: -1;\n        margin: -2px;\n        border-radius: 50%;\n        background: white; }\n    #profile-main .profile-main-avatar .profile-avatar-content {\n      padding: 0px 10px; }\n      #profile-main .profile-main-avatar .profile-avatar-content h4 {\n        color: #313e59;\n        margin-top: 26px;\n        font-weight: 500; }\n      #profile-main .profile-main-avatar .profile-avatar-content h5 {\n        color: #939da7;\n        font-size: 15px;\n        margin: 12px 0 19px;\n        word-break: break-all; }\n      #profile-main .profile-main-avatar .profile-avatar-content a {\n        color: #5856d6;\n        font-size: 14px; }\n    #profile-main .profile-main-avatar .profile-main-list {\n      text-align: left;\n      margin-top: 38px;\n      padding: 25px 0 10px;\n      box-shadow: inset 0 1px 0 0 #dfe2e5; }\n      #profile-main .profile-main-avatar .profile-main-list ul {\n        padding: 0;\n        list-style-type: none; }\n        #profile-main .profile-main-avatar .profile-main-list ul li a {\n          color: #5e6d7c;\n          font-size: 14px;\n          border-left: 4px solid transparent;\n          padding: 7.5px 0;\n          padding-left: 30px;\n          display: block; }\n        #profile-main .profile-main-avatar .profile-main-list ul li.active a {\n          border-left: 4px solid #5856d6; }\n        #profile-main .profile-main-avatar .profile-main-list ul li i {\n          color: #5856d6;\n          font-size: 14px;\n          width: 20px;\n          text-align: center; }\n      #profile-main .profile-main-avatar .profile-main-list .sideMenu a {\n        display: block;\n        color: #5e6d7c;\n        font-size: 14px;\n        border-left: 4px solid transparent;\n        padding: 7.5px 0;\n        padding-left: 30px; }\n        #profile-main .profile-main-avatar .profile-main-list .sideMenu a i {\n          color: #5856d6;\n          font-size: 14px;\n          width: 20px;\n          text-align: center; }\n        #profile-main .profile-main-avatar .profile-main-list .sideMenu a.active {\n          border-left: 4px solid #5856d6; }\n  #profile-main .comment-tabs .nav-tabs > a {\n    color: #313e59;\n    opacity: 0.65;\n    font-size: 14px;\n    padding: 12px 20px;\n    display: inline-block;\n    outline: none;\n    border-bottom: 4px solid transparent;\n    border: none; }\n    #profile-main .comment-tabs .nav-tabs > a.active {\n      border: none;\n      border-bottom: 4px solid #5bd6e5 !important;\n      opacity: 1 !important;\n      background: transparent !important; }\n  #profile-main .comment-tabs .tab-content {\n    overflow: hidden;\n    padding: 30px 0px 0px;\n    border: none; }\n    #profile-main .comment-tabs .tab-content .tab-pane .main-tab .sorting-bar {\n      overflow: hidden;\n      margin-bottom: 30px; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .sorting-bar h5 {\n        opacity: 0.65;\n        float: left;\n        margin: 2px; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .sorting-bar .bars .order .form-group {\n        margin-bottom: 15px;\n        float: right;\n        padding-right: 8px; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .sorting-bar .bars .order .form-group select {\n          background: transparent;\n          border: none;\n          color: #313e59;\n          font-weight: 500;\n          outline: none;\n          padding: 0;\n          height: auto;\n          font-size: 14px; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .sorting-bar .bars .order .form-group select:focus {\n            outline: none;\n            box-shadow: none; }\n    #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box {\n      box-shadow: 0px 1px 3px 0px rgba(38, 50, 77, 0.3);\n      margin-bottom: 42px;\n      border-radius: 6px;\n      background: #fff;\n      position: relative; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top {\n        padding: 20px;\n        padding-bottom: 6px; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head span.label {\n          padding: 5px;\n          position: absolute;\n          top: 20px;\n          right: 18px; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head h4 {\n          margin-bottom: 12px;\n          color: #313e59;\n          position: relative;\n          float: left;\n          line-height: 23px;\n          width: 90%; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head a {\n          float: right;\n          color: #9098aa;\n          margin-top: 3px; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head .label-warning {\n          background: #ff9500; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head .label-info {\n          background: #007aff; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head .label-primary {\n          background: #5856d6; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .main-tab-inner-box-top-head .label-danger {\n          background: #ff58b8; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .tooltip1 {\n          position: relative;\n          display: inline-block;\n          cursor: pointer; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .tooltip1 p {\n            color: #6f788b !important;\n            display: inline-block !important; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .tooltip1 .tooltiptext {\n            visibility: hidden;\n            min-width: 305px;\n            background-color: #6f788b;\n            color: #dfe2e5;\n            border-radius: 3px;\n            padding: 15px;\n            position: absolute;\n            z-index: 1;\n            left: 125%;\n            top: -47px;\n            margin-left: 0;\n            opacity: 0;\n            transition: opacity 0.3s;\n            font-size: 12px;\n            line-height: 19px;\n            box-shadow: 0px 1px 3px 0px rgba(38, 50, 77, 0.3); }\n            #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .tooltip1 .tooltiptext::after {\n              content: \"\";\n              position: absolute;\n              right: 100%;\n              top: 44%;\n              margin-bottom: -5px;\n              border-width: 8px;\n              border-style: solid;\n              border-color: transparent #6f788b transparent transparent; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top .tooltip1:hover .tooltiptext {\n            visibility: visible;\n            opacity: 1; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-footer {\n        overflow: hidden;\n        padding: 12px 15px;\n        border-top: 1px solid #dfe2e5; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-footer h6 {\n          color: #9da6af;\n          float: left;\n          margin-top: 5px; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-footer .main-tab-inner-box-footer-icon ul {\n          float: right;\n          margin: 0; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-footer .main-tab-inner-box-footer-icon ul a {\n            color: #9da6af; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-footer .main-tab-inner-box-footer-icon ul i {\n            vertical-align: middle; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle {\n        padding: 15px 20px 25px;\n        border-top: 1px solid #dfe2e5; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle p {\n          line-height: 21px;\n          margin-left: 0px;\n          color: #6f788b;\n          display: block; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle ul {\n          padding-left: 0.5em; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li {\n          padding-left: 10px;\n          border: 1px dotted #6f788b;\n          border-width: 0 0 2px 2px; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li.contain-list {\n            border-bottom: 15px; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li p {\n            margin: 0;\n            background: white;\n            position: relative;\n            top: 12px;\n            padding-left: 5px; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li ul {\n            border-top: 2px dotted #6f788b;\n            margin-left: -1em;\n            padding-left: 1.5em; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li a {\n            color: #6f788b; }\n            #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle li a:hover {\n              text-decoration: underline; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-middle ul li:last-child ul {\n          border-left: 2px solid white;\n          margin-left: -12px; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .list-generator {\n        padding-left: 0; }\n        #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .list-generator li {\n          border: none;\n          padding-left: 5px;\n          margin-right: 35px;\n          display: inline-block; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .list-generator li h5 {\n            color: #313e59;\n            font-size: 14px; }\n          #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .list-generator li h6 {\n            color: #939da7;\n            font-size: 10px;\n            font-weight: 500;\n            margin: 10px 0 5px; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box.yellow-box {\n        border-top: 5px solid #ff9500; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box.blue-box {\n        border-top: 5px solid #007aff; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box.voilet-box {\n        border-top: 5px solid #5856d6; }\n      #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box.pink-box {\n        border-top: 5px solid #ff58b8; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Responsive.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Responsive.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 767px) {\n  .top-bar .top-search {\n    margin: 10px 0; }\n  .top-bar .tab-content {\n    margin-top: 30px; }\n  #profile-main {\n    padding-bottom: 0; }\n    #profile-main .comment-tabs .nav-tabs {\n      text-align: center; }\n  #footer {\n    margin-top: 0px; }\n  #profile-main .comment-tabs .tab-content .tab-pane .main-tab .main-tab-inner-boxes .main-tab-inner-box .main-tab-inner-box-top-head h4 {\n    font-size: 14px;\n    width: 80%; }\n  .list-generator li {\n    margin-right: 20px; }\n  .top-my-account .btn {\n    width: auto;\n    height: auto; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_left_side_col {\n    max-width: 100% !important;\n    flex: 0 0 100% !important; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col {\n    max-width: 100% !important;\n    flex: 0 0 100% !important; }\n  .top-tabs {\n    padding-top: 30px; }\n  .plan_uline {\n    margin-top: 12px; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_left_side_col h4 {\n    margin-bottom: 15px !important; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col ul.visa_uline li img {\n    max-width: 20px !important;\n    margin-right: 5px !important; }\n  #profile-main .top-tabs .billing_contnet_main .billing_content .billing_grid .row .biling_right_side_col ul.visa_uline li {\n    font-size: 12px !important;\n    padding-right: 10px !important; } }\n\n@media screen and (max-width: 520px) {\n  .nova-header .nova-header-logo-container {\n    justify-content: center;\n    margin-bottom: 15px; }\n  .nova-header-logo {\n    width: auto;\n    max-width: 180px; }\n  .navbar-text {\n    float: none !important; }\n  .btn {\n    width: auto;\n    height: auto;\n    margin-top: 15px !important; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchBox.scss":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchBox.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box-1 {\n  border-radius: 22.5px;\n  background-color: white; }\n  .search-box-1 .btn {\n    border-radius: 22.5px;\n    background-color: #ffffff;\n    height: 5vh; }\n  .search-box-1 .dropdown-item {\n    cursor: pointer; }\n  .search-box-1 .input-group-append {\n    border: 0; }\n\n.nova-input-search-1 {\n  height: 5vh;\n  background-color: white;\n  width: 870px;\n  padding-right: 35px;\n  border: 0;\n  border-radius: 0 22.5px; }\n\n.search-box {\n  margin-top: 0vh;\n  width: 770px;\n  box-shadow: 0 4px 10px 0 rgba(38, 50, 77, 0.14), 0 0 1px 0 rgba(38, 50, 77, 0.3);\n  border-radius: 35px; }\n  .search-box .btn {\n    width: 100px;\n    height: 70px;\n    border-radius: 35px;\n    background-color: #9adf55; }\n  .search-box .dropdown-item {\n    cursor: pointer; }\n\ninput.nova-input-search {\n  border-radius: 35px;\n  width: 770px;\n  padding-left: 30px;\n  border: 0;\n  overflow: hidden !important; }\n  input.nova-input-search:focus {\n    outline-width: 0; }\n\n@media only screen and (max-width: 600px) {\n  .search-box {\n    width: 175px; }\n  .btn {\n    width: 25px;\n    height: 17.5px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchFilters.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchFilters.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-list-group-sub-item {\n  width: 100%; }\n  .nova-list-group-sub-item h6 {\n    border-bottom: 1px solid #dbdbdb;\n    opacity: 0.12;\n    padding-top: 8px; }\n\n.nova-filters-left-right {\n  padding: 4px;\n  min-height: 50px; }\n\n.nova-filters-left-right-clearfix {\n  clear: both; }\n\n.nova-filters-label {\n  float: left;\n  padding-top: 6px;\n  padding-left: 15px;\n  opacity: 0.45;\n  font-family: Helvetica;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff; }\n\n.nova-filters-input-wrapper {\n  float: right;\n  display: flex;\n  align-items: center; }\n\n.nova-filters-input {\n  min-width: 150px;\n  margin-right: 6px; }\n\n.nova-slider-handle-value {\n  position: relative; }\n\n.all-filters {\n  font-family: Roboto;\n  font-size: 12px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #b9c1d1;\n  padding-left: 15px;\n  padding-top: 31px; }\n\n.filter-head {\n  display: flex;\n  margin-bottom: 15px; }\n  .filter-head div {\n    width: 50%; }\n    .filter-head div .toggle-filter {\n      float: right;\n      opacity: 0.45;\n      font-size: 14px;\n      color: #ffffff;\n      margin-right: 10px;\n      margin-top: 5px;\n      cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultBox.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultBox.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".result_box {\n  min-width: 670px;\n  max-width: 870px;\n  width: 100%;\n  background-color: #ffffff; }\n  .result_box-loadMore {\n    height: 40px;\n    box-shadow: inset 0 1px 0 0 #dfe2e5;\n    background-color: rgba(244, 245, 246, 0.5);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer; }\n    .result_box-loadMore-icon {\n      -webkit-transform: rotate(90deg);\n      -moz-transform: rotate(90deg);\n      -ms-transform: rotate(90deg);\n      -o-transform: rotate(90deg); }\n\n.result_box_header {\n  width: 100%;\n  display: flex; }\n  .result_box_header_container {\n    display: flex;\n    flex-direction: row;\n    margin: 20px 30px;\n    font-family: Roboto;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal; }\n    .result_box_header_container_info {\n      margin-left: 25px;\n      letter-spacing: normal;\n      display: flex;\n      flex-direction: column;\n      justify-content: center; }\n      .result_box_header_container_info_name {\n        font-size: 18px;\n        font-weight: 500;\n        color: #313e59; }\n      .result_box_header_container_info_showResults {\n        font-size: 12px;\n        font-weight: bold;\n        color: #8bcc31; }\n    .result_box_header_container_counter {\n      width: 60px;\n      height: 60px;\n      background-color: #ff9500;\n      border-radius: 30px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-size: 24px;\n      font-weight: bold;\n      letter-spacing: -1px;\n      text-align: center;\n      color: #ffffff; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultFields.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultFields.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-result-fields-container {\n  margin-left: 28px;\n  margin-top: 18px;\n  margin-bottom: 32px; }\n  .search-result-fields-container div {\n    display: flex;\n    width: calc(100% + 20px); }\n    .search-result-fields-container div > .dotted-border {\n      width: 10px;\n      height: 32px;\n      border-left: dashed 1px #5bd6e5;\n      border-bottom: dashed 1px #5bd6e5; }\n      .search-result-fields-container div > .dotted-border.indented {\n        margin-left: 30px; }\n        .search-result-fields-container div > .dotted-border.indented.five-ten {\n          margin-top: 18px; }\n      .search-result-fields-container div > .dotted-border.pma-dotted {\n        height: 40px;\n        position: relative; }\n    .search-result-fields-container div > .field-label {\n      display: flex;\n      font-family: Roboto;\n      font-size: 16px;\n      font-weight: 500;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #ffffff;\n      position: relative;\n      cursor: pointer; }\n      .search-result-fields-container div > .field-label.selected {\n        border-radius: 6px;\n        background-color: #ffffff;\n        height: 36px;\n        color: #313e59;\n        padding: 9px;\n        position: relative;\n        right: 15px; }\n      .search-result-fields-container div > .field-label.prod-code {\n        left: 5px;\n        top: 21px; }\n        .search-result-fields-container div > .field-label.prod-code.selected {\n          margin-bottom: 5px; }\n      .search-result-fields-container div > .field-label.five-ten {\n        top: 36px;\n        left: 5px; }\n        .search-result-fields-container div > .field-label.five-ten.selected {\n          margin-bottom: 20px; }\n      .search-result-fields-container div > .field-label.pma-app {\n        top: 31px;\n        left: 5px; }\n      .search-result-fields-container div > .field-label > .result-count {\n        height: 19px;\n        border-radius: 5px;\n        font-family: Roboto;\n        font-size: 12px;\n        font-weight: bold;\n        font-style: normal;\n        font-stretch: normal;\n        line-height: normal;\n        letter-spacing: normal;\n        text-align: center;\n        color: #ffffff;\n        padding: 3px;\n        position: absolute;\n        right: 40px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPage.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPage.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nova-result-container {\n  display: flex;\n  justify-content: space-around;\n  width: 85%;\n  margin: auto; }\n  .nova-result-container div[class*='col-'] {\n    padding: 0; }\n  .nova-result-container .search-results {\n    width: 100%; }\n\n.nova-search-sidebar-container {\n  background-color: #313e59;\n  border-top-left-radius: 9px;\n  border-bottom-left-radius: 9px; }\n\n.nova-logged-out-blur {\n  height: 100%;\n  position: absolute;\n  background: url(" + escape(__webpack_require__(/*! ../img/blur.png */ "./scripts/src/img/blur.png")) + ");\n  top: 0;\n  left: -30px;\n  right: -30px;\n  cursor: pointer; }\n  .nova-logged-out-blur .nova-logged-out-blur-text {\n    text-align: center;\n    font-size: 1.5em; }\n    @media (min-width: 576px) {\n      .nova-logged-out-blur .nova-logged-out-blur-text {\n        position: fixed;\n        top: 50%;\n        width: 60%; } }\n    @media (max-width: 575px) {\n      .nova-logged-out-blur .nova-logged-out-blur-text {\n        position: absolute;\n        top: 250px;\n        left: 10px;\n        right: 10px; } }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPageTab.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPageTab.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-fluid {\n  width: auto;\n  padding: 0;\n  display: inline-block; }\n\n.img-wrapper {\n  vertical-align: middle;\n  text-align: center; }\n\n.one-result-rn {\n  padding-bottom: 1rem;\n  box-shadow: inset 0 1px 0 0 #dfe2e5;\n  width: 100%;\n  padding: 25px 30px; }\n  .one-result-rn:first-of-type {\n    box-shadow: inset 0 1px 0 0 #dfe2e5; }\n  .one-result-rn-header {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #313e59; }\n  .one-result-rn-description {\n    font-family: Roboto;\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7;\n    margin-top: 10px; }\n  .one-result-rn a:hover {\n    text-decoration: none; }\n\n.one-result-pc {\n  padding-bottom: 1rem;\n  box-shadow: inset 0 1px 0 0 #dfe2e5;\n  width: 100%;\n  padding: 25px 30px; }\n  .one-result-pc:first-of-type {\n    box-shadow: inset 0 1px 0 0 #dfe2e5; }\n  .one-result-pc-number {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7; }\n  .one-result-pc-name {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #313e59; }\n  .one-result-pc-arrow {\n    margin: 0 15px;\n    color: #5bd6e5;\n    font-weight: 600; }\n  .one-result-pc-header {\n    margin-bottom: 20px; }\n  .one-result-pc-description {\n    font-family: Roboto;\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7;\n    margin-top: 10px; }\n  .one-result-pc a:hover {\n    text-decoration: none; }\n\n.one-result-510k {\n  padding-bottom: 1rem;\n  box-shadow: inset 0 1px 0 0 #dfe2e5;\n  width: 100%;\n  padding: 25px 30px; }\n  .one-result-510k:first-of-type {\n    box-shadow: inset 0 1px 0 0 #dfe2e5; }\n  .one-result-510k-text {\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7; }\n  .one-result-510k-arrow {\n    margin: 0 15px;\n    color: #5bd6e5;\n    font-weight: 600; }\n  .one-result-510k-header {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .one-result-510k-header-companyLogo {\n      margin-right: -10px;\n      width: 100px;\n      height: 50px;\n      object-fit: contain; }\n  .one-result-510k-description {\n    font-family: Roboto;\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7;\n    margin-top: 10px; }\n  .one-result-510k-subHeader {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #313e59; }\n  .one-result-510k a:hover {\n    text-decoration: none; }\n\n.one-result-pma {\n  padding-bottom: 1rem;\n  box-shadow: inset 0 1px 0 0 #dfe2e5;\n  width: 100%;\n  padding: 25px 30px; }\n  .one-result-pma:first-of-type {\n    box-shadow: inset 0 1px 0 0 #dfe2e5; }\n  .one-result-pma-text {\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7; }\n  .one-result-pma-arrow {\n    margin: 0 15px;\n    color: #5bd6e5;\n    font-weight: 600; }\n  .one-result-pma-header {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; }\n    .one-result-pma-header-companyLogo {\n      margin-right: -10px;\n      width: 100px;\n      height: 50px;\n      object-fit: contain; }\n  .one-result-pma-description {\n    font-family: Roboto;\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #939da7;\n    margin-top: 10px; }\n  .one-result-pma-subHeader {\n    font-family: Roboto;\n    font-size: 18px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #313e59;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .one-result-pma a:hover {\n    text-decoration: none; }\n\n.save-update-query-btn {\n  width: 138px;\n  height: 36px;\n  border-radius: 4px;\n  background-color: #5bd6e5;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #ffffff;\n  float: right; }\n\n.search-result-info-container {\n  display: flex;\n  width: 85%;\n  margin: 40px auto 35px auto; }\n  .search-result-info-container > .search-result-for {\n    font-family: Roboto;\n    font-size: 24px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #313e59; }\n  .search-result-info-container > div {\n    width: 50%; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchSidebar.scss":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchSidebar.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\n  background-color: transparent; }\n  .list-group-item .group-title {\n    opacity: 0.45;\n    font-family: Helvetica;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #ffffff; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Wizard/wizard.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./scripts/src/Wizard/wizard.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wizard-container {\n  width: 85%;\n  min-height: 54px;\n  border-radius: 9px;\n  box-shadow: inset 0 1px 7px 0 rgba(0, 0, 0, 0.11);\n  background-color: rgba(0, 0, 0, 0.03);\n  display: flex;\n  margin: auto;\n  margin-bottom: 20px; }\n  .wizard-container > .row {\n    width: 100%; }\n  .wizard-container div[class*=\"col-\"] {\n    padding: 0 !important; }\n  .wizard-container-content {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%; }\n  .wizard-container-button {\n    background-color: #9adf55;\n    border-radius: 10px 0px 0px 10px;\n    text-align: center;\n    height: 100%;\n    display: flex; }\n    .wizard-container-button-img {\n      width: 28px;\n      height: 30px;\n      margin: auto;\n      display: table-cell;\n      margin-right: 27px; }\n    .wizard-container-button-text {\n      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n      font-family: Roboto;\n      font-size: 14px;\n      font-weight: bold;\n      text-align: center;\n      color: #ffffff;\n      display: table-cell;\n      margin: auto;\n      margin-left: 0; }\n\n.wizard-info-item {\n  display: table;\n  font-family: Roboto;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  margin: 10px 0 10px 30px; }\n  .wizard-info-item-value {\n    font-size: 33px;\n    font-weight: 300;\n    letter-spacing: -1px;\n    white-space: nowrap;\n    color: #5bd6e5; }\n  .wizard-info-item-name {\n    display: table-cell;\n    font-family: Roboto;\n    font-size: 12px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #979797;\n    padding-left: 12px;\n    vertical-align: middle;\n    min-width: 100px; }\n  .wizard-info-item-desc {\n    margin-top: 5px;\n    font-size: 10px;\n    font-weight: normal;\n    color: #939da7; }\n", ""]);

// exports


/***/ }),

/***/ "./scripts/src/Accounts/AccountDropdown.tsx":
/*!**************************************************!*\
  !*** ./scripts/src/Accounts/AccountDropdown.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dd_menu_1 = __importDefault(__webpack_require__(/*! react-dd-menu */ "./node_modules/react-dd-menu/dist/index.js"));
__webpack_require__(/*! react-dd-menu/src/scss/react-dd-menu.scss */ "./node_modules/react-dd-menu/src/scss/react-dd-menu.scss");
;
;
var AccountDropdown = (function (_super) {
    __extends(AccountDropdown, _super);
    function AccountDropdown(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.setState({ isMenuOpen: !_this.state.isMenuOpen });
        };
        _this.close = function () {
            _this.setState({ isMenuOpen: false });
        };
        _this.handleLogout = function () {
            _this.props.logout();
        };
        _this.handleFeedback = function () {
            _this.props.surveyModel && _this.props.surveyModel.show();
        };
        _this.state = {
            isMenuOpen: false,
        };
        return _this;
    }
    AccountDropdown.prototype.render = function () {
        return (react_1.default.createElement(react_dd_menu_1.default, { isOpen: this.state.isMenuOpen, close: this.close, toggle: react_1.default.createElement("a", { onClick: this.toggle },
                react_1.default.createElement("img", { className: "account-dropdown-avatar", src: this.props.picture, alt: this.props.name })), align: "right" },
            react_1.default.createElement("li", null,
                react_1.default.createElement("a", { className: "account-dropdown-logout", href: "#", onClick: this.handleLogout }, "Log out"))));
    };
    return AccountDropdown;
}(react_1.default.Component));
exports.default = AccountDropdown;


/***/ }),

/***/ "./scripts/src/Accounts/AccountHeader.scss":
/*!*************************************************!*\
  !*** ./scripts/src/Accounts/AccountHeader.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./AccountHeader.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AccountHeader.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Accounts/AccountHeader.tsx":
/*!************************************************!*\
  !*** ./scripts/src/Accounts/AccountHeader.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
__webpack_require__(/*! ./AccountHeader.scss */ "./scripts/src/Accounts/AccountHeader.scss");
var actions_1 = __webpack_require__(/*! ../store/auth/actions */ "./scripts/src/store/auth/actions.ts");
var AccountDropdown_1 = __importDefault(__webpack_require__(/*! ./AccountDropdown */ "./scripts/src/Accounts/AccountDropdown.tsx"));
var SurveyModal_1 = __importDefault(__webpack_require__(/*! ../Survey/SurveyModal */ "./scripts/src/Survey/SurveyModal.tsx"));
var mapStateToProps = function (state) { return (__assign({}, state.auth)); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    getProfile: function () { return dispatch(actions_1.getProfile()); },
    checkLoginStatus: function () { return dispatch(actions_1.checkLoginStatus()); },
    login: function () { return dispatch(actions_1.login()); },
    logout: function () { return dispatch(actions_1.logout()); }
}); };
var AccountHeader = (function (_super) {
    __extends(AccountHeader, _super);
    function AccountHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._surveyModal = null;
        return _this;
    }
    AccountHeader.prototype.handleAuthStateChange = function () {
        if (this.props.loggedIn && !this.props.profileData) {
            this.props.getProfile();
        }
    };
    AccountHeader.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.loggedIn != this.props.loggedIn) {
            this.handleAuthStateChange();
        }
    };
    AccountHeader.prototype.componentDidMount = function () {
        this.props.checkLoginStatus();
        this.handleAuthStateChange();
    };
    AccountHeader.prototype.render = function () {
        var _this = this;
        var profileData = this.props.profileData;
        if (this.props.loggedIn) {
            return (react_1.default.createElement("div", { className: "navbar-text my-navbar" },
                profileData ?
                    react_1.default.createElement(AccountDropdown_1.default, { picture: profileData.picture, name: profileData.name, logout: this.props.logout, surveyModel: this._surveyModal }) :
                    null,
                react_1.default.createElement("div", { className: "caret" })));
        }
        else {
            return (react_1.default.createElement("div", { className: "navbar-text float-right text-right" },
                react_1.default.createElement("button", { className: "btn btn-primary mt-2", onClick: function () { return _this._surveyModal && _this._surveyModal.show(); } }, "Feedback"),
                react_1.default.createElement("button", { className: "ml-2 btn btn-primary mt-2", onClick: function (e) { return _this.props.login(); } }, "Login"),
                react_1.default.createElement(SurveyModal_1.default, { ref: function (modal) { return _this._surveyModal = modal; } })));
        }
    };
    return AccountHeader;
}(react_1.default.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AccountHeader);


/***/ }),

/***/ "./scripts/src/Accounts/Auth.tsx":
/*!***************************************!*\
  !*** ./scripts/src/Accounts/Auth.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth0_js_1 = __importDefault(__webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/src/index.js"));
var auth0_lock_1 = __webpack_require__(/*! auth0-lock */ "./node_modules/auth0-lock/lib/index.js");
var SUCCESS_URL = "/";
var ERROR_URL = "/";
var LOGOUT_URL = "/";
var domain = 'nova-approval.auth0.com';
var clientId = 'GNWX4TGm7KeiZwhEMF3tiZx0ahSWLCIs';
var Auth = (function () {
    function Auth() {
        var _this = this;
        this.auth0 = new auth0_js_1.default.WebAuth({
            domain: domain,
            clientID: clientId,
            scope: "openid profile"
        });
        this.lock = null;
        this.lockOptions = {
            theme: {
                logo: "https://media.anora.ai/logo/anora-main-logo-vertical.png",
                primaryColor: "rgb(1,171,221)"
            },
            auth: {
                redirect: false,
                responseType: 'token',
                audience: "https://nova-search-api/"
            },
            autoclose: true,
            languageDictionary: {
                title: "Log in"
            }
        };
        this.renewToken = function () { return new Promise(function (resolve, reject) {
            _this.auth0.checkSession({ responseType: "token", redirectUri: window.location.href, audience: "https://nova-search-api/" }, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    _this.setSession(result);
                    resolve(result);
                }
            });
        }); };
        try {
            var accessToken = this.getAccessToken();
            this.scheduleRenewal();
        }
        catch (e) {
            console.log("No access token found");
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }
    Auth.prototype.login = function (callback, initialScreen) {
        if (initialScreen === void 0) { initialScreen = "login"; }
        this.lock = new auth0_lock_1.Auth0Lock(clientId, domain, __assign({}, this.lockOptions, { "initialScreen": initialScreen }));
        this.lock.on("authenticated", function (authResult) {
            auth.setSession(authResult);
            if (callback)
                callback();
        }).show();
    };
    Auth.prototype.signUp = function (callback) {
        return this.login(callback, "signUp");
    };
    Auth.prototype.logout = function (callback) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        clearTimeout(this.tokenRenewalTimeout);
        if (callback)
            callback();
    };
    Auth.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
            }
            else if (err) {
                console.log(err);
            }
        });
    };
    Auth.prototype.setSession = function (authResult) {
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        this.scheduleRenewal();
    };
    Auth.prototype.scheduleRenewal = function () {
        var _this = this;
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        var delay = expiresAt - Date.now();
        if (delay < 0)
            delay = 10;
        if (delay > 0) {
            this.tokenRenewalTimeout = setTimeout(function () {
                _this.renewToken();
            }, delay);
        }
    };
    Auth.prototype.isAuthenticated = function () {
        var _this = this;
        var expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        if (new Date().getTime() < expiresAt) {
            return new Promise(function (resolve) { return resolve(true); });
        }
        else if (!expiresAt) {
            return new Promise(function (resolve) { return resolve(false); });
        }
        else {
            return new Promise(function (resolve, reject) {
                return _this.renewToken()
                    .then(function (e) { return resolve(true); })
                    .catch(function (e) { console.error("fail", e); resolve(false); });
            });
        }
    };
    Auth.prototype.getAccessToken = function () {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No Access Token found');
        }
        return accessToken;
    };
    Auth.prototype.getProfile = function (cb) {
        var accessToken = this.getAccessToken();
        return this.auth0.client.userInfo(accessToken, cb);
    };
    return Auth;
}());
var auth = new Auth();
exports.default = auth;


/***/ }),

/***/ "./scripts/src/Accounts/AuthFormContainer.tsx":
/*!****************************************************!*\
  !*** ./scripts/src/Accounts/AuthFormContainer.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var AuthTabs_1 = __importDefault(__webpack_require__(/*! ./AuthTabs */ "./scripts/src/Accounts/AuthTabs.tsx"));
var SignInForm_1 = __importDefault(__webpack_require__(/*! ./SignInForm */ "./scripts/src/Accounts/SignInForm.tsx"));
var SignUpForm_1 = __importDefault(__webpack_require__(/*! ./SignUpForm */ "./scripts/src/Accounts/SignUpForm.tsx"));
var ForgotPassword_1 = __importDefault(__webpack_require__(/*! ./ForgotPassword */ "./scripts/src/Accounts/ForgotPassword.tsx"));
var AuthFormContainer = (function (_super) {
    __extends(AuthFormContainer, _super);
    function AuthFormContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { currTab: 'login' };
        _this.onTabChange = _this.onTabChange.bind(_this);
        return _this;
    }
    AuthFormContainer.prototype.onTabChange = function (currTab) {
        this.setState({ currTab: currTab });
    };
    AuthFormContainer.prototype.render = function () {
        var currTab = this.state.currTab;
        return (react_1.default.createElement("div", { className: 'auth-form-container' },
            currTab !== 'forgotPassword' &&
                react_1.default.createElement(AuthTabs_1.default, { activeTab: currTab, changeTab: this.onTabChange }),
            currTab === 'login'
                ? react_1.default.createElement(SignInForm_1.default, { changeTab: this.onTabChange })
                : currTab === 'signup'
                    ? react_1.default.createElement(SignUpForm_1.default, null)
                    : react_1.default.createElement(ForgotPassword_1.default, { changeTab: this.onTabChange })));
    };
    return AuthFormContainer;
}(react_1.PureComponent));
exports.default = AuthFormContainer;


/***/ }),

/***/ "./scripts/src/Accounts/AuthPage.scss":
/*!********************************************!*\
  !*** ./scripts/src/Accounts/AuthPage.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./AuthPage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Accounts/AuthPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Accounts/AuthPage.tsx":
/*!*******************************************!*\
  !*** ./scripts/src/Accounts/AuthPage.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./AuthPage.scss */ "./scripts/src/Accounts/AuthPage.scss");
var AnoraRowHead_1 = __importDefault(__webpack_require__(/*! ../Landing/AnoraRowHead */ "./scripts/src/Landing/AnoraRowHead.tsx"));
var AuthPage = (function (_super) {
    __extends(AuthPage, _super);
    function AuthPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthPage.prototype.render = function () {
        return (react_1.default.createElement("div", { className: 'auth-page-container' },
            react_1.default.createElement(AnoraRowHead_1.default, { isAuth: true })));
    };
    return AuthPage;
}(react_1.PureComponent));
exports.default = AuthPage;


/***/ }),

/***/ "./scripts/src/Accounts/AuthTabs.tsx":
/*!*******************************************!*\
  !*** ./scripts/src/Accounts/AuthTabs.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
exports.default = (function (props) {
    return react_1.default.createElement(react_bootstrap_1.Row, { className: 'auth-tabs' },
        react_1.default.createElement(react_bootstrap_1.Col, { sm: 6, md: 6, className: "auth-tab " + (props.activeTab === 'login' ? 'active' : ''), onClick: function () { return props.changeTab('login'); } }, "Sign In"),
        react_1.default.createElement(react_bootstrap_1.Col, { sm: 6, md: 6, className: "auth-tab " + (props.activeTab === 'signup' ? 'active' : ''), onClick: function () { return props.changeTab('signup'); } }, "Sign Up"));
});


/***/ }),

/***/ "./scripts/src/Accounts/ForgotPassword.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Accounts/ForgotPassword.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var ForgotPassword = (function (_super) {
    __extends(ForgotPassword, _super);
    function ForgotPassword(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { form: { email: '' }, errors: [] };
        return _this;
    }
    ForgotPassword.prototype.formValidate = function () {
        var form = this.state.form;
        var errors = [];
        for (var _i = 0, _a = Object.keys(form); _i < _a.length; _i++) {
            var field = _a[_i];
            if (!form[field]) {
                errors.push(field);
            }
        }
        this.setState({ errors: errors });
        return errors.length === 0;
    };
    ForgotPassword.prototype.onChange = function (field, val) {
        var _a;
        var _b = this.state, form = _b.form, errors = _b.errors;
        var splicedErrors = errors.slice();
        var index = errors.indexOf(field);
        index !== -1 && splicedErrors.splice(errors.indexOf(field), 1);
        console.log(field, errors.indexOf(field));
        this.setState({
            form: __assign({}, form, (_a = {}, _a[field] = val, _a)),
            errors: splicedErrors
        });
    };
    ForgotPassword.prototype.onSubmit = function (e) {
        if (this.formValidate()) {
        }
        else {
            e.preventDefault();
        }
    };
    ForgotPassword.prototype.render = function () {
        var _this = this;
        var errors = this.state.errors;
        var isInvalidEmail = errors.includes('email');
        var changeTab = this.props.changeTab;
        return (react_1.default.createElement(react_bootstrap_1.Form, { className: 'forgot-pass-form' },
            react_1.default.createElement("div", { className: 'back-to-login', onClick: function () { return changeTab('login'); } },
                react_1.default.createElement("i", { className: "fas fa-arrow-left" }),
                "\u00A0 Back to login"),
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'email', className: "form-text-input " + (isInvalidEmail ? 'error' : ''), type: "email", placeholder: "Email Address", onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidEmail && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter valid email")),
            react_1.default.createElement(react_bootstrap_1.Button, { className: 'sign-in-up-btn', type: 'submit', onClick: function (e) { return _this.onSubmit(e); } }, "Reset Password")));
    };
    return ForgotPassword;
}(react_1.PureComponent));
exports.default = ForgotPassword;


/***/ }),

/***/ "./scripts/src/Accounts/SignInForm.tsx":
/*!*********************************************!*\
  !*** ./scripts/src/Accounts/SignInForm.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var SignInForm = (function (_super) {
    __extends(SignInForm, _super);
    function SignInForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { form: {
                email: '',
                password: ''
            }, errors: [] };
        return _this;
    }
    SignInForm.prototype.onChange = function (field, val) {
        var _a;
        var _b = this.state, form = _b.form, errors = _b.errors;
        var splicedErrors = errors.slice();
        var index = errors.indexOf(field);
        index !== -1 && splicedErrors.splice(errors.indexOf(field), 1);
        console.log(field, errors.indexOf(field));
        this.setState({
            form: __assign({}, form, (_a = {}, _a[field] = val, _a)),
            errors: splicedErrors
        });
    };
    SignInForm.prototype.formValidate = function () {
        var form = this.state.form;
        var errors = [];
        for (var _i = 0, _a = Object.keys(form); _i < _a.length; _i++) {
            var field = _a[_i];
            if (!form[field]) {
                errors.push(field);
            }
        }
        this.setState({ errors: errors });
        return errors.length === 0;
    };
    SignInForm.prototype.onSubmit = function (e) {
        if (this.formValidate()) {
        }
        else {
            e.preventDefault();
        }
    };
    SignInForm.prototype.render = function () {
        var _this = this;
        var errors = this.state.errors;
        var changeTab = this.props.changeTab;
        var isInvalidEmail = errors.includes('email');
        var isInvalidPassword = errors.includes('password');
        return (react_1.default.createElement(react_bootstrap_1.Form, { className: 'login-form' },
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'email', className: "form-text-input " + (isInvalidEmail ? 'error' : ''), type: "email", placeholder: "Email Address", onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidEmail && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter valid email")),
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'password', type: "password", placeholder: "Password", className: "form-text-input " + (isInvalidPassword ? 'error' : ''), onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidPassword && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter password")),
            react_1.default.createElement(react_bootstrap_1.Row, null,
                react_1.default.createElement(react_bootstrap_1.Col, { md: 6 },
                    react_1.default.createElement("label", { className: "form-checkbox" },
                        "Remember Me",
                        react_1.default.createElement("input", { type: "checkbox", name: "remember_me", onChange: function (e) { return _this.onChange(e.target.name, e.target.checked); } }),
                        react_1.default.createElement("span", { className: "checkmark" }))),
                react_1.default.createElement(react_bootstrap_1.Col, { md: 6 },
                    react_1.default.createElement("div", { className: 'forgot-password', onClick: function () { return changeTab('forgotPassword'); } }, "Forgot Password"))),
            react_1.default.createElement(react_bootstrap_1.Button, { className: 'sign-in-up-btn', type: 'submit', onClick: function (e) { return _this.onSubmit(e); } }, "Sign In"),
            react_1.default.createElement(react_bootstrap_1.Row, { className: 'social-login-separator' },
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4 },
                    react_1.default.createElement("div", { className: 'horiz-line' })),
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4 },
                    react_1.default.createElement("div", { className: 'sign-in-with' }, "OR SIGN IN WITH")),
                react_1.default.createElement(react_bootstrap_1.Col, { md: 4 },
                    react_1.default.createElement("div", { className: 'horiz-line' }))),
            react_1.default.createElement(react_bootstrap_1.Row, { className: 'social-login-container' },
                react_1.default.createElement(react_bootstrap_1.Col, { sm: 12, md: 6 },
                    react_1.default.createElement(react_bootstrap_1.Button, { className: 'linkedin-btn' },
                        react_1.default.createElement("i", { className: "fab fa-linkedin-in" }),
                        "Linked In")),
                react_1.default.createElement(react_bootstrap_1.Col, { sm: 12, md: 6 },
                    react_1.default.createElement(react_bootstrap_1.Button, { className: 'google-btn' },
                        react_1.default.createElement("i", { className: "fab fa-google" }),
                        "Google")))));
    };
    return SignInForm;
}(react_1.PureComponent));
exports.default = SignInForm;


/***/ }),

/***/ "./scripts/src/Accounts/SignUpForm.tsx":
/*!*********************************************!*\
  !*** ./scripts/src/Accounts/SignUpForm.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var SignUpForm = (function (_super) {
    __extends(SignUpForm, _super);
    function SignUpForm(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { form: {
                email: '',
                password: '',
                confirm_password: ''
            }, errors: [] };
        return _this;
    }
    SignUpForm.prototype.formValidate = function () {
        var form = this.state.form;
        var errors = [];
        for (var _i = 0, _a = Object.keys(form); _i < _a.length; _i++) {
            var field = _a[_i];
            if (!form[field]) {
                errors.push(field);
            }
        }
        this.setState({ errors: errors });
        return errors.length === 0;
    };
    SignUpForm.prototype.onChange = function (field, val) {
        var _a;
        var _b = this.state, form = _b.form, errors = _b.errors;
        var splicedErrors = errors.slice();
        var index = errors.indexOf(field);
        index !== -1 && splicedErrors.splice(errors.indexOf(field), 1);
        console.log(field, errors.indexOf(field));
        this.setState({
            form: __assign({}, form, (_a = {}, _a[field] = val, _a)),
            errors: splicedErrors
        });
    };
    SignUpForm.prototype.onSubmit = function (e) {
        if (this.formValidate()) {
        }
        else {
            e.preventDefault();
        }
    };
    SignUpForm.prototype.render = function () {
        var _this = this;
        var errors = this.state.errors;
        var isInvalidEmail = errors.includes('email');
        var isInvalidPassword = errors.includes('password');
        var isInvalidConfirmPassword = errors.includes('confirm_password');
        return (react_1.default.createElement(react_bootstrap_1.Form, { className: 'signup-form' },
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'email', className: "form-text-input " + (isInvalidEmail ? 'error' : ''), type: "email", placeholder: "Email Address", onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidEmail && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter valid email")),
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'password', type: "password", placeholder: "Password", className: "form-text-input " + (isInvalidPassword ? 'error' : ''), onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidPassword && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter password")),
            react_1.default.createElement(react_bootstrap_1.Form.Group, null,
                react_1.default.createElement(react_bootstrap_1.Form.Control, { name: 'confirm_password', className: "form-text-input " + (isInvalidConfirmPassword ? 'error' : ''), type: "password", placeholder: "Confirm Password", onChange: function (e) { return _this.onChange(e.target.name, e.target.value); } }),
                isInvalidConfirmPassword && react_1.default.createElement("div", { className: 'err-msg' }, "Please enter confirm password")),
            react_1.default.createElement(react_bootstrap_1.Button, { className: 'sign-in-up-btn', type: 'submit', onClick: function (e) { return _this.onSubmit(e); } }, "Sign Up")));
    };
    return SignUpForm;
}(react_1.PureComponent));
exports.default = SignUpForm;


/***/ }),

/***/ "./scripts/src/App.scss":
/*!******************************!*\
  !*** ./scripts/src/App.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/App.tsx":
/*!*****************************!*\
  !*** ./scripts/src/App.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! bootstrap/scss/bootstrap.scss */ "./node_modules/bootstrap/scss/bootstrap.scss");
__webpack_require__(/*! ./App.scss */ "./scripts/src/App.scss");
__webpack_require__(/*! ./Responsive.scss */ "./scripts/src/Responsive.scss");
var Landing_1 = __importDefault(__webpack_require__(/*! ./Landing/Landing */ "./scripts/src/Landing/Landing.tsx"));
var SearchResultsPage_1 = __importDefault(__webpack_require__(/*! ./Search/SearchResultsPage */ "./scripts/src/Search/SearchResultsPage.tsx"));
var ProductCodePage_1 = __importDefault(__webpack_require__(/*! ./Details/ProductCodePage/ProductCodePage */ "./scripts/src/Details/ProductCodePage/ProductCodePage.tsx"));
var PMAPage_1 = __importDefault(__webpack_require__(/*! ./Details/PMAPage/PMAPage */ "./scripts/src/Details/PMAPage/PMAPage.tsx"));
var Five10KPage_1 = __importDefault(__webpack_require__(/*! ./Details/Five10KPage/Five10KPage */ "./scripts/src/Details/Five10KPage/Five10KPage.tsx"));
var RegnumPage_1 = __importDefault(__webpack_require__(/*! ./Details/RegulationNumberPage/RegnumPage */ "./scripts/src/Details/RegulationNumberPage/RegnumPage.tsx"));
var Header_1 = __importDefault(__webpack_require__(/*! ./Header/Header */ "./scripts/src/Header/Header.tsx"));
var AuthPage_1 = __importDefault(__webpack_require__(/*! ./Accounts/AuthPage */ "./scripts/src/Accounts/AuthPage.tsx"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var history_1 = __importDefault(__webpack_require__(/*! ./history */ "./scripts/src/history.tsx"));
var ConnectedRouter_1 = __importDefault(__webpack_require__(/*! react-router-redux/ConnectedRouter */ "./node_modules/react-router-redux/ConnectedRouter.js"));
var ErrorBoundary_1 = __importDefault(__webpack_require__(/*! ./ErrorBoundary */ "./scripts/src/ErrorBoundary.tsx"));
var store_1 = __importDefault(__webpack_require__(/*! ./store */ "./scripts/src/store/index.ts"));
var react_helmet_1 = __importDefault(__webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js"));
var Profile_1 = __importDefault(__webpack_require__(/*! ./Profile/Profile */ "./scripts/src/Profile/Profile.tsx"));
var Footer_1 = __importDefault(__webpack_require__(/*! ./Footer/Footer */ "./scripts/src/Footer/Footer.tsx"));
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._helpModal = null;
        return _this;
    }
    App.prototype.render = function () {
        return (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
            react_1.default.createElement(ConnectedRouter_1.default, { history: history_1.default },
                react_1.default.createElement("div", { className: "container-fluid App" },
                    react_1.default.createElement(react_helmet_1.default, null,
                        react_1.default.createElement("title", null, "Anora: Your Intelligent FDA Advisor"),
                        react_1.default.createElement("link", { rel: "icon", href: __webpack_require__(/*! ./img/anora-logogram@5x.png */ "./scripts/src/img/anora-logogram@5x.png"), type: "image/x-icon" }),
                        react_1.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })),
                    react_1.default.createElement(ErrorBoundary_1.default, null,
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true }),
                            react_1.default.createElement(react_router_dom_1.Route, { component: Header_1.default })),
                        react_1.default.createElement(react_router_dom_1.Switch, null,
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/', exact: true, component: Landing_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/auth', exact: true, component: AuthPage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/results/product_code/:product_code', component: ProductCodePage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/results/510k/:k_number', component: Five10KPage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/results/pma/:pma_number', component: PMAPage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/results/regulation_number/:regulation_number', component: RegnumPage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/results', component: SearchResultsPage_1.default }),
                            react_1.default.createElement(react_router_dom_1.Route, { path: '/profile', component: Profile_1.default })),
                        react_1.default.createElement(react_router_dom_1.Route, { component: Footer_1.default }))))));
    };
    return App;
}(react_1.default.Component));
exports.default = App;


/***/ }),

/***/ "./scripts/src/Details/Chart/AmGantt.tsx":
/*!***********************************************!*\
  !*** ./scripts/src/Details/Chart/AmGantt.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
__webpack_require__(/*! amcharts3/amcharts/amcharts */ "./node_modules/amcharts3/amcharts/amcharts.js");
__webpack_require__(/*! amcharts3/amcharts/serial */ "./node_modules/amcharts3/amcharts/serial.js");
__webpack_require__(/*! amcharts3/amcharts/themes/light */ "./node_modules/amcharts3/amcharts/themes/light.js");
__webpack_require__(/*! amcharts3/amcharts/gantt */ "./node_modules/amcharts3/amcharts/gantt.js");
var amcharts3_react_1 = __importDefault(__webpack_require__(/*! @amcharts/amcharts3-react */ "./node_modules/@amcharts/amcharts3-react/index.js"));
function AMGantt(props) {
    console.log(props.items);
    var ganttColorMap = {
        "": '#4e90e2',
        "30-Day Notice": '#3ebfe0',
        "Normal 180 Day Track": '#563746',
        "Real-Time Process": '#3e81e0',
        "Normal 180 Day Track No User Fee": '#a7e2f1',
        "135 Review Track For 30-Day Notice": '#156a7f',
        "Special (Immediate Track)": '#1fa1c1',
        "Panel Track": '#4e90e2',
        "THIRTY DAY TRACK": '#3ebfe0',
        "Special": '#563746'
    };
    var items = lodash_es_1.sortBy(props.items, function (e) { return new Date(e.date_received).getTime(); });
    var categories = {};
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var key_1 = item.supplement_type;
        if (key_1 == "") {
            key_1 = "Standard Application";
        }
        var value = {
            "start": item.date_received,
            "end": item.decision_date,
            "color": ganttColorMap[item.supplement_type],
            "task": (item.supplement_number + " - " + item.supplement_reason).replace("/", " / ")
        };
        if (!(key_1 in categories)) {
            categories[key_1] = [value];
        }
        else {
            categories[key_1].push(value);
        }
    }
    var ganttDataProvider = [];
    for (var key in categories) {
        var category = {
            "category": key,
            "segments": categories[key]
        };
        ganttDataProvider.push(category);
    }
    var config = {
        "type": "gantt",
        "pathToImages": "https://www.amcharts.com/lib/3/images/",
        "theme": "light",
        "marginRight": 70,
        "period": "DD",
        "dataDateFormat": "YYYY-MM-DD",
        "columnWidth": 0.5,
        "valueAxis": {
            "type": "date"
        },
        "brightnessStep": 1,
        "graph": {
            "fillAlphas": 1,
            "balloonText": "<b>[[task]]</b>: [[open]] [[value]]"
        },
        "rotate": true,
        "categoryField": "category",
        "segmentsField": "segments",
        "colorField": "color",
        "startDateField": "start",
        "endDateField": "end",
        "dataProvider": ganttDataProvider,
        "valueScrollbar": {
            "autoGridCount": true
        },
        "chartCursor": {
            "cursorColor": "#55bb76",
            "valueBalloonsEnabled": false,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.5,
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true,
            "zoomable": false,
            "valueZoomable": true
        },
        "export": {
            "enabled": true
        }
    };
    return (react_1.default.createElement(amcharts3_react_1.default.React, { className: "my-class", style: {
            width: "100%",
            height: "500px"
        }, options: config }));
}
exports.default = AMGantt;


/***/ }),

/***/ "./scripts/src/Details/Chart/BarChartCategory.tsx":
/*!********************************************************!*\
  !*** ./scripts/src/Details/Chart/BarChartCategory.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var _a = __webpack_require__(/*! ./ChartUtils */ "./scripts/src/Details/Chart/ChartUtils.tsx"), VIS_COLORS = _a.VIS_COLORS, lengthenColors = _a.lengthenColors;
function BarChartCategory(props) {
    VIS_COLORS = lengthenColors(VIS_COLORS, lodash_es_1.keys(props.dataDict).length);
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0.5 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1.1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 16 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "400px" : _g;
    var titleAnnot = [{
            xref: 'paper',
            yref: 'paper',
            x: titlePosX,
            xanchor: 'left',
            y: titlePosY,
            font: {
                family: "Arial",
                size: titleFontSize,
            },
            yanchor: 'bottom',
            text: title,
            showarrow: false
        }];
    var layout = {
        annotations: titleAnnot,
        autosize: true,
        showlegend: false
    };
    var data = [{
            x: lodash_es_1.keys(props.dataDict),
            y: lodash_es_1.values(props.dataDict),
            type: 'bar',
            marker: {
                color: VIS_COLORS
            }
        }];
    var plotObject = {
        layout: layout,
        data: data,
        useResizeHandler: true,
        style: { width: width, height: height }
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = BarChartCategory;


/***/ }),

/***/ "./scripts/src/Details/Chart/BarChartTime.tsx":
/*!****************************************************!*\
  !*** ./scripts/src/Details/Chart/BarChartTime.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
function BarChartTime(props) {
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 20 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "300px" : _g;
    var titleAnnot = {
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'left',
        y: titlePosY,
        font: {
            family: "Arial",
            size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
    };
    var sorted_time = Object.keys(props.data).sort();
    if (props.expand) {
        var time_anchor = sorted_time[0];
        for (var i = -2; i < 3; i++) {
            if (i != 0) {
                sorted_time.push(time_anchor + i);
            }
        }
        sorted_time = sorted_time.sort();
    }
    var timeCounts = {
        time: sorted_time,
        count: sorted_time.map(function (y) { return props.data[y] ? props.data[y] : 0; })
    };
    var data = [{
            x: timeCounts.time,
            y: timeCounts.count,
            hoverinfo: "x+y",
            type: "bar",
            marker: {
                color: "#111EC6"
            }
        }];
    var layout = {
        annotations: [titleAnnot],
        margin: props.margin,
        hovermode: "closest",
        showlegend: false,
        autosize: true,
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: ""
        }
    };
    var plotObject = {
        data: data,
        layout: layout,
        useResizeHandler: true,
        style: { width: width, height: height }
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = BarChartTime;


/***/ }),

/***/ "./scripts/src/Details/Chart/BoxplotCategory.tsx":
/*!*******************************************************!*\
  !*** ./scripts/src/Details/Chart/BoxplotCategory.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var _a = __webpack_require__(/*! ./ChartUtils */ "./scripts/src/Details/Chart/ChartUtils.tsx"), VIS_COLORS = _a.VIS_COLORS, lengthenColors = _a.lengthenColors;
function BoxplotCategory(props) {
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 20 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "460px" : _g;
    var titleAnnot = {
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'left',
        y: titlePosY,
        font: {
            family: "Arial",
            size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
    };
    var categoryCounts = lodash_es_1.groupBy(props.dataArray, props.x);
    VIS_COLORS = lengthenColors(VIS_COLORS, lodash_es_1.keys(categoryCounts).length);
    var categoryTraces = lodash_es_1.keys(categoryCounts).map(function (key, i) { return ({
        y: categoryCounts[key].map(function (e) { return e[props.y]; }),
        name: key,
        marker: {
            opacity: .6,
            color: VIS_COLORS[i]
        },
        line: {
            width: 2,
        },
        boxpoints: 'all',
        jitter: .3,
        pointpos: 0,
        type: 'box'
    }); });
    categoryTraces = lodash_es_1.orderBy(categoryTraces, function (e) { return lodash_es_1.mean(e.y); }, 'desc');
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        showlegend: false,
        autosize: true,
        yaxis: {
            title: props.axisSpecs.yTitle,
            gridcolor: "gray"
        },
        font: {
            color: 'black'
        }
    };
    var plotObject = {
        layout: layout,
        data: categoryTraces,
        useResizeHandler: true,
        style: { width: width, height: height }
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = BoxplotCategory;


/***/ }),

/***/ "./scripts/src/Details/Chart/ChartUtils.tsx":
/*!**************************************************!*\
  !*** ./scripts/src/Details/Chart/ChartUtils.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var VIS_COLORS = ["#111EC6", "#6495ED", "#004D92", "3FE0D0", "95C8D8", "008081", "4C516D", "#4F97A3", "1034A6", "008ECC"];
var lengthenColors = function (colorArray, desiredLength) {
    while (desiredLength > colorArray.length) {
        var extraLength = desiredLength - colorArray.length;
        if (extraLength <= colorArray.length) {
            colorArray = colorArray.concat(colorArray.slice(0, extraLength));
        }
        else {
            colorArray = colorArray.concat(colorArray);
        }
    }
    return colorArray;
};
module.exports = {
    VIS_COLORS: VIS_COLORS,
    lengthenColors: lengthenColors
};


/***/ }),

/***/ "./scripts/src/Details/Chart/PieChart.tsx":
/*!************************************************!*\
  !*** ./scripts/src/Details/Chart/PieChart.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var _a = __webpack_require__(/*! ./ChartUtils */ "./scripts/src/Details/Chart/ChartUtils.tsx"), VIS_COLORS = _a.VIS_COLORS, lengthenColors = _a.lengthenColors;
function PieChart(props) {
    VIS_COLORS = lengthenColors(VIS_COLORS, lodash_es_1.keys(props.dataDict).length);
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0.5 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1.1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 16 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "400px" : _g;
    var titleAnnot = [{
            xref: 'paper',
            yref: 'paper',
            x: titlePosX,
            xanchor: 'center',
            y: titlePosY,
            font: {
                family: "Arial",
                size: titleFontSize,
            },
            yanchor: 'bottom',
            text: title,
            showarrow: false
        }];
    var layout = {
        annotations: titleAnnot,
        autosize: true,
        showlegend: false,
    };
    var data = [{
            values: lodash_es_1.values(props.dataDict),
            labels: lodash_es_1.keys(props.dataDict),
            type: 'pie',
            textinfo: 'label',
            textposition: 'outside',
            marker: {
                colors: VIS_COLORS
            }
        }];
    var plotObject = {
        layout: layout,
        data: data,
        useResizeHandler: true,
        style: { width: width, height: height }
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = PieChart;


/***/ }),

/***/ "./scripts/src/Details/Chart/ScatterTime.tsx":
/*!***************************************************!*\
  !*** ./scripts/src/Details/Chart/ScatterTime.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var createLoess_1 = __importDefault(__webpack_require__(/*! ./createLoess */ "./scripts/src/Details/Chart/createLoess.ts"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
function ScatterTime(props) {
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 20 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "300px" : _g;
    var titleAnnot = {
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'left',
        y: titlePosY,
        font: {
            family: "Arial",
            size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
    };
    var items = lodash_es_1.sortBy(props.data, function (e) { return new Date(e[props.x]).getTime(); });
    var scatterPoints = {
        x: items.map(function (e) { return new Date(e[props.x]).getTime(); }),
        y: items.map(function (e) { return e[props.y]; })
    };
    var data = {
        x: scatterPoints.x,
        y: scatterPoints.y,
        text: items.map(function (e) { return e[props.id]; }),
        hoverinfo: "text",
        type: "scatter",
        mode: "markers",
        marker: {
            color: "#111EC6",
            opacity: 0.8,
            size: 8,
            symbol: "circle",
            line: {
                width: 1,
                color: "black"
            }
        }
    };
    if (scatterPoints.x.length > 10) {
        var _h = createLoess_1.default(scatterPoints), timelineUpperTrace = _h.timelineUpperTrace, timelineLowerTrace = _h.timelineLowerTrace;
    }
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        autosize: true,
        showlegend: false,
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: props.axisSpecs.xTitle
        }
    };
    var plotObject = {
        data: [data, timelineUpperTrace, timelineLowerTrace],
        layout: layout,
        useResizeHandler: true,
        style: {
            width: width,
            height: height
        }
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = ScatterTime;


/***/ }),

/***/ "./scripts/src/Details/Chart/StackBarChartTime.tsx":
/*!*********************************************************!*\
  !*** ./scripts/src/Details/Chart/StackBarChartTime.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var _a = __webpack_require__(/*! ./ChartUtils */ "./scripts/src/Details/Chart/ChartUtils.tsx"), VIS_COLORS = _a.VIS_COLORS, lengthenColors = _a.lengthenColors;
function StackBarChartTime(props) {
    var _a = props.titleSpecs, _b = _a.titlePosX, titlePosX = _b === void 0 ? 0 : _b, _c = _a.titlePosY, titlePosY = _c === void 0 ? 1 : _c, _d = _a.titleFontSize, titleFontSize = _d === void 0 ? 20 : _d, title = _a.title;
    var _e = props.styleSpecs, _f = _e.width, width = _f === void 0 ? "100%" : _f, _g = _e.height, height = _g === void 0 ? "460px" : _g;
    var titleAnnot = {
        xref: 'paper',
        yref: 'paper',
        x: titlePosX,
        xanchor: 'left',
        y: titlePosY,
        font: {
            family: "Arial",
            size: titleFontSize,
        },
        yanchor: 'bottom',
        text: title,
        showarrow: false
    };
    VIS_COLORS = lengthenColors(VIS_COLORS, lodash_es_1.keys(props.dataDict).length);
    var dataTraces = [];
    var colorIndex = 0;
    for (var key in props.dataDict) {
        var tempTrace = {
            name: key,
            hoverinfo: "name+x+y",
            type: "bar",
            marker: {
                color: VIS_COLORS[colorIndex]
            },
            x: lodash_es_1.keys(props.dataDict[key]),
            y: lodash_es_1.values(props.dataDict[key])
        };
        colorIndex += 1;
        dataTraces.push(tempTrace);
    }
    dataTraces = lodash_es_1.orderBy(dataTraces, function (e) { return e.y.reduce(function (a, b) { return a + b; }, 0); }, 'asc');
    var layout = {
        margin: props.margin,
        annotations: [titleAnnot],
        hovermode: "closest",
        autosize: true,
        showlegend: true,
        legend: {
            "orientation": props.legendSpecs.orientation,
            x: props.legendSpecs.x,
            y: props.legendSpecs.y
        },
        barmode: "stack",
        yaxis: {
            title: props.axisSpecs.yTitle
        },
        xaxis: {
            title: props.axisSpecs.xTitle
        }
    };
    var plotObject = {
        layout: layout,
        useResizeHandler: true,
        style: {
            width: width, height: height
        },
        data: dataTraces
    };
    return (react_1.default.createElement(react_plotly_js_1.default, __assign({}, plotObject)));
}
exports.default = StackBarChartTime;


/***/ }),

/***/ "./scripts/src/Details/Chart/createLoess.ts":
/*!**************************************************!*\
  !*** ./scripts/src/Details/Chart/createLoess.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loess_1 = __importDefault(__webpack_require__(/*! loess */ "./node_modules/loess/dist/index.js"));
function elementArrayAdd(array1, array2, multiplier) {
    if (multiplier === void 0) { multiplier = 1; }
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray[i] = array1[i] + (multiplier * array2[i]);
    }
    return newArray;
}
function createLoess(timelinePoints) {
    var optionsLoess = {
        span: 0.75,
        band: .9,
        degree: 2,
        normalize: true,
        robust: true,
        iterations: 4
    };
    var loessModel = new loess_1.default(timelinePoints, optionsLoess);
    var loessFit = loessModel.predict();
    var loess = loessFit.fitted;
    var upper = elementArrayAdd(loessFit.fitted, loessFit.halfwidth);
    var lower = elementArrayAdd(loessFit.fitted, loessFit.halfwidth, -1);
    var timelineLoessTrace = {
        x: timelinePoints.x,
        y: loess,
        name: "Loess Fit",
        hoverinfo: 'name',
        line: { color: "rgb(31, 119, 180)" },
        type: 'scatter',
        xaxis: 'x',
        yaxis: 'y',
        mode: "lines",
        showlegend: true
    };
    var timelineUpperTrace = {
        x: timelinePoints.x,
        y: upper,
        name: "Upper Error",
        fill: "tonexty",
        hoverinfo: 'name',
        fillcolor: "rgba(0,100,80,0.2)",
        line: { color: "gray", dash: "dashdot" },
        marker: { color: "444" },
        type: 'scatter',
        xaxis: 'x',
        yaxis: 'y',
        mode: "lines",
        showlegend: false
    };
    var timelineLowerTrace = {
        x: timelinePoints.x,
        y: lower,
        name: "Lower Error",
        hoverinfo: 'name',
        fill: "tonexty",
        fillcolor: "rgba(0,100,80,0.2)",
        marker: { color: "444" },
        line: { color: "gray", dash: "dashdot" },
        type: 'scatter',
        xaxis: 'x',
        yaxis: 'y',
        mode: "lines",
        showlegend: false
    };
    return { timelineLoessTrace: timelineLoessTrace, timelineUpperTrace: timelineUpperTrace, timelineLowerTrace: timelineLowerTrace };
}
exports.default = createLoess;


/***/ }),

/***/ "./scripts/src/Details/Document/Document.scss":
/*!****************************************************!*\
  !*** ./scripts/src/Details/Document/Document.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./Document.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Document/Document.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/Document/Document.tsx":
/*!***************************************************!*\
  !*** ./scripts/src/Details/Document/Document.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var fetch_jsonp_1 = __importDefault(__webpack_require__(/*! fetch-jsonp */ "./node_modules/fetch-jsonp/build/fetch-jsonp.js"));
__webpack_require__(/*! ./Document.scss */ "./scripts/src/Details/Document/Document.scss");
var NovaDocument = (function (_super) {
    __extends(NovaDocument, _super);
    function NovaDocument() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { notFound: false };
        return _this;
    }
    NovaDocument.prototype.componentDidMount = function () {
        var _this = this;
        fetch_jsonp_1.default(this.props.src).catch(function (err) {
            if (err.message.indexOf('timed out') === -1) {
                console.log(err);
                _this.setState({ notFound: true });
            }
        });
    };
    NovaDocument.prototype.render = function () {
        var src = this.props.src.trim();
        if (src) {
            return (react_1.default.createElement("div", { className: "nova-document-container" },
                this.state.notFound ? (react_1.default.createElement("a", { className: "nova-document-not-found-blur", href: src },
                    react_1.default.createElement("p", { className: "nova-document-not-found-blur-text" }, "We cannot find the relevant PDF file for you."))) : null,
                react_1.default.createElement("iframe", { src: src, style: { "width": "100%", "height": "800px" } })));
        }
        else {
            return react_1.default.createElement("div", null, "PDFs are not available for applications submitted before 2000.");
        }
    };
    return NovaDocument;
}(react_1.Component));
exports.default = NovaDocument;


/***/ }),

/***/ "./scripts/src/Details/Five10KPage/Five10KPage.scss":
/*!**********************************************************!*\
  !*** ./scripts/src/Details/Five10KPage/Five10KPage.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./Five10KPage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Five10KPage/Five10KPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/Five10KPage/Five10KPage.tsx":
/*!*********************************************************!*\
  !*** ./scripts/src/Details/Five10KPage/Five10KPage.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./Five10KPage.scss */ "./scripts/src/Details/Five10KPage/Five10KPage.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! src/store/details/actions */ "./scripts/src/store/details/actions.ts");
var Tabs_1 = __webpack_require__(/*! src/Details/Tabs/Tabs */ "./scripts/src/Details/Tabs/Tabs.tsx");
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var DescriptionTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/DescriptionTable/DescriptionTable */ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx"));
var Loading_1 = __importDefault(__webpack_require__(/*! src/Loading/Loading */ "./scripts/src/Loading/Loading.tsx"));
__webpack_require__(/*! ../Tabs/Tabs.scss */ "./scripts/src/Details/Tabs/Tabs.scss");
var Document_1 = __importDefault(__webpack_require__(/*! src/Details/Document/Document */ "./scripts/src/Details/Document/Document.tsx"));
var PropertyGrid_1 = __importDefault(__webpack_require__(/*! src/Details/PropertyGrid/PropertyGrid */ "./scripts/src/Details/PropertyGrid/PropertyGrid.tsx"));
var Stats_1 = __importDefault(__webpack_require__(/*! src/Details/Layout/Stats */ "./scripts/src/Details/Layout/Stats.tsx"));
var mapStateToProps = function (state) { return state.details; };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchDetail: function (e) { return dispatch(actions_1.fetchFive10KData(e)); },
    };
};
var Five10KPage = (function (_super) {
    __extends(Five10KPage, _super);
    function Five10KPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Five10KPage.prototype.componentDidMount = function () {
        this.props.fetchDetail(this.props.match.params.k_number);
    };
    Five10KPage.prototype.render = function () {
        if (this.props.loading) {
            return react_1.default.createElement(Loading_1.default, null);
        }
        return (react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(Tabs_1.Tabs, null,
                react_1.default.createElement(Tabs_1.Tab, { label: "General Information" },
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        "All this information (except for estimated cost) is sourced from the ",
                        react_1.default.createElement("a", { target: "_blank", href: lodash_es_1.get(this.props.result[0].item, "links.fda") }, "FDA website"),
                        " verbatim.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement(DescriptionTable_1.default, { data: this.props.result[0].item, keys: [
                                "applicant", "product_code", "regulation_number", "advisory_committee_description",
                                "clearance_type", "decision_description", "date_received",
                                "decision_date", "statement_or_summary"
                            ] })),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        react_1.default.createElement(PropertyGrid_1.default, { title: "", data: this.props.result[0].item, keys: ["application_length", "cost"], labels: ["Review Time", "Estimated Cost"] }),
                        react_1.default.createElement(Stats_1.default, null))),
                react_1.default.createElement(Tabs_1.Tab, { label: "Statement or Summary (PDF)" },
                    "View and search the 510(k) Summary or 510(k) Statement, the clearance letter, and the Indications for Use page when available.",
                    react_1.default.createElement("br", null),
                    "Disclaimer: Summary information was not required until 1990.  Furthermore, Summary information was only regularly posted in the database starting in 2007.  As such, for the period between 1990 and 2006, only the clearance letter might be available in the database. ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(Document_1.default, { src: lodash_es_1.get(this.props.result[0].item, "pdf_link", "") })))));
    };
    return Five10KPage;
}(react_1.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Five10KPage);


/***/ }),

/***/ "./scripts/src/Details/Layout/LayoutUtils.tsx":
/*!****************************************************!*\
  !*** ./scripts/src/Details/Layout/LayoutUtils.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var reviewTimeBins = {
    "<30 days": 0,
    "30 - 90 days": 0,
    "90 days - 6 mo": 0,
    "6 mo - 1 yr": 0,
    "1 - 2 yr": 0,
    ">3 yr": 0
};
var binReviewTimes = function (reviewTimeCount) {
    for (var key in reviewTimeCount) {
        var intValue = parseInt(key);
        if (intValue < 30) {
            reviewTimeBins["<30 days"] += reviewTimeCount[key];
        }
        else if (intValue < 90) {
            reviewTimeBins["30 - 90 days"] += reviewTimeCount[key];
        }
        else if (intValue < 186) {
            reviewTimeBins["90 days - 6 mo"] += reviewTimeCount[key];
        }
        else if (intValue < 365) {
            reviewTimeBins["6 mo - 1 yr"] += reviewTimeCount[key];
        }
        else if (intValue < 730) {
            reviewTimeBins["1 - 2 yr"] += reviewTimeCount[key];
        }
        else {
            reviewTimeBins[">3 yr"] += reviewTimeCount[key];
        }
    }
    return reviewTimeBins;
};
var binDeviceClasses = function (deviceClassCounts) {
    var deviceClassBins = {
        "Class I": 0,
        "Class II": 0,
        "Class III": 0,
        "Other": 0
    };
    for (var key in deviceClassCounts) {
        switch (key) {
            case "1":
                deviceClassBins["Class I"] = deviceClassCounts[key];
                break;
            case "2":
                deviceClassBins["Class II"] = deviceClassCounts[key];
                break;
            case "3":
                deviceClassBins["Class III"] = deviceClassCounts[key];
                break;
            default:
                deviceClassBins["Other"] += deviceClassCounts[key];
        }
    }
    return deviceClassBins;
};
var mergeGroupedValues = function (g1, g2) {
    var merged_keys = lodash_es_1.union(lodash_es_1.keys(g1), lodash_es_1.keys(g2));
    var merged = {};
    merged_keys.forEach(function (key) { return merged[key] = lodash_es_1.toSafeInteger(g1[key]) + lodash_es_1.toSafeInteger(g2[key]); });
    return merged;
};
var splitDoubleKeys = function (doubleKeyDict, split) {
    var results = {};
    for (var key in doubleKeyDict) {
        var splitKeys = key.split(split);
        var key1 = splitKeys[0];
        var key2 = splitKeys[1];
        if (key1 in results) {
            results[key1][key2] = doubleKeyDict[key];
        }
        else {
            results[key1] = {};
            results[key1][key2] = doubleKeyDict[key];
        }
    }
    return results;
};
module.exports = {
    reviewTimeBins: reviewTimeBins,
    binReviewTimes: binReviewTimes,
    binDeviceClasses: binDeviceClasses,
    mergeGroupedValues: mergeGroupedValues,
    splitDoubleKeys: splitDoubleKeys
};


/***/ }),

/***/ "./scripts/src/Details/Layout/Stats.tsx":
/*!**********************************************!*\
  !*** ./scripts/src/Details/Layout/Stats.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_plotly_js_1 = __importDefault(__webpack_require__(/*! react-plotly.js */ "./node_modules/react-plotly.js/react-plotly.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var reviewTimeBins = __webpack_require__(/*! ./LayoutUtils */ "./scripts/src/Details/Layout/LayoutUtils.tsx").reviewTimeBins;
var mapStateToProps = function (state) {
    var aggIndex = 1;
    if ("pma_number" in state.details.result[0].item) {
        aggIndex = 2;
    }
    return { results_single: state.details.result[0],
        results_agg: state.details.result[aggIndex] };
};
var mapDispatchToProps = function (dispatch, ownProps) {
    return {};
};
function Stats(props) {
    var appType;
    if ("pma_number" in props.results_single.item) {
        appType = "PMA";
    }
    else {
        appType = "510(k)";
    }
    var singleTime = parseInt(props.results_single.item.application_length);
    var belowCount = 0;
    var totalCount = 0;
    var aggTimes = props.results_agg.aggregate.application_length.groups;
    var binnedColor = {
        "<30 days": "black",
        "30 - 90 days": "black",
        "90 days - 6 mo": "black",
        "6 mo - 1 yr": "black",
        "1 - 2 yr": "black",
        ">3 yr": "black"
    };
    var singleBin;
    if (singleTime < 30) {
        binnedColor["<30 days"] = "green";
        singleBin = "<30 days";
    }
    else if (singleTime < 90) {
        binnedColor["30 - 90 days"] = "green";
        singleBin = "30 - 90 days";
    }
    else if (singleTime < 186) {
        binnedColor["90 days - 6 mo"] = "green";
        singleBin = "90 days - 6 mo";
    }
    else if (singleTime < 365) {
        binnedColor["6 mo - 1 yr"] = "green";
        singleBin = "6 mo - 1 yr";
    }
    else if (singleTime < 730) {
        binnedColor["1 - 2 yr"] = "green";
        singleBin = "1 - 2 yr";
    }
    else {
        binnedColor[">3 yr"] = "green";
        singleBin = ">3 yr";
    }
    for (var key in aggTimes) {
        var intValue = parseInt(key);
        if (intValue < singleTime) {
            belowCount += aggTimes[key];
        }
        if (intValue < 30) {
            reviewTimeBins["<30 days"] += aggTimes[key];
        }
        else if (intValue < 90) {
            reviewTimeBins["30 - 90 days"] += aggTimes[key];
        }
        else if (intValue < 186) {
            reviewTimeBins["90 days - 6 mo"] += aggTimes[key];
        }
        else if (intValue < 365) {
            reviewTimeBins["6 mo - 1 yr"] += aggTimes[key];
        }
        else if (intValue < 730) {
            reviewTimeBins["1 - 2 yr"] += aggTimes[key];
        }
        else {
            reviewTimeBins[">3 yr"] += aggTimes[key];
        }
        totalCount += aggTimes[key];
    }
    var percentage = (belowCount / totalCount) * 100;
    var opinion;
    if (percentage < 30 && percentage > 0) {
        opinion = " only ";
    }
    else {
        opinion = " ";
    }
    var count;
    if (belowCount == totalCount - 1) {
        count = "none";
    }
    else if (belowCount == 0) {
        count = "all";
    }
    else {
        count = totalCount - belowCount;
    }
    var revTimeBar = {
        layout: {
            margin: {
                l: 20,
                r: 20,
                b: 50,
                t: 40
            },
            annotations: [{
                    x: singleBin,
                    y: reviewTimeBins[singleBin],
                    xref: 'x',
                    yref: 'y',
                    text: 'This application',
                    showarrow: true,
                    arrowhead: 0,
                    ax: 20,
                    ay: -20
                }],
            autosize: true,
            showlegend: false
        },
        useResizeHandler: true,
        style: { width: "100%", height: "400px" },
        data: [{
                x: lodash_es_1.keys(reviewTimeBins),
                y: lodash_es_1.values(reviewTimeBins),
                type: "bar",
                marker: { color: lodash_es_1.values(binnedColor) }
            }]
    };
    return (react_1.default.createElement("div", { className: "row" },
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("div", { className: "mt-4 px-4" },
                "The review time for this application was shorter than ",
                react_1.default.createElement("br", null),
                " ",
                react_1.default.createElement("strong", null,
                    count,
                    " "),
                " of the ",
                react_1.default.createElement("strong", null,
                    totalCount - 1,
                    " "),
                "(total) premarket applications submitted under this product code (",
                props.results_single.item.product_code,
                ")."),
            react_1.default.createElement(react_plotly_js_1.default, __assign({}, revTimeBar)))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Stats);


/***/ }),

/***/ "./scripts/src/Details/PMAPage/PMAPage.scss":
/*!**************************************************!*\
  !*** ./scripts/src/Details/PMAPage/PMAPage.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./PMAPage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PMAPage/PMAPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/PMAPage/PMAPage.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Details/PMAPage/PMAPage.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./PMAPage.scss */ "./scripts/src/Details/PMAPage/PMAPage.scss");
__webpack_require__(/*! ../Tabs/Tabs.scss */ "./scripts/src/Details/Tabs/Tabs.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! src/store/details/actions */ "./scripts/src/store/details/actions.ts");
var Tabs_1 = __webpack_require__(/*! src/Details/Tabs/Tabs */ "./scripts/src/Details/Tabs/Tabs.tsx");
var DescriptionTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/DescriptionTable/DescriptionTable */ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx"));
var AmGantt_1 = __importDefault(__webpack_require__(/*! src/Details/Chart/AmGantt */ "./scripts/src/Details/Chart/AmGantt.tsx"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var Loading_1 = __importDefault(__webpack_require__(/*! src/Loading/Loading */ "./scripts/src/Loading/Loading.tsx"));
var Document_1 = __importDefault(__webpack_require__(/*! src/Details/Document/Document */ "./scripts/src/Details/Document/Document.tsx"));
var PropertyGrid_1 = __importDefault(__webpack_require__(/*! src/Details/PropertyGrid/PropertyGrid */ "./scripts/src/Details/PropertyGrid/PropertyGrid.tsx"));
var Stats_1 = __importDefault(__webpack_require__(/*! src/Details/Layout/Stats */ "./scripts/src/Details/Layout/Stats.tsx"));
var TextView_1 = __importDefault(__webpack_require__(/*! ../TextView/TextView */ "./scripts/src/Details/TextView/TextView.tsx"));
var mapStateToProps = function (state) { return state.details; };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchDetail: function (e) { return dispatch(actions_1.fetchPMAData(e)); }
    };
};
var PMAPage = (function (_super) {
    __extends(PMAPage, _super);
    function PMAPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PMAPage.prototype.componentDidMount = function () {
        this.props.fetchDetail(this.props.match.params.pma_number.trim());
    };
    PMAPage.prototype.render = function () {
        if (this.props.loading) {
            return react_1.default.createElement(Loading_1.default, null);
        }
        return (react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(Tabs_1.Tabs, null,
                react_1.default.createElement(Tabs_1.Tab, { label: "General Information" },
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        "All this information (except for estimated cost) is sourced from the ",
                        react_1.default.createElement("a", { target: "_blank", href: lodash_es_1.get(this.props.result[0].item, "links.fda") }, "FDA website"),
                        " verbatim.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement(DescriptionTable_1.default, { data: this.props.result[0].item, keys: [
                                "generic_name", "docket_number", "applicant", "product_code",
                                "regulation_number", "advisory_committee_description", "date_received", "decision_date",
                                "decision_code"
                            ] }),
                        react_1.default.createElement(TextView_1.default, { data: this.props.result[0].item, keys: ["ao_statement"] })),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        react_1.default.createElement(PropertyGrid_1.default, { title: "", data: this.props.result[0].item, keys: ["application_length", "cost"], labels: ["Review Time", "Estimated Cost"] }),
                        react_1.default.createElement(Stats_1.default, null))),
                react_1.default.createElement(Tabs_1.Tab, { label: "Timeline" },
                    react_1.default.createElement("div", { className: "col-12" },
                        react_1.default.createElement("h3", null, "Application Timeline"),
                        "Explore the timeline of correspondences for this medical device, including the original PMA application and all supplements.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null)),
                    react_1.default.createElement(AmGantt_1.default, { items: this.props.result[1].items })),
                react_1.default.createElement(Tabs_1.Tab, { label: "Approval Order (PDF)" },
                    "View and search the Approval Order PDF when available. ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(Document_1.default, { src: lodash_es_1.get(this.props.result[0].item, "links.pdf_links.approval_order", "") })),
                react_1.default.createElement(Tabs_1.Tab, { label: "Summary / Safety (PDF)" },
                    "View and search the Summary/Safety PDF when available. ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(Document_1.default, { src: lodash_es_1.get(this.props.result[0].item, "links.pdf_links.summary_safety", "") })),
                react_1.default.createElement(Tabs_1.Tab, { label: "Labeling (PDF)" },
                    "View and search the Labeling PDF when available. ",
                    react_1.default.createElement("br", null),
                    react_1.default.createElement("br", null),
                    react_1.default.createElement(Document_1.default, { src: lodash_es_1.get(this.props.result[0].item, "links.pdf_links.labeling", "") })))));
    };
    return PMAPage;
}(react_1.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PMAPage);


/***/ }),

/***/ "./scripts/src/Details/ProductCodePage/ApplicationActivity.tsx":
/*!*********************************************************************!*\
  !*** ./scripts/src/Details/ProductCodePage/ApplicationActivity.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var Tabs_1 = __webpack_require__(/*! src/Details/Tabs/Tabs */ "./scripts/src/Details/Tabs/Tabs.tsx");
var ListTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/ListTable/ListTable */ "./scripts/src/Details/Table/ListTable/ListTable.tsx"));
var BarChartTime_1 = __importDefault(__webpack_require__(/*! ../Chart/BarChartTime */ "./scripts/src/Details/Chart/BarChartTime.tsx"));
var ScatterTime_1 = __importDefault(__webpack_require__(/*! ../Chart/ScatterTime */ "./scripts/src/Details/Chart/ScatterTime.tsx"));
function ApplicationActivity(props) {
    var results = props.results;
    if (!results.items.length)
        return react_1.default.createElement(Tabs_1.Tab, null);
    var expand = (Object.keys(results.aggregate.year.groups).length == 1) ? true : false;
    var yearCountProps = {
        data: results.aggregate.year.groups,
        expand: expand,
        titleSpecs: {
            titlePosY: 1.2,
            title: 'Volume'
        },
        margin: {
            l: 50,
            r: 50,
            b: 50,
            t: 100
        },
        styleSpecs: {},
        axisSpecs: {
            yTitle: 'Yearly Count',
        }
    };
    var idField;
    if ("k_number" in results.items[0]) {
        idField = "k_number";
    }
    else {
        idField = "pma_number";
    }
    var timelineProps = {
        data: results.items,
        x: "date_received",
        y: "application_length",
        id: idField,
        margin: {
            l: 50,
            r: 50,
            b: 100,
            t: 20
        },
        expand: expand,
        titleSpecs: {
            title: "Review Time"
        },
        styleSpecs: {},
        axisSpecs: {
            yTitle: 'Review Time (days)',
            xTitle: "Date Received"
        }
    };
    return (react_1.default.createElement(Tabs_1.Tab, { label: props.label },
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("h3", null, "Application Timeline"),
            "Explore a timeline of all the applications that have ever been submitted under this product code."),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(BarChartTime_1.default, __assign({}, yearCountProps))),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(ScatterTime_1.default, __assign({}, timelineProps))),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement("h3", null, "Raw Application Data"),
                "Interact with the application data directly by sorting and searching different column values.",
                react_1.default.createElement("br", null),
                react_1.default.createElement("br", null)),
            react_1.default.createElement(ListTable_1.default, { data: results.items, headers: Object.keys(results.items[0]) }))));
}
exports.default = ApplicationActivity;


/***/ }),

/***/ "./scripts/src/Details/ProductCodePage/ProductCodePage.scss":
/*!******************************************************************!*\
  !*** ./scripts/src/Details/ProductCodePage/ProductCodePage.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./ProductCodePage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/ProductCodePage/ProductCodePage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/ProductCodePage/ProductCodePage.tsx":
/*!*****************************************************************!*\
  !*** ./scripts/src/Details/ProductCodePage/ProductCodePage.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./ProductCodePage.scss */ "./scripts/src/Details/ProductCodePage/ProductCodePage.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! src/store/details/actions */ "./scripts/src/store/details/actions.ts");
var DescriptionTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/DescriptionTable/DescriptionTable */ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx"));
var PropertyGrid_1 = __importDefault(__webpack_require__(/*! src/Details/PropertyGrid/PropertyGrid */ "./scripts/src/Details/PropertyGrid/PropertyGrid.tsx"));
var ApplicationActivity_1 = __importDefault(__webpack_require__(/*! ./ApplicationActivity */ "./scripts/src/Details/ProductCodePage/ApplicationActivity.tsx"));
var TextView_1 = __importDefault(__webpack_require__(/*! ../TextView/TextView */ "./scripts/src/Details/TextView/TextView.tsx"));
var Tabs_1 = __webpack_require__(/*! src/Details/Tabs/Tabs */ "./scripts/src/Details/Tabs/Tabs.tsx");
var Loading_1 = __importDefault(__webpack_require__(/*! src/Loading/Loading */ "./scripts/src/Loading/Loading.tsx"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var mapStateToProps = function (state) { return (__assign({}, state.details)); };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchProductCodeData: function (e) { return dispatch(actions_1.fetchProductCodeData(e)); }
    };
};
var ProductCodePage = (function (_super) {
    __extends(ProductCodePage, _super);
    function ProductCodePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCodePage.prototype.componentDidMount = function () {
        this.props.fetchProductCodeData(this.props.match.params.product_code);
    };
    ProductCodePage.prototype.render = function () {
        if (this.props.loading) {
            return react_1.default.createElement(Loading_1.default, null);
        }
        var five10kTabLabel;
        var pmaTabLabel;
        if (this.props.result[1].items.length == 0) {
            five10kTabLabel = "510(K) Applications (No Data)";
        }
        else {
            five10kTabLabel = "510(K) Applications";
        }
        if (this.props.result[2].items.length == 0) {
            pmaTabLabel = "PMA Applications (No Data)";
        }
        else {
            pmaTabLabel = "PMA Applications";
        }
        return (react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(Tabs_1.Tabs, null,
                react_1.default.createElement(Tabs_1.Tab, { label: "General Information" },
                    react_1.default.createElement("div", { className: "col-12" },
                        react_1.default.createElement("h3", null, "General Information")),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        "All this information is sourced from the ",
                        react_1.default.createElement("a", { target: "_blank", href: lodash_es_1.get(this.props.result[0].item, "links.fda") }, "FDA website"),
                        " verbatim.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement(DescriptionTable_1.default, { data: this.props.result[0].item, keys: ["device_class", "regulation_number", "medical_specialty", "review_panel"] }),
                        react_1.default.createElement(PropertyGrid_1.default, { title: "Flags", data: this.props.result[0].item, keys: ["implant_flag", "gmp_exempt_flag", "life_sustain_support_flag", "third_party_flag"], flag: "true" })),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        react_1.default.createElement(TextView_1.default, { data: this.props.result[0].item, keys: ["definition", "description", "PHYSICALSTATE", "TECHNICALMETHOD", "TARGETAREA"] }))),
                react_1.default.createElement(ApplicationActivity_1.default, { label: five10kTabLabel, results: this.props.result[1] }),
                react_1.default.createElement(ApplicationActivity_1.default, { label: pmaTabLabel, results: this.props.result[2] }))));
    };
    return ProductCodePage;
}(react_1.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ProductCodePage);


/***/ }),

/***/ "./scripts/src/Details/PropertyGrid/PropertyGrid.tsx":
/*!***********************************************************!*\
  !*** ./scripts/src/Details/PropertyGrid/PropertyGrid.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./_PropertyGrid.scss */ "./scripts/src/Details/PropertyGrid/_PropertyGrid.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var constants_1 = __webpack_require__(/*! src/constants */ "./scripts/src/constants.ts");
var utils_1 = __webpack_require__(/*! src/utils */ "./scripts/src/utils/index.ts");
var TableCell_1 = __importDefault(__webpack_require__(/*! src/Details/Table/TableCell */ "./scripts/src/Details/Table/TableCell.tsx"));
var mapStateToProps = function (state) { return state.details; };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {};
};
function PropertyGrid(props) {
    var flagHint;
    if (props.flag) {
        flagHint = "Y = yes, N = no";
    }
    else {
        flagHint = "";
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("br", null),
        props.title &&
            react_1.default.createElement("h3", null, props.title),
        flagHint,
        react_1.default.createElement("dl", { className: "row nova-property-grid" }, (props.keys || utils_1.exactKeys(props.data)).map(function (key, i) {
            return react_1.default.createElement("div", { className: "col-12 col-sm-6", key: key },
                react_1.default.createElement("dt", null, props.labels ? props.labels[i] : constants_1.OPENFDA_KEY_NAMES[key]),
                react_1.default.createElement("hr", null),
                react_1.default.createElement("dd", null,
                    react_1.default.createElement(TableCell_1.default, { keyName: key, value: props.data[key] })));
        }))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PropertyGrid);


/***/ }),

/***/ "./scripts/src/Details/PropertyGrid/_PropertyGrid.scss":
/*!*************************************************************!*\
  !*** ./scripts/src/Details/PropertyGrid/_PropertyGrid.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./_PropertyGrid.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/PropertyGrid/_PropertyGrid.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/RegulationNumberPage/RegnumActivity.tsx":
/*!*********************************************************************!*\
  !*** ./scripts/src/Details/RegulationNumberPage/RegnumActivity.tsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _a = __webpack_require__(/*! ../Layout/LayoutUtils */ "./scripts/src/Details/Layout/LayoutUtils.tsx"), mergeGroupedValues = _a.mergeGroupedValues, splitDoubleKeys = _a.splitDoubleKeys;
var StackBarChartTime_1 = __importDefault(__webpack_require__(/*! ../Chart/StackBarChartTime */ "./scripts/src/Details/Chart/StackBarChartTime.tsx"));
var BoxplotCategory_1 = __importDefault(__webpack_require__(/*! ../Chart/BoxplotCategory */ "./scripts/src/Details/Chart/BoxplotCategory.tsx"));
var mapStateToProps = function (state) { return ({
    results_510k: state.details.result[1],
    results_pma: state.details.result[2]
}); };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {};
};
function RegnumActivity(props) {
    var procodeYearCounts510k = props.results_510k.aggregate["product_code|year"].groups;
    var procodeYearCountsPMA = props.results_pma.aggregate["product_code|year"].groups;
    var procodeYearCounts = mergeGroupedValues(procodeYearCounts510k, procodeYearCountsPMA);
    var procodeYearCountsSplit = splitDoubleKeys(procodeYearCounts, "|");
    var procodeYearCountProps = {
        dataDict: procodeYearCountsSplit,
        margin: {
            l: 50,
            r: 0,
            b: 50,
            t: 50
        },
        titleSpecs: {
            title: "Activity"
        },
        styleSpecs: {},
        legendSpecs: {
            orientation: "h",
            x: 0,
            y: -0.1
        },
        axisSpecs: {
            xTitle: "",
            yTitle: "Yearly Count"
        }
    };
    var allItems = props.results_510k.items.concat(props.results_pma.items);
    var reviewTimeBoxProps = {
        dataArray: allItems,
        x: "product_code",
        y: "application_length",
        margin: {
            l: 50,
            r: 0,
            b: 50,
            t: 60
        },
        titleSpecs: {
            titlePosY: 1.05,
            title: "Review Time"
        },
        styleSpecs: {},
        axisSpecs: { yTitle: "Review Time (days)" }
    };
    return (react_1.default.createElement("div", { className: "col-12" },
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("h3", null, "Application Timeline"),
            "Explore a timeline of all the applications that have ever been submitted under this regulation number."),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(StackBarChartTime_1.default, __assign({}, procodeYearCountProps))),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement("h3", null, "Application Review Times"),
            "Compare review times across all the product codes within this regulation number."),
        react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(BoxplotCategory_1.default, __assign({}, reviewTimeBoxProps)))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RegnumActivity);


/***/ }),

/***/ "./scripts/src/Details/RegulationNumberPage/RegnumBreakdown.tsx":
/*!**********************************************************************!*\
  !*** ./scripts/src/Details/RegulationNumberPage/RegnumBreakdown.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _a = __webpack_require__(/*! ../Layout/LayoutUtils */ "./scripts/src/Details/Layout/LayoutUtils.tsx"), binReviewTimes = _a.binReviewTimes, binDeviceClasses = _a.binDeviceClasses;
var PieChart_1 = __importDefault(__webpack_require__(/*! src/Details/Chart/PieChart */ "./scripts/src/Details/Chart/PieChart.tsx"));
var BarChartCategory_1 = __importDefault(__webpack_require__(/*! src/Details/Chart/BarChartCategory */ "./scripts/src/Details/Chart/BarChartCategory.tsx"));
var mapStateToProps = function (state) { return ({
    results510k: state.details.result[1],
    resultsPMA: state.details.result[2],
    procodeBreakdown: state.details.result[3],
}); };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {};
};
function mergeGroupedValues(g1, g2) {
    var merged_keys = lodash_es_1.union(lodash_es_1.keys(g1), lodash_es_1.keys(g2));
    var merged = {};
    merged_keys.forEach(function (key) { return merged[key] = lodash_es_1.toSafeInteger(g1[key]) + lodash_es_1.toSafeInteger(g2[key]); });
    return merged;
}
var titleSpecs = {
    titlePosX: 0.5,
    titlePosY: 1.1,
    titleFontSize: 16
};
var styleSpecs = {
    width: "100%",
    height: "400px"
};
function RegnumBreakdown(props) {
    if (props.results510k.items.length + props.resultsPMA.items.length == 0) {
        return (react_1.default.createElement("div", null, "There have been no premarket applications submitted under this regulation number."));
    }
    else {
        var procodeCounts = mergeGroupedValues(props.results510k.aggregate.product_code.groups, props.resultsPMA.aggregate.product_code.groups);
        var reviewTimeCounts = mergeGroupedValues(props.results510k.aggregate.application_length.groups, props.resultsPMA.aggregate.application_length.groups);
        var reviewTimeBins = binReviewTimes(reviewTimeCounts);
        var appTypeCounts = {
            "510(k)": lodash_es_1.keys(props.results510k.items).length,
            "PMA": lodash_es_1.keys(props.resultsPMA.items).length
        };
        var deviceClassGroups = lodash_es_1.groupBy(props.procodeBreakdown.items, 'device_class');
        var deviceClassCounts = {};
        for (var key in deviceClassGroups) {
            deviceClassCounts[key] = deviceClassGroups[key].length;
        }
        var deviceClassBins = binDeviceClasses(deviceClassCounts);
        var productCodeChart;
        if (lodash_es_1.keys(procodeCounts).length == 1) {
            productCodeChart = null;
        }
        else {
            productCodeChart = (react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement(PieChart_1.default, { titleSpecs: __assign({ title: "Applications by Product Code" }, titleSpecs), styleSpecs: styleSpecs, dataDict: procodeCounts })));
        }
        return (react_1.default.createElement("div", { className: "row", id: "proCodePie" },
            productCodeChart,
            react_1.default.createElement("div", { className: "col-12", id: "doubleGraphRow" },
                react_1.default.createElement(BarChartCategory_1.default, { titleSpecs: __assign({ title: "Application Type" }, titleSpecs), styleSpecs: styleSpecs, dataDict: appTypeCounts }),
                react_1.default.createElement(BarChartCategory_1.default, { titleSpecs: __assign({ title: "Review Times" }, titleSpecs), styleSpecs: styleSpecs, dataDict: reviewTimeBins })),
            react_1.default.createElement("div", { className: "col-12" },
                react_1.default.createElement(BarChartCategory_1.default, { titleSpecs: __assign({ title: "Product Code Class" }, titleSpecs), styleSpecs: styleSpecs, dataDict: deviceClassBins }))));
    }
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RegnumBreakdown);


/***/ }),

/***/ "./scripts/src/Details/RegulationNumberPage/RegnumPage.scss":
/*!******************************************************************!*\
  !*** ./scripts/src/Details/RegulationNumberPage/RegnumPage.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./RegnumPage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/RegulationNumberPage/RegnumPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/RegulationNumberPage/RegnumPage.tsx":
/*!*****************************************************************!*\
  !*** ./scripts/src/Details/RegulationNumberPage/RegnumPage.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./RegnumPage.scss */ "./scripts/src/Details/RegulationNumberPage/RegnumPage.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! src/store/details/actions */ "./scripts/src/store/details/actions.ts");
var Tabs_1 = __webpack_require__(/*! src/Details/Tabs/Tabs */ "./scripts/src/Details/Tabs/Tabs.tsx");
var RegnumActivity_1 = __importDefault(__webpack_require__(/*! ./RegnumActivity */ "./scripts/src/Details/RegulationNumberPage/RegnumActivity.tsx"));
var RegnumBreakdown_1 = __importDefault(__webpack_require__(/*! ./RegnumBreakdown */ "./scripts/src/Details/RegulationNumberPage/RegnumBreakdown.tsx"));
var DescriptionTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/DescriptionTable/DescriptionTable */ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx"));
var ListTable_1 = __importDefault(__webpack_require__(/*! src/Details/Table/ListTable/ListTable */ "./scripts/src/Details/Table/ListTable/ListTable.tsx"));
var TextView_1 = __importDefault(__webpack_require__(/*! ../TextView/TextView */ "./scripts/src/Details/TextView/TextView.tsx"));
var Loading_1 = __importDefault(__webpack_require__(/*! src/Loading/Loading */ "./scripts/src/Loading/Loading.tsx"));
var lodash_es_1 = __webpack_require__(/*! lodash-es */ "./node_modules/lodash-es/lodash.js");
var mapStateToProps = function (state) { return state.details; };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        fetchData: function (e) { return dispatch(actions_1.fetchRegulationNumberData(e)); }
    };
};
var RegnumPage = (function (_super) {
    __extends(RegnumPage, _super);
    function RegnumPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegnumPage.prototype.componentDidMount = function () {
        this.props.fetchData(this.props.match.params.regulation_number);
    };
    RegnumPage.prototype.render = function () {
        if (this.props.loading) {
            return react_1.default.createElement(Loading_1.default, null);
        }
        return (react_1.default.createElement("div", { className: "col-12" },
            react_1.default.createElement(Tabs_1.Tabs, null,
                react_1.default.createElement(Tabs_1.Tab, { label: "General Information" },
                    react_1.default.createElement("div", { className: "col-12" },
                        react_1.default.createElement("h3", null, "General Information")),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        "All this information is sourced from the ",
                        react_1.default.createElement("a", { target: "_blank", href: lodash_es_1.get(this.props.result[0].item, "links.fda") }, "FDA website"),
                        " verbatim.",
                        react_1.default.createElement("br", null),
                        react_1.default.createElement("br", null),
                        react_1.default.createElement(DescriptionTable_1.default, { data: this.props.result[0].item, keys: [
                                "part", "subpart", "device_class"
                            ] }),
                        react_1.default.createElement(TextView_1.default, { data: this.props.result[0].item, keys: ["identification"] }),
                        react_1.default.createElement("strong", null,
                            this.props.result[3].items.length,
                            " Product Codes under this regulation number"),
                        react_1.default.createElement(ListTable_1.default, { data: this.props.result[3].items, headers: ["product_code", "device_name", "medical_specialty"] })),
                    react_1.default.createElement("div", { className: "col-12 col-sm-6" },
                        react_1.default.createElement("h4", null, "Application Breakdown"),
                        react_1.default.createElement(RegnumBreakdown_1.default, null))),
                react_1.default.createElement(Tabs_1.Tab, { label: "Application Data" },
                    react_1.default.createElement(RegnumActivity_1.default, null)))));
    };
    return RegnumPage;
}(react_1.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(RegnumPage);


/***/ }),

/***/ "./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss":
/*!**************************************************************!*\
  !*** ./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./SearchBoxInfo.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.tsx":
/*!*************************************************************!*\
  !*** ./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./SearchBoxInfo.scss */ "./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.scss");
function SearchBoxInfo(_a) {
    var data = _a.data;
    return (react_1.default.createElement("div", { className: "search-box-info" }, data.map(function (item, i) { return (react_1.default.createElement("div", { key: i, className: "search-box-info-item" },
        react_1.default.createElement("div", { className: "search-box-info-item-key" }, item.key),
        react_1.default.createElement("div", { className: item.value ? 'search-box-info-item-value' : 'grey-text' }, item.value || 'No Data'))); })));
}
exports.default = SearchBoxInfo;


/***/ }),

/***/ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss":
/*!**************************************************************************!*\
  !*** ./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/sass-loader/lib/loader.js!./DescriptionTable.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx":
/*!*************************************************************************!*\
  !*** ./scripts/src/Details/Table/DescriptionTable/DescriptionTable.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./DescriptionTable.scss */ "./scripts/src/Details/Table/DescriptionTable/DescriptionTable.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var constants_1 = __webpack_require__(/*! src/constants */ "./scripts/src/constants.ts");
var utils_1 = __webpack_require__(/*! src/utils */ "./scripts/src/utils/index.ts");
var TableCell_1 = __importDefault(__webpack_require__(/*! ../TableCell */ "./scripts/src/Details/Table/TableCell.tsx"));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
function DescriptionTable(props) {
    if (!props.data) {
        return null;
    }
    return (react_1.default.createElement("table", { className: "table table-sm nova_description_table" },
        react_1.default.createElement("thead", null),
        react_1.default.createElement("tbody", null, (props.keys || utils_1.exactKeys(props.data)).map(function (key) {
            return react_1.default.createElement("tr", { key: key },
                react_1.default.createElement("th", null, constants_1.OPENFDA_KEY_NAMES[key] || key),
                react_1.default.createElement("td", null,
                    react_1.default.createElement(TableCell_1.default, { keyName: key, value: props.data[key] })));
        }))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(DescriptionTable);


/***/ }),

/***/ "./scripts/src/Details/Table/ListTable/ListTable.tsx":
/*!***********************************************************!*\
  !*** ./scripts/src/Details/Table/ListTable/ListTable.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var constants_1 = __webpack_require__(/*! src/constants */ "./scripts/src/constants.ts");
var react_table_1 = __importDefault(__webpack_require__(/*! react-table */ "./node_modules/react-table/es/index.js"));
__webpack_require__(/*! react-table/react-table.css */ "./node_modules/react-table/react-table.css");
var TableCell_1 = __importDefault(__webpack_require__(/*! ../TableCell */ "./scripts/src/Details/Table/TableCell.tsx"));
var mapStateToProps = function (state) { return ({}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
function ListTable(props) {
    if (!props.data) {
        return null;
    }
    var data = props.data;
    var columns = props.headers.map(function (key) { return ({
        "Header": constants_1.OPENFDA_KEY_NAMES[key] || key,
        "accessor": key,
        "Cell": function (_a) {
            var row = _a.row;
            return react_1.default.createElement(TableCell_1.default, { keyName: key, value: row[key] });
        }
    }); });
    var pageSize = 5;
    var showPagination = data.length > pageSize;
    return (react_1.default.createElement(react_table_1.default, { filterable: true, showPagination: showPagination, minRows: 0, pageSize: pageSize, data: data, columns: columns, defaultFilterMethod: filterCaseInsensitive }));
}
function filterCaseInsensitive(filter, row) {
    var id = filter.pivotId || filter.id;
    return (row[id] !== undefined ?
        String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
        :
            true);
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ListTable);


/***/ }),

/***/ "./scripts/src/Details/Table/TableCell.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Details/Table/TableCell.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var constants_1 = __webpack_require__(/*! src/constants */ "./scripts/src/constants.ts");
function TableCell(props) {
    if (!props.value) {
        return react_1.default.createElement("span", null, "None");
    }
    if (props.keyName in constants_1.ID_FIELD_TO_SLUG) {
        return (react_1.default.createElement(react_router_dom_1.Link, { to: "/results/" + constants_1.ID_FIELD_TO_SLUG[props.keyName] + "/" + props.value }, props.value));
    }
    else if (props.keyName == "application_length") {
        return react_1.default.createElement("span", null,
            parseInt(props.value),
            " days");
    }
    else if (props.keyName == "cost") {
        return react_1.default.createElement("span", null, new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(props.value));
    }
    else if (props.keyName == "date_received") {
        var date = new Date(props.value);
        return react_1.default.createElement("span", null, date.toLocaleDateString());
    }
    return react_1.default.createElement("span", null, props.value);
}
exports.default = TableCell;


/***/ }),

/***/ "./scripts/src/Details/Tabs/Tabs.scss":
/*!********************************************!*\
  !*** ./scripts/src/Details/Tabs/Tabs.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./Tabs.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/Tabs/Tabs.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/Tabs/Tabs.tsx":
/*!*******************************************!*\
  !*** ./scripts/src/Details/Tabs/Tabs.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_tabs_1 = __webpack_require__(/*! react-bootstrap-tabs */ "./node_modules/react-bootstrap-tabs/index.js");
__webpack_require__(/*! ./Tabs.scss */ "./scripts/src/Details/Tabs/Tabs.scss");
var actions_1 = __webpack_require__(/*! src/store/details/actions */ "./scripts/src/store/details/actions.ts");
var store_1 = __importDefault(__webpack_require__(/*! src/store */ "./scripts/src/store/index.ts"));
function NovaTabs(props) {
    return react_1.default.createElement(react_bootstrap_tabs_1.Tabs, __assign({}, props, { onSelect: function (index, label) { return store_1.default.dispatch(actions_1.selectDetailTab(label)); } }));
}
exports.Tabs = NovaTabs;
function NovaTab(props) {
    if (!props.children)
        return null;
    return react_1.default.createElement(react_bootstrap_tabs_1.Tab, { label: props.label || "Tab" },
        react_1.default.createElement("div", { className: "row" }, props.children));
}
exports.Tab = NovaTab;


/***/ }),

/***/ "./scripts/src/Details/TextView/TextView.scss":
/*!****************************************************!*\
  !*** ./scripts/src/Details/TextView/TextView.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./TextView.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Details/TextView/TextView.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Details/TextView/TextView.tsx":
/*!***************************************************!*\
  !*** ./scripts/src/Details/TextView/TextView.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./TextView.scss */ "./scripts/src/Details/TextView/TextView.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var constants_1 = __webpack_require__(/*! src/constants */ "./scripts/src/constants.ts");
var utils_1 = __webpack_require__(/*! src/utils */ "./scripts/src/utils/index.ts");
var TableCell_1 = __importDefault(__webpack_require__(/*! src/Details/Table/TableCell */ "./scripts/src/Details/Table/TableCell.tsx"));
var mapStateToProps = function (state) { return state.details; };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
function TextView(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("dl", { className: props.inline ? "nova-text-view-inline" : "nova-text-view" }, (props.keys || utils_1.exactKeys(props.data)).map(function (key) {
            return react_1.default.createElement("div", { key: key },
                react_1.default.createElement("dt", null, constants_1.OPENFDA_KEY_NAMES[key]),
                react_1.default.createElement("dd", null,
                    react_1.default.createElement(TableCell_1.default, { keyName: key, value: props.data[key] })));
        }))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TextView);


/***/ }),

/***/ "./scripts/src/ErrorBoundary.tsx":
/*!***************************************!*\
  !*** ./scripts/src/ErrorBoundary.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var raven_js_1 = __importDefault(__webpack_require__(/*! raven-js */ "./node_modules/raven-js/src/singleton.js"));
;
var ErrorBoundary = (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { error: null };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
        this.setState({ error: error });
        raven_js_1.default.captureException(error, { extra: errorInfo });
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            return (react_1.default.createElement("div", { className: "snap alert alert-warning m-4 p-4" },
                react_1.default.createElement("p", null, "We're sorry \u2014 something's gone wrong."),
                react_1.default.createElement("p", null, "Our team has been notified, but we are glad to hear your report!"),
                react_1.default.createElement("button", { className: "btn", onClick: function () { return raven_js_1.default.lastEventId() && raven_js_1.default.showReportDialog(); } }, "Send us a more detailed bug report")));
        }
        else {
            return this.props.children;
        }
    };
    return ErrorBoundary;
}(react_1.default.Component));
exports.default = ErrorBoundary;


/***/ }),

/***/ "./scripts/src/Footer/Footer.scss":
/*!****************************************!*\
  !*** ./scripts/src/Footer/Footer.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./Footer.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Footer/Footer.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Footer/Footer.tsx":
/*!***************************************!*\
  !*** ./scripts/src/Footer/Footer.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./Footer.scss */ "./scripts/src/Footer/Footer.scss");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (react_1.default.createElement("section", { id: "footer" },
            react_1.default.createElement("div", { className: "container" },
                react_1.default.createElement("div", { className: "row" },
                    react_1.default.createElement("div", { className: "col-md-3 col-sm-3" },
                        react_1.default.createElement("div", { className: "footer-copyright" },
                            react_1.default.createElement("img", { src: __webpack_require__(/*! ../images/foot-logo.png */ "./scripts/src/images/foot-logo.png"), alt: "Nova Approval Home" }),
                            react_1.default.createElement("p", null, "\u00A9 Anora 2019. All Rights Reserved."))),
                    react_1.default.createElement("div", { className: "offset-md-1 col-md-8 col-sm-9" },
                        react_1.default.createElement("div", { className: "footer-links" },
                            react_1.default.createElement("ul", { className: "list-inline" },
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { href: "#" }, "Help Center")),
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { target: "_blank", href: "https://angel.co/anora-1" }, "Jobs")),
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { href: "#" }, "Contact Us")),
                                react_1.default.createElement("li", null, "\u2022"),
                                react_1.default.createElement("li", null,
                                    react_1.default.createElement("a", { href: "#" }, "Curated from US FDA Database")))))))));
    };
    return Footer;
}(react_1.Component));
exports.default = Footer;


/***/ }),

/***/ "./scripts/src/Header/DetailsHeader.tsx":
/*!**********************************************!*\
  !*** ./scripts/src/Header/DetailsHeader.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./Header.scss */ "./scripts/src/Header/Header.scss");
var DetailsHeader = (function (_super) {
    __extends(DetailsHeader, _super);
    function DetailsHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetailsHeader.prototype.render = function () {
        if (!this.props.detail_header) {
            return "";
        }
        return (react_1.default.createElement("div", { className: "row header" },
            react_1.default.createElement("div", { className: "col-10" },
                react_1.default.createElement("h2", null, this.props.detail_header.title)),
            react_1.default.createElement("div", { className: "col-2" },
                react_1.default.createElement("strong", null, this.props.detail_header.id),
                react_1.default.createElement("br", null),
                react_1.default.createElement("small", { className: "text-muted" }, this.props.detail_header.type))));
    };
    return DetailsHeader;
}(react_1.default.Component));
exports.default = DetailsHeader;


/***/ }),

/***/ "./scripts/src/Header/Header.scss":
/*!****************************************!*\
  !*** ./scripts/src/Header/Header.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./Header.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Header/Header.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Header/Header.tsx":
/*!***************************************!*\
  !*** ./scripts/src/Header/Header.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var DetailsHeader_1 = __importDefault(__webpack_require__(/*! ./DetailsHeader */ "./scripts/src/Header/DetailsHeader.tsx"));
var SearchBox_1 = __importDefault(__webpack_require__(/*! ../Search/SearchBox */ "./scripts/src/Search/SearchBox.tsx"));
var AccountHeader_1 = __importDefault(__webpack_require__(/*! ../Accounts/AccountHeader */ "./scripts/src/Accounts/AccountHeader.tsx"));
__webpack_require__(/*! ./Header.scss */ "./scripts/src/Header/Header.scss");
var mapStateToProps = function (state) { return ({
    detail_header: state.details.detail_header
}); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", { className: "row nova-header" },
            react_1.default.createElement("div", { className: "col-12 col-sm-1 nova-header-logo-container" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    react_1.default.createElement("img", { src: __webpack_require__(/*! ../img/anora-main-logo-white-text.svg */ "./scripts/src/img/anora-main-logo-white-text.svg"), alt: "Nova Approval Home", className: "nova-header-logo" }))),
            react_1.default.createElement("div", { className: "col-12 col-sm-7" },
                react_1.default.createElement(react_router_dom_1.Switch, null,
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/results', exact: true, render: function (e) {
                            return react_1.default.createElement(SearchBox_1.default, { landing: false });
                        } }),
                    react_1.default.createElement(react_router_dom_1.Route, { path: '/results', render: function (e) {
                            return react_1.default.createElement(DetailsHeader_1.default, { detail_header: _this.props.detail_header });
                        } }),
                    react_1.default.createElement(react_router_dom_1.Route, { render: function (e) {
                            return react_1.default.createElement(SearchBox_1.default, { landing: false });
                        } }))),
            react_1.default.createElement("div", { className: "col-12 col-sm-4 nova-account-header" },
                react_1.default.createElement(AccountHeader_1.default, null))));
    };
    return Header;
}(react_1.default.Component));
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Header);


/***/ }),

/***/ "./scripts/src/Landing/AnoraBody.scss":
/*!********************************************!*\
  !*** ./scripts/src/Landing/AnoraBody.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./AnoraBody.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraBody.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Landing/AnoraBody.tsx":
/*!*******************************************!*\
  !*** ./scripts/src/Landing/AnoraBody.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./AnoraBody.scss */ "./scripts/src/Landing/AnoraBody.scss");
exports.default = (function () {
    return react_1.default.createElement("div", { className: "anora-body" },
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row justify-content-center" })));
});


/***/ }),

/***/ "./scripts/src/Landing/AnoraHeader.scss":
/*!**********************************************!*\
  !*** ./scripts/src/Landing/AnoraHeader.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./AnoraHeader.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraHeader.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Landing/AnoraHeader.tsx":
/*!*********************************************!*\
  !*** ./scripts/src/Landing/AnoraHeader.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./AnoraHeader.scss */ "./scripts/src/Landing/AnoraHeader.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../store/auth/actions */ "./scripts/src/store/auth/actions.ts");
var history_1 = __importDefault(__webpack_require__(/*! ../history */ "./scripts/src/history.tsx"));
var AnoraHeader = function (props) {
    return react_1.default.createElement("nav", { className: "anora-nav" },
        react_1.default.createElement("div", { className: "col-md-2 offset-md-10 col-sm-2 offset-sm-10" },
            !props.loggedIn &&
                react_1.default.createElement("button", { className: "anora-nav-button", onClick: function () { return history_1.default.push('/auth'); } }, "Sign In"),
            props.loggedIn &&
                react_1.default.createElement("button", { className: "anora-nav-button", onClick: function () { return props.logout(); } }, "Logout")));
};
var mapStateToProps = function (state) { return (__assign({}, state.auth)); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    getProfile: function () { return dispatch(actions_1.getProfile()); },
    checkLoginStatus: function () { return dispatch(actions_1.checkLoginStatus()); },
    login: function () { return dispatch(actions_1.login()); },
    logout: function () { return dispatch(actions_1.logout()); },
    signUp: function () { return dispatch(actions_1.signUp()); }
}); };
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AnoraHeader);


/***/ }),

/***/ "./scripts/src/Landing/AnoraRowHead.scss":
/*!***********************************************!*\
  !*** ./scripts/src/Landing/AnoraRowHead.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./AnoraRowHead.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/AnoraRowHead.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Landing/AnoraRowHead.tsx":
/*!**********************************************!*\
  !*** ./scripts/src/Landing/AnoraRowHead.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var SearchBox_1 = __importDefault(__webpack_require__(/*! ../Search/SearchBox */ "./scripts/src/Search/SearchBox.tsx"));
var AuthFormContainer_1 = __importDefault(__webpack_require__(/*! ../Accounts/AuthFormContainer */ "./scripts/src/Accounts/AuthFormContainer.tsx"));
__webpack_require__(/*! ./AnoraRowHead.scss */ "./scripts/src/Landing/AnoraRowHead.scss");
exports.default = (function (props) {
    return react_1.default.createElement("div", { className: "anora-row-head" },
        react_1.default.createElement("div", { className: "my-container" },
            react_1.default.createElement("div", { className: "" },
                react_1.default.createElement("img", { src: __webpack_require__(/*! ../img/anora-main-logo-white-text.svg */ "./scripts/src/img/anora-main-logo-white-text.svg"), alt: "Nova Approval Home", className: "", width: "271px", height: "76px" }))),
        react_1.default.createElement("div", { className: "push" }, props.isAuth
            ? react_1.default.createElement(AuthFormContainer_1.default, null)
            : react_1.default.createElement(SearchBox_1.default, { autofocus: false, landing: true })));
});


/***/ }),

/***/ "./scripts/src/Landing/Landing.scss":
/*!******************************************!*\
  !*** ./scripts/src/Landing/Landing.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./Landing.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Landing/Landing.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Landing/Landing.tsx":
/*!*****************************************!*\
  !*** ./scripts/src/Landing/Landing.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./Landing.scss */ "./scripts/src/Landing/Landing.scss");
var AnoraRowHead_1 = __importDefault(__webpack_require__(/*! ./AnoraRowHead */ "./scripts/src/Landing/AnoraRowHead.tsx"));
var AnoraHeader_1 = __importDefault(__webpack_require__(/*! ./AnoraHeader */ "./scripts/src/Landing/AnoraHeader.tsx"));
var AnoraBody_1 = __importDefault(__webpack_require__(/*! ./AnoraBody */ "./scripts/src/Landing/AnoraBody.tsx"));
function Landing() {
    return (react_1.default.createElement("div", { className: "anora-page-landing" },
        react_1.default.createElement(AnoraHeader_1.default, null),
        react_1.default.createElement(AnoraRowHead_1.default, null),
        react_1.default.createElement(AnoraBody_1.default, null)));
}
exports.default = Landing;


/***/ }),

/***/ "./scripts/src/Loading/Loading.scss":
/*!******************************************!*\
  !*** ./scripts/src/Loading/Loading.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./Loading.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Loading/Loading.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Loading/Loading.tsx":
/*!*****************************************!*\
  !*** ./scripts/src/Loading/Loading.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./Loading.scss */ "./scripts/src/Loading/Loading.scss");
var Loading = function (props) { return (react_1.default.createElement("div", { className: "sk-fading-circle-container" },
    react_1.default.createElement("div", { className: "sk-fading-circle" },
        react_1.default.createElement("div", { className: "sk-circle1 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle2 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle3 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle4 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle5 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle6 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle7 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle8 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle9 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle10 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle11 sk-circle" }),
        react_1.default.createElement("div", { className: "sk-circle12 sk-circle" })))); };
exports.default = Loading;


/***/ }),

/***/ "./scripts/src/Profile/Profile.tsx":
/*!*****************************************!*\
  !*** ./scripts/src/Profile/Profile.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var sidebar_1 = __importDefault(__webpack_require__(/*! ./sidebar/sidebar */ "./scripts/src/Profile/sidebar/sidebar.tsx"));
var mySaves_1 = __importDefault(__webpack_require__(/*! ./mySaves/mySaves */ "./scripts/src/Profile/mySaves/mySaves.tsx"));
var billing_1 = __importDefault(__webpack_require__(/*! ./billing/billing */ "./scripts/src/Profile/billing/billing.tsx"));
var change_password_1 = __importDefault(__webpack_require__(/*! ./change-password/change-password */ "./scripts/src/Profile/change-password/change-password.tsx"));
var Profile = (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Profile.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
                react_1.default.createElement("div", null,
                    react_1.default.createElement("section", { id: "profile-main" },
                        react_1.default.createElement("div", { className: "container" },
                            react_1.default.createElement("div", { className: "row" },
                                react_1.default.createElement(sidebar_1.default, null),
                                react_1.default.createElement(react_router_dom_1.Switch, null,
                                    react_1.default.createElement(react_router_dom_1.Redirect, { exact: true, from: "/profile", to: "/profile/saves" }),
                                    react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/profile/saves", component: mySaves_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: "/profile/billing", component: billing_1.default }),
                                    react_1.default.createElement(react_router_dom_1.Route, { path: "/profile/password", component: change_password_1.default })))))))));
    };
    return Profile;
}(react_1.Component));
exports.default = Profile;


/***/ }),

/***/ "./scripts/src/Profile/billing/billing.scss":
/*!**************************************************!*\
  !*** ./scripts/src/Profile/billing/billing.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./billing.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/billing/billing.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Profile/billing/billing.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Profile/billing/billing.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
__webpack_require__(/*! ./billing.scss */ "./scripts/src/Profile/billing/billing.scss");
var Billing = (function (_super) {
    __extends(Billing, _super);
    function Billing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Billing.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "col-md-9 col-sm-8 col-xs-12  top-tabs comment-tabs" },
            react_1.default.createElement("div", { className: "billing_contnet_main" },
                react_1.default.createElement("h2", null, "Billing"),
                react_1.default.createElement("div", { className: "billing_content" },
                    react_1.default.createElement("div", { className: "billing_grid" },
                        react_1.default.createElement("div", { className: "row" },
                            react_1.default.createElement("div", { className: "col-md-2 col-sm-3 col-xs-12 biling_left_side_col" },
                                react_1.default.createElement("h4", null, "Current Plan")),
                            react_1.default.createElement("div", { className: "col-md-10 col-sm-9 col-xs-12 biling_right_side_col" },
                                react_1.default.createElement("div", { className: "plan_content" },
                                    react_1.default.createElement("div", { className: "row" },
                                        react_1.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-6" },
                                            react_1.default.createElement("div", { className: "trail_headline" },
                                                react_1.default.createElement("p", null, "30 Day Trial - Pro"))),
                                        react_1.default.createElement("div", { className: "col-md-6 col-sm-6 col-xs-6 col-6" },
                                            react_1.default.createElement("div", { className: "trail_expire_date text-right" },
                                                react_1.default.createElement("span", null, "Expires 6/23/19")))),
                                    react_1.default.createElement("div", { className: "plan_description" },
                                        react_1.default.createElement("div", { className: "row" },
                                            react_1.default.createElement("div", { className: "col-lg-9 col-md-8 col-sm-8" },
                                                react_1.default.createElement("div", { className: "plan_p" },
                                                    react_1.default.createElement("p", null, "Go Pro and get unlimited access to all our data sources and search results. Save your searches and even specific codes and applications for later reference."))),
                                            react_1.default.createElement("div", { className: "col-lg-3 col-md-4 col-sm-4" },
                                                react_1.default.createElement("ul", { className: "list-inline plan_uline" },
                                                    react_1.default.createElement("li", null,
                                                        react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, "Upgrade")),
                                                    react_1.default.createElement("li", null, "$49/mo"))))))))),
                    react_1.default.createElement("div", { className: "billing_grid" },
                        react_1.default.createElement("div", { className: "row" },
                            react_1.default.createElement("div", { className: "col-md-2 col-sm-3 biling_left_side_col" },
                                react_1.default.createElement("h4", null, "Payment")),
                            react_1.default.createElement("div", { className: "col-md-10 col-sm-9 biling_right_side_col" },
                                react_1.default.createElement("div", { className: "row" },
                                    react_1.default.createElement("div", { className: "col-md-8 col-sm-9 col-8" },
                                        react_1.default.createElement("ul", { className: "list-inline pull-left visa_uline" },
                                            react_1.default.createElement("li", null,
                                                react_1.default.createElement("img", { src: __webpack_require__(/*! ../../images/visa_icon.png */ "./scripts/src/images/visa_icon.png") }),
                                                "Visa ending in 3454"),
                                            react_1.default.createElement("li", null, "10/23"))),
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-3 text-right col-4" },
                                        react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "biling_change_link" }, "Change")))))),
                    react_1.default.createElement("div", { className: "billing_grid" },
                        react_1.default.createElement("div", { className: "row" },
                            react_1.default.createElement("div", { className: "col-md-2 col-sm-3 biling_left_side_col" },
                                react_1.default.createElement("h4", null, "History")),
                            react_1.default.createElement("div", { className: "col-md-10 col-sm-9 biling_right_side_col" },
                                react_1.default.createElement("div", { className: "table-responsive history_table" },
                                    react_1.default.createElement(react_bootstrap_1.Table, null,
                                        react_1.default.createElement("thead", null,
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("th", { style: { "paddingLeft": "0" } }, "DATE"),
                                                react_1.default.createElement("th", null, "PLAN"),
                                                react_1.default.createElement("th", null, "AMOUNT"),
                                                react_1.default.createElement("th", null))),
                                        react_1.default.createElement("tbody", null,
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "March 12, 2019"),
                                                react_1.default.createElement("td", null, "Team"),
                                                react_1.default.createElement("td", null, "$79"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF"))),
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "February 12, 2019"),
                                                react_1.default.createElement("td", null, "Team"),
                                                react_1.default.createElement("td", null, "$79"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF"))),
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "January 12, 2019"),
                                                react_1.default.createElement("td", null, "Team"),
                                                react_1.default.createElement("td", null, "$79"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF"))),
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "Dec 11, 2018"),
                                                react_1.default.createElement("td", null, "Pro"),
                                                react_1.default.createElement("td", null, "$25"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF"))),
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "November 11, 2018"),
                                                react_1.default.createElement("td", null, "Pro"),
                                                react_1.default.createElement("td", null, "$25"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF"))),
                                            react_1.default.createElement("tr", null,
                                                react_1.default.createElement("td", { style: { "paddingLeft": "0" } }, "October 11, 2018"),
                                                react_1.default.createElement("td", null, "Pro"),
                                                react_1.default.createElement("td", null, "$25"),
                                                react_1.default.createElement("td", { className: "text-right" },
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: '/', className: "view_pdf_link" }, "View PDF")))))))))))));
    };
    return Billing;
}(react_1.Component));
exports.default = Billing;


/***/ }),

/***/ "./scripts/src/Profile/change-password/change-password.tsx":
/*!*****************************************************************!*\
  !*** ./scripts/src/Profile/change-password/change-password.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
__webpack_require__(/*! ./changes-password.scss */ "./scripts/src/Profile/change-password/changes-password.scss");
var ChangePassword = (function (_super) {
    __extends(ChangePassword, _super);
    function ChangePassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChangePassword.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "col-md-9 col-sm-8 top-tabs comment-tabs" },
            react_1.default.createElement("div", { className: "change_password_div" },
                react_1.default.createElement("h2", null, "Change Password"),
                react_1.default.createElement(react_bootstrap_1.Form, { className: "passrd_form row" },
                    react_1.default.createElement("div", { className: "col-md-5 col-sm-6" },
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicEmail" },
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", placeholder: "Current Password" })),
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicPassword" },
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", placeholder: "New Password" })),
                        react_1.default.createElement(react_bootstrap_1.Form.Group, { controlId: "formBasicPassword" },
                            react_1.default.createElement(react_bootstrap_1.Form.Control, { type: "password", placeholder: "Confirm New Password" })),
                        react_1.default.createElement(react_bootstrap_1.Button, { className: "btn update_pass_btn", type: "submit" }, "Update Password"),
                        react_1.default.createElement("div", { className: "forgot_pass text-center" },
                            react_1.default.createElement(react_router_dom_1.Link, { to: '/' }, "I forgot my password")))))));
    };
    return ChangePassword;
}(react_1.Component));
exports.default = ChangePassword;


/***/ }),

/***/ "./scripts/src/Profile/change-password/changes-password.scss":
/*!*******************************************************************!*\
  !*** ./scripts/src/Profile/change-password/changes-password.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./changes-password.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/change-password/changes-password.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Profile/mySaves/mySaves.scss":
/*!**************************************************!*\
  !*** ./scripts/src/Profile/mySaves/mySaves.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/sass-loader/lib/loader.js!./mySaves.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Profile/mySaves/mySaves.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Profile/mySaves/mySaves.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Profile/mySaves/mySaves.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
__webpack_require__(/*! ./mySaves.scss */ "./scripts/src/Profile/mySaves/mySaves.scss");
var MySave = (function (_super) {
    __extends(MySave, _super);
    function MySave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySave.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "col-md-9 col-sm-8 top-tabs comment-tabs" },
            react_1.default.createElement(react_bootstrap_1.Tabs, { defaultActiveKey: "Searches", transition: false, id: "noanim-tab-example", className: "tabs-home" },
                react_1.default.createElement(react_bootstrap_1.Tab, { eventKey: "Searches", title: "Saved Searches" },
                    react_1.default.createElement("div", { className: "tab-pane active", id: "saved-search" },
                        react_1.default.createElement("div", { className: "main-tab" },
                            react_1.default.createElement("div", { className: "sorting-bar" },
                                react_1.default.createElement("h5", null, "6 Saved Searches"),
                                react_1.default.createElement("div", { className: "bars pull-right" },
                                    react_1.default.createElement("div", { className: "order" },
                                        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "searchBox" },
                                            react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "select" },
                                                react_1.default.createElement("option", { value: "other" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2013" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2014" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2016" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2017" }, "New Results"))),
                                        react_1.default.createElement("h5", { style: { "color": "#333" } }, "Sort By:")))),
                            react_1.default.createElement("div", { className: "clearfix" }),
                            react_1.default.createElement("div", { className: "main-tab-inner-boxes" },
                                react_1.default.createElement("div", { className: "row" },
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-6" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Pacemaker"),
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                        react_1.default.createElement("i", { className: "fa fa-external-link", "aria-hidden": "true" }))),
                                                react_1.default.createElement("div", { className: "clearfix" }),
                                                react_1.default.createElement("div", { className: "tooltip1" },
                                                    react_1.default.createElement("p", null,
                                                        react_1.default.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" }),
                                                        " \u00A02 filters"),
                                                    react_1.default.createElement("span", { className: "tooltiptext" },
                                                        "Risk Classification: ",
                                                        react_1.default.createElement("b", null, "Class III"),
                                                        react_1.default.createElement("br", null),
                                                        "Review Time: ",
                                                        react_1.default.createElement("b", null, "<90 days"),
                                                        react_1.default.createElement("br", null),
                                                        "Medical Specialties: ",
                                                        react_1.default.createElement("b", null, "Cardiovascular, Nuerology, Orthoscopy")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } }, "14 Regulation Numbers"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            "29 ",
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "Product Codes"),
                                                            " "),
                                                        react_1.default.createElement("ul", null,
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "308 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "510 Applications"))),
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "71 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "PMA Applications"))))))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Apr 5, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-6" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Catheter Ablation"),
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                        react_1.default.createElement("i", { className: "fa fa-external-link", "aria-hidden": "true" }))),
                                                react_1.default.createElement("div", { className: "clearfix" }),
                                                react_1.default.createElement("div", { className: "tooltip1" },
                                                    react_1.default.createElement("p", null,
                                                        react_1.default.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" }),
                                                        " \u00A00 filters"),
                                                    react_1.default.createElement("span", { className: "tooltiptext" },
                                                        "Risk Classification: ",
                                                        react_1.default.createElement("b", null, "Class III"),
                                                        react_1.default.createElement("br", null),
                                                        "Review Time: ",
                                                        react_1.default.createElement("b", null, "<90 days"),
                                                        react_1.default.createElement("br", null),
                                                        "Medical Specialties: ",
                                                        react_1.default.createElement("b", null, "Cardiovascular, Nuerology, Orthoscopy")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } }, "11 Regulation Numbers"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            "47 ",
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "Product Codes"),
                                                            " "),
                                                        react_1.default.createElement("ul", null,
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "136 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "510 Applications"))),
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "23 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "PMA Applications"))))))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Apr 4, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-6" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Bilateral Lumbar Fusion\u2026"),
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                        react_1.default.createElement("i", { className: "fa fa-external-link", "aria-hidden": "true" }))),
                                                react_1.default.createElement("div", { className: "clearfix" }),
                                                react_1.default.createElement("div", { className: "tooltip1" },
                                                    react_1.default.createElement("p", null,
                                                        react_1.default.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" }),
                                                        " \u00A06 filters"),
                                                    react_1.default.createElement("span", { className: "tooltiptext" },
                                                        "Risk Classification: ",
                                                        react_1.default.createElement("b", null, "Class III"),
                                                        react_1.default.createElement("br", null),
                                                        "Review Time: ",
                                                        react_1.default.createElement("b", null, "<90 days"),
                                                        react_1.default.createElement("br", null),
                                                        "Medical Specialties: ",
                                                        react_1.default.createElement("b", null, "Cardiovascular, Nuerology, Orthoscopy")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } }, "1 Regulation Numbers"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            "1 ",
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "Product Codes"),
                                                            " "),
                                                        react_1.default.createElement("ul", null,
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "2 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "510 Applications"))),
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "0 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "PMA Applications"))))))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Oct 22, 2018"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-6" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Knee Replacement"),
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                        react_1.default.createElement("i", { className: "fa fa-external-link", "aria-hidden": "true" }))),
                                                react_1.default.createElement("div", { className: "clearfix" }),
                                                react_1.default.createElement("div", { className: "tooltip1" },
                                                    react_1.default.createElement("p", null,
                                                        react_1.default.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" }),
                                                        " \u00A0Decision Year: 2014-2017"),
                                                    react_1.default.createElement("span", { className: "tooltiptext" },
                                                        "Risk Classification: ",
                                                        react_1.default.createElement("b", null, "Class III"),
                                                        react_1.default.createElement("br", null),
                                                        "Review Time: ",
                                                        react_1.default.createElement("b", null, "<90 days"),
                                                        react_1.default.createElement("br", null),
                                                        "Medical Specialties: ",
                                                        react_1.default.createElement("b", null, "Cardiovascular, Nuerology, Orthoscopy")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } }, "8 Regulation Numbers"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            "18 ",
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "Product Codes"),
                                                            " "),
                                                        react_1.default.createElement("ul", null,
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "67 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "510 Applications"))),
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "5 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "PMA Applications"))))))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Jul 9, 2018"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-4 col-sm-6" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Heart Valve"),
                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                        react_1.default.createElement("i", { className: "fa fa-external-link", "aria-hidden": "true" }))),
                                                react_1.default.createElement("div", { className: "clearfix" }),
                                                react_1.default.createElement("div", { className: "tooltip1" },
                                                    react_1.default.createElement("p", null,
                                                        react_1.default.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" }),
                                                        " \u00A03 filters"),
                                                    react_1.default.createElement("span", { className: "tooltiptext" },
                                                        "Risk Classification: ",
                                                        react_1.default.createElement("b", null, "Class III"),
                                                        react_1.default.createElement("br", null),
                                                        "Review Time: ",
                                                        react_1.default.createElement("b", null, "<90 days"),
                                                        react_1.default.createElement("br", null),
                                                        "Medical Specialties: ",
                                                        react_1.default.createElement("b", null, "Cardiovascular, Nuerology, Orthoscopy")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } }, "8 Regulation Numbers"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            "18 ",
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "Product Codes"),
                                                            " "),
                                                        react_1.default.createElement("ul", null,
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "67 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "510 Applications"))),
                                                            react_1.default.createElement("li", null,
                                                                react_1.default.createElement("p", null,
                                                                    "5 ",
                                                                    react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "PMA Applications"))))))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on May 5, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" }))))))))))))),
                react_1.default.createElement(react_bootstrap_1.Tab, { eventKey: "Items", title: "Saved Items" },
                    react_1.default.createElement("div", { className: "tab-pane", id: "saved-item" },
                        react_1.default.createElement("div", { className: "main-tab" },
                            react_1.default.createElement("div", { className: "sorting-bar" },
                                react_1.default.createElement("h5", null, "5 Saved Items"),
                                react_1.default.createElement("div", { className: "bars pull-right" },
                                    react_1.default.createElement("div", { className: "order" },
                                        react_1.default.createElement(react_bootstrap_1.Form.Group, { className: "searchBox" },
                                            react_1.default.createElement(react_bootstrap_1.Form.Control, { as: "select" },
                                                react_1.default.createElement("option", { value: "other" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2013" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2014" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2016" }, "New Results"),
                                                react_1.default.createElement("option", { value: "2017" }, "New Results"))),
                                        react_1.default.createElement("h5", { style: { "color": "#333" } }, "Sort By:")))),
                            react_1.default.createElement("div", { className: "clearfix" }),
                            react_1.default.createElement("div", { className: "main-tab-inner-boxes" },
                                react_1.default.createElement("div", { className: "row" },
                                    react_1.default.createElement("div", { className: "col-md-6 col-sm-12" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box tab-second-box yellow-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Model 5600B Programmer, Pacemaker"),
                                                    react_1.default.createElement("span", { className: "label label-warning" }, "510k")),
                                                react_1.default.createElement("div", { className: "clearfix" })),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } },
                                                    react_1.default.createElement("span", null, "870.3700"),
                                                    " Pacemaker Repair or Replacement Material"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "KRG  Programmer, Pacemaker"),
                                                            " "),
                                                        react_1.default.createElement("ul", null)))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Apr 5, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-6 col-sm-12" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box tab-second-box yellow-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Pacemakers, Vitatron's"),
                                                    react_1.default.createElement("span", { className: "label label-warning" }, "510k")),
                                                react_1.default.createElement("div", { className: "clearfix" })),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } },
                                                    react_1.default.createElement("span", null, "870.3610"),
                                                    " Pacemaker pulse generator "),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "DXY  Implantable Pacemaker Pulse-Generator"),
                                                            " "),
                                                        react_1.default.createElement("ul", null)))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Mar 28, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "clearfix" }),
                                    react_1.default.createElement("div", { className: "col-md-6 col-sm-12" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box tab-second-box blue-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "870.3640  Indirect Pacemaker Generator Function Analyzer"),
                                                    react_1.default.createElement("span", { className: "label label-info" }, "REG")),
                                                react_1.default.createElement("div", { className: "clearfix" })),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0", "fontSize": "13px" } }, "An indirect pacemaker generator function analyzer is an electrically powered device that is used to determine pacemaker function or pacemaker battery function by periodically monitor\u2026")),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Apr 5, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "col-md-6 col-sm-12" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box tab-second-box voilet-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "DXY  Implantable Pacemaker Pulse-Generator"),
                                                    react_1.default.createElement("span", { className: "label label-primary" }, "PROD")),
                                                react_1.default.createElement("div", { className: "clearfix" })),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } },
                                                    react_1.default.createElement("span", null, "870.3610"),
                                                    " Pacemaker pulse generator"),
                                                react_1.default.createElement("ul", { className: "list-inline list-generator" },
                                                    react_1.default.createElement("li", null,
                                                        react_1.default.createElement("h6", null, "Classification"),
                                                        react_1.default.createElement("h5", null, "Class III")),
                                                    react_1.default.createElement("li", null,
                                                        react_1.default.createElement("h6", null, "Medical Specialty"),
                                                        react_1.default.createElement("h5", null, "CV")),
                                                    react_1.default.createElement("li", null,
                                                        react_1.default.createElement("h6", null, "Review Panel"),
                                                        react_1.default.createElement("h5", null, "CV")))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Mar 28, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" })))))))),
                                    react_1.default.createElement("div", { className: "clearfix" }),
                                    react_1.default.createElement("div", { className: "col-md-6 col-sm-12" },
                                        react_1.default.createElement("div", { className: "main-tab-inner-box main-tab-inner-box tab-second-box pink-box" },
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-top" },
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-top-head" },
                                                    react_1.default.createElement("h4", null, "Model 5600B Programmer, Pacemaker"),
                                                    react_1.default.createElement("span", { className: "label label-danger" }, "PMA")),
                                                react_1.default.createElement("div", { className: "clearfix" })),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-middle" },
                                                react_1.default.createElement("p", { style: { "marginBottom": "0" } },
                                                    react_1.default.createElement("span", null, "870.3700"),
                                                    " Pacemaker Repair or Replacement Material"),
                                                react_1.default.createElement("ul", null,
                                                    react_1.default.createElement("li", { className: "contain-list" },
                                                        react_1.default.createElement("p", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" }, "LWP  Implantable Pulse Generator, Pacemaker (Non-Crt)"),
                                                            " "),
                                                        react_1.default.createElement("ul", null)))),
                                            react_1.default.createElement("div", { className: "main-tab-inner-box-footer" },
                                                react_1.default.createElement("h6", null, "Saved on Mar 28, 2019"),
                                                react_1.default.createElement("div", { className: "main-tab-inner-box-footer-icon" },
                                                    react_1.default.createElement("ul", { className: "list-inline" },
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-upload", "aria-hidden": "true" }))),
                                                        react_1.default.createElement("li", null,
                                                            react_1.default.createElement(react_router_dom_1.Link, { to: "/link" },
                                                                react_1.default.createElement("i", { className: "fa fa-trash-o", "aria-hidden": "true" }))))))))))))))));
    };
    return MySave;
}(react_1.Component));
exports.default = MySave;


/***/ }),

/***/ "./scripts/src/Profile/sidebar/sidebar.tsx":
/*!*************************************************!*\
  !*** ./scripts/src/Profile/sidebar/sidebar.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var SideBar = (function (_super) {
    __extends(SideBar, _super);
    function SideBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SideBar.prototype.render = function () {
        return (react_1.default.createElement("div", { className: "col-md-3 col-sm-4" },
            react_1.default.createElement("div", { className: "profile-main-avatar" },
                react_1.default.createElement("div", { className: "profile-avatar-image" },
                    react_1.default.createElement("img", { src: __webpack_require__(/*! ../../images/avatar.png */ "./scripts/src/images/avatar.png") })),
                react_1.default.createElement("div", { className: "profile-avatar-content" },
                    react_1.default.createElement("h4", null, "James Harrington"),
                    react_1.default.createElement("h5", null, "james@somecompany.com"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: '/edit' }, "Edit")),
                react_1.default.createElement("div", { className: "profile-main-list" },
                    react_1.default.createElement("div", { className: "sideMenu" },
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/profile/saves", activeClassName: "active" },
                            react_1.default.createElement("i", { className: "fas fa-save", "aria-hidden": "true" }),
                            "My Saves"),
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/profile/password", activeClassName: "active" },
                            react_1.default.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" }),
                            "Change Password"),
                        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/profile/billing", activeClassName: "active" },
                            react_1.default.createElement("i", { className: "fa fa-credit-card", "aria-hidden": "true" }),
                            "Billing"))))));
    };
    return SideBar;
}(react_1.Component));
exports.default = SideBar;


/***/ }),

/***/ "./scripts/src/Responsive.scss":
/*!*************************************!*\
  !*** ./scripts/src/Responsive.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!./Responsive.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Responsive.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/Pagination.tsx":
/*!*******************************************!*\
  !*** ./scripts/src/Search/Pagination.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var mapStateToProps = function (state) { return (__assign({}, state.search)); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
function Pagination(props) {
    if (!props.results) {
        return null;
    }
    var start = props.results.start;
    var pageSize = props.results.hits.length;
    var end = props.results.start + pageSize;
    var total = props.results.found;
    if (total == 0) {
        start = -1;
        end = 0;
    }
    return (react_1.default.createElement("div", null,
        "Showing ",
        start + 1,
        " to ",
        end,
        " of ",
        total,
        " results.",
        react_1.default.createElement("br", null),
        react_1.default.createElement("nav", { "aria-label": "Page navigation example" },
            react_1.default.createElement("ul", { className: "pagination" },
                react_1.default.createElement("li", { className: "page-item" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "?query=" + props.boxString + "&start=" + (start - pageSize + total) % total + "&filter=" + props.filter, className: "page-link", href: "#", "aria-label": "Previous" },
                        react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00AB Previous"),
                        react_1.default.createElement("span", { className: "sr-only" }, "Previous"))),
                react_1.default.createElement("li", { className: "page-item" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "?query=" + props.boxString + "&start=" + (start + pageSize + total) % total + "&filter=" + props.filter, className: "page-link", href: "#", "aria-label": "Next" },
                        react_1.default.createElement("span", { "aria-hidden": "true" }, "Next \u00BB"),
                        react_1.default.createElement("span", { className: "sr-only" }, "Next")))))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Pagination);


/***/ }),

/***/ "./scripts/src/Search/SearchBox.scss":
/*!*******************************************!*\
  !*** ./scripts/src/Search/SearchBox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchBox.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchBox.tsx":
/*!******************************************!*\
  !*** ./scripts/src/Search/SearchBox.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./SearchBox.scss */ "./scripts/src/Search/SearchBox.scss");
var react_autocomplete_1 = __importDefault(__webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js"));
var actions_1 = __webpack_require__(/*! ../store/search/actions */ "./scripts/src/store/search/actions.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
var cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"));
var mapStateToProps = function (state) { return (__assign({}, state.search, { query: state.search.boxString })); };
var mapDispatchToProps = function (dispatch, ownProps) {
    return {
        onChange: function (val) {
            dispatch(actions_1.changeSearchBoxString(val));
        },
        onSearch: function (val) {
            dispatch(actions_1.changeSearchBoxString(val));
            dispatch(react_router_redux_1.push("/results?query=" + val + "&start=" + (ownProps.start || 0)));
        }
    };
};
var SearchBox = (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            suggestions: []
        };
        return _this;
    }
    SearchBox.prototype.onChange = function (value) {
        var _this = this;
        this.props.onChange(value);
        cross_fetch_1.default("https://api.dev.anora.ai" + "/suggest?query=" + value).then(function (data) { return data.json(); })
            .then(function (data) {
            _this.setState({ suggestions: data.suggestions || [] });
        });
    };
    SearchBox.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", null, this.props.landing ? (react_1.default.createElement("form", { className: "search-box", onSubmit: function (e) { e.preventDefault(); _this.props.onSearch(_this.props.query); } },
            react_1.default.createElement(react_autocomplete_1.default, { getItemValue: function (item) { return item.suggestion; }, items: this.state.suggestions, renderItem: function (item, isHighlighted) {
                    return react_1.default.createElement("div", { key: item.id, className: "dropdown-item hidden-sm" }, item.suggestion);
                }, renderInput: function (props) {
                    return react_1.default.createElement("div", { className: "input-group" },
                        react_1.default.createElement("input", __assign({ autoFocus: _this.props.autoFocus, type: "text", className: "form-control nova-input-search", "aria-label": "Large", "aria-expanded": "false", "aria-describedby": "inputGroup-sizing-sm", placeholder: "Search by keyword, regulation number, product code, or application..." }, props)),
                        react_1.default.createElement("div", { className: "input-group-append" },
                            react_1.default.createElement("button", { className: "btn", type: "submit" },
                                react_1.default.createElement("i", { className: "fas fa-search fa-2x text-white" }))));
                }, wrapperStyle: {}, menuStyle: {
                    borderRadius: '3px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '2px 0',
                    position: 'fixed',
                    overflow: 'hidden',
                    maxHeight: '50%',
                    zIndex: 1,
                }, value: this.props.query, onChange: function (e) { return _this.onChange(e.target.value); }, onSelect: this.props.onSearch, autoHighlight: false }))) : (react_1.default.createElement("form", { className: "search-box-1", onSubmit: function (e) { e.preventDefault(); _this.props.onSearch(_this.props.query); } },
            react_1.default.createElement(react_autocomplete_1.default, { getItemValue: function (item) { return item.suggestion; }, items: this.state.suggestions, renderItem: function (item, isHighlighted) {
                    return react_1.default.createElement("div", { key: item.id, className: "dropdown-item hidden-sm" }, item.suggestion);
                }, renderInput: function (props) {
                    return react_1.default.createElement("div", { className: "input-group" },
                        react_1.default.createElement("span", { className: "input-group-prepend" },
                            react_1.default.createElement("button", { className: "btn", type: "submit" },
                                react_1.default.createElement("i", { className: "fa fa-search" }))),
                        react_1.default.createElement("input", __assign({ autoFocus: _this.props.autoFocus, style: { borderRadius: "0px 22.25px 22.25px 0px" }, type: "text", className: "form-control nova-input-search-2", "aria-label": "Small", "aria-describedby": "inputGroup-sizing-sm", placeholder: "Search by keyword, regulation number, product code, or application..." }, props)));
                }, wrapperStyle: {}, menuStyle: {
                    borderRadius: '3px',
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    padding: '2px 0',
                    position: 'fixed',
                    overflow: 'hidden',
                    maxHeight: '50%',
                    zIndex: 1,
                }, value: this.props.query, onChange: function (e) { return _this.onChange(e.target.value); }, onSelect: this.props.onSearch, autoHighlight: false })))));
    };
    return SearchBox;
}(react_1.Component));
var SearchBoxContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchBox);
exports.default = SearchBoxContainer;


/***/ }),

/***/ "./scripts/src/Search/SearchFilters.scss":
/*!***********************************************!*\
  !*** ./scripts/src/Search/SearchFilters.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchFilters.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchFilters.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchFilters.tsx":
/*!**********************************************!*\
  !*** ./scripts/src/Search/SearchFilters.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./SearchFilters.scss */ "./scripts/src/Search/SearchFilters.scss");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var ToggleButtonGroup_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButtonGroup */ "./node_modules/react-bootstrap/ToggleButtonGroup.js"));
var ToggleButton_1 = __importDefault(__webpack_require__(/*! react-bootstrap/ToggleButton */ "./node_modules/react-bootstrap/ToggleButton.js"));
var react_select_1 = __importDefault(__webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.es.js"));
__webpack_require__(/*! react-select/dist/react-select.css */ "./node_modules/react-select/dist/react-select.css");
var rc_slider_1 = __webpack_require__(/*! rc-slider */ "./node_modules/rc-slider/es/index.js");
__webpack_require__(/*! rc-slider/assets/index.css */ "./node_modules/rc-slider/assets/index.css");
__webpack_require__(/*! rc-tooltip/assets/bootstrap.css */ "./node_modules/rc-tooltip/assets/bootstrap.css");
var rc_tooltip_1 = __importDefault(__webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js"));
var actions_1 = __webpack_require__(/*! ../store/search/actions */ "./scripts/src/store/search/actions.ts");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./scripts/src/constants.ts");
var SearchResultFields_1 = __importDefault(__webpack_require__(/*! ./SearchResultFields */ "./scripts/src/Search/SearchResultFields.tsx"));
function ListGroupSubItem(props) {
    return (react_1.default.createElement("div", { className: "nova-list-group-sub-item flex-column align-items-start" },
        react_1.default.createElement("h6", null, props.title),
        react_1.default.createElement("div", { className: "mb-1" }, props.children)));
}
var Filter = (function (_super) {
    __extends(Filter, _super);
    function Filter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { open: false };
        _this.onToggle = _this.onToggle.bind(_this);
        return _this;
    }
    Filter.prototype.onToggle = function () {
        this.setState({ open: !this.state.open });
    };
    Filter.prototype.render = function () {
        var _a = this.props, label = _a.label, children = _a.children, tooltip = _a.tooltip;
        var open = this.state.open;
        return (react_1.default.createElement("div", { className: "nova-filters-left-right" },
            react_1.default.createElement("div", { className: 'filter-head' },
                react_1.default.createElement("div", { className: "nova-filters-label" }, label),
                react_1.default.createElement("div", { className: 'toggle-filter-container' },
                    react_1.default.createElement("i", { className: "toggle-filter fa " + (open ? 'fa-minus-circle' : 'fa-plus-circle'), onClick: this.onToggle }))),
            react_1.default.createElement("div", { className: "nova-filters-input-wrapper" },
                react_1.default.createElement("span", { className: "nova-filters-input" }, open && children),
                react_1.default.createElement(rc_tooltip_1.default, { placement: "left", overlay: tooltip, trigger: ['click'] },
                    react_1.default.createElement("span", null))),
            react_1.default.createElement("div", { className: "nova-filters-left-right-clearfix" })));
    };
    return Filter;
}(react_1.PureComponent));
var handle = function (props) {
    var value = props.value, dragging = props.dragging, index = props.index, restProps = __rest(props, ["value", "dragging", "index"]);
    return (react_1.default.createElement(rc_tooltip_1.default, { overlay: value, placement: "top", visible: dragging, key: index },
        react_1.default.createElement(rc_slider_1.Handle, __assign({ value: value }, restProps))));
};
var mapStateToProps = function (state) { return (__assign({}, state.search.advancedFilters)); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    onChange: function (filters) {
        dispatch(actions_1.changeAdvancedFilters(filters));
        dispatch(actions_1.fetchSearchResults());
    },
    onChangeWithoutRefreshing: function (filters) {
        dispatch(actions_1.changeAdvancedFilters(filters));
    },
    refreshing: function () {
        dispatch(actions_1.fetchSearchResults());
    },
}); };
function SearchFilters(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(SearchResultFields_1.default, null),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement("div", { className: 'all-filters' }, "FILTER")),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Decision Year", tooltip: "Decision Year Description" },
                react_1.default.createElement(rc_slider_1.Range, { min: 1980, max: 2018, value: [props.year_start, props.year_end], handle: handle, onChange: function (value) { return props.onChangeWithoutRefreshing(__assign({}, props, { year_start: value[0], year_end: value[1] })); }, onAfterChange: props.refreshing }))),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Received Date", tooltip: "Received Date Description" },
                react_1.default.createElement(react_select_1.default, { name: "medical_specialty", value: props.medical_specialty, onChange: function (value) { return props.onChange(__assign({}, props, { medical_specialty: value && value.value })); }, options: Object.keys(constants_1.MEDICAL_SPECIALTY).map(function (key) { return ({ value: constants_1.MEDICAL_SPECIALTY[key], label: constants_1.MEDICAL_SPECIALTY[key] }); }) }))),
        react_1.default.createElement(ListGroupSubItem, { title: "Premarket Applications" },
            react_1.default.createElement(Filter, { label: "Risk Classification", tooltip: "Risk Classification Description" },
                react_1.default.createElement(ToggleButtonGroup_1.default, { type: "checkbox", value: props.device_class, onChange: function (value) { return props.onChange(__assign({}, props, { device_class: value })); } },
                    react_1.default.createElement(ToggleButton_1.default, { value: "1" }, "1"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "2" }, "2"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "3" }, "3"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "U" }, "U"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "N" }, "N"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "f" }, "f")))),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Medical Specialties", tooltip: "Medical Specialties Description" },
                react_1.default.createElement(ToggleButtonGroup_1.default, { type: "checkbox", value: props.application_type, onChange: function (value) { return props.onChange(__assign({}, props, { application_type: value })); } },
                    react_1.default.createElement(ToggleButton_1.default, { value: "510k" }, "510(k)"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "pma" }, "PMA")))),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Technology", tooltip: "Technology Description" },
                react_1.default.createElement(ToggleButtonGroup_1.default, { type: "checkbox", value: props.application_type, onChange: function (value) { return props.onChange(__assign({}, props, { application_type: value })); } },
                    react_1.default.createElement(ToggleButton_1.default, { value: "510k" }, "510(k)"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "pma" }, "PMA")))),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Region", tooltip: "Region Description" },
                react_1.default.createElement(ToggleButtonGroup_1.default, { type: "checkbox", value: props.application_type, onChange: function (value) { return props.onChange(__assign({}, props, { application_type: value })); } },
                    react_1.default.createElement(ToggleButton_1.default, { value: "510k" }, "510(k)"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "pma" }, "PMA")))),
        react_1.default.createElement(ListGroupSubItem, null,
            react_1.default.createElement(Filter, { label: "Type", tooltip: "Type Description" },
                react_1.default.createElement(ToggleButtonGroup_1.default, { type: "checkbox", value: props.application_type, onChange: function (value) { return props.onChange(__assign({}, props, { application_type: value })); } },
                    react_1.default.createElement(ToggleButton_1.default, { value: "510k" }, "510(k)"),
                    react_1.default.createElement(ToggleButton_1.default, { value: "pma" }, "PMA"))))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchFilters);


/***/ }),

/***/ "./scripts/src/Search/SearchResultBox.scss":
/*!*************************************************!*\
  !*** ./scripts/src/Search/SearchResultBox.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchResultBox.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultBox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchResultBox.tsx":
/*!************************************************!*\
  !*** ./scripts/src/Search/SearchResultBox.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./SearchResultBox.scss */ "./scripts/src/Search/SearchResultBox.scss");
var SearchResultBox = function (_a) {
    var renderItem = _a.renderItem, boxName = _a.boxName, data = _a.data, loadMore = _a.loadMore;
    return (react_1.default.createElement("div", { className: "result_box" },
        react_1.default.createElement("div", { className: "result_box_header" },
            react_1.default.createElement("div", { className: "result_box_header_container" },
                react_1.default.createElement("div", { className: "result_box_header_container_counter" }, data.length),
                react_1.default.createElement("div", { className: "result_box_header_container_info" },
                    react_1.default.createElement("div", { className: "result_box_header_container_info_name" }, boxName),
                    react_1.default.createElement("div", { className: "result_box_header_container_info_showResults" }, "Show All Results")))),
        react_1.default.createElement("div", null, data.map(function (item) { return renderItem({ result: item }); })),
        (data.length > 0) && react_1.default.createElement("div", { className: "result_box-loadMore", onClick: loadMore },
            react_1.default.createElement("span", { className: "result_box-loadMore-icon" }, "\u27E9"))));
};
exports.default = SearchResultBox;


/***/ }),

/***/ "./scripts/src/Search/SearchResultFields.scss":
/*!****************************************************!*\
  !*** ./scripts/src/Search/SearchResultFields.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchResultFields.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultFields.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchResultFields.tsx":
/*!***************************************************!*\
  !*** ./scripts/src/Search/SearchResultFields.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./SearchResultFields.scss */ "./scripts/src/Search/SearchResultFields.scss");
var SearchResultFields = (function (_super) {
    __extends(SearchResultFields, _super);
    function SearchResultFields(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { selectedField: 'regulationNumbers' };
        _this.toggleField = _this.toggleField.bind(_this);
        return _this;
    }
    SearchResultFields.prototype.toggleField = function (field) {
        this.setState({
            selectedField: field
        });
    };
    SearchResultFields.prototype.render = function () {
        var _this = this;
        var selectedField = this.state.selectedField;
        return (react_1.default.createElement("div", { className: 'search-result-fields-container' },
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "field-label \n                            " + (selectedField === 'regulationNumbers' ? 'selected' : '') + "\n                        ", id: 'regulationNumbers', onClick: function (e) { return _this.toggleField(e.target.id); } },
                    "Regulation Numbers",
                    react_1.default.createElement("span", { className: 'result-count', style: {
                            backgroundColor: '#007aff',
                            right: selectedField === 'regulationNumbers' ? 20 : 35
                        } }, "12"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'dotted-border' }),
                react_1.default.createElement("div", { className: "field-label prod-code \n                            " + (selectedField === 'prodCode' ? 'selected' : '') + "\n                        ", id: 'prodCode', onClick: function (e) { return _this.toggleField(e.target.id); } },
                    "Product Codes",
                    react_1.default.createElement("span", { className: 'result-count', style: { backgroundColor: '#5856d6' } }, "29"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'dotted-border indented five-ten' }),
                react_1.default.createElement("div", { className: "field-label five-ten \n                            " + (selectedField === 'fiveTen' ? 'selected' : '') + "\n                        ", id: 'fiveTen', onClick: function (e) { return _this.toggleField(e.target.id); } },
                    "510K applications",
                    react_1.default.createElement("span", { className: 'result-count', style: { backgroundColor: '#ff9500' } }, "308"))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'dotted-border indented pma-dotted' }),
                react_1.default.createElement("div", { className: "field-label pma-app \n                            " + (selectedField === 'pmaApp' ? 'selected' : '') + "\n                        ", id: 'pmaApp', onClick: function (e) { return _this.toggleField(e.target.id); } },
                    "PMA Applications",
                    react_1.default.createElement("span", { className: 'result-count', style: { backgroundColor: '#ff58b8' } }, "71")))));
    };
    return SearchResultFields;
}(react_1.PureComponent));
exports.default = SearchResultFields;


/***/ }),

/***/ "./scripts/src/Search/SearchResultsPage.scss":
/*!***************************************************!*\
  !*** ./scripts/src/Search/SearchResultsPage.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchResultsPage.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPage.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchResultsPage.tsx":
/*!**************************************************!*\
  !*** ./scripts/src/Search/SearchResultsPage.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var SearchResultsPageTab_1 = __importDefault(__webpack_require__(/*! ./SearchResultsPageTab */ "./scripts/src/Search/SearchResultsPageTab.tsx"));
var SearchSidebar_1 = __importDefault(__webpack_require__(/*! ./SearchSidebar */ "./scripts/src/Search/SearchSidebar.tsx"));
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));
__webpack_require__(/*! ./SearchResultsPage.scss */ "./scripts/src/Search/SearchResultsPage.scss");
var actions_1 = __webpack_require__(/*! ../store/auth/actions */ "./scripts/src/store/auth/actions.ts");
var Wizard_1 = __importDefault(__webpack_require__(/*! ../Wizard/Wizard */ "./scripts/src/Wizard/Wizard.tsx"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var SaveUpdateQueryBtn = function (props) {
    return react_1.default.createElement(react_bootstrap_1.Button, { onClick: props.onClick, className: 'save-update-query-btn' },
        react_1.default.createElement("i", { className: props.icon }),
        " ",
        props.text);
};
var mapStateToProps = function (state) { return (__assign({}, state.auth, state.search, { qs_filter: query_string_1.default.parse(state.router.location.search).filter || "", query: query_string_1.default.parse(state.router.location.search).query })); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    login: function () { return dispatch(actions_1.login()); },
    onSaveUpdateQuery: function () { return console.log('save_update_clicked'); }
}); };
function SearchResultsPage(props) {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "row" }),
        react_1.default.createElement("div", { className: "row" },
            react_1.default.createElement("div", { className: 'search-result-info-container' },
                react_1.default.createElement("div", { className: 'search-result-for' },
                    "Search results for: ",
                    react_1.default.createElement("b", null, props.query)),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(SaveUpdateQueryBtn, { text: 'Save Query', icon: 'fa fa-search-plus', onClick: props.onSaveUpdateQuery }))),
            react_1.default.createElement(Wizard_1.default, null),
            react_1.default.createElement("div", { className: "nova-result-container" },
                react_1.default.createElement("div", { className: "col-sm-3 col-md-3 nova-search-sidebar-container" },
                    react_1.default.createElement(SearchSidebar_1.default, null)),
                react_1.default.createElement("div", { className: 'col-sm-9 col-md-9' },
                    true ? null : (undefined),
                    react_1.default.createElement(SearchResultsPageTab_1.default, null))))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchResultsPage);


/***/ }),

/***/ "./scripts/src/Search/SearchResultsPageTab.scss":
/*!******************************************************!*\
  !*** ./scripts/src/Search/SearchResultsPageTab.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchResultsPageTab.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchResultsPageTab.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchResultsPageTab.tsx":
/*!*****************************************************!*\
  !*** ./scripts/src/Search/SearchResultsPageTab.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
__webpack_require__(/*! ./SearchResultsPageTab.scss */ "./scripts/src/Search/SearchResultsPageTab.scss");
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var actions_1 = __webpack_require__(/*! ../store/search/actions */ "./scripts/src/store/search/actions.ts");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));
var Loading_1 = __importDefault(__webpack_require__(/*! ../Loading/Loading */ "./scripts/src/Loading/Loading.tsx"));
var SearchBoxInfo_1 = __importDefault(__webpack_require__(/*! ../Details/SearchBoxInfo/SearchBoxInfo */ "./scripts/src/Details/SearchBoxInfo/SearchBoxInfo.tsx"));
var SearchResultBox_1 = __importDefault(__webpack_require__(/*! ./SearchResultBox */ "./scripts/src/Search/SearchResultBox.tsx"));
var Pagination_1 = __importDefault(__webpack_require__(/*! ./Pagination */ "./scripts/src/Search/Pagination.tsx"));
var mapStateToProps = function (state) { return (__assign({}, state.search, { query: query_string_1.default.parse(state.router.location.search).query, qs_start: parseInt(query_string_1.default.parse(state.router.location.search).start || 0), qs_filter: query_string_1.default.parse(state.router.location.search).filter || "" })); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({
    onQueryUpdate: function () { return dispatch(actions_1.fetchSearchResults()); },
    changeStart: function (i) { return dispatch(actions_1.changeStart(i)); },
    changeFilter: function (i) { return dispatch(actions_1.changeFilter(i)); }
}); };
var DB_TYPES = {
    "product_code": { "title": "Product Code", "slug": "product_code", "component": ProductCode },
    "510k": { "title": "510(k)", "slug": "510k", "component": Five10K },
    "pma": { "title": "PMA", "slug": "pma", "component": PMA },
    "regulation_number": { "title": "Regulation Number", "slug": "regulation_number", "component": RegulationNumber }
};
var SearchResultsPageTab = (function (_super) {
    __extends(SearchResultsPageTab, _super);
    function SearchResultsPageTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchResultsPageTab.prototype.componentDidMount = function () {
        actions_1.changeStart(this.props.start);
        this.props.changeFilter(this.props.qs_filter);
        this.props.onQueryUpdate();
    };
    SearchResultsPageTab.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevProps.query !== this.props.query ||
            prevProps.start !== this.props.qs_start ||
            prevProps.filter !== this.props.qs_filter) {
            this.props.changeStart(this.props.qs_start);
            this.props.changeFilter(this.props.qs_filter);
            this.props.onQueryUpdate();
        }
    };
    SearchResultsPageTab.prototype.onSaveUpdateQuery = function () {
    };
    SearchResultsPageTab.prototype.render = function () {
        if (!this.props.loading && !this.props.results.hits.length) {
            return react_1.default.createElement("div", { className: "mt-4" }, "No results found.");
        }
        var prod_code_items = [];
        var five10k_items = [];
        var pma_items = [];
        var regulation_number_items = [];
        {
            this.props.results && this.props.results.hits.map(function (result) {
                switch (result.fields.type) {
                    case ("product_code"):
                        prod_code_items.push(result);
                        break;
                    case ("510k"):
                        five10k_items.push(result);
                        break;
                    case ("pma"):
                        pma_items.push(result);
                        break;
                    case ("regulation_number"):
                        regulation_number_items.push(result);
                        break;
                    default:
                        break;
                }
            });
        }
        return (react_1.default.createElement("div", { className: "row" },
            this.props.loading && react_1.default.createElement(Loading_1.default, null),
            this.props.results && this.props.results.hits && react_1.default.createElement("div", { className: "search-results" },
                react_1.default.createElement(SearchResultBox_1.default, { data: regulation_number_items, renderItem: RegulationNumber, boxName: "Regulation Number" }),
                react_1.default.createElement(SearchResultBox_1.default, { data: prod_code_items, renderItem: ProductCode, boxName: "Product Codes" }),
                react_1.default.createElement(SearchResultBox_1.default, { data: five10k_items, renderItem: Five10K, boxName: "510k Applications" }),
                react_1.default.createElement(SearchResultBox_1.default, { data: pma_items, renderItem: PMA, boxName: "PMA Applications" }),
                react_1.default.createElement(Pagination_1.default, null))));
    };
    return SearchResultsPageTab;
}(react_1.Component));
function ProductCode(_a) {
    var result = _a.result;
    var info = [
        {
            key: 'Classification',
            value: "Class " + result.fields.device_class,
        },
        {
            key: 'Regulation Medical Specialty',
            value: result.fields.medical_specialty,
        },
        {
            key: 'Regulation Review Panel',
            value: result.fields.primary,
        },
        {
            key: '510(K) Applications',
            value: null,
        },
        {
            key: 'PMA Applications',
            value: null,
        },
    ];
    return (react_1.default.createElement("div", { key: result.id, className: "one-result-pc" },
        react_1.default.createElement("div", { className: "one-result-pc-header" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/results/product_code/" + result.fields.primary },
                react_1.default.createElement("span", { className: "one-result-pc-number" }, result.fields.regulation_number),
                react_1.default.createElement("span", { className: "one-result-pc-arrow" }, "\u27E9"),
                react_1.default.createElement("span", { className: "one-result-pc-name" }, result.fields.title))),
        react_1.default.createElement(SearchBoxInfo_1.default, { data: info })));
}
function Five10K(_a) {
    var result = _a.result;
    var info = [
        {
            key: 'Estimated Cost',
            value: "$46,000.00",
        },
        {
            key: 'Review Time',
            value: '56 Days',
        },
        {
            key: 'Decision Date',
            value: new Date(Date.parse(result.fields.date_received)).toLocaleDateString(),
        },
        {
            key: 'Classification',
            value: "Class " + result.fields.device_class,
        },
        {
            key: 'Advisory Committee',
            value: result.fields.medical_specialty_description,
        },
        {
            key: 'Clearance Type',
            value: null,
        },
    ];
    return (react_1.default.createElement("div", { key: result.id, className: "one-result-510k" },
        react_1.default.createElement("div", { className: "one-result-510k-header" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/results/510k/" + result.fields.primary },
                    react_1.default.createElement("span", { className: "one-result-510k-text" }, result.fields.regulation_number),
                    react_1.default.createElement("span", { className: "one-result-510k-arrow" }, "\u27E9"),
                    react_1.default.createElement("span", { className: "one-result-510k-text" }, result.fields.product_code + " " + result.fields.title)),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/results/510k/" + result.fields.primary },
                    react_1.default.createElement("div", { className: "one-result-510k-subHeader" }, result.fields.primary + " " + result.fields.title))),
            react_1.default.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Medtronic_logo.svg/1280px-Medtronic_logo.svg.png", className: "one-result-510k-header-companyLogo" })),
        react_1.default.createElement(SearchBoxInfo_1.default, { data: info })));
}
function PMA(_a) {
    var result = _a.result;
    var info = [
        {
            key: 'Estimated Cost',
            value: "$46,000.00",
        },
        {
            key: 'Review Time',
            value: '56 Days',
        },
        {
            key: 'Decision Date',
            value: new Date(Date.parse(result.fields.date_received)).toLocaleDateString(),
        },
        {
            key: 'Classification',
            value: "Class " + result.fields.device_class,
        },
        {
            key: 'Advisory Committee',
            value: result.fields.medical_specialty_description,
        },
        {
            key: 'Clearance Type',
            value: null,
        },
    ];
    return (react_1.default.createElement("div", { key: result.id, className: "one-result-pma" },
        react_1.default.createElement("div", { className: "one-result-pma-header" },
            react_1.default.createElement("div", null,
                react_1.default.createElement(react_router_dom_1.Link, { to: "/results/pma/" + result.fields.primary },
                    react_1.default.createElement("span", { className: "one-result-pma-text" }, result.fields.regulation_number),
                    react_1.default.createElement("span", { className: "one-result-pma-arrow" }, "\u27E9"),
                    react_1.default.createElement("span", { className: "one-result-pma-text" }, result.fields.product_code + " " + result.fields.title)),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/results/pma/" + result.fields.primary },
                    react_1.default.createElement("div", { className: "one-result-pma-subHeader" }, result.fields.primary + " " + result.fields.title))),
            react_1.default.createElement("img", { src: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Medtronic_logo.svg/1280px-Medtronic_logo.svg.png", className: "one-result-pma-header-companyLogo" })),
        react_1.default.createElement(SearchBoxInfo_1.default, { data: info })));
}
function RegulationNumber(_a) {
    var result = _a.result;
    return (react_1.default.createElement("div", { key: result.id, className: "one-result-rn" },
        react_1.default.createElement("span", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/results/regulation_number/" + result.fields.primary },
                react_1.default.createElement("span", { className: "one-result-rn-header" },
                    result.fields.regulation_number,
                    " ",
                    result.fields.title))),
        react_1.default.createElement("div", { className: "one-result-rn-description" }, "A pacemaker repair or replacement material is an adhesive, a sealant, a screw, a crimp, or any other material used to repair a pacemaker lead or to reconnect a pacemaker lead to a pacemaker pulse generator.")));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchResultsPageTab);


/***/ }),

/***/ "./scripts/src/Search/SearchSidebar.scss":
/*!***********************************************!*\
  !*** ./scripts/src/Search/SearchSidebar.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./SearchSidebar.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Search/SearchSidebar.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/Search/SearchSidebar.tsx":
/*!**********************************************!*\
  !*** ./scripts/src/Search/SearchSidebar.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var Pagination_1 = __importDefault(__webpack_require__(/*! ./Pagination */ "./scripts/src/Search/Pagination.tsx"));
var SearchFilters_1 = __importDefault(__webpack_require__(/*! ./SearchFilters */ "./scripts/src/Search/SearchFilters.tsx"));
__webpack_require__(/*! ./SearchSidebar.scss */ "./scripts/src/Search/SearchSidebar.scss");
var mapStateToProps = function (state) { return (__assign({}, state.search)); };
var mapDispatchToProps = function (dispatch, ownProps) { return ({}); };
function ListGroupItem(props) {
    return (react_1.default.createElement("div", { className: "list-group-item flex-column align-items-start" },
        react_1.default.createElement("div", { className: "d-flex w-100 justify-content-between" },
            react_1.default.createElement("div", { className: "mb-1 group-title" }, props.title),
            react_1.default.createElement("small", null)),
        react_1.default.createElement("div", { className: "mb-1" }, props.children),
        react_1.default.createElement("small", null)));
}
function SearchSidebar(props) {
    return (react_1.default.createElement("div", { className: "list-group" },
        react_1.default.createElement(SearchFilters_1.default, null),
        props.results && react_1.default.createElement(ListGroupItem, { title: props.results.found + " results found" },
            react_1.default.createElement(Pagination_1.default, null))));
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SearchSidebar);


/***/ }),

/***/ "./scripts/src/Survey/Survey.tsx":
/*!***************************************!*\
  !*** ./scripts/src/Survey/Survey.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Survey = __importStar(__webpack_require__(/*! survey-react */ "./node_modules/survey-react/survey.react.js"));
__webpack_require__(/*! survey-react/survey.css */ "./node_modules/survey-react/survey.css");
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var sendDataToServer = function (survey) {
    survey.setValue('path', window.location.href);
    survey.sendResult('1088cb26-71a2-4491-83e3-66cd90dc3bad');
};
var SurveyComponent = (function (_super) {
    __extends(SurveyComponent, _super);
    function SurveyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onComplete = function (survey) {
            sendDataToServer(survey);
            _this.props.onComplete && _this.props.onComplete();
        };
        return _this;
    }
    SurveyComponent.prototype.componentWillMount = function () {
        Survey.Survey.cssType = "bootstrap";
        Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
    };
    SurveyComponent.prototype.render = function () {
        var json = {
            completedHtml: "Thank you for giving us your feedback!",
            completeText: "Submit",
            elements: [
                {
                    type: "comment",
                    name: "comment",
                    description: "Do you have any comments about how we can improve Nova Search?",
                    isRequired: true,
                    titleLocation: "hidden",
                    placeHolder: "Do you have any comments about how we can improve Nova Search?"
                },
                {
                    type: "text",
                    name: "email",
                    titleLocation: "hidden",
                    inputType: "email",
                    placeHolder: "Your email (optional)",
                },
            ],
        };
        return react_1.default.createElement(Survey.Survey, { json: json, onComplete: this._onComplete });
    };
    return SurveyComponent;
}(react_1.Component));
exports.default = SurveyComponent;


/***/ }),

/***/ "./scripts/src/Survey/SurveyModal.tsx":
/*!********************************************!*\
  !*** ./scripts/src/Survey/SurveyModal.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_modal_1 = __importDefault(__webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js"));
var Survey_1 = __importDefault(__webpack_require__(/*! ./Survey */ "./scripts/src/Survey/Survey.tsx"));
var customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: 300,
    },
    content: {
        top: 'calc(40% + 50px)',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};
var SurveyModal = (function (_super) {
    __extends(SurveyModal, _super);
    function SurveyModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { shown: false };
        _this._onClose = function () { return _this.setState({ shown: false }); };
        _this.show = function () { return _this.setState({ shown: true }); };
        return _this;
    }
    SurveyModal.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(react_modal_1.default, { isOpen: this.state.shown, onRequestClose: this._onClose, contentLabel: "Send us feedback", style: customStyles, appElement: document.body },
                react_1.default.createElement("h2", null, "Send us feedback"),
                react_1.default.createElement("button", { type: "button", className: "close", "aria-label": "Close", onClick: this._onClose },
                    " ",
                    react_1.default.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                react_1.default.createElement(Survey_1.default, { onComplete: function () { return setTimeout(_this._onClose, 1500); } }))));
    };
    return SurveyModal;
}(react_1.Component));
exports.default = SurveyModal;


/***/ }),

/***/ "./scripts/src/Wizard/Wizard.tsx":
/*!***************************************!*\
  !*** ./scripts/src/Wizard/Wizard.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_bootstrap_1 = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
__webpack_require__(/*! ./wizard.scss */ "./scripts/src/Wizard/wizard.scss");
function Wizard() {
    return (react_1.default.createElement("div", { className: "wizard-container" },
        react_1.default.createElement(react_bootstrap_1.Row, null,
            react_1.default.createElement(react_bootstrap_1.Col, { md: 3, sm: 12 },
                react_1.default.createElement("div", { className: "wizard-container-button" },
                    react_1.default.createElement("img", { src: __webpack_require__(/*! ../img/wizard_stick.png */ "./scripts/src/img/wizard_stick.png"), className: "wizard-container-button-img" }),
                    react_1.default.createElement("span", { className: "wizard-container-button-text" }, "Anora Wizard"))),
            react_1.default.createElement(react_bootstrap_1.Col, { md: 3, sm: 12 },
                react_1.default.createElement(WizardInfoItem, { value: "$31,837", name: "Avg. Calculated Cost" })),
            react_1.default.createElement(react_bootstrap_1.Col, { md: 3, sm: 12 },
                react_1.default.createElement(WizardInfoItem, { value: "206", name: "Days Avg Review Time" })),
            react_1.default.createElement(react_bootstrap_1.Col, { md: 3, sm: 12 },
                react_1.default.createElement(WizardInfoItem, { value: "106", name: "Applications last 12 months" })))));
}
function WizardInfoItem(props) {
    return (react_1.default.createElement("div", { className: "wizard-info-item" },
        react_1.default.createElement("span", { className: "wizard-info-item-value" }, props.value),
        react_1.default.createElement("span", { className: "wizard-info-item-name" }, props.name)));
}
exports.default = Wizard;


/***/ }),

/***/ "./scripts/src/Wizard/wizard.scss":
/*!****************************************!*\
  !*** ./scripts/src/Wizard/wizard.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!./wizard.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./scripts/src/Wizard/wizard.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./scripts/src/constants.ts":
/*!**********************************!*\
  !*** ./scripts/src/constants.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OPENFDA_KEY_NAMES;
(function (OPENFDA_KEY_NAMES) {
    OPENFDA_KEY_NAMES["device_class"] = "Device Classification";
    OPENFDA_KEY_NAMES["regulation_number"] = "Regulation Number";
    OPENFDA_KEY_NAMES["medical_specialty"] = "Regulation Medical Specialty";
    OPENFDA_KEY_NAMES["medical_specialty_description"] = "Regulation Medical Specialty";
    OPENFDA_KEY_NAMES["review_panel"] = "Regulation Review Panel";
    OPENFDA_KEY_NAMES["definition"] = "Definition";
    OPENFDA_KEY_NAMES["description"] = "Description";
    OPENFDA_KEY_NAMES["PHYSICALSTATE"] = "Physical State";
    OPENFDA_KEY_NAMES["TECHNICALMETHOD"] = "Technical Method";
    OPENFDA_KEY_NAMES["TARGETAREA"] = "Target Area";
    OPENFDA_KEY_NAMES["gmp_exempt_flag"] = "GMP Exempt";
    OPENFDA_KEY_NAMES["life_sustain_support_flag"] = "Life Sustain Support";
    OPENFDA_KEY_NAMES["implant_flag"] = "Implant";
    OPENFDA_KEY_NAMES["third_party_flag"] = "Third Party";
    OPENFDA_KEY_NAMES["decision_code"] = "Decision Code";
    OPENFDA_KEY_NAMES["applicant"] = "Applicant";
    OPENFDA_KEY_NAMES["generic_name"] = "Generic Name";
    OPENFDA_KEY_NAMES["product_code"] = "Product Code";
    OPENFDA_KEY_NAMES["product_codes"] = "Product Codes";
    OPENFDA_KEY_NAMES["docket_number"] = "Docket Number";
    OPENFDA_KEY_NAMES["advisory_committee_description"] = "Advisory Committee";
    OPENFDA_KEY_NAMES["ao_statement"] = "Approval Order Statement";
    OPENFDA_KEY_NAMES["device_name"] = "Device Name";
    OPENFDA_KEY_NAMES["cfr_part"] = "CFR (part)";
    OPENFDA_KEY_NAMES["cfr_subpart"] = "CFR (subpart)";
    OPENFDA_KEY_NAMES["classification"] = "Classification";
    OPENFDA_KEY_NAMES["identification"] = "Identification";
    OPENFDA_KEY_NAMES["k_number"] = "K number";
    OPENFDA_KEY_NAMES["decision_date"] = "Decision Date";
    OPENFDA_KEY_NAMES["date_received"] = "Date Received";
    OPENFDA_KEY_NAMES["application_length"] = "Application Length";
    OPENFDA_KEY_NAMES["pma_number"] = "PMA Number";
    OPENFDA_KEY_NAMES["part"] = "Part";
    OPENFDA_KEY_NAMES["subpart"] = "Subpart";
    OPENFDA_KEY_NAMES["decision_description"] = "Decision Description";
    OPENFDA_KEY_NAMES["clearance_type"] = "Clearance Type";
    OPENFDA_KEY_NAMES["statement_or_summary"] = "Statement or Summary?";
    OPENFDA_KEY_NAMES["cost"] = "Estimated Cost";
})(OPENFDA_KEY_NAMES = exports.OPENFDA_KEY_NAMES || (exports.OPENFDA_KEY_NAMES = {}));
;
var ID_FIELD_TO_SLUG;
(function (ID_FIELD_TO_SLUG) {
    ID_FIELD_TO_SLUG["k_number"] = "510k";
    ID_FIELD_TO_SLUG["pma_number"] = "pma";
    ID_FIELD_TO_SLUG["product_code"] = "product_code";
    ID_FIELD_TO_SLUG["regulation_number"] = "regulation_number";
})(ID_FIELD_TO_SLUG = exports.ID_FIELD_TO_SLUG || (exports.ID_FIELD_TO_SLUG = {}));
var MEDICAL_SPECIALTY;
(function (MEDICAL_SPECIALTY) {
    MEDICAL_SPECIALTY["AN"] = "Anesthesiology";
    MEDICAL_SPECIALTY["CV"] = "Cardiovascular";
    MEDICAL_SPECIALTY["CH"] = "Clinical Chemistry";
    MEDICAL_SPECIALTY["DE"] = "Dental";
    MEDICAL_SPECIALTY["EN"] = "Ear, Nose, Throat";
    MEDICAL_SPECIALTY["GU"] = "Gastroenterology, Urology";
    MEDICAL_SPECIALTY["HO"] = "General Hospital";
    MEDICAL_SPECIALTY["HE"] = "Hematology";
    MEDICAL_SPECIALTY["IM"] = "Immunology";
    MEDICAL_SPECIALTY["MI"] = "Microbiology";
    MEDICAL_SPECIALTY["NE"] = "Neurology";
    MEDICAL_SPECIALTY["OB"] = "Obstetrics/Gynecology";
    MEDICAL_SPECIALTY["OP"] = "Ophthalmic";
    MEDICAL_SPECIALTY["OR"] = "Orthopedic";
    MEDICAL_SPECIALTY["PA"] = "Pathology";
    MEDICAL_SPECIALTY["PM"] = "Physical Medicine";
    MEDICAL_SPECIALTY["RA"] = "Radiology";
    MEDICAL_SPECIALTY["SU"] = "General, Plastic Surgery";
    MEDICAL_SPECIALTY["TX"] = "Clinical Toxicology";
})(MEDICAL_SPECIALTY = exports.MEDICAL_SPECIALTY || (exports.MEDICAL_SPECIALTY = {}));


/***/ }),

/***/ "./scripts/src/history.tsx":
/*!*********************************!*\
  !*** ./scripts/src/history.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createBrowserHistory_1 = __importDefault(__webpack_require__(/*! history/createBrowserHistory */ "./node_modules/history/createBrowserHistory.js"));
var history = createBrowserHistory_1.default();
exports.default = history;


/***/ }),

/***/ "./scripts/src/images/avatar.png":
/*!***************************************!*\
  !*** ./scripts/src/images/avatar.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5f92255b37e341a0638e2243bd205832.png";

/***/ }),

/***/ "./scripts/src/images/foot-logo.png":
/*!******************************************!*\
  !*** ./scripts/src/images/foot-logo.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "763e096f4fd31127b9eddda36414c8ea.png";

/***/ }),

/***/ "./scripts/src/images/visa_icon.png":
/*!******************************************!*\
  !*** ./scripts/src/images/visa_icon.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8203f61924f2cbf7dc2c1dac65ca306b.png";

/***/ }),

/***/ "./scripts/src/img/anora-logogram@5x.png":
/*!***********************************************!*\
  !*** ./scripts/src/img/anora-logogram@5x.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ba40986566286e19ac98006b4cc03daa.png";

/***/ }),

/***/ "./scripts/src/img/anora-main-logo-white-text.svg":
/*!********************************************************!*\
  !*** ./scripts/src/img/anora-main-logo-white-text.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a95fc56fce96d9ba0c8ce177e7fa16ce.svg";

/***/ }),

/***/ "./scripts/src/img/blur.png":
/*!**********************************!*\
  !*** ./scripts/src/img/blur.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f3545a467714292abf62d496c4addcdd.png";

/***/ }),

/***/ "./scripts/src/img/down-arrow.png":
/*!****************************************!*\
  !*** ./scripts/src/img/down-arrow.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7aaaca69e7bb271e9c24cf6257d3f03c.png";

/***/ }),

/***/ "./scripts/src/img/wizard_stick.png":
/*!******************************************!*\
  !*** ./scripts/src/img/wizard_stick.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "489cfcf71370418ce8c5a2426d455dde.png";

/***/ }),

/***/ "./scripts/src/index.tsx":
/*!*******************************!*\
  !*** ./scripts/src/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
var App_1 = __importDefault(__webpack_require__(/*! ./App */ "./scripts/src/App.tsx"));
switch ("dev") {
    case "dev":
    case "beta":
    case "prod":
    default:
        break;
}
react_dom_1.default.render(react_1.default.createElement(App_1.default, null), document.getElementById('main'));


/***/ }),

/***/ "./scripts/src/store/auth/actions.ts":
/*!*******************************************!*\
  !*** ./scripts/src/store/auth/actions.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Auth_1 = __importDefault(__webpack_require__(/*! ../../Accounts/Auth */ "./scripts/src/Accounts/Auth.tsx"));
exports.loggedIn = function () { return ({
    type: 'LOGIN_SUCCESS',
}); };
exports.loggedOut = function () { return ({
    type: 'LOGOUT_SUCCESS'
}); };
exports.renderProfile = function (profileData) { return ({
    type: 'RENDER_PROFILE',
    profileData: profileData
}); };
function login() {
    return function (dispatch) {
        Auth_1.default.login(function () { return dispatch(exports.loggedIn()); });
    };
}
exports.login = login;
function signUp() {
    return function (dispatch) {
        Auth_1.default.signUp(function () { return dispatch(exports.loggedIn()); });
    };
}
exports.signUp = signUp;
function logout() {
    return function (dispatch) {
        console.log("logout called");
        Auth_1.default.logout(function () { return dispatch(exports.loggedOut()); });
    };
}
exports.logout = logout;
function getProfile() {
    return function (dispatch) {
        Auth_1.default.getProfile(function (err, profileData) {
            dispatch(exports.renderProfile(profileData));
        });
    };
}
exports.getProfile = getProfile;
function checkLoginStatus() {
    return function (dispatch) {
        return Auth_1.default.isAuthenticated().then(function (isAuth) {
            dispatch((isAuth ? exports.loggedIn : exports.loggedOut)());
            return isAuth;
        });
    };
}
exports.checkLoginStatus = checkLoginStatus;


/***/ }),

/***/ "./scripts/src/store/auth/reducer.ts":
/*!*******************************************!*\
  !*** ./scripts/src/store/auth/reducer.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var initialState = {
    loggedIn: false,
    profileData: null
};
var auth = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return __assign({}, state, { loggedIn: true });
        case 'LOGOUT_SUCCESS':
            return __assign({}, state, { loggedIn: false });
        case 'RENDER_PROFILE':
            return __assign({}, state, { profileData: action.profileData });
        default:
            return state;
    }
};
exports.default = auth;


/***/ }),

/***/ "./scripts/src/store/details/actions.ts":
/*!**********************************************!*\
  !*** ./scripts/src/store/details/actions.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"));
var utils_1 = __webpack_require__(/*! src/utils */ "./scripts/src/utils/index.ts");
exports.fetchDetailStart = function () { return ({
    type: 'FETCH_DETAIL_START',
}); };
exports.selectDetailTab = function (tabLabel) { return ({
    type: 'SELECT_DETAIL_TAB',
    tabLabel: tabLabel,
}); };
exports.fetchDetailSuccess = function (result, detail_header) { return ({
    type: 'FETCH_DETAIL_SUCCESS',
    result: result,
    detail_header: detail_header
}); };
function fetchProductCodeData(product_code) {
    var adverseTypeCondition = "Initial submission";
    return function (dispatch) {
        dispatch(exports.fetchDetailStart());
        utils_1.retryPromise(function () { return Promise.all([
            cross_fetch_1.default("https://api.dev.anora.ai" + "/product_code/" + product_code).then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/510k/list?product_code=" + product_code + "&project=application_length,date_received,device_class,device_name,applicant,k_number,decision_date&aggregate=year").then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/pma/list?product_code=" + product_code + "&supplement_number=&project=application_length,date_received,decision_date,trade_name,generic_name,pma_number&aggregate=year").then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/recall/list?product_code=" + product_code + "&project=root_cause_description,event_date_terminated&aggregate=root_cause_description,root_cause_description%7Cyear").then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/device_event/list?product_code=" + product_code + "&type_of_report=" + adverseTypeCondition + "&project=adverse_event_flag,event_type&aggregate=adverse_event_flag,device_operator,event_type%7Cyear").then(function (data) { return data.json(); })
        ]); }, function (data) {
            var detail_header = { "id": product_code, "type": "Product Code", "title": data[0].item.device_name };
            dispatch(exports.fetchDetailSuccess(data, detail_header));
        }, function (err) { return console.log('error.', err); });
    };
}
exports.fetchProductCodeData = fetchProductCodeData;
function fetchRegulationNumberData(regulation_number) {
    return function (dispatch) {
        dispatch(exports.fetchDetailStart());
        utils_1.retryPromise(function () { return Promise.all([
            cross_fetch_1.default("https://api.dev.anora.ai" + "/regulation_number/" + regulation_number).then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/510k/list?regulation_number=" + regulation_number + "&project=product_code,date_received,application_length,device_class&aggregate=product_code,application_length,year,product_code%7Cyear").then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/pma/list?regulation_number=" + regulation_number + "&project=product_code,date_received,application_length,device_class&aggregate=product_code,application_length,year,product_code%7Cyear").then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/product_code/list?regulation_number=" + regulation_number + "&project=product_code,device_class,medical_specialty_description,device_name").then(function (data) { return data.json(); }),
        ]); }, function (data) {
            var detail_header = { "id": regulation_number, "type": "Regulation Number", "title": regulation_number };
            dispatch(exports.fetchDetailSuccess(data, detail_header));
        }, function (err) { return console.log('error.', err); });
    };
}
exports.fetchRegulationNumberData = fetchRegulationNumberData;
function fetchFive10KData(k_number) {
    return function (dispatch) {
        dispatch(exports.fetchDetailStart());
        var results = [];
        utils_1.retryPromise(function () { return Promise.all([
            cross_fetch_1.default("https://api.dev.anora.ai" + "/510k/" + k_number).then(function (data) { return data.json(); })
        ])
            .then(function (data) {
            results = data;
        })
            .then(function (e) { return cross_fetch_1.default("https://api.dev.anora.ai" + "/510k/list?product_code=" + results[0].item.product_code + "&aggregate=application_length"); }).then(function (data) { return data.json(); }); }, function (data) {
            results.push(data);
            var detail_header = { "id": k_number, "type": "510(K)", "title": results[0].item.device_name };
            dispatch(exports.fetchDetailSuccess(results, detail_header));
        }, function (err) { return console.log('error.', err); });
    };
}
exports.fetchFive10KData = fetchFive10KData;
function fetchPMAData(pma_number) {
    return function (dispatch) {
        dispatch(exports.fetchDetailStart());
        var results = [];
        utils_1.retryPromise(function () { return Promise.all([
            cross_fetch_1.default("https://api.dev.anora.ai" + "/pma/" + pma_number).then(function (data) { return data.json(); }),
            cross_fetch_1.default("https://api.dev.anora.ai" + "/pma/list?pma_number=" + pma_number + "&project=supplement_type,application_length,date_received,decision_date,pma_number,supplement_number,supplement_reason&aggregate=year,pma_number").then(function (data) { return data.json(); })
        ])
            .then(function (data) {
            results = data;
        })
            .then(function (e) { return cross_fetch_1.default("https://api.dev.anora.ai" + "/pma/list?product_code=" + results[0].item.product_code + "&supplement_number=&aggregate=application_length"); }).then(function (data) { return data.json(); }); }, function (data) {
            results.push(data);
            var detail_header = { "id": pma_number, "type": "PMA", "title": results[0].item.trade_name };
            dispatch(exports.fetchDetailSuccess(results, detail_header));
        }, function (err) { return console.log('error.', err); });
    };
}
exports.fetchPMAData = fetchPMAData;


/***/ }),

/***/ "./scripts/src/store/details/reducer.ts":
/*!**********************************************!*\
  !*** ./scripts/src/store/details/reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
var initialState = {
    result: {},
    loading: true,
    error: null,
    detail_header: null,
};
var details = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case 'FETCH_DETAIL_START':
            return __assign({}, state, { result: {}, error: null, loading: true });
        case 'FETCH_DETAIL_SUCCESS':
            return __assign({}, state, { result: action.result, error: null, loading: false, detail_header: action.detail_header });
        case react_router_redux_1.LOCATION_CHANGE:
            return __assign({}, state, { loading: true });
        default:
            return state;
    }
};
exports.default = details;


/***/ }),

/***/ "./scripts/src/store/index.ts":
/*!************************************!*\
  !*** ./scripts/src/store/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var react_router_redux_1 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
var raven_js_1 = __importDefault(__webpack_require__(/*! raven-js */ "./node_modules/raven-js/src/singleton.js"));
var raven_for_redux_1 = __importDefault(__webpack_require__(/*! raven-for-redux */ "./node_modules/raven-for-redux/built/index.js"));
var redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/lib/index.js"));
var react_router_redux_2 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
var google_analytics_gtag_1 = __importStar(__webpack_require__(/*! @redux-beacon/google-analytics-gtag */ "./node_modules/@redux-beacon/google-analytics-gtag/dist/index.js"));
var redux_beacon_1 = __webpack_require__(/*! redux-beacon */ "./node_modules/redux-beacon/dist/index.js");
var react_router_redux_3 = __webpack_require__(/*! react-router-redux */ "./node_modules/react-router-redux/es/index.js");
var history_1 = __importDefault(__webpack_require__(/*! ../history */ "./scripts/src/history.tsx"));
var reducer_1 = __importDefault(__webpack_require__(/*! ./search/reducer */ "./scripts/src/store/search/reducer.ts"));
var reducer_2 = __importDefault(__webpack_require__(/*! ./details/reducer */ "./scripts/src/store/details/reducer.ts"));
var reducer_3 = __importDefault(__webpack_require__(/*! ./auth/reducer */ "./scripts/src/store/auth/reducer.ts"));
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));
;
var qs = query_string_1.default.parse(window.location.search);
var source = qs.source || '';
exports.reducers = redux_1.combineReducers({
    router: react_router_redux_1.routerReducer,
    search: reducer_1.default,
    details: reducer_2.default,
    auth: reducer_3.default,
});
raven_js_1.default.config('https://103bbe3a50b941daaea4a78e3f2636c7@sentry.io/1221973', {
    environment: "dev",
    tags: { source: source },
}).install();
var trackingId = 'UA-120451892-1';
var ga = function (events) { };
if (true) {
    ga = google_analytics_gtag_1.default(trackingId);
}
var envParams = JSON.stringify({
    env: "dev",
    source: source,
});
var eventsMap = (_a = {},
    _a[react_router_redux_3.LOCATION_CHANGE] = google_analytics_gtag_1.trackPageView(function (action, prevState, nextState) {
        return {
            title: action.payload.pathname + action.payload.search + envParams,
            location: "loc",
            path: action.payload.pathname,
        };
    }),
    _a['FETCH_SEARCH_RESULT_START'] = google_analytics_gtag_1.trackEvent(function (action, prevState, nextState) { return ({
        category: envParams,
        action: action.type,
        label: nextState.search.boxString,
    }); }),
    _a['SELECT_DETAIL_TAB'] = google_analytics_gtag_1.trackEvent(function (action, prevState, nextState) { return ({
        category: envParams,
        action: action.type,
        label: action.tabLabel,
    }); }),
    _a['*'] = google_analytics_gtag_1.trackEvent(function (action) { return ({
        category: envParams,
        label: 'Redux Event',
        action: action.type,
    }); }),
    _a);
var gaMiddleware = redux_beacon_1.createMiddleware(eventsMap, ga);
var rMiddleware = react_router_redux_2.routerMiddleware(history_1.default);
var ravenMiddleware = raven_for_redux_1.default(raven_js_1.default, {});
exports.default = redux_1.createStore(exports.reducers, redux_1.applyMiddleware(redux_thunk_1.default, rMiddleware, gaMiddleware, ravenMiddleware));


/***/ }),

/***/ "./scripts/src/store/search/actions.ts":
/*!*********************************************!*\
  !*** ./scripts/src/store/search/actions.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cross_fetch_1 = __importDefault(__webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js"));
var utils_1 = __webpack_require__(/*! src/utils */ "./scripts/src/utils/index.ts");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));
exports.fetchSearchResultStart = function () { return ({
    type: 'FETCH_SEARCH_RESULT_START',
}); };
exports.fetchSearchResultSuccess = function (results) { return ({
    type: 'FETCH_SEARCH_RESULT_SUCCESS',
    results: results
}); };
function fetchSearchResults() {
    return function (dispatch, getState) {
        dispatch(exports.fetchSearchResultStart());
        var _a = getState().search, start = _a.start, filter = _a.filter, boxString = _a.boxString, advancedFilters = _a.advancedFilters;
        var year_start = advancedFilters.year_start, year_end = advancedFilters.year_end, medical_specialty = advancedFilters.medical_specialty;
        var device_class = advancedFilters.device_class.join(',');
        var application_type = advancedFilters.application_type.join(',');
        var submission_year = year_start + '-' + year_end;
        var queryObject = {
            query: boxString,
            start: start,
            filter: filter,
            device_class: device_class,
            application_type: application_type,
            medical_specialty: medical_specialty
        };
        if (queryObject.filter === "application") {
            queryObject.submission_year = submission_year;
        }
        var qs = query_string_1.default.stringify(queryObject);
        utils_1.retryPromise(function () { return cross_fetch_1.default("https://api.dev.anora.ai" + "/search?" + qs).then(function (data) { return data.json(); }); }, function (data) {
            for (var _i = 0, _a = data.hits; _i < _a.length; _i++) {
                var hit = _a[_i];
                for (var fieldName in hit.fields) {
                    hit.fields[fieldName] = hit.fields[fieldName].join(", ");
                }
            }
            dispatch(exports.fetchSearchResultSuccess(data));
        }, function (err) { return console.log('error.', err); });
    };
}
exports.fetchSearchResults = fetchSearchResults;
exports.changeSearchBoxString = function (str) { return ({
    type: 'CHANGE_SEARCH_BOX_STRING',
    str: str,
}); };
exports.changeStart = function (start) { return ({
    type: 'CHANGE_START',
    start: start
}); };
exports.changeFilter = function (filter) { return ({
    type: "CHANGE_FILTER",
    filter: filter
}); };
exports.changeAdvancedFilters = function (filters) { return ({
    type: "CHANGE_ADVANCED_FILTERS",
    filters: filters
}); };


/***/ }),

/***/ "./scripts/src/store/search/reducer.ts":
/*!*********************************************!*\
  !*** ./scripts/src/store/search/reducer.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "./node_modules/query-string/index.js"));
;
var qs = query_string_1.default.parse(window.location.search);
exports.initialState = {
    boxString: qs.query || '',
    results: null,
    loading: true,
    error: null,
    start: parseInt(qs.start) || 0,
    filter: "",
    advancedFilters: {
        year_start: 1980,
        year_end: 2018,
        application_type: [],
        device_class: [],
        medical_specialty: "",
    }
};
var search = function (state, action) {
    if (state === void 0) { state = exports.initialState; }
    switch (action.type) {
        case 'CHANGE_SEARCH_BOX_STRING':
            return __assign({}, state, { boxString: action.str });
        case 'CHANGE_START':
            return __assign({}, state, { start: action.start });
        case 'CHANGE_FILTER':
            return __assign({}, state, { filter: action.filter });
        case 'CHANGE_ADVANCED_FILTERS':
            return __assign({}, state, { advancedFilters: action.filters });
        case 'FETCH_SEARCH_RESULT_START':
            return __assign({}, state, { error: null, loading: true });
        case 'FETCH_SEARCH_RESULT_SUCCESS':
            return __assign({}, state, { results: action.results, error: null, loading: false });
        default:
            return state;
    }
};
exports.default = search;


/***/ }),

/***/ "./scripts/src/utils/index.ts":
/*!************************************!*\
  !*** ./scripts/src/utils/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.exactKeys = Object.keys;
exports.retryPromise = function (getPromise, onSuccess, onError, retryTimes) {
    if (retryTimes === void 0) { retryTimes = 2; }
    console.log('retry:', retryTimes);
    getPromise().then(onSuccess).catch(function (err) {
        if (retryTimes > 0) {
            exports.retryPromise(getPromise, onSuccess, onError, retryTimes - 1);
        }
        else {
            onError(err);
        }
    });
};


/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi whatwg-fetch babel-polyfill ./scripts/src/index ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! whatwg-fetch */"./node_modules/whatwg-fetch/fetch.js");
__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./scripts/src/index */"./scripts/src/index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=app.eba65d19914f834a9633.js.map