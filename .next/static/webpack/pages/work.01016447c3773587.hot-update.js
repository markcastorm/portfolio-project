"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/work",{

/***/ "./components/WorkSlider.js":
/*!**********************************!*\
  !*** ./components/WorkSlider.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"workSlides\": function() { return /* binding */ workSlides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n// data\n\nconst workSlides = {\n    slides: [\n        {\n            images: [\n                {\n                    title: \"title\",\n                    path: \"/thumb1.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb2.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb3.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb4.jpg\"\n                }\n            ]\n        },\n        {\n            images: [\n                {\n                    title: \"title\",\n                    path: \"/thumb4.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb1.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb2.jpg\"\n                },\n                {\n                    title: \"title\",\n                    path: \"/thumb3.jpg\"\n                }\n            ]\n        }\n    ]\n};\n//import swiper react components\n\n//importing swiper styles\n\n\n\n//import required modules\n\n//icons\n\n\n// data\nconst WorkSlider = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n        spaceBetween: 10,\n        pagination: {\n            clickable: true\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination\n        ],\n        className: \"h-[280px] sm:h-[480px]\",\n        children: workSlides.slides.map((slide, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer\",\n                    children: slide.images.map((image, imageIndex)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative rounded-lg overflow-hidden flex justify-center items-center group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/markcastor/todoist-tum-\".concat(imageIndex + 1),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex items-center justify-center relative overflow-hidden group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: image.path,\n                                        width: 500,\n                                        height: 300,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-x-2 text-[13px] tracking-[0.2em]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"delay-100\",\n                                                    children: \"LIVE\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-145\",\n                                                    children: \"PROJECT\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsArrowRight, {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 29\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                lineNumber: 81,\n                                columnNumber: 21\n                            }, undefined)\n                        }, imageIndex, false, {\n                            fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                            lineNumber: 77,\n                            columnNumber: 19\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                    lineNumber: 74,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n        lineNumber: 63,\n        columnNumber: 3\n    }, undefined);\n};\n_c = WorkSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkSlider);\nvar _c;\n$RefreshReg$(_c, \"WorkSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmtTbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOztBQUNBLE1BQU1BLGFBQWE7SUFDeEJDLFFBQVE7UUFDTjtZQUNFQyxRQUFRO2dCQUNOO29CQUNFQyxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2dCQUNBO29CQUNFRCxPQUFPO29CQUNQQyxNQUFNO2dCQUNSO2FBQ0Q7UUFDSDtRQUNBO1lBQ0VGLFFBQVE7Z0JBQ047b0JBQ0VDLE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7Z0JBQ0E7b0JBQ0VELE9BQU87b0JBQ1BDLE1BQU07Z0JBQ1I7YUFDRDtRQUNIO0tBQ0Q7QUFDSCxFQUFFO0FBRUYsZ0NBQWdDO0FBQ21CO0FBQ25ELHlCQUF5QjtBQUNMO0FBQ1U7QUFDQztBQUUvQix5QkFBeUI7QUFDUztBQUVsQyxPQUFPO0FBQ3FDO0FBQ2I7QUFDL0IsT0FBTztBQUNQLE1BQU1NLGFBQWEsSUFBTTtJQUN2QixxQkFDQSw4REFBQ0wsZ0RBQU1BO1FBQ0xNLGNBQWM7UUFDZEMsWUFBWTtZQUNWQyxXQUFXLElBQUk7UUFDakI7UUFDQUMsU0FBUztZQUFDUCw4Q0FBVUE7U0FBQztRQUNyQlEsV0FBVTtrQkFFVGYsV0FBV0MsTUFBTSxDQUFDZSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVTtZQUN2QyxxQkFDRSw4REFBQ1oscURBQVdBOzBCQUNWLDRFQUFDYTtvQkFBSUosV0FBVTs4QkFDVkUsTUFBTWYsTUFBTSxDQUFDYyxHQUFHLENBQUMsQ0FBQ0ksT0FBT0MsYUFBZTt3QkFDdkMscUJBQ0UsOERBQUNGOzRCQUNDSixXQUFVO3NDQUdWLDRFQUFDTztnQ0FDQ0MsTUFBTSw2Q0FBNEQsT0FBZkYsYUFBYTtnQ0FDaEVHLFFBQU87Z0NBQ1BDLEtBQUk7Z0NBQ0pWLFdBQVU7O2tEQUdWLDhEQUFDTixtREFBS0E7d0NBQUNpQixLQUFLTixNQUFNaEIsSUFBSTt3Q0FBRXVCLE9BQU87d0NBQUtDLFFBQVE7d0NBQUtDLEtBQUk7Ozs7OztrREFFckQsOERBQUNWO3dDQUFJSixXQUFVOzs7Ozs7a0RBRWYsOERBQUNJO3dDQUFJSixXQUFVO2tEQUNiLDRFQUFDSTs0Q0FBSUosV0FBVTs7OERBRWIsOERBQUNJO29EQUFJSixXQUFVOzhEQUFZOzs7Ozs7OERBRTNCLDhEQUFDSTtvREFBSUosV0FBVTs4REFBcUY7Ozs7Ozs4REFJcEcsOERBQUNJO29EQUFJSixXQUFVOzhEQUNiLDRFQUFDUCx3REFBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkF2QmhCYTs7Ozs7b0JBOEJYOzs7Ozs7ZUFwQ1lIOzs7OztRQTBDdEI7Ozs7OztBQUdKO0tBekRNUjtBQTJETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtTbGlkZXIuanM/MzBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYXRhXHJcbmV4cG9ydCBjb25zdCB3b3JrU2xpZGVzID0ge1xyXG4gIHNsaWRlczogW1xyXG4gICAge1xyXG4gICAgICBpbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWIxLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWIyLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWIzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWI0LmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjQuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjEuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjIuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjMuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuLy9pbXBvcnQgc3dpcGVyIHJlYWN0IGNvbXBvbmVudHNcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbi8vaW1wb3J0aW5nIHN3aXBlciBzdHlsZXNcclxuaW1wb3J0ICdzd2lwZXIvY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL2ZyZWUtbW9kZSc7XHJcbmltcG9ydCAnc3dpcGVyL2Nzcy9wYWdpbmF0aW9uJztcclxuXHJcbi8vaW1wb3J0IHJlcXVpcmVkIG1vZHVsZXNcclxuaW1wb3J0IHtQYWdpbmF0aW9ufSBmcm9tICdzd2lwZXInO1xyXG5cclxuLy9pY29uc1xyXG5pbXBvcnQge0JzQXJyb3dSaWdodH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbi8vIGRhdGFcclxuY29uc3QgV29ya1NsaWRlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gIDxTd2lwZXJcclxuICAgIHNwYWNlQmV0d2Vlbj17MTB9IFxyXG4gICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB9fVxyXG4gICAgbW9kdWxlcz17W1BhZ2luYXRpb25dfVxyXG4gICAgY2xhc3NOYW1lPSdoLVsyODBweF0gc206aC1bNDgwcHhdJ1xyXG4gID5cclxuICAgIHt3b3JrU2xpZGVzLnNsaWRlcy5tYXAoKHNsaWRlLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKCBcclxuICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBnYXAtNCBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgICAgICAge3NsaWRlLmltYWdlcy5tYXAoKGltYWdlLCBpbWFnZUluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBncm91cCdcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2ltYWdlSW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrY2FzdG9yL3RvZG9pc3QtdHVtLSR7aW1hZ2VJbmRleCArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW4gZ3JvdXAnXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIGltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2UucGF0aH0gd2lkdGg9ezUwMH0gaGVpZ2h0PXszMDB9IGFsdD0nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIE92ZXJsYXkgZ3JhZGllbnRzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWwgZnJvbS10cmFuc3BhcmVudCB2aWEtWyNlODM4Y2NdIHRvLVsjNGEyMmJkXSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBUaXRsZSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS0wIHRyYW5zbGF0ZS15LWZ1bGwgZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS15LTEwIGdyb3VwLWhvdmVyOnhsOi10cmFuc2xhdGUteS0yMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiB0ZXh0LVsxM3B4XSB0cmFja2luZy1bMC4yZW1dJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogdGl0bGUgcGFydCAxICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkZWxheS0xMDAnPkxJVkU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogdGl0bGUgcGFydCAyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmFuc2xhdGUteS1bNTAwJV0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGVsYXktMTQ1Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBST0pFQ1RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogaWNvbiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14bCB0cmFuc2xhdGUteS1bNTAwJV0gZ3JvdXAtaG92ZXI6dHJhbnNsYXRlLXktMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGVsYXktMjAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Fycm93UmlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuXHJcbiAgICAgICk7XHJcblxyXG4gICAgfSl9XHJcbiAgPC9Td2lwZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTbGlkZXI7XHJcblxyXG4iXSwibmFtZXMiOlsid29ya1NsaWRlcyIsInNsaWRlcyIsImltYWdlcyIsInRpdGxlIiwicGF0aCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiUGFnaW5hdGlvbiIsIkJzQXJyb3dSaWdodCIsIkltYWdlIiwiV29ya1NsaWRlciIsInNwYWNlQmV0d2VlbiIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJtb2R1bGVzIiwiY2xhc3NOYW1lIiwibWFwIiwic2xpZGUiLCJpbmRleCIsImRpdiIsImltYWdlIiwiaW1hZ2VJbmRleCIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WorkSlider.js\n"));

/***/ })

});