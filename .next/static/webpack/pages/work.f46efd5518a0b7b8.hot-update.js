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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"workSlides\": function() { return /* binding */ workSlides; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n// data\n\nconst workSlides = {\n    slides: [\n        {\n            images: [\n                {\n                    id: \"project1\",\n                    title: \"title\",\n                    path: \"/thumb1.jpg\"\n                },\n                {\n                    id: \"project2\",\n                    title: \"title\",\n                    path: \"/thumb2.jpg\"\n                },\n                {\n                    id: \"project3\",\n                    title: \"title\",\n                    path: \"/thumb3.jpg\"\n                },\n                {\n                    id: \"project4\",\n                    title: \"title\",\n                    path: \"/thumb4.jpg\"\n                }\n            ]\n        },\n        {\n            images: [\n                {\n                    id: \"project5\",\n                    title: \"title\",\n                    path: \"/thumb4.jpg\"\n                },\n                {\n                    id: \"project6\",\n                    title: \"title\",\n                    path: \"/thumb1.jpg\"\n                },\n                {\n                    id: \"project7\",\n                    title: \"title\",\n                    path: \"/thumb2.jpg\"\n                },\n                {\n                    id: \"project8\",\n                    title: \"title\",\n                    path: \"/thumb3.jpg\"\n                }\n            ]\n        },\n        {\n            images: [\n                {\n                    id: \"project9\",\n                    title: \"title\",\n                    path: \"/thumb4.jpg\"\n                },\n                {\n                    id: \"project10\",\n                    title: \"title\",\n                    path: \"/thumb1.jpg\"\n                },\n                {\n                    id: \"project11\",\n                    title: \"title\",\n                    path: \"/thumb2.jpg\"\n                },\n                {\n                    id: \"project12\",\n                    title: \"title\",\n                    path: \"/thumb3.jpg\"\n                }\n            ]\n        }\n    ]\n};\n//import swiper react components\n\n//importing swiper styles\n\n\n\n//import required modules\n\n//icons\n\n\n// data\nconst WorkSlider = ()=>{\n    // Map image IDs to repository URLs\n    const imageIdToUrlMap = {\n        project1: \"https://github.com/markcastor/todoist-tum\",\n        project2: \"https://github.com/markcastor/ecommerce-app\",\n        project3: \"https://github.com/markcastor/Machine-Learning-Deeplearning\",\n        project4: \"https://github.com/markcastor/Quantum-Computing\",\n        project5: \"https://github.com/markcastor/code-translator\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n        spaceBetween: 10,\n        pagination: {\n            clickable: true\n        },\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination\n        ],\n        className: \"h-[280px] sm:h-[480px]\",\n        children: workSlides.slides.map((slide, slideIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer\",\n                    children: slide.images.slice(0, Object.keys(imageIdToUrlMap).length).map((image, imageIndex)=>{\n                        const repositoryUrl = imageIdToUrlMap[image.id];\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative rounded-lg overflow-hidden flex justify-center items-center group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: repositoryUrl,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"flex items-center justify-center relative overflow-hidden group\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                        src: image.path,\n                                        width: 500,\n                                        height: 300,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 131,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center gap-x-2 text-[13px] tracking-[0.2em]\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"delay-100\",\n                                                    children: \"LIVE\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 138,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-145\",\n                                                    children: \"PROJECT\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 140,\n                                                    columnNumber: 25\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__.BsArrowRight, {}, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                        lineNumber: 145,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                                    lineNumber: 144,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                                lineNumber: 124,\n                                columnNumber: 19\n                            }, undefined)\n                        }, imageIndex, false, {\n                            fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                            lineNumber: 120,\n                            columnNumber: 17\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, undefined)\n            }, slideIndex, false, {\n                fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\casto\\\\Downloads\\\\castor-portfolio-starter-main\\\\castor-portfolio\\\\castor-portfolio-main\\\\portfolio-project\\\\components\\\\WorkSlider.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n};\n_c = WorkSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WorkSlider);\nvar _c;\n$RefreshReg$(_c, \"WorkSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztlQXRDY1A7Ozs7Ozs7Ozs7QUE0QzFCO0tBakVNZDtBQW1FTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmtTbGlkZXIuanM/MzBhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYXRhXHJcbmV4cG9ydCBjb25zdCB3b3JrU2xpZGVzID0ge1xyXG4gIHNsaWRlczogW1xyXG4gICAge1xyXG4gICAgICBpbWFnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3Byb2plY3QxJyxcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjEuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAncHJvamVjdDInLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iMi5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0MycsXHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWIzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3Byb2plY3Q0JyxcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjQuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0NScsXHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWI0LmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJ3Byb2plY3Q2JyxcclxuICAgICAgICAgIHRpdGxlOiAndGl0bGUnLFxyXG4gICAgICAgICAgcGF0aDogJy90aHVtYjEuanBnJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAncHJvamVjdDcnLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iMi5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0OCcsXHJcbiAgICAgICAgICB0aXRsZTogJ3RpdGxlJyxcclxuICAgICAgICAgIHBhdGg6ICcvdGh1bWIzLmpwZycsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAncHJvamVjdDknLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iNC5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0MTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iMS5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0MTEnLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iMi5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICdwcm9qZWN0MTInLFxyXG4gICAgICAgICAgdGl0bGU6ICd0aXRsZScsXHJcbiAgICAgICAgICBwYXRoOiAnL3RodW1iMy5qcGcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG4vL2ltcG9ydCBzd2lwZXIgcmVhY3QgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuLy9pbXBvcnRpbmcgc3dpcGVyIHN0eWxlc1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MnO1xyXG5pbXBvcnQgJ3N3aXBlci9jc3MvZnJlZS1tb2RlJztcclxuaW1wb3J0ICdzd2lwZXIvY3NzL3BhZ2luYXRpb24nO1xyXG5cclxuLy9pbXBvcnQgcmVxdWlyZWQgbW9kdWxlc1xyXG5pbXBvcnQge1BhZ2luYXRpb259IGZyb20gJ3N3aXBlcic7XHJcblxyXG4vL2ljb25zXHJcbmltcG9ydCB7QnNBcnJvd1JpZ2h0fSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuLy8gZGF0YVxyXG5jb25zdCBXb3JrU2xpZGVyID0gKCkgPT4ge1xyXG4gIC8vIE1hcCBpbWFnZSBJRHMgdG8gcmVwb3NpdG9yeSBVUkxzXHJcbiAgY29uc3QgaW1hZ2VJZFRvVXJsTWFwID0ge1xyXG4gICAgcHJvamVjdDE6ICdodHRwczovL2dpdGh1Yi5jb20vbWFya2Nhc3Rvci90b2RvaXN0LXR1bScsXHJcbiAgICBwcm9qZWN0MjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJrY2FzdG9yL2Vjb21tZXJjZS1hcHAnLFxyXG4gICAgcHJvamVjdDM6ICdodHRwczovL2dpdGh1Yi5jb20vbWFya2Nhc3Rvci9NYWNoaW5lLUxlYXJuaW5nLURlZXBsZWFybmluZycsXHJcbiAgICBwcm9qZWN0NDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJrY2FzdG9yL1F1YW50dW0tQ29tcHV0aW5nJyxcclxuICAgIHByb2plY3Q1OiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmtjYXN0b3IvY29kZS10cmFuc2xhdG9yJyxcclxuICAgIC8vIC4uLiBhZGQgbW9yZSBtYXBwaW5ncyBmb3Igb3RoZXIgaW1hZ2UgSURzXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTd2lwZXJcclxuICAgICAgc3BhY2VCZXR3ZWVuPXsxMH1cclxuICAgICAgcGFnaW5hdGlvbj17e1xyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfX1cclxuICAgICAgbW9kdWxlcz17W1BhZ2luYXRpb25dfVxyXG4gICAgICBjbGFzc05hbWU9J2gtWzI4MHB4XSBzbTpoLVs0ODBweF0nXHJcbiAgICA+XHJcbiAgICAgIHt3b3JrU2xpZGVzLnNsaWRlcy5tYXAoKHNsaWRlLCBzbGlkZUluZGV4KSA9PiAoXHJcbiAgICAgICAgPFN3aXBlclNsaWRlIGtleT17c2xpZGVJbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBnYXAtNCBjdXJzb3ItcG9pbnRlcic+XHJcbiAgICAgICAgICAgIHtzbGlkZS5pbWFnZXMuc2xpY2UoMCwgT2JqZWN0LmtleXMoaW1hZ2VJZFRvVXJsTWFwKS5sZW5ndGgpLm1hcCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXBvc2l0b3J5VXJsID0gaW1hZ2VJZFRvVXJsTWFwW2ltYWdlLmlkXTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBncm91cCdcclxuICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZUluZGV4fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3JlcG9zaXRvcnlVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwJ1xyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGltYWdlICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlLnBhdGh9IHdpZHRoPXs1MDB9IGhlaWdodD17MzAwfSBhbHQ9JycgLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogT3ZlcmxheSBncmFkaWVudHMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWwgZnJvbS10cmFuc3BhcmVudCB2aWEtWyNlODM4Y2NdIHRvLVsjNGEyMmJkXSBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS04MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi03MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogVGl0bGUqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgdHJhbnNsYXRlLXktZnVsbCBncm91cC1ob3ZlcjotdHJhbnNsYXRlLXktMTAgZ3JvdXAtaG92ZXI6eGw6LXRyYW5zbGF0ZS15LTIwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtMiB0ZXh0LVsxM3B4XSB0cmFja2luZy1bMC4yZW1dJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHRpdGxlIHBhcnQgMSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RlbGF5LTEwMCc+TElWRTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogdGl0bGUgcGFydCAyICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJhbnNsYXRlLXktWzUwMCVdIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRlbGF5LTE0NSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUFJPSkVDVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIGljb24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhsIHRyYW5zbGF0ZS15LVs1MDAlXSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteS0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBkZWxheS0yMDAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCc0Fycm93UmlnaHQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICApKX1cclxuICAgIDwvU3dpcGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU2xpZGVyOyJdLCJuYW1lcyI6WyJ3b3JrU2xpZGVzIiwic2xpZGVzIiwiaW1hZ2VzIiwiaWQiLCJ0aXRsZSIsInBhdGgiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlBhZ2luYXRpb24iLCJCc0Fycm93UmlnaHQiLCJJbWFnZSIsIldvcmtTbGlkZXIiLCJpbWFnZUlkVG9VcmxNYXAiLCJwcm9qZWN0MSIsInByb2plY3QyIiwicHJvamVjdDMiLCJwcm9qZWN0NCIsInByb2plY3Q1Iiwic3BhY2VCZXR3ZWVuIiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIm1vZHVsZXMiLCJjbGFzc05hbWUiLCJtYXAiLCJzbGlkZSIsInNsaWRlSW5kZXgiLCJkaXYiLCJzbGljZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJpbWFnZSIsImltYWdlSW5kZXgiLCJyZXBvc2l0b3J5VXJsIiwiYSIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WorkSlider.js\n"));

/***/ })

});