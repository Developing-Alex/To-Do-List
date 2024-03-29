/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/NotoSans-Regular.ttf */ \"./src/assets/fonts/NotoSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/NotoSans-Bold.ttf */ \"./src/assets/fonts/NotoSans-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: 'Noto-Sans';\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('truetype'),\n  url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('truetype');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  font-size: 16px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: whitesmoke;\n  margin: 0;\n  height: 100vh;\n}\n\n/*All things related to the header*/\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(120, 129, 35);\n  padding: 20px;\n  margin: 0;\n}\n\n#logo-container {\n  display: flex;\n}\n\n#pencil-icon {\n  width: 2.5rem;\n  filter: invert(95%);\n}\n\n#logo {\n  color: whitesmoke;\n  font-family: 'Noto-Sans';\n  font-size: 2.5rem;\n  font-weight: bold;\n  margin: 0;\n  gap: 5px;\n}\n\n#user-container {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n#hello {\n  color: whitesmoke;\n  font-size: 1.2rem;\n  font-weight: bold;\n  justify-self: center;\n}\n\n#sign-out-btn {\n  background-color: whitesmoke;\n  width: 125px;\n  height: 45px;\n  font-size: 1rem;\n  font-weight: bold;\n  border-radius: 25px;\n  border: none;\n  justify-self: center;\n}\n\n/*Sidebar Styles*/\n\n#sidebar {\n  display: flex;\n  flex-direction: column;\n  padding-top: 50px;\n  min-width: 250px;\n  max-width: 250px;\n  background-color: whitesmoke;\n  gap: 15px;\n}\n\n#time-container {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 0px 10px 0px 10px;\n}\n\n.time-btn{\n  cursor: pointer;\n  border: none;\n  color: rgba(0, 0, 0, 0.75);\n  background-color: whitesmoke;\n  font-family: 'Noto-Sans';\n  font-size: 1.2rem;\n  display: flex;\n  gap: 8px;\n  text-align: left;\n  align-items: center;\n  padding: 10px 0px 10px 40px;\n}\n\n.time-btn:hover {\n  background-color: rgb(230, 230, 230);\n  color: black;\n}\n\n.active {\n  background-color: rgba(0, 0, 0, 0.1);\n  font-weight: bold;\n  color: black;\n}\n\n.time-icons {\n  width: 1.2rem;\n  filter: invert(25%);\n}\n\n.projects-container {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px 10px 0px 10px;\n}\n\n#projects-heading {\n  font-size: 1.5rem;\n  font-family: 'Noto-Sans';\n  margin: 0;\n  padding: 10px 0px 5px 40px;\n}\n\n#add-project-btn {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  min-width: 100%;\n  border: none;\n  font-size: 1.3rem;\n  margin: 0;\n  font-family: 'Noto-Sans';\n  color: rgba(0, 0, 0, 0.75);\n  background-color: whitesmoke;\n  cursor: pointer;\n  padding: 10px 0px 10px 50px;\n}\n\n#add-project-btn:hover {\n  background-color: rgb(230, 230, 230);\n  color: black;\n}\n\n.project-btn-container {\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: center;\n  min-width: 100%;\n  padding: 0px 10px 0px 10px;\n}\n\n.project-btns {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 5px;\n  border: none;\n  font-size: 1.3rem;\n  margin: 0;\n  font-family: 'Noto-Sans';\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  padding: 10px 10px 10px 50px;\n}\n\n.project-btns:hover {\n  background-color: rgb(230, 230, 230);\n  color: black;\n}\n\n.project-cancel-btn {\n  width: 1.2rem;\n  transform: rotate(45deg);\n  cursor: pointer;\n}\n\n/*Content Container Styles*/\n\n#content-container {\n  display: flex;\n  width: 100vw;\n}\n\n#content {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  background-color: rgba(120, 129, 35, 0.075);\n  padding: 50px;\n}\n\n.task-containers {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n#all-task-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#weekly-task-container {\n  display: none;\n}\n\n#daily-task-container {\n  display: none;\n}\n\n.task-headers {\n  margin: 0;\n  padding: 5px;\n  font-family: 'Noto-Sans';\n  font-size: 1.5rem;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.add-task-container {\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  gap: 15px;\n}\n\n.add-task-paragraph {\n  display: flex;\n  gap: 5px;\n  font-size: 1.3rem;\n  margin: 0;\n  font-family: 'Noto-Sans';\n  color: rgba(0, 0, 0, 0.75);\n  cursor: pointer;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 5px;\n  width: 500px;\n}\n\n.add-task-paragraph:hover {\n  color: black;\n  background-color: rgb(230, 230, 230);\n  transition: .3s;\n}\n\n.add-task-paragraph:active {\n  filter: invert(30%);\n}\n\n.add-btn {\n  width: 1.3rem;\n}\n\n/*Form Styles*/\n\n#form-box {\n  display: flex;\n  flex-direction: column;\n  max-width: min-content;\n  background-color: whitesmoke;\n  box-shadow: -5px 5px  rgba(211, 211, 211, 0.6);\n  border-radius: 10px;\n  padding: 10px;\n  gap: 5px;\n}\n\n#form-title-container {\n  display: flex;\n  align-items: flex-start;\n}\n\n#form-title {\n  border: none;\n  outline: none;\n  resize: none;\n  background-color: whitesmoke;\n}\n\n#form-cancel-btn {\n  width: 1.3rem;\n  transform: rotate(45deg);\n  cursor: pointer;\n}\n\n#form-description {\n  border: none;\n  outline: none;\n  resize: none;\n  background-color: whitesmoke;\n}\n\n#priority-header {\n  text-align: center;\n  font-family: 'Noto-Sans';\n  margin: 0;\n}\n\n#priority-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.priorities {\n  list-style: none;\n  font-family: 'Noto-Sans';\n}\n\n.priority-radio {\n  cursor: pointer;\n}\n\n.form-btn {\n  margin-top: 5px;\n  padding: 5px;\n  font-family: 'Noto-Sans';\n  border-radius: 8px;\n  border: none;\n  box-shadow: -3px 3px  rgba(211, 211, 211, 0.6);\n  cursor: pointer;\n}\n\n.form-btn:hover {\n  background-color: white;\n  transition: .7s;\n  color: black;\n}\n\n/*Task Card Styles*/\n\n.task-cards {\n  display: flex;\n  gap: 10px;\n  max-width: max-content;\n  background-color: whitesmoke;\n  box-shadow: -5px 5px  rgba(211, 211, 211, 0.6);\n  padding: 5px;\n}\n\n.task-cards div {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.task-cards p {\n  font-family: 'Noto-sans';\n  font-size: 1rem;\n  margin: 0;\n}\n\n.task-cards h4 {\n  font-family: 'Noto-sans';\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin: 0;\n}\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTask),\n/* harmony export */   taskHandler: () => (/* binding */ taskHandler)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nfunction createTask (title, description, priority, dueDate) {\n    return {\n      title, \n      description, \n      priority, \n      dueDate\n    }\n  };\n\nfunction taskHandler(){\n  const allTasks = [];\n\n  const getAllTasks = () => allTasks;\n\n  function addTask(newTask){\n    getAllTasks().push(newTask)\n    console.log(getAllTasks());\n    console.log(newTask)\n    console.log(getAllTasks().indexOf(newTask))\n    return newTask\n  }\n  \n  return {\n    addTask,\n    getAllTasks\n  }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/function.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function */ \"./src/function.js\");\n/* harmony import */ var _assets_images_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/plus-circle-outline.svg */ \"./src/assets/images/plus-circle-outline.svg\");\n\n\n\n\n\nconst allBtn = document.getElementById('all-btn');\nconst dailyBtn = document.getElementById('day-btn');\nconst weekBtn = document.getElementById('week-btn');\n\nfunction ShowAllTasks() {\n  const dailyTaskContainer = document.getElementById('daily-task-container');\n  dailyTaskContainer.style.display = 'none';\n\n  const weeklyTaskContainer = document.getElementById('weekly-task-container');\n  weeklyTaskContainer.style.display = 'none';\n\n  const allTasksContainer = document.getElementById('all-task-container');\n  allTasksContainer.style.display = 'flex';\n\n  dailyBtn.classList.remove('active');\n  weekBtn.classList.remove('active');\n  allBtn.classList.add('active');\n}\nallBtn.onclick = ShowAllTasks;\n\n\nfunction ShowDailyTasks() {\n  const dailyTaskContainer = document.getElementById('daily-task-container');\n  dailyTaskContainer.style.display = 'flex';\n\n  const weeklyTaskContainer = document.getElementById('weekly-task-container');\n  weeklyTaskContainer.style.display = 'none';\n\n  const allTasksContainer = document.getElementById('all-task-container');\n  allTasksContainer.style.display = 'none';\n  dailyBtn.classList.add('active');\n  weekBtn.classList.remove('active');\n  allBtn.classList.remove('active');\n}\ndailyBtn.onclick = ShowDailyTasks;\n\nfunction ShowWeeklyTasks() {\n  const dailyTaskContainer = document.getElementById('daily-task-container');\n  dailyTaskContainer.style.display = 'none';\n\n  const weeklyTaskContainer = document.getElementById('weekly-task-container');\n  weeklyTaskContainer.style.display = 'flex';\n\n  const allTasksContainer = document.getElementById('all-task-container');\n  allTasksContainer.style.display = 'none';\n  dailyBtn.classList.remove('active');\n  weekBtn.classList.add('active');\n  allBtn.classList.remove('active');\n}\nweekBtn.onclick = ShowWeeklyTasks;\n\nconst addTaskContainer = document.querySelectorAll('.add-task-container');\nconst addTaskParagraph = document.querySelectorAll('.add-task-paragraph');\n\nfunction createFormContainer(taskContainer) {\n  const formBox = document.createElement('form');\n  formBox.name = `form-box`;\n  formBox.id = formBox.name;\n  formBox.method = 'post';\n  formBox.action = '';\n\n  const formTitleContainer = document.createElement('div');\n  formTitleContainer.id = 'form-title-container'\n\n  const formTitle = document.createElement('textarea');\n  formTitle.id = 'form-title';\n  formTitle.name = formTitle.id;\n  formTitle.cols = '30';\n  formTitle.row = '1';\n  formTitle.placeholder = 'Title';\n  formTitle.required = true;\n  formTitle.value = '';\n\n  const cancelButton = new Image();\n  cancelButton.src = _assets_images_plus_circle_outline_svg__WEBPACK_IMPORTED_MODULE_2__;\n  cancelButton.id = 'form-cancel-btn';\n\n  const formTitleContainerArr = [formTitle, cancelButton];\n  formTitleContainerArr.forEach(el => formTitleContainer.appendChild(el))\n\n  const formDescription = document.createElement('textarea');\n  formDescription.id = 'form-description';\n  formDescription.name = formDescription.id;\n  formDescription.cols = '30';\n  formDescription.row = '3';\n  formDescription.placeholder = 'Description';\n  formDescription.required = true;\n\n  const priorityHeader = document.createElement('h4');\n  priorityHeader.id = 'priority-header';\n  priorityHeader.textContent = 'Priority';\n\n  const priorityContainer = document.createElement('div');\n  priorityContainer.id = 'priority-container';\n\n  const highPriority = document.createElement('li');\n  highPriority.className = 'priorities';\n\n  const highInput = document.createElement('input');\n  highInput.type = 'radio';\n  highInput.name = 'priority';\n  highInput.id = 'high';\n  highInput.className = 'priority-radio';\n\n  const highLabel = document.createElement('label');\n  highLabel.textContent = 'High';\n  highLabel.setAttribute('for', 'high');\n  highInput.value = highLabel.textContent;\n\n  const highPriorityArr = [highInput, highLabel];\n  highPriorityArr.forEach(e => highPriority.appendChild(e));\n\n  const mediumPriority = document.createElement('li');\n  mediumPriority.className = 'priorities';\n\n  const mediumInput = document.createElement('input');\n  mediumInput.type = 'radio';\n  mediumInput.name = 'priority';\n  mediumInput.id = 'medium';\n  mediumInput.className = 'priority-radio';\n\n  const mediumLabel = document.createElement('label');\n  mediumLabel.textContent = 'Medium';\n  mediumLabel.setAttribute('for', 'medium');\n  mediumInput.value = mediumLabel.textContent;\n\n  const mediumPriorityArr = [mediumInput, mediumLabel];\n  mediumPriorityArr.forEach(e => mediumPriority.appendChild(e));\n\n  const lowPriority = document.createElement('li');\n  lowPriority.className = 'priorities';\n\n  const lowInput = document.createElement('input');\n  lowInput.type = 'radio';\n  lowInput.name = 'priority';\n  lowInput.id = 'low';\n  lowInput.className = 'priority-radio';\n\n  const lowLabel = document.createElement('label');\n  lowLabel.textContent = 'Low'\n  lowLabel.setAttribute('for', 'low');\n  lowInput.value = lowLabel.textContent;\n\n  const lowPriorityArr = [lowInput, lowLabel];\n  lowPriorityArr.forEach(e => lowPriority.appendChild(e));\n\n  const priorityContainerArr = [highPriority, mediumPriority, lowPriority];\n  priorityContainerArr.forEach(e => priorityContainer.appendChild(e));\n\n  const dueDateBtn = document.createElement(\"button\");\n  dueDateBtn.id = 'due-date-btn';\n  dueDateBtn.className = 'form-btn';\n  dueDateBtn.textContent = 'Add Due Date';\n\n  const dateInput = document.createElement('input');\n  dateInput.id = 'date-input';\n  dateInput.name = dateInput.id;\n  dateInput.type = 'date';\n\n  dueDateBtn.addEventListener('click', () => {\n    formBox.replaceChild(dateInput, dueDateBtn)\n  })\n\n  const submitTaskBtn = document.createElement('input');\n  submitTaskBtn.id = 'submit';\n  submitTaskBtn.className = 'form-btn';\n  submitTaskBtn.type = 'submit';\n\n  const formBoxArr = [formTitleContainer, formDescription, priorityHeader, priorityContainer, dueDateBtn, submitTaskBtn];\n  formBoxArr.forEach(e => formBox.appendChild(e));\n\n  taskContainer.appendChild(formBox);\n\n  function clearFormBox() {\n    formTitle.value = '';\n    formDescription.value = '';\n    var ele = document.getElementsByName(\"priority\");\n    for (let i = 0; i < ele.length; i++)\n      ele[i].checked = false;\n    dateInput.value = '';\n  }\n\n  function fillTaskCard() {\n    const taskTitle = formTitle.value;\n    const taskDescription = formDescription.value;\n    let taskPriority = document.querySelector('input[name=\"priority\"]:checked').value\n    const taskDueDate = dateInput.value;\n\n    formBox.style.display = 'none';\n    addTaskParagraph.forEach(btn => btn.style.display = 'flex')\n\n    taskContainer.appendChild(displayTasks((0,_function__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskTitle, taskDescription, taskPriority, taskDueDate)));\n\n    console.log(taskPriority)\n    clearFormBox();\n  }\n\n  cancelButton.addEventListener('click', () => {\n    clearFormBox();\n    formBox.style.display = 'none';\n    addTaskParagraph.forEach(btn => btn.style.display = 'flex')\n  })\n\n  submitTaskBtn.addEventListener('click', event => {\n    event.preventDefault();\n    fillTaskCard();\n  });\n\n  return taskContainer;\n}\n\naddTaskParagraph.forEach(btn => {\n  btn.addEventListener('click', () => {\n    if (btn.previousElementSibling.id.charAt(btn.previousElementSibling.id.length - 1) === btn.id.charAt(btn.id.length - 1))\n      createFormContainer(btn.previousElementSibling);\n    btn.style.display = 'none';\n  })\n})\n\nlet idNumCreator = 0;\nfunction displayTasks(obj) {\n  \n  idNumCreator++\n\n  const taskCard = document.createElement('div');\n  taskCard.id = `task-card-${idNumCreator}`\n  taskCard.className = 'task-cards';\n\n  const taskTitleContainer = document.createElement('div');\n  taskTitleContainer.className = 'task-title-containers';\n\n  const taskTitleHeading = document.createElement('h4');\n  taskTitleHeading.className = 'task-title-headings';\n\n  const taskTitle = document.createElement('p');\n  taskTitle.className = 'task-titles';\n\n  const taskTitleContainerArr = [taskTitleHeading, taskTitle];\n  taskTitleContainerArr.forEach(taskTitleEl => taskTitleContainer.appendChild(taskTitleEl));\n\n  const taskDescriptionContainer = document.createElement('div');\n  taskDescriptionContainer.className = 'task-description-containers';\n\n  const taskDescriptionHeading = document.createElement('h4');\n  taskDescriptionHeading.className = 'task-description-headings';\n\n  const taskDescription = document.createElement('p');\n  taskDescription.className = 'task-descriptions';\n\n  const taskDescriptionContainerArr = [taskDescriptionHeading, taskDescription];\n  taskDescriptionContainerArr.forEach(taskDescriptionEl => taskDescriptionContainer.appendChild(taskDescriptionEl));\n\n  const taskPriorityContainer = document.createElement('div');\n  taskPriorityContainer.className = 'task-priority-containers';\n\n  const taskPriorityHeading = document.createElement('h4');\n  taskPriorityHeading.className = 'task-priority-headings';\n\n  const taskPriority = document.createElement('p');\n  taskPriority.className = 'task-priorities';\n\n  const taskPriorityContainerArr = [taskPriorityHeading, taskPriority];\n  taskPriorityContainerArr.forEach(taskPriorityEl => taskPriorityContainer.appendChild(taskPriorityEl));\n\n  const taskDueDateContainer = document.createElement('div');\n  taskDueDateContainer.className = 'task-due-date-containers';\n\n  const taskDueDateHeading = document.createElement('h4');\n  taskDueDateHeading.className = 'task-due-date-headings';\n\n  const taskDueDate = document.createElement('p');\n  taskDueDate.className = 'task-due-dates';\n\n  const taskDueDateContainerArr = [taskDueDateHeading, taskDueDate];\n  taskDueDateContainerArr.forEach(taskDueDateEl => taskDueDateContainer.appendChild(taskDueDateEl));\n\n  const taskCardArr = [taskTitleContainer, taskDescriptionContainer, taskPriorityContainer, taskDueDateContainer];\n  taskCardArr.forEach(taskCardEl => {\n    taskCard.appendChild(taskCardEl);\n  });\n\n  taskTitleHeading.textContent = `Task:`;\n  taskTitle.textContent = obj.title;\n\n  taskDescriptionHeading.textContent = `Details:`;\n  taskDescription.textContent = obj.description;\n\n  taskPriorityHeading.textContent = `Priority:`;\n  taskPriority.textContent = obj.priority;\n\n  taskDueDateHeading.textContent = `Due date:`;\n  taskDueDate.textContent = obj.dueDate;\n\n\n  return taskCard\n};\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Bold.ttf":
/*!********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Bold.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f7ac340604afb2500f1.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/fonts/NotoSans-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/NotoSans-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/NotoSans-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e49f7cc81283eef694a3.ttf\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/fonts/NotoSans-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/plus-circle-outline.svg":
/*!***************************************************!*\
  !*** ./src/assets/images/plus-circle-outline.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b254db15a65e85097053.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/assets/images/plus-circle-outline.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;