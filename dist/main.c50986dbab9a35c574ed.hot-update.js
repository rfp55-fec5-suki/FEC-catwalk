webpackHotUpdate("main",{

/***/ "./src/reviews/reviewTile/ReviewTile.jsx":
/*!***********************************************!*\
  !*** ./src/reviews/reviewTile/ReviewTile.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sharedComponents_StarRating_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../sharedComponents/StarRating.jsx */ \"./src/sharedComponents/StarRating.jsx\");\n/* harmony import */ var _Checkmark_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkmark.svg */ \"./src/reviews/reviewTile/Checkmark.svg\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\nvar ReviewTile = /*#__PURE__*/function (_React$Component) {\n  _inherits(ReviewTile, _React$Component);\n\n  var _super = _createSuper(ReviewTile);\n\n  function ReviewTile(props) {\n    var _this;\n\n    _classCallCheck(this, ReviewTile);\n\n    _this = _super.call(this, props);\n    _this.monthNames = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\n    var date = new Date(props.review.date);\n    var _ref = [date.getMonth(), date.getDate(), date.getFullYear()],\n        month = _ref[0],\n        day = _ref[1],\n        year = _ref[2];\n    _this.month = _this.monthNames[month];\n    _this.day = day;\n    _this.year = year;\n    return _this;\n  }\n\n  _createClass(ReviewTile, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sharedComponents_StarRating_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), this.props.review.reviewer_name, \" \", this.month, \" \", this.day, \", \", this.year, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, this.props.review.summary), this.props.review.body, this.props.review.recommend ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: _Checkmark_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n      }), \"I recommend this product\") : null, this.props.review.response ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Response: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), this.props.review.response) : null, \"Helpful? Yes(\", this.props.review.helpfulness, \")\");\n    }\n  }]);\n\n  return ReviewTile;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewTile);\n\n//# sourceURL=webpack:///./src/reviews/reviewTile/ReviewTile.jsx?");

/***/ }),

/***/ "./src/sharedComponents/StarRating.jsx":
/*!*********************************************!*\
  !*** ./src/sharedComponents/StarRating.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stars/starsIndex.js */ \"./src/sharedComponents/Stars/starsIndex.js\");\n\n\n\nvar StarRating = function StarRating(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"StarRating\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarRating);\n\n//# sourceURL=webpack:///./src/sharedComponents/StarRating.jsx?");

/***/ }),

/***/ "./src/sharedComponents/Stars/25Star.svg":
/*!***********************************************!*\
  !*** ./src/sharedComponents/Stars/25Star.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ff193d72ed893ad41bff2c6d662a123f-25Star.svg\");\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/25Star.svg?");

/***/ }),

/***/ "./src/sharedComponents/Stars/50Star.svg":
/*!***********************************************!*\
  !*** ./src/sharedComponents/Stars/50Star.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/cf52630729d8ff22eadfe36ed81a66cc-50Star.svg\");\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/50Star.svg?");

/***/ }),

/***/ "./src/sharedComponents/Stars/75Star.svg":
/*!***********************************************!*\
  !*** ./src/sharedComponents/Stars/75Star.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/5b57551ba86b41b16910827be01ef2cd-75Star.svg\");\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/75Star.svg?");

/***/ }),

/***/ "./src/sharedComponents/Stars/emptyStar.svg":
/*!**************************************************!*\
  !*** ./src/sharedComponents/Stars/emptyStar.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ecf44e04c9928e9a5de712921873aa15-emptyStar.svg\");\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/emptyStar.svg?");

/***/ }),

/***/ "./src/sharedComponents/Stars/fullStar.svg":
/*!*************************************************!*\
  !*** ./src/sharedComponents/Stars/fullStar.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/fd0d254b8b1a385f99fe13af3c9d17b4-fullStar.svg\");\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/fullStar.svg?");

/***/ }),

/***/ "./src/sharedComponents/Stars/starsIndex.js":
/*!**************************************************!*\
  !*** ./src/sharedComponents/Stars/starsIndex.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emptyStar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyStar.svg */ \"./src/sharedComponents/Stars/emptyStar.svg\");\n/* harmony import */ var _25Star_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./25Star.svg */ \"./src/sharedComponents/Stars/25Star.svg\");\n/* harmony import */ var _50Star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./50Star.svg */ \"./src/sharedComponents/Stars/50Star.svg\");\n/* harmony import */ var _75Star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./75Star.svg */ \"./src/sharedComponents/Stars/75Star.svg\");\n/* harmony import */ var _fullStar_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullStar.svg */ \"./src/sharedComponents/Stars/fullStar.svg\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  empty: _emptyStar_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  quarter: _25Star_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  half: _50Star_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  threeQuarter: _75Star_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  full: _fullStar_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/sharedComponents/Stars/starsIndex.js?");

/***/ })

})