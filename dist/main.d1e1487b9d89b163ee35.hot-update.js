webpackHotUpdate("main",{

/***/ "./src/sharedComponents/StarRating.jsx":
/*!*********************************************!*\
  !*** ./src/sharedComponents/StarRating.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stars/starsIndex.js */ \"./src/sharedComponents/Stars/starsIndex.js\");\n\n\n\nvar StarRating = function StarRating(props) {\n  var stars = [];\n  var fraction = (props.rating % 1).toFixed(2);\n\n  for (var i = 1; i <= props.rating; i++) {\n    stars.push(_Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"full\"]);\n  }\n\n  if (fraction >= .75) {\n    stars.push(_Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"threeQuarter\"]);\n  } else if (fraction >= .5) {\n    stars.push(_Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"half\"]);\n  } else if (fraction >= .25) {\n    stars.push(_Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"quarter\"]);\n  }\n\n  while (stars.length < 5) {\n    stars.push(_Stars_starsIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"empty\"]);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: stars[0]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: stars[1]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: stars[2]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: stars[3]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: stars[4]\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarRating);\n\n//# sourceURL=webpack:///./src/sharedComponents/StarRating.jsx?");

/***/ })

})