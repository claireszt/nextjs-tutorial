"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/invoices/[id]/edit/page",{

/***/ "(app-pages-browser)/./app/ui/invoices/edit-form.tsx":
/*!***************************************!*\
  !*** ./app/ui/invoices/edit-form.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditInvoiceForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CurrencyDollarIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/ClockIcon.js\");\n/* harmony import */ var _barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=CheckIcon,ClockIcon,CurrencyDollarIcon,UserCircleIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/CheckIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/ui/button */ \"(app-pages-browser)/./app/ui/button.tsx\");\n/* harmony import */ var _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/lib/actions */ \"(app-pages-browser)/./app/lib/actions.ts\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-dom/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction EditInvoiceForm(param) {\n    let { invoice, customers } = param;\n    _s();\n    const initialState = {\n        message: null,\n        errors: {}\n    };\n    const updateInvoiceWithId = _app_lib_actions__WEBPACK_IMPORTED_MODULE_3__.updateInvoice.bind(null, invoice.id);\n    const [state, dispatch] = (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState)(updateInvoiceWithId, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        action: dispatch,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md bg-gray-50 p-4 md:p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"customer\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose customer\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"customer\",\n                                        name: \"customerId\",\n                                        className: \"peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\",\n                                        defaultValue: invoice.customer_id,\n                                        \"aria-describedby\": \"customer-error\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: \"\",\n                                                disabled: true,\n                                                children: \"Select a customer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, this),\n                                            customers.map((customer)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: customer.id,\n                                                    children: customer.name\n                                                }, customer.id, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 17\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"amount\",\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Choose an amount\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative mt-2 rounded-md\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            id: \"amount\",\n                                            name: \"amount\",\n                                            type: \"number\",\n                                            step: \"0.01\",\n                                            defaultValue: invoice.amount,\n                                            placeholder: \"Enter USD amount\",\n                                            className: \"peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            className: \"pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"fieldset\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"legend\", {\n                                className: \"mb-2 block text-sm font-medium\",\n                                children: \"Set the invoice status\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"rounded-md border border-gray-200 bg-white px-[14px] py-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"pending\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"pending\",\n                                                    defaultChecked: invoice.status === \"pending\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"pending\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600\",\n                                                    children: [\n                                                        \"Pending \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 27\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    id: \"paid\",\n                                                    name: \"status\",\n                                                    type: \"radio\",\n                                                    value: \"paid\",\n                                                    defaultChecked: invoice.status === \"paid\",\n                                                    className: \"h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"paid\",\n                                                    className: \"ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white\",\n                                                    children: [\n                                                        \"Paid \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckIcon_ClockIcon_CurrencyDollarIcon_UserCircleIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                            className: \"h-4 w-4\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                            lineNumber: 113,\n                                                            columnNumber: 24\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                                    lineNumber: 109,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex justify-end gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/dashboard/invoices\",\n                        className: \"flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"submit\",\n                        children: \"Edit Invoice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac-marcel/Desktop/Claire/nextjs-tutorial/app/ui/invoices/edit-form.tsx\",\n        lineNumber: 28,\n        columnNumber: 3\n    }, this);\n}\n_s(EditInvoiceForm, \"ArRjHnOACSiyaZzgUmtTNWi3/Ug=\", false, function() {\n    return [\n        react_dom__WEBPACK_IMPORTED_MODULE_4__.useFormState\n    ];\n});\n_c = EditInvoiceForm;\nvar _c;\n$RefreshReg$(_c, \"EditInvoiceForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9pbnZvaWNlcy9lZGl0LWZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcUM7QUFDUjtBQUNZO0FBQ1M7QUFDVDtBQUcxQixTQUFTUSxnQkFBZ0IsS0FNdkM7UUFOdUMsRUFDdENDLE9BQU8sRUFDUEMsU0FBUyxFQUlWLEdBTnVDOztJQU90QyxNQUFNQyxlQUFlO1FBQUVDLFNBQVM7UUFBTUMsUUFBUSxDQUFDO0lBQUU7SUFDakQsTUFBTUMsc0JBQXNCUiwyREFBYUEsQ0FBQ1MsSUFBSSxDQUFDLE1BQU1OLFFBQVFPLEVBQUU7SUFDL0QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdYLHVEQUFZQSxDQUFDTyxxQkFBcUJIO0lBRTVELHFCQUNBLDhEQUFDUTtRQUFLQyxRQUFRRjs7MEJBQ1YsOERBQUNHO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBV0YsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHckUsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7d0NBQ0NULElBQUc7d0NBQ0hVLE1BQUs7d0NBQ0xKLFdBQVU7d0NBQ1ZLLGNBQWNsQixRQUFRbUIsV0FBVzt3Q0FDakNDLG9CQUFpQjs7MERBRWpCLDhEQUFDQztnREFBT0MsT0FBTTtnREFBR0MsUUFBUTswREFBQzs7Ozs7OzRDQUd6QnRCLFVBQVV1QixHQUFHLENBQUMsQ0FBQ0MseUJBQ2QsOERBQUNKO29EQUF5QkMsT0FBT0csU0FBU2xCLEVBQUU7OERBQ3pDa0IsU0FBU1IsSUFBSTttREFESFEsU0FBU2xCLEVBQUU7Ozs7Ozs7Ozs7O2tEQUs1Qiw4REFBQ2IsK0lBQWNBO3dDQUFDbUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUs5Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTtnQ0FBU0YsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHbkUsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNhOzRDQUNDbkIsSUFBRzs0Q0FDSFUsTUFBSzs0Q0FDTFUsTUFBSzs0Q0FDTEMsTUFBSzs0Q0FDTFYsY0FBY2xCLFFBQVE2QixNQUFNOzRDQUM1QkMsYUFBWTs0Q0FDWmpCLFdBQVU7Ozs7OztzREFFWiw4REFBQ3BCLCtJQUFrQkE7NENBQUNvQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNcEMsOERBQUNrQjs7MENBQ0MsOERBQUNDO2dDQUFPbkIsV0FBVTswQ0FBaUM7Ozs7OzswQ0FHbkQsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ2E7b0RBQ0NuQixJQUFHO29EQUNIVSxNQUFLO29EQUNMVSxNQUFLO29EQUNMTCxPQUFNO29EQUNOVyxnQkFBZ0JqQyxRQUFRa0MsTUFBTSxLQUFLO29EQUNuQ3JCLFdBQVU7Ozs7Ozs4REFFWiw4REFBQ0M7b0RBQ0NDLFNBQVE7b0RBQ1JGLFdBQVU7O3dEQUNYO3NFQUNTLDhEQUFDckIsK0lBQVNBOzREQUFDcUIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQUdqQyw4REFBQ0Q7NENBQUlDLFdBQVU7OzhEQUNiLDhEQUFDYTtvREFDQ25CLElBQUc7b0RBQ0hVLE1BQUs7b0RBQ0xVLE1BQUs7b0RBQ0xMLE9BQU07b0RBQ05XLGdCQUFnQmpDLFFBQVFrQyxNQUFNLEtBQUs7b0RBQ25DckIsV0FBVTs7Ozs7OzhEQUVaLDhEQUFDQztvREFDQ0MsU0FBUTtvREFDUkYsV0FBVTs7d0RBQ1g7c0VBQ00sOERBQUN0QiwrSUFBU0E7NERBQUNzQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPdEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2xCLGtEQUFJQTt3QkFDSHdDLE1BQUs7d0JBQ0x0QixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNqQixrREFBTUE7d0JBQUMrQixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FuSHdCNUI7O1FBU0lELG1EQUFZQTs7O0tBVGhCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvaW52b2ljZXMvZWRpdC1mb3JtLnRzeD83NmZmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgQ3VzdG9tZXJGaWVsZCwgSW52b2ljZUZvcm0gfSBmcm9tICdAL2FwcC9saWIvZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHtcbiAgQ2hlY2tJY29uLFxuICBDbG9ja0ljb24sXG4gIEN1cnJlbmN5RG9sbGFySWNvbixcbiAgVXNlckNpcmNsZUljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9hcHAvdWkvYnV0dG9uJztcbmltcG9ydCB7IHVwZGF0ZUludm9pY2UgfSBmcm9tICdAL2FwcC9saWIvYWN0aW9ucyc7XG5pbXBvcnQgeyB1c2VGb3JtU3RhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRJbnZvaWNlRm9ybSh7XG4gIGludm9pY2UsXG4gIGN1c3RvbWVycyxcbn06IHtcbiAgaW52b2ljZTogSW52b2ljZUZvcm07XG4gIGN1c3RvbWVyczogQ3VzdG9tZXJGaWVsZFtdO1xufSkge1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSB7IG1lc3NhZ2U6IG51bGwsIGVycm9yczoge30gfTtcbiAgY29uc3QgdXBkYXRlSW52b2ljZVdpdGhJZCA9IHVwZGF0ZUludm9pY2UuYmluZChudWxsLCBpbnZvaWNlLmlkKTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VGb3JtU3RhdGUodXBkYXRlSW52b2ljZVdpdGhJZCwgaW5pdGlhbFN0YXRlKTtcbiBcbiAgcmV0dXJuIChcbiAgPGZvcm0gYWN0aW9uPXtkaXNwYXRjaH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctZ3JheS01MCBwLTQgbWQ6cC02XCI+XG4gICAgICAgIHsvKiBDdXN0b21lciBOYW1lICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImN1c3RvbWVyXCIgY2xhc3NOYW1lPVwibWItMiBibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICBDaG9vc2UgY3VzdG9tZXJcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgaWQ9XCJjdXN0b21lclwiXG4gICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lcklkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVlciBibG9jayB3LWZ1bGwgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHB5LTIgcGwtMTAgdGV4dC1zbSBvdXRsaW5lLTIgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW52b2ljZS5jdXN0b21lcl9pZH1cbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImN1c3RvbWVyLWVycm9yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlxuICAgICAgICAgICAgICAgIFNlbGVjdCBhIGN1c3RvbWVyXG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Y3VzdG9tZXJzLm1hcCgoY3VzdG9tZXIpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y3VzdG9tZXIuaWR9IHZhbHVlPXtjdXN0b21lci5pZH0+XG4gICAgICAgICAgICAgICAgICB7Y3VzdG9tZXIubmFtZX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxVc2VyQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGxlZnQtMyB0b3AtMS8yIGgtWzE4cHhdIHctWzE4cHhdIC10cmFuc2xhdGUteS0xLzIgdGV4dC1ncmF5LTUwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBJbnZvaWNlIEFtb3VudCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhbW91bnRcIiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIENob29zZSBhbiBhbW91bnRcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbXQtMiByb3VuZGVkLW1kXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBzdGVwPVwiMC4wMVwiXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbnZvaWNlLmFtb3VudH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVTRCBhbW91bnRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlZXIgYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBweS0yIHBsLTEwIHRleHQtc20gb3V0bGluZS0yIHBsYWNlaG9sZGVyOnRleHQtZ3JheS01MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q3VycmVuY3lEb2xsYXJJY29uIGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgbGVmdC0zIHRvcC0xLzIgaC1bMThweF0gdy1bMThweF0gLXRyYW5zbGF0ZS15LTEvMiB0ZXh0LWdyYXktNTAwIHBlZXItZm9jdXM6dGV4dC1ncmF5LTkwMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIEludm9pY2UgU3RhdHVzICovfVxuICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIHRleHQtc20gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgIFNldCB0aGUgaW52b2ljZSBzdGF0dXNcbiAgICAgICAgICA8L2xlZ2VuZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBiZy13aGl0ZSBweC1bMTRweF0gcHktM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInBlbmRpbmdcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2ludm9pY2Uuc3RhdHVzID09PSAncGVuZGluZyd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwIGZvY3VzOnJpbmctMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwZW5kaW5nXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLWZ1bGwgYmctZ3JheS0xMDAgcHgtMyBweS0xLjUgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBQZW5kaW5nIDxDbG9ja0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFpZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInBhaWRcIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e2ludm9pY2Uuc3RhdHVzID09PSAncGFpZCd9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IGN1cnNvci1wb2ludGVyIGJvcmRlci1ncmF5LTMwMCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwIGZvY3VzOnJpbmctMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYWlkXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTEuNSByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIHB4LTMgcHktMS41IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGFpZCA8Q2hlY2tJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBmbGV4IGp1c3RpZnktZW5kIGdhcC00XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9kYXNoYm9hcmQvaW52b2ljZXNcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC0xMCBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBweC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTYwMCB0cmFuc2l0aW9uLWNvbG9ycyBob3ZlcjpiZy1ncmF5LTIwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBDYW5jZWxcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5FZGl0IEludm9pY2U8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDaGVja0ljb24iLCJDbG9ja0ljb24iLCJDdXJyZW5jeURvbGxhckljb24iLCJVc2VyQ2lyY2xlSWNvbiIsIkxpbmsiLCJCdXR0b24iLCJ1cGRhdGVJbnZvaWNlIiwidXNlRm9ybVN0YXRlIiwiRWRpdEludm9pY2VGb3JtIiwiaW52b2ljZSIsImN1c3RvbWVycyIsImluaXRpYWxTdGF0ZSIsIm1lc3NhZ2UiLCJlcnJvcnMiLCJ1cGRhdGVJbnZvaWNlV2l0aElkIiwiYmluZCIsImlkIiwic3RhdGUiLCJkaXNwYXRjaCIsImZvcm0iLCJhY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwiY3VzdG9tZXJfaWQiLCJhcmlhLWRlc2NyaWJlZGJ5Iiwib3B0aW9uIiwidmFsdWUiLCJkaXNhYmxlZCIsIm1hcCIsImN1c3RvbWVyIiwiaW5wdXQiLCJ0eXBlIiwic3RlcCIsImFtb3VudCIsInBsYWNlaG9sZGVyIiwiZmllbGRzZXQiLCJsZWdlbmQiLCJkZWZhdWx0Q2hlY2tlZCIsInN0YXR1cyIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/invoices/edit-form.tsx\n"));

/***/ })

});