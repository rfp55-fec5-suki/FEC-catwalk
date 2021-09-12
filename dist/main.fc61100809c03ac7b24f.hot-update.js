webpackHotUpdate("main",{

/***/ "./src/reviews/mockData.js":
/*!*********************************!*\
  !*** ./src/reviews/mockData.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nGET /reviews/\nquery parameters\nParameter | Type  | Description\npage\t    |integer| Selects the page of results to return. Default 1.\ncount     |integer| Specifies how many results per page to return. Default 5.\nsort      |text   | Changes the sort order of reviews to be based on \"newest\", \"helpful\", or \"relevant\"\nproduct_id|integer| Specifies the product for which to retrieve reviews.\n*/\nvar getReviews = {\n  product: 2,\n  page: 0,\n  count: 5,\n  results: [{\n    review_id: 5,\n    rating: 3,\n    summary: \"I'm enjoying wearing these shades\",\n    recommend: false,\n    response: null,\n    body: 'Comfortable and practical.',\n    date: '2019-04-14T00:00:00.000Z',\n    reviewer_name: 'shortandsweeet',\n    helpfulness: 5,\n    photos: [{\n      id: 1,\n      url: 'urlplaceholder/review_5_photo_number_1.jpg'\n    }, {\n      id: 2,\n      url: 'urlplaceholder/review_5_photo_number_2.jpg'\n    } // ...\n    ]\n  }, {\n    review_id: 3,\n    rating: 4,\n    summary: 'I am liking these glasses',\n    recommend: false,\n    response: \"Glad you're enjoying the product!\",\n    body: \"They are very dark. But that's good because I'm in very sunny spots\",\n    date: '2019-06-23T00:00:00.000Z',\n    reviewer_name: 'bigbrotherbenjamin',\n    helpfulness: 5,\n    photos: []\n  } // ...\n  ]\n};\n/*\nGET /reviews/meta\nquery parameters\n\nParameter | Type  | Description\nproduct_id|integer| Required ID of the product for which data should be returned\n*/\n\nvar getReviewsMeta = {\n  product_id: 2,\n  ratings: {\n    2: 1,\n    3: 1,\n    4: 2 // ...\n\n  },\n  recommended: {\n    0: 5 // ...\n\n  },\n  characteristics: {\n    Size: {\n      id: 14,\n      value: '4.0000'\n    },\n    Width: {\n      id: 15,\n      value: 3.5000\n    },\n    Comfort: {\n      id: 16,\n      value: 4.0000\n    } // ...\n\n  }\n};\nmodule.exports = {\n  getReviews: getReviews,\n  getReviewsMeta: getReviewsMeta\n};\n\n//# sourceURL=webpack:///./src/reviews/mockData.js?");

/***/ })

})