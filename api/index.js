var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:D:\Projects\ADR-portal\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default2,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/layouts/root/index.tsx
init_react();
var import_react = __toESM(require("react"));

// app/states/store.ts
init_react();
var import_toolkit2 = require("@reduxjs/toolkit");

// app/states/Slices/AdrReportingForm/1.ts
init_react();
var import_toolkit = require("@reduxjs/toolkit");
var initialState = {
  forms: {
    patientInitials: "",
    DateOfBirth: null,
    ageOfOnset: null,
    gender: null,
    weight: null,
    patientID: null,
    ip_op: null,
    unit: null,
    reasonForTakingMedication: null,
    medicineAdvised: null,
    knownAllergies: null,
    socialHistory: null
  }
};
var form1page1Slice = (0, import_toolkit.createSlice)({
  name: "form1page1",
  initialState,
  reducers: {
    fetchIncompleteFormUserProfile: (state) => {
    },
    submitFormDataToTheBackend: (state) => {
    },
    setNewFormData: (state, action) => {
      state.forms[`${action.payload.fieldName}`] = action.payload.value;
    }
  }
});
var { fetchIncompleteFormUserProfile, submitFormDataToTheBackend, setNewFormData } = form1page1Slice.actions;
var __default = form1page1Slice.reducer;

// app/states/store.ts
var store = (0, import_toolkit2.configureStore)({
  reducer: {
    form1page1: __default
  }
});

// app/layouts/root/index.tsx
var import_react_redux = require("react-redux");

// app/components/common/navbar/index.tsx
init_react();
function Navbar() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "h-14 p-1 shadow-xl font-medium flex flex-row"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "/ADR-logo.png",
    className: "p-1"
  }), /* @__PURE__ */ React.createElement("h1", {
    className: "my-auto pl-8 text-purple-800"
  }, "Home"));
}

// app/layouts/root/index.tsx
var RootLayout = ({ children }) => {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow-x-hidden bg-white dark:bg-gray-800 min-h-screen dark:text-gray-200"
  }, /* @__PURE__ */ import_react.default.createElement(import_react_redux.Provider, {
    store
  }, /* @__PURE__ */ import_react.default.createElement(Navbar, null), children)));
};
var root_default = RootLayout;

// app/styles/app.css
var app_default = "/build/_assets/app-JQO6T4S2.css";

// app/styles/global.css
var global_default = "/build/_assets/global-FDB56UNB.css";

// node_modules/antd/dist/antd.css
var antd_default = "/build/_assets/antd-N4LZWY2Q.css";

// route:D:\Projects\ADR-portal\app\root.tsx
var meta = () => {
  return { title: "ADR Portal | KMC" };
};
function links() {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: antd_default }
  ];
}
var Document = ({ children }) => {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), children, /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
};
var App = () => {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(root_default, null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null)));
};
var root_default2 = App;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option1.tsx
var option1_exports = {};
__export(option1_exports, {
  default: () => option1_default
});
init_react();
var import_react2 = __toESM(require("react"));
var import_antd2 = require("antd");

// app/components/forms/inputDescription/index.tsx
init_react();
var import_fi = require("react-icons/fi");
var InputDescription = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center pb-1"
  }, props.isRequired && /* @__PURE__ */ React.createElement("span", {
    className: "pr-1 text-red-500"
  }, "*"), /* @__PURE__ */ React.createElement("p", {
    className: "mb-[0px] pr-1 text-[16px]"
  }, props.description), /* @__PURE__ */ React.createElement(import_fi.FiHelpCircle, null));
};
var inputDescription_default = InputDescription;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option1.tsx
function Option1() {
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "option1"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "w-full shadow-xl"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-8 py-16 pb-8"
  }, /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Medical Device"), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react2.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Type of device"
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react2.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Implantability"
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Implantable"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Implantable"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react2.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reusability"
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 0,
    className: "w-1/4 text-center"
  }, "Single Use Device"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 1,
    className: "w-1/4 text-center"
  }, "Reusable device"), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Button, {
    value: 2,
    className: "w-1/2 text-center"
  }, "Reuse of manufactured marked single use"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd2.Checkbox, null, "Personal use/homecare use ")))));
}
var option1_default = Option1;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option2.tsx
var option2_exports = {};
__export(option2_exports, {
  default: () => option2_default
});
init_react();
var import_antd3 = require("antd");
function Option2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "option2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-8 py-16 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "In Vitro Diagnostics"), /* @__PURE__ */ React.createElement("div", {
    className: " my-2 mx-4 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "Kits")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "Control Materials ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "Reagents")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "IVD Electronic Reader/Analyzer")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "Calibrators")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd3.Checkbox, null, "Others"))))));
}
var option2_default = Option2;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option3.tsx
var option3_exports = {};
__export(option3_exports, {
  default: () => option3_default
});
init_react();
var import_antd4 = require("antd");
var { TextArea } = import_antd4.Input;
var option3 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "option3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-xl p-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-16 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Equipment/Machines"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Equipment usage"
  }), /* @__PURE__ */ React.createElement(import_antd4.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd4.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ React.createElement(import_antd4.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ React.createElement(import_antd4.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Invasibility"
  }), /* @__PURE__ */ React.createElement(import_antd4.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd4.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Invasive"), /* @__PURE__ */ React.createElement(import_antd4.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Invasive"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, " Imaging ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, " Others "))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reporter's Comments"
  }), /* @__PURE__ */ React.createElement(TextArea, {
    rows: 2
  }))));
};
var option3_default = option3;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\1\index.tsx
var __exports = {};
__export(__exports, {
  default: () => Form3page1
});
init_react();

// app/layouts/forms/adr-reporting/index.tsx
init_react();

// app/components/common/sidebar/index.tsx
init_react();
var import_react3 = require("react");
var import_react_router_dom2 = require("react-router-dom");

// app/components/common/sidebar/ListItems.tsx
init_react();
var import_fi2 = require("react-icons/fi");
var import_go = require("react-icons/go");
var import_react_router_dom = require("react-router-dom");
var ListItems = (props) => {
  var _a;
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pr-3"
  }, /* @__PURE__ */ React.createElement(SidebarNumberingBullet, {
    isCurrentPage: props.currentPage.split("")[0] === props.pageLink,
    isCompleted: props.isCompleted,
    bulletNumber: props.number
  })), /* @__PURE__ */ React.createElement("p", {
    className: "cursor-pointer hover:underline text-base"
  }, props.name)), /* @__PURE__ */ React.createElement("div", {
    className: "block pl-8"
  }, props.currentPage.split("")[0] === props.pageLink && ((_a = props.children) == null ? void 0 : _a.map((child, index) => {
    var _a2;
    const isActiveTab = child.pageLink.split("")[1] === props.currentPage.split("")[1];
    return /* @__PURE__ */ React.createElement("div", {
      key: index
    }, /* @__PURE__ */ React.createElement("div", {
      className: isActiveTab ? "flex flex-row pb-1 font-bold" : "flex flex-row pb-1 text-[#7E7E7E]"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col justify-start pt-1 pr-2"
    }, /* @__PURE__ */ React.createElement(import_go.GoPrimitiveDot, {
      className: "text-md"
    })), /* @__PURE__ */ React.createElement("div", {
      className: "flex flex-col justify-start p-0 m-0"
    }, /* @__PURE__ */ React.createElement("p", {
      className: "m-0 p-0 text-md"
    }, child.name))), /* @__PURE__ */ React.createElement("div", {
      className: "block pl-8 py-1"
    }, props.currentPage.split("")[1] === child.pageLink.split("")[1] && ((_a2 = child.children) == null ? void 0 : _a2.map((subChild, subIndex) => {
      const isActiveSubTab = subChild.pageLink.split("")[2] === props.currentPage.split("")[2];
      return /* @__PURE__ */ React.createElement("div", {
        key: subIndex,
        className: isActiveSubTab ? "py-1 font-bold" : "py-1 text-[#7E7E7E]"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-row"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "pr-3"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-row"
      }, /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-col justify-start pr-2"
      }, /* @__PURE__ */ React.createElement(import_go.GoPrimitiveDot, {
        className: "text-md"
      })), /* @__PURE__ */ React.createElement("div", {
        className: "flex flex-col justify-start p-0 m-0"
      }, /* @__PURE__ */ React.createElement("p", {
        className: "m-0 p-0 text-xs"
      }, subChild.name))))));
    }))));
  }))));
};
var SidebarNumberingBullet = (props) => {
  if (props.isCompleted) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "border-2 border-[#6C567B] bg-[#6C567B] dark:bg-[#a262cf] dark:border-[#a262cf] rounded-full h-7 w-7 text-center text-white flex flex-col justify-center"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: "",
      className: "text-white"
    }, /* @__PURE__ */ React.createElement(import_fi2.FiCheck, {
      className: "mx-auto my-auto font-extrabold"
    })));
  } else if (props.isCurrentPage) {
    return /* @__PURE__ */ React.createElement("p", {
      className: "font-bold border-2 border-[#6C567B] dark:border-[#a262cf] rounded-full h-7 w-7 text-center"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: "",
      className: "text-[#6C567B] dark:text-[#a262cf]"
    }, props.bulletNumber + 1));
  } else {
    return /* @__PURE__ */ React.createElement("p", {
      className: "border border-[#7E7E7E] rounded-full h-7 w-7 text-center"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: "",
      className: "text-[#7E7E7E]"
    }, props.bulletNumber + 1));
  }
};
var ListItems_default = ListItems;

// app/components/common/sidebar/SidebarTemplates.tsx
init_react();
var AdrReporting = {
  baseUrl: "/adr-reporting",
  template: [
    {
      name: "Patient Information",
      pageLink: "1",
      isCompleted: true,
      children: []
    },
    {
      name: "Suspected Adverse Reaction",
      pageLink: "2",
      isCompleted: false,
      children: []
    },
    {
      name: "Suspected Medication(s)",
      pageLink: "3",
      isCompleted: false,
      children: [
        {
          name: "Medication",
          pageLink: "3",
          isCompleted: false,
          children: []
        },
        {
          name: "Action Taken",
          pageLink: "3b",
          isCompleted: false,
          children: []
        },
        {
          name: "Dechallenge",
          pageLink: "3c",
          isCompleted: false,
          children: []
        },
        {
          name: "Rechallenge",
          pageLink: "3d",
          isCompleted: false,
          children: []
        },
        {
          name: "Reaction reappeared after reintroduction",
          pageLink: "3e",
          isCompleted: false,
          children: []
        },
        {
          name: "Causality Assessment",
          pageLink: "3f",
          isCompleted: false,
          children: [
            {
              name: "Naranjo's scale",
              pageLink: "3f",
              isCompleted: false,
              children: []
            },
            {
              name: "WHO probability scale",
              pageLink: "3f2",
              isCompleted: false,
              children: []
            },
            {
              name: "Hartwig's Severity Assessment Scale",
              pageLink: "3f3",
              isCompleted: false,
              children: []
            },
            {
              name: "Modified Schumock and Thornton scale",
              pageLink: "3f4",
              isCompleted: false,
              children: []
            },
            {
              name: "Predictability & Predisposing factors",
              pageLink: "3f5",
              isCompleted: false,
              children: []
            }
          ]
        },
        {
          name: "Treatment given",
          pageLink: "3g",
          isCompleted: false,
          children: []
        },
        {
          name: "Concomitant medical product",
          pageLink: "3h",
          isCompleted: false,
          children: []
        },
        {
          name: "AMC/NCC Section",
          pageLink: "3i",
          isCompleted: false,
          children: []
        },
        {
          name: "Outcome",
          pageLink: "3j",
          isCompleted: false,
          children: []
        }
      ]
    },
    {
      name: "Reporter Details",
      pageLink: "4",
      isCompleted: false,
      children: []
    }
  ]
};
var MedicalDeviceReporting = {
  baseUrl: "/medical-device-reporting",
  template: [
    {
      name: "Primary Information",
      pageLink: "1",
      isCompleted: false,
      children: []
    },
    {
      name: "Reporter Information",
      pageLink: "2",
      isCompleted: false,
      children: []
    },
    {
      name: "Device Category",
      pageLink: "3",
      isCompleted: false,
      children: []
    },
    {
      name: "Device Description",
      pageLink: "4",
      isCompleted: false,
      children: [
        {
          name: "Manufacturer Details",
          pageLink: "4",
          isCompleted: false,
          children: []
        },
        {
          name: "Importer Details",
          pageLink: "4b",
          isCompleted: false,
          children: []
        },
        {
          name: "Distributor Details",
          pageLink: "4c",
          isCompleted: false,
          children: []
        },
        {
          name: "Further Information",
          pageLink: "4d",
          isCompleted: false,
          children: []
        }
      ]
    },
    {
      name: "Event Description",
      pageLink: "5",
      isCompleted: false,
      children: []
    },
    {
      name: "Patient Information",
      pageLink: "6",
      isCompleted: false,
      children: []
    },
    {
      name: "Healthcare Facility Details",
      pageLink: "7",
      isCompleted: false,
      children: []
    },
    {
      name: "Casualty Assessment",
      pageLink: "8",
      isCompleted: false,
      children: []
    },
    {
      name: "Product Owner's Investigation",
      pageLink: "9",
      isCompleted: false,
      children: []
    }
  ]
};

// app/components/common/sidebar/index.tsx
var Sidebar = () => {
  let location = (0, import_react_router_dom2.useLocation)();
  const [SidebarData, setSidebarData] = (0, import_react3.useState)(AdrReporting.template);
  const [activeTab, setActiveTab] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    const currentLocation = location.pathname.split("/");
    const currentForm = currentLocation[1];
    const currentPage = currentLocation[2];
    const currentPageSub = currentLocation.length >= 4 ? currentLocation[3] : "";
    const currentPageSubSub = currentLocation.length >= 5 ? currentLocation[4] : "";
    if (currentForm === "adr-reporting") {
      setSidebarData(AdrReporting.template);
    }
    if (currentForm === "medical-device-reporting") {
      setSidebarData(MedicalDeviceReporting.template);
    }
    setActiveTab(currentPage + currentPageSub + currentPageSubSub);
  }, [location]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 pb-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "Picture of Indian National Emblem",
    src: "/emblem.png",
    className: "p-1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3 text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#6C567B] dark:text-[#a262cf] text-xl m-0 mb-3"
  }, "MANIPAL COLLEGE OF PHARMACY"), /* @__PURE__ */ React.createElement("p", {
    className: "text-[10px] border-t-2 border-[#6C567B] pt-2 font-medium"
  }, "Manipal Academy of Higer Education", /* @__PURE__ */ React.createElement("br", null), "(Institution of Eminence Deemed to be University)"))), /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl p-5 rounded-lg text-[#6C567B] dark:text-[#a262cf] border"
  }, SidebarData.map((item, index) => {
    return /* @__PURE__ */ React.createElement(ListItems_default, __spreadProps(__spreadValues({
      key: index
    }, item), {
      number: index,
      currentPage: activeTab,
      pageLink: item.pageLink
    }));
  })));
};
var sidebar_default = Sidebar;

// app/layouts/forms/adr-reporting/index.tsx
var FormLayout = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-100 grid grid-cols-4 gap-5 px-16 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-20"
  }, /* @__PURE__ */ React.createElement(sidebar_default, null))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3 p-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen pt-8 pb-4 text-[35px] text-[#E8590C]"
  }, "ADR Reporting Form"), children)));
};
var adr_reporting_default = FormLayout;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\1\index.tsx
var import_antd5 = require("antd");

// app/components/forms/NavigationPanel/index.tsx
init_react();
var import_react4 = require("react");

// app/components/forms/NavigationPanel/FormMap.ts
init_react();
var ADRreporting_portalMap = [
  "1",
  "2",
  "3",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "3f2",
  "3f3",
  "3f4",
  "3f5",
  "3g",
  "3h",
  "3i",
  "3j",
  "4"
];
var MedicalDeviceReporting_portalMap = [
  "1",
  "2",
  "3",
  "4",
  "4b",
  "4c",
  "4d",
  "5",
  "6",
  "7",
  "8",
  "9"
];

// app/components/forms/NavigationPanel/index.tsx
var import_react_router_dom3 = require("react-router-dom");
var import_remix3 = __toESM(require_remix());
var NavigationPanel = (props) => {
  const location = (0, import_react_router_dom3.useLocation)();
  const [nextPage, setNextPage] = (0, import_react4.useState)("");
  const [previousPage, setPreviousPage] = (0, import_react4.useState)("");
  const [isLastPage, setIsLastPage] = (0, import_react4.useState)(false);
  const [isFirstPage, setIsFirstPage] = (0, import_react4.useState)(false);
  const currentLocation = location.pathname.split("/");
  const pageType = currentLocation[1] === "adr-reporting" ? { link: "/adr-reporting/", mapRoute: ADRreporting_portalMap } : {
    link: "/medical-device-reporting/",
    mapRoute: MedicalDeviceReporting_portalMap
  };
  (0, import_react4.useEffect)(() => {
    setIsFirstPage(false);
    setIsLastPage(false);
    for (let route = 0; route < pageType.mapRoute.length; route++) {
      if (props.currentRoute === pageType.mapRoute[route]) {
        if (route === 0) {
          setIsFirstPage(true);
          setNextPage(pageType.link + pageType.mapRoute[route + 1].split("").join("/"));
          setPreviousPage("/");
        } else if (route === pageType.mapRoute.length - 1) {
          setIsLastPage(true);
          setNextPage(pageType + "submit");
          setPreviousPage(pageType.link + pageType.mapRoute[route - 1].split("").join("/"));
        } else if (route < pageType.mapRoute.length - 1 && route != 0) {
          setNextPage(pageType.link + pageType.mapRoute[route + 1].split("").join("/"));
          setPreviousPage(pageType.link + pageType.mapRoute[route - 1].split("").join("/"));
        }
      }
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-10 w-full flex flex-row justify-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: previousPage
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C]",
    type: "submit"
  }, isFirstPage ? "Home" : "Previous")), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: nextPage
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#E8590C] text-white hover:shadow-xl p-2 w-32",
    type: "submit"
  }, isLastPage ? "Submit" : "Next"))));
};
var NavigationPanel_default = NavigationPanel;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\1\index.tsx
function Form3page1() {
  const radioOptions = ["Initial", "Follow-up", "Final", "Trend"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Primary Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Reporter Reference Number",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd5.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of report",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd5.DatePicker, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Type of report",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd5.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\2\index.tsx
var __exports2 = {};
__export(__exports2, {
  default: () => Form1
});
init_react();

// app/layouts/forms/medical-device-reporting/index.tsx
init_react();
var FormLayout2 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen flex-col items-center justify-center pt-8 text-[35px] text-[#6C567B]"
  }, "Medical Device ADR Reporting"), /* @__PURE__ */ React.createElement("div", {
    className: "w-100 grid grid-cols-12 gap-5 px-16 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(sidebar_default, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9 p-2"
  }, children)));
};
var medical_device_reporting_default = FormLayout2;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\2\index.tsx
var import_react5 = require("react");
var import_antd6 = require("antd");
var { TextArea: TextArea2 } = import_antd6.Input;
function Form1() {
  const [reporterType, setReporterType] = (0, import_react5.useState)("manufacturer");
  const changedReporterType = (e) => {
    setReporterType(e.target.value);
  };
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Reporter Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Type of Reporter"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full",
    onChange: (e) => changedReporterType(e)
  }, /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: "manufacturer",
    className: "w-1/6 text-center"
  }, "Manufacturer"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: "importer",
    className: "w-1/6 text-center"
  }, "Importer"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: "distributor",
    className: "w-1/6 text-center"
  }, "Distributor"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: "patients",
    className: "w-1/6 text-center"
  }, "Patients"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: "healthcareprofessionals",
    className: "w-1/4 text-center"
  }, "Healthcare Professional"))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "If Others"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Has the reporter informed the incident to the manufacturer?"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full",
    disabled: reporterType === "manufacturer"
  }, /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "No"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, "Dont Know"))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Is the reporter also submitting the report on behalf of the manufacturer?"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full",
    disabled: reporterType === "manufacturer"
  }, /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "No"), /* @__PURE__ */ React.createElement(import_antd6.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, "Dont Know"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Phone Number"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Email ID"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea2, {
    rows: 4
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\index.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => Form3page9
});
init_react();
var import_react7 = require("react");
var import_antd10 = require("antd");

// app/routes/medical-device-reporting/3/subforms/option1.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_antd7 = require("antd");
function Option12() {
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "option1"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "w-full shadow-xl"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-8 py-16 pb-8"
  }, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Medical Device"), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react6.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Type of device"
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react6.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Implantability"
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Implantable"), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Implantable"))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react6.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reusability"
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 0,
    className: "w-1/4 text-center"
  }, "Single Use Device"), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 1,
    className: "w-1/4 text-center"
  }, "Reusable device"), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Button, {
    value: 2,
    className: "w-1/2 text-center"
  }, "Reuse of manufactured marked single use"))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd7.Checkbox, null, "Personal use/homecare use ")))));
}
var option1_default2 = Option12;

// app/routes/medical-device-reporting/3/subforms/option2.tsx
init_react();
var import_antd8 = require("antd");
function Option22() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "option2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-8 py-16 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "In Vitro Diagnostics"), /* @__PURE__ */ React.createElement("div", {
    className: " my-2 mx-4 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "Kits")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "Control Materials ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "Reagents")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "IVD Electronic Reader/Analyzer")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "Calibrators")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd8.Checkbox, null, "Others"))))));
}
var option2_default2 = Option22;

// app/routes/medical-device-reporting/3/subforms/option3.tsx
init_react();
var import_antd9 = require("antd");
var { TextArea: TextArea3 } = import_antd9.Input;
var option32 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "option3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-xl p-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-16 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Equipment/Machines"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Equipment usage"
  }), /* @__PURE__ */ React.createElement(import_antd9.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd9.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ React.createElement(import_antd9.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ React.createElement(import_antd9.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Invasibility"
  }), /* @__PURE__ */ React.createElement(import_antd9.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd9.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Invasive"), /* @__PURE__ */ React.createElement(import_antd9.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Invasive"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, " Imaging ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, " Others "))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reporter's Comments"
  }), /* @__PURE__ */ React.createElement(TextArea3, {
    rows: 2
  }))));
};
var option3_default2 = option32;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\index.tsx
function Form3page9() {
  const [opt1, setOpt1] = (0, import_react7.useState)(false);
  const [opt2, setOpt2] = (0, import_react7.useState)(false);
  const [opt3, setOpt3] = (0, import_react7.useState)(false);
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-8 py-4 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Device Category"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd10.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center",
    onClick: () => {
      setOpt1(true);
      setOpt2(false);
      setOpt3(false);
    }
  }, "Medical Device"), /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center",
    onClick: () => {
      setOpt1(false);
      setOpt2(true);
      setOpt3(false);
    }
  }, "In Vitro Diagnostics"), /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center",
    onClick: () => {
      setOpt1(false);
      setOpt2(false);
      setOpt3(true);
    }
  }, "Equipment/Machines"))))), opt1 && /* @__PURE__ */ React.createElement("div", {
    className: "Option1"
  }, /* @__PURE__ */ React.createElement(option1_default2, null)), opt2 && /* @__PURE__ */ React.createElement("div", {
    className: "Option2"
  }, /* @__PURE__ */ React.createElement(option2_default2, null)), opt3 && /* @__PURE__ */ React.createElement("div", {
    className: "Option3"
  }, /* @__PURE__ */ React.createElement(option3_default2, null)), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\index.tsx
var __exports4 = {};
__export(__exports4, {
  default: () => Form3page4
});
init_react();
var import_antd11 = require("antd");
var { TextArea: TextArea4 } = import_antd11.Input;
function Form3page4() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Manufacturer Details")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd11.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd11.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea4, {
    rows: 3,
    placeholder: ""
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\5\index.tsx
var __exports5 = {};
__export(__exports5, {
  default: () => Form3page5
});
init_react();
var import_react8 = require("react");
var import_antd12 = require("antd");
var { TextArea: TextArea5 } = import_antd12.Input;
function Form3page5() {
  const [isSeriousEvent, setIsSeriousEvent] = (0, import_react8.useState)(false);
  const [isDead, setIsDead] = (0, import_react8.useState)(false);
  const radioOptions1 = [
    "Hospital Premise",
    "Manufacturer Premise",
    "Home",
    "Others"
  ];
  const radioOptions2 = [
    "Healthcare professional",
    "Patient",
    "Problem noted before use",
    "Others"
  ];
  const radioOptions3 = [
    "Returned to the company",
    "Implanted in patient",
    "Within the facility",
    "At patient home",
    "Destroyed",
    "Others"
  ];
  const radioOptions4 = ["Yes", "No"];
  const radioOptions5 = [
    "Death",
    "Life Threatening",
    "Disability",
    "Hospitalization",
    "Congenital Anomaly",
    "Any medical event",
    "Permanent Impairment"
  ];
  const changeSeriousEventState = (e) => {
    if (e.target.value === "Yes") {
      setIsSeriousEvent(true);
    } else {
      setIsSeriousEvent(false);
    }
  };
  const changeSeriousEventValue = (e) => {
    if (e.target.value === "Death") {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  };
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Event Description"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of Event",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of Implant",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Location of event",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device Operator",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device location",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of return",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Serious event?",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button",
    onChange: (e) => {
      changeSeriousEventState(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Reason",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions5,
    optionType: "button",
    disabled: !isSeriousEvent,
    onChange: (e) => {
      changeSeriousEventValue(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of death",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    disabled: !isDead
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Is device in use after the incident?",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Detailed description of the incident",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(TextArea5, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[22px] text-[#E8590C]"
  }, "Frequency of occurrence of similar adverse events in India"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Year",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    picker: "year"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Number of similar events",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Total number suplied",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Frequency",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, null)))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[22px] text-[#E8590C]"
  }, "Frequency of occurrence of similar adverse events globally"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Year",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    picker: "year"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Number of similar events",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Total number suplied",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Frequency",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, null))))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "5"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\6\index.tsx
var __exports6 = {};
__export(__exports6, {
  default: () => Form3page6
});
init_react();
var import_antd13 = require("antd");
var import_react9 = require("react");
var { TextArea: TextArea6 } = import_antd13.Input;
function Form3page6() {
  const [isRecovered, setIsRecovered] = (0, import_react9.useState)(true);
  const [isDead, setIsDead] = (0, import_react9.useState)(false);
  const changeDeathData = (e) => {
    if (e.target.value === "Yes") {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  };
  const changeRecoveryData = (e) => {
    if (e.target.value === "Yes") {
      setIsRecovered(true);
    } else {
      setIsRecovered(false);
    }
  };
  const radioOptions1 = ["Male", "Female", "Others"];
  const radioOptions2 = ["Yes", "No"];
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Patient Information")), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Patient Hospital Number",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Patient Initials",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Age",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Weight",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Sex",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Other relevant history, including pre-existing medical conditions"
  }), /* @__PURE__ */ React.createElement(TextArea6, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Has the patient recovered?",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button",
    onChange: (e) => {
      changeRecoveryData(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of recovery",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full",
    disabled: isRecovered === false
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Is the patient dead?",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button",
    onChange: (e) => {
      changeDeathData(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of death",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full",
    disabled: isDead === false
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Other patient outcomes",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(TextArea6, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "6"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\7\index.tsx
var __exports7 = {};
__export(__exports7, {
  default: () => Form3page7
});
init_react();
var import_antd14 = require("antd");
function Form3page7() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Healthcare Facility Details")), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Name",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Address",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Contact Number of Person at the site of event",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Telephone Number",
    isRequired: false
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "7"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\8\index.tsx
var __exports8 = {};
__export(__exports8, {
  default: () => Form3page8
});
init_react();
var import_antd15 = require("antd");
var { TextArea: TextArea7 } = import_antd15.Input;
function Form3page8() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Casualty Assessment"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Investigation action taken"
  }), /* @__PURE__ */ React.createElement(TextArea7, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Root cause of problem"
  }), /* @__PURE__ */ React.createElement(TextArea7, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "8"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\9\index.tsx
var __exports9 = {};
__export(__exports9, {
  default: () => Form3page92
});
init_react();
var import_antd16 = require("antd");
var { TextArea: TextArea8 } = import_antd16.Input;
function Form3page92() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Product Owner's Investigation"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Product Owners device risk analysis report"
  }), /* @__PURE__ */ React.createElement(TextArea8, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Corrective / preventive action taken"
  }), /* @__PURE__ */ React.createElement(TextArea8, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Device history review"
  }), /* @__PURE__ */ React.createElement(TextArea8, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "9"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\b.tsx
var b_exports = {};
__export(b_exports, {
  default: () => Form3page4b
});
init_react();
var import_antd17 = require("antd");
var { TextArea: TextArea9 } = import_antd17.Input;
function Form3page4b() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Importer Details")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd17.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd17.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea9, {
    rows: 3,
    placeholder: ""
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4b"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\c.tsx
var c_exports = {};
__export(c_exports, {
  default: () => Form3page4c
});
init_react();
var import_antd18 = require("antd");
var { TextArea: TextArea10 } = import_antd18.Input;
function Form3page4c() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Distributor details")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea10, {
    rows: 3,
    placeholder: ""
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4c"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\d.tsx
var d_exports = {};
__export(d_exports, {
  default: () => Form3page4d
});
init_react();
var import_react10 = require("react");
var import_antd19 = require("antd");
var { TextArea: TextArea11 } = import_antd19.Input;
function Form3page4d() {
  const [regulatedInIndia, setRegulatedInIndia] = (0, import_react10.useState)("");
  const [availabilityValue, setAvailabilityValue] = (0, import_react10.useState)("");
  const [usagePerManufacturer, setUsagePerManufacturer] = (0, import_react10.useState)("");
  const changeStateOfRadio = (radioIdentifier, radioValue) => {
    if (radioIdentifier === "1") {
      setRegulatedInIndia(radioValue.target.value);
    }
    if (radioIdentifier === "2") {
      setAvailabilityValue(radioValue.target.value);
    }
    if (radioIdentifier === "3") {
      setUsagePerManufacturer(radioValue.target.value);
    }
  };
  const radioOptions1 = ["Yes", "No", "Don't know"];
  const radioOptions2 = ["A", "B", "C", "D"];
  const radioOptions3 = ["Yes", "No"];
  const radioOptions4 = [
    "Destroyed",
    "Still in use",
    "Returned to manufacturer or importer"
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Further Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Is the device notified/regulated in India?"
  }), /* @__PURE__ */ React.createElement(import_antd19.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button",
    value: regulatedInIndia,
    onChange: (e) => changeStateOfRadio("1", e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Device Risk Classification as per India MDR 2017"
  }), /* @__PURE__ */ React.createElement(import_antd19.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Catalogue Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Model Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Batch Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Serial Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Software Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Accessories/Associated Devices"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "GMDN Code & GMDN Term"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "UDI Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Installation Date"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Expiration Date"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Last Calibration"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Age of device from date of manufacturing"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "How long was device in use"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Availability of device for evaluation"
  }), /* @__PURE__ */ React.createElement(import_antd19.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    defaultValue: radioOptions3[0],
    optionType: "button",
    value: availabilityValue,
    onChange: (e) => changeStateOfRadio("2", e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "What is the status of the device?"
  }), /* @__PURE__ */ React.createElement(import_antd19.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button",
    disabled: availabilityValue === "No"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Is the usage of device as per manufacturer\u2019s claims/instructions for use/user manual"
  }), /* @__PURE__ */ React.createElement(import_antd19.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    optionType: "button",
    value: usagePerManufacturer,
    onChange: (e) => changeStateOfRadio("3", e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Specify usage"
  }), /* @__PURE__ */ React.createElement(TextArea11, {
    rows: 3,
    placeholder: "",
    disabled: usagePerManufacturer === "No"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Regulator / Regulatory status in country of origin"
  }), /* @__PURE__ */ React.createElement(TextArea11, {
    rows: 3,
    placeholder: "",
    disabled: regulatedInIndia === "Yes"
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4d"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\index.tsx
var f_exports = {};
__export(f_exports, {
  default: () => Form1page3f1
});
init_react();
var import_fi3 = require("react-icons/fi");
var import_antd20 = require("antd");
function Form1page3f1() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd20.Form, {
    name: "Form1Page3f",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Naranjo\u2019s Scale"), /* @__PURE__ */ React.createElement("form", null, /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Are there previous conclusion reports on this reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Are there previous conclusion reports on this reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the adverse event appear after the suspect drug was administered?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the AR improve when the drug was discontinued or a specific antagonist was administered?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the AR reappear when drug was re-administered?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Are there alternate causes [other than the drug] that could solely have caused the reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the reaction reappear when a placebo was given?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the adverse event confirmed by objective evidence?"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd20.Radio.Button, {
    value: 2
  }, "Don't know")))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row-reverse"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-x-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-end"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg text-[#6C567B] p-0 m-0"
  }, "Probable ADR")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-end"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[#6C567B] p-0 m-0"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-bold text-4xl"
  }, "07"), "/10")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row font-bold m-0 p-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "m-0 p-0"
  }, "Result"), /* @__PURE__ */ React.createElement(import_fi3.FiHelpCircle, {
    className: "mt-1 ml-1"
  })), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("p", {
    className: "my-auto font-bold"
  }, "Score")))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\1\index.tsx
var __exports10 = {};
__export(__exports10, {
  default: () => Form1page1
});
init_react();
var import_antd21 = require("antd");
var import_react_redux2 = require("react-redux");
var { TextArea: TextArea12 } = import_antd21.Input;
function Form1page1() {
  const dispatch = (0, import_react_redux2.useDispatch)();
  const formState = (0, import_react_redux2.useSelector)((state) => state.form1page1);
  const changeFormData = (value, fieldName) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" }
  ];
  const advisedMedicineOptions = [
    { label: "Doctor", value: "doctor" },
    { label: "Pharmacist", value: "pharmacist" },
    { label: "Friends", value: "friends" },
    {
      label: "Self (past disease experienced)",
      value: "self(past disease experienced)"
    },
    {
      label: "Self (no past disease experienced)",
      value: "self(no past disease experienced)"
    }
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd21.Form, {
    name: "Form1Page1",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Patient Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Patient Initials",
    name: "patientInitials",
    rules: [
      { required: true, message: "Patient initials is required" }
    ],
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Date of Birth",
    name: "DateOfBirth",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    className: "w-full",
    label: "Age of Onset",
    name: "ageOfOnset",
    rules: [
      { required: true, message: "Age of onset is required" }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd21.InputNumber, {
    style: { width: "100%" }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Gender",
    name: "gender",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Select, {
    allowClear: true,
    options: genderOptions
  })), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    className: "w-full",
    label: "Weight",
    name: "weight"
  }, /* @__PURE__ */ React.createElement(import_antd21.InputNumber, {
    addonAfter: "mgs"
  })), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    name: "patientID",
    label: "Patient ID",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "IP/OP",
    name: "ip_op",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Unit",
    name: "unit",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Reason for taking medication/vaccination",
    name: "reasonForTakingMedication",
    className: "w-full py-4"
  }, /* @__PURE__ */ React.createElement(TextArea12, {
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Medicines/vaccines advised by",
    name: "medicineAdvised",
    className: "w-3/4"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox.Group, {
    className: "w-full grid grid-cols-3 gap-x-5 gap-y-2",
    options: advisedMedicineOptions,
    name: "medicineAdvised"
  })), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Known Allergies",
    name: "knownAllergies",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    label: "Social History",
    name: "socialHistory",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd21.Input, null)))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\2\index.tsx
var __exports11 = {};
__export(__exports11, {
  default: () => Form1page2
});
init_react();
var import_antd22 = require("antd");
var { TextArea: TextArea13 } = import_antd22.Input;
function Form1page2() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd22.Form, {
    name: "Form1Page2",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Suspected Adverse Reaction")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    className: "w-full",
    label: "Date of reaction started",
    name: "dateOfReactionStarted",
    rules: [{ required: true, message: "Date of reaction started" }]
  }, /* @__PURE__ */ React.createElement(import_antd22.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    className: "w-full",
    label: "Date of recovery",
    name: "dateOfRecovery"
  }, /* @__PURE__ */ React.createElement(import_antd22.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    className: "w-full",
    label: "Describe reaction or problem",
    name: "reactionDescription",
    rules: [
      { required: true, message: "Reaction description is mandatory" }
    ]
  }, /* @__PURE__ */ React.createElement(TextArea13, {
    rows: 4
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\index.tsx
var __exports12 = {};
__export(__exports12, {
  default: () => Form1page3
});
init_react();
var import_antd23 = require("antd");
function Form1page3() {
  const onFormSubmit = (e) => {
    e.preventDefault();
  };
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Medication")), /* @__PURE__ */ React.createElement("form", {
    onSubmit: onFormSubmit
  }, /* @__PURE__ */ React.createElement(Subform, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3"
  }));
}
function Subform() {
  return /* @__PURE__ */ React.createElement(import_antd23.Form, {
    name: "Form1Page3",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    className: "w-full",
    label: "Name (Brand/Generic)",
    name: "nameOfDrug",
    rules: [{ required: true, message: "Drug name is mandatory" }]
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, {
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "manufacturer",
    label: "Manufacturer",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    label: "Batch No. / Lot No.",
    name: "BatchNo_LotNo",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "expDate",
    label: "Exp. Date",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "doseUsed",
    label: "Dose used",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, {
    type: "number",
    suffix: "kgs"
  })), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "routeUsed",
    label: "Route used",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "ip_op",
    label: "IP_OP",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "unit",
    label: "Unit",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "frequency",
    label: "Frequency (OD, BD, etc.)",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "dateStarted",
    label: "Date started",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "dateStopped",
    label: "Date stopped",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    name: "Indication",
    label: "Indication",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-between w-100"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
  }, "Add more")));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\4\index.tsx
var __exports13 = {};
__export(__exports13, {
  default: () => Form1page4
});
init_react();
var import_antd24 = require("antd");
var import_fi4 = require("react-icons/fi");
var { TextArea: TextArea14 } = import_antd24.Input;
function Form1page4() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd24.Form, {
    name: "Form1Page4",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Reporter Details")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "ID Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Pin"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Email ID"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Tel. Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Prof. Address"
  }), /* @__PURE__ */ React.createElement(TextArea14, {
    rows: 2
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-1 text-[16px]"
  }, "Occupation"), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
    name: "occupation"
  }, /* @__PURE__ */ React.createElement(import_antd24.Radio, {
    value: 1
  }, "Physician"), /* @__PURE__ */ React.createElement(import_antd24.Radio, {
    value: 2
  }, "Dentist"), /* @__PURE__ */ React.createElement(import_antd24.Radio, {
    value: 3
  }, "Nurse"), /* @__PURE__ */ React.createElement(import_antd24.Radio, {
    value: 4
  }, "Pharmacist")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center pt-1"
  }, /* @__PURE__ */ React.createElement(import_antd24.Radio, {
    value: 5
  }, "Others"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi4.FiHelpCircle, null)
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Department"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date of this report"
  }), /* @__PURE__ */ React.createElement(import_antd24.DatePicker, {
    className: "w-full"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "References"
  }), /* @__PURE__ */ React.createElement(TextArea14, {
    rows: 2
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reporter's comments"
  }), /* @__PURE__ */ React.createElement(TextArea14, {
    rows: 2
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\2.tsx
var __exports14 = {};
__export(__exports14, {
  default: () => Form1page3f2
});
init_react();
var import_fi5 = require("react-icons/fi");
var import_antd25 = require("antd");
var { Panel } = import_antd25.Collapse;
function Form1page3f2() {
  const options = [
    { label: "Certain", value: "certain" },
    { label: "Probably / Likely", value: "probably/likely" },
    { label: "Possible", value: "possible" },
    { label: "Unlikely", value: "unlikely" },
    { label: "Conditional / Unclassified", value: "conditional/unclassified" },
    {
      label: "Un-assessable / Un-classifiable",
      value: "un-assessable/un-classifiable"
    }
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd25.Form, {
    name: "Form1Page3f2",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-8 py-4 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "WHO Probability Scale"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Radio.Group, {
    optionType: "button",
    buttonStyle: "solid",
    size: "large",
    options
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Assesment criteria"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center mb-1 ml-2"
  }, /* @__PURE__ */ React.createElement(import_fi5.FiHelpCircle, null))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 my-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Collapse, {
    defaultActiveKey: ["1"]
  }, options.map((option, index) => /* @__PURE__ */ React.createElement(Panel, {
    header: option.label,
    key: index
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem.")))))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f2"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\3.tsx
var __exports15 = {};
__export(__exports15, {
  default: () => Form1page3f3
});
init_react();
var import_fi6 = require("react-icons/fi");
var import_antd26 = require("antd");
function Form1page3f3() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd26.Form, {
    name: "Form1Page3f3",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Hartwig's Severity Assessment Scale"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd26.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 0
  }, "Level 1"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 1
  }, "Level 2"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 2
  }, "Level 3"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 3
  }, "Level 4"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 4
  }, "Level 5"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 5
  }, "Level 6"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
    value: 6
  }, "Level 7")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-2/3 mr-3"
  }, /* @__PURE__ */ React.createElement(import_antd26.Progress, {
    percent: 30,
    status: "normal",
    showInfo: false,
    strokeColor: "#E8590C",
    trailColor: "#E5E5E5"
  })), /* @__PURE__ */ React.createElement("p", {
    className: ""
  }, "Mild Level")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-xl text-[#E8590C]"
  }, "Assessment criteria"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center ml-2 mb-1"
  }, /* @__PURE__ */ React.createElement(import_fi6.FiHelpCircle, null))), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires that the suspected drug be withheld, discontinued or otherwise changed. No antidote or other treatment is required, and there is no increase in length of stay"), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f3"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\4.tsx
var __exports16 = {};
__export(__exports16, {
  default: () => Form1page3f4
});
init_react();
var import_antd27 = require("antd");
function Form1page3f4() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd27.Form, {
    name: "Form1Page3f4",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Modified Schumock and Thornton scale"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was there a history of allergy or previous reactions to the drug?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the drug involved inappropriate for the patient\u2019s clinical condition?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the dose, route or frequency of administration inappropriate for the patient\u2019s age, weight or disease state?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was a toxic serum drug concentration (or laboratory monitoring test) documented?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was there a known treatment for the adverse drug reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was required therapeutic drug monitoring or other necessary lab tests not performed?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was a drug interaction involved in the ADR?"
  }), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[16px] m-0 font-bold"
  }, "Final Result"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 0
  }, "Definitely preventable"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 1
  }, "Probably preventable"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Button, {
    value: 2
  }, "Not preventable"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f4"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\5.tsx
var __exports17 = {};
__export(__exports17, {
  default: () => Form1page3f5
});
init_react();
var import_antd28 = require("antd");
var import_fi7 = require("react-icons/fi");
function Form1page3f5() {
  const options = [
    { label: "Age", value: "age" },
    { label: "Gender", value: "gender" },
    { label: "Genetic", value: "genetic" },
    { label: "Inter-current disease", value: "inter-current disease" },
    { label: "Multiple Drug Therapy", value: "multiple drug therapy" }
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd28.Form, {
    name: "Form1Page3f5",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-8 py-4 pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-[24px] text-[#E8590C]"
  }, "Predictability"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd28.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    value: 0
  }, "Predictable"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    value: 1
  }, "Not predictable"))), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 my-4 text-[24px] text-[#E8590C]"
  }, "Predisposing factors"), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox.Group, {
    options
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, {
    value: "other"
  }, "Other")), /* @__PURE__ */ React.createElement(import_antd28.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi7.FiHelpCircle, null)
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f5"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\b.tsx
var b_exports2 = {};
__export(b_exports2, {
  default: () => Form1page3a
});
init_react();
var import_antd29 = require("antd");
function Form1page3a() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd29.Form, {
    name: "Form1Page3b",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Action Taken"), /* @__PURE__ */ React.createElement(RadioGroupDrugs, {
    drugOptions: drugs
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3b"
  })));
}
var RadioGroupDrugs = (props) => {
  const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
    "Unknown"
  ];
  const radioFields = props.drugOptions.map((drug, index) => /* @__PURE__ */ React.createElement(import_antd29.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, radioFields);
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\c.tsx
var c_exports2 = {};
__export(c_exports2, {
  default: () => Form1page3a2
});
init_react();
var import_antd30 = require("antd");
function Form1page3a2() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd30.Form, {
    name: "Form1Page3c",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Dechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs2, {
    drugOptions: drugs
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3c"
  })));
}
var RadioGroupDrugs2 = (props) => {
  const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
    "Unknown"
  ];
  const radioFields = props.drugOptions.map((drug, index) => /* @__PURE__ */ React.createElement(import_antd30.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd30.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, radioFields);
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\d.tsx
var d_exports2 = {};
__export(d_exports2, {
  default: () => Form1page3a3
});
init_react();
var import_antd31 = require("antd");
function Form1page3a3() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd31.Form, {
    name: "Form1Page3d",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Rechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs3, {
    drugOptions: drugs
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3d"
  })));
}
var RadioGroupDrugs3 = (props) => {
  const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
    "Unknown"
  ];
  const radioFields = props.drugOptions.map((drug, index) => /* @__PURE__ */ React.createElement(import_antd31.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd31.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, radioFields);
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\e.tsx
var e_exports = {};
__export(e_exports, {
  default: () => Form1page3e
});
init_react();
var import_react11 = require("react");
var import_fi8 = require("react-icons/fi");
var import_antd32 = require("antd");
function Form1page3e() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd32.Form, {
    name: "Form1Page3e",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Reaction Reappeared After Re-introduction"), /* @__PURE__ */ React.createElement(RadioGroupDrugs4, {
    drugOptions: drugs
  }), /* @__PURE__ */ React.createElement(AddDrugsBox, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3e"
  })));
}
var RadioGroupDrugs4 = (props) => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
    "Unknown"
  ];
  const componentsForDrugs = props.drugOptions.map((drug, index) => /* @__PURE__ */ React.createElement("div", {
    className: "pb-5"
  }, /* @__PURE__ */ React.createElement(import_antd32.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full m-0 p-0 ",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd32.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement(import_antd32.Form.Item, {
    name: "drugDose_" + drug,
    label: "Dose",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd32.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi8.FiHelpCircle, null)
  }))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, componentsForDrugs);
};
var AddDrugsBox = () => {
  const [drugsAdded, setDrugsAdded] = (0, import_react11.useState)([]);
  const [inputValue, setInputValue] = (0, import_react11.useState)("");
  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  const onClickAddDrug = (e) => {
    e.preventDefault();
    setDrugsAdded([...drugsAdded, inputValue]);
    setInputValue("");
  };
  const onClickRemoveDrug = (drug) => {
    setDrugsAdded(drugsAdded.filter((d) => d !== drug));
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-16"
  }, /* @__PURE__ */ React.createElement("form", {
    className: "grid grid-cols-12 gap-1 gap-y-3",
    onSubmit: onClickAddDrug
  }, /* @__PURE__ */ React.createElement(import_antd32.Input, {
    className: "col-span-11",
    placeholder: "Add a drug",
    onChange: onChangeInput,
    value: inputValue
  }), /* @__PURE__ */ React.createElement("button", {
    className: "col-span-1 bg-[#6C567B] text-white p-2 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
  }, /* @__PURE__ */ React.createElement(import_fi8.FiPlus, {
    className: "mx-auto"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 gap-1 pt-2"
  }, drugsAdded.map((drug) => /* @__PURE__ */ React.createElement("div", {
    className: "border border-gray-400 col-span-11 flex flex-row justify-between px-5 py-1"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "my-auto"
  }, drug), /* @__PURE__ */ React.createElement("button", {
    className: "my-auto",
    onClick: () => onClickRemoveDrug(drug)
  }, /* @__PURE__ */ React.createElement(import_fi8.FiX, null))))));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\g.tsx
var g_exports = {};
__export(g_exports, {
  default: () => Form1page3g
});
init_react();
var import_antd33 = require("antd");
var import_TextArea = __toESM(require("antd/lib/input/TextArea"));
function Form1page3g() {
  const options = ["Specific", "Symptomatic", "None"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd33.Form, {
    name: "Form1Page3g",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Treatment Given"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(import_antd33.Checkbox.Group, {
    options
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border mt-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-0 py-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-medium my-0 py-0"
  }, "Treatment Details (if any)")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_TextArea.default, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3g"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\h.tsx
var h_exports = {};
__export(h_exports, {
  default: () => Form1page3h
});
init_react();
var import_antd34 = require("antd");
function Form1page3h() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd34.Form, {
    name: "Form1Page3h",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "my-0 py-0"
  }, "Concomitant medical product"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-600"
  }, "Including self-medication and herbal remedies with therapy dates")), /* @__PURE__ */ React.createElement(Subform2, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3h"
  })));
}
var Subform2 = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
  className: "min-w-full pt-4"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Name (brand/generic)"
}), /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Dose Used"
}), /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Route Used"
}), /* @__PURE__ */ React.createElement(import_antd34.Input, null))), /* @__PURE__ */ React.createElement("div", {
  className: "mt-4 w-full"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Frequency (OD, BD)"
}), /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Date started"
}), /* @__PURE__ */ React.createElement(import_antd34.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Date stopped"
}), /* @__PURE__ */ React.createElement(import_antd34.DatePicker, {
  className: "w-full"
}))), /* @__PURE__ */ React.createElement("div", {
  className: "mt-4 w-full"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Indication"
}), /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row justify-between w-100 pt-5"
}, /* @__PURE__ */ React.createElement("button", {
  className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
}, "Save"), /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
}, "Add more")));

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\i.tsx
var i_exports = {};
__export(i_exports, {
  default: () => Form1page3i
});
init_react();
var import_react12 = require("react");
var import_antd35 = require("antd");
var { TextArea: TextArea16 } = import_antd35.Input;
function Form1page3i() {
  const [seriousReaction, setSeriousReaction] = (0, import_react12.useState)(false);
  const [isApplicable, setIsApplicable] = (0, import_react12.useState)(false);
  const changeSeriousness = (checked) => {
    setSeriousReaction(checked);
  };
  const changeApplicability = (checked) => {
    setIsApplicable(checked);
  };
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd35.Form, {
    name: "Form1Page3i",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "AMC/NCC Section"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4 grid grid-col-12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row col-span-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "pr-3"
  }, "Not Applicable"), /* @__PURE__ */ React.createElement(import_antd35.Switch, {
    onChange: changeApplicability
  }), /* @__PURE__ */ React.createElement("p", {
    className: "pl-3"
  }, "Applicable"))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "AMC Report No."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9"
  }, /* @__PURE__ */ React.createElement(import_antd35.Input, {
    disabled: !isApplicable
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Worldwide Unique No."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9"
  }, /* @__PURE__ */ React.createElement(import_antd35.Input, {
    disabled: !isApplicable
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Relevant tests/ laboratory data with dates"
  }), /* @__PURE__ */ React.createElement(TextArea16, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Relevant medical/ medication history (e.g. allergies, race, \r\n                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)"
  }), /* @__PURE__ */ React.createElement(TextArea16, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 flex flex-row"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Seriousness of the reaction"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-2 pl-5"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "pr-3"
  }, "No"), /* @__PURE__ */ React.createElement(import_antd35.Switch, {
    onChange: changeSeriousness
  }), /* @__PURE__ */ React.createElement("p", {
    className: "pl-3"
  }, "Yes"))), /* @__PURE__ */ React.createElement(import_antd35.Checkbox.Group, {
    disabled: !seriousReaction
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    value: "Congenital-anomaly"
  }, "Congenital-anomaly")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    value: "Life threatening"
  }, "Life threatening", " ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    value: "Hospitalization/Prolonged"
  }, "Hospitalization/Prolonged")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    value: "Disability"
  }, "Disability")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    value: "Required intervention to Prevent permanent impairment/damage"
  }, "Required intervention to Prevent permanent impairment/damage")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-12"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    className: "col-span-2",
    value: "Death"
  }, "Death"), /* @__PURE__ */ React.createElement(import_antd35.DatePicker, {
    className: "my-auto col-span-10"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-12"
  }, /* @__PURE__ */ React.createElement(import_antd35.Checkbox, {
    className: "col-span-2",
    value: "Other"
  }, "Other (specify)"), /* @__PURE__ */ React.createElement(import_antd35.Input, {
    className: "my-auto col-span-10"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Outcomes"
  }), /* @__PURE__ */ React.createElement(import_antd35.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-2/12 text-center",
    value: "recovered"
  }, "Recovered"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-2/12 text-center",
    value: "recovering"
  }, "Recovering"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-2/12 text-center",
    value: "notrecovered"
  }, "Not recovered"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-1/12 text-center",
    value: "fatal"
  }, "Fatal"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-3/12 text-center",
    value: "recoveredwithsequelae"
  }, "Recovered with sequelae"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    className: "w-2/12 text-center",
    value: "unknown"
  }, "Unknown")))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3i"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\j.tsx
var j_exports = {};
__export(j_exports, {
  default: () => Form1page3j
});
init_react();
var import_antd36 = require("antd");
function Form1page3j() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd36.Form, {
    name: "Form1Page3j",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Outcome"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Fatal"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "Recovery"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 2
  }, "Continuing"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 3
  }, "Unknown"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 4
  }, "Other"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3j"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\login\index.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});
init_react();
var import_antd37 = require("antd");
var import_icons = require("@ant-design/icons");
function Login() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-screen flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-lg w-1/2 min-h-2/4 mx-auto mb-32 p-10 text-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-[#6C567B] text-[35px]"
  }, "ADR Portal"), /* @__PURE__ */ React.createElement("form", {
    className: "w-1/2 mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5"
  }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement(import_antd37.Input, {
    placeholder: "example@email.com"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5"
  }, /* @__PURE__ */ React.createElement("label", null, "Password"), /* @__PURE__ */ React.createElement(import_antd37.Input.Password, {
    placeholder: "YourPasswordHere",
    iconRender: (visible) => visible ? /* @__PURE__ */ React.createElement(import_icons.EyeTwoTone, null) : /* @__PURE__ */ React.createElement(import_icons.EyeInvisibleOutlined, null)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5 flex flex-row justify-center"
  }, /* @__PURE__ */ React.createElement(import_antd37.Checkbox, {
    className: "font-medium"
  }, "Remember me")), /* @__PURE__ */ React.createElement("div", {
    className: "mb-10"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "w-1/2 bg-[#6C567B] text-white rounded-lg p-2"
  }, "Login")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", {
    className: "underline underline-offset-4 text-gray-500"
  }, "Forgot password?")))));
}

// route:D:\Projects\ADR-portal\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});
init_react();
var import_remix4 = __toESM(require_remix());
function Home() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-screen h-screen flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-lg w-3/4 min-h-3/4 mx-auto p-10 text-left"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-500 text-2xl"
  }, "Select a form to fill"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 grid-rows-1 gap-5"
  }, /* @__PURE__ */ React.createElement(CardSelect, {
    route: "adr-reporting/1",
    image: "1",
    name: "ADR Reporting Form"
  }), /* @__PURE__ */ React.createElement(CardSelect, {
    route: "medical-device-reporting/1",
    image: "2",
    name: "Medical Device ADR Reporting Form"
  }))));
}
var CardSelect = (props) => /* @__PURE__ */ React.createElement(import_remix4.Link, {
  to: props.route,
  className: ""
}, /* @__PURE__ */ React.createElement("div", {
  className: "border-2 rounded-lg border-gray-400 p-3 h-full hover:scale-105 duration-75"
}, /* @__PURE__ */ React.createElement("div", {
  className: "w-full h-full flex flex-col justify-start"
}, /* @__PURE__ */ React.createElement("img", {
  alt: "Placeholder image",
  src: "https://via.placeholder.com/150",
  className: "h-3/4 w-full"
}), /* @__PURE__ */ React.createElement("p", {
  className: "font-medium text-xl text-black pt-5 text-center"
}, props.name))));

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d0836cf0", "entry": { "module": "/build/entry.client-PSUNGD3I.js", "imports": ["/build/_shared/chunk-LY4SEGWT.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-LWSBXGEY.js", "imports": ["/build/_shared/chunk-GV3ILXJ2.js", "/build/_shared/chunk-UFQM3TJR.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-4ZU5OGWG.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-WDFH7V2O.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-FSHART4N.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-PTO5VVYI.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-5U4YJKZF.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-IDMYLF5D.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-65FUXHOF.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-EDC45JWG.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-PLH6WTAV.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-FKAOODKW.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-MCECKCHL.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-MQPFMTRF.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-PAXGRWTQ.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-IGULJAYO.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-4D2N6UXN.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/j": { "id": "routes/adr-reporting/3/j", "parentId": "root", "path": "adr-reporting/3/j", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/j-Y2KJ4POD.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-O7SHSSQW.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJ3G473I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-JLFSXWFE.js", "imports": ["/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-ISY55TCS.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-OS6WU3AL.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-2VGJTMSD.js", "imports": ["/build/_shared/chunk-5CJYI6GW.js", "/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-4T4B62KC.js", "/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-FCSXU7IN.js", "imports": ["/build/_shared/chunk-5CJYI6GW.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-TIFUSMYA.js", "imports": ["/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-RRALJI4O.js", "imports": ["/build/_shared/chunk-4T4B62KC.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-K7QV6NDM.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-QNG4RLWA.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-QIHA5YBB.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-J2J5SXGN.js", "imports": ["/build/_shared/chunk-QCF62YKB.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-LXGHCBJU.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-FVWDMLQL.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-AOND6WH7.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-K2JX3BCA.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-U25EUWQC.js", "imports": ["/build/_shared/chunk-BHC3G2NK.js", "/build/_shared/chunk-O5PEROK5.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D0836CF0.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/medical-device-reporting/3/subforms/option1": {
    id: "routes/medical-device-reporting/3/subforms/option1",
    parentId: "root",
    path: "medical-device-reporting/3/subforms/option1",
    index: void 0,
    caseSensitive: void 0,
    module: option1_exports
  },
  "routes/medical-device-reporting/3/subforms/option2": {
    id: "routes/medical-device-reporting/3/subforms/option2",
    parentId: "root",
    path: "medical-device-reporting/3/subforms/option2",
    index: void 0,
    caseSensitive: void 0,
    module: option2_exports
  },
  "routes/medical-device-reporting/3/subforms/option3": {
    id: "routes/medical-device-reporting/3/subforms/option3",
    parentId: "root",
    path: "medical-device-reporting/3/subforms/option3",
    index: void 0,
    caseSensitive: void 0,
    module: option3_exports
  },
  "routes/medical-device-reporting/1/index": {
    id: "routes/medical-device-reporting/1/index",
    parentId: "root",
    path: "medical-device-reporting/1",
    index: true,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/medical-device-reporting/2/index": {
    id: "routes/medical-device-reporting/2/index",
    parentId: "root",
    path: "medical-device-reporting/2",
    index: true,
    caseSensitive: void 0,
    module: __exports2
  },
  "routes/medical-device-reporting/3/index": {
    id: "routes/medical-device-reporting/3/index",
    parentId: "root",
    path: "medical-device-reporting/3",
    index: true,
    caseSensitive: void 0,
    module: __exports3
  },
  "routes/medical-device-reporting/4/index": {
    id: "routes/medical-device-reporting/4/index",
    parentId: "root",
    path: "medical-device-reporting/4",
    index: true,
    caseSensitive: void 0,
    module: __exports4
  },
  "routes/medical-device-reporting/5/index": {
    id: "routes/medical-device-reporting/5/index",
    parentId: "root",
    path: "medical-device-reporting/5",
    index: true,
    caseSensitive: void 0,
    module: __exports5
  },
  "routes/medical-device-reporting/6/index": {
    id: "routes/medical-device-reporting/6/index",
    parentId: "root",
    path: "medical-device-reporting/6",
    index: true,
    caseSensitive: void 0,
    module: __exports6
  },
  "routes/medical-device-reporting/7/index": {
    id: "routes/medical-device-reporting/7/index",
    parentId: "root",
    path: "medical-device-reporting/7",
    index: true,
    caseSensitive: void 0,
    module: __exports7
  },
  "routes/medical-device-reporting/8/index": {
    id: "routes/medical-device-reporting/8/index",
    parentId: "root",
    path: "medical-device-reporting/8",
    index: true,
    caseSensitive: void 0,
    module: __exports8
  },
  "routes/medical-device-reporting/9/index": {
    id: "routes/medical-device-reporting/9/index",
    parentId: "root",
    path: "medical-device-reporting/9",
    index: true,
    caseSensitive: void 0,
    module: __exports9
  },
  "routes/medical-device-reporting/4/b": {
    id: "routes/medical-device-reporting/4/b",
    parentId: "root",
    path: "medical-device-reporting/4/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports
  },
  "routes/medical-device-reporting/4/c": {
    id: "routes/medical-device-reporting/4/c",
    parentId: "root",
    path: "medical-device-reporting/4/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports
  },
  "routes/medical-device-reporting/4/d": {
    id: "routes/medical-device-reporting/4/d",
    parentId: "root",
    path: "medical-device-reporting/4/d",
    index: void 0,
    caseSensitive: void 0,
    module: d_exports
  },
  "routes/adr-reporting/3/f/index": {
    id: "routes/adr-reporting/3/f/index",
    parentId: "root",
    path: "adr-reporting/3/f",
    index: true,
    caseSensitive: void 0,
    module: f_exports
  },
  "routes/adr-reporting/1/index": {
    id: "routes/adr-reporting/1/index",
    parentId: "root",
    path: "adr-reporting/1",
    index: true,
    caseSensitive: void 0,
    module: __exports10
  },
  "routes/adr-reporting/2/index": {
    id: "routes/adr-reporting/2/index",
    parentId: "root",
    path: "adr-reporting/2",
    index: true,
    caseSensitive: void 0,
    module: __exports11
  },
  "routes/adr-reporting/3/index": {
    id: "routes/adr-reporting/3/index",
    parentId: "root",
    path: "adr-reporting/3",
    index: true,
    caseSensitive: void 0,
    module: __exports12
  },
  "routes/adr-reporting/4/index": {
    id: "routes/adr-reporting/4/index",
    parentId: "root",
    path: "adr-reporting/4",
    index: true,
    caseSensitive: void 0,
    module: __exports13
  },
  "routes/adr-reporting/3/f/2": {
    id: "routes/adr-reporting/3/f/2",
    parentId: "root",
    path: "adr-reporting/3/f/2",
    index: void 0,
    caseSensitive: void 0,
    module: __exports14
  },
  "routes/adr-reporting/3/f/3": {
    id: "routes/adr-reporting/3/f/3",
    parentId: "root",
    path: "adr-reporting/3/f/3",
    index: void 0,
    caseSensitive: void 0,
    module: __exports15
  },
  "routes/adr-reporting/3/f/4": {
    id: "routes/adr-reporting/3/f/4",
    parentId: "root",
    path: "adr-reporting/3/f/4",
    index: void 0,
    caseSensitive: void 0,
    module: __exports16
  },
  "routes/adr-reporting/3/f/5": {
    id: "routes/adr-reporting/3/f/5",
    parentId: "root",
    path: "adr-reporting/3/f/5",
    index: void 0,
    caseSensitive: void 0,
    module: __exports17
  },
  "routes/adr-reporting/3/b": {
    id: "routes/adr-reporting/3/b",
    parentId: "root",
    path: "adr-reporting/3/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports2
  },
  "routes/adr-reporting/3/c": {
    id: "routes/adr-reporting/3/c",
    parentId: "root",
    path: "adr-reporting/3/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports2
  },
  "routes/adr-reporting/3/d": {
    id: "routes/adr-reporting/3/d",
    parentId: "root",
    path: "adr-reporting/3/d",
    index: void 0,
    caseSensitive: void 0,
    module: d_exports2
  },
  "routes/adr-reporting/3/e": {
    id: "routes/adr-reporting/3/e",
    parentId: "root",
    path: "adr-reporting/3/e",
    index: void 0,
    caseSensitive: void 0,
    module: e_exports
  },
  "routes/adr-reporting/3/g": {
    id: "routes/adr-reporting/3/g",
    parentId: "root",
    path: "adr-reporting/3/g",
    index: void 0,
    caseSensitive: void 0,
    module: g_exports
  },
  "routes/adr-reporting/3/h": {
    id: "routes/adr-reporting/3/h",
    parentId: "root",
    path: "adr-reporting/3/h",
    index: void 0,
    caseSensitive: void 0,
    module: h_exports
  },
  "routes/adr-reporting/3/i": {
    id: "routes/adr-reporting/3/i",
    parentId: "root",
    path: "adr-reporting/3/i",
    index: void 0,
    caseSensitive: void 0,
    module: i_exports
  },
  "routes/adr-reporting/3/j": {
    id: "routes/adr-reporting/3/j",
    parentId: "root",
    path: "adr-reporting/3/j",
    index: void 0,
    caseSensitive: void 0,
    module: j_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb290LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9yb290L2luZGV4LnRzeCIsICIuLi9hcHAvc3RhdGVzL3N0b3JlLnRzIiwgIi4uL2FwcC9zdGF0ZXMvU2xpY2VzL0FkclJlcG9ydGluZ0Zvcm0vMS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24xLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24yLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24zLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXIvTGlzdEl0ZW1zLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9TaWRlYmFyVGVtcGxhdGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWwvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbC9Gb3JtTWFwLnRzIiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9pbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLnRzeCIsICIuLi9hcHAvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjIudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw1XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw2XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw3XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw4XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw5XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDRcXGMudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcNFxcZC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcZlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwyXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwyLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwzLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw0LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw1LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxjLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxlLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxnLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxoLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxpLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxqLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxsb2dpblxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwzXFxcXHN1YmZvcm1zXFxcXG9wdGlvbjEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxzdWJmb3Jtc1xcXFxvcHRpb24yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDNcXFxcc3ViZm9ybXNcXFxcb3B0aW9uMy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDVcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcN1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOVxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNFxcXFxiLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDRcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDFcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwyXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcMi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFwzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxmXFxcXDQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcNS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcai50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvN1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzhcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzFcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8yXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi80XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi81XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2lcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2pcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMzRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBPdXRsZXQsIE1ldGEsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gXCJ+L2xheW91dHMvcm9vdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IERvY3VtZW50UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG4vL2ltcG9ydGluZyBzdHlsZXNoZWV0XHJcbmltcG9ydCB0YWlsd2luZFN0eWxlIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XHJcbmltcG9ydCBnbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgYW50U3R5bGVzIGZyb20gXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQURSIFBvcnRhbCB8IEtNQ1wiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhbnRTdHlsZXMgfSxcclxuICBdO1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICh7IGNoaWxkcmVuIH06IERvY3VtZW50UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxSb290TGF5b3V0PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Sb290TGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHJlZHV4LXRvb2xraXRcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0aGUgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL25hdmJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgUm9vdExheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIG1pbi1oLXNjcmVlbiBkYXJrOnRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RMYXlvdXQ7XHJcbiIsICJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG4vL2ltcG9ydGluZyBzbGljZXMgaGVyZVxyXG5pbXBvcnQgZm9ybTFwYWdlMVJlZHVjZXIgZnJvbSAnfi9zdGF0ZXMvU2xpY2VzL0FkclJlcG9ydGluZ0Zvcm0vMSdcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBmb3JtMXBhZ2UxOiBmb3JtMXBhZ2UxUmVkdWNlclxyXG4gICAgfSxcclxufSlcclxuXHJcbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbi8vIEluZmVycmVkIHR5cGU6IHtwb3N0czogUG9zdHNTdGF0ZSwgY29tbWVudHM6IENvbW1lbnRzU3RhdGUsIHVzZXJzOiBVc2Vyc1N0YXRlfVxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaCIsICJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XHJcbiAgICBmb3Jtczoge1xyXG4gICAgICAgIHBhdGllbnRJbml0aWFscz86IHN0cmluZztcclxuICAgICAgICBEYXRlT2ZCaXJ0aD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgYWdlT2ZPbnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgICAgICBnZW5kZXI/OiBcIk1hbGVcIiB8IFwiRmVtYWxlXCIgfCBcIk90aGVyXCIgfCBudWxsO1xyXG4gICAgICAgIHdlaWdodD86IG51bWJlciB8IG51bGw7XHJcbiAgICAgICAgcGF0aWVudElEPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICBpcF9vcD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgdW5pdD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgcmVhc29uRm9yVGFraW5nTWVkaWNhdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgbWVkaWNpbmVBZHZpc2VkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICBrbm93bkFsbGVyZ2llcz86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgc29jaWFsSGlzdG9yeT86IHN0cmluZyB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uVHlwZSB7XHJcbiAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZVR5cGVzO1xyXG4gICAgdmFsdWU6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZW51bSBmaWVsZE5hbWVUeXBlcyB7XHJcbiAgICBwYXRpZW50SW5pdGlhbHMgPSBcInBhdGllbnRJbml0aWFsc1wiLFxyXG4gICAgRGF0ZU9mQmlydGggPSBcIkRhdGVPZkJpcnRoXCIsXHJcbiAgICBhZ2VPZk9uc2V0ID0gXCJhZ2VPZk9uc2V0XCIsXHJcbiAgICBnZW5kZXIgPSBcImdlbmRlclwiLFxyXG4gICAgd2VpZ2h0ID0gXCJ3ZWlnaHRcIixcclxuICAgIHBhdGllbnRJRCA9IFwicGF0aWVudElEXCIsXHJcbiAgICBpcF9vcCA9IFwiaXBfb3BcIixcclxuICAgIHVuaXQgPSBcInVuaXRcIixcclxuICAgIHJlYXNvbkZvclRha2luZ01lZGljYXRpb24gPSBcInJlYXNvbkZvclRha2luZ01lZGljYXRpb25cIixcclxuICAgIG1lZGljaW5lQWR2aXNlZCA9IFwibWVkaWNpbmVBZHZpc2VkXCIsXHJcbiAgICBrbm93bkFsbGVyZ2llcyA9IFwia25vd25BbGxlcmdpZXNcIixcclxuICAgIHNvY2lhbEhpc3RvcnkgPSBcInNvY2lhbEhpc3RvcnlcIlxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgICAgcGF0aWVudEluaXRpYWxzOiBcIlwiLFxyXG4gICAgICAgIERhdGVPZkJpcnRoOiBudWxsLFxyXG4gICAgICAgIGFnZU9mT25zZXQ6IG51bGwsXHJcbiAgICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgICBwYXRpZW50SUQ6IG51bGwsXHJcbiAgICAgICAgaXBfb3A6IG51bGwsXHJcbiAgICAgICAgdW5pdDogbnVsbCxcclxuICAgICAgICByZWFzb25Gb3JUYWtpbmdNZWRpY2F0aW9uOiBudWxsLFxyXG4gICAgICAgIG1lZGljaW5lQWR2aXNlZDogbnVsbCxcclxuICAgICAgICBrbm93bkFsbGVyZ2llczogbnVsbCxcclxuICAgICAgICBzb2NpYWxIaXN0b3J5OiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtMXBhZ2UxU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnZm9ybTFwYWdlMScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGZldGNoSW5jb21wbGV0ZUZvcm1Vc2VyUHJvZmlsZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBsb2dpYyB0byBmZXRjaCBpbmNvbXBsZXRlL2NvbXBsZXRlIGZvcm0gZGF0YSBmcm9tIGJhY2tlbmQgQVBJXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRGb3JtRGF0YVRvVGhlQmFja2VuZDogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBsb2dpYyB0byBzdWJtaXQgZm9ybSBkYXRhIHRvIHRoZSBiYWNrZW5kIEFQSVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV3Rm9ybURhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFjdGlvblR5cGU+KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2ljIHRvIHNldCB0aGUgbmV3IGZvcm0gZGF0YSBpbiB0aGlzIHJlZHVjZXIgYW5kIGV2ZW50dWFsbHkgaW4gdGhlIGJhY2tlbmQgQVBJIHVzaW5nIHRoZSBhYm92ZSBmdW5jdGlvblxyXG4gICAgICAgICAgICBzdGF0ZS5mb3Jtc1tgJHthY3Rpb24ucGF5bG9hZC5maWVsZE5hbWV9YF0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoSW5jb21wbGV0ZUZvcm1Vc2VyUHJvZmlsZSwgc3VibWl0Rm9ybURhdGFUb1RoZUJhY2tlbmQsIHNldE5ld0Zvcm1EYXRhIH0gPSBmb3JtMXBhZ2UxU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTFwYWdlMVNsaWNlLnJlZHVjZXIiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTQgcC0xIHNoYWRvdy14bCBmb250LW1lZGl1bSBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiL0FEUi1sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInAtMVwiIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteS1hdXRvIHBsLTggdGV4dC1wdXJwbGUtODAwXCI+SG9tZTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5NZWRpY2FsIERldmljZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJUeXBlIG9mIGRldmljZVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbXBsYW50YWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJldXNhYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2luZ2xlIFVzZSBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2FibGUgZGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNlIG9mIG1hbnVmYWN0dXJlZCBtYXJrZWQgc2luZ2xlIHVzZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD5QZXJzb25hbCB1c2UvaG9tZWNhcmUgdXNlIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24xO1xyXG4iLCAiaW1wb3J0IHsgSW5wdXREZXNjcmlwdGlvblByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuaW1wb3J0IEluZm9JY29uIGZyb20gXCIuL0luZm9JY29uLnN2Z1wiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmNvbnN0IElucHV0RGVzY3JpcHRpb24gPSAocHJvcHM6IElucHV0RGVzY3JpcHRpb25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBiLTFcIj5cclxuICAgICAge3Byb3BzLmlzUmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHItMSB0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPn1cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItWzBweF0gcHItMSB0ZXh0LVsxNnB4XVwiPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxGaUhlbHBDaXJjbGUgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dERlc2NyaXB0aW9uO1xyXG4iLCAiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXktMiBteC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PktpdHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNvbnRyb2wgTWF0ZXJpYWxzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVhZ2VudHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PklWRCBFbGVjdHJvbmljIFJlYWRlci9BbmFseXplcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q2FsaWJyYXRvcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5PdGhlcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjI7XHJcbiIsICJpbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgb3B0aW9uMyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bCBwLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVxdWlwbWVudCB1c2FnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbnZhc2liaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBJbWFnaW5nIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gT3RoZXJzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgQ29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcHRpb24zO1xyXG4iLCAiLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3gsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTEoKSB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1wiSW5pdGlhbFwiLCBcIkZvbGxvdy11cFwiLCBcIkZpbmFsXCIsIFwiVHJlbmRcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5QcmltYXJ5IEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUmVwb3J0ZXIgUmVmZXJlbmNlIE51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlR5cGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjFcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTUgcHgtMTYgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHAtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIHB0LTggcGItNCB0ZXh0LVszNXB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBBRFIgUmVwb3J0aW5nIEZvcm1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tIFwiLi9MaXN0SXRlbXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyBkYXRhXHJcbmltcG9ydCB7IEFkclJlcG9ydGluZywgTWVkaWNhbERldmljZVJlcG9ydGluZyB9IGZyb20gXCIuL1NpZGViYXJUZW1wbGF0ZXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb3BzIH0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICAvLyBIb2xkcyB0aGUgY3VycmVudCBmb3JtIHNpZGViYXIgZGF0YVxyXG4gIGNvbnN0IFtTaWRlYmFyRGF0YSwgc2V0U2lkZWJhckRhdGFdID0gdXNlU3RhdGU8VGVtcGxhdGVQcm9wc1tdPihcclxuICAgIEFkclJlcG9ydGluZy50ZW1wbGF0ZVxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIC8vc2V0IG5leHQsIHByZXZpb3VzIGFuZCBjdXJyZW50IHBhZ2Ugb24gZXZlcnkgcGFnZSBsb2FkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gY3VycmVudExvY2F0aW9uWzFdO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjdXJyZW50TG9jYXRpb25bMl07XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVN1YiA9XHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5sZW5ndGggPj0gNCA/IGN1cnJlbnRMb2NhdGlvblszXSA6IFwiXCI7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVN1YlN1YiA9XHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5sZW5ndGggPj0gNSA/IGN1cnJlbnRMb2NhdGlvbls0XSA6IFwiXCI7XHJcbiAgICBpZiAoY3VycmVudEZvcm0gPT09IFwiYWRyLXJlcG9ydGluZ1wiKSB7XHJcbiAgICAgIHNldFNpZGViYXJEYXRhKEFkclJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEZvcm0gPT09IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCIpIHtcclxuICAgICAgc2V0U2lkZWJhckRhdGEoTWVkaWNhbERldmljZVJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3RpdmVUYWIoY3VycmVudFBhZ2UgKyBjdXJyZW50UGFnZVN1YiArIGN1cnJlbnRQYWdlU3ViU3ViKTtcclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgcGItNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIEluZGlhbiBOYXRpb25hbCBFbWJsZW1cIlxyXG4gICAgICAgICAgICBzcmM9XCIvZW1ibGVtLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIGRhcms6dGV4dC1bI2EyNjJjZl0gdGV4dC14bCBtLTAgbWItM1wiPlxyXG4gICAgICAgICAgICBNQU5JUEFMIENPTExFR0UgT0YgUEhBUk1BQ1lcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBib3JkZXItdC0yIGJvcmRlci1bIzZDNTY3Ql0gcHQtMiBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICBNYW5pcGFsIEFjYWRlbXkgb2YgSGlnZXIgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAoSW5zdGl0dXRpb24gb2YgRW1pbmVuY2UgRGVlbWVkIHRvIGJlIFVuaXZlcnNpdHkpXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCBwLTUgcm91bmRlZC1sZyB0ZXh0LVsjNkM1NjdCXSBkYXJrOnRleHQtWyNhMjYyY2ZdIGJvcmRlclwiPlxyXG4gICAgICAgIHtTaWRlYmFyRGF0YS5tYXAoKGl0ZW06IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbXNcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgICAgICBwYWdlTGluaz17aXRlbS5wYWdlTGlua31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsICIvLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGaUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEdvUHJpbWl0aXZlRG90IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQge1xyXG4gIExpc3RJdGVtc1Byb3BzLFxyXG4gIFRlbXBsYXRlUHJvcHMsXHJcbiAgU2lkZWJhck51bWJlcmluZ0J1bGxldHMsXHJcbn0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtcyA9IChwcm9wczogTGlzdEl0ZW1zUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXJOdW1iZXJpbmdCdWxsZXRcclxuICAgICAgICAgICAgaXNDdXJyZW50UGFnZT17cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMF0gPT09IHByb3BzLnBhZ2VMaW5rfVxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZD17cHJvcHMuaXNDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIGJ1bGxldE51bWJlcj17cHJvcHMubnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgdGV4dC1iYXNlXCI+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04XCI+XHJcbiAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzBdID09PSBwcm9wcy5wYWdlTGluayAmJlxyXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVUYWIgPVxyXG4gICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdID09PSBwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmxleCBmbGV4LXJvdyBwYi0xIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBwYi0xIHRleHQtWyM3RTdFN0VdXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwdC0xIHByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LW1kXCI+e2NoaWxkLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChzdWJDaGlsZDogVGVtcGxhdGVQcm9wcywgc3ViSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVN1YlRhYiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMl0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlU3ViVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInB5LTEgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHktMSB0ZXh0LVsjN0U3RTdFXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNoaWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0ID0gKHByb3BzOiBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0cykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0NvbXBsZXRlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItWyM2QzU2N0JdIGJnLVsjNkM1NjdCXSBkYXJrOmJnLVsjYTI2MmNmXSBkYXJrOmJvcmRlci1bI2EyNjJjZl0gcm91bmRlZC1mdWxsIGgtNyB3LTcgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8RmlDaGVjayBjbGFzc05hbWU9XCJteC1hdXRvIG15LWF1dG8gZm9udC1leHRyYWJvbGRcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocHJvcHMuaXNDdXJyZW50UGFnZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGJvcmRlci0yIGJvcmRlci1bIzZDNTY3Ql0gZGFyazpib3JkZXItWyNhMjYyY2ZdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSBkYXJrOnRleHQtWyNhMjYyY2ZdXCI+XHJcbiAgICAgICAgICB7cHJvcHMuYnVsbGV0TnVtYmVyICsgMX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItWyM3RTdFN0VdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjN0U3RTdFXVwiPlxyXG4gICAgICAgICAge3Byb3BzLmJ1bGxldE51bWJlciArIDF9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtcztcclxuIiwgIi8vaW1wb3J0aW5mIHR5cGVzXHJcbmltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBBZHJSZXBvcnRpbmc6IFNpZGViYXJQcm9wcyA9IHtcclxuICBiYXNlVXJsOiBcIi9hZHItcmVwb3J0aW5nXCIsXHJcbiAgdGVtcGxhdGU6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjFcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIEFkdmVyc2UgUmVhY3Rpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiMlwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIE1lZGljYXRpb24ocylcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJNZWRpY2F0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFjdGlvbiBUYWtlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2JcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGVjaGFsbGVuZ2VcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNjXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlJlY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJSZWFjdGlvbiByZWFwcGVhcmVkIGFmdGVyIHJlaW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZVwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXVzYWxpdHkgQXNzZXNzbWVudFwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2ZcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk5hcmFuam8ncyBzY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiV0hPIHByb2JhYmlsaXR5IHNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2YyXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiSGFydHdpZydzIFNldmVyaXR5IEFzc2Vzc21lbnQgU2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjNcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjRcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJQcmVkaWN0YWJpbGl0eSAmIFByZWRpc3Bvc2luZyBmYWN0b3JzXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2Y1XCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRyZWF0bWVudCBnaXZlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2dcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29uY29taXRhbnQgbWVkaWNhbCBwcm9kdWN0XCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzaFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBTUMvTkNDIFNlY3Rpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNpXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk91dGNvbWVcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNqXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVwb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI0XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgTWVkaWNhbERldmljZVJlcG9ydGluZzogU2lkZWJhclByb3BzID0ge1xyXG4gIGJhc2VVcmw6IFwiL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiLFxyXG4gIHRlbXBsYXRlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJpbWFyeSBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIxXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIyXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEZXZpY2UgQ2F0ZWdvcnlcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRGV2aWNlIERlc2NyaXB0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWFudWZhY3R1cmVyIERldGFpbHNcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSW1wb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGJcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGlzdHJpYnV0b3IgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGNcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRnVydGhlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFdmVudCBEZXNjcmlwdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCI1XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjZcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhlYWx0aGNhcmUgRmFjaWxpdHkgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI3XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYXN1YWx0eSBBc3Nlc3NtZW50XCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjhcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlByb2R1Y3QgT3duZXIncyBJbnZlc3RpZ2F0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjlcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBBZHJSZXBvcnRpbmcsIE1lZGljYWxEZXZpY2VSZXBvcnRpbmcgfTtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBtYXBzXHJcbmltcG9ydCB7XHJcbiAgQURScmVwb3J0aW5nX3BvcnRhbE1hcCxcclxuICBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCxcclxufSBmcm9tIFwiLi9Gb3JtTWFwXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTmF2aWdhdGlvblBhbmVsUHJvcHMgfSBmcm9tIFwifi90eXBlcy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvblBhbmVsID0gKHByb3BzOiBOYXZpZ2F0aW9uUGFuZWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBbbmV4dFBhZ2UsIHNldE5leHRQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3ByZXZpb3VzUGFnZSwgc2V0UHJldmlvdXNQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2lzTGFzdFBhZ2UsIHNldElzTGFzdFBhZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ZpcnN0UGFnZSwgc2V0SXNGaXJzdFBhZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBjb25zdCBwYWdlVHlwZSA9XHJcbiAgICBjdXJyZW50TG9jYXRpb25bMV0gPT09IFwiYWRyLXJlcG9ydGluZ1wiXHJcbiAgICAgID8geyBsaW5rOiBcIi9hZHItcmVwb3J0aW5nL1wiLCBtYXBSb3V0ZTogQURScmVwb3J0aW5nX3BvcnRhbE1hcCB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgbGluazogXCIvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nL1wiLFxyXG4gICAgICAgICAgbWFwUm91dGU6IE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gICAgICAgIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBkZWZhdWx0IHNldHRpbmdzIG9uIGV2ZXJ5IHBhZ2UgcmVuZGVyXHJcbiAgICBzZXRJc0ZpcnN0UGFnZShmYWxzZSk7XHJcbiAgICBzZXRJc0xhc3RQYWdlKGZhbHNlKTtcclxuXHJcbiAgICBmb3IgKGxldCByb3V0ZSA9IDA7IHJvdXRlIDwgcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoOyByb3V0ZSsrKSB7XHJcbiAgICAgIGlmIChwcm9wcy5jdXJyZW50Um91dGUgPT09IHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlXSkge1xyXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0SXNGaXJzdFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlICsgMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXCIvXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUgPT09IHBhZ2VUeXBlLm1hcFJvdXRlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHNldElzTGFzdFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShwYWdlVHlwZSArIFwic3VibWl0XCIpO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXNQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgLSAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlIDwgcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoIC0gMSAmJiByb3V0ZSAhPSAwKSB7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlICsgMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXHJcbiAgICAgICAgICAgIHBhZ2VUeXBlLmxpbmsgKyBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZSAtIDFdLnNwbGl0KFwiXCIpLmpvaW4oXCIvXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgdy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPExpbmsgdG89e3ByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyNFODU5MENdIGhvdmVyOnNoYWRvdy14bCBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNGaXJzdFBhZ2UgPyBcIkhvbWVcIiA6IFwiUHJldmlvdXNcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayB0bz17bmV4dFBhZ2V9PlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0U4NTkwQ10gdGV4dC13aGl0ZSBob3ZlcjpzaGFkb3cteGwgcC0yIHctMzJcIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzTGFzdFBhZ2UgPyBcIlN1Ym1pdFwiIDogXCJOZXh0XCJ9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lbDtcclxuIiwgImNvbnN0IEFEUnJlcG9ydGluZ19wb3J0YWxNYXAgPSBbXHJcbiAgXCIxXCIsXHJcbiAgXCIyXCIsXHJcbiAgXCIzXCIsXHJcbiAgXCIzYlwiLFxyXG4gIFwiM2NcIixcclxuICBcIjNkXCIsXHJcbiAgXCIzZVwiLFxyXG4gIFwiM2ZcIixcclxuICBcIjNmMlwiLFxyXG4gIFwiM2YzXCIsXHJcbiAgXCIzZjRcIixcclxuICBcIjNmNVwiLFxyXG4gIFwiM2dcIixcclxuICBcIjNoXCIsXHJcbiAgXCIzaVwiLFxyXG4gIFwiM2pcIixcclxuICBcIjRcIixcclxuXTtcclxuXHJcbmNvbnN0IE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwID0gW1xyXG4gIFwiMVwiLFxyXG4gIFwiMlwiLFxyXG4gIFwiM1wiLFxyXG4gIFwiNFwiLFxyXG4gIFwiNGJcIixcclxuICBcIjRjXCIsXHJcbiAgXCI0ZFwiLFxyXG4gIFwiNVwiLFxyXG4gIFwiNlwiLFxyXG4gIFwiN1wiLFxyXG4gIFwiOFwiLFxyXG4gIFwiOVwiXHJcbl07XHJcblxyXG5leHBvcnQgeyBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwLCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCB9O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTEoKSB7XHJcbiAgY29uc3QgW3JlcG9ydGVyVHlwZSwgc2V0UmVwb3J0ZXJUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJtYW51ZmFjdHVyZXJcIik7XHJcbiAgY29uc3QgY2hhbmdlZFJlcG9ydGVyVHlwZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFJlcG9ydGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlJlcG9ydGVyIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlR5cGUgb2YgUmVwb3J0ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZWRSZXBvcnRlclR5cGUoZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXJcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJpbXBvcnRlclwifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBJbXBvcnRlclxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImRpc3RyaWJ1dG9yXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGlzdHJpYnV0b3JcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJwYXRpZW50c1wifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBQYXRpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImhlYWx0aGNhcmVwcm9mZXNzaW9uYWxzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgSGVhbHRoY2FyZSBQcm9mZXNzaW9uYWxcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSWYgT3RoZXJzXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhhcyB0aGUgcmVwb3J0ZXIgaW5mb3JtZWQgdGhlIGluY2lkZW50IHRvIHRoZSBtYW51ZmFjdHVyZXI/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlcG9ydGVyVHlwZSA9PT0gXCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgRG9udCBLbm93XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIHJlcG9ydGVyIGFsc28gc3VibWl0dGluZyB0aGUgcmVwb3J0IG9uIGJlaGFsZiBvZiB0aGUgbWFudWZhY3R1cmVyP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZXBvcnRlclR5cGUgPT09IFwibWFudWZhY3R1cmVyXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIERvbnQgS25vd1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJFbWFpbCBJRFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtOCB0ZXh0LVszNXB4XSB0ZXh0LVsjNkM1NjdCXVwiPlxyXG4gICAgICAgIE1lZGljYWwgRGV2aWNlIEFEUiBSZXBvcnRpbmdcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTUgcHgtMTYgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgcC0yXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgT3B0aW9uMSBmcm9tIFwiLi9zdWJmb3Jtcy9vcHRpb24xXCI7XHJcbmltcG9ydCBPcHRpb24yIGZyb20gXCIuL3N1YmZvcm1zL29wdGlvbjJcIjtcclxuaW1wb3J0IE9wdGlvbjMgZnJvbSBcIi4vc3ViZm9ybXMvb3B0aW9uM1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTkoKSB7XHJcbiAgY29uc3QgW29wdDEsIHNldE9wdDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcHQyLCBzZXRPcHQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0Mywgc2V0T3B0M10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RGV2aWNlIENhdGVnb3J5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTWVkaWNhbCBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0Myh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7b3B0MSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb24xXCI+XHJcbiAgICAgICAgICA8T3B0aW9uMSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge29wdDIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uMlwiPlxyXG4gICAgICAgICAgPE9wdGlvbjIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtvcHQzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbjNcIj5cclxuICAgICAgICAgIDxPcHRpb24zIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+TWVkaWNhbCBEZXZpY2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiVHlwZSBvZiBkZXZpY2VcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW1wbGFudGFiaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSZXVzYWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpbmdsZSBVc2UgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNhYmxlIGRldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzZSBvZiBtYW51ZmFjdHVyZWQgbWFya2VkIHNpbmdsZSB1c2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+UGVyc29uYWwgdXNlL2hvbWVjYXJlIHVzZSA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMTtcclxuIiwgImltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG15LTIgbXgtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5LaXRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Db250cm9sIE1hdGVyaWFscyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PlJlYWdlbnRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5JVkQgRWxlY3Ryb25pYyBSZWFkZXIvQW5hbHl6ZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNhbGlicmF0b3JzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+T3RoZXJzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24yO1xyXG4iLCAiaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IG9wdGlvbjMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGwgcC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFcXVpcG1lbnQgdXNhZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW52YXNpYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gSW1hZ2luZyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IE90aGVycyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvcnRlcidzIENvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3B0aW9uMztcclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5NYW51ZmFjdHVyZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXszfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBJbnB1dCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTUoKSB7XHJcbiAgY29uc3QgW2lzU2VyaW91c0V2ZW50LCBzZXRJc1NlcmlvdXNFdmVudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGVhZCwgc2V0SXNEZWFkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcclxuICAgIFwiSG9zcGl0YWwgUHJlbWlzZVwiLFxyXG4gICAgXCJNYW51ZmFjdHVyZXIgUHJlbWlzZVwiLFxyXG4gICAgXCJIb21lXCIsXHJcbiAgICBcIk90aGVyc1wiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMiA9IFtcclxuICAgIFwiSGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxcIixcclxuICAgIFwiUGF0aWVudFwiLFxyXG4gICAgXCJQcm9ibGVtIG5vdGVkIGJlZm9yZSB1c2VcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1xyXG4gICAgXCJSZXR1cm5lZCB0byB0aGUgY29tcGFueVwiLFxyXG4gICAgXCJJbXBsYW50ZWQgaW4gcGF0aWVudFwiLFxyXG4gICAgXCJXaXRoaW4gdGhlIGZhY2lsaXR5XCIsXHJcbiAgICBcIkF0IHBhdGllbnQgaG9tZVwiLFxyXG4gICAgXCJEZXN0cm95ZWRcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnM0ID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNSA9IFtcclxuICAgIFwiRGVhdGhcIixcclxuICAgIFwiTGlmZSBUaHJlYXRlbmluZ1wiLFxyXG4gICAgXCJEaXNhYmlsaXR5XCIsXHJcbiAgICBcIkhvc3BpdGFsaXphdGlvblwiLFxyXG4gICAgXCJDb25nZW5pdGFsIEFub21hbHlcIixcclxuICAgIFwiQW55IG1lZGljYWwgZXZlbnRcIixcclxuICAgIFwiUGVybWFuZW50IEltcGFpcm1lbnRcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRTdGF0ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc1NlcmlvdXNFdmVudCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzU2VyaW91c0V2ZW50KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRWYWx1ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJEZWF0aFwiKSB7XHJcbiAgICAgIHNldElzRGVhZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRGVhZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RXZlbnQgRGVzY3JpcHRpb248L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIEV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIEltcGxhbnRcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkxvY2F0aW9uIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXZpY2UgT3BlcmF0b3JcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMyfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRldmljZSBsb2NhdGlvblwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiByZXR1cm5cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlNlcmlvdXMgZXZlbnQ/XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVNlcmlvdXNFdmVudFN0YXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJSZWFzb25cIn0gaXNSZXF1aXJlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM1fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzU2VyaW91c0V2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVNlcmlvdXNFdmVudFZhbHVlKGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBkZWF0aFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkaXNhYmxlZD17IWlzRGVhZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIklzIGRldmljZSBpbiB1c2UgYWZ0ZXIgdGhlIGluY2lkZW50P1wifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIGluY2lkZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIycHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgICBGcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzaW1pbGFyIGFkdmVyc2UgZXZlbnRzIGluIEluZGlhXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJZZWFyXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBwaWNrZXI9XCJ5ZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJOdW1iZXIgb2Ygc2ltaWxhciBldmVudHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlRvdGFsIG51bWJlciBzdXBsaWVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJGcmVxdWVuY3lcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgICAgRnJlcXVlbmN5IG9mIG9jY3VycmVuY2Ugb2Ygc2ltaWxhciBhZHZlcnNlIGV2ZW50cyBnbG9iYWxseVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiWWVhclwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgcGlja2VyPVwieWVhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiTnVtYmVyIG9mIHNpbWlsYXIgZXZlbnRzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUb3RhbCBudW1iZXIgc3VwbGllZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRnJlcXVlbmN5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjVcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCwgUmFkaW8sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U2KCkge1xyXG4gIGNvbnN0IFtpc1JlY292ZXJlZCwgc2V0SXNSZWNvdmVyZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2lzRGVhZCwgc2V0SXNEZWFkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRGVhdGhEYXRhID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XHJcbiAgICAgIHNldElzRGVhZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRGVhZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUmVjb3ZlcnlEYXRhID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XHJcbiAgICAgIHNldElzUmVjb3ZlcmVkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNSZWNvdmVyZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczEgPSBbXCJNYWxlXCIsIFwiRmVtYWxlXCIsIFwiT3RoZXJzXCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczIgPSBbXCJZZXNcIiwgXCJOb1wiXTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5QYXRpZW50IEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUGF0aWVudCBIb3NwaXRhbCBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUGF0aWVudCBJbml0aWFsc1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWdlXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiV2VpZ2h0XCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIlNleFwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk90aGVyIHJlbGV2YW50IGhpc3RvcnksIGluY2x1ZGluZyBwcmUtZXhpc3RpbmcgbWVkaWNhbCBjb25kaXRpb25zXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkhhcyB0aGUgcGF0aWVudCByZWNvdmVyZWQ/XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlY292ZXJ5RGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlY292ZXJ5XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXtpc1JlY292ZXJlZCA9PT0gZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIklzIHRoZSBwYXRpZW50IGRlYWQ/XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZURlYXRoRGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIGRlYXRoXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXtpc0RlYWQgPT09IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJPdGhlciBwYXRpZW50IG91dGNvbWVzXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjZcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U3KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBIZWFsdGhjYXJlIEZhY2lsaXR5IERldGFpbHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJOYW1lXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWRkcmVzc1wifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiQ29udGFjdCBOdW1iZXIgb2YgUGVyc29uIGF0IHRoZSBzaXRlIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlRlbGVwaG9uZSBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiN1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkNhc3VhbHR5IEFzc2Vzc21lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkludmVzdGlnYXRpb24gYWN0aW9uIHRha2VuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJvb3QgY2F1c2Ugb2YgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjhcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlOSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUHJvZHVjdCBPd25lcidzIEludmVzdGlnYXRpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUHJvZHVjdCBPd25lcnMgZGV2aWNlIHJpc2sgYW5hbHlzaXMgcmVwb3J0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvcnJlY3RpdmUgLyBwcmV2ZW50aXZlIGFjdGlvbiB0YWtlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXZpY2UgaGlzdG9yeSByZXZpZXdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI5XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0YigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkltcG9ydGVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRiXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0YygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkRpc3RyaWJ1dG9yIGRldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRjXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGQoKSB7XHJcbiAgY29uc3QgW3JlZ3VsYXRlZEluSW5kaWEsIHNldFJlZ3VsYXRlZEluSW5kaWFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbYXZhaWxhYmlsaXR5VmFsdWUsIHNldEF2YWlsYWJpbGl0eVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3VzYWdlUGVyTWFudWZhY3R1cmVyLCBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTdGF0ZU9mUmFkaW8gPSAocmFkaW9JZGVudGlmaWVyOiBzdHJpbmcsIHJhZGlvVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHJhZGlvSWRlbnRpZmllciA9PT0gXCIxXCIpIHtcclxuICAgICAgc2V0UmVndWxhdGVkSW5JbmRpYShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjJcIikge1xyXG4gICAgICBzZXRBdmFpbGFiaWxpdHlWYWx1ZShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjNcIikge1xyXG4gICAgICBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcihyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcIlllc1wiLCBcIk5vXCIsIFwiRG9uJ3Qga25vd1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNCA9IFtcclxuICAgIFwiRGVzdHJveWVkXCIsXHJcbiAgICBcIlN0aWxsIGluIHVzZVwiLFxyXG4gICAgXCJSZXR1cm5lZCB0byBtYW51ZmFjdHVyZXIgb3IgaW1wb3J0ZXJcIixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkZ1cnRoZXIgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIGRldmljZSBub3RpZmllZC9yZWd1bGF0ZWQgaW4gSW5kaWE/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWd1bGF0ZWRJbkluZGlhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMVwiLCBlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRldmljZSBSaXNrIENsYXNzaWZpY2F0aW9uIGFzIHBlciBJbmRpYSBNRFIgMjAxN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhdGFsb2d1ZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk1vZGVsIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkJhdGNoIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VyaWFsIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTb2Z0d2FyZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWNjZXNzb3JpZXMvQXNzb2NpYXRlZCBEZXZpY2VzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkdNRE4gQ29kZSAmYW1wOyBHTUROIFRlcm1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlVESSBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkluc3RhbGxhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXhwaXJhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGFzdCBDYWxpYnJhdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWdlIG9mIGRldmljZSBmcm9tIGRhdGUgb2YgbWFudWZhY3R1cmluZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIb3cgbG9uZyB3YXMgZGV2aWNlIGluIHVzZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBdmFpbGFiaWxpdHkgb2YgZGV2aWNlIGZvciBldmFsdWF0aW9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zM31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zM1swXX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F2YWlsYWJpbGl0eVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VTdGF0ZU9mUmFkaW8oXCIyXCIsIGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2hhdCBpcyB0aGUgc3RhdHVzIG9mIHRoZSBkZXZpY2U/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2F2YWlsYWJpbGl0eVZhbHVlID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJcyB0aGUgdXNhZ2Ugb2YgZGV2aWNlIGFzIHBlciBtYW51ZmFjdHVyZXJcdTIwMTlzIGNsYWltcy9pbnN0cnVjdGlvbnMgZm9yIHVzZS91c2VyIG1hbnVhbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2FnZVBlck1hbnVmYWN0dXJlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiM1wiLCBlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgdXNhZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzYWdlUGVyTWFudWZhY3R1cmVyID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWd1bGF0b3IgLyBSZWd1bGF0b3J5IHN0YXR1cyBpbiBjb3VudHJ5IG9mIG9yaWdpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVndWxhdGVkSW5JbmRpYSA9PT0gXCJZZXNcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0ZFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgRm9ybSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2YxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2ZcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgTmFyYW5qb1x1MjAxOXMgU2NhbGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFyZSB0aGVyZSBwcmV2aW91cyBjb25jbHVzaW9uIHJlcG9ydHMgb24gdGhpcyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFyZSB0aGVyZSBwcmV2aW91cyBjb25jbHVzaW9uIHJlcG9ydHMgb24gdGhpcyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgYWR2ZXJzZSBldmVudCBhcHBlYXIgYWZ0ZXIgdGhlIHN1c3BlY3QgZHJ1ZyB3YXMgYWRtaW5pc3RlcmVkP1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlkIHRoZSBBUiBpbXByb3ZlIHdoZW4gdGhlIGRydWcgd2FzIGRpc2NvbnRpbnVlZCBvciBhIHNwZWNpZmljIGFudGFnb25pc3Qgd2FzIGFkbWluaXN0ZXJlZD9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgQVIgcmVhcHBlYXIgd2hlbiBkcnVnIHdhcyByZS1hZG1pbmlzdGVyZWQ/XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgdGhlcmUgYWx0ZXJuYXRlIGNhdXNlcyBbb3RoZXIgdGhhbiB0aGUgZHJ1Z10gdGhhdCBjb3VsZCBzb2xlbHkgaGF2ZSBjYXVzZWQgdGhlIHJlYWN0aW9uP1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlkIHRoZSByZWFjdGlvbiByZWFwcGVhciB3aGVuIGEgcGxhY2VibyB3YXMgZ2l2ZW4/XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGRydWcgZGV0ZWN0ZWQgaW4gdGhlIGJsb29kIFtvciBvdGhlciBmbHVpZHNdIGluIGEgY29uY2VudHJhdGlvbiBrbm93biB0byBiZSB0b3hpYz9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgcmVhY3Rpb24gbW9yZSBzZXZlcmUgd2hlbiB0aGUgZG9zZSB3YXMgaW5jcmVhc2VkIG9yIGxlc3Mgc2V2ZXJlIHdoZW4gdGhlIGRvc2Ugd2FzIGRlY3JlYXNlZD9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgcGF0aWVudCBoYXZlIGEgc2ltaWxhciByZWFjdGlvbiB0byB0aGUgc2FtZSBvciBzaW1pbGFyIGRydWdzIGluIGFueSBwcmV2aW91cyBleHBvc3VyZT9cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgYWR2ZXJzZSBldmVudCBjb25maXJtZWQgYnkgb2JqZWN0aXZlIGV2aWRlbmNlP1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgey8qIGNhbGN1bGF0ZWQgc2NvcmUgZm9yIHRoZSBBRFIgaXMgZGlzcGxheWVkIGhlcmUgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC14LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtWyM2QzU2N0JdIHAtMCBtLTBcIj5Qcm9iYWJsZSBBRFI8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsXCI+MDc8L3NwYW4+LzEwXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZvbnQtYm9sZCBtLTAgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5SZXN1bHQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUhlbHBDaXJjbGUgY2xhc3NOYW1lPVwibXQtMSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktYXV0byBmb250LWJvbGRcIj5TY29yZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2ZcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94LCBJbnB1dE51bWJlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydGluZyByZWR1eCByZWR1Y2Vyc1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldE5ld0Zvcm1EYXRhIH0gZnJvbSBcIn4vc3RhdGVzL1NsaWNlcy9BZHJSZXBvcnRpbmdGb3JtLzFcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZm9ybVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmZvcm0xcGFnZTEpO1xyXG4gIGNvbnN0IGNoYW5nZUZvcm1EYXRhID0gKHZhbHVlOiBhbnksIGZpZWxkTmFtZTogYW55KSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXROZXdGb3JtRGF0YSh7IGZpZWxkTmFtZSwgdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIG9wdGlvbnMgZm9yIGZvcm0gaXRlbXNcclxuICBjb25zdCBnZW5kZXJPcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJNYWxlXCIsIHZhbHVlOiBcIm1hbGVcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJGZW1hbGVcIiwgdmFsdWU6IFwiZmVtYWxlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiT3RoZXJcIiwgdmFsdWU6IFwib3RoZXJcIiB9LFxyXG4gIF07XHJcbiAgY29uc3QgYWR2aXNlZE1lZGljaW5lT3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiRG9jdG9yXCIsIHZhbHVlOiBcImRvY3RvclwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlBoYXJtYWNpc3RcIiwgdmFsdWU6IFwicGhhcm1hY2lzdFwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkZyaWVuZHNcIiwgdmFsdWU6IFwiZnJpZW5kc1wiIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlNlbGYgKHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcIixcclxuICAgICAgdmFsdWU6IFwic2VsZihwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJTZWxmIChubyBwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXCIsXHJcbiAgICAgIHZhbHVlOiBcInNlbGYobm8gcGFzdCBkaXNlYXNlIGV4cGVyaWVuY2VkKVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTFcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5QYXRpZW50IEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUGF0aWVudCBJbml0aWFsc1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhdGllbnRJbml0aWFsc1wiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiUGF0aWVudCBpbml0aWFscyBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgb2YgQmlydGhcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIkRhdGVPZkJpcnRoXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdlIG9mIE9uc2V0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VPZk9uc2V0XCJcclxuICAgICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICAgIHsgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiQWdlIG9mIG9uc2V0IGlzIHJlcXVpcmVkXCIgfSxcclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TnVtYmVyIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIkdlbmRlclwiIG5hbWU9XCJnZW5kZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3QgYWxsb3dDbGVhciBvcHRpb25zPXtnZW5kZXJPcHRpb25zfSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwidy1mdWxsXCIgbGFiZWw9XCJXZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXROdW1iZXIgYWRkb25BZnRlcj17XCJtZ3NcIn0gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJwYXRpZW50SURcIiBsYWJlbD1cIlBhdGllbnQgSURcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIklQL09QXCIgbmFtZT1cImlwX29wXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiVW5pdFwiIG5hbWU9XCJ1bml0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvbiBmb3IgdGFraW5nIG1lZGljYXRpb24vdmFjY2luYXRpb25cIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25Gb3JUYWtpbmdNZWRpY2F0aW9uXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJNZWRpY2luZXMvdmFjY2luZXMgYWR2aXNlZCBieVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm1lZGljaW5lQWR2aXNlZFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zLzRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMyBnYXAteC01IGdhcC15LTJcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17YWR2aXNlZE1lZGljaW5lT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZWRpY2luZUFkdmlzZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiS25vd24gQWxsZXJnaWVzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwia25vd25BbGxlcmdpZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb2NpYWwgSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNvY2lhbEhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjFcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gSW1wb3J0IGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEJ1dHRvbiwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTJcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5TdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvbjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgb2YgcmVhY3Rpb24gc3RhcnRlZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVPZlJlYWN0aW9uU3RhcnRlZFwiXHJcbiAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkRhdGUgb2YgcmVhY3Rpb24gc3RhcnRlZFwiIH1dfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBvZiByZWNvdmVyeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImRhdGVPZlJlY292ZXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpYmUgcmVhY3Rpb24gb3IgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJyZWFjdGlvbkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlJlYWN0aW9uIGRlc2NyaXB0aW9uIGlzIG1hbmRhdG9yeVwiIH0sXHJcbiAgICAgICAgICAgIF19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIyXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCwgRm9ybSwgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzKCkge1xyXG4gIGNvbnN0IG9uRm9ybVN1Ym1pdCA9IChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+TWVkaWNhdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICA8U3ViZm9ybSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3ViZm9ybSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbmFtZT1cIkZvcm0xUGFnZTNcIlxyXG4gICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICA+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgIGxhYmVsPVwiTmFtZSAoQnJhbmQvR2VuZXJpYylcIlxyXG4gICAgICAgIG5hbWU9XCJuYW1lT2ZEcnVnXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6IFwiRHJ1ZyBuYW1lIGlzIG1hbmRhdG9yeVwiIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IHJlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwibWFudWZhY3R1cmVyXCIgbGFiZWw9XCJNYW51ZmFjdHVyZXJcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIGxhYmVsPVwiQmF0Y2ggTm8uIC8gTG90IE5vLlwiXHJcbiAgICAgICAgICBuYW1lPVwiQmF0Y2hOb19Mb3ROb1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC01XCI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZXhwRGF0ZVwiIGxhYmVsPVwiRXhwLiBEYXRlXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImRvc2VVc2VkXCIgbGFiZWw9XCJEb3NlIHVzZWRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxJbnB1dCB0eXBlPXtcIm51bWJlclwifSBzdWZmaXg9XCJrZ3NcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInJvdXRlVXNlZFwiIGxhYmVsPVwiUm91dGUgdXNlZFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJpcF9vcFwiIGxhYmVsPVwiSVBfT1BcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInVuaXRcIiBsYWJlbD1cIlVuaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIG5hbWU9XCJmcmVxdWVuY3lcIlxyXG4gICAgICAgIGxhYmVsPVwiRnJlcXVlbmN5IChPRCwgQkQsIGV0Yy4pXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJkYXRlU3RhcnRlZFwiIGxhYmVsPVwiRGF0ZSBzdGFydGVkXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImRhdGVTdG9wcGVkXCIgbGFiZWw9XCJEYXRlIHN0b3BwZWRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJJbmRpY2F0aW9uXCIgbGFiZWw9XCJJbmRpY2F0aW9uXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctMTAwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzZDNTY3Ql0gdGV4dC13aGl0ZSBwLTIgdy0zMiBib3JkZXIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzZDNTY3Ql0gYm9yZGVyLVsjNkM1NjdCXVwiPlxyXG4gICAgICAgICAgU2F2ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bIzZDNTY3Ql0gcC0yIHctMzIgYm9yZGVyIGJvcmRlci1bIzZDNTY3Ql0gaG92ZXI6YmctWyNFODU5MENdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRkIG1vcmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gSW1wb3J0IEFudCBEZXNpZ25cclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvLCBEYXRlUGlja2VyLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG4vL0ltcG9ydCBJbWFnZXNcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2U0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlNFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UmVwb3J0ZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICAgIHsvKiBGaXJzdCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogU2Vjb25kICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSUQgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUGluXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogVGhpcmQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkVtYWlsIElEXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJUZWwuIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEZvdXJ0aCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQcm9mLiBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIEZpZnRoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtWzE2cHhdXCI+T2NjdXBhdGlvbjwvcD5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgbmFtZT1cIm9jY3VwYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17MX0+UGh5c2ljaWFuPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17Mn0+RGVudGlzdDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezN9Pk51cnNlPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17NH0+UGhhcm1hY2lzdDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHB0LTFcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17NX0+T3RoZXJzPC9SYWRpbz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgIHsvKiBTaXh0aCAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXBhcnRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyogU2V2ZW50aCAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdFZhbHVlPXtOdW1iZXIoRGF0ZS5ub3coKSl9IHZhbHVlIGlzIHRvZGF5J3MgZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGF0ZSBvZiB0aGlzIHJlcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBFaWdodGggKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJlZmVyZW5jZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBOaW50aCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgc2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3J0ZXIncyBjb21tZW50c1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0XCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSwgRm9ybSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmMigpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJDZXJ0YWluXCIsIHZhbHVlOiBcImNlcnRhaW5cIiB9LFxyXG4gICAgeyBsYWJlbDogXCJQcm9iYWJseSAvIExpa2VseVwiLCB2YWx1ZTogXCJwcm9iYWJseS9saWtlbHlcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJQb3NzaWJsZVwiLCB2YWx1ZTogXCJwb3NzaWJsZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlVubGlrZWx5XCIsIHZhbHVlOiBcInVubGlrZWx5XCIgfSxcclxuICAgIHsgbGFiZWw6IFwiQ29uZGl0aW9uYWwgLyBVbmNsYXNzaWZpZWRcIiwgdmFsdWU6IFwiY29uZGl0aW9uYWwvdW5jbGFzc2lmaWVkXCIgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiVW4tYXNzZXNzYWJsZSAvIFVuLWNsYXNzaWZpYWJsZVwiLFxyXG4gICAgICB2YWx1ZTogXCJ1bi1hc3Nlc3NhYmxlL3VuLWNsYXNzaWZpYWJsZVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2YyXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS00IHBiLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgV0hPIFByb2JhYmlsaXR5IFNjYWxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBtYXgtdy1maXQgbXgtYXV0byBtdC0xMCBweC01IHB5LTEgYm9yZGVyLTIgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+QXNzZXNtZW50IGNyaXRlcmlhPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtYi0xIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpSGVscENpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBkZWZhdWx0QWN0aXZlS2V5PXtbXCIxXCJdfT5cclxuICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsIGhlYWRlcj17b3B0aW9uLmxhYmVsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb21tb2RpIG5vbiB2aXRhZSByYXRpb25lIHF1aXNxdWFtIGFsaXF1aWQgZXN0IG5hdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhY2VyZSBoYXJ1bSBlcnJvciBjb25zZWN0ZXR1ciBpbnZlbnRvcmUsIGRvbG9ydW0gcXVpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3BlcmlvcmVzIGl1cmUgcXVvIGVhISBVbGxhbSwgYmxhbmRpdGlpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGVyY2l0YXRpb25lbS5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZjJcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgUmFkaW8sIFByb2dyZXNzLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmMygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNmM1wiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgSGFydHdpZydzIFNldmVyaXR5IEFzc2Vzc21lbnQgU2NhbGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+TGV2ZWwgMTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+TGV2ZWwgMjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+TGV2ZWwgMzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17M30+TGV2ZWwgNDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NH0+TGV2ZWwgNTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NX0+TGV2ZWwgNjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Nn0+TGV2ZWwgNzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXszMH1cclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e1wibm9ybWFsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0luZm89e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtcIiNFODU5MENcIn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFpbENvbG9yPXtcIiNFNUU1RTVcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+e1wiTWlsZCBMZXZlbFwifTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgICAgICAgICBBc3Nlc3NtZW50IGNyaXRlcmlhXHJcbiAgICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtbC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIHRoYXQgdGhlIHN1c3BlY3RlZCBkcnVnIGJlIHdpdGhoZWxkLFxyXG4gICAgICAgICAgICAgICAgICBkaXNjb250aW51ZWQgb3Igb3RoZXJ3aXNlIGNoYW5nZWQuIE5vIGFudGlkb3RlIG9yIG90aGVyXHJcbiAgICAgICAgICAgICAgICAgIHRyZWF0bWVudCBpcyByZXF1aXJlZCwgYW5kIHRoZXJlIGlzIG5vIGluY3JlYXNlIGluIGxlbmd0aCBvZlxyXG4gICAgICAgICAgICAgICAgICBzdGF5XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgICBkcnVnLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmM1wiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IFJhZGlvLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNmNFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgTW9kaWZpZWQgU2NodW1vY2sgYW5kIFRob3JudG9uIHNjYWxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlcmUgYSBoaXN0b3J5IG9mIGFsbGVyZ3kgb3IgcHJldmlvdXMgcmVhY3Rpb25zIHRvIHRoZSBkcnVnP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGRydWcgaW52b2x2ZWQgaW5hcHByb3ByaWF0ZSBmb3IgdGhlIHBhdGllbnRcdTIwMTlzIGNsaW5pY2FsIGNvbmRpdGlvbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZSBkb3NlLCByb3V0ZSBvciBmcmVxdWVuY3kgb2YgYWRtaW5pc3RyYXRpb24gaW5hcHByb3ByaWF0ZSBmb3IgdGhlIHBhdGllbnRcdTIwMTlzIGFnZSwgd2VpZ2h0IG9yIGRpc2Vhc2Ugc3RhdGU/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyBhIHRveGljIHNlcnVtIGRydWcgY29uY2VudHJhdGlvbiAob3IgbGFib3JhdG9yeSBtb25pdG9yaW5nIHRlc3QpIGRvY3VtZW50ZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGVyZSBhIGtub3duIHRyZWF0bWVudCBmb3IgdGhlIGFkdmVyc2UgZHJ1ZyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHJlcXVpcmVkIHRoZXJhcGV1dGljIGRydWcgbW9uaXRvcmluZyBvciBvdGhlciBuZWNlc3NhcnkgbGFiIHRlc3RzIG5vdCBwZXJmb3JtZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyBhIGRydWcgaW50ZXJhY3Rpb24gaW52b2x2ZWQgaW4gdGhlIEFEUj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIG0tMCBmb250LWJvbGRcIj5GaW5hbCBSZXN1bHQ8L3A+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkRlZmluaXRlbHkgcHJldmVudGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9PlByb2JhYmx5IHByZXZlbnRhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Ob3QgcHJldmVudGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2Y0XCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjUoKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiQWdlXCIsIHZhbHVlOiBcImFnZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkdlbmRlclwiLCB2YWx1ZTogXCJnZW5kZXJcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJHZW5ldGljXCIsIHZhbHVlOiBcImdlbmV0aWNcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJJbnRlci1jdXJyZW50IGRpc2Vhc2VcIiwgdmFsdWU6IFwiaW50ZXItY3VycmVudCBkaXNlYXNlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiTXVsdGlwbGUgRHJ1ZyBUaGVyYXB5XCIsIHZhbHVlOiBcIm11bHRpcGxlIGRydWcgdGhlcmFweVwiIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNmNVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktNCBwYi04XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgIFByZWRpY3RhYmlsaXR5XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+UHJlZGljdGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vdCBwcmVkaWN0YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgbXktNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgIFByZWRpc3Bvc2luZyBmYWN0b3JzXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTRcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17b3B0aW9uc30+PC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIm90aGVyXCI+T3RoZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2Y1XCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuaW1wb3J0IHsgUmFkaW8sIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2EoKSB7XHJcbiAgLy90ZW1wb3JhcnkgdmFyaWFibGVcclxuICBjb25zdCBkcnVncyA9IFtcImRydWcxXCIsIFwiZHJ1ZzJcIiwgXCJkcnVnM1wiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzYlwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkFjdGlvbiBUYWtlbjwvZGl2PlxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIGRydWdPcHRpb25zPXtkcnVnc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2JcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKHByb3BzOiB7IGRydWdPcHRpb25zOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJEcnVnIHdpdGhkcmF3blwiLFxyXG4gICAgXCJEb3NlIGluY3JlYXNlZFwiLFxyXG4gICAgXCJEb3NlIHJlZHVjZWRcIixcclxuICAgIFwiRG9zZSBub3QgY2hhbmdlZFwiLFxyXG4gICAgXCJOb3QgYXBwbGljYWJsZVwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb0ZpZWxkcyA9IHByb3BzLmRydWdPcHRpb25zLm1hcCgoZHJ1ZywgaW5kZXgpID0+IChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17ZHJ1Z30gbGFiZWw9e2RydWd9IGNsYXNzTmFtZT1cInctZnVsbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGb3JtLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIC8vdGVtcG9yYXJ5IHZhcmlhYmxlXHJcbiAgY29uc3QgZHJ1Z3MgPSBbXCJkcnVnMVwiLCBcImRydWcyXCIsIFwiZHJ1ZzNcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2NcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5EZWNoYWxsZW5nZTwvZGl2PlxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIGRydWdPcHRpb25zPXtkcnVnc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2NcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKHByb3BzOiB7IGRydWdPcHRpb25zOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJEcnVnIHdpdGhkcmF3blwiLFxyXG4gICAgXCJEb3NlIGluY3JlYXNlZFwiLFxyXG4gICAgXCJEb3NlIHJlZHVjZWRcIixcclxuICAgIFwiRG9zZSBub3QgY2hhbmdlZFwiLFxyXG4gICAgXCJOb3QgYXBwbGljYWJsZVwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb0ZpZWxkcyA9IHByb3BzLmRydWdPcHRpb25zLm1hcCgoZHJ1ZywgaW5kZXgpID0+IChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17ZHJ1Z30gbGFiZWw9e2RydWd9IGNsYXNzTmFtZT1cInctZnVsbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICAvL3RlbXBvcmFyeSB2YXJpYWJsZVxyXG4gIGNvbnN0IGRydWdzID0gW1wiZHJ1ZzFcIiwgXCJkcnVnMlwiLCBcImRydWczXCJdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNkXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UmVjaGFsbGVuZ2U8L2Rpdj5cclxuICAgICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyBkcnVnT3B0aW9ucz17ZHJ1Z3N9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNkXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9IChwcm9wczogeyBkcnVnT3B0aW9uczogc3RyaW5nW10gfSkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIFwiRHJ1ZyB3aXRoZHJhd25cIixcclxuICAgIFwiRG9zZSBpbmNyZWFzZWRcIixcclxuICAgIFwiRG9zZSByZWR1Y2VkXCIsXHJcbiAgICBcIkRvc2Ugbm90IGNoYW5nZWRcIixcclxuICAgIFwiTm90IGFwcGxpY2FibGVcIixcclxuICAgIFwiVW5rbm93blwiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9GaWVsZHMgPSBwcm9wcy5kcnVnT3B0aW9ucy5tYXAoKGRydWcsIGluZGV4KSA9PiAoXHJcbiAgICA8Rm9ybS5JdGVtIG5hbWU9e2RydWd9IGxhYmVsPXtkcnVnfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBrZXk9e2luZGV4fT5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApKTtcclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLypcclxuTm90ZTogXHJcbiAgICBUaGlzIHBhZ2UgbmVlZHMgZml4aW5nLiBcclxuICAgIERvIG5vdCBlZGl0IGl0IGlmIHlvdSBhcmUgbm90IEBjYW5hcnlHcmFwaGVyXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydGluZyBpY29uc1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUsIEZpUGx1cywgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2UoKSB7XHJcbiAgLy90ZW1wb3JhcnkgdmFyaWFibGVcclxuICBjb25zdCBkcnVncyA9IFtcImRydWcxXCIsIFwiZHJ1ZzJcIiwgXCJkcnVnM1wiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzZVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgIFJlYWN0aW9uIFJlYXBwZWFyZWQgQWZ0ZXIgUmUtaW50cm9kdWN0aW9uXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIGRydWdPcHRpb25zPXtkcnVnc30gLz5cclxuICAgICAgICAgICAgey8qIFNlY3Rpb24gdG8gYWRkIGRydWcgaW5mb3JtYXRpb24gKi99XHJcbiAgICAgICAgICAgIDxBZGREcnVnc0JveCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZVwiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwRHJ1Z3MgPSAocHJvcHM6IHsgZHJ1Z09wdGlvbnM6IHN0cmluZ1tdIH0pID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIHJlY2hhbGxlbmdlXCIsXHJcbiAgICBcIlJlY3VycmFuY2Ugb2Ygc3ltcHRvbXNcIixcclxuICAgIFwiTm8gb2NjdXJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG5cclxuICBjb25zdCBjb21wb25lbnRzRm9yRHJ1Z3MgPSBwcm9wcy5kcnVnT3B0aW9ucy5tYXAoKGRydWcsIGluZGV4KSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTVcIj5cclxuICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIG5hbWU9e2RydWd9XHJcbiAgICAgICAgbGFiZWw9e2RydWd9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG0tMCBwLTAgXCJcclxuICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICA+XHJcbiAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtcImRydWdEb3NlX1wiICsgZHJ1Z30gbGFiZWw9e1wiRG9zZVwifSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57Y29tcG9uZW50c0ZvckRydWdzfTwvPjtcclxufTtcclxuXHJcbmNvbnN0IEFkZERydWdzQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkcnVnc0FkZGVkLCBzZXREcnVnc0FkZGVkXSA9IHVzZVN0YXRlPHJlYWRvbmx5IFN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tBZGREcnVnID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RHJ1Z3NBZGRlZChbLi4uZHJ1Z3NBZGRlZCwgaW5wdXRWYWx1ZV0pO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrUmVtb3ZlRHJ1ZyA9IChkcnVnOiBTdHJpbmcpID0+IHtcclxuICAgIC8vIGRydWJcclxuICAgIHNldERydWdzQWRkZWQoZHJ1Z3NBZGRlZC5maWx0ZXIoKGQpID0+IGQgIT09IGRydWcpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMTZcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtMSBnYXAteS0zXCJcclxuICAgICAgICBvblN1Ym1pdD17b25DbGlja0FkZERydWd9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTExXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgZHJ1Z1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHAtMiBib3JkZXIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzZDNTY3Ql0gYm9yZGVyLVsjNkM1NjdCXVwiPlxyXG4gICAgICAgICAgPEZpUGx1cyBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC0xIHB0LTJcIj5cclxuICAgICAgICB7ZHJ1Z3NBZGRlZC5tYXAoKGRydWc6IFN0cmluZykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIGNvbC1zcGFuLTExIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHktMVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS1hdXRvXCI+e2RydWd9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LWF1dG9cIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrUmVtb3ZlRHJ1ZyhkcnVnKX0+XHJcbiAgICAgICAgICAgICAgPEZpWCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IENoZWNrYm94LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZygpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1wiU3BlY2lmaWNcIiwgXCJTeW1wdG9tYXRpY1wiLCBcIk5vbmVcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzZ1wiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+VHJlYXRtZW50IEdpdmVuPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17b3B0aW9uc30+PC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlciBtdC01XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTAgcHktMFwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIG15LTAgcHktMFwiPlxyXG4gICAgICAgICAgICAgICAgVHJlYXRtZW50IERldGFpbHMgKGlmIGFueSlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZ1wiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2goKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzaFwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMCBweS0wXCI+Q29uY29taXRhbnQgbWVkaWNhbCBwcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgSW5jbHVkaW5nIHNlbGYtbWVkaWNhdGlvbiBhbmQgaGVyYmFsIHJlbWVkaWVzIHdpdGggdGhlcmFweSBkYXRlc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTdWJmb3JtIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNoXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFN1YmZvcm0gPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWUgKGJyYW5kL2dlbmVyaWMpXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRvc2UgVXNlZFwiIC8+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSb3V0ZSBVc2VkXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRnJlcXVlbmN5IChPRCwgQkQpXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RhcnRlZFwiIC8+XHJcbiAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RvcHBlZFwiIC8+XHJcbiAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW5kaWNhdGlvblwiIC8+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctMTAwIHB0LTVcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bIzZDNTY3Ql0gdGV4dC13aGl0ZSBwLTIgdy0zMiBib3JkZXIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzZDNTY3Ql0gYm9yZGVyLVsjNkM1NjdCXVwiPlxyXG4gICAgICAgIFNhdmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LVsjNkM1NjdCXSBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjNkM1NjdCXSBob3ZlcjpiZy1bI0U4NTkwQ10gaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItWyNFODU5MENdXCJcclxuICAgICAgPlxyXG4gICAgICAgIEFkZCBtb3JlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgRGF0ZVBpY2tlciwgU3dpdGNoLCBDaGVja2JveCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNpKCkge1xyXG4gIGNvbnN0IFtzZXJpb3VzUmVhY3Rpb24sIHNldFNlcmlvdXNSZWFjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQXBwbGljYWJsZSwgc2V0SXNBcHBsaWNhYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzbmVzcyA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRTZXJpb3VzUmVhY3Rpb24oY2hlY2tlZCk7XHJcbiAgfTtcclxuICBjb25zdCBjaGFuZ2VBcHBsaWNhYmlsaXR5ID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldElzQXBwbGljYWJsZShjaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzaVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+QU1DL05DQyBTZWN0aW9uPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNCBncmlkIGdyaWQtY29sLTEyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItM1wiPk5vdCBBcHBsaWNhYmxlPC9wPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2NoYW5nZUFwcGxpY2FiaWxpdHl9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtM1wiPkFwcGxpY2FibGU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFNQyBSZXBvcnQgTm8uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXshaXNBcHBsaWNhYmxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBweS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXb3JsZHdpZGUgVW5pcXVlIE5vLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZD17IWlzQXBwbGljYWJsZX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVsZXZhbnQgdGVzdHMvIGxhYm9yYXRvcnkgZGF0YSB3aXRoIGRhdGVzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWxldmFudCBtZWRpY2FsLyBtZWRpY2F0aW9uIGhpc3RvcnkgKGUuZy4gYWxsZXJnaWVzLCByYWNlLCBcclxuICAgICAgICAgICAgICAgIHByZWduYW5jeSwgc21va2luZywgYWxjb2hvbCB1c2UsIGhlcGF0aWMvcmVuYWwgZHlzZnVuY3Rpb24gZXRjLilcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VyaW91c25lc3Mgb2YgdGhlIHJlYWN0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTIgcGwtNVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLTNcIj5ObzwvcD5cclxuICAgICAgICAgICAgICA8U3dpdGNoIG9uQ2hhbmdlPXtjaGFuZ2VTZXJpb3VzbmVzc30gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0zXCI+WWVzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPENoZWNrYm94Lkdyb3VwIGRpc2FibGVkPXshc2VyaW91c1JlYWN0aW9ufT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e1wiQ29uZ2VuaXRhbC1hbm9tYWx5XCJ9PlxyXG4gICAgICAgICAgICAgICAgICBDb25nZW5pdGFsLWFub21hbHlcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e1wiTGlmZSB0aHJlYXRlbmluZ1wifT5cclxuICAgICAgICAgICAgICAgICAgTGlmZSB0aHJlYXRlbmluZ3tcIiBcIn1cclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e1wiSG9zcGl0YWxpemF0aW9uL1Byb2xvbmdlZFwifT5cclxuICAgICAgICAgICAgICAgICAgSG9zcGl0YWxpemF0aW9uL1Byb2xvbmdlZFxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT17XCJEaXNhYmlsaXR5XCJ9PkRpc2FiaWxpdHk8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcclxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVpcmVkIGludGVydmVudGlvbiB0byBQcmV2ZW50IHBlcm1hbmVudCBpbXBhaXJtZW50L2RhbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgUmVxdWlyZWQgaW50ZXJ2ZW50aW9uIHRvIFByZXZlbnQgcGVybWFuZW50IGltcGFpcm1lbnQvZGFtYWdlXHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBncmlkIGdyaWQtY29scy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiB2YWx1ZT17XCJEZWF0aFwifT5cclxuICAgICAgICAgICAgICAgICAgRGVhdGhcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJteS1hdXRvIGNvbC1zcGFuLTEwXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZ3JpZCBncmlkLWNvbHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCIgdmFsdWU9e1wiT3RoZXJcIn0+XHJcbiAgICAgICAgICAgICAgICAgIE90aGVyIChzcGVjaWZ5KVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJteS1hdXRvIGNvbC1zcGFuLTEwXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NoZWNrYm94Lkdyb3VwPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk91dGNvbWVzXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwicmVjb3ZlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNvdmVyZWRcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwicmVjb3ZlcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgUmVjb3ZlcmluZ1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJub3RyZWNvdmVyZWRcIj5cclxuICAgICAgICAgICAgICAgIE5vdCByZWNvdmVyZWRcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMS8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwiZmF0YWxcIj5cclxuICAgICAgICAgICAgICAgIEZhdGFsXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zLzEyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwicmVjb3ZlcmVkd2l0aHNlcXVlbGFlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZWNvdmVyZWQgd2l0aCBzZXF1ZWxhZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJ1bmtub3duXCI+XHJcbiAgICAgICAgICAgICAgICBVbmtub3duXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNpXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgRm9ybSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNqXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5PdXRjb21lPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+RmF0YWw8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9PlJlY292ZXJ5PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Db250aW51aW5nPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXszfT5Vbmtub3duPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXs0fT5PdGhlcjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzalwiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBJbnB1dCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBFeWVJbnZpc2libGVPdXRsaW5lZCwgRXllVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLWxnIHctMS8yIG1pbi1oLTIvNCBteC1hdXRvIG1iLTMyIHAtMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql0gdGV4dC1bMzVweF1cIj5BRFIgUG9ydGFsPC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LTEvMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZW1haWwuY29tXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXJQYXNzd29yZEhlcmVcIlxyXG4gICAgICAgICAgICAgIGljb25SZW5kZXI9eyh2aXNpYmxlKSA9PlxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA/IDxFeWVUd29Ub25lIC8+IDogPEV5ZUludmlzaWJsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi01IGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xLzIgYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTJcIj5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtNCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LTMvNCBtaW4taC0zLzQgbXgtYXV0byBwLTEwIHRleHQtbGVmdFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+U2VsZWN0IGEgZm9ybSB0byBmaWxsPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdhcC01XCI+XHJcbiAgICAgICAgICA8Q2FyZFNlbGVjdFxyXG4gICAgICAgICAgICByb3V0ZT1cImFkci1yZXBvcnRpbmcvMVwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiMVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJBRFIgUmVwb3J0aW5nIEZvcm1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkU2VsZWN0XHJcbiAgICAgICAgICAgIHJvdXRlPVwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzFcIlxyXG4gICAgICAgICAgICBpbWFnZT1cIjJcIlxyXG4gICAgICAgICAgICBuYW1lPVwiTWVkaWNhbCBEZXZpY2UgQURSIFJlcG9ydGluZyBGb3JtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ2FyZFNlbGVjdCA9IChwcm9wczogeyBuYW1lOiBzdHJpbmc7IHJvdXRlOiBzdHJpbmc7IGltYWdlPzogc3RyaW5nIH0pID0+IChcclxuICA8TGluayB0bz17cHJvcHMucm91dGV9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTQwMCBwLTMgaC1mdWxsIGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi03NVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PVwiUGxhY2Vob2xkZXIgaW1hZ2VcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTMvNCB3LWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC14bCB0ZXh0LWJsYWNrIHB0LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHtwcm9wcy5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L0xpbms+XHJcbik7XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOidkMDgzNmNmMCcsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUFNVTkdEM0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxZNFNFR1dULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFlCV1E2UlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KTURLN0VQSC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtTFdTQlhHRVkuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdWM0lMWEoyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUZRTTNUSlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgtNFpVNU9HV0cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4LVdERkg3VjJPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2InOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2ItRlNIQVJUNE4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYy1QVE81VlZZSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9kJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kLTVVNFlKS1pGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2UnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2UnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2UnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2UtSURNWUxGNUQuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvMicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yLTY1RlVYSE9GLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mLzMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMy1FREM0NUpXRy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi80JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQtUExINldUQVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi81JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUtRktBT09ES1cuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgtTUNFQ0tDSEwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nLU1RUEZNVFJGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gtUEFYR1JXVFEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9pJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pLUlHVUxKQVlPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4LTREMk42VVhOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2onOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2onLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2onLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2otWTJLSjRQT0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFDRjYyWUtCLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvNCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4LU83U0hTU1FXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1VSjNHNDczSS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luL2luZGV4Jzp7J2lkJzoncm91dGVzL2xvZ2luL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi9pbmRleC1KTEZTWFdGRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleC1JU1k1NVRDUy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4LU9TNldVM0FMLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CSEMzRzJOSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvaW5kZXgtMlZHSlRNU0QuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDSllJNkdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRktCQUhVQVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00VDRCNjJLQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUJIQzNHMk5LLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEtRkNTWFU3SU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDSllJNkdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yLVRJRlVTTVlBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GS0JBSFVBWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zLVJSQUxKSTRPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00VDRCNjJLQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYic6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYi1LN1FWNk5ETS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYyc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYy1RTkc0UkxXQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZC1RSUhBNVlCQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUUNGNjJZS0IuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4LUoySjVTWEdOLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RQ0Y2MllLQi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzUvaW5kZXgtTFhHSENCSlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJIQzNHMk5LLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleC1GVldETUxRTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQkhDM0cyTksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4LUFPTkQ2V0g3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1CSEMzRzJOSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU81UEVST0s1LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXgtSzJKWDNCQ0EuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUJIQzNHMk5LLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTzVQRVJPSzUuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOS9pbmRleC1VMjVFVVdRQy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQkhDM0cyTksuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1PNVBFUk9LNS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUQwODM2Q0YwLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQ0E7QUFEQTtBQUFBO0FBQ0EsWUFBdUI7QUFBQTtBQUFBOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsNEJBQTRCO0FBQUEsTUFDekQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw4QkFBOEI7QUFBQSxNQUMzRCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLHdCQUF3QjtBQUFBLE1BQ3JELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztB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QSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJaEI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUloQjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUtoQixJQUFNLHlCQUF1QztBQUFBLEVBQzNDLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVB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
