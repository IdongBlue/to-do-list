/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tfont-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tbox-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    box-sizing: border-box;\n    line-height: 1;\n}\n\nheader {\n\tfont-size: 3em;\n\tbackground-color: #1f2937;\n\tcolor: white;\n\theight: 75px;\n\tpadding-left: 30px;\n\tpadding-top: 5px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#plus_button {\n\tbackground-color: inherit;\n\twidth: 42px;\n\tborder: 0px;\n\tmargin-right: 200px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tjustify-items: center;\n}\n\n#plus_button:hover {\n\tbackground-color: #f87171;\n}\n\n#plus {\n\twidth:40px;\n\theight:40px;\n\tfilter: invert(99%) sepia(62%) saturate(161%) hue-rotate(171deg) brightness(111%) contrast(87%);\n}\n\n#main {\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tfont-size: 1.1em;\n\theight: 675px;\n}\n\n#tabs {\n\tdisplay: grid;\n\tbackground-color: #e5e7eb;\n\tcolor: #111827;\n\tpadding-left: 20px;\n\tpadding-top: 20px ;\n\tgrid-template-rows: 45px 45px 45px 45px 45px;\n}\n\n#title {\n\tfont-size: 1.6em;\n\tcolor: #e11d48;\n}\n\n.icon {\n\twidth:20px;\n\theight:20px;\n}\n\n.tab_button {\n\twidth: 85%;\n\tfont-size: .9em;\n\tpadding: 5px;\n\theight: 35px;\n\tborder: 0px;\n\tbackground-color: inherit;\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.tab_button:hover {\n\tbackground-color: #cbd5e1;\n\tborder-radius: 6px;\n\tcursor: pointer;\n}\n\n.modalBox {\n\tdisplay: none;\n\tposition: fixed;\n\tz-index: 8;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: auto;\n\tbackground-color: rgb(0, 0, 0);\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\n#formPopup {\n    position: fixed;\n    left: 48%;\n    top: 6%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n}\n\n#formContainer {\n    max-width: 400px;\n    padding: 20px;\n    background-color: #fff;\n    font-size: 1.1em;\n}\n\ninput, textarea, select {\n\twidth: 90%;\n\tpadding: 15px;\n\tmargin: 5px 0 20px 0;\n\tborder: 1px solid black;\n\tbackground: white;\n\tfont-size: .9em;\n\tborder-radius: 4px;\n}\n\ninput:focus {\n\tbackground-color: #ddd;\n\toutline: none;\n}\n\n.submitBtn {\n    font-size: 1em;\n    padding: 5px 15px;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    width: 40%;\n    margin-bottom: 5px;\n    margin-top: 5px;\n\tmargin-left: 20px;\n\tborder-radius: 6px;\n}\n\n.closeBtn {\n    background-color: #cc0000;\n    font-size: 1em;\n\tpadding: 12px 20px;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n\tmargin-bottom: 5px;\n    margin-top: 5px;\n\tmargin-left: 10px;\n\tborder-radius: 6px;\n}\n\n.formToggle {\n\tdisplay: flex;\n\tmargin-left: 60px;\n}\n\n#projectPopup {\n\tposition: fixed;\n    left: 48%;\n    top: 20%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n}\n\n.project {\n\tgrid-template-columns: 25px auto auto;\n}\n\n.projectTitle {\n\ttext-align: start;\n}\n\n.removeProject {\n\tbackground-color: inherit;\n\tborder: 0px;\n\tcursor: pointer;\n\tjustify-self: end;\n\twidth: 22px;\n}\n\n.task {\n\tborder-bottom: solid #ef4444;\n\tjustify-content: space-between;\n\tfont-size: 1em;\n\tmargin-left: 70px;\n\tmargin-right: 70px;\n\tmargin-top: 10px;\n\tpadding-bottom: 10px;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.firstBox {\n\talign-items: center;\n\tjustify-content: space-around;\n\tmargin-right: 10px;\n}\n\n.checkBox {\n\tmargin-right: 10px;\n}\n\n.checkMark {\n  width: 15px;\n  height: 15px;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  position: relative;\n  top: -1px;\n}\n\n.titleBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .9em;\n}\n\n.secondBox {\n\tjustify-content: space-between;\n\twidth: 350px;\n}\n\n.detailsButton {\n\tcursor: pointer;\n\toutline: 0;\n\tcolor: #fff;\n\tbackground-color: #0d6efd;\n\tborder-color: #0d6efd;\n\tdisplay: inline-block;\n\tfont-weight: 400;\n\tline-height: 1.3;\n\ttext-align: center;\n\tborder: 1px solid transparent;\n\tpadding: 6px 12px;\n\tfont-size: 15px;\n\tborder-radius: .25rem;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.detailsButton:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: #0b5ed7;\n\t\tborder-color: #0a58ca;\n}\n\n.editButton {\n\tcursor: pointer;\n\toutline: 0;\n\tdisplay: inline-block;\n\tbackground-color: transparent;\n\tborder: 1px solid transparent;\n\tborder-radius: .25rem;\n\tpadding: 12px 16px;\n\tfont-size: 16px;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\tcolor: #FFF700;\n\tborder-color: #FFF700;\n}\n\n.editButton:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: #FFF700;\n\t\tborder-color: #FFF700;\n}\n\n.removeTask {\n\tcursor: pointer;\n\toutline: 0;\n\tdisplay: inline-block;\n\tbackground-color: transparent;\n\tborder: 1px solid transparent;\n\tborder-radius: .25rem;\n\tpadding: 12px 16px;\n\tfont-size: 16px;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\tcolor: \t#FF5470;\n\tborder-color: \t#FF5470;\n}\n\n.removeTask:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: \t#FF5470;\n\t\tborder-color: \t#FF5470;\n}\n\n.dateBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .9em;\n}\n\n#taskContainer {\n\tdisplay: grid;\n\tposition: fixed;\n    left: 48%;\n    top: 6%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n\tbackground-color: white;\n\tpadding: 20px;\n\tgrid-template-columns: repeat(2, 1fr);\n\twidth: 500px;\n\tgap: 5px;\n}\n\n#taskInfo {\n\tgrid-column: 1/3;\n}\n\n.boldInfo {\n\tfont-weight: bold;\n}\n\n#taskInfo {\n\tfont-size: 20px;\n\tcolor: #0d6efd;\n}\n\n\t\n#copyright {\n\tbackground-color: #1f2937;\n\tfont-size: 1.2em;\n\tcolor: white;\n\theight: 40px;\n\ttext-align: center;\n\tline-height: 40px;\n\t\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n\tfont-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n\tbox-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n    box-sizing: border-box;\n    line-height: 1;\n}\n\nheader {\n\tfont-size: 3em;\n\tbackground-color: #1f2937;\n\tcolor: white;\n\theight: 75px;\n\tpadding-left: 30px;\n\tpadding-top: 5px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#plus_button {\n\tbackground-color: inherit;\n\twidth: 42px;\n\tborder: 0px;\n\tmargin-right: 200px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tjustify-items: center;\n}\n\n#plus_button:hover {\n\tbackground-color: #f87171;\n}\n\n#plus {\n\twidth:40px;\n\theight:40px;\n\tfilter: invert(99%) sepia(62%) saturate(161%) hue-rotate(171deg) brightness(111%) contrast(87%);\n}\n\n#main {\n\tdisplay: grid;\n\tgrid-template-columns: 20% 80%;\n\tfont-size: 1.1em;\n\theight: 675px;\n}\n\n#tabs {\n\tdisplay: grid;\n\tbackground-color: #e5e7eb;\n\tcolor: #111827;\n\tpadding-left: 20px;\n\tpadding-top: 20px ;\n\tgrid-template-rows: 45px 45px 45px 45px 45px;\n}\n\n#title {\n\tfont-size: 1.6em;\n\tcolor: #e11d48;\n}\n\n.icon {\n\twidth:20px;\n\theight:20px;\n}\n\n.tab_button {\n\twidth: 85%;\n\tfont-size: .9em;\n\tpadding: 5px;\n\theight: 35px;\n\tborder: 0px;\n\tbackground-color: inherit;\n\ttext-align: center;\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.tab_button:hover {\n\tbackground-color: #cbd5e1;\n\tborder-radius: 6px;\n\tcursor: pointer;\n}\n\n.modalBox {\n\tdisplay: none;\n\tposition: fixed;\n\tz-index: 8;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: auto;\n\tbackground-color: rgb(0, 0, 0);\n\tbackground-color: rgba(0, 0, 0, 0.4);\n}\n\n#formPopup {\n    position: fixed;\n    left: 48%;\n    top: 6%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n}\n\n#formContainer {\n    max-width: 400px;\n    padding: 20px;\n    background-color: #fff;\n    font-size: 1.1em;\n}\n\ninput, textarea, select {\n\twidth: 90%;\n\tpadding: 15px;\n\tmargin: 5px 0 20px 0;\n\tborder: 1px solid black;\n\tbackground: white;\n\tfont-size: .9em;\n\tborder-radius: 4px;\n}\n\ninput:focus {\n\tbackground-color: #ddd;\n\toutline: none;\n}\n\n.submitBtn {\n    font-size: 1em;\n    padding: 5px 15px;\n    border: none;\n    background-color: #8ebf42;\n    color: #fff;\n    cursor: pointer;\n    width: 40%;\n    margin-bottom: 5px;\n    margin-top: 5px;\n\tmargin-left: 20px;\n\tborder-radius: 6px;\n}\n\n.closeBtn {\n    background-color: #cc0000;\n    font-size: 1em;\n\tpadding: 12px 20px;\n    border: none;\n    color: #fff;\n    cursor: pointer;\n\tmargin-bottom: 5px;\n    margin-top: 5px;\n\tmargin-left: 10px;\n\tborder-radius: 6px;\n}\n\n.formToggle {\n\tdisplay: flex;\n\tmargin-left: 60px;\n}\n\n#projectPopup {\n\tposition: fixed;\n    left: 48%;\n    top: 20%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n}\n\n.project {\n\tgrid-template-columns: 25px auto auto;\n}\n\n.projectTitle {\n\ttext-align: start;\n}\n\n.removeProject {\n\tbackground-color: inherit;\n\tborder: 0px;\n\tcursor: pointer;\n\tjustify-self: end;\n\twidth: 22px;\n}\n\n.task {\n\tborder-bottom: solid #ef4444;\n\tjustify-content: space-between;\n\tfont-size: 1em;\n\tmargin-left: 70px;\n\tmargin-right: 70px;\n\tmargin-top: 10px;\n\tpadding-bottom: 10px;\n\talign-items: center;\n\ttext-align: center;\n}\n\n.firstBox {\n\talign-items: center;\n\tjustify-content: space-around;\n\tmargin-right: 10px;\n}\n\n.checkBox {\n\tmargin-right: 10px;\n}\n\n.checkMark {\n  width: 15px;\n  height: 15px;\n  padding: 0;\n  margin: 0;\n  vertical-align: bottom;\n  position: relative;\n  top: -1px;\n}\n\n.titleBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .9em;\n}\n\n.secondBox {\n\tjustify-content: space-between;\n\twidth: 350px;\n}\n\n.detailsButton {\n\tcursor: pointer;\n\toutline: 0;\n\tcolor: #fff;\n\tbackground-color: #0d6efd;\n\tborder-color: #0d6efd;\n\tdisplay: inline-block;\n\tfont-weight: 400;\n\tline-height: 1.3;\n\ttext-align: center;\n\tborder: 1px solid transparent;\n\tpadding: 6px 12px;\n\tfont-size: 15px;\n\tborder-radius: .25rem;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n}\n\n.detailsButton:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: #0b5ed7;\n\t\tborder-color: #0a58ca;\n}\n\n.editButton {\n\tcursor: pointer;\n\toutline: 0;\n\tdisplay: inline-block;\n\tbackground-color: transparent;\n\tborder: 1px solid transparent;\n\tborder-radius: .25rem;\n\tpadding: 12px 16px;\n\tfont-size: 16px;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\tcolor: #FFF700;\n\tborder-color: #FFF700;\n}\n\n.editButton:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: #FFF700;\n\t\tborder-color: #FFF700;\n}\n\n.removeTask {\n\tcursor: pointer;\n\toutline: 0;\n\tdisplay: inline-block;\n\tbackground-color: transparent;\n\tborder: 1px solid transparent;\n\tborder-radius: .25rem;\n\tpadding: 12px 16px;\n\tfont-size: 16px;\n\ttransition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n\tcolor: \t#FF5470;\n\tborder-color: \t#FF5470;\n}\n\n.removeTask:hover {\n\t\tcolor: #fff;\n\t\tbackground-color: \t#FF5470;\n\t\tborder-color: \t#FF5470;\n}\n\n.dateBox {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: .9em;\n}\n\n#taskContainer {\n\tdisplay: grid;\n\tposition: fixed;\n    left: 48%;\n    top: 6%;\n    transform: translate(-50%, 5%);\n    border: 3px solid #1f2937;\n\tborder-radius: 4px;\n\tbackground-color: white;\n\tpadding: 20px;\n\tgrid-template-columns: repeat(2, 1fr);\n\twidth: 500px;\n\tgap: 5px;\n}\n\n#taskInfo {\n\tgrid-column: 1/3;\n}\n\n.boldInfo {\n\tfont-weight: bold;\n}\n\n#taskInfo {\n\tfont-size: 20px;\n\tcolor: #0d6efd;\n}\n\n\t\n#copyright {\n\tbackground-color: #1f2937;\n\tfont-size: 1.2em;\n\tcolor: white;\n\theight: 40px;\n\ttext-align: center;\n\tline-height: 40px;\n\t\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "daysInYear": () => (/* binding */ daysInYear),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInDay": () => (/* binding */ secondsInDay),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute),
/* harmony export */   "secondsInMonth": () => (/* binding */ secondsInMonth),
/* harmony export */   "secondsInQuarter": () => (/* binding */ secondsInQuarter),
/* harmony export */   "secondsInWeek": () => (/* binding */ secondsInWeek),
/* harmony export */   "secondsInYear": () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */

var daysInYear = 365.2425;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;
/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */

var secondsInDay = secondsInHour * 24;
/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */

var secondsInWeek = secondsInDay * 7;
/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */

var secondsInYear = secondsInDay * daysInYear;
/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */

var secondsInMonth = secondsInYear / 12;
/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, options) {
  var _options$additionalDi;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bde675c38d54979f589e.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e1c2b9c04014f307a11e.svg";

/***/ }),

/***/ "./src/images/format.svg":
/*!*******************************!*\
  !*** ./src/images/format.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "365f3e7f182c9f913994.svg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_format_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/format.svg */ "./src/images/format.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");






let myProjects = [];

const project = (title) => {
  let _title = title;
  let tasks = [];
  return {
    _title,
    tasks,
    addTask(task) {
      tasks.push(task);
    },
    removeTask(index) {
      tasks.splice(index, 1);
    },
  };
};

const task = (title, description, date, priority, projectTitle) => {
  let _title = title;
  let _description = description;
  let _date = date;
  let _priority = priority;
  let _project = projectTitle;
  return {
    _title,
    _description,
    _date,
    _priority,
    _project,
  };
};

const inbox = project("Inbox");
myProjects.push(inbox);

const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskDate = document.getElementById("taskDate");
const taskPriority = document.getElementById("taskPriority");
const taskProject = document.getElementById("taskProject");
const plus = document.getElementById("plus_button");
const close = document.getElementById("close");
const addProject = document.getElementById("addProject");
const closeProject = document.getElementById("closeProject");
const projectName = document.getElementById("projectName");
const submitProject = document.getElementById("submitProject");
const submitTask = document.getElementById("submit");
const titleInfo = document.getElementById("titleInfo");
const descriptionInfo = document.getElementById("descriptionInfo");
const dateInfo = document.getElementById("dateInfo");
const priorityInfo = document.getElementById("priorityInfo");
const projectInfo = document.getElementById("projectInfo");
const todayButton = document.getElementById("today");
const weekButton = document.getElementById("week");

const closeInfo = document.getElementById("closeTaskInfo");

const refreshForm = () => {
  taskTitle.value = taskTitle.defaultValue;
  taskDescription.value = taskDescription.defaultValue;
  taskDate.value = taskDate.defaultValue;
  taskPriority.value = taskPriority.defaultValue;
  taskProject.value = taskProject.defaultValue;
};

function openForm() {
  document.getElementById("addPopup").style.display = "block";
}

function closeForm() {
  document.getElementById("addPopup").style.display = "none";
}

function openProjectForm() {
  document.getElementById("addProjectPopup").style.display = "block";
}

function closeProjectForm() {
  document.getElementById("addProjectPopup").style.display = "none";
}

function openTaskInfo() {
  document.getElementById("taskModal").style.display = "block";
}

function closeTaskInfo() {
  document.getElementById("taskModal").style.display = "none";
}

plus.onclick = () => {
  openForm();
  displayProjectOptions();
};
close.onclick = () => {
  refreshForm();
  closeForm();
};

submitTask.onclick = (e) => {
  e.preventDefault();
  const newTask = task(
    taskTitle.value,
    taskDescription.value,
    taskDate.value,
    taskPriority.value,
    taskProject.value
  );
  const projectIndex =
    taskProject.options[taskProject.selectedIndex].getAttribute("index");
  myProjects[projectIndex].addTask(newTask);
  console.log(projectIndex);
  console.log(myProjects);
  closeForm();
  refreshForm();
};

addProject.onclick = openProjectForm;
closeProject.onclick = closeProjectForm;

submitProject.onclick = (e) => {
  if (projectName.value.length > 0) {
    e.preventDefault();
    const newProject = project(projectName.value);
    myProjects.push(newProject);
    projectName.value = projectName.defaultValue;
    closeProjectForm();
    displayProjects();
  }
};

closeInfo.onclick = closeTaskInfo;

window.onclick = function (event) {
  let modal = document.getElementById("addPopup");
  let modalProject = document.getElementById("addProjectPopup");
  let modalInfo = document.getElementById("taskModal");
  if (event.target == modal) {
    refreshForm();
    closeForm();
  } else if (event.target == modalProject) {
    closeProjectForm();
  } else if (event.target == modalInfo) {
    closeTaskInfo();
  }
};

const createProjectIcon = () => {
  const myProjectIcon = new Image();
  myProjectIcon.src = _images_format_svg__WEBPACK_IMPORTED_MODULE_1__;
  myProjectIcon.classList.add("icon");
  return myProjectIcon;
};

const createDeleteIcon = () => {
  const myDeleteIcon = new Image();
  myDeleteIcon.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
  myDeleteIcon.classList.add("icon");
  return myDeleteIcon;
};

const createEditIcon = () => {
  const myEditIcon = new Image();
  myEditIcon.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_3__;
  myEditIcon.classList.add("icon");
  return myEditIcon;
};

const displayProjects = () => {
  const projects = document.getElementById("projects");
  while (projects.hasChildNodes()) {
    projects.removeChild(projects.firstChild);
  }

  myProjects.forEach((element, index) => {
    let project = document.createElement("div");
    project.classList.add("project");
    project.classList.add("tab_button");
    project.setAttribute("index", index);
    project.style.display = "grid";
    const projectIndex = project.getAttribute("index");

    let title = document.createElement("div");
    title.classList.add("projectTitle");
    title.innerText = element._title;

    let remove = document.createElement("button");
    remove.classList.add("removeProject");
    remove.appendChild(createDeleteIcon());
    remove.onclick = () => {
      myProjects.splice(projectIndex, 1);
      displayProjects();
    };

    project.appendChild(createProjectIcon());
    project.appendChild(title);
    project.appendChild(remove);

    projects.appendChild(project);

    project.addEventListener("click", () => {
      currentProjectIndex = projectIndex;
      displayTasks();
    });
  });
};

const displayProjectOptions = () => {
  const projectOption = document.getElementById("taskProject");
  while (projectOption.hasChildNodes()) {
    projectOption.removeChild(projectOption.firstChild);
  }

  myProjects.forEach((element, index) => {
    let option = document.createElement("option");
    option.classList.add("projectOption");
    option.setAttribute("index", index);
    option.value = element._title;
    option.innerText = element._title;

    projectOption.appendChild(option);
  });
};

let currentProjectIndex = 0;

const displayTasks = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }

  myProjects[currentProjectIndex].tasks.forEach((element, index) => {
    const task = document.createElement("div");
    task.classList.add("task");
    task.style.display = "flex";
    task.setAttribute("index", index);

    const firstBox = document.createElement("div");
    firstBox.classList.add("firstBox");
    firstBox.style.display = "flex";
    task.appendChild(firstBox);

    const checkBox = document.createElement("div");
    checkBox.classList.add("checkBox");
    firstBox.appendChild(checkBox);

    const checkMark = document.createElement("input");
    checkMark.type = "checkBox";
    checkMark.classList.add("checkMark");
    checkBox.appendChild(checkMark);

    const titleBox = document.createElement("div");
    titleBox.innerText = element._title;
    titleBox.classList.add("titleBox");
    firstBox.appendChild(titleBox);

    checkMark.onclick = () => {
      if (checkMark.checked == true) {
        titleBox.style.textDecoration = "line-through";
      } else {
        titleBox.style.textDecoration = "none";
      }
    };

    const secondBox = document.createElement("div");
    secondBox.classList.add("secondBox");
    secondBox.style.display = "flex";
    task.appendChild(secondBox);

    const detailsButton = document.createElement("button");
    detailsButton.classList.add("detailsButton");
    detailsButton.innerText = "Details";
    secondBox.appendChild(detailsButton);

    detailsButton.onclick = () => {
      titleInfo.innerText = element._title;
      descriptionInfo.innerText = element._description;
      dateInfo.innerText = element._date;
      priorityInfo.innerText = element._priority;
      projectInfo.innerText = element._project;
      openTaskInfo();
    };

    const dateBox = document.createElement("div");
    dateBox.classList.add("dateBox");
    dateBox.innerText = element._date;
    secondBox.appendChild(dateBox);

    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    editButton.appendChild(createEditIcon());
    secondBox.appendChild(editButton);

    const removeTask = document.createElement("button");
    removeTask.classList.add("removeTask");
    removeTask.appendChild(createDeleteIcon());
    secondBox.appendChild(removeTask);

    removeTask.onclick = () => {
      myProjects[currentProjectIndex].tasks.splice(index, 1);
      displayTasks();
    };

    contentBox.appendChild(task);
  });
};
const displayToday = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }
  myProjects.forEach((element, index) => {
    element.tasks.forEach((element, index) => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(element._date)) == false) {
        return;
      }
      const task = document.createElement("div");
      task.classList.add("task");
      task.style.display = "flex";
      task.setAttribute("index", index);

      const firstBox = document.createElement("div");
      firstBox.classList.add("firstBox");
      firstBox.style.display = "flex";
      task.appendChild(firstBox);

      const checkBox = document.createElement("div");
      checkBox.classList.add("checkBox");
      firstBox.appendChild(checkBox);

      const checkMark = document.createElement("input");
      checkMark.type = "checkBox";
      checkMark.classList.add("checkMark");
      checkBox.appendChild(checkMark);

      const titleBox = document.createElement("div");
      titleBox.innerText = element._title;
      titleBox.classList.add("titleBox");
      firstBox.appendChild(titleBox);

      checkMark.onclick = () => {
        if (checkMark.checked == true) {
          titleBox.style.textDecoration = "line-through";
        } else {
          titleBox.style.textDecoration = "none";
        }
      };

      const secondBox = document.createElement("div");
      secondBox.classList.add("secondBox");
      secondBox.style.display = "flex";
      task.appendChild(secondBox);

      const detailsButton = document.createElement("button");
      detailsButton.classList.add("detailsButton");
      detailsButton.innerText = "Details";
      secondBox.appendChild(detailsButton);

      detailsButton.onclick = () => {
        titleInfo.innerText = element._title;
        descriptionInfo.innerText = element._description;
        dateInfo.innerText = element._date;
        priorityInfo.innerText = element._priority;
        projectInfo.innerText = element._project;
        openTaskInfo();
      };

      const dateBox = document.createElement("div");
      dateBox.classList.add("dateBox");
      dateBox.innerText = element._date;
      secondBox.appendChild(dateBox);

      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.appendChild(createEditIcon());
      secondBox.appendChild(editButton);

      const removeTask = document.createElement("button");
      removeTask.classList.add("removeTask");
      removeTask.appendChild(createDeleteIcon());
      secondBox.appendChild(removeTask);

      removeTask.onclick = () => {
        myProjects[currentProjectIndex].tasks.splice(index, 1);
        displayTasks();
      };

      contentBox.appendChild(task);
    });
  });
};
todayButton.onclick = () => {
  displayToday();
};

const displayWeek = () => {
  const contentBox = document.getElementById("content");
  while (contentBox.hasChildNodes()) {
    contentBox.removeChild(contentBox.firstChild);
  }
  myProjects.forEach((element, index) => {
    element.tasks.forEach((element, index) => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(element._date)) == false) {
        return;
      }
      const task = document.createElement("div");
      task.classList.add("task");
      task.style.display = "flex";
      task.setAttribute("index", index);

      const firstBox = document.createElement("div");
      firstBox.classList.add("firstBox");
      firstBox.style.display = "flex";
      task.appendChild(firstBox);

      const checkBox = document.createElement("div");
      checkBox.classList.add("checkBox");
      firstBox.appendChild(checkBox);

      const checkMark = document.createElement("input");
      checkMark.type = "checkBox";
      checkMark.classList.add("checkMark");
      checkBox.appendChild(checkMark);

      const titleBox = document.createElement("div");
      titleBox.innerText = element._title;
      titleBox.classList.add("titleBox");
      firstBox.appendChild(titleBox);

      checkMark.onclick = () => {
        if (checkMark.checked == true) {
          titleBox.style.textDecoration = "line-through";
        } else {
          titleBox.style.textDecoration = "none";
        }
      };

      const secondBox = document.createElement("div");
      secondBox.classList.add("secondBox");
      secondBox.style.display = "flex";
      task.appendChild(secondBox);

      const detailsButton = document.createElement("button");
      detailsButton.classList.add("detailsButton");
      detailsButton.innerText = "Details";
      secondBox.appendChild(detailsButton);

      detailsButton.onclick = () => {
        titleInfo.innerText = element._title;
        descriptionInfo.innerText = element._description;
        dateInfo.innerText = element._date;
        priorityInfo.innerText = element._priority;
        projectInfo.innerText = element._project;
        openTaskInfo();
      };

      const dateBox = document.createElement("div");
      dateBox.classList.add("dateBox");
      dateBox.innerText = element._date;
      secondBox.appendChild(dateBox);

      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.appendChild(createEditIcon());
      secondBox.appendChild(editButton);

      const removeTask = document.createElement("button");
      removeTask.classList.add("removeTask");
      removeTask.appendChild(createDeleteIcon());
      secondBox.appendChild(removeTask);

      removeTask.onclick = () => {
        myProjects[currentProjectIndex].tasks.splice(index, 1);
        displayTasks();
      };

      contentBox.appendChild(task);
    });
  });
};

weekButton.onclick = () => {
  displayWeek();
};

const Books = project("Books");
myProjects.push(Books);

const read = task("read", "read every night", "2023-02-17", "High", "Books");
Books.addTask(read);
displayProjects();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsYUFBYSxVQUFVLFVBQVUsVUFBVSxhQUFhLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksY0FB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QTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBVztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBVTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBUTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsb0RBQU8sQ0FBQyxvREFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLG9EQUFVLENBQUMsb0RBQVE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RoaXNXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRmb250LWZhbWlseTonTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogM2VtO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGhlaWdodDogNzVweDtcXG5cXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuXFx0cGFkZGluZy10b3A6IDVweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGx1c19idXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFx0d2lkdGg6IDQycHg7XFxuXFx0Ym9yZGVyOiAwcHg7XFxuXFx0bWFyZ2luLXJpZ2h0OiAyMDBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGx1c19idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmODcxNzE7XFxufVxcblxcbiNwbHVzIHtcXG5cXHR3aWR0aDo0MHB4O1xcblxcdGhlaWdodDo0MHB4O1xcblxcdGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoNjIlKSBzYXR1cmF0ZSgxNjElKSBodWUtcm90YXRlKDE3MWRlZykgYnJpZ2h0bmVzcygxMTElKSBjb250cmFzdCg4NyUpO1xcbn1cXG5cXG4jbWFpbiB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XFxuXFx0Zm9udC1zaXplOiAxLjFlbTtcXG5cXHRoZWlnaHQ6IDY3NXB4O1xcbn1cXG5cXG4jdGFicyB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdHBhZGRpbmctbGVmdDogMjBweDtcXG5cXHRwYWRkaW5nLXRvcDogMjBweCA7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA0NXB4IDQ1cHggNDVweCA0NXB4IDQ1cHg7XFxufVxcblxcbiN0aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjZlbTtcXG5cXHRjb2xvcjogI2UxMWQ0ODtcXG59XFxuXFxuLmljb24ge1xcblxcdHdpZHRoOjIwcHg7XFxuXFx0aGVpZ2h0OjIwcHg7XFxufVxcblxcbi50YWJfYnV0dG9uIHtcXG5cXHR3aWR0aDogODUlO1xcblxcdGZvbnQtc2l6ZTogLjllbTtcXG5cXHRwYWRkaW5nOiA1cHg7XFxuXFx0aGVpZ2h0OiAzNXB4O1xcblxcdGJvcmRlcjogMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYl9idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNjYmQ1ZTE7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsQm94IHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXHR6LWluZGV4OiA4O1xcblxcdGxlZnQ6IDA7XFxuXFx0dG9wOiAwO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRvdmVyZmxvdzogYXV0bztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4jZm9ybVBvcHVwIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA0OCU7XFxuICAgIHRvcDogNiU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFmMjkzNztcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNmb3JtQ29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3Qge1xcblxcdHdpZHRoOiA5MCU7XFxuXFx0cGFkZGluZzogMTVweDtcXG5cXHRtYXJnaW46IDVweCAwIDIwcHggMDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG5cXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IC45ZW07XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uc3VibWl0QnRuIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ZWJmNDI7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAyMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmNsb3NlQnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuXFx0cGFkZGluZzogMTJweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uZm9ybVRvZ2dsZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW4tbGVmdDogNjBweDtcXG59XFxuXFxuI3Byb2plY3RQb3B1cCB7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA0OCU7XFxuICAgIHRvcDogMjAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxZjI5Mzc7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNXB4IGF1dG8gYXV0bztcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuXFx0dGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi5yZW1vdmVQcm9qZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRqdXN0aWZ5LXNlbGY6IGVuZDtcXG5cXHR3aWR0aDogMjJweDtcXG59XFxuXFxuLnRhc2sge1xcblxcdGJvcmRlci1ib3R0b206IHNvbGlkICNlZjQ0NDQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGZvbnQtc2l6ZTogMWVtO1xcblxcdG1hcmdpbi1sZWZ0OiA3MHB4O1xcblxcdG1hcmdpbi1yaWdodDogNzBweDtcXG5cXHRtYXJnaW4tdG9wOiAxMHB4O1xcblxcdHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyc3RCb3gge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tCb3gge1xcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNoZWNrTWFyayB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMXB4O1xcbn1cXG5cXG4udGl0bGVCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG59XFxuXFxuLnNlY29uZEJveCB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAzNTBweDtcXG59XFxuXFxuLmRldGFpbHNCdXR0b24ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiAwO1xcblxcdGNvbG9yOiAjZmZmO1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMwZDZlZmQ7XFxuXFx0Ym9yZGVyLWNvbG9yOiAjMGQ2ZWZkO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjM7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdHBhZGRpbmc6IDZweCAxMnB4O1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuXFx0dHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZGV0YWlsc0J1dHRvbjpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogIzBiNWVkNztcXG5cXHRcXHRib3JkZXItY29sb3I6ICMwYTU4Y2E7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogMDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjI1cmVtO1xcblxcdHBhZGRpbmc6IDEycHggMTZweDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0dHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCxiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xcblxcdGNvbG9yOiAjRkZGNzAwO1xcblxcdGJvcmRlci1jb2xvcjogI0ZGRjcwMDtcXG59XFxuXFxuLmVkaXRCdXR0b246aG92ZXIge1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNGRkY3MDA7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjRkZGNzAwO1xcbn1cXG5cXG4ucmVtb3ZlVGFzayB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IDA7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG5cXHRwYWRkaW5nOiAxMnB4IDE2cHg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcXG5cXHRjb2xvcjogXFx0I0ZGNTQ3MDtcXG5cXHRib3JkZXItY29sb3I6IFxcdCNGRjU0NzA7XFxufVxcblxcbi5yZW1vdmVUYXNrOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBcXHQjRkY1NDcwO1xcblxcdFxcdGJvcmRlci1jb2xvcjogXFx0I0ZGNTQ3MDtcXG59XFxuXFxuLmRhdGVCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogLjllbTtcXG59XFxuXFxuI3Rhc2tDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA0OCU7XFxuICAgIHRvcDogNiU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzFmMjkzNztcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFx0cGFkZGluZzogMjBweDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRnYXA6IDVweDtcXG59XFxuXFxuI3Rhc2tJbmZvIHtcXG5cXHRncmlkLWNvbHVtbjogMS8zO1xcbn1cXG5cXG4uYm9sZEluZm8ge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdGFza0luZm8ge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRjb2xvcjogIzBkNmVmZDtcXG59XFxuXFxuXFx0XFxuI2NvcHlyaWdodCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcXG5cXHRmb250LXNpemU6IDEuMmVtO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGxpbmUtaGVpZ2h0OiA0MHB4O1xcblxcdFxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MscUhBQXFIO0NBQ3JILHNCQUFzQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7Q0FDWixVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0lBQ3JCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixn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QUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7QUFDZjs7O0FBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGlCQUFpQjs7QUFFbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0Zm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDNlbTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyOTM3O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDc1cHg7XFxuXFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xcblxcdHBhZGRpbmctdG9wOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsdXNfYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcblxcdHdpZHRoOiA0MnB4O1xcblxcdGJvcmRlcjogMHB4O1xcblxcdG1hcmdpbi1yaWdodDogMjAwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BsdXNfYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjg3MTcxO1xcbn1cXG5cXG4jcGx1cyB7XFxuXFx0d2lkdGg6NDBweDtcXG5cXHRoZWlnaHQ6NDBweDtcXG5cXHRmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDYyJSkgc2F0dXJhdGUoMTYxJSkgaHVlLXJvdGF0ZSgxNzFkZWcpIGJyaWdodG5lc3MoMTExJSkgY29udHJhc3QoODclKTtcXG59XFxuXFxuI21haW4ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xcblxcdGZvbnQtc2l6ZTogMS4xZW07XFxuXFx0aGVpZ2h0OiA2NzVweDtcXG59XFxuXFxuI3RhYnMge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG5cXHRjb2xvcjogIzExMTgyNztcXG5cXHRwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuXFx0cGFkZGluZy10b3A6IDIwcHggO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogNDVweCA0NXB4IDQ1cHggNDVweCA0NXB4O1xcbn1cXG5cXG4jdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS42ZW07XFxuXFx0Y29sb3I6ICNlMTFkNDg7XFxufVxcblxcbi5pY29uIHtcXG5cXHR3aWR0aDoyMHB4O1xcblxcdGhlaWdodDoyMHB4O1xcbn1cXG5cXG4udGFiX2J1dHRvbiB7XFxuXFx0d2lkdGg6IDg1JTtcXG5cXHRmb250LXNpemU6IC45ZW07XFxuXFx0cGFkZGluZzogNXB4O1xcblxcdGhlaWdodDogMzVweDtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJfYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbEJveCB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFx0ei1pbmRleDogODtcXG5cXHRsZWZ0OiAwO1xcblxcdHRvcDogMDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuI2Zvcm1Qb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNDglO1xcbiAgICB0b3A6IDYlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxZjI5Mzc7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4jZm9ybUNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0IHtcXG5cXHR3aWR0aDogOTAlO1xcblxcdHBhZGRpbmc6IDE1cHg7XFxuXFx0bWFyZ2luOiA1cHggMCAyMHB4IDA7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuXFx0YmFja2dyb3VuZDogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAuOWVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnN1Ym1pdEJ0biB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGViZjQyO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG5cXHRtYXJnaW4tbGVmdDogMjBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5jbG9zZUJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcblxcdHBhZGRpbmc6IDEycHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDVweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmZvcm1Ub2dnbGUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWFyZ2luLWxlZnQ6IDYwcHg7XFxufVxcblxcbiNwcm9qZWN0UG9wdXAge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNDglO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNSUpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMWYyOTM3O1xcblxcdGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnByb2plY3Qge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjVweCBhdXRvIGF1dG87XFxufVxcblxcbi5wcm9qZWN0VGl0bGUge1xcblxcdHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4ucmVtb3ZlUHJvamVjdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG5cXHRib3JkZXI6IDBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0anVzdGlmeS1zZWxmOiBlbmQ7XFxuXFx0d2lkdGg6IDIycHg7XFxufVxcblxcbi50YXNrIHtcXG5cXHRib3JkZXItYm90dG9tOiBzb2xpZCAjZWY0NDQ0O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRmb250LXNpemU6IDFlbTtcXG5cXHRtYXJnaW4tbGVmdDogNzBweDtcXG5cXHRtYXJnaW4tcmlnaHQ6IDcwcHg7XFxuXFx0bWFyZ2luLXRvcDogMTBweDtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmZpcnN0Qm94IHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLmNoZWNrQm94IHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jaGVja01hcmsge1xcbiAgd2lkdGg6IDE1cHg7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTFweDtcXG59XFxuXFxuLnRpdGxlQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC45ZW07XFxufVxcblxcbi5zZWNvbmRCb3gge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR3aWR0aDogMzUwcHg7XFxufVxcblxcbi5kZXRhaWxzQnV0dG9uIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogMDtcXG5cXHRjb2xvcjogI2ZmZjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkO1xcblxcdGJvcmRlci1jb2xvcjogIzBkNmVmZDtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRsaW5lLWhlaWdodDogMS4zO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRwYWRkaW5nOiA2cHggMTJweDtcXG5cXHRmb250LXNpemU6IDE1cHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogLjI1cmVtO1xcblxcdHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRldGFpbHNCdXR0b246aG92ZXIge1xcblxcdFxcdGNvbG9yOiAjZmZmO1xcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICMwYjVlZDc7XFxuXFx0XFx0Ym9yZGVyLWNvbG9yOiAjMGE1OGNhO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbiB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IDA7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcblxcdGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcXG5cXHRwYWRkaW5nOiAxMnB4IDE2cHg7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcXG5cXHRjb2xvcjogI0ZGRjcwMDtcXG5cXHRib3JkZXItY29sb3I6ICNGRkY3MDA7XFxufVxcblxcbi5lZGl0QnV0dG9uOmhvdmVyIHtcXG5cXHRcXHRjb2xvcjogI2ZmZjtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGNzAwO1xcblxcdFxcdGJvcmRlci1jb2xvcjogI0ZGRjcwMDtcXG59XFxuXFxuLnJlbW92ZVRhc2sge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiAwO1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItcmFkaXVzOiAuMjVyZW07XFxuXFx0cGFkZGluZzogMTJweCAxNnB4O1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHR0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XFxuXFx0Y29sb3I6IFxcdCNGRjU0NzA7XFxuXFx0Ym9yZGVyLWNvbG9yOiBcXHQjRkY1NDcwO1xcbn1cXG5cXG4ucmVtb3ZlVGFzazpob3ZlciB7XFxuXFx0XFx0Y29sb3I6ICNmZmY7XFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogXFx0I0ZGNTQ3MDtcXG5cXHRcXHRib3JkZXItY29sb3I6IFxcdCNGRjU0NzA7XFxufVxcblxcbi5kYXRlQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IC45ZW07XFxufVxcblxcbiN0YXNrQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNDglO1xcbiAgICB0b3A6IDYlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1JSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxZjI5Mzc7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0Z2FwOiA1cHg7XFxufVxcblxcbiN0YXNrSW5mbyB7XFxuXFx0Z3JpZC1jb2x1bW46IDEvMztcXG59XFxuXFxuLmJvbGRJbmZvIHtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Rhc2tJbmZvIHtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Y29sb3I6ICMwZDZlZmQ7XFxufVxcblxcblxcdFxcbiNjb3B5cmlnaHQge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICMxZjI5Mzc7XFxuXFx0Zm9udC1zaXplOiAxLjJlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRsaW5lLWhlaWdodDogNDBweDtcXG5cXHRcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gXCIuLi9zdGFydE9mV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcilcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDMxIEF1Z3VzdCAyMDE0IGFuZCA0IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVXZWVrKG5ldyBEYXRlKDIwMTQsIDcsIDMxKSwgbmV3IERhdGUoMjAxNCwgOCwgNCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSwge1xuICogICB3ZWVrU3RhcnRzT246IDFcbiAqIH0pXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIEphbnVhcnkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgMCwgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIG9wdGlvbnMpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVXZWVrIGZyb20gXCIuLi9pc1NhbWVXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVGhpc1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lV2VlayhkaXJ0eURhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSB0b0ludGVnZXIoKF9vcHRpb25zJGFkZGl0aW9uYWxEaSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgIT09IHZvaWQgMCA/IF9vcHRpb25zJGFkZGl0aW9uYWxEaSA6IDIpO1xuXG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cblxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIGRhdGVTdHJpbmdzID0gc3BsaXREYXRlU3RyaW5nKGFyZ3VtZW50KTtcbiAgdmFyIGRhdGU7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cblxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciB0aW1lID0gMDtcbiAgdmFyIG9mZnNldDtcblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG5cbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lem9uZSkge1xuICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpO1xuXG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7IC8vIGpzIHBhcnNlZCBzdHJpbmcgYXNzdW1pbmcgaXQncyBpbiBVVEMgdGltZXpvbmVcbiAgICAvLyBidXQgd2UgbmVlZCBpdCB0byBiZSBwYXJzZWQgaW4gb3VyIHRpbWV6b25lXG4gICAgLy8gc28gd2UgdXNlIHV0YyB2YWx1ZXMgdG8gYnVpbGQgZGF0ZSBpbiBvdXIgdGltZXpvbmUuXG4gICAgLy8gWWVhciB2YWx1ZXMgZnJvbSAwIHRvIDk5IG1hcCB0byB0aGUgeWVhcnMgMTkwMCB0byAxOTk5XG4gICAgLy8gc28gc2V0IHllYXIgZXhwbGljaXRseSB3aXRoIHNldEZ1bGxZZWFyLlxuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nKGRhdGVTdHJpbmcpIHtcbiAgdmFyIGRhdGVTdHJpbmdzID0ge307XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMuZGF0ZVRpbWVEZWxpbWl0ZXIpO1xuICB2YXIgdGltZVN0cmluZzsgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cblxuICBpZiAoYXJyYXkubGVuZ3RoID4gMikge1xuICAgIHJldHVybiBkYXRlU3RyaW5ncztcbiAgfVxuXG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcblxuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGltZVN0cmluZykge1xuICAgIHZhciB0b2tlbiA9IHBhdHRlcm5zLnRpbWV6b25lLmV4ZWModGltZVN0cmluZyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VZZWFyKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig/OihcXFxcZHs0fXxbKy1dXFxcXGR7JyArICg0ICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSl8KFxcXFxkezJ9fFsrLV1cXFxcZHsnICsgKDIgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KSQpJyk7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2gocmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7IC8vIGVpdGhlciB5ZWFyIG9yIGNlbnR1cnkgaXMgbnVsbCwgbm90IGJvdGhcblxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGlzV2Vla0RhdGUgPSAhIWNhcHR1cmVzWzRdO1xuICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtb250aCA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMl0pIC0gMTtcbiAgdmFyIGRheSA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbM10pO1xuICB2YXIgd2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNF0pO1xuICB2YXIgZGF5T2ZXZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s1XSkgLSAxO1xuXG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcblxuICAgIGlmICghdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXkpIHx8ICF2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lU3RyaW5nKSB7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWVTdHJpbmcubWF0Y2godGltZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIE5hTjsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHRpbWVcblxuICB2YXIgaG91cnMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1pbnV0ZXMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzJdKTtcbiAgdmFyIHNlY29uZHMgPSBwYXJzZVRpbWVVbml0KGNhcHR1cmVzWzNdKTtcblxuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHBhcnNlRmxvYXQodmFsdWUucmVwbGFjZSgnLCcsICcuJykpIHx8IDA7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKiAoaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUpO1xufVxuXG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59IC8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG4vLyBGZWJydWFyeSBpcyBudWxsIHRvIGhhbmRsZSB0aGUgbGVhcCB5ZWFyICh1c2luZyB8fClcblxuXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5cbmZ1bmN0aW9uIGlzTGVhcFllYXJJbmRleCh5ZWFyKSB7XG4gIHJldHVybiB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2Vla0RhdGUoX3llYXIsIHdlZWssIGRheSkge1xuICByZXR1cm4gd2VlayA+PSAxICYmIHdlZWsgPD0gNTMgJiYgZGF5ID49IDAgJiYgZGF5IDw9IDY7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuXG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWV6b25lKF9ob3VycywgbWludXRlcykge1xuICByZXR1cm4gbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPD0gNTk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBwcm9qZWN0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZm9ybWF0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi9pbWFnZXMvZWRpdC5zdmdcIjtcbmltcG9ydCB7IGlzVG9kYXksIGlzVGhpc1dlZWssIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmxldCBteVByb2plY3RzID0gW107XG5cbmNvbnN0IHByb2plY3QgPSAodGl0bGUpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgdGFza3MgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBfdGl0bGUsXG4gICAgdGFza3MsXG4gICAgYWRkVGFzayh0YXNrKSB7XG4gICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIH0sXG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgdGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9LFxuICB9O1xufTtcblxuY29uc3QgdGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByaW9yaXR5LCBwcm9qZWN0VGl0bGUpID0+IHtcbiAgbGV0IF90aXRsZSA9IHRpdGxlO1xuICBsZXQgX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIGxldCBfZGF0ZSA9IGRhdGU7XG4gIGxldCBfcHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbGV0IF9wcm9qZWN0ID0gcHJvamVjdFRpdGxlO1xuICByZXR1cm4ge1xuICAgIF90aXRsZSxcbiAgICBfZGVzY3JpcHRpb24sXG4gICAgX2RhdGUsXG4gICAgX3ByaW9yaXR5LFxuICAgIF9wcm9qZWN0LFxuICB9O1xufTtcblxuY29uc3QgaW5ib3ggPSBwcm9qZWN0KFwiSW5ib3hcIik7XG5teVByb2plY3RzLnB1c2goaW5ib3gpO1xuXG5jb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tUaXRsZVwiKTtcbmNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tEYXRlXCIpO1xuY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJpb3JpdHlcIik7XG5jb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1Byb2plY3RcIik7XG5jb25zdCBwbHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbHVzX2J1dHRvblwiKTtcbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZVwiKTtcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RcIik7XG5jb25zdCBjbG9zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUHJvamVjdFwiKTtcbmNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbmNvbnN0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFByb2plY3RcIik7XG5jb25zdCBzdWJtaXRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5jb25zdCB0aXRsZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlSW5mb1wiKTtcbmNvbnN0IGRlc2NyaXB0aW9uSW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25JbmZvXCIpO1xuY29uc3QgZGF0ZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVJbmZvXCIpO1xuY29uc3QgcHJpb3JpdHlJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eUluZm9cIik7XG5jb25zdCBwcm9qZWN0SW5mbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdEluZm9cIik7XG5jb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XG5jb25zdCB3ZWVrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrXCIpO1xuXG5jb25zdCBjbG9zZUluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlVGFza0luZm9cIik7XG5cbmNvbnN0IHJlZnJlc2hGb3JtID0gKCkgPT4ge1xuICB0YXNrVGl0bGUudmFsdWUgPSB0YXNrVGl0bGUuZGVmYXVsdFZhbHVlO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrRGVzY3JpcHRpb24uZGVmYXVsdFZhbHVlO1xuICB0YXNrRGF0ZS52YWx1ZSA9IHRhc2tEYXRlLmRlZmF1bHRWYWx1ZTtcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFza1ByaW9yaXR5LmRlZmF1bHRWYWx1ZTtcbiAgdGFza1Byb2plY3QudmFsdWUgPSB0YXNrUHJvamVjdC5kZWZhdWx0VmFsdWU7XG59O1xuXG5mdW5jdGlvbiBvcGVuRm9ybSgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQb3B1cFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZUZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUG9wdXBcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBvcGVuUHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdEZvcm0oKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFBvcHVwXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gb3BlblRhc2tJbmZvKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVRhc2tJbmZvKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tNb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbnBsdXMub25jbGljayA9ICgpID0+IHtcbiAgb3BlbkZvcm0oKTtcbiAgZGlzcGxheVByb2plY3RPcHRpb25zKCk7XG59O1xuY2xvc2Uub25jbGljayA9ICgpID0+IHtcbiAgcmVmcmVzaEZvcm0oKTtcbiAgY2xvc2VGb3JtKCk7XG59O1xuXG5zdWJtaXRUYXNrLm9uY2xpY2sgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKFxuICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUsXG4gICAgdGFza0RhdGUudmFsdWUsXG4gICAgdGFza1ByaW9yaXR5LnZhbHVlLFxuICAgIHRhc2tQcm9qZWN0LnZhbHVlXG4gICk7XG4gIGNvbnN0IHByb2plY3RJbmRleCA9XG4gICAgdGFza1Byb2plY3Qub3B0aW9uc1t0YXNrUHJvamVjdC5zZWxlY3RlZEluZGV4XS5nZXRBdHRyaWJ1dGUoXCJpbmRleFwiKTtcbiAgbXlQcm9qZWN0c1twcm9qZWN0SW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RJbmRleCk7XG4gIGNvbnNvbGUubG9nKG15UHJvamVjdHMpO1xuICBjbG9zZUZvcm0oKTtcbiAgcmVmcmVzaEZvcm0oKTtcbn07XG5cbmFkZFByb2plY3Qub25jbGljayA9IG9wZW5Qcm9qZWN0Rm9ybTtcbmNsb3NlUHJvamVjdC5vbmNsaWNrID0gY2xvc2VQcm9qZWN0Rm9ybTtcblxuc3VibWl0UHJvamVjdC5vbmNsaWNrID0gKGUpID0+IHtcbiAgaWYgKHByb2plY3ROYW1lLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3QocHJvamVjdE5hbWUudmFsdWUpO1xuICAgIG15UHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IHByb2plY3ROYW1lLmRlZmF1bHRWYWx1ZTtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gICAgZGlzcGxheVByb2plY3RzKCk7XG4gIH1cbn07XG5cbmNsb3NlSW5mby5vbmNsaWNrID0gY2xvc2VUYXNrSW5mbztcblxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQb3B1cFwiKTtcbiAgbGV0IG1vZGFsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdFBvcHVwXCIpO1xuICBsZXQgbW9kYWxJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrTW9kYWxcIik7XG4gIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICByZWZyZXNoRm9ybSgpO1xuICAgIGNsb3NlRm9ybSgpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbFByb2plY3QpIHtcbiAgICBjbG9zZVByb2plY3RGb3JtKCk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsSW5mbykge1xuICAgIGNsb3NlVGFza0luZm8oKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEljb24gPSAoKSA9PiB7XG4gIGNvbnN0IG15UHJvamVjdEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlQcm9qZWN0SWNvbi5zcmMgPSBwcm9qZWN0SWNvbjtcbiAgbXlQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgcmV0dXJuIG15UHJvamVjdEljb247XG59O1xuXG5jb25zdCBjcmVhdGVEZWxldGVJY29uID0gKCkgPT4ge1xuICBjb25zdCBteURlbGV0ZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgbXlEZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb247XG4gIG15RGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgcmV0dXJuIG15RGVsZXRlSWNvbjtcbn07XG5cbmNvbnN0IGNyZWF0ZUVkaXRJY29uID0gKCkgPT4ge1xuICBjb25zdCBteUVkaXRJY29uID0gbmV3IEltYWdlKCk7XG4gIG15RWRpdEljb24uc3JjID0gZWRpdEljb247XG4gIG15RWRpdEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIHJldHVybiBteUVkaXRJY29uO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3RzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNcIik7XG4gIHdoaWxlIChwcm9qZWN0cy5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qZWN0cy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIG15UHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJ0YWJfYnV0dG9uXCIpO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIHByb2plY3Quc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3QuZ2V0QXR0cmlidXRlKFwiaW5kZXhcIik7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0VGl0bGVcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gZWxlbWVudC5fdGl0bGU7XG5cbiAgICBsZXQgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZChcInJlbW92ZVByb2plY3RcIik7XG4gICAgcmVtb3ZlLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUljb24oKSk7XG4gICAgcmVtb3ZlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBteVByb2plY3RzLnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgZGlzcGxheVByb2plY3RzKCk7XG4gICAgfTtcblxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEljb24oKSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuXG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjdXJyZW50UHJvamVjdEluZGV4ID0gcHJvamVjdEluZGV4O1xuICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheVByb2plY3RPcHRpb25zID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0T3B0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrUHJvamVjdFwiKTtcbiAgd2hpbGUgKHByb2plY3RPcHRpb24uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgcHJvamVjdE9wdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0T3B0aW9uLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbXlQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE9wdGlvblwiKTtcbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGVsZW1lbnQuX3RpdGxlO1xuICAgIG9wdGlvbi5pbm5lclRleHQgPSBlbGVtZW50Ll90aXRsZTtcblxuICAgIHByb2plY3RPcHRpb24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG59O1xuXG5sZXQgY3VycmVudFByb2plY3RJbmRleCA9IDA7XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgd2hpbGUgKGNvbnRlbnRCb3guaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgY29udGVudEJveC5yZW1vdmVDaGlsZChjb250ZW50Qm94LmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGFzay5zZXRBdHRyaWJ1dGUoXCJpbmRleFwiLCBpbmRleCk7XG5cbiAgICBjb25zdCBmaXJzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlyc3RCb3guY2xhc3NMaXN0LmFkZChcImZpcnN0Qm94XCIpO1xuICAgIGZpcnN0Qm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0YXNrLmFwcGVuZENoaWxkKGZpcnN0Qm94KTtcblxuICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XG4gICAgZmlyc3RCb3guYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgY29uc3QgY2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNoZWNrTWFyay50eXBlID0gXCJjaGVja0JveFwiO1xuICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tNYXJrXCIpO1xuICAgIGNoZWNrQm94LmFwcGVuZENoaWxkKGNoZWNrTWFyayk7XG5cbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVCb3guaW5uZXJUZXh0ID0gZWxlbWVudC5fdGl0bGU7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZChcInRpdGxlQm94XCIpO1xuICAgIGZpcnN0Qm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcblxuICAgIGNoZWNrTWFyay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKGNoZWNrTWFyay5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgdGl0bGVCb3guc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGVCb3guc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2Vjb25kQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWNvbmRCb3guY2xhc3NMaXN0LmFkZChcInNlY29uZEJveFwiKTtcbiAgICBzZWNvbmRCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRhc2suYXBwZW5kQ2hpbGQoc2Vjb25kQm94KTtcblxuICAgIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImRldGFpbHNCdXR0b25cIik7XG4gICAgZGV0YWlsc0J1dHRvbi5pbm5lclRleHQgPSBcIkRldGFpbHNcIjtcbiAgICBzZWNvbmRCb3guYXBwZW5kQ2hpbGQoZGV0YWlsc0J1dHRvbik7XG5cbiAgICBkZXRhaWxzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aXRsZUluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fdGl0bGU7XG4gICAgICBkZXNjcmlwdGlvbkluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fZGVzY3JpcHRpb247XG4gICAgICBkYXRlSW5mby5pbm5lclRleHQgPSBlbGVtZW50Ll9kYXRlO1xuICAgICAgcHJpb3JpdHlJbmZvLmlubmVyVGV4dCA9IGVsZW1lbnQuX3ByaW9yaXR5O1xuICAgICAgcHJvamVjdEluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fcHJvamVjdDtcbiAgICAgIG9wZW5UYXNrSW5mbygpO1xuICAgIH07XG5cbiAgICBjb25zdCBkYXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkYXRlQm94LmNsYXNzTGlzdC5hZGQoXCJkYXRlQm94XCIpO1xuICAgIGRhdGVCb3guaW5uZXJUZXh0ID0gZWxlbWVudC5fZGF0ZTtcbiAgICBzZWNvbmRCb3guYXBwZW5kQ2hpbGQoZGF0ZUJveCk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24uYXBwZW5kQ2hpbGQoY3JlYXRlRWRpdEljb24oKSk7XG4gICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlVGFzay5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlVGFza1wiKTtcbiAgICByZW1vdmVUYXNrLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUljb24oKSk7XG4gICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuXG4gICAgcmVtb3ZlVGFzay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgfTtcblxuICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQodGFzayk7XG4gIH0pO1xufTtcbmNvbnN0IGRpc3BsYXlUb2RheSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgd2hpbGUgKGNvbnRlbnRCb3guaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgY29udGVudEJveC5yZW1vdmVDaGlsZChjb250ZW50Qm94LmZpcnN0Q2hpbGQpO1xuICB9XG4gIG15UHJvamVjdHMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBlbGVtZW50LnRhc2tzLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoaXNUb2RheShwYXJzZUlTTyhlbGVtZW50Ll9kYXRlKSkgPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgdGFzay5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB0YXNrLnNldEF0dHJpYnV0ZShcImluZGV4XCIsIGluZGV4KTtcblxuICAgICAgY29uc3QgZmlyc3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmlyc3RCb3guY2xhc3NMaXN0LmFkZChcImZpcnN0Qm94XCIpO1xuICAgICAgZmlyc3RCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChmaXJzdEJveCk7XG5cbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveFwiKTtcbiAgICAgIGZpcnN0Qm94LmFwcGVuZENoaWxkKGNoZWNrQm94KTtcblxuICAgICAgY29uc3QgY2hlY2tNYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY2hlY2tNYXJrLnR5cGUgPSBcImNoZWNrQm94XCI7XG4gICAgICBjaGVja01hcmsuY2xhc3NMaXN0LmFkZChcImNoZWNrTWFya1wiKTtcbiAgICAgIGNoZWNrQm94LmFwcGVuZENoaWxkKGNoZWNrTWFyayk7XG5cbiAgICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRpdGxlQm94LmlubmVyVGV4dCA9IGVsZW1lbnQuX3RpdGxlO1xuICAgICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZChcInRpdGxlQm94XCIpO1xuICAgICAgZmlyc3RCb3guYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuXG4gICAgICBjaGVja01hcmsub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGNoZWNrTWFyay5jaGVja2VkID09IHRydWUpIHtcbiAgICAgICAgICB0aXRsZUJveC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGVCb3guc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3Qgc2Vjb25kQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlY29uZEJveC5jbGFzc0xpc3QuYWRkKFwic2Vjb25kQm94XCIpO1xuICAgICAgc2Vjb25kQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoc2Vjb25kQm94KTtcblxuICAgICAgY29uc3QgZGV0YWlsc0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZXRhaWxzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzQnV0dG9uXCIpO1xuICAgICAgZGV0YWlsc0J1dHRvbi5pbm5lclRleHQgPSBcIkRldGFpbHNcIjtcbiAgICAgIHNlY29uZEJveC5hcHBlbmRDaGlsZChkZXRhaWxzQnV0dG9uKTtcblxuICAgICAgZGV0YWlsc0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aXRsZUluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fdGl0bGU7XG4gICAgICAgIGRlc2NyaXB0aW9uSW5mby5pbm5lclRleHQgPSBlbGVtZW50Ll9kZXNjcmlwdGlvbjtcbiAgICAgICAgZGF0ZUluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fZGF0ZTtcbiAgICAgICAgcHJpb3JpdHlJbmZvLmlubmVyVGV4dCA9IGVsZW1lbnQuX3ByaW9yaXR5O1xuICAgICAgICBwcm9qZWN0SW5mby5pbm5lclRleHQgPSBlbGVtZW50Ll9wcm9qZWN0O1xuICAgICAgICBvcGVuVGFza0luZm8oKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGRhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGF0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZUJveFwiKTtcbiAgICAgIGRhdGVCb3guaW5uZXJUZXh0ID0gZWxlbWVudC5fZGF0ZTtcbiAgICAgIHNlY29uZEJveC5hcHBlbmRDaGlsZChkYXRlQm94KTtcblxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0QnV0dG9uXCIpO1xuICAgICAgZWRpdEJ1dHRvbi5hcHBlbmRDaGlsZChjcmVhdGVFZGl0SWNvbigpKTtcbiAgICAgIHNlY29uZEJveC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgY29uc3QgcmVtb3ZlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICByZW1vdmVUYXNrLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVUYXNrXCIpO1xuICAgICAgcmVtb3ZlVGFzay5hcHBlbmRDaGlsZChjcmVhdGVEZWxldGVJY29uKCkpO1xuICAgICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKHJlbW92ZVRhc2spO1xuXG4gICAgICByZW1vdmVUYXNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKCk7XG4gICAgICB9O1xuXG4gICAgICBjb250ZW50Qm94LmFwcGVuZENoaWxkKHRhc2spO1xuICAgIH0pO1xuICB9KTtcbn07XG50b2RheUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICBkaXNwbGF5VG9kYXkoKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlXZWVrID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICB3aGlsZSAoY29udGVudEJveC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBjb250ZW50Qm94LnJlbW92ZUNoaWxkKGNvbnRlbnRCb3guZmlyc3RDaGlsZCk7XG4gIH1cbiAgbXlQcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGVsZW1lbnQudGFza3MuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpc1RoaXNXZWVrKHBhcnNlSVNPKGVsZW1lbnQuX2RhdGUpKSA9PSBmYWxzZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB0YXNrLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIHRhc2suc2V0QXR0cmlidXRlKFwiaW5kZXhcIiwgaW5kZXgpO1xuXG4gICAgICBjb25zdCBmaXJzdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaXJzdEJveC5jbGFzc0xpc3QuYWRkKFwiZmlyc3RCb3hcIik7XG4gICAgICBmaXJzdEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGZpcnN0Qm94KTtcblxuICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICAgICAgZmlyc3RCb3guYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuXG4gICAgICBjb25zdCBjaGVja01hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBjaGVja01hcmsudHlwZSA9IFwiY2hlY2tCb3hcIjtcbiAgICAgIGNoZWNrTWFyay5jbGFzc0xpc3QuYWRkKFwiY2hlY2tNYXJrXCIpO1xuICAgICAgY2hlY2tCb3guYXBwZW5kQ2hpbGQoY2hlY2tNYXJrKTtcblxuICAgICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGl0bGVCb3guaW5uZXJUZXh0ID0gZWxlbWVudC5fdGl0bGU7XG4gICAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKFwidGl0bGVCb3hcIik7XG4gICAgICBmaXJzdEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG5cbiAgICAgIGNoZWNrTWFyay5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICBpZiAoY2hlY2tNYXJrLmNoZWNrZWQgPT0gdHJ1ZSkge1xuICAgICAgICAgIHRpdGxlQm94LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZUJveC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBzZWNvbmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2Vjb25kQm94LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRCb3hcIik7XG4gICAgICBzZWNvbmRCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgdGFzay5hcHBlbmRDaGlsZChzZWNvbmRCb3gpO1xuXG4gICAgICBjb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImRldGFpbHNCdXR0b25cIik7XG4gICAgICBkZXRhaWxzQnV0dG9uLmlubmVyVGV4dCA9IFwiRGV0YWlsc1wiO1xuICAgICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKGRldGFpbHNCdXR0b24pO1xuXG4gICAgICBkZXRhaWxzQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHRpdGxlSW5mby5pbm5lclRleHQgPSBlbGVtZW50Ll90aXRsZTtcbiAgICAgICAgZGVzY3JpcHRpb25JbmZvLmlubmVyVGV4dCA9IGVsZW1lbnQuX2Rlc2NyaXB0aW9uO1xuICAgICAgICBkYXRlSW5mby5pbm5lclRleHQgPSBlbGVtZW50Ll9kYXRlO1xuICAgICAgICBwcmlvcml0eUluZm8uaW5uZXJUZXh0ID0gZWxlbWVudC5fcHJpb3JpdHk7XG4gICAgICAgIHByb2plY3RJbmZvLmlubmVyVGV4dCA9IGVsZW1lbnQuX3Byb2plY3Q7XG4gICAgICAgIG9wZW5UYXNrSW5mbygpO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZGF0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkYXRlQm94LmNsYXNzTGlzdC5hZGQoXCJkYXRlQm94XCIpO1xuICAgICAgZGF0ZUJveC5pbm5lclRleHQgPSBlbGVtZW50Ll9kYXRlO1xuICAgICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKGRhdGVCb3gpO1xuXG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXRCdXR0b25cIik7XG4gICAgICBlZGl0QnV0dG9uLmFwcGVuZENoaWxkKGNyZWF0ZUVkaXRJY29uKCkpO1xuICAgICAgc2Vjb25kQm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgICBjb25zdCByZW1vdmVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHJlbW92ZVRhc2suY2xhc3NMaXN0LmFkZChcInJlbW92ZVRhc2tcIik7XG4gICAgICByZW1vdmVUYXNrLmFwcGVuZENoaWxkKGNyZWF0ZURlbGV0ZUljb24oKSk7XG4gICAgICBzZWNvbmRCb3guYXBwZW5kQ2hpbGQocmVtb3ZlVGFzayk7XG5cbiAgICAgIHJlbW92ZVRhc2sub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBkaXNwbGF5VGFza3MoKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnRlbnRCb3guYXBwZW5kQ2hpbGQodGFzayk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxud2Vla0J1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICBkaXNwbGF5V2VlaygpO1xufTtcblxuY29uc3QgQm9va3MgPSBwcm9qZWN0KFwiQm9va3NcIik7XG5teVByb2plY3RzLnB1c2goQm9va3MpO1xuXG5jb25zdCByZWFkID0gdGFzayhcInJlYWRcIiwgXCJyZWFkIGV2ZXJ5IG5pZ2h0XCIsIFwiMjAyMy0wMi0xN1wiLCBcIkhpZ2hcIiwgXCJCb29rc1wiKTtcbkJvb2tzLmFkZFRhc2socmVhZCk7XG5kaXNwbGF5UHJvamVjdHMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==