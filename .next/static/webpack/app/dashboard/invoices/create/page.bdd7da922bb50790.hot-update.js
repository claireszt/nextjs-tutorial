"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/create/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/create-form.tsx":
/*!*****************************************!*\
  !*** ./app/ui/invoices/create-form.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Form(param) {\n    let { customers } = param;\n    _s();\n    const [state, dispatch] = (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState)(_app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.createInvoice, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: dispatch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 75,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 82,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                            lineNumber: 101,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Create Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/create-form.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"ArRjHnOACSiyaZzgUmtTNWi3/Ug=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9jcmVhdGUtZm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUc2QjtBQU1RO0FBQ0k7QUFDUztBQUNUO0FBRTFCLFNBQVNRLEtBQUssS0FBNkM7UUFBN0MsRUFBRUMsU0FBUyxFQUFrQyxHQUE3Qzs7SUFDM0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLHVEQUFZQSxDQUFDRCwyREFBYUEsRUFBRU07SUFFdEQscUJBQ0UsOERBQUNDO1FBQUtDLFFBQVFIOzswQkFDViw4REFBQ0k7Z0JBQUlDLFdBQVU7O2tDQUVmLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFXRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUdyRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRzt3Q0FDQ0MsSUFBRzt3Q0FDSEMsTUFBSzt3Q0FDTEwsV0FBVTt3Q0FDVk0sY0FBYTs7MERBRWIsOERBQUNDO2dEQUFPQyxPQUFNO2dEQUFHQyxRQUFROzBEQUFDOzs7Ozs7NENBR3pCaEIsVUFBVWlCLEdBQUcsQ0FBQyxDQUFDQyx5QkFDZCw4REFBQ0o7b0RBQXlCQyxPQUFPRyxTQUFTUCxFQUFFOzhEQUN6Q08sU0FBU04sSUFBSTttREFESE0sU0FBU1AsRUFBRTs7Ozs7Ozs7Ozs7a0RBSzVCLDhEQUFDaEIsK0lBQWNBO3dDQUFDWSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSzlCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFRO2dDQUFTRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUduRSw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ1k7NENBQ0NSLElBQUc7NENBQ0hDLE1BQUs7NENBQ0xRLE1BQUs7NENBQ0xDLE1BQUs7NENBQ0xDLGFBQVk7NENBQ1pmLFdBQVU7NENBQ1ZnQixRQUFROzs7Ozs7c0RBRVYsOERBQUM3QiwrSUFBa0JBOzRDQUFDYSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNcEMsOERBQUNpQjs7MENBQ0MsOERBQUNDO2dDQUFPbEIsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHbkQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1k7b0RBQ0NSLElBQUc7b0RBQ0hDLE1BQUs7b0RBQ0xRLE1BQUs7b0RBQ0xMLE9BQU07b0RBQ05SLFdBQVU7Ozs7Ozs4REFFWiw4REFBQ0M7b0RBQ0NDLFNBQVE7b0RBQ1JGLFdBQVU7O3dEQUNYO3NFQUNTLDhEQUFDZCwrSUFBU0E7NERBQUNjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFHakMsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ1k7b0RBQ0NSLElBQUc7b0RBQ0hDLE1BQUs7b0RBQ0xRLE1BQUs7b0RBQ0xMLE9BQU07b0RBQ05SLFdBQVU7Ozs7Ozs4REFFWiw4REFBQ0M7b0RBQ0NDLFNBQVE7b0RBQ1JGLFdBQVU7O3dEQUNYO3NFQUNNLDhEQUFDZiwrSUFBU0E7NERBQUNlLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDaEIsa0RBQUlBO3dCQUNIbUMsTUFBSzt3QkFDTG5CLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ1gsa0RBQU1BO3dCQUFDd0IsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBeEd3QnJCOztRQUNJRCxtREFBWUE7OztLQURoQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VpL2ludm9pY2VzL2NyZWF0ZS1mb3JtLnRzeD80MTlmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQ3VzdG9tZXJGaWVsZCB9IGZyb20gJ0AvYXBwL2xpYi9kZWZpbml0aW9ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHtcbiAgQ2hlY2tJY29uLFxuICBDbG9ja0ljb24sXG4gIEN1cnJlbmN5RG9sbGFySWNvbixcbiAgVXNlckNpcmNsZUljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2FwcC91aS9idXR0b24nO1xuaW1wb3J0IHsgY3JlYXRlSW52b2ljZSB9IGZyb20gJ0AvYXBwL2xpYi9hY3Rpb25zJztcbmltcG9ydCB7IHVzZUZvcm1TdGF0ZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBjdXN0b21lcnMgfTogeyBjdXN0b21lcnM6IEN1c3RvbWVyRmllbGRbXSB9KSB7XG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlRm9ybVN0YXRlKGNyZWF0ZUludm9pY2UsIGluaXRpYWxTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhY3Rpb249e2Rpc3BhdGNofT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJnLWdyYXktNTAgcC00IG1kOnAtNlwiPlxuICAgICAgICB7LyogQ3VzdG9tZXIgTmFtZSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjdXN0b21lclwiIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgQ2hvb3NlIGN1c3RvbWVyXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIGlkPVwiY3VzdG9tZXJcIlxuICAgICAgICAgICAgICBuYW1lPVwiY3VzdG9tZXJJZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS0yIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgZGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgU2VsZWN0IGEgY3VzdG9tZXJcbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtjdXN0b21lcnMubWFwKChjdXN0b21lcikgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjdXN0b21lci5pZH0gdmFsdWU9e2N1c3RvbWVyLmlkfT5cbiAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEludm9pY2UgQW1vdW50ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFtb3VudFwiIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgQ2hvb3NlIGFuIGFtb3VudFxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtdC0yIHJvdW5kZWQtbWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJhbW91bnRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVTRCBhbW91bnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS0yIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDdXJyZW5jeURvbGxhckljb24gY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBhYnNvbHV0ZSBsZWZ0LTMgdG9wLTEvMiBoLVsxOHB4XSB3LVsxOHB4XSAtdHJhbnNsYXRlLXktMS8yIHRleHQtZ3JheS01MDAgcGVlci1mb2N1czp0ZXh0LWdyYXktOTAwXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSW52b2ljZSBTdGF0dXMgKi99XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgU2V0IHRoZSBpbnZvaWNlIHN0YXR1c1xuICAgICAgICAgIDwvbGVnZW5kPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIGJnLXdoaXRlIHB4LVsxNHB4XSBweS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwIGZvY3VzOnJpbmctMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQZW5kaW5nIDxDbG9ja0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBjdXJzb3ItcG9pbnRlciBib3JkZXItZ3JheS0zMDAgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCBmb2N1czpyaW5nLTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yIGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGdhcC0xLjUgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBweC0zIHB5LTEuNSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFBhaWQgPENoZWNrSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBqdXN0aWZ5LWVuZCBnYXAtNFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvZGFzaGJvYXJkL2ludm9pY2VzXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtMTAgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgcHgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS02MDAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6YmctZ3JheS0yMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2FuY2VsXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXRlIEludm9pY2U8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiQ2hlY2tJY29uIiwiQ2xvY2tJY29uIiwiQ3VycmVuY3lEb2xsYXJJY29uIiwiVXNlckNpcmNsZUljb24iLCJCdXR0b24iLCJjcmVhdGVJbnZvaWNlIiwidXNlRm9ybVN0YXRlIiwiRm9ybSIsImN1c3RvbWVycyIsInN0YXRlIiwiZGlzcGF0Y2giLCJpbml0aWFsU3RhdGUiLCJmb3JtIiwiYWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwic2VsZWN0IiwiaWQiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9uIiwidmFsdWUiLCJkaXNhYmxlZCIsIm1hcCIsImN1c3RvbWVyIiwiaW5wdXQiLCJ0eXBlIiwic3RlcCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJmaWVsZHNldCIsImxlZ2VuZCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/create-form.tsx\n"));

/***/ })

});