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
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow-x-hidden"
  }, /* @__PURE__ */ import_react.default.createElement(import_react_redux.Provider, {
    store
  }, /* @__PURE__ */ import_react.default.createElement(Navbar, null), children));
};
var root_default = RootLayout;

// app/styles/app.css
var app_default = "/build/_assets/app-45UBYXEQ.css";

// app/styles/global.css
var global_default = "/build/_assets/global-ZXTBFUSW.css";

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
      className: "border-2 border-[#6C567B] bg-[#6C567B] rounded-full h-7 w-7 text-center text-white flex flex-col justify-center"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: "",
      className: "text-white"
    }, /* @__PURE__ */ React.createElement(import_fi2.FiCheck, {
      className: "mx-auto my-auto font-extrabold"
    })));
  } else if (props.isCurrentPage) {
    return /* @__PURE__ */ React.createElement("p", {
      className: "font-bold border-2 border-[#6C567B] rounded-full h-7 w-7 text-center"
    }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
      to: "",
      className: "text-[#6C567B]"
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
    className: "text-[#6C567B] text-xl m-0 mb-3"
  }, "MANIPAL COLLEGE OF PHARMACY"), /* @__PURE__ */ React.createElement("p", {
    className: "text-[10px] border-t-2 border-[#6C567B] pt-2 font-medium"
  }, "Manipal Academy of Higer Education", /* @__PURE__ */ React.createElement("br", null), "(Institution of Eminence Deemed to be University)"))), /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl p-5 rounded-lg text-[#6C567B] border"
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
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
    allowClear: true
  }, /* @__PURE__ */ React.createElement(import_antd21.Select.Option, {
    value: "male"
  }, "Male"), /* @__PURE__ */ React.createElement(import_antd21.Select.Option, {
    value: "female"
  }, "Female"), /* @__PURE__ */ React.createElement(import_antd21.Select.Option, {
    value: "other"
  }, "Other"))), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
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
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-x-5 gap-y-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Doctor"
  }, "Doctor")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Pharmacist"
  }, "Pharmacist")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Friends"
  }, "Friends")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Relative"
  }, "Relatives")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Self (past disease experienced)"
  }, "Self (past disease experienced)")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "Self (no past disease experienced)"
  }, "Self (no past disease experienced)"))))), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Suspected Adverse Reaction")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of reaction started"
  }), /* @__PURE__ */ React.createElement(import_antd22.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date of recovery"
  }), /* @__PURE__ */ React.createElement(import_antd22.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Describe reaction or problem"
  }), /* @__PURE__ */ React.createElement(TextArea13, {
    rows: 4
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  }));
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
  return /* @__PURE__ */ React.createElement(import_antd23.Form, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Name (Brand/Generic)"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, {
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Manufacturer"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Batch No./ Lot No."
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Exp. Date"
  }), /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Dose used"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, {
    type: "number",
    suffix: "kgs"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Route used"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "IP/OP"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Unit"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Frequency (OD, BD, etc.)"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date started"
  }), /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date stopped"
  }), /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Indication"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, null)), /* @__PURE__ */ React.createElement("div", {
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\4.tsx
var __exports16 = {};
__export(__exports16, {
  default: () => Form1page3f4
});
init_react();
var import_antd27 = require("antd");
function Form1page3f4() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\b.tsx
var b_exports2 = {};
__export(b_exports2, {
  default: () => Form1page3a
});
init_react();
var import_antd29 = require("antd");
function Form1page3a() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Action Taken"), /* @__PURE__ */ React.createElement(RadioGroupDrugs, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3b"
  }));
}
var RadioGroupDrugs = () => {
  const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  }));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\c.tsx
var c_exports2 = {};
__export(c_exports2, {
  default: () => Form1page3a2
});
init_react();
var import_antd30 = require("antd");
function Form1page3a2() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Dechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs2, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3c"
  }));
}
var RadioGroupDrugs2 = () => {
  const radioOptions = [
    "No dechallenge",
    "Definite Improvement",
    "No Improvement",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd30.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  }));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\d.tsx
var d_exports2 = {};
__export(d_exports2, {
  default: () => Form1page3a3
});
init_react();
var import_antd31 = require("antd");
function Form1page3a3() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Rechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs3, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3d"
  }));
}
var RadioGroupDrugs3 = () => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd31.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  }));
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Reaction Reappeared After Re-introduction"), /* @__PURE__ */ React.createElement(RadioGroupDrugs4, null), /* @__PURE__ */ React.createElement(AddDrugsBox, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3e"
  }));
}
var RadioGroupDrugs4 = () => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd32.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "pl-1 pr-7 my-auto"
  }, "Dose"), /* @__PURE__ */ React.createElement(import_antd32.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi8.FiHelpCircle, null)
  })));
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
    type: "submit",
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\h.tsx
var h_exports = {};
__export(h_exports, {
  default: () => Form1page3h
});
init_react();
var import_antd34 = require("antd");
function Form1page3h() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "my-0 py-0"
  }, "Concomitant medical product"), /* @__PURE__ */ React.createElement("p", {
    className: "text-sm text-gray-600"
  }, "Including self-medication and herbal remedies with therapy dates")), /* @__PURE__ */ React.createElement(Subform2, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3h"
  }));
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "AMC/NCC Section"), /* @__PURE__ */ React.createElement(import_antd35.Form, null, /* @__PURE__ */ React.createElement("div", {
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
  }, "Unknown"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3i"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\j.tsx
var j_exports = {};
__export(j_exports, {
  default: () => Form1page3j
});
init_react();
var import_antd36 = require("antd");
function Form1page3j() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
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
  }));
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
var assets_manifest_default = { "version": "657a7c9b", "entry": { "module": "/build/entry.client-PSUNGD3I.js", "imports": ["/build/_shared/chunk-LY4SEGWT.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-2M7KCKPG.js", "imports": ["/build/_shared/chunk-GV3ILXJ2.js", "/build/_shared/chunk-UFQM3TJR.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-XOGHRB2C.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-MSA6WBM3.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-PNHIFFTL.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-AUWF2EK5.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-JG3KWRS3.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-ZIAYADO3.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-XR64BJM7.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-QCVLGXGY.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-HG2MO64Q.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-DD3WWUMZ.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-Y2SKFBVF.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-PKKFSQOF.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-6G4KXRHV.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-R2Y6VIA2.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-FSM4ULCV.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/j": { "id": "routes/adr-reporting/3/j", "parentId": "root", "path": "adr-reporting/3/j", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/j-BY5C465L.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-RFNCPXUG.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJ3G473I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-JLFSXWFE.js", "imports": ["/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-VFUVKQ2Q.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-V3FBKBMU.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-P5TMVXIG.js", "imports": ["/build/_shared/chunk-5CJYI6GW.js", "/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-4T4B62KC.js", "/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-FCSXU7IN.js", "imports": ["/build/_shared/chunk-5CJYI6GW.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-TIFUSMYA.js", "imports": ["/build/_shared/chunk-FKBAHUAY.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-RRALJI4O.js", "imports": ["/build/_shared/chunk-4T4B62KC.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-PO7ZO3OI.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-DALPRTPT.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-DKLY5NJ6.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-2FO5WPSH.js", "imports": ["/build/_shared/chunk-EQFE5QTK.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-URUAHVZ2.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-JWMZLOZU.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-DHSHT3P7.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-7VNF3ODF.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-JD7D2FKN.js", "imports": ["/build/_shared/chunk-2F455FT4.js", "/build/_shared/chunk-4WKSGEIG.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-LWHQT7YY.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-657A7C9B.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb290LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9yb290L2luZGV4LnRzeCIsICIuLi9hcHAvc3RhdGVzL3N0b3JlLnRzIiwgIi4uL2FwcC9zdGF0ZXMvU2xpY2VzL0FkclJlcG9ydGluZ0Zvcm0vMS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24xLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24yLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24zLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXIvTGlzdEl0ZW1zLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9TaWRlYmFyVGVtcGxhdGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWwvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbC9Gb3JtTWFwLnRzIiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9pbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLnRzeCIsICIuLi9hcHAvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjIudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw1XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw2XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw3XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw4XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw5XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDRcXGMudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcNFxcZC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcZlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwyXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwyLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwzLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw0LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw1LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxjLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxlLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxnLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxoLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxpLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxqLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxsb2dpblxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwzXFxcXHN1YmZvcm1zXFxcXG9wdGlvbjEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxzdWJmb3Jtc1xcXFxvcHRpb24yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDNcXFxcc3ViZm9ybXNcXFxcb3B0aW9uMy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDVcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcN1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOVxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNFxcXFxiLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDRcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDFcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwyXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcMi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFwzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxmXFxcXDQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcNS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcai50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvN1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzhcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzFcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8yXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi80XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi81XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2lcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2pcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMzRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBPdXRsZXQsIE1ldGEsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gXCJ+L2xheW91dHMvcm9vdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IERvY3VtZW50UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG4vL2ltcG9ydGluZyBzdHlsZXNoZWV0XHJcbmltcG9ydCB0YWlsd2luZFN0eWxlIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XHJcbmltcG9ydCBnbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgYW50U3R5bGVzIGZyb20gXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQURSIFBvcnRhbCB8IEtNQ1wiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhbnRTdHlsZXMgfSxcclxuICBdO1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICh7IGNoaWxkcmVuIH06IERvY3VtZW50UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxSb290TGF5b3V0PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Sb290TGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHJlZHV4LXRvb2xraXRcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0aGUgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL25hdmJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgUm9vdExheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb290TGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuLy9pbXBvcnRpbmcgc2xpY2VzIGhlcmVcclxuaW1wb3J0IGZvcm0xcGFnZTFSZWR1Y2VyIGZyb20gJ34vc3RhdGVzL1NsaWNlcy9BZHJSZXBvcnRpbmdGb3JtLzEnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgZm9ybTFwYWdlMTogZm9ybTFwYWdlMVJlZHVjZXJcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBJbmZlciB0aGUgYFJvb3RTdGF0ZWAgYW5kIGBBcHBEaXNwYXRjaGAgdHlwZXMgZnJvbSB0aGUgc3RvcmUgaXRzZWxmXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPlxyXG4vLyBJbmZlcnJlZCB0eXBlOiB7cG9zdHM6IFBvc3RzU3RhdGUsIGNvbW1lbnRzOiBDb21tZW50c1N0YXRlLCB1c2VyczogVXNlcnNTdGF0ZX1cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2giLCAiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG4gICAgZm9ybXM6IHtcclxuICAgICAgICBwYXRpZW50SW5pdGlhbHM/OiBzdHJpbmc7XHJcbiAgICAgICAgRGF0ZU9mQmlydGg/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIGFnZU9mT25zZXQ6IG51bWJlciB8IG51bGw7XHJcbiAgICAgICAgZ2VuZGVyPzogXCJNYWxlXCIgfCBcIkZlbWFsZVwiIHwgXCJPdGhlclwiIHwgbnVsbDtcclxuICAgICAgICB3ZWlnaHQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgICAgIHBhdGllbnRJRD86IG51bWJlciB8IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAgaXBfb3A/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIHVuaXQ/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIHJlYXNvbkZvclRha2luZ01lZGljYXRpb24/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIG1lZGljaW5lQWR2aXNlZD86IHN0cmluZyB8IG51bGw7XHJcbiAgICAgICAga25vd25BbGxlcmdpZXM/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgICAgIHNvY2lhbEhpc3Rvcnk/OiBzdHJpbmcgfCBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvblR5cGUge1xyXG4gICAgZmllbGROYW1lOiBmaWVsZE5hbWVUeXBlcztcclxuICAgIHZhbHVlOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmVudW0gZmllbGROYW1lVHlwZXMge1xyXG4gICAgcGF0aWVudEluaXRpYWxzID0gXCJwYXRpZW50SW5pdGlhbHNcIixcclxuICAgIERhdGVPZkJpcnRoID0gXCJEYXRlT2ZCaXJ0aFwiLFxyXG4gICAgYWdlT2ZPbnNldCA9IFwiYWdlT2ZPbnNldFwiLFxyXG4gICAgZ2VuZGVyID0gXCJnZW5kZXJcIixcclxuICAgIHdlaWdodCA9IFwid2VpZ2h0XCIsXHJcbiAgICBwYXRpZW50SUQgPSBcInBhdGllbnRJRFwiLFxyXG4gICAgaXBfb3AgPSBcImlwX29wXCIsXHJcbiAgICB1bml0ID0gXCJ1bml0XCIsXHJcbiAgICByZWFzb25Gb3JUYWtpbmdNZWRpY2F0aW9uID0gXCJyZWFzb25Gb3JUYWtpbmdNZWRpY2F0aW9uXCIsXHJcbiAgICBtZWRpY2luZUFkdmlzZWQgPSBcIm1lZGljaW5lQWR2aXNlZFwiLFxyXG4gICAga25vd25BbGxlcmdpZXMgPSBcImtub3duQWxsZXJnaWVzXCIsXHJcbiAgICBzb2NpYWxIaXN0b3J5ID0gXCJzb2NpYWxIaXN0b3J5XCJcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XHJcbiAgICBmb3Jtczoge1xyXG4gICAgICAgIHBhdGllbnRJbml0aWFsczogXCJcIixcclxuICAgICAgICBEYXRlT2ZCaXJ0aDogbnVsbCxcclxuICAgICAgICBhZ2VPZk9uc2V0OiBudWxsLFxyXG4gICAgICAgIGdlbmRlcjogbnVsbCxcclxuICAgICAgICB3ZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgcGF0aWVudElEOiBudWxsLFxyXG4gICAgICAgIGlwX29wOiBudWxsLFxyXG4gICAgICAgIHVuaXQ6IG51bGwsXHJcbiAgICAgICAgcmVhc29uRm9yVGFraW5nTWVkaWNhdGlvbjogbnVsbCxcclxuICAgICAgICBtZWRpY2luZUFkdmlzZWQ6IG51bGwsXHJcbiAgICAgICAga25vd25BbGxlcmdpZXM6IG51bGwsXHJcbiAgICAgICAgc29jaWFsSGlzdG9yeTogbnVsbFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybTFwYWdlMVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2Zvcm0xcGFnZTEnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBmZXRjaEluY29tcGxldGVGb3JtVXNlclByb2ZpbGU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBBZGQgbG9naWMgdG8gZmV0Y2ggaW5jb21wbGV0ZS9jb21wbGV0ZSBmb3JtIGRhdGEgZnJvbSBiYWNrZW5kIEFQSVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0Rm9ybURhdGFUb1RoZUJhY2tlbmQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBBZGQgbG9naWMgdG8gc3VibWl0IGZvcm0gZGF0YSB0byB0aGUgYmFja2VuZCBBUElcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldE5ld0Zvcm1EYXRhOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxBY3Rpb25UeXBlPikgPT4ge1xyXG4gICAgICAgICAgICAvLyBsb2dpYyB0byBzZXQgdGhlIG5ldyBmb3JtIGRhdGEgaW4gdGhpcyByZWR1Y2VyIGFuZCBldmVudHVhbGx5IGluIHRoZSBiYWNrZW5kIEFQSSB1c2luZyB0aGUgYWJvdmUgZnVuY3Rpb25cclxuICAgICAgICAgICAgc3RhdGUuZm9ybXNbYCR7YWN0aW9uLnBheWxvYWQuZmllbGROYW1lfWBdID0gYWN0aW9uLnBheWxvYWQudmFsdWVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSlcclxuXHJcbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG5leHBvcnQgY29uc3QgeyBmZXRjaEluY29tcGxldGVGb3JtVXNlclByb2ZpbGUsIHN1Ym1pdEZvcm1EYXRhVG9UaGVCYWNrZW5kLCBzZXROZXdGb3JtRGF0YSB9ID0gZm9ybTFwYWdlMVNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm0xcGFnZTFTbGljZS5yZWR1Y2VyIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTE0IHAtMSBzaGFkb3cteGwgZm9udC1tZWRpdW0gZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICA8aW1nIHNyYz1cIi9BRFItbG9nby5wbmdcIiBjbGFzc05hbWU9XCJwLTFcIiAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXktYXV0byBwbC04IHRleHQtcHVycGxlLTgwMFwiPkhvbWU8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+TWVkaWNhbCBEZXZpY2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiVHlwZSBvZiBkZXZpY2VcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW1wbGFudGFiaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSZXVzYWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpbmdsZSBVc2UgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNhYmxlIGRldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzZSBvZiBtYW51ZmFjdHVyZWQgbWFya2VkIHNpbmdsZSB1c2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+UGVyc29uYWwgdXNlL2hvbWVjYXJlIHVzZSA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMTtcclxuIiwgImltcG9ydCB7IElucHV0RGVzY3JpcHRpb25Qcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tIFwiLi9JbmZvSWNvbi5zdmdcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5jb25zdCBJbnB1dERlc2NyaXB0aW9uID0gKHByb3BzOiBJbnB1dERlc2NyaXB0aW9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwYi0xXCI+XHJcbiAgICAgIHtwcm9wcy5pc1JlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInByLTEgdGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj59XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLVswcHhdIHByLTEgdGV4dC1bMTZweF1cIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXREZXNjcmlwdGlvbjtcclxuIiwgImltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG15LTIgbXgtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5LaXRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Db250cm9sIE1hdGVyaWFscyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PlJlYWdlbnRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5JVkQgRWxlY3Ryb25pYyBSZWFkZXIvQW5hbHl6ZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNhbGlicmF0b3JzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+T3RoZXJzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24yO1xyXG4iLCAiaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IG9wdGlvbjMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGwgcC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFcXVpcG1lbnQgdXNhZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW52YXNpYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gSW1hZ2luZyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IE90aGVycyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvcnRlcidzIENvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3B0aW9uMztcclxuIiwgIi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2UxKCkge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcIkluaXRpYWxcIiwgXCJGb2xsb3ctdXBcIiwgXCJGaW5hbFwiLCBcIlRyZW5kXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UHJpbWFyeSBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlJlcG9ydGVyIFJlZmVyZW5jZSBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlcG9ydFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUeXBlIG9mIHJlcG9ydFwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIxXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmNvbnN0IEZvcm1MYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBncmlkIGdyaWQtY29scy00IGdhcC01IHB4LTE2IHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjBcIj5cclxuICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBwLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBwdC04IHBiLTQgdGV4dC1bMzVweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgQURSIFJlcG9ydGluZyBGb3JtXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBMaXN0SXRlbXMgZnJvbSBcIi4vTGlzdEl0ZW1zXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgZGF0YVxyXG5pbXBvcnQgeyBBZHJSZXBvcnRpbmcsIE1lZGljYWxEZXZpY2VSZXBvcnRpbmcgfSBmcm9tIFwiLi9TaWRlYmFyVGVtcGxhdGVzXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgVGVtcGxhdGVQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBTaWRlYmFyID0gKCkgPT4ge1xyXG4gIGxldCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XHJcbiAgLy8gSG9sZHMgdGhlIGN1cnJlbnQgZm9ybSBzaWRlYmFyIGRhdGFcclxuICBjb25zdCBbU2lkZWJhckRhdGEsIHNldFNpZGViYXJEYXRhXSA9IHVzZVN0YXRlPFRlbXBsYXRlUHJvcHNbXT4oXHJcbiAgICBBZHJSZXBvcnRpbmcudGVtcGxhdGVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICAvL3NldCBuZXh0LCBwcmV2aW91cyBhbmQgY3VycmVudCBwYWdlIG9uIGV2ZXJ5IHBhZ2UgbG9hZFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjdXJyZW50Rm9ybSA9IGN1cnJlbnRMb2NhdGlvblsxXTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gY3VycmVudExvY2F0aW9uWzJdO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VTdWIgPVxyXG4gICAgICBjdXJyZW50TG9jYXRpb24ubGVuZ3RoID49IDQgPyBjdXJyZW50TG9jYXRpb25bM10gOiBcIlwiO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VTdWJTdWIgPVxyXG4gICAgICBjdXJyZW50TG9jYXRpb24ubGVuZ3RoID49IDUgPyBjdXJyZW50TG9jYXRpb25bNF0gOiBcIlwiO1xyXG4gICAgaWYgKGN1cnJlbnRGb3JtID09PSBcImFkci1yZXBvcnRpbmdcIikge1xyXG4gICAgICBzZXRTaWRlYmFyRGF0YShBZHJSZXBvcnRpbmcudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRGb3JtID09PSBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiKSB7XHJcbiAgICAgIHNldFNpZGViYXJEYXRhKE1lZGljYWxEZXZpY2VSZXBvcnRpbmcudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aXZlVGFiKGN1cnJlbnRQYWdlICsgY3VycmVudFBhZ2VTdWIgKyBjdXJyZW50UGFnZVN1YlN1Yik7XHJcbiAgfSwgW2xvY2F0aW9uXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IHBiLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiBJbmRpYW4gTmF0aW9uYWwgRW1ibGVtXCJcclxuICAgICAgICAgICAgc3JjPVwiL2VtYmxlbS5wbmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTFcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSB0ZXh0LXhsIG0tMCBtYi0zXCI+XHJcbiAgICAgICAgICAgIE1BTklQQUwgQ09MTEVHRSBPRiBQSEFSTUFDWVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIGJvcmRlci10LTIgYm9yZGVyLVsjNkM1NjdCXSBwdC0yIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgIE1hbmlwYWwgQWNhZGVteSBvZiBIaWdlciBFZHVjYXRpb25cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIChJbnN0aXR1dGlvbiBvZiBFbWluZW5jZSBEZWVtZWQgdG8gYmUgVW5pdmVyc2l0eSlcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHAtNSByb3VuZGVkLWxnIHRleHQtWyM2QzU2N0JdIGJvcmRlclwiPlxyXG4gICAgICAgIHtTaWRlYmFyRGF0YS5tYXAoKGl0ZW06IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbXNcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgICAgICBwYWdlTGluaz17aXRlbS5wYWdlTGlua31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsICIvLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGaUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEdvUHJpbWl0aXZlRG90IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQge1xyXG4gIExpc3RJdGVtc1Byb3BzLFxyXG4gIFRlbXBsYXRlUHJvcHMsXHJcbiAgU2lkZWJhck51bWJlcmluZ0J1bGxldHMsXHJcbn0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtcyA9IChwcm9wczogTGlzdEl0ZW1zUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXJOdW1iZXJpbmdCdWxsZXRcclxuICAgICAgICAgICAgaXNDdXJyZW50UGFnZT17cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMF0gPT09IHByb3BzLnBhZ2VMaW5rfVxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZD17cHJvcHMuaXNDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIGJ1bGxldE51bWJlcj17cHJvcHMubnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgdGV4dC1iYXNlXCI+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04XCI+XHJcbiAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzBdID09PSBwcm9wcy5wYWdlTGluayAmJlxyXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVUYWIgPVxyXG4gICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdID09PSBwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmxleCBmbGV4LXJvdyBwYi0xIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBwYi0xIHRleHQtWyM3RTdFN0VdXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwdC0xIHByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LW1kXCI+e2NoaWxkLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChzdWJDaGlsZDogVGVtcGxhdGVQcm9wcywgc3ViSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVN1YlRhYiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMl0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlU3ViVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInB5LTEgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHktMSB0ZXh0LVsjN0U3RTdFXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNoaWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0ID0gKHByb3BzOiBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0cykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0NvbXBsZXRlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItWyM2QzU2N0JdIGJnLVsjNkM1NjdCXSByb3VuZGVkLWZ1bGwgaC03IHctNyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIlwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxGaUNoZWNrIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktYXV0byBmb250LWV4dHJhYm9sZFwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5pc0N1cnJlbnRQYWdlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgYm9yZGVyLTIgYm9yZGVyLVsjNkM1NjdCXSByb3VuZGVkLWZ1bGwgaC03IHctNyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql1cIj5cclxuICAgICAgICAgIHtwcm9wcy5idWxsZXROdW1iZXIgKyAxfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1bIzdFN0U3RV0gcm91bmRlZC1mdWxsIGgtNyB3LTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIlwiIGNsYXNzTmFtZT1cInRleHQtWyM3RTdFN0VdXCI+XHJcbiAgICAgICAgICB7cHJvcHMuYnVsbGV0TnVtYmVyICsgMX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1zO1xyXG4iLCAiLy9pbXBvcnRpbmYgdHlwZXNcclxuaW1wb3J0IHsgU2lkZWJhclByb3BzIH0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IEFkclJlcG9ydGluZzogU2lkZWJhclByb3BzID0ge1xyXG4gIGJhc2VVcmw6IFwiL2Fkci1yZXBvcnRpbmdcIixcclxuICB0ZW1wbGF0ZTogW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBhdGllbnQgSW5mb3JtYXRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiMVwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogdHJ1ZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIyXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdXNwZWN0ZWQgTWVkaWNhdGlvbihzKVwiLFxyXG4gICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk1lZGljYXRpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQWN0aW9uIFRha2VuXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzYlwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJEZWNoYWxsZW5nZVwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2NcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUmVjaGFsbGVuZ2VcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNkXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlJlYWN0aW9uIHJlYXBwZWFyZWQgYWZ0ZXIgcmVpbnRyb2R1Y3Rpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNlXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNhdXNhbGl0eSBBc3Nlc3NtZW50XCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZlwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiTmFyYW5qbydzIHNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2ZcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJXSE8gcHJvYmFiaWxpdHkgc2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjJcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJIYXJ0d2lnJ3MgU2V2ZXJpdHkgQXNzZXNzbWVudCBTY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmM1wiLFxyXG4gICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk1vZGlmaWVkIFNjaHVtb2NrIGFuZCBUaG9ybnRvbiBzY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmNFwiLFxyXG4gICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIlByZWRpY3RhYmlsaXR5ICYgUHJlZGlzcG9zaW5nIGZhY3RvcnNcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjVcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiVHJlYXRtZW50IGdpdmVuXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZ1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDb25jb21pdGFudCBtZWRpY2FsIHByb2R1Y3RcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNoXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFNQy9OQ0MgU2VjdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2lcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiT3V0Y29tZVwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2pcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBEZXRhaWxzXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nOiBTaWRlYmFyUHJvcHMgPSB7XHJcbiAgYmFzZVVybDogXCIvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCIsXHJcbiAgdGVtcGxhdGU6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcmltYXJ5IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjFcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlcG9ydGVyIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjJcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRldmljZSBDYXRlZ29yeVwiLFxyXG4gICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEZXZpY2UgRGVzY3JpcHRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiNFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJNYW51ZmFjdHVyZXIgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJJbXBvcnRlciBEZXRhaWxzXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0YlwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJEaXN0cmlidXRvciBEZXRhaWxzXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0Y1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJGdXJ0aGVyIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0ZFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkV2ZW50IERlc2NyaXB0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjVcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBhdGllbnQgSW5mb3JtYXRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiNlwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGVhbHRoY2FyZSBGYWNpbGl0eSBEZXRhaWxzXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjdcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhc3VhbHR5IEFzc2Vzc21lbnRcIixcclxuICAgICAgcGFnZUxpbms6IFwiOFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJvZHVjdCBPd25lcidzIEludmVzdGlnYXRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiOVwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFkclJlcG9ydGluZywgTWVkaWNhbERldmljZVJlcG9ydGluZyB9O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIG1hcHNcclxuaW1wb3J0IHtcclxuICBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gIE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG59IGZyb20gXCIuL0Zvcm1NYXBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uUGFuZWxQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uUGFuZWwgPSAocHJvcHM6IE5hdmlnYXRpb25QYW5lbFByb3BzKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtuZXh0UGFnZSwgc2V0TmV4dFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcHJldmlvdXNQYWdlLCBzZXRQcmV2aW91c1BhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbaXNMYXN0UGFnZSwgc2V0SXNMYXN0UGFnZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzRmlyc3RQYWdlLCBzZXRJc0ZpcnN0UGFnZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gIGNvbnN0IHBhZ2VUeXBlID1cclxuICAgIGN1cnJlbnRMb2NhdGlvblsxXSA9PT0gXCJhZHItcmVwb3J0aW5nXCJcclxuICAgICAgPyB7IGxpbms6IFwiL2Fkci1yZXBvcnRpbmcvXCIsIG1hcFJvdXRlOiBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwIH1cclxuICAgICAgOiB7XHJcbiAgICAgICAgICBsaW5rOiBcIi9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvXCIsXHJcbiAgICAgICAgICBtYXBSb3V0ZTogTWVkaWNhbERldmljZVJlcG9ydGluZ19wb3J0YWxNYXAsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIGRlZmF1bHQgc2V0dGluZ3Mgb24gZXZlcnkgcGFnZSByZW5kZXJcclxuICAgIHNldElzRmlyc3RQYWdlKGZhbHNlKTtcclxuICAgIHNldElzTGFzdFBhZ2UoZmFsc2UpO1xyXG5cclxuICAgIGZvciAobGV0IHJvdXRlID0gMDsgcm91dGUgPCBwYWdlVHlwZS5tYXBSb3V0ZS5sZW5ndGg7IHJvdXRlKyspIHtcclxuICAgICAgaWYgKHByb3BzLmN1cnJlbnRSb3V0ZSA9PT0gcGFnZVR5cGUubWFwUm91dGVbcm91dGVdKSB7XHJcbiAgICAgICAgaWYgKHJvdXRlID09PSAwKSB7XHJcbiAgICAgICAgICBzZXRJc0ZpcnN0UGFnZSh0cnVlKTtcclxuICAgICAgICAgIHNldE5leHRQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgKyAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldFByZXZpb3VzUGFnZShcIi9cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZSA9PT0gcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgc2V0SXNMYXN0UGFnZSh0cnVlKTtcclxuICAgICAgICAgIHNldE5leHRQYWdlKHBhZ2VUeXBlICsgXCJzdWJtaXRcIik7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXHJcbiAgICAgICAgICAgIHBhZ2VUeXBlLmxpbmsgKyBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZSAtIDFdLnNwbGl0KFwiXCIpLmpvaW4oXCIvXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocm91dGUgPCBwYWdlVHlwZS5tYXBSb3V0ZS5sZW5ndGggLSAxICYmIHJvdXRlICE9IDApIHtcclxuICAgICAgICAgIHNldE5leHRQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgKyAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldFByZXZpb3VzUGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlIC0gMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMCB3LWZ1bGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICA8TGluayB0bz17cHJldmlvdXNQYWdlfT5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bI0U4NTkwQ10gaG92ZXI6c2hhZG93LXhsIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyNFODU5MENdXCJcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc0ZpcnN0UGFnZSA/IFwiSG9tZVwiIDogXCJQcmV2aW91c1wifVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIHsvKiA8TGluayB0bz17bmV4dFBhZ2V9PiAqL31cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bI0U4NTkwQ10gdGV4dC13aGl0ZSBob3ZlcjpzaGFkb3cteGwgcC0yIHctMzJcIlxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTGFzdFBhZ2UgPyBcIlN1Ym1pdFwiIDogXCJOZXh0XCJ9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lbDtcclxuIiwgImNvbnN0IEFEUnJlcG9ydGluZ19wb3J0YWxNYXAgPSBbXHJcbiAgXCIxXCIsXHJcbiAgXCIyXCIsXHJcbiAgXCIzXCIsXHJcbiAgXCIzYlwiLFxyXG4gIFwiM2NcIixcclxuICBcIjNkXCIsXHJcbiAgXCIzZVwiLFxyXG4gIFwiM2ZcIixcclxuICBcIjNmMlwiLFxyXG4gIFwiM2YzXCIsXHJcbiAgXCIzZjRcIixcclxuICBcIjNmNVwiLFxyXG4gIFwiM2dcIixcclxuICBcIjNoXCIsXHJcbiAgXCIzaVwiLFxyXG4gIFwiM2pcIixcclxuICBcIjRcIixcclxuXTtcclxuXHJcbmNvbnN0IE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwID0gW1xyXG4gIFwiMVwiLFxyXG4gIFwiMlwiLFxyXG4gIFwiM1wiLFxyXG4gIFwiNFwiLFxyXG4gIFwiNGJcIixcclxuICBcIjRjXCIsXHJcbiAgXCI0ZFwiLFxyXG4gIFwiNVwiLFxyXG4gIFwiNlwiLFxyXG4gIFwiN1wiLFxyXG4gIFwiOFwiLFxyXG4gIFwiOVwiXHJcbl07XHJcblxyXG5leHBvcnQgeyBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwLCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCB9O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTEoKSB7XHJcbiAgY29uc3QgW3JlcG9ydGVyVHlwZSwgc2V0UmVwb3J0ZXJUeXBlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJtYW51ZmFjdHVyZXJcIik7XHJcbiAgY29uc3QgY2hhbmdlZFJlcG9ydGVyVHlwZSA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldFJlcG9ydGVyVHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlJlcG9ydGVyIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlR5cGUgb2YgUmVwb3J0ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGNoYW5nZWRSZXBvcnRlclR5cGUoZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXJcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJpbXBvcnRlclwifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBJbXBvcnRlclxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImRpc3RyaWJ1dG9yXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGlzdHJpYnV0b3JcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJwYXRpZW50c1wifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBQYXRpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImhlYWx0aGNhcmVwcm9mZXNzaW9uYWxzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgSGVhbHRoY2FyZSBQcm9mZXNzaW9uYWxcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSWYgT3RoZXJzXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhhcyB0aGUgcmVwb3J0ZXIgaW5mb3JtZWQgdGhlIGluY2lkZW50IHRvIHRoZSBtYW51ZmFjdHVyZXI/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlcG9ydGVyVHlwZSA9PT0gXCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgRG9udCBLbm93XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIHJlcG9ydGVyIGFsc28gc3VibWl0dGluZyB0aGUgcmVwb3J0IG9uIGJlaGFsZiBvZiB0aGUgbWFudWZhY3R1cmVyP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZXBvcnRlclR5cGUgPT09IFwibWFudWZhY3R1cmVyXCJ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgWWVzXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIE5vXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIERvbnQgS25vd1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJFbWFpbCBJRFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtOCB0ZXh0LVszNXB4XSB0ZXh0LVsjNkM1NjdCXVwiPlxyXG4gICAgICAgIE1lZGljYWwgRGV2aWNlIEFEUiBSZXBvcnRpbmdcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTUgcHgtMTYgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgcC0yXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgT3B0aW9uMSBmcm9tIFwiLi9zdWJmb3Jtcy9vcHRpb24xXCI7XHJcbmltcG9ydCBPcHRpb24yIGZyb20gXCIuL3N1YmZvcm1zL29wdGlvbjJcIjtcclxuaW1wb3J0IE9wdGlvbjMgZnJvbSBcIi4vc3ViZm9ybXMvb3B0aW9uM1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTkoKSB7XHJcbiAgY29uc3QgW29wdDEsIHNldE9wdDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcHQyLCBzZXRPcHQyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0Mywgc2V0T3B0M10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RGV2aWNlIENhdGVnb3J5PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCIgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTWVkaWNhbCBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQzKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFsdWU9ezJ9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDEoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0Myh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7b3B0MSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb24xXCI+XHJcbiAgICAgICAgICA8T3B0aW9uMSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge29wdDIgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uMlwiPlxyXG4gICAgICAgICAgPE9wdGlvbjIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtvcHQzICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbjNcIj5cclxuICAgICAgICAgIDxPcHRpb24zIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+TWVkaWNhbCBEZXZpY2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiVHlwZSBvZiBkZXZpY2VcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW1wbGFudGFiaWxpdHlcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSZXVzYWJpbGl0eVwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpbmdsZSBVc2UgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNhYmxlIGRldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzZSBvZiBtYW51ZmFjdHVyZWQgbWFya2VkIHNpbmdsZSB1c2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+UGVyc29uYWwgdXNlL2hvbWVjYXJlIHVzZSA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMTtcclxuIiwgImltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG15LTIgbXgtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5LaXRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Db250cm9sIE1hdGVyaWFscyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PlJlYWdlbnRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5JVkQgRWxlY3Ryb25pYyBSZWFkZXIvQW5hbHl6ZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNhbGlicmF0b3JzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+T3RoZXJzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24yO1xyXG4iLCAiaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IG9wdGlvbjMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGwgcC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFcXVpcG1lbnQgdXNhZ2VcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW52YXNpYmlsaXR5XCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gSW1hZ2luZyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IE90aGVycyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvcnRlcidzIENvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3B0aW9uMztcclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5NYW51ZmFjdHVyZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXszfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBJbnB1dCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTUoKSB7XHJcbiAgY29uc3QgW2lzU2VyaW91c0V2ZW50LCBzZXRJc1NlcmlvdXNFdmVudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGVhZCwgc2V0SXNEZWFkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcclxuICAgIFwiSG9zcGl0YWwgUHJlbWlzZVwiLFxyXG4gICAgXCJNYW51ZmFjdHVyZXIgUHJlbWlzZVwiLFxyXG4gICAgXCJIb21lXCIsXHJcbiAgICBcIk90aGVyc1wiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMiA9IFtcclxuICAgIFwiSGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxcIixcclxuICAgIFwiUGF0aWVudFwiLFxyXG4gICAgXCJQcm9ibGVtIG5vdGVkIGJlZm9yZSB1c2VcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1xyXG4gICAgXCJSZXR1cm5lZCB0byB0aGUgY29tcGFueVwiLFxyXG4gICAgXCJJbXBsYW50ZWQgaW4gcGF0aWVudFwiLFxyXG4gICAgXCJXaXRoaW4gdGhlIGZhY2lsaXR5XCIsXHJcbiAgICBcIkF0IHBhdGllbnQgaG9tZVwiLFxyXG4gICAgXCJEZXN0cm95ZWRcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnM0ID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNSA9IFtcclxuICAgIFwiRGVhdGhcIixcclxuICAgIFwiTGlmZSBUaHJlYXRlbmluZ1wiLFxyXG4gICAgXCJEaXNhYmlsaXR5XCIsXHJcbiAgICBcIkhvc3BpdGFsaXphdGlvblwiLFxyXG4gICAgXCJDb25nZW5pdGFsIEFub21hbHlcIixcclxuICAgIFwiQW55IG1lZGljYWwgZXZlbnRcIixcclxuICAgIFwiUGVybWFuZW50IEltcGFpcm1lbnRcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRTdGF0ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc1NlcmlvdXNFdmVudCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzU2VyaW91c0V2ZW50KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRWYWx1ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJEZWF0aFwiKSB7XHJcbiAgICAgIHNldElzRGVhZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRGVhZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RXZlbnQgRGVzY3JpcHRpb248L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIEV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIEltcGxhbnRcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkxvY2F0aW9uIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXZpY2UgT3BlcmF0b3JcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMyfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRldmljZSBsb2NhdGlvblwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiByZXR1cm5cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlNlcmlvdXMgZXZlbnQ/XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVNlcmlvdXNFdmVudFN0YXRlKGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJSZWFzb25cIn0gaXNSZXF1aXJlZD17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM1fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzU2VyaW91c0V2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVNlcmlvdXNFdmVudFZhbHVlKGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBkZWF0aFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkaXNhYmxlZD17IWlzRGVhZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIklzIGRldmljZSBpbiB1c2UgYWZ0ZXIgdGhlIGluY2lkZW50P1wifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGV0YWlsZWQgZGVzY3JpcHRpb24gb2YgdGhlIGluY2lkZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIycHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgICBGcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzaW1pbGFyIGFkdmVyc2UgZXZlbnRzIGluIEluZGlhXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJZZWFyXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBwaWNrZXI9XCJ5ZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJOdW1iZXIgb2Ygc2ltaWxhciBldmVudHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJudW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlRvdGFsIG51bWJlciBzdXBsaWVkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJGcmVxdWVuY3lcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgICAgRnJlcXVlbmN5IG9mIG9jY3VycmVuY2Ugb2Ygc2ltaWxhciBhZHZlcnNlIGV2ZW50cyBnbG9iYWxseVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiWWVhclwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgcGlja2VyPVwieWVhclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiTnVtYmVyIG9mIHNpbWlsYXIgZXZlbnRzXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUb3RhbCBudW1iZXIgc3VwbGllZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRnJlcXVlbmN5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjVcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCwgUmFkaW8sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U2KCkge1xyXG4gIGNvbnN0IFtpc1JlY292ZXJlZCwgc2V0SXNSZWNvdmVyZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7XHJcbiAgY29uc3QgW2lzRGVhZCwgc2V0SXNEZWFkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgY2hhbmdlRGVhdGhEYXRhID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XHJcbiAgICAgIHNldElzRGVhZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRGVhZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlUmVjb3ZlcnlEYXRhID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XHJcbiAgICAgIHNldElzUmVjb3ZlcmVkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNSZWNvdmVyZWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczEgPSBbXCJNYWxlXCIsIFwiRmVtYWxlXCIsIFwiT3RoZXJzXCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczIgPSBbXCJZZXNcIiwgXCJOb1wiXTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5QYXRpZW50IEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUGF0aWVudCBIb3NwaXRhbCBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUGF0aWVudCBJbml0aWFsc1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWdlXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiV2VpZ2h0XCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIlNleFwifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk90aGVyIHJlbGV2YW50IGhpc3RvcnksIGluY2x1ZGluZyBwcmUtZXhpc3RpbmcgbWVkaWNhbCBjb25kaXRpb25zXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkhhcyB0aGUgcGF0aWVudCByZWNvdmVyZWQ/XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlY292ZXJ5RGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlY292ZXJ5XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXtpc1JlY292ZXJlZCA9PT0gZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIklzIHRoZSBwYXRpZW50IGRlYWQ/XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZURlYXRoRGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIGRlYXRoXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXtpc0RlYWQgPT09IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJPdGhlciBwYXRpZW50IG91dGNvbWVzXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjZcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U3KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBIZWFsdGhjYXJlIEZhY2lsaXR5IERldGFpbHNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJOYW1lXCJ9IGlzUmVxdWlyZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWRkcmVzc1wifSBpc1JlcXVpcmVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiQ29udGFjdCBOdW1iZXIgb2YgUGVyc29uIGF0IHRoZSBzaXRlIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlRlbGVwaG9uZSBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiN1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkNhc3VhbHR5IEFzc2Vzc21lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkludmVzdGlnYXRpb24gYWN0aW9uIHRha2VuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJvb3QgY2F1c2Ugb2YgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjhcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlOSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUHJvZHVjdCBPd25lcidzIEludmVzdGlnYXRpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUHJvZHVjdCBPd25lcnMgZGV2aWNlIHJpc2sgYW5hbHlzaXMgcmVwb3J0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNvcnJlY3RpdmUgLyBwcmV2ZW50aXZlIGFjdGlvbiB0YWtlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXZpY2UgaGlzdG9yeSByZXZpZXdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI5XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0YigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkltcG9ydGVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRiXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0YygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkRpc3RyaWJ1dG9yIGRldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRjXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGQoKSB7XHJcbiAgY29uc3QgW3JlZ3VsYXRlZEluSW5kaWEsIHNldFJlZ3VsYXRlZEluSW5kaWFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbYXZhaWxhYmlsaXR5VmFsdWUsIHNldEF2YWlsYWJpbGl0eVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3VzYWdlUGVyTWFudWZhY3R1cmVyLCBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTdGF0ZU9mUmFkaW8gPSAocmFkaW9JZGVudGlmaWVyOiBzdHJpbmcsIHJhZGlvVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHJhZGlvSWRlbnRpZmllciA9PT0gXCIxXCIpIHtcclxuICAgICAgc2V0UmVndWxhdGVkSW5JbmRpYShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjJcIikge1xyXG4gICAgICBzZXRBdmFpbGFiaWxpdHlWYWx1ZShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjNcIikge1xyXG4gICAgICBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcihyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcIlllc1wiLCBcIk5vXCIsIFwiRG9uJ3Qga25vd1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNCA9IFtcclxuICAgIFwiRGVzdHJveWVkXCIsXHJcbiAgICBcIlN0aWxsIGluIHVzZVwiLFxyXG4gICAgXCJSZXR1cm5lZCB0byBtYW51ZmFjdHVyZXIgb3IgaW1wb3J0ZXJcIixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkZ1cnRoZXIgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIGRldmljZSBub3RpZmllZC9yZWd1bGF0ZWQgaW4gSW5kaWE/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWd1bGF0ZWRJbkluZGlhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMVwiLCBlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRldmljZSBSaXNrIENsYXNzaWZpY2F0aW9uIGFzIHBlciBJbmRpYSBNRFIgMjAxN1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhdGFsb2d1ZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk1vZGVsIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkJhdGNoIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VyaWFsIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTb2Z0d2FyZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWNjZXNzb3JpZXMvQXNzb2NpYXRlZCBEZXZpY2VzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkdNRE4gQ29kZSAmYW1wOyBHTUROIFRlcm1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlVESSBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkluc3RhbGxhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXhwaXJhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGFzdCBDYWxpYnJhdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWdlIG9mIGRldmljZSBmcm9tIGRhdGUgb2YgbWFudWZhY3R1cmluZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJIb3cgbG9uZyB3YXMgZGV2aWNlIGluIHVzZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBdmFpbGFiaWxpdHkgb2YgZGV2aWNlIGZvciBldmFsdWF0aW9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zM31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zM1swXX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F2YWlsYWJpbGl0eVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VTdGF0ZU9mUmFkaW8oXCIyXCIsIGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2hhdCBpcyB0aGUgc3RhdHVzIG9mIHRoZSBkZXZpY2U/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2F2YWlsYWJpbGl0eVZhbHVlID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJcyB0aGUgdXNhZ2Ugb2YgZGV2aWNlIGFzIHBlciBtYW51ZmFjdHVyZXJcdTIwMTlzIGNsYWltcy9pbnN0cnVjdGlvbnMgZm9yIHVzZS91c2VyIG1hbnVhbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2FnZVBlck1hbnVmYWN0dXJlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiM1wiLCBlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgdXNhZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzYWdlUGVyTWFudWZhY3R1cmVyID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWd1bGF0b3IgLyBSZWd1bGF0b3J5IHN0YXR1cyBpbiBjb3VudHJ5IG9mIG9yaWdpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVndWxhdGVkSW5JbmRpYSA9PT0gXCJZZXNcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0ZFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2YxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk5hcmFuam9cdTIwMTlzIFNjYWxlPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXJlIHRoZXJlIHByZXZpb3VzIGNvbmNsdXNpb24gcmVwb3J0cyBvbiB0aGlzIHJlYWN0aW9uP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgdGhlcmUgcHJldmlvdXMgY29uY2x1c2lvbiByZXBvcnRzIG9uIHRoaXMgcmVhY3Rpb24/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgYWR2ZXJzZSBldmVudCBhcHBlYXIgYWZ0ZXIgdGhlIHN1c3BlY3QgZHJ1ZyB3YXMgYWRtaW5pc3RlcmVkP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIEFSIGltcHJvdmUgd2hlbiB0aGUgZHJ1ZyB3YXMgZGlzY29udGludWVkIG9yIGEgc3BlY2lmaWMgYW50YWdvbmlzdCB3YXMgYWRtaW5pc3RlcmVkP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIEFSIHJlYXBwZWFyIHdoZW4gZHJ1ZyB3YXMgcmUtYWRtaW5pc3RlcmVkP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgdGhlcmUgYWx0ZXJuYXRlIGNhdXNlcyBbb3RoZXIgdGhhbiB0aGUgZHJ1Z10gdGhhdCBjb3VsZCBzb2xlbHkgaGF2ZSBjYXVzZWQgdGhlIHJlYWN0aW9uP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIHJlYWN0aW9uIHJlYXBwZWFyIHdoZW4gYSBwbGFjZWJvIHdhcyBnaXZlbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZSBkcnVnIGRldGVjdGVkIGluIHRoZSBibG9vZCBbb3Igb3RoZXIgZmx1aWRzXSBpbiBhIGNvbmNlbnRyYXRpb24ga25vd24gdG8gYmUgdG94aWM/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgcmVhY3Rpb24gbW9yZSBzZXZlcmUgd2hlbiB0aGUgZG9zZSB3YXMgaW5jcmVhc2VkIG9yIGxlc3Mgc2V2ZXJlIHdoZW4gdGhlIGRvc2Ugd2FzIGRlY3JlYXNlZD9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlkIHRoZSBwYXRpZW50IGhhdmUgYSBzaW1pbGFyIHJlYWN0aW9uIHRvIHRoZSBzYW1lIG9yIHNpbWlsYXIgZHJ1Z3MgaW4gYW55IHByZXZpb3VzIGV4cG9zdXJlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGFkdmVyc2UgZXZlbnQgY29uZmlybWVkIGJ5IG9iamVjdGl2ZSBldmlkZW5jZT9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIHsvKiBjYWxjdWxhdGVkIHNjb3JlIGZvciB0aGUgQURSIGlzIGRpc3BsYXllZCBoZXJlICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93LXJldmVyc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC14LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1bIzZDNTY3Ql0gcC0wIG0tMFwiPlByb2JhYmxlIEFEUjwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsXCI+MDc8L3NwYW4+LzEwXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGZvbnQtYm9sZCBtLTAgcC0wXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wXCI+UmVzdWx0PC9wPlxyXG4gICAgICAgICAgICAgICAgPEZpSGVscENpcmNsZSBjbGFzc05hbWU9XCJtdC0xIG1sLTFcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS1hdXRvIGZvbnQtYm9sZFwiPlNjb3JlPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94LCBJbnB1dE51bWJlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydGluZyByZWR1eCByZWR1Y2Vyc1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNldE5ld0Zvcm1EYXRhIH0gZnJvbSBcIn4vc3RhdGVzL1NsaWNlcy9BZHJSZXBvcnRpbmdGb3JtLzFcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZm9ybVN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSb290U3RhdGUpID0+IHN0YXRlLmZvcm0xcGFnZTEpO1xyXG4gIGNvbnN0IGNoYW5nZUZvcm1EYXRhID0gKHZhbHVlOiBhbnksIGZpZWxkTmFtZTogYW55KSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXROZXdGb3JtRGF0YSh7IGZpZWxkTmFtZSwgdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBuYW1lPVwiRm9ybTFQYWdlMVwiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgIG9uRmluaXNoPXsodmFsdWVzKSA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfVxyXG4gICAgICAgIGxheW91dD1cInZlcnRpY2FsXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlBhdGllbnQgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJQYXRpZW50IEluaXRpYWxzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwicGF0aWVudEluaXRpYWxzXCJcclxuICAgICAgICAgICAgICBydWxlcz17W1xyXG4gICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJQYXRpZW50IGluaXRpYWxzIGlzIHJlcXVpcmVkXCIgfSxcclxuICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBvZiBCaXJ0aFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiRGF0ZU9mQmlydGhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJBZ2Ugb2YgT25zZXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImFnZU9mT25zZXRcIlxyXG4gICAgICAgICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAgICAgICAgeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogXCJBZ2Ugb2Ygb25zZXQgaXMgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXROdW1iZXIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiR2VuZGVyXCIgbmFtZT1cImdlbmRlclwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdCBhbGxvd0NsZWFyPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cIm1hbGVcIj5NYWxlPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0Lk9wdGlvbiB2YWx1ZT1cImZlbWFsZVwiPkZlbWFsZTwvU2VsZWN0Lk9wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdC5PcHRpb24gdmFsdWU9XCJvdGhlclwiPk90aGVyPC9TZWxlY3QuT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBsYWJlbD1cIldlaWdodFwiIG5hbWU9XCJ3ZWlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dE51bWJlciBhZGRvbkFmdGVyPXtcIm1nc1wifSAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbmFtZT1cInBhdGllbnRJRFwiIGxhYmVsPVwiUGF0aWVudCBJRFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwiSVAvT1BcIiBuYW1lPVwiaXBfb3BcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCJVbml0XCIgbmFtZT1cInVuaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiUmVhc29uIGZvciB0YWtpbmcgbWVkaWNhdGlvbi92YWNjaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInJlYXNvbkZvclRha2luZ01lZGljYXRpb25cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBweS00XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBsYWJlbD1cIk1lZGljaW5lcy92YWNjaW5lcyBhZHZpc2VkIGJ5XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibWVkaWNpbmVBZHZpc2VkXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMvNFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLXgtNSBnYXAteS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIkRvY3RvclwiPkRvY3RvcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJQaGFybWFjaXN0XCI+UGhhcm1hY2lzdDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJGcmllbmRzXCI+RnJpZW5kczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJSZWxhdGl2ZVwiPlJlbGF0aXZlczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJTZWxmIChwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBTZWxmIChwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIlNlbGYgKG5vIHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIFNlbGYgKG5vIHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcclxuICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiS25vd24gQWxsZXJnaWVzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwia25vd25BbGxlcmdpZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJTb2NpYWwgSGlzdG9yeVwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInNvY2lhbEhpc3RvcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjFcIiAvPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gSW1wb3J0IGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtM3hsXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5TdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIHJlYWN0aW9uIHN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGUgb2YgcmVjb3ZlcnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRlc2NyaWJlIHJlYWN0aW9uIG9yIHByb2JsZW1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIyXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIEZvcm0sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMygpIHtcclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPk1lZGljYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbkZvcm1TdWJtaXR9PlxyXG4gICAgICAgICAgPFN1YmZvcm0gLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1YmZvcm0oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJOYW1lIChCcmFuZC9HZW5lcmljKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXQgcmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTWFudWZhY3R1cmVyXCIgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQmF0Y2ggTm8uLyBMb3QgTm8uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNSBwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJFeHAuIERhdGVcIiAvPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRvc2UgdXNlZFwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT17XCJudW1iZXJcIn0gc3VmZml4PVwia2dzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJvdXRlIHVzZWRcIiAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSVAvT1BcIiAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJVbml0XCIgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTVcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZyZXF1ZW5jeSAoT0QsIEJELCBldGMuKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0YXJ0ZWRcIiAvPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RvcHBlZFwiIC8+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTVcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbmRpY2F0aW9uXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHAtMiB3LTMyIGJvcmRlciBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVsjNkM1NjdCXSBib3JkZXItWyM2QzU2N0JdXCI+XHJcbiAgICAgICAgICBTYXZlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LVsjNkM1NjdCXSBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjNkM1NjdCXSBob3ZlcjpiZy1bI0U4NTkwQ10gaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItWyNFODU5MENdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgbW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBJbXBvcnQgQW50IERlc2lnblxyXG5pbXBvcnQgeyBJbnB1dCwgUmFkaW8sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbi8vSW1wb3J0IEltYWdlc1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UmVwb3J0ZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIHsvKiBGaXJzdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBTZWNvbmQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJRCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUGluXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBUaGlyZCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRW1haWwgSURcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJUZWwuIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRm91cnRoICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlByb2YuIEFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIEZpZnRoICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC1bMTZweF1cIj5PY2N1cGF0aW9uPC9wPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgbmFtZT1cIm9jY3VwYXRpb25cIj5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezF9PlBoeXNpY2lhbjwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXsyfT5EZW50aXN0PC9SYWRpbz5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezN9Pk51cnNlPC9SYWRpbz5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezR9PlBoYXJtYWNpc3Q8L1JhZGlvPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHB0LTFcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezV9Pk90aGVyczwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgey8qIFNpeHRoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRGVwYXJ0bWVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiBTZXZlbnRoICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17TnVtYmVyKERhdGUubm93KCkpfSB2YWx1ZSBpcyB0b2RheSdzIGRhdGVcclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIHRoaXMgcmVwb3J0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIEVpZ2h0aCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSZWZlcmVuY2VzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiBOaW50aCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC02IHNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvcnRlcidzIGNvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IENvbGxhcHNlLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2YyKCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIkNlcnRhaW5cIiwgdmFsdWU6IFwiY2VydGFpblwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlByb2JhYmx5IC8gTGlrZWx5XCIsIHZhbHVlOiBcInByb2JhYmx5L2xpa2VseVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlBvc3NpYmxlXCIsIHZhbHVlOiBcInBvc3NpYmxlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiVW5saWtlbHlcIiwgdmFsdWU6IFwidW5saWtlbHlcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJDb25kaXRpb25hbCAvIFVuY2xhc3NpZmllZFwiLCB2YWx1ZTogXCJjb25kaXRpb25hbC91bmNsYXNzaWZpZWRcIiB9LFxyXG4gICAge1xyXG4gICAgICBsYWJlbDogXCJVbi1hc3Nlc3NhYmxlIC8gVW4tY2xhc3NpZmlhYmxlXCIsXHJcbiAgICAgIHZhbHVlOiBcInVuLWFzc2Vzc2FibGUvdW4tY2xhc3NpZmlhYmxlXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktNCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgV0hPIFByb2JhYmlsaXR5IFNjYWxlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIG1heC13LWZpdCBteC1hdXRvIG10LTEwIHB4LTUgcHktMSBib3JkZXItMiBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+QXNzZXNtZW50IGNyaXRlcmlhPC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbWItMSBtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgbXktNFwiPlxyXG4gICAgICAgICAgICAgIDxDb2xsYXBzZSBkZWZhdWx0QWN0aXZlS2V5PXtbXCIxXCJdfT5cclxuICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UGFuZWwgaGVhZGVyPXtvcHRpb24ubGFiZWx9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICAgIENvbW1vZGkgbm9uIHZpdGFlIHJhdGlvbmUgcXVpc3F1YW0gYWxpcXVpZCBlc3QgbmF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgIGZhY2VyZSBoYXJ1bSBlcnJvciBjb25zZWN0ZXR1ciBpbnZlbnRvcmUsIGRvbG9ydW0gcXVpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgYXNwZXJpb3JlcyBpdXJlIHF1byBlYSEgVWxsYW0sIGJsYW5kaXRpaXMgZXhlcmNpdGF0aW9uZW0uXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L1BhbmVsPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2YyXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBSYWRpbywgUHJvZ3Jlc3MgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2YzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSGFydHdpZydzIFNldmVyaXR5IEFzc2Vzc21lbnQgU2NhbGVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkxldmVsIDE8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5MZXZlbCAyPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+TGV2ZWwgMzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezN9PkxldmVsIDQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXs0fT5MZXZlbCA1PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NX0+TGV2ZWwgNjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezZ9PkxldmVsIDc8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICBwZXJjZW50PXszMH1cclxuICAgICAgICAgICAgICAgICAgc3RhdHVzPXtcIm5vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICBzaG93SW5mbz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtcIiNFODU5MENcIn1cclxuICAgICAgICAgICAgICAgICAgdHJhaWxDb2xvcj17XCIjRTVFNUU1XCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntcIk1pbGQgTGV2ZWxcIn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LVsjRTg1OTBDXVwiPkFzc2Vzc21lbnQgY3JpdGVyaWE8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1sLTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICBkcnVnLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgdGhhdCB0aGUgc3VzcGVjdGVkIGRydWcgYmUgd2l0aGhlbGQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb250aW51ZWQgb3Igb3RoZXJ3aXNlIGNoYW5nZWQuIE5vIGFudGlkb3RlIG9yIG90aGVyXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnQgaXMgcmVxdWlyZWQsIGFuZCB0aGVyZSBpcyBubyBpbmNyZWFzZSBpbiBsZW5ndGggb2ZcclxuICAgICAgICAgICAgICAgIHN0YXlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZXJlIGEgaGlzdG9yeSBvZiBhbGxlcmd5IG9yIHByZXZpb3VzIHJlYWN0aW9ucyB0byB0aGUgZHJ1Zz9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgZHJ1ZyBpbnZvbHZlZCBpbmFwcHJvcHJpYXRlIGZvciB0aGUgcGF0aWVudFx1MjAxOXMgY2xpbmljYWwgY29uZGl0aW9uP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZSBkb3NlLCByb3V0ZSBvciBmcmVxdWVuY3kgb2YgYWRtaW5pc3RyYXRpb24gaW5hcHByb3ByaWF0ZSBmb3IgdGhlIHBhdGllbnRcdTIwMTlzIGFnZSwgd2VpZ2h0IG9yIGRpc2Vhc2Ugc3RhdGU/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgYSB0b3hpYyBzZXJ1bSBkcnVnIGNvbmNlbnRyYXRpb24gKG9yIGxhYm9yYXRvcnkgbW9uaXRvcmluZyB0ZXN0KSBkb2N1bWVudGVkP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZXJlIGEga25vd24gdHJlYXRtZW50IGZvciB0aGUgYWR2ZXJzZSBkcnVnIHJlYWN0aW9uP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHJlcXVpcmVkIHRoZXJhcGV1dGljIGRydWcgbW9uaXRvcmluZyBvciBvdGhlciBuZWNlc3NhcnkgbGFiIHRlc3RzIG5vdCBwZXJmb3JtZWQ/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgYSBkcnVnIGludGVyYWN0aW9uIGludm9sdmVkIGluIHRoZSBBRFI/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC02XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE2cHhdIG0tMCBmb250LWJvbGRcIj5GaW5hbCBSZXN1bHQ8L3A+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+RGVmaW5pdGVseSBwcmV2ZW50YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9PlByb2JhYmx5IHByZXZlbnRhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+Tm90IHByZXZlbnRhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2Y0XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2Y1KCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7IGxhYmVsOiBcIkFnZVwiLCB2YWx1ZTogXCJhZ2VcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJHZW5kZXJcIiwgdmFsdWU6IFwiZ2VuZGVyXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiR2VuZXRpY1wiLCB2YWx1ZTogXCJnZW5ldGljXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiSW50ZXItY3VycmVudCBkaXNlYXNlXCIsIHZhbHVlOiBcImludGVyLWN1cnJlbnQgZGlzZWFzZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIk11bHRpcGxlIERydWcgVGhlcmFweVwiLCB2YWx1ZTogXCJtdWx0aXBsZSBkcnVnIHRoZXJhcHlcIiB9LFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktNCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5QcmVkaWN0YWJpbGl0eTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+UHJlZGljdGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5Ob3QgcHJlZGljdGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IG15LTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUHJlZGlzcG9zaW5nIGZhY3RvcnNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveC5Hcm91cCBvcHRpb25zPXtvcHRpb25zfT48L0NoZWNrYm94Lkdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwib3RoZXJcIj5PdGhlcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHN1ZmZpeD17PEZpSGVscENpcmNsZSAvPn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2Y1XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+QWN0aW9uIFRha2VuPC9kaXY+XHJcbiAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNiXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwRHJ1Z3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJEcnVnIHdpdGhkcmF3blwiLFxyXG4gICAgXCJEb3NlIGluY3JlYXNlZFwiLFxyXG4gICAgXCJEb3NlIHJlZHVjZWRcIixcclxuICAgIFwiRG9zZSBub3QgY2hhbmdlZFwiLFxyXG4gICAgXCJOb3QgYXBwbGljYWJsZVwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICB7LyogTWFrZSBkZXNjcmlwdGlvbiBkeW5hbWljICovfVxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEcnVnIDFcIiAvPlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RGVjaGFsbGVuZ2U8L2Rpdj5cclxuICAgICAgICAgIDxSYWRpb0dyb3VwRHJ1Z3MgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2NcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIGRlY2hhbGxlbmdlXCIsXHJcbiAgICBcIkRlZmluaXRlIEltcHJvdmVtZW50XCIsXHJcbiAgICBcIk5vIEltcHJvdmVtZW50XCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRydWcgMVwiIC8+XHJcbiAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2EoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5SZWNoYWxsZW5nZTwvZGl2PlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIFwiTm8gcmVjaGFsbGVuZ2VcIixcclxuICAgIFwiUmVjdXJyYW5jZSBvZiBzeW1wdG9tc1wiLFxyXG4gICAgXCJObyBvY2N1cmFuY2Ugb2Ygc3ltcHRvbXNcIixcclxuICAgIFwiVW5rbm93blwiLFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgey8qIE1ha2UgZGVzY3JpcHRpb24gZHluYW1pYyAqL31cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydGluZyBpY29uc1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUsIEZpUGx1cywgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUmVhY3Rpb24gUmVhcHBlYXJlZCBBZnRlciBSZS1pbnRyb2R1Y3Rpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyAvPlxyXG4gICAgICAgICAgey8qIFNlY3Rpb24gdG8gYWRkIGRydWcgaW5mb3JtYXRpb24gKi99XHJcbiAgICAgICAgICA8QWRkRHJ1Z3NCb3ggLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2VcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIHJlY2hhbGxlbmdlXCIsXHJcbiAgICBcIlJlY3VycmFuY2Ugb2Ygc3ltcHRvbXNcIixcclxuICAgIFwiTm8gb2NjdXJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRydWcgMVwiIC8+XHJcbiAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBsLTEgcHItNyBteS1hdXRvXCI+RG9zZTwvcD5cclxuICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBZGREcnVnc0JveCA9ICgpID0+IHtcclxuICBjb25zdCBbZHJ1Z3NBZGRlZCwgc2V0RHJ1Z3NBZGRlZF0gPSB1c2VTdGF0ZTxyZWFkb25seSBTdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrQWRkRHJ1ZyA9IChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERydWdzQWRkZWQoWy4uLmRydWdzQWRkZWQsIGlucHV0VmFsdWVdKTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlbW92ZURydWcgPSAoZHJ1ZzogU3RyaW5nKSA9PiB7XHJcbiAgICBzZXREcnVnc0FkZGVkKGRydWdzQWRkZWQuZmlsdGVyKChkKSA9PiBkICE9PSBkcnVnKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTE2XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTEgZ2FwLXktM1wiXHJcbiAgICAgICAgb25TdWJtaXQ9e29uQ2xpY2tBZGREcnVnfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGRydWdcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBiZy1bIzZDNTY3Ql0gdGV4dC13aGl0ZSBwLTIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGaVBsdXMgY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtMSBwdC0yXCI+XHJcbiAgICAgICAge2RydWdzQWRkZWQubWFwKChkcnVnOiBTdHJpbmcpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBjb2wtc3Bhbi0xMSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktYXV0b1wiPntkcnVnfTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS1hdXRvXCIgb25DbGljaz17KCkgPT4gb25DbGlja1JlbW92ZURydWcoZHJ1Zyl9PlxyXG4gICAgICAgICAgICAgIDxGaVggLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2coKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcIlNwZWNpZmljXCIsIFwiU3ltcHRvbWF0aWNcIiwgXCJOb25lXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5UcmVhdG1lbnQgR2l2ZW48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwIG9wdGlvbnM9e29wdGlvbnN9PjwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyIG10LTVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0wIHB5LTBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktMCBweS0wXCI+VHJlYXRtZW50IERldGFpbHMgKGlmIGFueSk8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2dcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTAgcHktMFwiPkNvbmNvbWl0YW50IG1lZGljYWwgcHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgSW5jbHVkaW5nIHNlbGYtbWVkaWNhdGlvbiBhbmQgaGVyYmFsIHJlbWVkaWVzIHdpdGggdGhlcmFweSBkYXRlc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTdWJmb3JtIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNoXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTdWJmb3JtID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJOYW1lIChicmFuZC9nZW5lcmljKVwiIC8+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEb3NlIFVzZWRcIiAvPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUm91dGUgVXNlZFwiIC8+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkZyZXF1ZW5jeSAoT0QsIEJEKVwiIC8+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0YXJ0ZWRcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0b3BwZWRcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkluZGljYXRpb25cIiAvPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMCBwdC01XCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICBTYXZlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bIzZDNTY3Ql0gcC0yIHctMzIgYm9yZGVyIGJvcmRlci1bIzZDNTY3Ql0gaG92ZXI6YmctWyNFODU5MENdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgID5cclxuICAgICAgICBBZGQgbW9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIERhdGVQaWNrZXIsIFN3aXRjaCwgQ2hlY2tib3gsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaSgpIHtcclxuICBjb25zdCBbc2VyaW91c1JlYWN0aW9uLCBzZXRTZXJpb3VzUmVhY3Rpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0FwcGxpY2FibGUsIHNldElzQXBwbGljYWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgY2hhbmdlU2VyaW91c25lc3MgPSAoY2hlY2tlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgc2V0U2VyaW91c1JlYWN0aW9uKGNoZWNrZWQpO1xyXG4gIH07XHJcbiAgY29uc3QgY2hhbmdlQXBwbGljYWJpbGl0eSA9IChjaGVja2VkOiBib29sZWFuKSA9PiB7XHJcbiAgICBzZXRJc0FwcGxpY2FibGUoY2hlY2tlZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+QU1DL05DQyBTZWN0aW9uPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00IGdyaWQgZ3JpZC1jb2wtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGNvbC1zcGFuLTZcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci0zXCI+Tm90IEFwcGxpY2FibGU8L3A+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBvbkNoYW5nZT17Y2hhbmdlQXBwbGljYWJpbGl0eX0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0zXCI+QXBwbGljYWJsZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgcHktNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQU1DIFJlcG9ydCBOby5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTlcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9eyFpc0FwcGxpY2FibGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldvcmxkd2lkZSBVbmlxdWUgTm8uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IGRpc2FibGVkPXshaXNBcHBsaWNhYmxlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWxldmFudCB0ZXN0cy8gbGFib3JhdG9yeSBkYXRhIHdpdGggZGF0ZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlbGV2YW50IG1lZGljYWwvIG1lZGljYXRpb24gaGlzdG9yeSAoZS5nLiBhbGxlcmdpZXMsIHJhY2UsIFxyXG4gICAgICAgICAgICAgICAgcHJlZ25hbmN5LCBzbW9raW5nLCBhbGNvaG9sIHVzZSwgaGVwYXRpYy9yZW5hbCBkeXNmdW5jdGlvbiBldGMuKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTZXJpb3VzbmVzcyBvZiB0aGUgcmVhY3Rpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtMiBwbC01XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItM1wiPk5vPC9wPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggb25DaGFuZ2U9e2NoYW5nZVNlcmlvdXNuZXNzfSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsLTNcIj5ZZXM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgZGlzYWJsZWQ9eyFzZXJpb3VzUmVhY3Rpb259PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT17XCJDb25nZW5pdGFsLWFub21hbHlcIn0+XHJcbiAgICAgICAgICAgICAgICAgIENvbmdlbml0YWwtYW5vbWFseVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT17XCJMaWZlIHRocmVhdGVuaW5nXCJ9PlxyXG4gICAgICAgICAgICAgICAgICBMaWZlIHRocmVhdGVuaW5ne1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT17XCJIb3NwaXRhbGl6YXRpb24vUHJvbG9uZ2VkXCJ9PlxyXG4gICAgICAgICAgICAgICAgICBIb3NwaXRhbGl6YXRpb24vUHJvbG9uZ2VkXHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPXtcIkRpc2FiaWxpdHlcIn0+RGlzYWJpbGl0eTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIFwiUmVxdWlyZWQgaW50ZXJ2ZW50aW9uIHRvIFByZXZlbnQgcGVybWFuZW50IGltcGFpcm1lbnQvZGFtYWdlXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBSZXF1aXJlZCBpbnRlcnZlbnRpb24gdG8gUHJldmVudCBwZXJtYW5lbnQgaW1wYWlybWVudC9kYW1hZ2VcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGdyaWQgZ3JpZC1jb2xzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiIHZhbHVlPXtcIkRlYXRoXCJ9PlxyXG4gICAgICAgICAgICAgICAgICBEZWF0aFxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cIm15LWF1dG8gY29sLXNwYW4tMTBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBncmlkIGdyaWQtY29scy0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIiB2YWx1ZT17XCJPdGhlclwifT5cclxuICAgICAgICAgICAgICAgICAgT3RoZXIgKHNwZWNpZnkpXHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cIm15LWF1dG8gY29sLXNwYW4tMTBcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiT3V0Y29tZXNcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJyZWNvdmVyZWRcIj5cclxuICAgICAgICAgICAgICAgIFJlY292ZXJlZFxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJyZWNvdmVyaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNvdmVyaW5nXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIvMTIgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cIm5vdHJlY292ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgTm90IHJlY292ZXJlZFxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0xLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJmYXRhbFwiPlxyXG4gICAgICAgICAgICAgICAgRmF0YWxcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTMvMTIgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJyZWNvdmVyZWR3aXRoc2VxdWVsYWVcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFJlY292ZXJlZCB3aXRoIHNlcXVlbGFlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIvMTIgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cInVua25vd25cIj5cclxuICAgICAgICAgICAgICAgIFVua25vd25cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNpXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2ooKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk91dGNvbWU8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5GYXRhbDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9PlJlY292ZXJ5PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+Q29udGludWluZzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezN9PlVua25vd248L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXs0fT5PdGhlcjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNqXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBJbnB1dCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBFeWVJbnZpc2libGVPdXRsaW5lZCwgRXllVHdvVG9uZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLWxnIHctMS8yIG1pbi1oLTIvNCBteC1hdXRvIG1iLTMyIHAtMTAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql0gdGV4dC1bMzVweF1cIj5BRFIgUG9ydGFsPC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LTEvMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cImV4YW1wbGVAZW1haWwuY29tXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmRcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXJQYXNzd29yZEhlcmVcIlxyXG4gICAgICAgICAgICAgIGljb25SZW5kZXI9eyh2aXNpYmxlKSA9PlxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA/IDxFeWVUd29Ub25lIC8+IDogPEV5ZUludmlzaWJsZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi01IGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEwXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidy0xLzIgYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTJcIj5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtNCB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1sZyB3LTMvNCBtaW4taC0zLzQgbXgtYXV0byBwLTEwIHRleHQtbGVmdFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHRleHQtMnhsXCI+U2VsZWN0IGEgZm9ybSB0byBmaWxsPC9oMj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0xIGdhcC01XCI+XHJcbiAgICAgICAgICA8Q2FyZFNlbGVjdFxyXG4gICAgICAgICAgICByb3V0ZT1cImFkci1yZXBvcnRpbmcvMVwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiMVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJBRFIgUmVwb3J0aW5nIEZvcm1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxDYXJkU2VsZWN0XHJcbiAgICAgICAgICAgIHJvdXRlPVwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzFcIlxyXG4gICAgICAgICAgICBpbWFnZT1cIjJcIlxyXG4gICAgICAgICAgICBuYW1lPVwiTWVkaWNhbCBEZXZpY2UgQURSIFJlcG9ydGluZyBGb3JtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgQ2FyZFNlbGVjdCA9IChwcm9wczogeyBuYW1lOiBzdHJpbmc7IHJvdXRlOiBzdHJpbmc7IGltYWdlPzogc3RyaW5nIH0pID0+IChcclxuICA8TGluayB0bz17cHJvcHMucm91dGV9IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiByb3VuZGVkLWxnIGJvcmRlci1ncmF5LTQwMCBwLTMgaC1mdWxsIGhvdmVyOnNjYWxlLTEwNSBkdXJhdGlvbi03NVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgYWx0PVwiUGxhY2Vob2xkZXIgaW1hZ2VcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTMvNCB3LWZ1bGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC14bCB0ZXh0LWJsYWNrIHB0LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIHtwcm9wcy5uYW1lfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L0xpbms+XHJcbik7XHJcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic2NTdhN2M5YicsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtUFNVTkdEM0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUxZNFNFR1dULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFlCV1E2UlguanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1KTURLN0VQSC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtMk03S0NLUEcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdWM0lMWEoyLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstVUZRTTNUSlIuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgtWE9HSFJCMkMuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVRRkU1UVRLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4LU1TQTZXQk0zLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYic6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYi1QTkhJRkZUTC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2MtQVVXRjJFSzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVRRkU1UVRLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9kJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kLUpHM0tXUlMzLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZSc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZS1aSUFZQURPMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMic6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mLzInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMi1YUjY0QkpNNy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzMnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi8zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzMtUUNWTEdYR1kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVRRkU1UVRLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvNCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80LUhHMk1PNjRRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi81Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvNScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi81LUREM1dXVU1aLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4LVkyU0tGQlZGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZy1QS0tGU1FPRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9oJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oLTZHNEtYUkhWLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaSc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvaScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaS1SMlk2VklBMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleC1GU000VUxDVi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2onOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2onLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2onLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2otQlk1QzQ2NUwuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVRRkU1UVRLLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvNCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4LVJGTkNQWFVHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9pbmRleC1VSjNHNDczSS5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2xvZ2luL2luZGV4Jzp7J2lkJzoncm91dGVzL2xvZ2luL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ2luJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9sb2dpbi9pbmRleC1KTEZTWFdGRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleC1WRlVWS1EyUS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzInLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4LVYzRkJLQk1VLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yRjQ1NUZUNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvaW5kZXgtUDVUTVZYSUcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDSllJNkdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRktCQUhVQVkuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00VDRCNjJLQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTJGNDU1RlQ0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEtRkNTWFU3SU4uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVDSllJNkdXLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yLVRJRlVTTVlBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1GS0JBSFVBWS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zLVJSQUxKSTRPLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay00VDRCNjJLQy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYic6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2InLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYi1QTzdaTzNPSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYyc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYy1EQUxQUlRQVC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZC1ES0xZNU5KNi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVFGRTVRVEsuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4LTJGTzVXUFNILmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUUZFNVFUSy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzUvaW5kZXgtVVJVQUhWWjIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJGNDU1RlQ0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleC1KV01aTE9aVS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMkY0NTVGVDQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4LURIU0hUM1A3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0yRjQ1NUZUNC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTRXS1NHRUlHLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxXSFFUN1lZLmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXgtN1ZORjNPREYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTJGNDU1RlQ0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNFdLU0dFSUcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTFdIUVQ3WVkuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOS9pbmRleC1KRDdEMkZLTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstMkY0NTVGVDQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay00V0tTR0VJRy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MV0hRVDdZWS5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LTY1N0E3QzlCLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7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YTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUloQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWhCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBS2hCLElBQU0seUJBQXVDO0FBQUEsRUFDM0MsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJaEI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxN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
