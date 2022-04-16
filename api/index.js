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
var app_default = "/build/_assets/app-MRL677MN.css";

// app/styles/global.css
var global_default = "/build/_assets/global-X3NW7F5U.css";

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
  }, isFirstPage ? "Home" : "Previous")), /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#E8590C] text-white hover:shadow-xl p-2 w-32",
    type: "submit"
  }, isLastPage ? "Submit" : "Next")));
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
  const RadioOptions = ["Yes", "No", "Don't know"];
  const formLayout = [
    "Are there previous conclusion reports on this reaction?",
    "Are there previous conclusion reports on this reaction?",
    "Did the adverse event appear after the suspect drug was administered?",
    "Did the AR improve when the drug was discontinued or a specific antagonist was administered?",
    "Did the AR reappear when drug was re-administered?",
    "Are there alternate causes [other than the drug] that could solely have caused the reaction?",
    "Did the reaction reappear when a placebo was given?",
    "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?",
    "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?",
    "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?",
    "Was the adverse event confirmed by objective evidence?"
  ];
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
    className: "text-[24px] text-[#E8590C] pb-5"
  }, "Naranjo\u2019s Scale"), formLayout.map((field, index) => /* @__PURE__ */ React.createElement(import_antd20.Form.Item, {
    key: index,
    name: index,
    label: field,
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
    options: RadioOptions,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row-reverse text-black dark:text-gray-200"
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
    {
      label: "Certain",
      value: "certain",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
    },
    {
      label: "Probably / Likely",
      value: "probably/likely",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
    },
    {
      label: "Possible",
      value: "possible",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
    },
    {
      label: "Unlikely",
      value: "unlikely",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
    },
    {
      label: "Conditional / Unclassified",
      value: "conditional/unclassified",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
    },
    {
      label: "Un-assessable / Un-classifiable",
      value: "un-assessable/un-classifiable",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem."
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
    className: "text-[24px] text-[#E8590C]"
  }, "WHO Probability Scale"), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "whoProbabiltyScale",
    label: "Scale value",
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Radio.Group, {
    optionType: "button",
    buttonStyle: "solid",
    size: "large",
    options
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C] my-auto mr-2"
  }, "Assesment criteria"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center my-auto"
  }, /* @__PURE__ */ React.createElement(import_fi5.FiHelpCircle, {
    className: "text-black dark:text-white"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 my-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Collapse, {
    defaultActiveKey: ["1"]
  }, options.map((option, index) => /* @__PURE__ */ React.createElement(Panel, {
    header: option.label,
    key: index
  }, /* @__PURE__ */ React.createElement("p", null, option.info)))))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
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
  const radioOptions = [
    { label: "Level 1", value: "1" },
    { label: "Level 2", value: "2" },
    { label: "Level 3", value: "3" },
    { label: "Level 4", value: "4" },
    { label: "Level 5", value: "5" },
    { label: "Level 6", value: "6" },
    { label: "Level 7", value: "7" }
  ];
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
    className: "min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd26.Form.Item, {
    name: "hartwigseveritytest",
    label: "Select a level"
  }, /* @__PURE__ */ React.createElement(import_antd26.Radio.Group, {
    optionType: "button",
    buttonStyle: "solid",
    size: "large",
    options: radioOptions
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "m-0 p-0 text-gray-800 dark:text-gray-300 font-medium"
  }, "Mild Level"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full m-0 p-0"
  }, /* @__PURE__ */ React.createElement(import_antd26.Progress, {
    percent: 30,
    status: "normal",
    showInfo: false,
    strokeColor: "#E8590C",
    trailColor: "#E5E5E5",
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md mb-5"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C] my-auto mr-2"
  }, "Assesment criteria"), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center my-auto"
  }, /* @__PURE__ */ React.createElement(import_fi6.FiHelpCircle, {
    className: "text-black dark:text-white"
  }))), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires that the suspected drug be withheld, discontinued or otherwise changed. No antidote or other treatment is required, and there is no increase in length of stay"), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
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
  const formRadioOptions = ["Yes", "No"];
  const formRadioOptions2 = [
    "Definitely preventable",
    "Probably preventable",
    "Not preventable"
  ];
  const formLayout = [
    "Was there a history of allergy or previous reactions to the drug?",
    "Was the drug involved inappropriate for the patient\u2019s clinical condition?",
    "Was the dose, route or frequency of administration inappropriate for the patient\u2019s age, weight or disease state?",
    "Was a toxic serum drug concentration (or laboratory monitoring test) documented?",
    "Was there a known treatment for the adverse drug reaction?",
    "Was required therapeutic drug monitoring or other necessary lab tests not performed?",
    "Was a drug interaction involved in the ADR?"
  ];
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
  }, "Modified Schumock and Thornton scale"), formLayout.map((field, index) => /* @__PURE__ */ React.createElement(import_antd27.Form.Item, {
    key: index,
    name: index,
    label: field,
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    options: formRadioOptions,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[16px] m-0 font-bold text-gray-800 dark:text-gray-300"
  }, "Final Result"), /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
    options: formRadioOptions2,
    optionType: "button"
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f4"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\5.tsx
var __exports17 = {};
__export(__exports17, {
  default: () => Form1page3f5
});
init_react();
var import_react11 = require("react");
var import_antd28 = require("antd");
var import_fi7 = require("react-icons/fi");
function Form1page3f5() {
  const [predisposingFactorsValues, setPredisposingFactorsValues] = (0, import_react11.useState)([""]);
  const options = [
    { label: "Age", value: "age" },
    { label: "Gender", value: "gender" },
    { label: "Genetic", value: "genetic" },
    { label: "Inter-current disease", value: "inter-current disease" },
    { label: "Multiple Drug Therapy", value: "multiple drug therapy" },
    { label: "Other", value: "other" }
  ];
  const radioOptions = [
    { label: "Predictable", value: "predictable" },
    { label: "Not Predictable", value: "notPredictable" }
  ];
  const onChangeCheckBoxGroup = (values) => {
    setPredisposingFactorsValues(values);
  };
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
    className: "text-[24px] text-[#E8590C]"
  }, "Predictability"), /* @__PURE__ */ React.createElement(import_antd28.Form.Item, {
    name: "predictability",
    label: "Predictability",
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd28.Radio.Group, {
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "my-4 text-[24px] text-[#E8590C]"
  }, "Predisposing factors"), /* @__PURE__ */ React.createElement(import_antd28.Form.Item, {
    name: "predisposingFactors",
    label: "Predisposing factors"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox.Group, {
    options,
    onChange: (e) => onChangeCheckBoxGroup(e)
  })), /* @__PURE__ */ React.createElement(import_antd28.Form.Item, {
    name: "otherInformation",
    label: "If other, mention the factor"
  }, /* @__PURE__ */ React.createElement(import_antd28.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi7.FiHelpCircle, null),
    disabled: !predisposingFactorsValues.includes("other")
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
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
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd32.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
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
  return /* @__PURE__ */ React.createElement(import_antd32.Form.Item, {
    className: "w-full pt-21",
    name: "additionalDrugs",
    label: "Add a drug"
  }, /* @__PURE__ */ React.createElement(import_antd32.Select, {
    mode: "tags",
    style: { width: "100%" },
    placeholder: "Add a drug"
  }));
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
    className: "text-[24px] text-[#E8590C] pb-5"
  }, "Treatment Given"), /* @__PURE__ */ React.createElement(import_antd33.Form.Item, {
    name: "treatment given",
    label: "Select the treatment given",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd33.Checkbox.Group, {
    options
  })), /* @__PURE__ */ React.createElement(import_antd33.Form.Item, {
    label: "Treatment details (if any)",
    name: "treatmentDetails"
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
    className: "text-sm text-gray-600 dark:text-gray-400"
  }, "Including self-medication and herbal remedies with therapy dates")), /* @__PURE__ */ React.createElement(Subform2, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3h"
  })));
}
var Subform2 = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "min-w-full pt-4",
  label: "Name (brand/generic)",
  name: "name"
}, /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "col-span-1",
  label: "Dose used",
  name: "doseUsage"
}, /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "col-span-1",
  label: "Route used",
  name: "routeUsed"
}, /* @__PURE__ */ React.createElement(import_antd34.Input, null))), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "mt-4 w-full",
  label: "Frequency (OD, BD)",
  name: "frequency"
}, /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "col-span-1",
  label: "Date started",
  name: "startDate"
}, /* @__PURE__ */ React.createElement(import_antd34.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "col-span-1",
  label: "Date stopped",
  name: "stopDate"
}, /* @__PURE__ */ React.createElement(import_antd34.DatePicker, {
  className: "w-full"
}))), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
  className: "mt-4 w-full",
  label: "Indication",
  name: "indication"
}, /* @__PURE__ */ React.createElement(import_antd34.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row justify-between w-100 pt-5"
}, /* @__PURE__ */ React.createElement("button", {
  className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]",
  type: "button"
}, "Save"), /* @__PURE__ */ React.createElement("button", {
  type: "button",
  className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
}, "Add more")));

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\i.tsx
var i_exports = {};
__export(i_exports, {
  default: () => Form1page3i
});
init_react();
var import_react12 = __toESM(require("react"));
var import_antd35 = require("antd");
var { TextArea: TextArea16 } = import_antd35.Input;
function Form1page3i() {
  const [seriousReaction, setSeriousReaction] = (0, import_react12.useState)(false);
  const [isApplicable, setIsApplicable] = (0, import_react12.useState)(false);
  const [seriousnessLevelState, setSeriousnessLevelState] = (0, import_react12.useState)();
  const changeSeriousness = (checked) => {
    setSeriousReaction(checked);
  };
  const changeApplicability = (checked) => {
    setIsApplicable(checked);
  };
  const radioOptions = [
    { label: "Recovered", value: "recovered" },
    { label: "Recovering", value: "recovering" },
    { label: "Not recovered", value: "notRecovered" },
    { label: "Fatal", value: "fatal" },
    { label: "Recovered with sequelae", value: "recoveredWithSequelae" },
    { label: "Unknown", value: "unknown" }
  ];
  const checkBoxOptions = [
    { label: "Congenital-anomaly", value: "congenitalAnamoly" },
    { label: "Life Threatening", value: "lifeThreatening" },
    { label: "Hospitalized/Prolonged", value: "Disability" },
    { label: "Disability", value: "disability" },
    {
      label: "Required intervention to Prevent permanent impairment/damage",
      value: "requiredIntervention"
    },
    { label: "Death", value: "death" },
    { label: "Other (Mention below)", value: "other" }
  ];
  return /* @__PURE__ */ import_react12.default.createElement(adr_reporting_default, null, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form, {
    name: "Form1Page3i",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ import_react12.default.createElement("div", {
    className: "text-[24px] text-[#E8590C] mb-5"
  }, "AMC/NCC Section"), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    name: "applicability",
    label: "Applicability",
    className: "w-full flex"
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Switch, {
    checkedChildren: "Applicable",
    unCheckedChildren: "Not applicable",
    onChange: changeApplicability,
    checked: isApplicable
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    className: "w-full",
    name: "amcReportNumber",
    label: "AMC Report Number",
    required: isApplicable,
    hidden: !isApplicable
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Input, {
    disabled: !isApplicable
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Worldwide Unique Number",
    name: "worldwideUniqueNumber",
    className: "w-full",
    required: isApplicable,
    hidden: !isApplicable
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Input, {
    disabled: !isApplicable
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    className: "w-full",
    label: "Relevant tests/ laboratory data with dates",
    name: "relevantTests"
  }, /* @__PURE__ */ import_react12.default.createElement(TextArea16, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    className: "w-full",
    label: "Relevant medical/ medication history (e.g. allergies, race, \r\n                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)",
    name: "relevantMedicalHistory"
  }, /* @__PURE__ */ import_react12.default.createElement(TextArea16, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Was it a serious reaction?",
    name: "seriousnessOfTheReaction",
    className: "w-full"
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Switch, {
    checkedChildren: "Yes",
    unCheckedChildren: "No",
    onChange: changeSeriousness,
    checked: seriousReaction
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Seriousness level",
    name: "seriousnessLabel",
    className: "w-full",
    hidden: !seriousReaction
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Checkbox.Group, {
    disabled: !seriousReaction,
    options: checkBoxOptions,
    onChange: (value) => setSeriousnessLevelState(value)
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Date of death",
    name: "dateOfDeath",
    className: "w-full",
    hidden: !seriousReaction || !(seriousnessLevelState == null ? void 0 : seriousnessLevelState.includes("death")),
    rules: [
      {
        required: seriousReaction && (seriousnessLevelState == null ? void 0 : seriousnessLevelState.includes("death")),
        message: "Date of death is required"
      }
    ]
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.DatePicker, {
    className: "w-full",
    disabled: false
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Mention details of other",
    name: "dateOfDeath",
    className: "w-full",
    hidden: !seriousReaction || !(seriousnessLevelState == null ? void 0 : seriousnessLevelState.includes("other")),
    rules: [
      {
        required: seriousReaction && (seriousnessLevelState == null ? void 0 : seriousnessLevelState.includes("other")),
        message: "You need to mention other details"
      }
    ]
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Input, {
    className: "my-auto col-span-10"
  })), /* @__PURE__ */ import_react12.default.createElement(import_antd35.Form.Item, {
    label: "Outcome",
    name: "outcome",
    className: "w-full"
  }, /* @__PURE__ */ import_react12.default.createElement(import_antd35.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    optionType: "button",
    options: radioOptions
  }))), /* @__PURE__ */ import_react12.default.createElement(NavigationPanel_default, {
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
  const radioOptions = [
    {
      label: "Fatal",
      value: "fatal"
    },
    {
      label: "Recovery",
      value: "recovery"
    },
    {
      label: "Continuing",
      value: "continuing"
    },
    {
      label: "Unknown",
      value: "unknown"
    },
    {
      label: "Other",
      value: "other"
    }
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd36.Form, {
    name: "Form1Page3j",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Outcome"), /* @__PURE__ */ React.createElement(import_antd36.Form.Item, {
    name: "outcome",
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    options: radioOptions,
    optionType: "button",
    buttonStyle: "solid",
    size: "large"
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
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
var assets_manifest_default = { "version": "9c4989b1", "entry": { "module": "/build/entry.client-PSUNGD3I.js", "imports": ["/build/_shared/chunk-LY4SEGWT.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-MFTXEHBH.js", "imports": ["/build/_shared/chunk-GV3ILXJ2.js", "/build/_shared/chunk-UFQM3TJR.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-7CQOK27V.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-SLAIRTCA.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-DQNJWLTY.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-EZEX276U.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-2BVHUTK3.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-OUVESGCQ.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-XEDXD7O5.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-4CIBNV36.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-D6QGOGX5.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-3FEAYC7H.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-US2HIHQR.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-D5EJFQSC.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-AKEOMEFC.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-KUOLQM46.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-6PSNG5QX.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/j": { "id": "routes/adr-reporting/3/j", "parentId": "root", "path": "adr-reporting/3/j", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/j-Y5PD5F2Z.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-CZLSXAUZ.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJ3G473I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-JLFSXWFE.js", "imports": ["/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-E4IE3SNG.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-W2DUABDE.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-ZFLDMBUP.js", "imports": ["/build/_shared/chunk-YTHPS4TT.js", "/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-QLLUCUZ4.js", "/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-BB4FJPK3.js", "imports": ["/build/_shared/chunk-YTHPS4TT.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-TIFUSMYA.js", "imports": ["/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-E2RLGELV.js", "imports": ["/build/_shared/chunk-QLLUCUZ4.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-ONAXJ3CF.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-XDW6NI2G.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-6WVZRXHV.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-CVA2VQMH.js", "imports": ["/build/_shared/chunk-ZNQHQNNP.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-WKUPUOGM.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-SZ73PNPP.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-37P75SG5.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-YD35FVFI.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-QUMVEPDJ.js", "imports": ["/build/_shared/chunk-QVMOMEFL.js", "/build/_shared/chunk-E2TEHJFA.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-9C4989B1.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb290LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9yb290L2luZGV4LnRzeCIsICIuLi9hcHAvc3RhdGVzL3N0b3JlLnRzIiwgIi4uL2FwcC9zdGF0ZXMvU2xpY2VzL0FkclJlcG9ydGluZ0Zvcm0vMS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24xLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24yLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24zLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXIvTGlzdEl0ZW1zLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9TaWRlYmFyVGVtcGxhdGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWwvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbC9Gb3JtTWFwLnRzIiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9pbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLnRzeCIsICIuLi9hcHAvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjIudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw1XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw2XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw3XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw4XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw5XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDRcXGMudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcNFxcZC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcZlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwyXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwyLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwzLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw0LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw1LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxjLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxlLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxnLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxoLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxpLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxqLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxsb2dpblxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwzXFxcXHN1YmZvcm1zXFxcXG9wdGlvbjEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxzdWJmb3Jtc1xcXFxvcHRpb24yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDNcXFxcc3ViZm9ybXNcXFxcb3B0aW9uMy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDVcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcN1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOVxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNFxcXFxiLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDRcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDFcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwyXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcMi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFwzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxmXFxcXDQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcNS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcai50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvN1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzhcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzFcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8yXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi80XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi81XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2lcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2pcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMzRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBPdXRsZXQsIE1ldGEsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gXCJ+L2xheW91dHMvcm9vdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IERvY3VtZW50UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG4vL2ltcG9ydGluZyBzdHlsZXNoZWV0XHJcbmltcG9ydCB0YWlsd2luZFN0eWxlIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XHJcbmltcG9ydCBnbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgYW50U3R5bGVzIGZyb20gXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQURSIFBvcnRhbCB8IEtNQ1wiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhbnRTdHlsZXMgfSxcclxuICBdO1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICh7IGNoaWxkcmVuIH06IERvY3VtZW50UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxSb290TGF5b3V0PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Sb290TGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHJlZHV4LXRvb2xraXRcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0aGUgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL25hdmJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgUm9vdExheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIG1pbi1oLXNjcmVlbiBkYXJrOnRleHQtZ3JheS0yMDBcIj5cclxuICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb3RMYXlvdXQ7XHJcbiIsICJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG4vL2ltcG9ydGluZyBzbGljZXMgaGVyZVxyXG5pbXBvcnQgZm9ybTFwYWdlMVJlZHVjZXIgZnJvbSAnfi9zdGF0ZXMvU2xpY2VzL0FkclJlcG9ydGluZ0Zvcm0vMSdcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBmb3JtMXBhZ2UxOiBmb3JtMXBhZ2UxUmVkdWNlclxyXG4gICAgfSxcclxufSlcclxuXHJcbi8vIEluZmVyIHRoZSBgUm9vdFN0YXRlYCBhbmQgYEFwcERpc3BhdGNoYCB0eXBlcyBmcm9tIHRoZSBzdG9yZSBpdHNlbGZcclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygc3RvcmUuZ2V0U3RhdGU+XHJcbi8vIEluZmVycmVkIHR5cGU6IHtwb3N0czogUG9zdHNTdGF0ZSwgY29tbWVudHM6IENvbW1lbnRzU3RhdGUsIHVzZXJzOiBVc2Vyc1N0YXRlfVxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaCIsICJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvdW50ZXJTdGF0ZSB7XHJcbiAgICBmb3Jtczoge1xyXG4gICAgICAgIHBhdGllbnRJbml0aWFscz86IHN0cmluZztcclxuICAgICAgICBEYXRlT2ZCaXJ0aD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgYWdlT2ZPbnNldDogbnVtYmVyIHwgbnVsbDtcclxuICAgICAgICBnZW5kZXI/OiBcIk1hbGVcIiB8IFwiRmVtYWxlXCIgfCBcIk90aGVyXCIgfCBudWxsO1xyXG4gICAgICAgIHdlaWdodD86IG51bWJlciB8IG51bGw7XHJcbiAgICAgICAgcGF0aWVudElEPzogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICBpcF9vcD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgdW5pdD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgcmVhc29uRm9yVGFraW5nTWVkaWNhdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgbWVkaWNpbmVBZHZpc2VkPzogc3RyaW5nIHwgbnVsbDtcclxuICAgICAgICBrbm93bkFsbGVyZ2llcz86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgc29jaWFsSGlzdG9yeT86IHN0cmluZyB8IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uVHlwZSB7XHJcbiAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZVR5cGVzO1xyXG4gICAgdmFsdWU6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZW51bSBmaWVsZE5hbWVUeXBlcyB7XHJcbiAgICBwYXRpZW50SW5pdGlhbHMgPSBcInBhdGllbnRJbml0aWFsc1wiLFxyXG4gICAgRGF0ZU9mQmlydGggPSBcIkRhdGVPZkJpcnRoXCIsXHJcbiAgICBhZ2VPZk9uc2V0ID0gXCJhZ2VPZk9uc2V0XCIsXHJcbiAgICBnZW5kZXIgPSBcImdlbmRlclwiLFxyXG4gICAgd2VpZ2h0ID0gXCJ3ZWlnaHRcIixcclxuICAgIHBhdGllbnRJRCA9IFwicGF0aWVudElEXCIsXHJcbiAgICBpcF9vcCA9IFwiaXBfb3BcIixcclxuICAgIHVuaXQgPSBcInVuaXRcIixcclxuICAgIHJlYXNvbkZvclRha2luZ01lZGljYXRpb24gPSBcInJlYXNvbkZvclRha2luZ01lZGljYXRpb25cIixcclxuICAgIG1lZGljaW5lQWR2aXNlZCA9IFwibWVkaWNpbmVBZHZpc2VkXCIsXHJcbiAgICBrbm93bkFsbGVyZ2llcyA9IFwia25vd25BbGxlcmdpZXNcIixcclxuICAgIHNvY2lhbEhpc3RvcnkgPSBcInNvY2lhbEhpc3RvcnlcIlxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcclxuICAgIGZvcm1zOiB7XHJcbiAgICAgICAgcGF0aWVudEluaXRpYWxzOiBcIlwiLFxyXG4gICAgICAgIERhdGVPZkJpcnRoOiBudWxsLFxyXG4gICAgICAgIGFnZU9mT25zZXQ6IG51bGwsXHJcbiAgICAgICAgZ2VuZGVyOiBudWxsLFxyXG4gICAgICAgIHdlaWdodDogbnVsbCxcclxuICAgICAgICBwYXRpZW50SUQ6IG51bGwsXHJcbiAgICAgICAgaXBfb3A6IG51bGwsXHJcbiAgICAgICAgdW5pdDogbnVsbCxcclxuICAgICAgICByZWFzb25Gb3JUYWtpbmdNZWRpY2F0aW9uOiBudWxsLFxyXG4gICAgICAgIG1lZGljaW5lQWR2aXNlZDogbnVsbCxcclxuICAgICAgICBrbm93bkFsbGVyZ2llczogbnVsbCxcclxuICAgICAgICBzb2NpYWxIaXN0b3J5OiBudWxsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtMXBhZ2UxU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnZm9ybTFwYWdlMScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGZldGNoSW5jb21wbGV0ZUZvcm1Vc2VyUHJvZmlsZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBsb2dpYyB0byBmZXRjaCBpbmNvbXBsZXRlL2NvbXBsZXRlIGZvcm0gZGF0YSBmcm9tIGJhY2tlbmQgQVBJXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWJtaXRGb3JtRGF0YVRvVGhlQmFja2VuZDogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEFkZCBsb2dpYyB0byBzdWJtaXQgZm9ybSBkYXRhIHRvIHRoZSBiYWNrZW5kIEFQSVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV3Rm9ybURhdGE6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFjdGlvblR5cGU+KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGxvZ2ljIHRvIHNldCB0aGUgbmV3IGZvcm0gZGF0YSBpbiB0aGlzIHJlZHVjZXIgYW5kIGV2ZW50dWFsbHkgaW4gdGhlIGJhY2tlbmQgQVBJIHVzaW5nIHRoZSBhYm92ZSBmdW5jdGlvblxyXG4gICAgICAgICAgICBzdGF0ZS5mb3Jtc1tgJHthY3Rpb24ucGF5bG9hZC5maWVsZE5hbWV9YF0gPSBhY3Rpb24ucGF5bG9hZC52YWx1ZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IGZldGNoSW5jb21wbGV0ZUZvcm1Vc2VyUHJvZmlsZSwgc3VibWl0Rm9ybURhdGFUb1RoZUJhY2tlbmQsIHNldE5ld0Zvcm1EYXRhIH0gPSBmb3JtMXBhZ2UxU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTFwYWdlMVNsaWNlLnJlZHVjZXIiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTQgcC0xIHNoYWRvdy14bCBmb250LW1lZGl1bSBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiL0FEUi1sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInAtMVwiIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteS1hdXRvIHBsLTggdGV4dC1wdXJwbGUtODAwXCI+SG9tZTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5NZWRpY2FsIERldmljZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJUeXBlIG9mIGRldmljZVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbXBsYW50YWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJldXNhYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2luZ2xlIFVzZSBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2FibGUgZGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNlIG9mIG1hbnVmYWN0dXJlZCBtYXJrZWQgc2luZ2xlIHVzZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD5QZXJzb25hbCB1c2UvaG9tZWNhcmUgdXNlIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24xO1xyXG4iLCAiaW1wb3J0IHsgSW5wdXREZXNjcmlwdGlvblByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuaW1wb3J0IEluZm9JY29uIGZyb20gXCIuL0luZm9JY29uLnN2Z1wiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmNvbnN0IElucHV0RGVzY3JpcHRpb24gPSAocHJvcHM6IElucHV0RGVzY3JpcHRpb25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBiLTFcIj5cclxuICAgICAge3Byb3BzLmlzUmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHItMSB0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPn1cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItWzBweF0gcHItMSB0ZXh0LVsxNnB4XVwiPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxGaUhlbHBDaXJjbGUgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dERlc2NyaXB0aW9uO1xyXG4iLCAiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXktMiBteC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PktpdHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNvbnRyb2wgTWF0ZXJpYWxzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVhZ2VudHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PklWRCBFbGVjdHJvbmljIFJlYWRlci9BbmFseXplcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q2FsaWJyYXRvcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5PdGhlcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjI7XHJcbiIsICJpbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgb3B0aW9uMyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bCBwLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkVxdWlwbWVudCB1c2FnZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbnZhc2liaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBJbWFnaW5nIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gT3RoZXJzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgQ29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcHRpb24zO1xyXG4iLCAiLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3gsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTEoKSB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1wiSW5pdGlhbFwiLCBcIkZvbGxvdy11cFwiLCBcIkZpbmFsXCIsIFwiVHJlbmRcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5QcmltYXJ5IEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUmVwb3J0ZXIgUmVmZXJlbmNlIE51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlR5cGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjFcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTUgcHgtMTYgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMFwiPlxyXG4gICAgICAgICAgICA8U2lkZWJhciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHAtMlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIHB0LTggcGItNCB0ZXh0LVszNXB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBBRFIgUmVwb3J0aW5nIEZvcm1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IExpc3RJdGVtcyBmcm9tIFwiLi9MaXN0SXRlbXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyBkYXRhXHJcbmltcG9ydCB7IEFkclJlcG9ydGluZywgTWVkaWNhbERldmljZVJlcG9ydGluZyB9IGZyb20gXCIuL1NpZGViYXJUZW1wbGF0ZXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb3BzIH0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICAvLyBIb2xkcyB0aGUgY3VycmVudCBmb3JtIHNpZGViYXIgZGF0YVxyXG4gIGNvbnN0IFtTaWRlYmFyRGF0YSwgc2V0U2lkZWJhckRhdGFdID0gdXNlU3RhdGU8VGVtcGxhdGVQcm9wc1tdPihcclxuICAgIEFkclJlcG9ydGluZy50ZW1wbGF0ZVxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIC8vc2V0IG5leHQsIHByZXZpb3VzIGFuZCBjdXJyZW50IHBhZ2Ugb24gZXZlcnkgcGFnZSBsb2FkXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGb3JtID0gY3VycmVudExvY2F0aW9uWzFdO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjdXJyZW50TG9jYXRpb25bMl07XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVN1YiA9XHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5sZW5ndGggPj0gNCA/IGN1cnJlbnRMb2NhdGlvblszXSA6IFwiXCI7XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZVN1YlN1YiA9XHJcbiAgICAgIGN1cnJlbnRMb2NhdGlvbi5sZW5ndGggPj0gNSA/IGN1cnJlbnRMb2NhdGlvbls0XSA6IFwiXCI7XHJcbiAgICBpZiAoY3VycmVudEZvcm0gPT09IFwiYWRyLXJlcG9ydGluZ1wiKSB7XHJcbiAgICAgIHNldFNpZGViYXJEYXRhKEFkclJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEZvcm0gPT09IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCIpIHtcclxuICAgICAgc2V0U2lkZWJhckRhdGEoTWVkaWNhbERldmljZVJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3RpdmVUYWIoY3VycmVudFBhZ2UgKyBjdXJyZW50UGFnZVN1YiArIGN1cnJlbnRQYWdlU3ViU3ViKTtcclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgcGItNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIEluZGlhbiBOYXRpb25hbCBFbWJsZW1cIlxyXG4gICAgICAgICAgICBzcmM9XCIvZW1ibGVtLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIGRhcms6dGV4dC1bI2EyNjJjZl0gdGV4dC14bCBtLTAgbWItM1wiPlxyXG4gICAgICAgICAgICBNQU5JUEFMIENPTExFR0UgT0YgUEhBUk1BQ1lcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxMHB4XSBib3JkZXItdC0yIGJvcmRlci1bIzZDNTY3Ql0gcHQtMiBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICBNYW5pcGFsIEFjYWRlbXkgb2YgSGlnZXIgRWR1Y2F0aW9uXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAoSW5zdGl0dXRpb24gb2YgRW1pbmVuY2UgRGVlbWVkIHRvIGJlIFVuaXZlcnNpdHkpXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCBwLTUgcm91bmRlZC1sZyB0ZXh0LVsjNkM1NjdCXSBkYXJrOnRleHQtWyNhMjYyY2ZdIGJvcmRlclwiPlxyXG4gICAgICAgIHtTaWRlYmFyRGF0YS5tYXAoKGl0ZW06IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbXNcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgICAgICBwYWdlTGluaz17aXRlbS5wYWdlTGlua31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsICIvLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGaUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEdvUHJpbWl0aXZlRG90IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQge1xyXG4gIExpc3RJdGVtc1Byb3BzLFxyXG4gIFRlbXBsYXRlUHJvcHMsXHJcbiAgU2lkZWJhck51bWJlcmluZ0J1bGxldHMsXHJcbn0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtcyA9IChwcm9wczogTGlzdEl0ZW1zUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXJOdW1iZXJpbmdCdWxsZXRcclxuICAgICAgICAgICAgaXNDdXJyZW50UGFnZT17cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMF0gPT09IHByb3BzLnBhZ2VMaW5rfVxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZD17cHJvcHMuaXNDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIGJ1bGxldE51bWJlcj17cHJvcHMubnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgdGV4dC1iYXNlXCI+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04XCI+XHJcbiAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzBdID09PSBwcm9wcy5wYWdlTGluayAmJlxyXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVUYWIgPVxyXG4gICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdID09PSBwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmxleCBmbGV4LXJvdyBwYi0xIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBwYi0xIHRleHQtWyM3RTdFN0VdXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwdC0xIHByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LW1kXCI+e2NoaWxkLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChzdWJDaGlsZDogVGVtcGxhdGVQcm9wcywgc3ViSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVN1YlRhYiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMl0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlU3ViVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInB5LTEgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHktMSB0ZXh0LVsjN0U3RTdFXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNoaWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0ID0gKHByb3BzOiBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0cykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0NvbXBsZXRlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItWyM2QzU2N0JdIGJnLVsjNkM1NjdCXSBkYXJrOmJnLVsjYTI2MmNmXSBkYXJrOmJvcmRlci1bI2EyNjJjZl0gcm91bmRlZC1mdWxsIGgtNyB3LTcgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICA8RmlDaGVjayBjbGFzc05hbWU9XCJteC1hdXRvIG15LWF1dG8gZm9udC1leHRyYWJvbGRcIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAocHJvcHMuaXNDdXJyZW50UGFnZSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGJvcmRlci0yIGJvcmRlci1bIzZDNTY3Ql0gZGFyazpib3JkZXItWyNhMjYyY2ZdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSBkYXJrOnRleHQtWyNhMjYyY2ZdXCI+XHJcbiAgICAgICAgICB7cHJvcHMuYnVsbGV0TnVtYmVyICsgMX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItWyM3RTdFN0VdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjN0U3RTdFXVwiPlxyXG4gICAgICAgICAge3Byb3BzLmJ1bGxldE51bWJlciArIDF9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtcztcclxuIiwgIi8vaW1wb3J0aW5mIHR5cGVzXHJcbmltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBBZHJSZXBvcnRpbmc6IFNpZGViYXJQcm9wcyA9IHtcclxuICBiYXNlVXJsOiBcIi9hZHItcmVwb3J0aW5nXCIsXHJcbiAgdGVtcGxhdGU6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjFcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIEFkdmVyc2UgUmVhY3Rpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiMlwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIE1lZGljYXRpb24ocylcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJNZWRpY2F0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFjdGlvbiBUYWtlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2JcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGVjaGFsbGVuZ2VcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNjXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlJlY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJSZWFjdGlvbiByZWFwcGVhcmVkIGFmdGVyIHJlaW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZVwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXVzYWxpdHkgQXNzZXNzbWVudFwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2ZcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk5hcmFuam8ncyBzY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiV0hPIHByb2JhYmlsaXR5IHNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2YyXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiSGFydHdpZydzIFNldmVyaXR5IEFzc2Vzc21lbnQgU2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjNcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjRcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJQcmVkaWN0YWJpbGl0eSAmIFByZWRpc3Bvc2luZyBmYWN0b3JzXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2Y1XCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRyZWF0bWVudCBnaXZlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2dcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29uY29taXRhbnQgbWVkaWNhbCBwcm9kdWN0XCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzaFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBTUMvTkNDIFNlY3Rpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNpXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk91dGNvbWVcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNqXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVwb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI0XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgTWVkaWNhbERldmljZVJlcG9ydGluZzogU2lkZWJhclByb3BzID0ge1xyXG4gIGJhc2VVcmw6IFwiL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiLFxyXG4gIHRlbXBsYXRlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJpbWFyeSBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIxXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIyXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEZXZpY2UgQ2F0ZWdvcnlcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRGV2aWNlIERlc2NyaXB0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWFudWZhY3R1cmVyIERldGFpbHNcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSW1wb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGJcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGlzdHJpYnV0b3IgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGNcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRnVydGhlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFdmVudCBEZXNjcmlwdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCI1XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjZcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhlYWx0aGNhcmUgRmFjaWxpdHkgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI3XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYXN1YWx0eSBBc3Nlc3NtZW50XCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjhcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlByb2R1Y3QgT3duZXIncyBJbnZlc3RpZ2F0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjlcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBBZHJSZXBvcnRpbmcsIE1lZGljYWxEZXZpY2VSZXBvcnRpbmcgfTtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBtYXBzXHJcbmltcG9ydCB7XHJcbiAgQURScmVwb3J0aW5nX3BvcnRhbE1hcCxcclxuICBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCxcclxufSBmcm9tIFwiLi9Gb3JtTWFwXCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTmF2aWdhdGlvblBhbmVsUHJvcHMgfSBmcm9tIFwifi90eXBlcy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvblBhbmVsID0gKHByb3BzOiBOYXZpZ2F0aW9uUGFuZWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICBjb25zdCBbbmV4dFBhZ2UsIHNldE5leHRQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3ByZXZpb3VzUGFnZSwgc2V0UHJldmlvdXNQYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2lzTGFzdFBhZ2UsIHNldElzTGFzdFBhZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0ZpcnN0UGFnZSwgc2V0SXNGaXJzdFBhZ2VdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKTtcclxuICBjb25zdCBwYWdlVHlwZSA9XHJcbiAgICBjdXJyZW50TG9jYXRpb25bMV0gPT09IFwiYWRyLXJlcG9ydGluZ1wiXHJcbiAgICAgID8geyBsaW5rOiBcIi9hZHItcmVwb3J0aW5nL1wiLCBtYXBSb3V0ZTogQURScmVwb3J0aW5nX3BvcnRhbE1hcCB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgbGluazogXCIvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nL1wiLFxyXG4gICAgICAgICAgbWFwUm91dGU6IE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gICAgICAgIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBkZWZhdWx0IHNldHRpbmdzIG9uIGV2ZXJ5IHBhZ2UgcmVuZGVyXHJcbiAgICBzZXRJc0ZpcnN0UGFnZShmYWxzZSk7XHJcbiAgICBzZXRJc0xhc3RQYWdlKGZhbHNlKTtcclxuXHJcbiAgICBmb3IgKGxldCByb3V0ZSA9IDA7IHJvdXRlIDwgcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoOyByb3V0ZSsrKSB7XHJcbiAgICAgIGlmIChwcm9wcy5jdXJyZW50Um91dGUgPT09IHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlXSkge1xyXG4gICAgICAgIGlmIChyb3V0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0SXNGaXJzdFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlICsgMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXCIvXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUgPT09IHBhZ2VUeXBlLm1hcFJvdXRlLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgIHNldElzTGFzdFBhZ2UodHJ1ZSk7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShwYWdlVHlwZSArIFwic3VibWl0XCIpO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXNQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgLSAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlIDwgcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoIC0gMSAmJiByb3V0ZSAhPSAwKSB7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlICsgMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXHJcbiAgICAgICAgICAgIHBhZ2VUeXBlLmxpbmsgKyBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZSAtIDFdLnNwbGl0KFwiXCIpLmpvaW4oXCIvXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgdy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPExpbmsgdG89e3ByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyNFODU5MENdIGhvdmVyOnNoYWRvdy14bCBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNGaXJzdFBhZ2UgPyBcIkhvbWVcIiA6IFwiUHJldmlvdXNcIn1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7LyogPExpbmsgdG89e25leHRQYWdlfT4gKi99XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyNFODU5MENdIHRleHQtd2hpdGUgaG92ZXI6c2hhZG93LXhsIHAtMiB3LTMyXCJcclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpc0xhc3RQYWdlID8gXCJTdWJtaXRcIiA6IFwiTmV4dFwifVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHsvKiA8L0xpbms+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uUGFuZWw7XHJcbiIsICJjb25zdCBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwID0gW1xyXG4gIFwiMVwiLFxyXG4gIFwiMlwiLFxyXG4gIFwiM1wiLFxyXG4gIFwiM2JcIixcclxuICBcIjNjXCIsXHJcbiAgXCIzZFwiLFxyXG4gIFwiM2VcIixcclxuICBcIjNmXCIsXHJcbiAgXCIzZjJcIixcclxuICBcIjNmM1wiLFxyXG4gIFwiM2Y0XCIsXHJcbiAgXCIzZjVcIixcclxuICBcIjNnXCIsXHJcbiAgXCIzaFwiLFxyXG4gIFwiM2lcIixcclxuICBcIjNqXCIsXHJcbiAgXCI0XCIsXHJcbl07XHJcblxyXG5jb25zdCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCA9IFtcclxuICBcIjFcIixcclxuICBcIjJcIixcclxuICBcIjNcIixcclxuICBcIjRcIixcclxuICBcIjRiXCIsXHJcbiAgXCI0Y1wiLFxyXG4gIFwiNGRcIixcclxuICBcIjVcIixcclxuICBcIjZcIixcclxuICBcIjdcIixcclxuICBcIjhcIixcclxuICBcIjlcIlxyXG5dO1xyXG5cclxuZXhwb3J0IHsgQURScmVwb3J0aW5nX3BvcnRhbE1hcCwgTWVkaWNhbERldmljZVJlcG9ydGluZ19wb3J0YWxNYXAgfTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xKCkge1xyXG4gIGNvbnN0IFtyZXBvcnRlclR5cGUsIHNldFJlcG9ydGVyVHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwibWFudWZhY3R1cmVyXCIpO1xyXG4gIGNvbnN0IGNoYW5nZWRSZXBvcnRlclR5cGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRSZXBvcnRlclR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5SZXBvcnRlciBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUeXBlIG9mIFJlcG9ydGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VkUmVwb3J0ZXJUeXBlKGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1wibWFudWZhY3R1cmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTWFudWZhY3R1cmVyXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1wiaW1wb3J0ZXJcIn0gY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgSW1wb3J0ZXJcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJkaXN0cmlidXRvclwifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dG9yXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1wicGF0aWVudHNcIn0gY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgUGF0aWVudHNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJoZWFsdGhjYXJlcHJvZmVzc2lvbmFsc1wifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhlYWx0aGNhcmUgUHJvZmVzc2lvbmFsXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIklmIE90aGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIYXMgdGhlIHJlcG9ydGVyIGluZm9ybWVkIHRoZSBpbmNpZGVudCB0byB0aGUgbWFudWZhY3R1cmVyP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZXBvcnRlclR5cGUgPT09IFwibWFudWZhY3R1cmVyXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIERvbnQgS25vd1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIklzIHRoZSByZXBvcnRlciBhbHNvIHN1Ym1pdHRpbmcgdGhlIHJlcG9ydCBvbiBiZWhhbGYgb2YgdGhlIG1hbnVmYWN0dXJlcj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVwb3J0ZXJUeXBlID09PSBcIm1hbnVmYWN0dXJlclwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBOb1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBEb250IEtub3dcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRW1haWwgSURcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjJcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTggdGV4dC1bMzVweF0gdGV4dC1bIzZDNTY3Ql1cIj5cclxuICAgICAgICBNZWRpY2FsIERldmljZSBBRFIgUmVwb3J0aW5nXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGdyaWQgZ3JpZC1jb2xzLTEyIGdhcC01IHB4LTE2IHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IHAtMlwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE9wdGlvbjEgZnJvbSBcIi4vc3ViZm9ybXMvb3B0aW9uMVwiO1xyXG5pbXBvcnQgT3B0aW9uMiBmcm9tIFwiLi9zdWJmb3Jtcy9vcHRpb24yXCI7XHJcbmltcG9ydCBPcHRpb24zIGZyb20gXCIuL3N1YmZvcm1zL29wdGlvbjNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U5KCkge1xyXG4gIGNvbnN0IFtvcHQxLCBzZXRPcHQxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0Miwgc2V0T3B0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdDMsIHNldE9wdDNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS00IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkRldmljZSBDYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1lZGljYWwgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0Mih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXsyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge29wdDEgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uMVwiPlxyXG4gICAgICAgICAgPE9wdGlvbjEgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtvcHQyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbjJcIj5cclxuICAgICAgICAgIDxPcHRpb24yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7b3B0MyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb24zXCI+XHJcbiAgICAgICAgICA8T3B0aW9uMyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBPcHRpb24xKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk1lZGljYWwgRGV2aWNlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlR5cGUgb2YgZGV2aWNlXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgVGhlcmFwZXV0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgRGlhZ25vc3RpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBCb3Roe1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkltcGxhbnRhYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUmV1c2FiaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTaW5nbGUgVXNlIERldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzYWJsZSBkZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2Ugb2YgbWFudWZhY3R1cmVkIG1hcmtlZCBzaW5nbGUgdXNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PlBlcnNvbmFsIHVzZS9ob21lY2FyZSB1c2UgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjE7XHJcbiIsICJpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBPcHRpb24yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBJbiBWaXRybyBEaWFnbm9zdGljc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteS0yIG14LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+S2l0czwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q29udHJvbCBNYXRlcmlhbHMgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5SZWFnZW50czwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+SVZEIEVsZWN0cm9uaWMgUmVhZGVyL0FuYWx5emVyPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5DYWxpYnJhdG9yczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94Pk90aGVyczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMjtcclxuIiwgImltcG9ydCB7IFJhZGlvLCBDaGVja2JveCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBvcHRpb24zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsIHAtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBFcXVpcG1lbnQvTWFjaGluZXNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXF1aXBtZW50IHVzYWdlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgVGhlcmFwZXV0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgRGlhZ25vc3RpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBCb3Roe1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkludmFzaWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IEltYWdpbmcgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTRcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBPdGhlcnMgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3J0ZXIncyBDb21tZW50c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wdGlvbjM7XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+TWFudWZhY3R1cmVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgSW5wdXQsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U1KCkge1xyXG4gIGNvbnN0IFtpc1NlcmlvdXNFdmVudCwgc2V0SXNTZXJpb3VzRXZlbnRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RlYWQsIHNldElzRGVhZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczEgPSBbXHJcbiAgICBcIkhvc3BpdGFsIFByZW1pc2VcIixcclxuICAgIFwiTWFudWZhY3R1cmVyIFByZW1pc2VcIixcclxuICAgIFwiSG9tZVwiLFxyXG4gICAgXCJPdGhlcnNcIixcclxuICBdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczIgPSBbXHJcbiAgICBcIkhlYWx0aGNhcmUgcHJvZmVzc2lvbmFsXCIsXHJcbiAgICBcIlBhdGllbnRcIixcclxuICAgIFwiUHJvYmxlbSBub3RlZCBiZWZvcmUgdXNlXCIsXHJcbiAgICBcIk90aGVyc1wiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMyA9IFtcclxuICAgIFwiUmV0dXJuZWQgdG8gdGhlIGNvbXBhbnlcIixcclxuICAgIFwiSW1wbGFudGVkIGluIHBhdGllbnRcIixcclxuICAgIFwiV2l0aGluIHRoZSBmYWNpbGl0eVwiLFxyXG4gICAgXCJBdCBwYXRpZW50IGhvbWVcIixcclxuICAgIFwiRGVzdHJveWVkXCIsXHJcbiAgICBcIk90aGVyc1wiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNCA9IFtcIlllc1wiLCBcIk5vXCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczUgPSBbXHJcbiAgICBcIkRlYXRoXCIsXHJcbiAgICBcIkxpZmUgVGhyZWF0ZW5pbmdcIixcclxuICAgIFwiRGlzYWJpbGl0eVwiLFxyXG4gICAgXCJIb3NwaXRhbGl6YXRpb25cIixcclxuICAgIFwiQ29uZ2VuaXRhbCBBbm9tYWx5XCIsXHJcbiAgICBcIkFueSBtZWRpY2FsIGV2ZW50XCIsXHJcbiAgICBcIlBlcm1hbmVudCBJbXBhaXJtZW50XCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU2VyaW91c0V2ZW50U3RhdGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcclxuICAgICAgc2V0SXNTZXJpb3VzRXZlbnQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc1NlcmlvdXNFdmVudChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU2VyaW91c0V2ZW50VmFsdWUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiRGVhdGhcIikge1xyXG4gICAgICBzZXRJc0RlYWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0RlYWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkV2ZW50IERlc2NyaXB0aW9uPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBFdmVudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBJbXBsYW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJMb2NhdGlvbiBvZiBldmVudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczF9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGV2aWNlIE9wZXJhdG9yXCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXZpY2UgbG9jYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMzfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgcmV0dXJuXCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJTZXJpb3VzIGV2ZW50P1wifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VTZXJpb3VzRXZlbnRTdGF0ZShlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiUmVhc29uXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1NlcmlvdXNFdmVudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VTZXJpb3VzRXZlbnRWYWx1ZShlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgZGVhdGhcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgZGlzYWJsZWQ9eyFpc0RlYWR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJJcyBkZXZpY2UgaW4gdXNlIGFmdGVyIHRoZSBpbmNpZGVudD9cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM0fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBpbmNpZGVudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgICAgRnJlcXVlbmN5IG9mIG9jY3VycmVuY2Ugb2Ygc2ltaWxhciBhZHZlcnNlIGV2ZW50cyBpbiBJbmRpYVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiWWVhclwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgcGlja2VyPVwieWVhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiTnVtYmVyIG9mIHNpbWlsYXIgZXZlbnRzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUb3RhbCBudW1iZXIgc3VwbGllZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRnJlcXVlbmN5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjJweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgICAgIEZyZXF1ZW5jeSBvZiBvY2N1cnJlbmNlIG9mIHNpbWlsYXIgYWR2ZXJzZSBldmVudHMgZ2xvYmFsbHlcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIlllYXJcIn0gaXNSZXF1aXJlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHBpY2tlcj1cInllYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIk51bWJlciBvZiBzaW1pbGFyIGV2ZW50c1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVG90YWwgbnVtYmVyIHN1cGxpZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkZyZXF1ZW5jeVwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI1XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvLCBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNigpIHtcclxuICBjb25zdCBbaXNSZWNvdmVyZWQsIHNldElzUmVjb3ZlcmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtpc0RlYWQsIHNldElzRGVhZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZURlYXRoRGF0YSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc0RlYWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0RlYWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVJlY292ZXJ5RGF0YSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc1JlY292ZXJlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzUmVjb3ZlcmVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYWRpb09wdGlvbnMxID0gW1wiTWFsZVwiLCBcIkZlbWFsZVwiLCBcIk90aGVyc1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UGF0aWVudCBJbmZvcm1hdGlvbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlBhdGllbnQgSG9zcGl0YWwgTnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlBhdGllbnQgSW5pdGlhbHNcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIkFnZVwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIldlaWdodFwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJTZXhcIn0gaXNSZXF1aXJlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMX1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPdGhlciByZWxldmFudCBoaXN0b3J5LCBpbmNsdWRpbmcgcHJlLWV4aXN0aW5nIG1lZGljYWwgY29uZGl0aW9uc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJIYXMgdGhlIHBhdGllbnQgcmVjb3ZlcmVkP1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VSZWNvdmVyeURhdGEoZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiByZWNvdmVyeVwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17aXNSZWNvdmVyZWQgPT09IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJJcyB0aGUgcGF0aWVudCBkZWFkP1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZWF0aERhdGEoZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBkZWF0aFwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBkaXNhYmxlZD17aXNEZWFkID09PSBmYWxzZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiT3RoZXIgcGF0aWVudCBvdXRjb21lc1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI2XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSGVhbHRoY2FyZSBGYWNpbGl0eSBEZXRhaWxzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiTmFtZVwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIkFkZHJlc3NcIn0gaXNSZXF1aXJlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkNvbnRhY3QgTnVtYmVyIG9mIFBlcnNvbiBhdCB0aGUgc2l0ZSBvZiBldmVudFwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUZWxlcGhvbmUgTnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjdcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlOCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5DYXN1YWx0eSBBc3Nlc3NtZW50PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnZlc3RpZ2F0aW9uIGFjdGlvbiB0YWtlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSb290IGNhdXNlIG9mIHByb2JsZW1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI4XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTkoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFByb2R1Y3QgT3duZXIncyBJbnZlc3RpZ2F0aW9uXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByb2R1Y3QgT3duZXJzIGRldmljZSByaXNrIGFuYWx5c2lzIHJlcG9ydFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb3JyZWN0aXZlIC8gcHJldmVudGl2ZSBhY3Rpb24gdGFrZW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGV2aWNlIGhpc3RvcnkgcmV2aWV3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiOVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5JbXBvcnRlciBEZXRhaWxzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0YlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5EaXN0cmlidXRvciBkZXRhaWxzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0Y1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTRkKCkge1xyXG4gIGNvbnN0IFtyZWd1bGF0ZWRJbkluZGlhLCBzZXRSZWd1bGF0ZWRJbkluZGlhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW2F2YWlsYWJpbGl0eVZhbHVlLCBzZXRBdmFpbGFiaWxpdHlWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IFt1c2FnZVBlck1hbnVmYWN0dXJlciwgc2V0VXNhZ2VQZXJNYW51ZmFjdHVyZXJdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlU3RhdGVPZlJhZGlvID0gKHJhZGlvSWRlbnRpZmllcjogc3RyaW5nLCByYWRpb1ZhbHVlOiBhbnkpID0+IHtcclxuICAgIGlmIChyYWRpb0lkZW50aWZpZXIgPT09IFwiMVwiKSB7XHJcbiAgICAgIHNldFJlZ3VsYXRlZEluSW5kaWEocmFkaW9WYWx1ZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJhZGlvSWRlbnRpZmllciA9PT0gXCIyXCIpIHtcclxuICAgICAgc2V0QXZhaWxhYmlsaXR5VmFsdWUocmFkaW9WYWx1ZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJhZGlvSWRlbnRpZmllciA9PT0gXCIzXCIpIHtcclxuICAgICAgc2V0VXNhZ2VQZXJNYW51ZmFjdHVyZXIocmFkaW9WYWx1ZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczEgPSBbXCJZZXNcIiwgXCJOb1wiLCBcIkRvbid0IGtub3dcIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMiA9IFtcIkFcIiwgXCJCXCIsIFwiQ1wiLCBcIkRcIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMyA9IFtcIlllc1wiLCBcIk5vXCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczQgPSBbXHJcbiAgICBcIkRlc3Ryb3llZFwiLFxyXG4gICAgXCJTdGlsbCBpbiB1c2VcIixcclxuICAgIFwiUmV0dXJuZWQgdG8gbWFudWZhY3R1cmVyIG9yIGltcG9ydGVyXCIsXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5GdXJ0aGVyIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIklzIHRoZSBkZXZpY2Ugbm90aWZpZWQvcmVndWxhdGVkIGluIEluZGlhP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMX1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cmVndWxhdGVkSW5JbmRpYX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVN0YXRlT2ZSYWRpbyhcIjFcIiwgZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXZpY2UgUmlzayBDbGFzc2lmaWNhdGlvbiBhcyBwZXIgSW5kaWEgTURSIDIwMTdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDYXRhbG9ndWUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJNb2RlbCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJCYXRjaCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlcmlhbCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU29mdHdhcmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFjY2Vzc29yaWVzL0Fzc29jaWF0ZWQgRGV2aWNlc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJHTUROIENvZGUgJmFtcDsgR01ETiBUZXJtXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJVREkgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnN0YWxsYXRpb24gRGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkV4cGlyYXRpb24gRGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxhc3QgQ2FsaWJyYXRpb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFnZSBvZiBkZXZpY2UgZnJvbSBkYXRlIG9mIG1hbnVmYWN0dXJpbmdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSG93IGxvbmcgd2FzIGRldmljZSBpbiB1c2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXZhaWxhYmlsaXR5IG9mIGRldmljZSBmb3IgZXZhbHVhdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczNbMF19XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthdmFpbGFiaWxpdHlWYWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMlwiLCBlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoYXQgaXMgdGhlIHN0YXR1cyBvZiB0aGUgZGV2aWNlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthdmFpbGFiaWxpdHlWYWx1ZSA9PT0gXCJOb1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIHVzYWdlIG9mIGRldmljZSBhcyBwZXIgbWFudWZhY3R1cmVyXHUyMDE5cyBjbGFpbXMvaW5zdHJ1Y3Rpb25zIGZvciB1c2UvdXNlciBtYW51YWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMzfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNhZ2VQZXJNYW51ZmFjdHVyZXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZVN0YXRlT2ZSYWRpbyhcIjNcIiwgZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTcGVjaWZ5IHVzYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2FnZVBlck1hbnVmYWN0dXJlciA9PT0gXCJOb1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVndWxhdG9yIC8gUmVndWxhdG9yeSBzdGF0dXMgaW4gY291bnRyeSBvZiBvcmlnaW5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlZ3VsYXRlZEluSW5kaWEgPT09IFwiWWVzXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNGRcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmMSgpIHtcclxuICBjb25zdCBSYWRpb09wdGlvbnMgPSBbXCJZZXNcIiwgXCJOb1wiLCBcIkRvbid0IGtub3dcIl07XHJcbiAgY29uc3QgZm9ybUxheW91dCA9IFtcclxuICAgIFwiQXJlIHRoZXJlIHByZXZpb3VzIGNvbmNsdXNpb24gcmVwb3J0cyBvbiB0aGlzIHJlYWN0aW9uP1wiLFxyXG4gICAgXCJBcmUgdGhlcmUgcHJldmlvdXMgY29uY2x1c2lvbiByZXBvcnRzIG9uIHRoaXMgcmVhY3Rpb24/XCIsXHJcbiAgICBcIkRpZCB0aGUgYWR2ZXJzZSBldmVudCBhcHBlYXIgYWZ0ZXIgdGhlIHN1c3BlY3QgZHJ1ZyB3YXMgYWRtaW5pc3RlcmVkP1wiLFxyXG4gICAgXCJEaWQgdGhlIEFSIGltcHJvdmUgd2hlbiB0aGUgZHJ1ZyB3YXMgZGlzY29udGludWVkIG9yIGEgc3BlY2lmaWMgYW50YWdvbmlzdCB3YXMgYWRtaW5pc3RlcmVkP1wiLFxyXG4gICAgXCJEaWQgdGhlIEFSIHJlYXBwZWFyIHdoZW4gZHJ1ZyB3YXMgcmUtYWRtaW5pc3RlcmVkP1wiLFxyXG4gICAgXCJBcmUgdGhlcmUgYWx0ZXJuYXRlIGNhdXNlcyBbb3RoZXIgdGhhbiB0aGUgZHJ1Z10gdGhhdCBjb3VsZCBzb2xlbHkgaGF2ZSBjYXVzZWQgdGhlIHJlYWN0aW9uP1wiLFxyXG4gICAgXCJEaWQgdGhlIHJlYWN0aW9uIHJlYXBwZWFyIHdoZW4gYSBwbGFjZWJvIHdhcyBnaXZlbj9cIixcclxuICAgIFwiV2FzIHRoZSBkcnVnIGRldGVjdGVkIGluIHRoZSBibG9vZCBbb3Igb3RoZXIgZmx1aWRzXSBpbiBhIGNvbmNlbnRyYXRpb24ga25vd24gdG8gYmUgdG94aWM/XCIsXHJcbiAgICBcIldhcyB0aGUgcmVhY3Rpb24gbW9yZSBzZXZlcmUgd2hlbiB0aGUgZG9zZSB3YXMgaW5jcmVhc2VkIG9yIGxlc3Mgc2V2ZXJlIHdoZW4gdGhlIGRvc2Ugd2FzIGRlY3JlYXNlZD9cIixcclxuICAgIFwiRGlkIHRoZSBwYXRpZW50IGhhdmUgYSBzaW1pbGFyIHJlYWN0aW9uIHRvIHRoZSBzYW1lIG9yIHNpbWlsYXIgZHJ1Z3MgaW4gYW55IHByZXZpb3VzIGV4cG9zdXJlP1wiLFxyXG4gICAgXCJXYXMgdGhlIGFkdmVyc2UgZXZlbnQgY29uZmlybWVkIGJ5IG9iamVjdGl2ZSBldmlkZW5jZT9cIixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNmXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ10gcGItNVwiPlxyXG4gICAgICAgICAgICAgIE5hcmFuam9cdTIwMTlzIFNjYWxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Zm9ybUxheW91dC5tYXAoKGZpZWxkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPXtmaWVsZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgb3B0aW9ucz17UmFkaW9PcHRpb25zfSBvcHRpb25UeXBlPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHsvKiBjYWxjdWxhdGVkIHNjb3JlIGZvciB0aGUgQURSIGlzIGRpc3BsYXllZCBoZXJlICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSB0ZXh0LWJsYWNrIGRhcms6dGV4dC1ncmF5LTIwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAteC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LVsjNkM1NjdCXSBwLTAgbS0wXCI+UHJvYmFibGUgQURSPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql0gcC0wIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBTY29yZSBpcyBkeW5hbWljYWxseSBjYWxjdWxhdGVkICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bFwiPjA3PC9zcGFuPi8xMFxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmb250LWJvbGQgbS0wIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+UmVzdWx0PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIGNsYXNzTmFtZT1cIm10LTEgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LWF1dG8gZm9udC1ib2xkXCI+U2NvcmU8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgRm9ybSwgU2VsZWN0LCBDaGVja2JveCwgSW5wdXROdW1iZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgcmVkdXggcmVkdWNlcnNcclxuaW1wb3J0IHsgUm9vdFN0YXRlIH0gZnJvbSBcIn4vc3RhdGVzL3N0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzZXROZXdGb3JtRGF0YSB9IGZyb20gXCJ+L3N0YXRlcy9TbGljZXMvQWRyUmVwb3J0aW5nRm9ybS8xXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTEoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGZvcm1TdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUm9vdFN0YXRlKSA9PiBzdGF0ZS5mb3JtMXBhZ2UxKTtcclxuICBjb25zdCBjaGFuZ2VGb3JtRGF0YSA9ICh2YWx1ZTogYW55LCBmaWVsZE5hbWU6IGFueSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0TmV3Rm9ybURhdGEoeyBmaWVsZE5hbWUsIHZhbHVlIH0pKTtcclxuICB9O1xyXG5cclxuICAvLyBvcHRpb25zIGZvciBmb3JtIGl0ZW1zXHJcbiAgY29uc3QgZ2VuZGVyT3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiTWFsZVwiLCB2YWx1ZTogXCJtYWxlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiRmVtYWxlXCIsIHZhbHVlOiBcImZlbWFsZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIk90aGVyXCIsIHZhbHVlOiBcIm90aGVyXCIgfSxcclxuICBdO1xyXG4gIGNvbnN0IGFkdmlzZWRNZWRpY2luZU9wdGlvbnMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIkRvY3RvclwiLCB2YWx1ZTogXCJkb2N0b3JcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJQaGFybWFjaXN0XCIsIHZhbHVlOiBcInBoYXJtYWNpc3RcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJGcmllbmRzXCIsIHZhbHVlOiBcImZyaWVuZHNcIiB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJTZWxmIChwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXCIsXHJcbiAgICAgIHZhbHVlOiBcInNlbGYocGFzdCBkaXNlYXNlIGV4cGVyaWVuY2VkKVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiU2VsZiAobm8gcGFzdCBkaXNlYXNlIGV4cGVyaWVuY2VkKVwiLFxyXG4gICAgICB2YWx1ZTogXCJzZWxmKG5vIHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UxXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UGF0aWVudCBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhdGllbnQgSW5pdGlhbHNcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXRpZW50SW5pdGlhbHNcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBhdGllbnQgaW5pdGlhbHMgaXMgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIEJpcnRoXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJEYXRlT2ZCaXJ0aFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkFnZSBvZiBPbnNldFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiYWdlT2ZPbnNldFwiXHJcbiAgICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgICB7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkFnZSBvZiBvbnNldCBpcyByZXF1aXJlZFwiIH0sXHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dE51bWJlciBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJHZW5kZXJcIiBuYW1lPVwiZ2VuZGVyXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VsZWN0IGFsbG93Q2xlYXIgb3B0aW9ucz17Z2VuZGVyT3B0aW9uc30gLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cInctZnVsbFwiIGxhYmVsPVwiV2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0TnVtYmVyIGFkZG9uQWZ0ZXI9e1wibWdzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicGF0aWVudElEXCIgbGFiZWw9XCJQYXRpZW50IElEXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJJUC9PUFwiIG5hbWU9XCJpcF9vcFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIlVuaXRcIiBuYW1lPVwidW5pdFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJSZWFzb24gZm9yIHRha2luZyBtZWRpY2F0aW9uL3ZhY2NpbmF0aW9uXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicmVhc29uRm9yVGFraW5nTWVkaWNhdGlvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiTWVkaWNpbmVzL3ZhY2NpbmVzIGFkdmlzZWQgYnlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJtZWRpY2luZUFkdmlzZWRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy80XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLXgtNSBnYXAteS0yXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2FkdmlzZWRNZWRpY2luZU9wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVkaWNpbmVBZHZpc2VkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBsYWJlbD1cIktub3duIEFsbGVyZ2llc1wiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImtub3duQWxsZXJnaWVzXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiU29jaWFsIEhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzb2NpYWxIaXN0b3J5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIxXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIEltcG9ydCBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBCdXR0b24sIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UyXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+U3VzcGVjdGVkIEFkdmVyc2UgUmVhY3Rpb248L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIHJlYWN0aW9uIHN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlT2ZSZWFjdGlvblN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJEYXRlIG9mIHJlYWN0aW9uIHN0YXJ0ZWRcIiB9XX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgb2YgcmVjb3ZlcnlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJkYXRlT2ZSZWNvdmVyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkRlc2NyaWJlIHJlYWN0aW9uIG9yIHByb2JsZW1cIlxyXG4gICAgICAgICAgICBuYW1lPVwicmVhY3Rpb25EZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJSZWFjdGlvbiBkZXNjcmlwdGlvbiBpcyBtYW5kYXRvcnlcIiB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIEZvcm0sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMygpIHtcclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPk1lZGljYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPFN1YmZvcm0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1YmZvcm0oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtXHJcbiAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzXCJcclxuICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgPlxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICBsYWJlbD1cIk5hbWUgKEJyYW5kL0dlbmVyaWMpXCJcclxuICAgICAgICBuYW1lPVwibmFtZU9mRHJ1Z1wiXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIkRydWcgbmFtZSBpcyBtYW5kYXRvcnlcIiB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCByZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cIm1hbnVmYWN0dXJlclwiIGxhYmVsPVwiTWFudWZhY3R1cmVyXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBsYWJlbD1cIkJhdGNoIE5vLiAvIExvdCBOby5cIlxyXG4gICAgICAgICAgbmFtZT1cIkJhdGNoTm9fTG90Tm9cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNVwiPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImV4cERhdGVcIiBsYWJlbD1cIkV4cC4gRGF0ZVwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJkb3NlVXNlZFwiIGxhYmVsPVwiRG9zZSB1c2VkXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT17XCJudW1iZXJcIn0gc3VmZml4PVwia2dzXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJyb3V0ZVVzZWRcIiBsYWJlbD1cIlJvdXRlIHVzZWRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiaXBfb3BcIiBsYWJlbD1cIklQX09QXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJ1bml0XCIgbGFiZWw9XCJVbml0XCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBuYW1lPVwiZnJlcXVlbmN5XCJcclxuICAgICAgICBsYWJlbD1cIkZyZXF1ZW5jeSAoT0QsIEJELCBldGMuKVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiZGF0ZVN0YXJ0ZWRcIiBsYWJlbD1cIkRhdGUgc3RhcnRlZFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5hbWU9XCJkYXRlU3RvcHBlZFwiIGxhYmVsPVwiRGF0ZSBzdG9wcGVkXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwiSW5kaWNhdGlvblwiIGxhYmVsPVwiSW5kaWNhdGlvblwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2QzU2N0JdIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyM2QzU2N0JdIGhvdmVyOmJnLVsjRTg1OTBDXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1bI0U4NTkwQ11cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIEltcG9ydCBBbnQgRGVzaWduXHJcbmltcG9ydCB7IElucHV0LCBSYWRpbywgRGF0ZVBpY2tlciwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuLy9JbXBvcnQgSW1hZ2VzXHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTRcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlJlcG9ydGVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgICB7LyogRmlyc3QgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFNlY29uZCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIklEIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlBpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFRoaXJkICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJFbWFpbCBJRFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiVGVsLiBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBGb3VydGggKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUHJvZi4gQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBGaWZ0aCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMSB0ZXh0LVsxNnB4XVwiPk9jY3VwYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG5hbWU9XCJvY2N1cGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PlBoeXNpY2lhbjwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezJ9PkRlbnRpc3Q8L1JhZGlvPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXszfT5OdXJzZTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezR9PlBoYXJtYWNpc3Q8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezV9Pk90aGVyczwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICB7LyogU2l4dGggKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGVwYXJ0bWVudFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIFNldmVudGggKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17TnVtYmVyKERhdGUubm93KCkpfSB2YWx1ZSBpcyB0b2RheSdzIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGUgb2YgdGhpcyByZXBvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogRWlnaHRoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSZWZlcmVuY2VzXCIgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogTmludGggKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgY29tbWVudHNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNFwiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvL2ltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgQ29sbGFwc2UsIEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBQYW5lbCB9ID0gQ29sbGFwc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjIoKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQ2VydGFpblwiLFxyXG4gICAgICB2YWx1ZTogXCJjZXJ0YWluXCIsXHJcbiAgICAgIGluZm86IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBub24gdml0YWUgcmF0aW9uZSBxdWlzcXVhbSBhbGlxdWlkIGVzdCBuYXR1cyBmYWNlcmUgaGFydW0gZXJyb3IgY29uc2VjdGV0dXIgaW52ZW50b3JlLCBkb2xvcnVtIHF1aXMgYXNwZXJpb3JlcyBpdXJlIHF1byBlYSEgVWxsYW0sIGJsYW5kaXRpaXMgZXhlcmNpdGF0aW9uZW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJQcm9iYWJseSAvIExpa2VseVwiLFxyXG4gICAgICB2YWx1ZTogXCJwcm9iYWJseS9saWtlbHlcIixcclxuICAgICAgaW5mbzogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDb21tb2RpIG5vbiB2aXRhZSByYXRpb25lIHF1aXNxdWFtIGFsaXF1aWQgZXN0IG5hdHVzIGZhY2VyZSBoYXJ1bSBlcnJvciBjb25zZWN0ZXR1ciBpbnZlbnRvcmUsIGRvbG9ydW0gcXVpcyBhc3BlcmlvcmVzIGl1cmUgcXVvIGVhISBVbGxhbSwgYmxhbmRpdGlpcyBleGVyY2l0YXRpb25lbS5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlBvc3NpYmxlXCIsXHJcbiAgICAgIHZhbHVlOiBcInBvc3NpYmxlXCIsXHJcbiAgICAgIGluZm86IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBub24gdml0YWUgcmF0aW9uZSBxdWlzcXVhbSBhbGlxdWlkIGVzdCBuYXR1cyBmYWNlcmUgaGFydW0gZXJyb3IgY29uc2VjdGV0dXIgaW52ZW50b3JlLCBkb2xvcnVtIHF1aXMgYXNwZXJpb3JlcyBpdXJlIHF1byBlYSEgVWxsYW0sIGJsYW5kaXRpaXMgZXhlcmNpdGF0aW9uZW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJVbmxpa2VseVwiLFxyXG4gICAgICB2YWx1ZTogXCJ1bmxpa2VseVwiLFxyXG4gICAgICBpbmZvOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbW1vZGkgbm9uIHZpdGFlIHJhdGlvbmUgcXVpc3F1YW0gYWxpcXVpZCBlc3QgbmF0dXMgZmFjZXJlIGhhcnVtIGVycm9yIGNvbnNlY3RldHVyIGludmVudG9yZSwgZG9sb3J1bSBxdWlzIGFzcGVyaW9yZXMgaXVyZSBxdW8gZWEhIFVsbGFtLCBibGFuZGl0aWlzIGV4ZXJjaXRhdGlvbmVtLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiQ29uZGl0aW9uYWwgLyBVbmNsYXNzaWZpZWRcIixcclxuICAgICAgdmFsdWU6IFwiY29uZGl0aW9uYWwvdW5jbGFzc2lmaWVkXCIsXHJcbiAgICAgIGluZm86IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBub24gdml0YWUgcmF0aW9uZSBxdWlzcXVhbSBhbGlxdWlkIGVzdCBuYXR1cyBmYWNlcmUgaGFydW0gZXJyb3IgY29uc2VjdGV0dXIgaW52ZW50b3JlLCBkb2xvcnVtIHF1aXMgYXNwZXJpb3JlcyBpdXJlIHF1byBlYSEgVWxsYW0sIGJsYW5kaXRpaXMgZXhlcmNpdGF0aW9uZW0uXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJVbi1hc3Nlc3NhYmxlIC8gVW4tY2xhc3NpZmlhYmxlXCIsXHJcbiAgICAgIHZhbHVlOiBcInVuLWFzc2Vzc2FibGUvdW4tY2xhc3NpZmlhYmxlXCIsXHJcbiAgICAgIGluZm86IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ29tbW9kaSBub24gdml0YWUgcmF0aW9uZSBxdWlzcXVhbSBhbGlxdWlkIGVzdCBuYXR1cyBmYWNlcmUgaGFydW0gZXJyb3IgY29uc2VjdGV0dXIgaW52ZW50b3JlLCBkb2xvcnVtIHF1aXMgYXNwZXJpb3JlcyBpdXJlIHF1byBlYSEgVWxsYW0sIGJsYW5kaXRpaXMgZXhlcmNpdGF0aW9uZW0uXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzZjJcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgV0hPIFByb2JhYmlsaXR5IFNjYWxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cIndob1Byb2JhYmlsdHlTY2FsZVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTY2FsZSB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBtYXgtdy1maXQgbXgtYXV0byBtdC0xMCBweC01IHB5LTEgYm9yZGVyLTIgZmxleCBmbGV4LXJvdyByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ10gbXktYXV0byBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIEFzc2VzbWVudCBjcml0ZXJpYVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteS1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUhlbHBDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG15LTRcIj5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBkZWZhdWx0QWN0aXZlS2V5PXtbXCIxXCJdfT5cclxuICAgICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsIGhlYWRlcj17b3B0aW9uLmxhYmVsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntvcHRpb24uaW5mb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2YyXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFJhZGlvLCBQcm9ncmVzcywgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjMoKSB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJMZXZlbCAxXCIsIHZhbHVlOiBcIjFcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCAyXCIsIHZhbHVlOiBcIjJcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCAzXCIsIHZhbHVlOiBcIjNcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCA0XCIsIHZhbHVlOiBcIjRcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCA1XCIsIHZhbHVlOiBcIjVcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCA2XCIsIHZhbHVlOiBcIjZcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJMZXZlbCA3XCIsIHZhbHVlOiBcIjdcIiB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzZjNcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgIEhhcnR3aWcncyBTZXZlcml0eSBBc3Nlc3NtZW50IFNjYWxlXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cImhhcnR3aWdzZXZlcml0eXRlc3RcIiBsYWJlbD1cIlNlbGVjdCBhIGxldmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wIHRleHQtZ3JheS04MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIE1pbGQgTGV2ZWxcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG0tMCBwLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBwZXJjZW50YWdlIHZhbHVlIGR5bmFtaWNcclxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50PXszMH1cclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e1wibm9ybWFsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0luZm89e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtcIiNFODU5MENcIn1cclxuICAgICAgICAgICAgICAgICAgICB0cmFpbENvbG9yPXtcIiNFNUU1RTVcIn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBtYXgtdy1maXQgbXgtYXV0byBtdC0xMCBweC01IHB5LTEgYm9yZGVyLTIgZmxleCBmbGV4LXJvdyByb3VuZGVkLW1kIG1iLTVcIj5cclxuICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdIG15LWF1dG8gbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFzc2VzbWVudCBjcml0ZXJpYVxyXG4gICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbXktYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUhlbHBDaXJjbGUgY2xhc3NOYW1lPVwidGV4dC1ibGFjayBkYXJrOnRleHQtd2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyB0aGF0IHRoZSBzdXNwZWN0ZWQgZHJ1ZyBiZSB3aXRoaGVsZCxcclxuICAgICAgICAgICAgICAgICAgZGlzY29udGludWVkIG9yIG90aGVyd2lzZSBjaGFuZ2VkLiBObyBhbnRpZG90ZSBvciBvdGhlclxyXG4gICAgICAgICAgICAgICAgICB0cmVhdG1lbnQgaXMgcmVxdWlyZWQsIGFuZCB0aGVyZSBpcyBubyBpbmNyZWFzZSBpbiBsZW5ndGggb2ZcclxuICAgICAgICAgICAgICAgICAgc3RheVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgICBkcnVnLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZjNcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRpbywgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjQoKSB7XHJcbiAgY29uc3QgZm9ybVJhZGlvT3B0aW9ucyA9IFtcIlllc1wiLCBcIk5vXCJdO1xyXG4gIGNvbnN0IGZvcm1SYWRpb09wdGlvbnMyID0gW1xyXG4gICAgXCJEZWZpbml0ZWx5IHByZXZlbnRhYmxlXCIsXHJcbiAgICBcIlByb2JhYmx5IHByZXZlbnRhYmxlXCIsXHJcbiAgICBcIk5vdCBwcmV2ZW50YWJsZVwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGZvcm1MYXlvdXQgPSBbXHJcbiAgICBcIldhcyB0aGVyZSBhIGhpc3Rvcnkgb2YgYWxsZXJneSBvciBwcmV2aW91cyByZWFjdGlvbnMgdG8gdGhlIGRydWc/XCIsXHJcbiAgICBcIldhcyB0aGUgZHJ1ZyBpbnZvbHZlZCBpbmFwcHJvcHJpYXRlIGZvciB0aGUgcGF0aWVudFx1MjAxOXMgY2xpbmljYWwgY29uZGl0aW9uP1wiLFxyXG4gICAgXCJXYXMgdGhlIGRvc2UsIHJvdXRlIG9yIGZyZXF1ZW5jeSBvZiBhZG1pbmlzdHJhdGlvbiBpbmFwcHJvcHJpYXRlIGZvciB0aGUgcGF0aWVudFx1MjAxOXMgYWdlLCB3ZWlnaHQgb3IgZGlzZWFzZSBzdGF0ZT9cIixcclxuICAgIFwiV2FzIGEgdG94aWMgc2VydW0gZHJ1ZyBjb25jZW50cmF0aW9uIChvciBsYWJvcmF0b3J5IG1vbml0b3JpbmcgdGVzdCkgZG9jdW1lbnRlZD9cIixcclxuICAgIFwiV2FzIHRoZXJlIGEga25vd24gdHJlYXRtZW50IGZvciB0aGUgYWR2ZXJzZSBkcnVnIHJlYWN0aW9uP1wiLFxyXG4gICAgXCJXYXMgcmVxdWlyZWQgdGhlcmFwZXV0aWMgZHJ1ZyBtb25pdG9yaW5nIG9yIG90aGVyIG5lY2Vzc2FyeSBsYWIgdGVzdHMgbm90IHBlcmZvcm1lZD9cIixcclxuICAgIFwiV2FzIGEgZHJ1ZyBpbnRlcmFjdGlvbiBpbnZvbHZlZCBpbiB0aGUgQURSP1wiLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2Y0XCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgICBNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtmb3JtTGF5b3V0Lm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZpZWxkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBvcHRpb25zPXtmb3JtUmFkaW9PcHRpb25zfSBvcHRpb25UeXBlPVwiYnV0dG9uXCIgLz5cclxuICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gbS0wIGZvbnQtYm9sZCB0ZXh0LWdyYXktODAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICAgICAgRmluYWwgUmVzdWx0XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBvcHRpb25zPXtmb3JtUmFkaW9PcHRpb25zMn0gb3B0aW9uVHlwZT1cImJ1dHRvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZjRcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0LCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IGNoYW5nZUNvbmZpcm1Mb2NhbGUgfSBmcm9tIFwiYW50ZC9saWIvbW9kYWwvbG9jYWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjUoKSB7XHJcbiAgY29uc3QgW3ByZWRpc3Bvc2luZ0ZhY3RvcnNWYWx1ZXMsIHNldFByZWRpc3Bvc2luZ0ZhY3RvcnNWYWx1ZXNdID0gdXNlU3RhdGU8XHJcbiAgICBzdHJpbmdbXVxyXG4gID4oW1wiXCJdKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiQWdlXCIsIHZhbHVlOiBcImFnZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkdlbmRlclwiLCB2YWx1ZTogXCJnZW5kZXJcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJHZW5ldGljXCIsIHZhbHVlOiBcImdlbmV0aWNcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJJbnRlci1jdXJyZW50IGRpc2Vhc2VcIiwgdmFsdWU6IFwiaW50ZXItY3VycmVudCBkaXNlYXNlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiTXVsdGlwbGUgRHJ1ZyBUaGVyYXB5XCIsIHZhbHVlOiBcIm11bHRpcGxlIGRydWcgdGhlcmFweVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIk90aGVyXCIsIHZhbHVlOiBcIm90aGVyXCIgfSxcclxuICBdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiUHJlZGljdGFibGVcIiwgdmFsdWU6IFwicHJlZGljdGFibGVcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJOb3QgUHJlZGljdGFibGVcIiwgdmFsdWU6IFwibm90UHJlZGljdGFibGVcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ2hlY2tCb3hHcm91cCA9ICh2YWx1ZXM6IGFueVtdKSA9PiB7XHJcbiAgICBzZXRQcmVkaXNwb3NpbmdGYWN0b3JzVmFsdWVzKHZhbHVlcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzZjVcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UHJlZGljdGFiaWxpdHk8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwcmVkaWN0YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQcmVkaWN0YWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgICBQcmVkaXNwb3NpbmcgZmFjdG9yc1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicHJlZGlzcG9zaW5nRmFjdG9yc1wiIGxhYmVsPVwiUHJlZGlzcG9zaW5nIGZhY3RvcnNcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXBcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlQ2hlY2tCb3hHcm91cChlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJvdGhlckluZm9ybWF0aW9uXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIklmIG90aGVyLCBtZW50aW9uIHRoZSBmYWN0b3JcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByZWRpc3Bvc2luZ0ZhY3RvcnNWYWx1ZXMuaW5jbHVkZXMoXCJvdGhlclwiKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2Y1XCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuaW1wb3J0IHsgUmFkaW8sIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2EoKSB7XHJcbiAgLy90ZW1wb3JhcnkgdmFyaWFibGVcclxuICBjb25zdCBkcnVncyA9IFtcImRydWcxXCIsIFwiZHJ1ZzJcIiwgXCJkcnVnM1wiXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzYlwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkFjdGlvbiBUYWtlbjwvZGl2PlxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIGRydWdPcHRpb25zPXtkcnVnc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2JcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKHByb3BzOiB7IGRydWdPcHRpb25zOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJEcnVnIHdpdGhkcmF3blwiLFxyXG4gICAgXCJEb3NlIGluY3JlYXNlZFwiLFxyXG4gICAgXCJEb3NlIHJlZHVjZWRcIixcclxuICAgIFwiRG9zZSBub3QgY2hhbmdlZFwiLFxyXG4gICAgXCJOb3QgYXBwbGljYWJsZVwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb0ZpZWxkcyA9IHByb3BzLmRydWdPcHRpb25zLm1hcCgoZHJ1ZywgaW5kZXgpID0+IChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17ZHJ1Z30gbGFiZWw9e2RydWd9IGNsYXNzTmFtZT1cInctZnVsbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGb3JtLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIC8vdGVtcG9yYXJ5IHZhcmlhYmxlXHJcbiAgY29uc3QgZHJ1Z3MgPSBbXCJkcnVnMVwiLCBcImRydWcyXCIsIFwiZHJ1ZzNcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2NcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5EZWNoYWxsZW5nZTwvZGl2PlxyXG4gICAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIGRydWdPcHRpb25zPXtkcnVnc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2NcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKHByb3BzOiB7IGRydWdPcHRpb25zOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJEcnVnIHdpdGhkcmF3blwiLFxyXG4gICAgXCJEb3NlIGluY3JlYXNlZFwiLFxyXG4gICAgXCJEb3NlIHJlZHVjZWRcIixcclxuICAgIFwiRG9zZSBub3QgY2hhbmdlZFwiLFxyXG4gICAgXCJOb3QgYXBwbGljYWJsZVwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb0ZpZWxkcyA9IHByb3BzLmRydWdPcHRpb25zLm1hcCgoZHJ1ZywgaW5kZXgpID0+IChcclxuICAgIDxGb3JtLkl0ZW0gbmFtZT17ZHJ1Z30gbGFiZWw9e2RydWd9IGNsYXNzTmFtZT1cInctZnVsbFwiIGtleT17aW5kZXh9PlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICAvL3RlbXBvcmFyeSB2YXJpYWJsZVxyXG4gIGNvbnN0IGRydWdzID0gW1wiZHJ1ZzFcIiwgXCJkcnVnMlwiLCBcImRydWczXCJdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cIkZvcm0xUGFnZTNkXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7IHJlbWVtYmVyOiB0cnVlIH19XHJcbiAgICAgICAgb25GaW5pc2g9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9XHJcbiAgICAgICAgbGF5b3V0PVwidmVydGljYWxcIlxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UmVjaGFsbGVuZ2U8L2Rpdj5cclxuICAgICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyBkcnVnT3B0aW9ucz17ZHJ1Z3N9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNkXCIgLz5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9IChwcm9wczogeyBkcnVnT3B0aW9uczogc3RyaW5nW10gfSkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIFwiRHJ1ZyB3aXRoZHJhd25cIixcclxuICAgIFwiRG9zZSBpbmNyZWFzZWRcIixcclxuICAgIFwiRG9zZSByZWR1Y2VkXCIsXHJcbiAgICBcIkRvc2Ugbm90IGNoYW5nZWRcIixcclxuICAgIFwiTm90IGFwcGxpY2FibGVcIixcclxuICAgIFwiVW5rbm93blwiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9GaWVsZHMgPSBwcm9wcy5kcnVnT3B0aW9ucy5tYXAoKGRydWcsIGluZGV4KSA9PiAoXHJcbiAgICA8Rm9ybS5JdGVtIG5hbWU9e2RydWd9IGxhYmVsPXtkcnVnfSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBrZXk9e2luZGV4fT5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApKTtcclxuICByZXR1cm4gPD57cmFkaW9GaWVsZHN9PC8+O1xyXG59O1xyXG4iLCAiLypcclxuTm90ZTogXHJcbiAgICBUaGlzIHBhZ2UgbmVlZHMgZml4aW5nLiBcclxuICAgIERvIG5vdCBlZGl0IGl0IGlmIHlvdSBhcmUgbm90IEBjYW5hcnlHcmFwaGVyXHJcblxyXG4qL1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGljb25zXHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSwgRmlQbHVzLCBGaVggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmltcG9ydCB7IFJhZGlvLCBJbnB1dCwgRm9ybSwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNlKCkge1xyXG4gIC8vdGVtcG9yYXJ5IHZhcmlhYmxlXHJcbiAgY29uc3QgZHJ1Z3MgPSBbXCJkcnVnMVwiLCBcImRydWcyXCIsIFwiZHJ1ZzNcIl07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2VcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgICBSZWFjdGlvbiBSZWFwcGVhcmVkIEFmdGVyIFJlLWludHJvZHVjdGlvblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyBkcnVnT3B0aW9ucz17ZHJ1Z3N9IC8+XHJcbiAgICAgICAgICAgIHsvKiBTZWN0aW9uIHRvIGFkZCBkcnVnIGluZm9ybWF0aW9uICovfVxyXG4gICAgICAgICAgICA8QWRkRHJ1Z3NCb3ggLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2VcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKHByb3BzOiB7IGRydWdPcHRpb25zOiBzdHJpbmdbXSB9KSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJObyByZWNoYWxsZW5nZVwiLFxyXG4gICAgXCJSZWN1cnJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIk5vIG9jY3VyYW5jZSBvZiBzeW1wdG9tc1wiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29tcG9uZW50c0ZvckRydWdzID0gcHJvcHMuZHJ1Z09wdGlvbnMubWFwKChkcnVnLCBpbmRleCkgPT4gKFxyXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtkcnVnfSBsYWJlbD17ZHJ1Z30gY2xhc3NOYW1lPVwidy1mdWxsXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPXtcImRydWdEb3NlX1wiICsgZHJ1Z30gbGFiZWw9e1wiRG9zZVwifSBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gPD57Y29tcG9uZW50c0ZvckRydWdzfTwvPjtcclxufTtcclxuXHJcbmNvbnN0IEFkZERydWdzQm94ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwdC0yMVwiXHJcbiAgICAgIG5hbWU9XCJhZGRpdGlvbmFsRHJ1Z3NcIlxyXG4gICAgICBsYWJlbD1cIkFkZCBhIGRydWdcIlxyXG4gICAgPlxyXG4gICAgICA8U2VsZWN0IG1vZGU9XCJ0YWdzXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IHBsYWNlaG9sZGVyPVwiQWRkIGEgZHJ1Z1wiIC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBDaGVja2JveCwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2coKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcIlNwZWNpZmljXCIsIFwiU3ltcHRvbWF0aWNcIiwgXCJOb25lXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2dcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXSBwYi01XCI+XHJcbiAgICAgICAgICAgICAgVHJlYXRtZW50IEdpdmVuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbmFtZT1cInRyZWF0bWVudCBnaXZlblwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTZWxlY3QgdGhlIHRyZWF0bWVudCBnaXZlblwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cCBvcHRpb25zPXtvcHRpb25zfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiVHJlYXRtZW50IGRldGFpbHMgKGlmIGFueSlcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0cmVhdG1lbnREZXRhaWxzXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2dcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2hcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTAgcHktMFwiPkNvbmNvbWl0YW50IG1lZGljYWwgcHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgICAgICAgICBJbmNsdWRpbmcgc2VsZi1tZWRpY2F0aW9uIGFuZCBoZXJiYWwgcmVtZWRpZXMgd2l0aCB0aGVyYXB5IGRhdGVzXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFN1YmZvcm0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2hcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgU3ViZm9ybSA9ICgpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEZvcm0uSXRlbVxyXG4gICAgICBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIHB0LTRcIlxyXG4gICAgICBsYWJlbD1cIk5hbWUgKGJyYW5kL2dlbmVyaWMpXCJcclxuICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCIgbGFiZWw9XCJEb3NlIHVzZWRcIiBuYW1lPVwiZG9zZVVzYWdlXCI+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIiBsYWJlbD1cIlJvdXRlIHVzZWRcIiBuYW1lPVwicm91dGVVc2VkXCI+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Rm9ybS5JdGVtXHJcbiAgICAgIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCJcclxuICAgICAgbGFiZWw9XCJGcmVxdWVuY3kgKE9ELCBCRClcIlxyXG4gICAgICBuYW1lPVwiZnJlcXVlbmN5XCJcclxuICAgID5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiIGxhYmVsPVwiRGF0ZSBzdGFydGVkXCIgbmFtZT1cInN0YXJ0RGF0ZVwiPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIiBsYWJlbD1cIkRhdGUgc3RvcHBlZFwiIG5hbWU9XCJzdG9wRGF0ZVwiPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Rm9ybS5JdGVtIGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCIgbGFiZWw9XCJJbmRpY2F0aW9uXCIgbmFtZT1cImluZGljYXRpb25cIj5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L0Zvcm0uSXRlbT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy0xMDAgcHQtNVwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgU2F2ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2QzU2N0JdIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyM2QzU2N0JdIGhvdmVyOmJnLVsjRTg1OTBDXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1bI0U4NTkwQ11cIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIG1vcmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgRGF0ZVBpY2tlciwgU3dpdGNoLCBDaGVja2JveCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBDaGVja2JveFZhbHVlVHlwZSB9IGZyb20gXCJhbnRkL2xpYi9jaGVja2JveC9Hcm91cFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNpKCkge1xyXG4gIGNvbnN0IFtzZXJpb3VzUmVhY3Rpb24sIHNldFNlcmlvdXNSZWFjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzQXBwbGljYWJsZSwgc2V0SXNBcHBsaWNhYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbc2VyaW91c25lc3NMZXZlbFN0YXRlLCBzZXRTZXJpb3VzbmVzc0xldmVsU3RhdGVdID1cclxuICAgIHVzZVN0YXRlPENoZWNrYm94VmFsdWVUeXBlW10+KCk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNlcmlvdXNuZXNzID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldFNlcmlvdXNSZWFjdGlvbihjaGVja2VkKTtcclxuICB9O1xyXG4gIGNvbnN0IGNoYW5nZUFwcGxpY2FiaWxpdHkgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0SXNBcHBsaWNhYmxlKGNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiUmVjb3ZlcmVkXCIsIHZhbHVlOiBcInJlY292ZXJlZFwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlJlY292ZXJpbmdcIiwgdmFsdWU6IFwicmVjb3ZlcmluZ1wiIH0sXHJcbiAgICB7IGxhYmVsOiBcIk5vdCByZWNvdmVyZWRcIiwgdmFsdWU6IFwibm90UmVjb3ZlcmVkXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiRmF0YWxcIiwgdmFsdWU6IFwiZmF0YWxcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJSZWNvdmVyZWQgd2l0aCBzZXF1ZWxhZVwiLCB2YWx1ZTogXCJyZWNvdmVyZWRXaXRoU2VxdWVsYWVcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJVbmtub3duXCIsIHZhbHVlOiBcInVua25vd25cIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94T3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiQ29uZ2VuaXRhbC1hbm9tYWx5XCIsIHZhbHVlOiBcImNvbmdlbml0YWxBbmFtb2x5XCIgfSxcclxuICAgIHsgbGFiZWw6IFwiTGlmZSBUaHJlYXRlbmluZ1wiLCB2YWx1ZTogXCJsaWZlVGhyZWF0ZW5pbmdcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJIb3NwaXRhbGl6ZWQvUHJvbG9uZ2VkXCIsIHZhbHVlOiBcIkRpc2FiaWxpdHlcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJEaXNhYmlsaXR5XCIsIHZhbHVlOiBcImRpc2FiaWxpdHlcIiB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJSZXF1aXJlZCBpbnRlcnZlbnRpb24gdG8gUHJldmVudCBwZXJtYW5lbnQgaW1wYWlybWVudC9kYW1hZ2VcIixcclxuICAgICAgdmFsdWU6IFwicmVxdWlyZWRJbnRlcnZlbnRpb25cIixcclxuICAgIH0sXHJcbiAgICB7IGxhYmVsOiBcIkRlYXRoXCIsIHZhbHVlOiBcImRlYXRoXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiT3RoZXIgKE1lbnRpb24gYmVsb3cpXCIsIHZhbHVlOiBcIm90aGVyXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJGb3JtMVBhZ2UzaVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdIG1iLTVcIj5BTUMvTkNDIFNlY3Rpb248L2Rpdj5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbmFtZT1cImFwcGxpY2FiaWxpdHlcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkFwcGxpY2FiaWxpdHlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICBjaGVja2VkQ2hpbGRyZW49XCJBcHBsaWNhYmxlXCJcclxuICAgICAgICAgICAgICB1bkNoZWNrZWRDaGlsZHJlbj1cIk5vdCBhcHBsaWNhYmxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17Y2hhbmdlQXBwbGljYWJpbGl0eX1cclxuICAgICAgICAgICAgICBjaGVja2VkPXtpc0FwcGxpY2FibGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgbmFtZT1cImFtY1JlcG9ydE51bWJlclwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQU1DIFJlcG9ydCBOdW1iZXJcIlxyXG4gICAgICAgICAgICByZXF1aXJlZD17aXNBcHBsaWNhYmxlfVxyXG4gICAgICAgICAgICBoaWRkZW49eyFpc0FwcGxpY2FibGV9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJbnB1dCBkaXNhYmxlZD17IWlzQXBwbGljYWJsZX0gLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIldvcmxkd2lkZSBVbmlxdWUgTnVtYmVyXCJcclxuICAgICAgICAgICAgbmFtZT1cIndvcmxkd2lkZVVuaXF1ZU51bWJlclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIHJlcXVpcmVkPXtpc0FwcGxpY2FibGV9XHJcbiAgICAgICAgICAgIGhpZGRlbj17IWlzQXBwbGljYWJsZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXshaXNBcHBsaWNhYmxlfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVsZXZhbnQgdGVzdHMvIGxhYm9yYXRvcnkgZGF0YSB3aXRoIGRhdGVzXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlbGV2YW50VGVzdHNcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUmVsZXZhbnQgbWVkaWNhbC8gbWVkaWNhdGlvbiBoaXN0b3J5IChlLmcuIGFsbGVyZ2llcywgcmFjZSwgXHJcbiAgICAgICAgICAgICAgICBwcmVnbmFuY3ksIHNtb2tpbmcsIGFsY29ob2wgdXNlLCBoZXBhdGljL3JlbmFsIGR5c2Z1bmN0aW9uIGV0Yy4pXCJcclxuICAgICAgICAgICAgbmFtZT1cInJlbGV2YW50TWVkaWNhbEhpc3RvcnlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiV2FzIGl0IGEgc2VyaW91cyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICBuYW1lPVwic2VyaW91c25lc3NPZlRoZVJlYWN0aW9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgIGNoZWNrZWRDaGlsZHJlbj1cIlllc1wiXHJcbiAgICAgICAgICAgICAgdW5DaGVja2VkQ2hpbGRyZW49XCJOb1wiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2NoYW5nZVNlcmlvdXNuZXNzfVxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlcmlvdXNSZWFjdGlvbn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIlNlcmlvdXNuZXNzIGxldmVsXCJcclxuICAgICAgICAgICAgbmFtZT1cInNlcmlvdXNuZXNzTGFiZWxcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBoaWRkZW49eyFzZXJpb3VzUmVhY3Rpb259XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cFxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXshc2VyaW91c1JlYWN0aW9ufVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NoZWNrQm94T3B0aW9uc31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlOiBDaGVja2JveFZhbHVlVHlwZVtdKSA9PlxyXG4gICAgICAgICAgICAgICAgc2V0U2VyaW91c25lc3NMZXZlbFN0YXRlKHZhbHVlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgbGFiZWw9XCJEYXRlIG9mIGRlYXRoXCJcclxuICAgICAgICAgICAgbmFtZT1cImRhdGVPZkRlYXRoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXtcclxuICAgICAgICAgICAgICAhc2VyaW91c1JlYWN0aW9uIHx8ICFzZXJpb3VzbmVzc0xldmVsU3RhdGU/LmluY2x1ZGVzKFwiZGVhdGhcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOlxyXG4gICAgICAgICAgICAgICAgICBzZXJpb3VzUmVhY3Rpb24gJiYgc2VyaW91c25lc3NMZXZlbFN0YXRlPy5pbmNsdWRlcyhcImRlYXRoXCIpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJEYXRlIG9mIGRlYXRoIGlzIHJlcXVpcmVkXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTWVudGlvbiBkZXRhaWxzIG9mIG90aGVyXCJcclxuICAgICAgICAgICAgbmFtZT1cImRhdGVPZkRlYXRoXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgaGlkZGVuPXtcclxuICAgICAgICAgICAgICAhc2VyaW91c1JlYWN0aW9uIHx8ICFzZXJpb3VzbmVzc0xldmVsU3RhdGU/LmluY2x1ZGVzKFwib3RoZXJcIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOlxyXG4gICAgICAgICAgICAgICAgICBzZXJpb3VzUmVhY3Rpb24gJiYgc2VyaW91c25lc3NMZXZlbFN0YXRlPy5pbmNsdWRlcyhcIm90aGVyXCIpLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3UgbmVlZCB0byBtZW50aW9uIG90aGVyIGRldGFpbHNcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwibXktYXV0byBjb2wtc3Bhbi0xMFwiIC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiT3V0Y29tZVwiIG5hbWU9XCJvdXRjb21lXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzaVwiIC8+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEZvcm0sIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2ooKSB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJGYXRhbFwiLFxyXG4gICAgICB2YWx1ZTogXCJmYXRhbFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUmVjb3ZlcnlcIixcclxuICAgICAgdmFsdWU6IFwicmVjb3ZlcnlcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIkNvbnRpbnVpbmdcIixcclxuICAgICAgdmFsdWU6IFwiY29udGludWluZ1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiVW5rbm93blwiLFxyXG4gICAgICB2YWx1ZTogXCJ1bmtub3duXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJPdGhlclwiLFxyXG4gICAgICB2YWx1ZTogXCJvdGhlclwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlM2pcIlxyXG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICBvbkZpbmlzaD17KHZhbHVlcykgPT4gY29uc29sZS5sb2codmFsdWVzKX1cclxuICAgICAgICBsYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgID5cclxuICAgICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk91dGNvbWU8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbSBuYW1lPVwib3V0Y29tZVwiIGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2pcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgSW5wdXQsIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRXllSW52aXNpYmxlT3V0bGluZWQsIEV5ZVR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1sZyB3LTEvMiBtaW4taC0yLzQgbXgtYXV0byBtYi0zMiBwLTEwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIHRleHQtWzM1cHhdXCI+QURSIFBvcnRhbDwvaDE+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy0xLzIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGVtYWlsLmNvbVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1iLTVcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyUGFzc3dvcmRIZXJlXCJcclxuICAgICAgICAgICAgICBpY29uUmVuZGVyPXsodmlzaWJsZSkgPT5cclxuICAgICAgICAgICAgICAgIHZpc2libGUgPyA8RXllVHdvVG9uZSAvPiA6IDxFeWVJbnZpc2libGVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMS8yIGJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC0yXCI+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy0zLzQgbWluLWgtMy80IG14LWF1dG8gcC0xMCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bFwiPlNlbGVjdCBhIGZvcm0gdG8gZmlsbDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMSBnYXAtNVwiPlxyXG4gICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgcm91dGU9XCJhZHItcmVwb3J0aW5nLzFcIlxyXG4gICAgICAgICAgICBpbWFnZT1cIjFcIlxyXG4gICAgICAgICAgICBuYW1lPVwiQURSIFJlcG9ydGluZyBGb3JtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZFNlbGVjdFxyXG4gICAgICAgICAgICByb3V0ZT1cIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xXCJcclxuICAgICAgICAgICAgaW1hZ2U9XCIyXCJcclxuICAgICAgICAgICAgbmFtZT1cIk1lZGljYWwgRGV2aWNlIEFEUiBSZXBvcnRpbmcgRm9ybVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IENhcmRTZWxlY3QgPSAocHJvcHM6IHsgbmFtZTogc3RyaW5nOyByb3V0ZTogc3RyaW5nOyBpbWFnZT86IHN0cmluZyB9KSA9PiAoXHJcbiAgPExpbmsgdG89e3Byb3BzLnJvdXRlfSBjbGFzc05hbWU9XCJcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTIgcm91bmRlZC1sZyBib3JkZXItZ3JheS00MDAgcC0zIGgtZnVsbCBob3ZlcjpzY2FsZS0xMDUgZHVyYXRpb24tNzVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGFsdD1cIlBsYWNlaG9sZGVyIGltYWdlXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0zLzQgdy1mdWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQteGwgdGV4dC1ibGFjayBwdC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJvcHMubmFtZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9MaW5rPlxyXG4pO1xyXG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonOWM0OTg5YjEnLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVBTVU5HRDNJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MWTRTRUdXVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxZQldRNlJYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSk1ESzdFUEguanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LU1GVFhFSEJILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1HVjNJTFhKMi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVVGUU0zVEpSLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8xL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8xL2luZGV4LTdDUU9LMjdWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMi9pbmRleC1TTEFJUlRDQS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iLURRTkpXTFRZLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MtRVpFWDI3NlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZC0yQlZIVVRLMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lLU9VVkVTR0NRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMic6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mLzInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMi1YRURYRDdPNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzMnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi8zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzMtNENJQk5WMzYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvNCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80LUQ2UUdPR1g1LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNSc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi81JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mLzUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNS0zRkVBWUM3SC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleC1VUzJISUhRUi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nLUQ1RUpGUVNDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gtQUtFT01FRkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaSc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvaScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaS1LVU9MUU00Ni5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaW5kZXgtNlBTTkc1UVguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaic6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvaicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvai1ZNVBENUYyWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWk5RSFFOTlAuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy80JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgtQ1pMU1hBVVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FRlBTRFVRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVVKM0c0NzNJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luL2luZGV4LUpMRlNYV0ZFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4LUU0SUUzU05HLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgtVzJEVUFCREUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFWTU9NRUZMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FRlBTRFVRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleC1aRkxETUJVUC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWVRIUFM0VFQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GS0JBSFVBWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVFMTFVDVVo0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUVZNT01FRkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVGUFNEVVFZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMSc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMS1CQjRGSlBLMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstWVRIUFM0VFQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FRlBTRFVRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjInOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjItVElGVVNNWUEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUZLQkFIVUFZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMtRTJSTEdFTFYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFMTFVDVVo0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iLU9OQVhKM0NGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jLVhEVzZOSTJHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kLTZXVlpSWEhWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1aTlFIUU5OUC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgtQ1ZBMlZRTUguanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVpOUUhRTk5QLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FRlBTRFVRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleC1XS1VQVU9HTS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVZNT01FRkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVGUFNEVVFZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4LVNaNzNQTlBQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RVk1PTUVGTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgtMzdQNzVTRzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLVFWTU9NRUZMLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRTJURUhKRkEuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FRlBTRFVRWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUhOR1g1T09ULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleC1ZRDM1RlZGSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstUVZNT01FRkwuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FMlRFSEpGQS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUVGUFNEVVFZLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSE5HWDVPT1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzknLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4LVFVTVZFUERKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1RVk1PTUVGTC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUUyVEVISkZBLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRUZQU0RVUVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1ITkdYNU9PVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOUM0OTg5QjEuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxL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Q2pDLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUloQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWhCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBS2hCLElBQU0seUJBQXVDO0FBQUEsRUFDM0MsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7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
