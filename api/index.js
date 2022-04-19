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
  ErrorBoundary: () => ErrorBoundary,
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
  patientInitials: void 0,
  DateOfBirth: null,
  ageOfOnset: void 0,
  gender: null,
  weight: null,
  patientID: null,
  ip_op: null,
  unit: null,
  reasonForTakingMedication: null,
  medicineAdvised: null,
  knownAllergies: null,
  socialHistory: null
};
var form1page1Slice = (0, import_toolkit.createSlice)({
  name: "form1page1",
  initialState,
  reducers: {
    fetchIncompleteFormsFromUserProfile: (state, action) => {
      state = action.payload;
    },
    submitFormDataToTheBackend: (state) => {
    },
    setNewFormData: (state, action) => {
      state[action.payload.fieldName] = action.payload.value;
    }
  }
});
var { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form1page1Slice.actions;
var __default = form1page1Slice.reducer;

// app/states/store.ts
var store = (0, import_toolkit2.configureStore)({
  reducer: {
    form1page1: __default
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
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
var import_antd = require("antd");
var import_moment = __toESM(require("moment"));
var RootLayout = ({ children }) => {
  import_moment.default.locale("en");
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow-x-hidden bg-white dark:bg-gray-800 min-h-screen dark:text-gray-200"
  }, /* @__PURE__ */ import_react.default.createElement(import_react_redux.Provider, {
    store
  }, /* @__PURE__ */ import_react.default.createElement(Navbar, null), /* @__PURE__ */ import_react.default.createElement(import_antd.ConfigProvider, {
    csp: { nonce: "adrPortalManipal" }
  }, children))));
};
var root_default = RootLayout;

// app/styles/app.css
var app_default = "/build/_assets/app-7X3REKBE.css";

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
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement("html", null, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "Oh no!"), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("h1", null, "Oh no! The application is facing issues."), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null)));
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
var import_antd3 = require("antd");

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
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react2.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Implantability"
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Implantable"), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Implantable"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react2.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reusability"
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 0,
    className: "w-1/4 text-center"
  }, "Single Use Device"), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 1,
    className: "w-1/4 text-center"
  }, "Reusable device"), /* @__PURE__ */ import_react2.default.createElement(import_antd3.Radio.Button, {
    value: 2,
    className: "w-1/2 text-center"
  }, "Reuse of manufactured marked single use"))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ import_react2.default.createElement(import_antd3.Checkbox, null, "Personal use/homecare use ")))));
}
var option1_default = Option1;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option2.tsx
var option2_exports = {};
__export(option2_exports, {
  default: () => option2_default
});
init_react();
var import_antd4 = require("antd");
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
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "Kits")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "Control Materials ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "Reagents")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "IVD Electronic Reader/Analyzer")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "Calibrators")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd4.Checkbox, null, "Others"))))));
}
var option2_default = Option2;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\subforms\option3.tsx
var option3_exports = {};
__export(option3_exports, {
  default: () => option3_default
});
init_react();
var import_antd5 = require("antd");
var { TextArea } = import_antd5.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd5.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd5.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ React.createElement(import_antd5.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ React.createElement(import_antd5.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Invasibility"
  }), /* @__PURE__ */ React.createElement(import_antd5.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd5.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Invasive"), /* @__PURE__ */ React.createElement(import_antd5.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Invasive"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ React.createElement(import_antd5.Checkbox, null, " Imaging ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4"
  }, /* @__PURE__ */ React.createElement(import_antd5.Checkbox, null, " Others "))), /* @__PURE__ */ React.createElement("div", {
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
  const [activeForm, setActiveForm] = (0, import_react3.useState)("");
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
    setActiveForm(currentForm);
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
      formName: activeForm,
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
var import_antd6 = require("antd");

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
    className: "grid grid-cols-3 gap-2"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: previousPage
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C] hover:bg-transparent font-bold",
    type: "submit"
  }, isFirstPage ? "Home" : "Previous")), /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#6C567B] text-[#ebebeb] hover:shadow-xl hover:bg-white hover:text-[#6C567B] p-2 w-32 border font-bold",
    type: "submit"
  }, "Save"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: nextPage
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#E8590C] text-white hover:shadow-xl p-2 w-32 border border-[#E8590C] font-bold hover:bg-transparent"
  }, isLastPage ? "Submit" : "Next"))));
};
var NavigationPanel_default = NavigationPanel;

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\1\index.tsx
function Form3page1() {
  const radioOptions = ["Initial", "Follow-up", "Final", "Trend"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd6.Form, {
    preserve: false,
    scrollToFirstError: true,
    name: "Form3page1",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full rounded-md border p-10 shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Primary Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd6.Form.Item, {
    label: "Reporter Reference Number",
    name: "reporterReferenceNumber",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd6.Input, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd6.Form.Item, {
    label: "Date of Report",
    name: "dateOfReport",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd6.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd6.Form.Item, {
    label: "Type of Report",
    name: "typeOfReport",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  })));
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
var import_antd7 = require("antd");
var { TextArea: TextArea2 } = import_antd7.Input;
function Form1() {
  const [reporterType, setReporterType] = (0, import_react5.useState)("manufacturer");
  const changedReporterType = (e) => {
    setReporterType(e.target.value);
  };
  const radioOptionsReporter = [
    { label: "Manufacturer", value: "manufacturer" },
    { label: "Importer", value: "importer" },
    { label: "Distributor", value: "distributor" },
    { label: "Patients", value: "patients" },
    { label: "Healthcare Professionals", value: "healthcareProfessionals" },
    { label: "Other", value: "other" }
  ];
  const radioOptions = ["Yes", "No", "Don't Know"];
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd7.Form, {
    preserve: false,
    scrollToFirstError: true,
    name: "Form3page2",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full rounded-md border p-10 shadow-xl"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Reporter Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Type of Reporter",
    name: "typeOfReporter",
    className: "w-full",
    rules: [
      {
        required: true,
        message: "Selecting a type of reporter is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptionsReporter,
    optionType: "button",
    defaultValue: "manufacturer",
    value: reporterType,
    onChange: (value) => changedReporterType(value)
  })), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "If Others",
    name: "ifOthers",
    rules: [
      {
        required: reporterType === "other",
        message: "You need to mention the other type of reporter"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Input, {
    disabled: reporterType != "other"
  })), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Has the reporter informed the incident to the manufacturer?",
    name: "hasTheReporterInformedTheIncidentToTheManufacturer",
    className: "w-full",
    rules: [
      {
        required: reporterType != "manufacturer",
        message: "This field is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    disabled: reporterType === "manufacturer"
  })), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Is the reporter also submitting the report on behalf of the manufacturer?",
    name: "isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer",
    className: "w-full",
    rules: [
      {
        required: reporterType != "manufacturer",
        message: "This field is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    disabled: reporterType === "manufacturer"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Name",
    name: "name",
    className: "w-full",
    rules: [
      {
        required: true,
        message: "Name is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Input, null)), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Phone Number",
    name: "phoneNumber",
    className: "w-full",
    rules: [
      {
        required: true,
        message: "Phone number is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Input, null))), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Email Id",
    name: "emailId",
    className: "w-full",
    rules: [
      {
        required: true,
        message: "Email ID is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd7.Input, null)), /* @__PURE__ */ React.createElement(import_antd7.Form.Item, {
    label: "Address",
    name: "address",
    className: "w-full",
    rules: [
      {
        required: true,
        message: "Address is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(TextArea2, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\3\index.tsx
var __exports3 = {};
__export(__exports3, {
  default: () => Form3page9
});
init_react();
var import_react7 = require("react");
var import_antd11 = require("antd");

// app/routes/medical-device-reporting/3/subforms/option1.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_antd8 = require("antd");
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
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react6.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Implantability"
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Implantable"), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Implantable"))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ import_react6.default.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reusability"
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 0,
    className: "w-1/4 text-center"
  }, "Single Use Device"), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 1,
    className: "w-1/4 text-center"
  }, "Reusable device"), /* @__PURE__ */ import_react6.default.createElement(import_antd8.Radio.Button, {
    value: 2,
    className: "w-1/2 text-center"
  }, "Reuse of manufactured marked single use"))), /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ import_react6.default.createElement(import_antd8.Checkbox, null, "Personal use/homecare use ")))));
}
var option1_default2 = Option12;

// app/routes/medical-device-reporting/3/subforms/option2.tsx
init_react();
var import_antd9 = require("antd");
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
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "Kits")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "Control Materials ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "Reagents")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "IVD Electronic Reader/Analyzer")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "Calibrators")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd9.Checkbox, null, "Others"))))));
}
var option2_default2 = Option22;

// app/routes/medical-device-reporting/3/subforms/option3.tsx
init_react();
var import_antd10 = require("antd");
var { TextArea: TextArea3 } = import_antd10.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd10.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center"
  }, "Therapeutic"), /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center"
  }, "Diagnostic"), /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 2,
    className: "w-1/3 text-center"
  }, " ", "Both", " "))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Invasibility"
  }), /* @__PURE__ */ React.createElement(import_antd10.Radio.Group, {
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 0,
    className: "w-1/2 text-center"
  }, "Invasive"), /* @__PURE__ */ React.createElement(import_antd10.Radio.Button, {
    value: 1,
    className: "w-1/2 text-center"
  }, "Non-Invasive"))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4 py-8"
  }, /* @__PURE__ */ React.createElement(import_antd10.Checkbox, null, " Imaging ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 mx-4"
  }, /* @__PURE__ */ React.createElement(import_antd10.Checkbox, null, " Others "))), /* @__PURE__ */ React.createElement("div", {
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
  }, /* @__PURE__ */ React.createElement(import_antd11.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd11.Radio.Button, {
    value: 0,
    className: "w-1/3 text-center",
    onClick: () => {
      setOpt1(true);
      setOpt2(false);
      setOpt3(false);
    }
  }, "Medical Device"), /* @__PURE__ */ React.createElement(import_antd11.Radio.Button, {
    value: 1,
    className: "w-1/3 text-center",
    onClick: () => {
      setOpt1(false);
      setOpt2(true);
      setOpt3(false);
    }
  }, "In Vitro Diagnostics"), /* @__PURE__ */ React.createElement(import_antd11.Radio.Button, {
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
var import_antd12 = require("antd");
var { TextArea: TextArea4 } = import_antd12.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
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
var import_antd13 = require("antd");
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
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd13.Form, {
    name: "Form3page5",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Event Description"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Date of Event",
    name: "dateOfEvent",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Date of Implant",
    name: "dateOfImplant",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Location of event",
    name: "locationOfEvent",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Device Operator",
    name: "deviceOperator",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Device location",
    name: "deviceLocation",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    optionType: "button",
    onChange: (e) => {
      changeDeviceLocation(e);
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Date of return",
    name: "dateOfReturn"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Serious event?",
    name: "seriousEvent"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button",
    onChange: (e) => {
      changeSeriousEventState(e);
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Reason",
    name: "reason",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions5,
    optionType: "button",
    disabled: !isSeriousEvent,
    onChange: (e) => {
      changeSeriousEventValue(e);
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Date of death",
    name: "dateOfDeath"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    disabled: !isDead
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Is device in use after the incident?",
    name: "isDeviceInUse"
  }, /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Detailed description of the incident",
    name: "detailedDescription"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input.TextArea, {
    rows: 4
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[22px] text-[#E8590C]"
  }, "Frequency of occurrence of similar adverse events in India"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Year",
    name: "year",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    picker: "year",
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Number of similar events",
    name: "numberOfSimilarIndia",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, {
    type: "number",
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Total number suplied",
    name: "totalNumberSuppliedIndia"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, {
    type: "number"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Frequency",
    name: "frequencyIndia",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, {
    className: "w-full"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[22px] text-[#E8590C]"
  }, "Frequency of occurrence of similar adverse events globally"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Year",
    name: "year",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    picker: "year",
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Number of similar events",
    name: "numberOfSimilarGlobal",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, {
    type: "number"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Total number suplied",
    name: "totalNumberSuppliedGlobal"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, {
    type: "number"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd13.Form.Item, {
    label: "Frequency",
    name: "frequencyGlobal"
  }, /* @__PURE__ */ React.createElement(import_antd13.Input, null)))))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "5"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\6\index.tsx
var __exports6 = {};
__export(__exports6, {
  default: () => Form3page6
});
init_react();
var import_antd14 = require("antd");
var import_react9 = require("react");
function Form3page6() {
  const [isRecovered, setIsRecovered] = (0, import_react9.useState)();
  const [isDead, setIsDead] = (0, import_react9.useState)();
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
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd14.Form, {
    name: "Form3page6",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Patient Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Patient Hospital Number",
    name: "patientHospitalNumber"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Patient Initials",
    name: "patientInitials"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Age",
    name: "age",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Weight",
    name: "weight"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Sex",
    name: "sex",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd14.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    name: "history",
    label: "Other relevant history, including pre-existing medical conditions",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input.TextArea, {
    rows: 4,
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Has the patient recovered?",
    name: "patientRecovered"
  }, /* @__PURE__ */ React.createElement(import_antd14.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button",
    onChange: (e) => {
      changeRecoveryData(e);
    }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Date of recovery",
    name: "dateOfRecovery",
    className: "w-full",
    required: isRecovered
  }, /* @__PURE__ */ React.createElement(import_antd14.DatePicker, {
    className: "w-full",
    disabled: !isRecovered
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Is the patient dead?",
    name: "patientDead",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd14.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button",
    onChange: (e) => {
      changeDeathData(e);
    },
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Date of death",
    name: "dateOfDeath",
    className: "w-full",
    required: isDead
  }, /* @__PURE__ */ React.createElement(import_antd14.DatePicker, {
    className: "w-full",
    disabled: !isDead
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd14.Form.Item, {
    label: "Other patient outcomes",
    name: "otherPatientOutcomes",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd14.Input.TextArea, {
    rows: 4,
    className: "w-full"
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "6"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\7\index.tsx
var __exports7 = {};
__export(__exports7, {
  default: () => Form3page7
});
init_react();
var import_antd15 = require("antd");
function Form3page7() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd15.Form, {
    name: "Form3page7",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Healthcare Facility Details")), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd15.Form.Item, {
    label: "Name",
    name: "name",
    className: "w-100"
  }, /* @__PURE__ */ React.createElement(import_antd15.Input, {
    className: "w-100"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd15.Form.Item, {
    label: "Address",
    name: "address",
    className: "w-100"
  }, /* @__PURE__ */ React.createElement(import_antd15.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd15.Form.Item, {
    label: "Contact Number of Person at the site of event",
    name: "contactNumber"
  }, /* @__PURE__ */ React.createElement(import_antd15.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd15.Form.Item, {
    label: "Telephone Number",
    name: "telephoneNumber"
  }, /* @__PURE__ */ React.createElement(import_antd15.Input, null))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "7"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\8\index.tsx
var __exports8 = {};
__export(__exports8, {
  default: () => Form3page8
});
init_react();
var import_antd16 = require("antd");
function Form3page8() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd16.Form, {
    name: "Form3page8",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Casualty Assessment"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(import_antd16.Form.Item, {
    name: "investigationAction",
    label: "Investigation action taken"
  }, /* @__PURE__ */ React.createElement(import_antd16.Input.TextArea, {
    rows: 4
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(import_antd16.Form.Item, {
    name: "rootCause",
    label: "Root cause of problem"
  }, /* @__PURE__ */ React.createElement(import_antd16.Input.TextArea, {
    rows: 4
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "8"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\9\index.tsx
var __exports9 = {};
__export(__exports9, {
  default: () => Form3page92
});
init_react();
var import_antd17 = require("antd");
function Form3page92() {
  return /* @__PURE__ */ React.createElement(medical_device_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd17.Form, {
    name: "Form3page9",
    initialValues: { remember: true },
    onFinish: (value) => console.log(value),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Product Owner's Investigation"), /* @__PURE__ */ React.createElement(import_antd17.Form.Item, {
    label: "Product Owner's device risk analysis report",
    name: "productOwnersDeviceRiskAnalysisReport"
  }, /* @__PURE__ */ React.createElement(import_antd17.Input.TextArea, {
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_antd17.Form.Item, {
    label: "Corrective / preventive action taken",
    name: "correctiveActionTaken"
  }, /* @__PURE__ */ React.createElement(import_antd17.Input.TextArea, {
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_antd17.Form.Item, {
    label: "Device history review",
    name: "deviceHistoryReview"
  }, /* @__PURE__ */ React.createElement(import_antd17.Input.TextArea, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "9"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\b.tsx
var b_exports = {};
__export(b_exports, {
  default: () => Form3page4b
});
init_react();
var import_antd18 = require("antd");
var { TextArea: TextArea5 } = import_antd18.Input;
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
  }), /* @__PURE__ */ React.createElement(TextArea5, {
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
var import_antd19 = require("antd");
var { TextArea: TextArea6 } = import_antd19.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea6, {
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
var import_antd20 = require("antd");
var { TextArea: TextArea7 } = import_antd20.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Catalogue Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Model Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Batch Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Serial Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Software Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Accessories/Associated Devices"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "GMDN Code & GMDN Term"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "UDI Number"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Installation Date"
  }), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Expiration Date"
  }), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Last Calibration"
  }), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Age of device from date of manufacturing"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "How long was device in use"
  }), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Availability of device for evaluation"
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(import_antd20.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(TextArea7, {
    rows: 3,
    placeholder: "",
    disabled: usagePerManufacturer === "No"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Regulator / Regulatory status in country of origin"
  }), /* @__PURE__ */ React.createElement(TextArea7, {
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
var import_antd21 = require("antd");
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd21.Form, {
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
  }, "Naranjo\u2019s Scale"), formLayout.map((field, index) => /* @__PURE__ */ React.createElement(import_antd21.Form.Item, {
    key: index,
    name: index,
    label: field,
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd21.Radio.Group, {
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
var import_antd22 = require("antd");
var import_moment2 = __toESM(require("moment"));
var import_react_redux2 = require("react-redux");
function Form1page1() {
  const dispatch = (0, import_react_redux2.useDispatch)();
  const formState = (0, import_react_redux2.useSelector)((state) => state.form1page1);
  let newFormState = __spreadProps(__spreadValues({}, formState), {
    DateOfBirth: (0, import_moment2.default)(formState.DateOfBirth ? formState.DateOfBirth : new Date())
  });
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd22.Form, {
    preserve: false,
    scrollToFirstError: true,
    name: "Form1Page1",
    initialValues: newFormState,
    onFinish: (values) => console.log(values),
    onValuesChange: (values) => changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0]),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Patient Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Patient Initials",
    name: "patientInitials",
    rules: [
      { required: true, message: "Patient initials is required" }
    ],
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Date of Birth",
    name: "DateOfBirth",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.DatePicker, {
    className: "w-full",
    format: "DD/MM/YYYY"
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    className: "w-full",
    label: "Age of Onset",
    name: "ageOfOnset",
    rules: [
      { required: true, message: "Age of onset is required" }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd22.InputNumber, {
    style: { width: "100%" }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Gender",
    name: "gender",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Select, {
    allowClear: true,
    options: genderOptions
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    className: "w-full",
    label: "Weight",
    name: "weight"
  }, /* @__PURE__ */ React.createElement(import_antd22.InputNumber, {
    addonAfter: "mgs"
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    name: "patientID",
    label: "Patient ID",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "IP/OP",
    name: "ip_op",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null)), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Unit",
    name: "unit",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null))), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Reason for taking medication/vaccination",
    name: "reasonForTakingMedication",
    className: "w-full py-4"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input.TextArea, {
    rows: 4
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Medicines/vaccines advised by",
    name: "medicineAdvised",
    className: "w-3/4"
  }, /* @__PURE__ */ React.createElement(import_antd22.Checkbox.Group, {
    className: "w-full grid grid-cols-3 gap-x-5 gap-y-2",
    options: advisedMedicineOptions,
    name: "medicineAdvised"
  })), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Known Allergies",
    name: "knownAllergies",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null)), /* @__PURE__ */ React.createElement(import_antd22.Form.Item, {
    label: "Social History",
    name: "socialHistory",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd22.Input, null)))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\2\index.tsx
var __exports11 = {};
__export(__exports11, {
  default: () => Form1page2
});
init_react();
var import_antd23 = require("antd");
var { TextArea: TextArea8 } = import_antd23.Input;
function Form1page2() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd23.Form, {
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
  }, /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    className: "w-full",
    label: "Date of reaction started",
    name: "dateOfReactionStarted",
    rules: [{ required: true, message: "Date of reaction started" }]
  }, /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    className: "w-full",
    label: "Date of recovery",
    name: "dateOfRecovery"
  }, /* @__PURE__ */ React.createElement(import_antd23.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd23.Form.Item, {
    className: "w-full",
    label: "Describe reaction or problem",
    name: "reactionDescription",
    rules: [
      { required: true, message: "Reaction description is mandatory" }
    ]
  }, /* @__PURE__ */ React.createElement(TextArea8, {
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
var import_antd24 = require("antd");
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
  return /* @__PURE__ */ React.createElement(import_antd24.Form, {
    name: "Form1Page3",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    className: "w-full",
    label: "Name (Brand/Generic)",
    name: "nameOfDrug",
    rules: [{ required: true, message: "Drug name is mandatory" }]
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, {
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "manufacturer",
    label: "Manufacturer",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    label: "Batch No. / Lot No.",
    name: "BatchNo_LotNo",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "expDate",
    label: "Exp. Date",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "doseUsed",
    label: "Dose used",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, {
    type: "number",
    suffix: "kgs"
  })), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "routeUsed",
    label: "Route used",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "ip_op",
    label: "IP_OP",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "unit",
    label: "Unit",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null))), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "frequency",
    label: "Frequency (OD, BD, etc.)",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "dateStarted",
    label: "Date started",
    className: "w-full",
    rules: [{ required: true, message: "Start date is mandatory" }]
  }, /* @__PURE__ */ React.createElement(import_antd24.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "dateStopped",
    label: "Date stopped",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd24.Form.Item, {
    name: "Indication",
    label: "Indication",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
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
var import_react11 = require("react");
var import_antd25 = require("antd");
var import_fi4 = require("react-icons/fi");
var { TextArea: TextArea9 } = import_antd25.Input;
function Form1page4() {
  const [occupationState, setOccupationState] = (0, import_react11.useState)("");
  const [isOccupationApplicable, setIsOccupationApplicable] = (0, import_react11.useState)(false);
  (0, import_react11.useEffect)(() => {
    if (occupationState === "other") {
      setIsOccupationApplicable(true);
    } else {
      setIsOccupationApplicable(false);
    }
  }, [occupationState]);
  const [form] = import_antd25.Form.useForm();
  const radioOptions = [
    { label: "Physician", value: "physician" },
    { label: "Dentist", value: "dentist" },
    { label: "Nurse", value: "nurse" },
    { label: "Pharmacist", value: "pharmacist" },
    { label: "Other", value: "other" }
  ];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd25.Form, {
    form,
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
    className: "grid grid-cols-2 gap-5 pb-8"
  }, /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "name",
    label: "Name",
    className: "w-full col-span-2",
    rules: [
      {
        required: true,
        message: "Date of death is required"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null)), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "idNumber",
    label: "ID Number",
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null)), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "pin",
    label: "Pin",
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null)), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "email",
    label: "Email ID",
    rules: [
      {
        required: true,
        message: "Email ID is required"
      }
    ],
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null)), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "telephoneNumber",
    label: "Telephone Number",
    rules: [
      {
        required: true,
        message: "Telephone is required"
      }
    ],
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null))), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    label: "Prof. Address",
    name: "profAddress",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(TextArea9, {
    rows: 2
  })), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "occupation",
    label: "Occupation",
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    onChange: () => setOccupationState(form.getFieldValue("occupation"))
  })), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    className: "w-full",
    name: "other",
    label: "Mention the occupation",
    hidden: occupationState !== "other",
    rules: [
      {
        required: isOccupationApplicable,
        message: "Entering non-listed occupation is mandatory"
      }
    ]
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi4.FiHelpCircle, null),
    disabled: occupationState !== "other"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    name: "department",
    label: "Department"
  }, /* @__PURE__ */ React.createElement(import_antd25.Input, null)), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    label: "Date of this report",
    name: "dateOfReport"
  }, /* @__PURE__ */ React.createElement(import_antd25.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    label: "References",
    name: "references",
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(TextArea9, {
    rows: 2
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement(import_antd25.Form.Item, {
    label: "Reporter's Comment",
    name: "reportersComment"
  }, /* @__PURE__ */ React.createElement(TextArea9, {
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
var import_antd26 = require("antd");
var { Panel } = import_antd26.Collapse;
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd26.Form, {
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
  }, "WHO Probability Scale"), /* @__PURE__ */ React.createElement(import_antd26.Form.Item, {
    name: "whoProbabiltyScale",
    label: "Scale value",
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd26.Radio.Group, {
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
  }, /* @__PURE__ */ React.createElement(import_antd26.Collapse, {
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
var import_antd27 = require("antd");
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd27.Form, {
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
  }, /* @__PURE__ */ React.createElement(import_antd27.Form.Item, {
    name: "hartwigseveritytest",
    label: "Select a level"
  }, /* @__PURE__ */ React.createElement(import_antd27.Radio.Group, {
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
  }, /* @__PURE__ */ React.createElement(import_antd27.Progress, {
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
var import_antd28 = require("antd");
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd28.Form, {
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
  }, "Modified Schumock and Thornton scale"), formLayout.map((field, index) => /* @__PURE__ */ React.createElement(import_antd28.Form.Item, {
    key: index,
    name: index,
    label: field,
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd28.Radio.Group, {
    options: formRadioOptions,
    optionType: "button"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[16px] m-0 font-bold text-gray-800 dark:text-gray-300"
  }, "Final Result"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Group, {
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
var import_react12 = require("react");
var import_antd29 = require("antd");
var import_fi7 = require("react-icons/fi");
function Form1page3f5() {
  const [predisposingFactorsValues, setPredisposingFactorsValues] = (0, import_react12.useState)([""]);
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd29.Form, {
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
  }, "Predictability"), /* @__PURE__ */ React.createElement(import_antd29.Form.Item, {
    name: "predictability",
    label: "Predictability",
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "my-4 text-[24px] text-[#E8590C]"
  }, "Predisposing factors"), /* @__PURE__ */ React.createElement(import_antd29.Form.Item, {
    name: "predisposingFactors",
    label: "Predisposing factors"
  }, /* @__PURE__ */ React.createElement(import_antd29.Checkbox.Group, {
    options,
    onChange: (e) => onChangeCheckBoxGroup(e)
  })), /* @__PURE__ */ React.createElement(import_antd29.Form.Item, {
    name: "otherInformation",
    label: "If other, mention the factor"
  }, /* @__PURE__ */ React.createElement(import_antd29.Input, {
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
var import_antd30 = require("antd");
function Form1page3a() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd30.Form, {
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

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\c.tsx
var c_exports2 = {};
__export(c_exports2, {
  default: () => Form1page3a2
});
init_react();
var import_antd31 = require("antd");
function Form1page3a2() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd31.Form, {
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

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\d.tsx
var d_exports2 = {};
__export(d_exports2, {
  default: () => Form1page3a3
});
init_react();
var import_antd32 = require("antd");
function Form1page3a3() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd32.Form, {
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
  const radioFields = props.drugOptions.map((drug, index) => /* @__PURE__ */ React.createElement(import_antd32.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd32.Radio.Group, {
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
var import_antd33 = require("antd");
function Form1page3e() {
  const drugs = ["drug1", "drug2", "drug3"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd33.Form, {
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
  }, /* @__PURE__ */ React.createElement(import_antd33.Form.Item, {
    name: drug,
    label: drug,
    className: "w-full",
    key: index
  }, /* @__PURE__ */ React.createElement(import_antd33.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement(import_antd33.Form.Item, {
    name: "drugDose_" + drug,
    label: "Dose",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd33.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi8.FiHelpCircle, null)
  }))));
  return /* @__PURE__ */ React.createElement(React.Fragment, null, componentsForDrugs);
};
var AddDrugsBox = () => {
  return /* @__PURE__ */ React.createElement(import_antd33.Form.Item, {
    className: "w-full pt-21",
    name: "additionalDrugs",
    label: "Add a drug"
  }, /* @__PURE__ */ React.createElement(import_antd33.Select, {
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
var import_antd34 = require("antd");
var import_TextArea = __toESM(require("antd/lib/input/TextArea"));
function Form1page3g() {
  const options = ["Specific", "Symptomatic", "None"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd34.Form, {
    name: "Form1Page3g",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C] pb-5"
  }, "Treatment Given"), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
    name: "treatment given",
    label: "Select the treatment given",
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd34.Checkbox.Group, {
    options
  })), /* @__PURE__ */ React.createElement(import_antd34.Form.Item, {
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
var import_antd35 = require("antd");
function Form1page3h() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd35.Form, {
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
var Subform2 = () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "min-w-full pt-4",
  label: "Name (brand/generic)",
  name: "name",
  rules: [{ required: true, message: "Drug name is mandatory" }]
}, /* @__PURE__ */ React.createElement(import_antd35.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "col-span-1",
  label: "Dose used",
  name: "doseUsage"
}, /* @__PURE__ */ React.createElement(import_antd35.Input, null)), /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "col-span-1",
  label: "Route used",
  name: "routeUsed"
}, /* @__PURE__ */ React.createElement(import_antd35.Input, null))), /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "mt-4 w-full",
  label: "Frequency (OD, BD)",
  name: "frequency"
}, /* @__PURE__ */ React.createElement(import_antd35.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "col-span-1",
  label: "Date started",
  name: "startDate",
  rules: [{ required: true, message: "Start date is mandatory" }]
}, /* @__PURE__ */ React.createElement(import_antd35.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "col-span-1",
  label: "Date stopped",
  name: "stopDate"
}, /* @__PURE__ */ React.createElement(import_antd35.DatePicker, {
  className: "w-full"
}))), /* @__PURE__ */ React.createElement(import_antd35.Form.Item, {
  className: "mt-4 w-full",
  label: "Indication",
  name: "indication"
}, /* @__PURE__ */ React.createElement(import_antd35.Input, null)), /* @__PURE__ */ React.createElement("div", {
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
var import_react13 = __toESM(require("react"));
var import_antd36 = require("antd");
var { TextArea: TextArea11 } = import_antd36.Input;
function Form1page3i() {
  const [seriousReaction, setSeriousReaction] = (0, import_react13.useState)(false);
  const [isApplicable, setIsApplicable] = (0, import_react13.useState)(false);
  const [seriousnessLevelState, setSeriousnessLevelState] = (0, import_react13.useState)();
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
  return /* @__PURE__ */ import_react13.default.createElement(adr_reporting_default, null, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form, {
    name: "Form1Page3i",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "text-[24px] text-[#E8590C] mb-5"
  }, "AMC/NCC Section"), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    name: "applicability",
    label: "Applicability",
    className: "w-full flex"
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Switch, {
    checkedChildren: "Applicable",
    unCheckedChildren: "Not applicable",
    onChange: changeApplicability,
    checked: isApplicable
  })), /* @__PURE__ */ import_react13.default.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    className: "w-full",
    name: "amcReportNumber",
    label: "AMC Report Number",
    rules: [
      {
        required: isApplicable,
        message: "AMC Report number is mandatory"
      }
    ],
    hidden: !isApplicable
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Input, {
    disabled: !isApplicable
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    label: "Worldwide Unique Number",
    name: "worldwideUniqueNumber",
    className: "w-full",
    rules: [
      {
        required: isApplicable,
        message: "Worldwide Unique number is mandatory"
      }
    ],
    hidden: !isApplicable
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Input, {
    disabled: !isApplicable
  }))), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    className: "w-full",
    label: "Relevant tests/ laboratory data with dates",
    name: "relevantTests"
  }, /* @__PURE__ */ import_react13.default.createElement(TextArea11, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    className: "w-full",
    label: "Relevant medical/ medication history (e.g. allergies, race, \r\n                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)",
    name: "relevantMedicalHistory"
  }, /* @__PURE__ */ import_react13.default.createElement(TextArea11, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    label: "Was it a serious reaction?",
    name: "seriousnessOfTheReaction",
    className: "w-full"
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Switch, {
    checkedChildren: "Yes",
    unCheckedChildren: "No",
    onChange: changeSeriousness,
    checked: seriousReaction
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    label: "Seriousness level",
    name: "seriousnessLevel",
    className: "w-full",
    hidden: !seriousReaction,
    rules: [
      {
        required: seriousReaction,
        message: "Selecting an option is mandatory"
      }
    ]
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Checkbox.Group, {
    disabled: !seriousReaction,
    options: checkBoxOptions,
    onChange: (value) => setSeriousnessLevelState(value)
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
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
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.DatePicker, {
    className: "w-full",
    disabled: false
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
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
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Input, {
    className: "my-auto col-span-10"
  })), /* @__PURE__ */ import_react13.default.createElement(import_antd36.Form.Item, {
    label: "Outcome",
    name: "outcome",
    className: "w-full"
  }, /* @__PURE__ */ import_react13.default.createElement(import_antd36.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    optionType: "button",
    options: radioOptions
  }))), /* @__PURE__ */ import_react13.default.createElement(NavigationPanel_default, {
    currentRoute: "3i"
  })));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\j.tsx
var j_exports = {};
__export(j_exports, {
  default: () => Form1page3j
});
init_react();
var import_antd37 = require("antd");
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
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement(import_antd37.Form, {
    name: "Form1Page3j",
    initialValues: { remember: true },
    onFinish: (values) => console.log(values),
    layout: "vertical"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Outcome"), /* @__PURE__ */ React.createElement(import_antd37.Form.Item, {
    name: "outcome",
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd37.Radio.Group, {
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
var import_antd38 = require("antd");
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
  }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement(import_antd38.Input, {
    placeholder: "example@email.com"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5"
  }, /* @__PURE__ */ React.createElement("label", null, "Password"), /* @__PURE__ */ React.createElement(import_antd38.Input.Password, {
    placeholder: "YourPasswordHere",
    iconRender: (visible) => visible ? /* @__PURE__ */ React.createElement(import_icons.EyeTwoTone, null) : /* @__PURE__ */ React.createElement(import_icons.EyeInvisibleOutlined, null)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5 flex flex-row justify-center"
  }, /* @__PURE__ */ React.createElement(import_antd38.Checkbox, {
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
var assets_manifest_default = { "version": "8c2d3bfa", "entry": { "module": "/build/entry.client-5NVUZN2S.js", "imports": ["/build/_shared/chunk-AN36TRRU.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-SEEWGTPW.js", "imports": ["/build/_shared/chunk-UG3OIBCA.js", "/build/_shared/chunk-ED3PRSQ4.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-O6NPQIBQ.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-XIYSQWF6.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-VECWMGCE.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-7NE7NDA7.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-LLD6NOAW.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-NDZKZTRG.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-6KDZMSON.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-RRXO6OJD.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-UGSZ6BGL.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-CE3NJ2UJ.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-M4EFN2C5.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-QM2NIMRQ.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-2SFGRRGF.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-HZ5GNNCQ.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-CI6C6OU6.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/j": { "id": "routes/adr-reporting/3/j", "parentId": "root", "path": "adr-reporting/3/j", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/j-657GE5EF.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-3JLNJF4V.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UPOFFRFY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-M47BVZJA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-ICNWA2SC.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-J3U4PVXN.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-6W7VU7C5.js", "imports": ["/build/_shared/chunk-RHXPXORR.js", "/build/_shared/chunk-MQB3YJ2C.js", "/build/_shared/chunk-5EWBFGCY.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-XCNLJ62N.js", "imports": ["/build/_shared/chunk-RHXPXORR.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-QCOEISQM.js", "imports": ["/build/_shared/chunk-MQB3YJ2C.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-QC3UOXKE.js", "imports": ["/build/_shared/chunk-5EWBFGCY.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-BRFFYJNN.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-BRMQWHW5.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-PLSGJZPW.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-M2JK2O4E.js", "imports": ["/build/_shared/chunk-DYU4FMBI.js", "/build/_shared/chunk-EFPSDUQY.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-ILVVHRYV.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-HC6IZZ3M.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-O62V4VGA.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-YN4UTQWP.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-KOOTRISF.js", "imports": ["/build/_shared/chunk-CGQ4N4P7.js", "/build/_shared/chunk-VVNETURD.js", "/build/_shared/chunk-HNGX5OOT.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8C2D3BFA.js" };

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
 * @remix-run/node v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/index.js.map
