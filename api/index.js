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

// app/states/Slices/formOne/1.ts
init_react();
var import_toolkit = require("@reduxjs/toolkit");
var initialState = {
  value: 0
};
var form1page1Slice = (0, import_toolkit.createSlice)({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});
var { increment, decrement, incrementByAmount } = form1page1Slice.actions;
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
var app_default = "/build/_assets/app-FWO6B346.css";

// app/styles/global.css
var global_default = "/build/_assets/global-JU6HE6B3.css";

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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react2.default.createElement(import_antd2.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd4.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd4.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
          name: "Outcome",
          pageLink: "3i",
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
var SuspectedAdrReporting = {
  baseUrl: "/suspected-adr-reporting",
  template: [
    {
      name: "Patient Information",
      pageLink: "1",
      isCompleted: false,
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
          name: "Reaction reappeared after reintroduction",
          pageLink: "3c",
          isCompleted: false,
          children: []
        },
        {
          name: "Concomitant medical product",
          pageLink: "3d",
          isCompleted: false,
          children: []
        },
        {
          name: "AMC/NCC Section",
          pageLink: "3e",
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
  const [adrReportingData, setAdrReportingData] = (0, import_react3.useState)(AdrReporting.template);
  const [activeTab, setActiveTab] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    const currentLocation = location.pathname.split("/");
    const currentForm = currentLocation[1];
    const currentPage = currentLocation[2];
    const currentPageSub = currentLocation.length >= 4 ? currentLocation[3] : "";
    const currentPageSubSub = currentLocation.length >= 5 ? currentLocation[4] : "";
    if (currentForm === "adr-reporting") {
      setAdrReportingData(AdrReporting.template);
    }
    if (currentForm === "suspected-adr-reporting") {
      setAdrReportingData(SuspectedAdrReporting.template);
    }
    if (currentForm === "medical-device-reporting") {
      setAdrReportingData(MedicalDeviceReporting.template);
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
  }, "INDIAN PHARMACOPOEIA COMMISSION"), /* @__PURE__ */ React.createElement("p", {
    className: "text-[7px] border-t-2 border-[#6C567B] pt-2 font-bold"
  }, "(National Coordination Centre-Pharmacovigilance Programme of India)", /* @__PURE__ */ React.createElement("br", null), "Ministry of Health & Family Welfare, Government of India Sector-23, Raj Nagar, Ghaziabad-201002"))), /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl p-5 rounded-lg text-[#6C567B] border"
  }, adrReportingData.map((item, index) => {
    return /* @__PURE__ */ React.createElement(ListItems, __spreadProps(__spreadValues({
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
  "4"
];
var SuspectedAdrReporting_portalMap = [
  "1",
  "2",
  "3",
  "3b",
  "3c",
  "3d",
  "3e",
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
  const currentLocation = location.pathname.split("/");
  const pageType = currentLocation[1] === "adr-reporting" ? { link: "/adr-reporting/", mapRoute: ADRreporting_portalMap } : currentLocation[1] === "suspected-adr-reporting" ? {
    link: "/suspected-adr-reporting/",
    mapRoute: SuspectedAdrReporting_portalMap
  } : {
    link: "/medical-device-reporting/",
    mapRoute: MedicalDeviceReporting_portalMap
  };
  (0, import_react4.useEffect)(() => {
    for (let route = 0; route < pageType.mapRoute.length; route++) {
      if (props.currentRoute === pageType.mapRoute[route]) {
        if (route < pageType.mapRoute.length - 1 && route != 0) {
          setNextPage(pageType.link + pageType.mapRoute[route + 1].split("").join("/"));
          setPreviousPage(pageType.link + pageType.mapRoute[route - 1].split("").join("/"));
        } else if (route === pageType.mapRoute.length - 1) {
          setNextPage(pageType + "submit");
          setPreviousPage(pageType.link + pageType.mapRoute[route - 1].split("").join("/"));
        } else if (route === 0) {
          setNextPage(pageType.link + pageType.mapRoute[route + 1].split("").join("/"));
          setPreviousPage("/");
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
    className: "bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C]"
  }, "Previous")), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: nextPage
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#E8590C] text-white hover:shadow-xl p-2 w-32"
  }, "Next"))));
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd5.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of report",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd5.DatePicker, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Type of report",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd5.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    defaultValue: radioOptions[0],
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
    isRequired: true,
    description: "Type of Reporter"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    buttonStyle: "solid",
    className: "w-full",
    onChange: (e) => changedReporterType(e),
    defaultValue: reporterType
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
    isRequired: true,
    description: "Has the reporter informed the incident to the manufacturer?"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    defaultValue: 0,
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
    isRequired: true,
    description: "Is the reporter also submitting the report on behalf of the manufacturer?"
  }), /* @__PURE__ */ React.createElement(import_antd6.Radio.Group, {
    defaultValue: 0,
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Phone Number"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Email ID"
  }), /* @__PURE__ */ React.createElement(import_antd6.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ import_react6.default.createElement(import_antd7.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd9.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd9.Radio.Group, {
    className: "w-full",
    defaultValue: 0,
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
  const [opt1, setOpt1] = (0, import_react7.useState)(true);
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
    defaultValue: 0,
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd11.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd11.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of Implant",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Location of event",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    optionType: "button",
    defaultValue: radioOptions1[0]
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device Operator",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button",
    defaultValue: radioOptions2[0]
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device location",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    optionType: "button",
    defaultValue: radioOptions3[0]
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of return",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Serious event?",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button",
    defaultValue: radioOptions4[1],
    onChange: (e) => {
      changeSeriousEventState(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Reason",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions5,
    optionType: "button",
    defaultValue: radioOptions5[2],
    disabled: !isSeriousEvent,
    onChange: (e) => {
      changeSeriousEventValue(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of death",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    disabled: !isDead
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Is device in use after the incident?",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    optionType: "button",
    defaultValue: radioOptions4[0]
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Detailed description of the incident",
    isRequired: true
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    picker: "year"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Number of similar events",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Total number suplied",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Frequency",
    isRequired: true
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.DatePicker, {
    picker: "year"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Number of similar events",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Total number suplied",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Input, {
    type: "number"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Frequency",
    isRequired: true
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Patient Initials",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Age",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Weight",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Sex",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    defaultValue: radioOptions1[0],
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Other relevant history, including pre-existing medical conditions"
  }), /* @__PURE__ */ React.createElement(TextArea6, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Has the patient recovered?",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    defaultValue: radioOptions2[0],
    optionType: "button",
    onChange: (e) => {
      changeRecoveryData(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of recovery",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full",
    disabled: isRecovered === false
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Is the patient dead?",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    defaultValue: radioOptions2[1],
    optionType: "button",
    onChange: (e) => {
      changeDeathData(e);
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Date of death",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd13.DatePicker, {
    className: "w-full",
    disabled: isDead === false
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Other patient outcomes",
    isRequired: true
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
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Address",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Contact Number of Person at the site of event",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd14.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Telephone Number",
    isRequired: true
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
    isRequired: true,
    description: "Product Owners device risk analysis report"
  }), /* @__PURE__ */ React.createElement(TextArea8, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\1\index.tsx
var __exports10 = {};
__export(__exports10, {
  default: () => Form2page1
});
init_react();
var import_antd18 = require("antd");

// app/components/forms/suspectedADRRadioMenu/index.tsx
init_react();
var import_antd17 = require("antd");
var import_react10 = require("react");
var RadioOptions = () => /* @__PURE__ */ React.createElement("div", {
  className: "w-full grid grid-cols-2 gap-4"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(InputRadioComponent, {
  title: "Report Type",
  radioOptionFalse: "Predictable",
  radioOptionTrue: "Not Predictable"
})), /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(InputRadioComponent, {
  title: "AMC/NCC",
  radioOptionFalse: "Applicable",
  radioOptionTrue: "Not Applicable"
})));
var InputRadioComponent = (props) => {
  const [selectedOption, setSelectedOption] = (0, import_react10.useState)(props.radioOptionFalse);
  const radioOnChange = (checked) => {
    checked ? setSelectedOption(props.radioOptionTrue) : setSelectedOption(props.radioOptionFalse);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col items-center justify-center rounded-lg border p-8 shadow-md"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-xl font-semibold"
  }, " ", props.title), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row gap-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "bold text-base font-medium"
  }, props.radioOptionFalse), /* @__PURE__ */ React.createElement(import_antd17.Switch, {
    onChange: radioOnChange
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-base font-medium"
  }, props.radioOptionTrue)));
};
var suspectedADRRadioMenu_default = RadioOptions;

// app/layouts/forms/suspected-adr-reporting/index.tsx
init_react();
var FormLayout3 = ({ children }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-screen flex-col items-center justify-center pt-8 text-[35px] text-[#6C567B]"
  }, "Suspected ADR Reporting", /* @__PURE__ */ React.createElement("div", {
    className: "w-1/3 border-[1px] border-[#6C567B] bg-[#6C567B]"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-lg"
  }, "For VOLUNTARY reporting of Adverse Drug Reactions by Healthcare Professionals")), /* @__PURE__ */ React.createElement("div", {
    className: "w-100 grid grid-cols-12 gap-5 px-16 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(sidebar_default, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9 p-2"
  }, children)));
};
var suspected_adr_reporting_default = FormLayout3;

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\1\index.tsx
function Form2page1() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col rounded-xl border p-10 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Patient Information"), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Patient Initials"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of Birth"
  }), /* @__PURE__ */ React.createElement(import_antd18.DatePicker, {
    style: { width: "100%" }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Age at time of event"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Gender"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Weight"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, {
    suffix: "kgs"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col mt-5"
  }, /* @__PURE__ */ React.createElement(suspectedADRRadioMenu_default, null)), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\2\index.tsx
var __exports11 = {};
__export(__exports11, {
  default: () => Form2page2
});
init_react();
var import_antd19 = require("antd");
var import_TextArea = __toESM(require("antd/lib/input/TextArea"));
function Form2page2() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col rounded-xl border p-10 shadow-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Suspected Adverse Reaction"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of Recovery"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, {
    style: { width: "100%" }
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of Reaction Started"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, {
    style: { width: "100%" }
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Describe reaction or problem"
  }), /* @__PURE__ */ React.createElement(import_TextArea.default, {
    rows: 4
  })))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\3\index.tsx
var __exports12 = {};
__export(__exports12, {
  default: () => Form2page3
});
init_react();
var import_antd20 = require("antd");
function Form2page3() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px]"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Medication")), /* @__PURE__ */ React.createElement(SubForm, null)), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3"
  }));
}
var SubForm = () => /* @__PURE__ */ React.createElement(import_antd20.Form, null, /* @__PURE__ */ React.createElement("div", {
  className: "pt-4"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Name (Brand/Generic)"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-5"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Manufacturer"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Batch No./ Lot No."
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null))), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-3 gap-5 pt-5"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Expiry Date"
}), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Dose Used"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, {
  suffix: "kgs"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Route Used"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null))), /* @__PURE__ */ React.createElement("div", {
  className: "min-w-full pt-5"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Frequency (OD, BD, etc)"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-5"
}, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Date Started"
}), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Date Stopped"
}), /* @__PURE__ */ React.createElement(import_antd20.DatePicker, {
  className: "w-full"
}))), /* @__PURE__ */ React.createElement("div", {
  className: "min-w-full pt-5"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Indication"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "min-w-full pt-5"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Casualty Assessment"
}), /* @__PURE__ */ React.createElement(import_antd20.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-row justify-between w-100 pt-5"
}, /* @__PURE__ */ React.createElement("button", {
  className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
}, "Save"), /* @__PURE__ */ React.createElement("button", {
  type: "submit",
  className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
}, "Add more")));

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\4\index.tsx
var __exports13 = {};
__export(__exports13, {
  default: () => Form3page42
});
init_react();
var import_antd21 = require("antd");
var TextArea10 = import_antd21.Input.TextArea;
function Form3page42() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Reporter Details"), /* @__PURE__ */ React.createElement(import_antd21.Form, null, /* @__PURE__ */ React.createElement("div", {
    className: "py-4 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of this report"
  }), /* @__PURE__ */ React.createElement(import_antd21.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of this report"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 grid grid-cols-12 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-6"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Email ID"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-6"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Tel. No."
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Professional Address"
  }), /* @__PURE__ */ React.createElement(TextArea10, {
    rows: 2
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-4 grid grid-cols-12 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-6"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Pincode"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-6"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Occupation"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\medical-device-reporting\4\b.tsx
var b_exports = {};
__export(b_exports, {
  default: () => Form3page4b
});
init_react();
var import_antd22 = require("antd");
var { TextArea: TextArea11 } = import_antd22.Input;
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd22.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd22.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea11, {
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
var import_antd23 = require("antd");
var { TextArea: TextArea12 } = import_antd23.Input;
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd23.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Address"
  }), /* @__PURE__ */ React.createElement(TextArea12, {
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
var import_react11 = require("react");
var import_antd24 = require("antd");
var { TextArea: TextArea13 } = import_antd24.Input;
function Form3page4d() {
  const [regulatedInIndia, setRegulatedInIndia] = (0, import_react11.useState)("Yes");
  const [availabilityValue, setAvailabilityValue] = (0, import_react11.useState)("Yes");
  const [usagePerManufacturer, setUsagePerManufacturer] = (0, import_react11.useState)("Yes");
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
    isRequired: true,
    description: "Is the device notified/regulated in India?"
  }), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions1,
    defaultValue: radioOptions1[0],
    optionType: "button",
    value: regulatedInIndia,
    onChange: (e) => changeStateOfRadio("1", e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Device Risk Classification as per India MDR 2017"
  }), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    defaultValue: radioOptions2[0],
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Catalogue Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Model Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Batch Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Serial Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Software Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Accessories/Associated Devices"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "GMDN Code & GMDN Term"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "UDI Number"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Installation Date"
  }), /* @__PURE__ */ React.createElement(import_antd24.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Expiration Date"
  }), /* @__PURE__ */ React.createElement(import_antd24.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Last Calibration"
  }), /* @__PURE__ */ React.createElement(import_antd24.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd24.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Age of device from date of manufacturing"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "How long was device in use"
  }), /* @__PURE__ */ React.createElement(import_antd24.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Availability of device for evaluation"
  }), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
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
  }), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions4,
    defaultValue: radioOptions4[0],
    optionType: "button",
    disabled: availabilityValue === "No"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Is the usage of device as per manufacturer\u2019s claims/instructions for use/user manual"
  }), /* @__PURE__ */ React.createElement(import_antd24.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    defaultValue: radioOptions3[0],
    optionType: "button",
    value: usagePerManufacturer,
    onChange: (e) => changeStateOfRadio("3", e)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Specify usage"
  }), /* @__PURE__ */ React.createElement(TextArea13, {
    rows: 3,
    placeholder: "",
    disabled: usagePerManufacturer === "No"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Regulator / Regulatory status in country of origin"
  }), /* @__PURE__ */ React.createElement(TextArea13, {
    rows: 3,
    placeholder: "",
    disabled: regulatedInIndia === "Yes"
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4d"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\3\b.tsx
var b_exports2 = {};
__export(b_exports2, {
  default: () => Form2page3b
});
init_react();
var import_antd25 = require("antd");
function Form2page3b() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
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
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd25.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    defaultValue: radioOptions[0]
  }));
};

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\3\c.tsx
var c_exports2 = {};
__export(c_exports2, {
  default: () => Form1page3c
});
init_react();
var import_antd26 = require("antd");
var import_fi3 = require("react-icons/fi");
function Form1page3c() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Reaction reappeared after reintroduction"), /* @__PURE__ */ React.createElement(RadioGroupDrugs2, null)), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3c"
  }));
}
var RadioGroupDrugs2 = () => /* @__PURE__ */ React.createElement("div", {
  className: "pt-4"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Drug 1"
}), /* @__PURE__ */ React.createElement(import_antd26.Radio.Group, {
  defaultValue: 0,
  buttonStyle: "solid",
  className: "w-full"
}, /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
  className: "w-1/3",
  value: 0
}, "No"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
  className: "w-1/3",
  value: 1
}, "Yes"), /* @__PURE__ */ React.createElement(import_antd26.Radio.Button, {
  className: "w-1/3",
  value: 2
}, "Effects Unknown")), /* @__PURE__ */ React.createElement("div", {
  className: "flex items-center pt-5"
}, /* @__PURE__ */ React.createElement("p", {
  className: "mb-[0px] pr-3 text-[16px]"
}, "Dose"), /* @__PURE__ */ React.createElement(import_antd26.Input, {
  suffix: /* @__PURE__ */ React.createElement(import_fi3.FiHelpCircle, null),
  className: "w-16"
})));

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\3\d.tsx
var d_exports2 = {};
__export(d_exports2, {
  default: () => Form1page3d
});
init_react();
var import_antd27 = require("antd");
function Form1page3d() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Concomitant medical product including self-medication and herbal remedies with therapy dates"), /* @__PURE__ */ React.createElement(FormGroup, null)), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3d"
  }));
}
var FormGroup = () => {
  return /* @__PURE__ */ React.createElement(import_antd27.Form, null, /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Name( Brand/Generic)"
  }), /* @__PURE__ */ React.createElement(import_antd27.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Dose Used"
  }), /* @__PURE__ */ React.createElement(import_antd27.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Route Used"
  }), /* @__PURE__ */ React.createElement(import_antd27.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Frequency (OD, BD etc.)"
  }), /* @__PURE__ */ React.createElement(import_antd27.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date started"
  }), /* @__PURE__ */ React.createElement(import_antd27.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date stopped"
  }), /* @__PURE__ */ React.createElement(import_antd27.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Indication"
  }), /* @__PURE__ */ React.createElement(import_antd27.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-between w-100 pt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
  }, "Add more")));
};

// route:D:\Projects\ADR-portal\app\routes\suspected-adr-reporting\3\e.tsx
var e_exports = {};
__export(e_exports, {
  default: () => Form3page3e
});
init_react();
var import_antd28 = require("antd");
var { TextArea: TextArea14 } = import_antd28.Input;
function Form3page3e() {
  return /* @__PURE__ */ React.createElement(suspected_adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "AMC/NCC Section"), /* @__PURE__ */ React.createElement(import_antd28.Form, null, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "AMC Report No."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9"
  }, /* @__PURE__ */ React.createElement(import_antd28.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Worldwide Unique No."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9"
  }, /* @__PURE__ */ React.createElement(import_antd28.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Relevant tests/ laboratory data with dates"
  }), /* @__PURE__ */ React.createElement(TextArea14, {
    rows: 2,
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Relevant medical/ medication history (e.g. allergies, race, \r\n                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)"
  }), /* @__PURE__ */ React.createElement(TextArea14, {
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
  }, "No"), /* @__PURE__ */ React.createElement(import_antd28.Switch, null), /* @__PURE__ */ React.createElement("p", {
    className: "pl-3"
  }, "Yes"))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, null, "Congenital-anomaly")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, null, "Life threatening ")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, null, "Hospitalization/Prolonged")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, null, "Disability")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, null, "Required intervention to Prevent permanent impairment/damage")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-12"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, {
    className: "col-span-2"
  }, "Death"), /* @__PURE__ */ React.createElement(import_antd28.DatePicker, {
    className: "my-auto col-span-10"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 grid grid-cols-12"
  }, /* @__PURE__ */ React.createElement(import_antd28.Checkbox, {
    className: "col-span-2"
  }, "Other (specify)"), /* @__PURE__ */ React.createElement(import_antd28.Input, {
    className: "my-auto col-span-10"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "py-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Outcomes"
  }), /* @__PURE__ */ React.createElement(import_antd28.Radio.Group, {
    defaultValue: "recovered",
    className: "w-full",
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-2/12 text-center",
    value: "recovered"
  }, "Recovered"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-2/12 text-center",
    value: "recovering"
  }, "Recovering"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-2/12 text-center",
    value: "notrecovered"
  }, "Not recovered"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-1/12 text-center",
    value: "fatal"
  }, "Fatal"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-3/12 text-center",
    value: "recoveredwithsequelae"
  }, "Recovered with sequelae"), /* @__PURE__ */ React.createElement(import_antd28.Radio.Button, {
    className: "w-2/12 text-center",
    value: "unknown"
  }, "Unknown"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3e"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\index.tsx
var f_exports = {};
__export(f_exports, {
  default: () => Form1page3f1
});
init_react();
var import_fi4 = require("react-icons/fi");
var import_antd29 = require("antd");
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
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Are there previous conclusion reports on this reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the adverse event appear after the suspect drug was administered?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the AR improve when the drug was discontinued or a specific antagonist was administered?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the AR reappear when drug was re-administered?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Are there alternate causes [other than the drug] that could solely have caused the reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the reaction reappear when a placebo was given?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 2
  }, "Don't know"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the adverse event confirmed by objective evidence?"
  }), /* @__PURE__ */ React.createElement(import_antd29.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
    value: 1
  }, "No"), /* @__PURE__ */ React.createElement(import_antd29.Radio.Button, {
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
  }, "Result"), /* @__PURE__ */ React.createElement(import_fi4.FiHelpCircle, {
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
var __exports14 = {};
__export(__exports14, {
  default: () => Form12
});
init_react();
var import_antd30 = require("antd");
var { TextArea: TextArea15 } = import_antd30.Input;
function Form12() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-3xl"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-[#E8590C]"
  }, "Patient Information")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Patient Initials"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of Birth"
  }), /* @__PURE__ */ React.createElement(import_antd30.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Age"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Gender"
  }), /* @__PURE__ */ React.createElement(import_antd30.Form.Item, null, /* @__PURE__ */ React.createElement(import_antd30.Select, {
    allowClear: true
  }, /* @__PURE__ */ React.createElement("option", null, "Male"), /* @__PURE__ */ React.createElement("option", null, "Female"), /* @__PURE__ */ React.createElement("option", null, "Other")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Weight"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, {
    addonAfter: "mgs"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Patient ID"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "IP/OP"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Unit"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Reason for taking medication/vaccination"
  }), /* @__PURE__ */ React.createElement(TextArea15, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-3/4 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Medicines/vaccines advised by"
  }), /* @__PURE__ */ React.createElement(import_antd30.Checkbox.Group, {
    className: "w-full grid grid-cols-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "A"
  }, "Doctor")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "B"
  }, "Pharmacist")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "C"
  }, "Friends")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "D"
  }, "Relatives"))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "E"
  }, "Self (past disease experienced)")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd30.Checkbox, {
    value: "F"
  }, "Self (no past disease experienced)")))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Known Allergies"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Social History"
  }), /* @__PURE__ */ React.createElement(import_antd30.Input, null))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\2\index.tsx
var __exports15 = {};
__export(__exports15, {
  default: () => Form1page2
});
init_react();
var import_antd31 = require("antd");
var { TextArea: TextArea16 } = import_antd31.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd31.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of recovery"
  }), /* @__PURE__ */ React.createElement(import_antd31.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Describe reaction or problem"
  }), /* @__PURE__ */ React.createElement(TextArea16, {
    rows: 4
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "2"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\index.tsx
var __exports16 = {};
__export(__exports16, {
  default: () => Form1page3
});
init_react();
var import_antd32 = require("antd");
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
  return /* @__PURE__ */ React.createElement(import_antd32.Form, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Name (Brand/Generic)"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, {
    required: true
  })), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Manufacturer"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Batch No./ Lot No."
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Exp. Date"
  }), /* @__PURE__ */ React.createElement(import_antd32.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Dose used"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, {
    type: "number",
    suffix: "kgs"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Route used"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "IP/OP"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Unit"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Frequency (OD, BD, etc.)"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pb-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date started"
  }), /* @__PURE__ */ React.createElement(import_antd32.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date stopped"
  }), /* @__PURE__ */ React.createElement(import_antd32.DatePicker, {
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pb-5"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Indication"
  }), /* @__PURE__ */ React.createElement(import_antd32.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row justify-between w-100"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
  }, "Save"), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "bg-white text-[#6C567B] p-2 w-32 border border-[#6C567B] hover:bg-[#E8590C] hover:text-white hover:border-[#E8590C]"
  }, "Add more")));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\4\index.tsx
var __exports17 = {};
__export(__exports17, {
  default: () => Form1page4
});
init_react();
var import_antd33 = require("antd");
var import_fi5 = require("react-icons/fi");
var { TextArea: TextArea17 } = import_antd33.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-1 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "ID Number"
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Pin"
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null)), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Email ID"
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Tel. Number"
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null)), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Prof. Address"
  }), /* @__PURE__ */ React.createElement(TextArea17, {
    rows: 2
  })), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-1 text-[16px]"
  }, "Occupation"), /* @__PURE__ */ React.createElement(import_antd33.Radio.Group, {
    name: "occupation"
  }, /* @__PURE__ */ React.createElement(import_antd33.Radio, {
    value: 1
  }, "Physician"), /* @__PURE__ */ React.createElement(import_antd33.Radio, {
    value: 2
  }, "Dentist"), /* @__PURE__ */ React.createElement(import_antd33.Radio, {
    value: 3
  }, "Nurse"), /* @__PURE__ */ React.createElement(import_antd33.Radio, {
    value: 4
  }, "Pharmacist")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row items-center pt-1"
  }, /* @__PURE__ */ React.createElement(import_antd33.Radio, {
    value: 5
  }, "Others"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full"
  }, /* @__PURE__ */ React.createElement(import_antd33.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi5.FiHelpCircle, null)
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 gap-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Department"
  }), /* @__PURE__ */ React.createElement(import_antd33.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Date of this report"
  }), /* @__PURE__ */ React.createElement(import_antd33.DatePicker, {
    className: "w-full"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "References"
  }), /* @__PURE__ */ React.createElement(TextArea17, {
    rows: 2
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reporter's comments"
  }), /* @__PURE__ */ React.createElement(TextArea17, {
    rows: 2
  }))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "4"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\2.tsx
var __exports18 = {};
__export(__exports18, {
  default: () => Form1page3f2
});
init_react();
var import_fi6 = require("react-icons/fi");
var import_antd34 = require("antd");
var { Panel } = import_antd34.Collapse;
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
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Are there previous conclusion reports on this reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd34.Radio.Group, {
    defaultValue: "certain",
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
  }, /* @__PURE__ */ React.createElement(import_fi6.FiHelpCircle, null))), /* @__PURE__ */ React.createElement("div", {
    className: "px-4 my-4"
  }, /* @__PURE__ */ React.createElement(import_antd34.Collapse, {
    defaultActiveKey: ["1"]
  }, options.map((option, index) => /* @__PURE__ */ React.createElement(Panel, {
    header: option.label,
    key: index
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi non vitae ratione quisquam aliquid est natus facere harum error consectetur inventore, dolorum quis asperiores iure quo ea! Ullam, blanditiis exercitationem.")))))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f2"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\3.tsx
var __exports19 = {};
__export(__exports19, {
  default: () => Form1page3f3
});
init_react();
var import_fi7 = require("react-icons/fi");
var import_antd35 = require("antd");
function Form1page3f3() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Hartwig's Severity Assessment Scale"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-4 min-w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd35.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 0
  }, "Level 1"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 1
  }, "Level 2"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 2
  }, "Level 3"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 3
  }, "Level 4"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 4
  }, "Level 5"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 5
  }, "Level 6"), /* @__PURE__ */ React.createElement(import_antd35.Radio.Button, {
    value: 6
  }, "Level 7")), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-2/3 mr-3"
  }, /* @__PURE__ */ React.createElement(import_antd35.Progress, {
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
  }, /* @__PURE__ */ React.createElement(import_fi7.FiHelpCircle, null))), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires that the suspected drug be withheld, discontinued or otherwise changed. No antidote or other treatment is required, and there is no increase in length of stay"), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."), /* @__PURE__ */ React.createElement("p", null, "The ADR requires no change in the treatment with the suspected drug."))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f3"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\4.tsx
var __exports20 = {};
__export(__exports20, {
  default: () => Form1page3f4
});
init_react();
var import_antd36 = require("antd");
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
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the drug involved inappropriate for the patient\u2019s clinical condition?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was the dose, route or frequency of administration inappropriate for the patient\u2019s age, weight or disease state?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was a toxic serum drug concentration (or laboratory monitoring test) documented?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was there a known treatment for the adverse drug reaction?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was required therapeutic drug monitoring or other necessary lab tests not performed?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Was a drug interaction involved in the ADR?"
  }), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Yes"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "No"))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-6"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-[16px] m-0 font-bold"
  }, "Final Result"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 0
  }, "Definitely preventable"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 1
  }, "Probably preventable"), /* @__PURE__ */ React.createElement(import_antd36.Radio.Button, {
    value: 2
  }, "Not preventable"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f4"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\f\5.tsx
var __exports21 = {};
__export(__exports21, {
  default: () => Form1page3f5
});
init_react();
var import_antd37 = require("antd");
var import_fi8 = require("react-icons/fi");
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
  }, /* @__PURE__ */ React.createElement(import_antd37.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd37.Radio.Button, {
    value: 0
  }, "Predictable"), /* @__PURE__ */ React.createElement(import_antd37.Radio.Button, {
    value: 1
  }, "Not predictable"))), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 my-4 text-[24px] text-[#E8590C]"
  }, "Predisposing factors"), /* @__PURE__ */ React.createElement("div", {
    className: "pl-4"
  }, /* @__PURE__ */ React.createElement(import_antd37.Checkbox.Group, {
    options
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col justify-center"
  }, /* @__PURE__ */ React.createElement(import_antd37.Checkbox, {
    value: "other"
  }, "Other")), /* @__PURE__ */ React.createElement(import_antd37.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi8.FiHelpCircle, null)
  }))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3f5"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\b.tsx
var b_exports3 = {};
__export(b_exports3, {
  default: () => Form1page3a
});
init_react();
var import_antd38 = require("antd");
function Form1page3a() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Action Taken"), /* @__PURE__ */ React.createElement(RadioGroupDrugs3, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3b"
  }));
}
var RadioGroupDrugs3 = () => {
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
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd38.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    defaultValue: radioOptions[0]
  }));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\c.tsx
var c_exports3 = {};
__export(c_exports3, {
  default: () => Form1page3a2
});
init_react();
var import_antd39 = require("antd");
function Form1page3a2() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Dechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs4, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3c"
  }));
}
var RadioGroupDrugs4 = () => {
  const radioOptions = [
    "No dechallenge",
    "Definite Improvement",
    "No Improvement",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd39.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    defaultValue: radioOptions[0]
  }));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\d.tsx
var d_exports3 = {};
__export(d_exports3, {
  default: () => Form1page3a3
});
init_react();
var import_antd40 = require("antd");
function Form1page3a3() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Rechallenge"), /* @__PURE__ */ React.createElement(RadioGroupDrugs5, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3d"
  }));
}
var RadioGroupDrugs5 = () => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd40.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    defaultValue: radioOptions[0]
  }));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\e.tsx
var e_exports2 = {};
__export(e_exports2, {
  default: () => Form1page3e
});
init_react();
var import_react12 = require("react");
var import_fi9 = require("react-icons/fi");
var import_antd41 = require("antd");
function Form1page3e() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Reaction Reappeared After Re-introduction"), /* @__PURE__ */ React.createElement(RadioGroupDrugs6, null), /* @__PURE__ */ React.createElement(AddDrugsBox, null))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3e"
  }));
}
var RadioGroupDrugs6 = () => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
    "Unknown"
  ];
  return /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Drug 1"
  }), /* @__PURE__ */ React.createElement(import_antd41.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions,
    optionType: "button",
    defaultValue: radioOptions[0]
  }), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "pl-1 pr-7 my-auto"
  }, "Dose"), /* @__PURE__ */ React.createElement(import_antd41.Input, {
    suffix: /* @__PURE__ */ React.createElement(import_fi9.FiHelpCircle, null)
  })));
};
var AddDrugsBox = () => {
  const [drugsAdded, setDrugsAdded] = (0, import_react12.useState)([]);
  const [inputValue, setInputValue] = (0, import_react12.useState)("");
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
  }, /* @__PURE__ */ React.createElement(import_antd41.Input, {
    className: "col-span-11",
    placeholder: "Add a drug",
    onChange: onChangeInput,
    value: inputValue
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "col-span-1 bg-[#6C567B] text-white p-2 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
  }, /* @__PURE__ */ React.createElement(import_fi9.FiPlus, {
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
  }, /* @__PURE__ */ React.createElement(import_fi9.FiX, null))))));
};

// route:D:\Projects\ADR-portal\app\routes\adr-reporting\3\g.tsx
var g_exports = {};
__export(g_exports, {
  default: () => Form1page3g
});
init_react();
var import_antd42 = require("antd");
var import_TextArea2 = __toESM(require("antd/lib/input/TextArea"));
function Form1page3g() {
  const options = ["Specific", "Symptomatic", "None"];
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Treatment Given"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-2"
  }, /* @__PURE__ */ React.createElement(import_antd42.Checkbox.Group, {
    options
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border mt-5"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "my-0 py-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-medium my-0 py-0"
  }, "Treatment Details (if any)")), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_TextArea2.default, {
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
var import_antd43 = require("antd");
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
  isRequired: true,
  description: "Name (brand/generic)"
}), /* @__PURE__ */ React.createElement(import_antd43.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Dose Used"
}), /* @__PURE__ */ React.createElement(import_antd43.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Route Used"
}), /* @__PURE__ */ React.createElement(import_antd43.Input, null))), /* @__PURE__ */ React.createElement("div", {
  className: "mt-4 w-full"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Frequency (OD, BD)"
}), /* @__PURE__ */ React.createElement(import_antd43.Input, null)), /* @__PURE__ */ React.createElement("div", {
  className: "grid grid-cols-2 gap-5 pt-4"
}, /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: true,
  description: "Date started"
}), /* @__PURE__ */ React.createElement(import_antd43.DatePicker, {
  className: "w-full"
})), /* @__PURE__ */ React.createElement("div", {
  className: "col-span-1"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Date stopped"
}), /* @__PURE__ */ React.createElement(import_antd43.DatePicker, {
  className: "w-full"
}))), /* @__PURE__ */ React.createElement("div", {
  className: "mt-4 w-full"
}, /* @__PURE__ */ React.createElement(inputDescription_default, {
  isRequired: false,
  description: "Indication"
}), /* @__PURE__ */ React.createElement(import_antd43.Input, null)), /* @__PURE__ */ React.createElement("div", {
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
var import_antd44 = require("antd");
function Form1page3i() {
  return /* @__PURE__ */ React.createElement(adr_reporting_default, null, /* @__PURE__ */ React.createElement("div", {
    className: "shadow-xl rounded-md w-full p-10 border"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "text-[24px] text-[#E8590C]"
  }, "Outcome"), /* @__PURE__ */ React.createElement("div", {
    className: "w-full pt-4"
  }, /* @__PURE__ */ React.createElement(import_antd44.Radio.Group, {
    defaultValue: 0,
    buttonStyle: "solid"
  }, /* @__PURE__ */ React.createElement(import_antd44.Radio.Button, {
    value: 0
  }, "Fatal"), /* @__PURE__ */ React.createElement(import_antd44.Radio.Button, {
    value: 1
  }, "Recovery"), /* @__PURE__ */ React.createElement(import_antd44.Radio.Button, {
    value: 2
  }, "Continuing"), /* @__PURE__ */ React.createElement(import_antd44.Radio.Button, {
    value: 3
  }, "Unknown"), /* @__PURE__ */ React.createElement(import_antd44.Radio.Button, {
    value: 4
  }, "Other"))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "3i"
  }));
}

// route:D:\Projects\ADR-portal\app\routes\login\index.tsx
var login_exports = {};
__export(login_exports, {
  default: () => Login
});
init_react();
var import_antd45 = require("antd");
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
  }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement(import_antd45.Input, {
    placeholder: "example@email.com"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5"
  }, /* @__PURE__ */ React.createElement("label", null, "Password"), /* @__PURE__ */ React.createElement(import_antd45.Input.Password, {
    placeholder: "YourPasswordHere",
    iconRender: (visible) => visible ? /* @__PURE__ */ React.createElement(import_icons.EyeTwoTone, null) : /* @__PURE__ */ React.createElement(import_icons.EyeInvisibleOutlined, null)
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-left mb-5 flex flex-row justify-center"
  }, /* @__PURE__ */ React.createElement(import_antd45.Checkbox, {
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
    className: "w-screen h-screen flex flex-col pt-14"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-lg w-3/4 min-h-3/4 mx-auto p-10 text-left"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-gray-500 text-2xl"
  }, "Select a form to fill"), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-3 grid-rows-1 gap-5"
  }, /* @__PURE__ */ React.createElement(CardSelect, {
    route: "adr-reporting/1",
    image: "1",
    name: "ADR Reporting Form"
  }), /* @__PURE__ */ React.createElement(CardSelect, {
    route: "suspected-adr-reporting/1",
    image: "2",
    name: "Suspected ADR Reporting Form"
  }), /* @__PURE__ */ React.createElement(CardSelect, {
    route: "medical-device-reporting/1",
    image: "3",
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
var assets_manifest_default = { "version": "8a7c37e3", "entry": { "module": "/build/entry.client-PSUNGD3I.js", "imports": ["/build/_shared/chunk-LY4SEGWT.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-F2EUDEL2.js", "imports": ["/build/_shared/chunk-CN6L2LIW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-I2VEZR6E.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-4EZCTVCP.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-5LPR6C5E.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-INEHBQLN.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-GPIRAT75.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-CTICV457.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-RBUNLSUG.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-USTXGAQB.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-LEJZAHTA.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-DKKZUPAQ.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-5HEWLGGI.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-UHW4O2QY.js", "imports": ["/build/_shared/chunk-AIWTSX53.js", "/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-AJQNXG5P.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-VY3F3YOP.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-CUK6XZOD.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-XKNXWHC4.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-JVPHINFJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-BXWFEF3C.js", "imports": ["/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-FWZ7HL27.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-OBOXFOOH.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-7E3PDDAX.js", "imports": ["/build/_shared/chunk-KUV5UZTQ.js", "/build/_shared/chunk-GEB4OXEF.js", "/build/_shared/chunk-IZWH4YNF.js", "/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-RVEVYLCJ.js", "imports": ["/build/_shared/chunk-KUV5UZTQ.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-ZEPCLFR5.js", "imports": ["/build/_shared/chunk-GEB4OXEF.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-YHWZFJPZ.js", "imports": ["/build/_shared/chunk-IZWH4YNF.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-RLOUHK2E.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-I77KX2CV.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-63MCSQPW.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-MEX3ZTPE.js", "imports": ["/build/_shared/chunk-ERYL3QGJ.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-NTHWO374.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-ZG6HWXFF.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-QEUJEO2K.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-KIRYGDAW.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-34ZFSZUW.js", "imports": ["/build/_shared/chunk-5FG2HJOD.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/1/index": { "id": "routes/suspected-adr-reporting/1/index", "parentId": "root", "path": "suspected-adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/1/index-ZFQVL7ZQ.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/2/index": { "id": "routes/suspected-adr-reporting/2/index", "parentId": "root", "path": "suspected-adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/2/index-VMGOVHK3.js", "imports": ["/build/_shared/chunk-AIWTSX53.js", "/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/3/b": { "id": "routes/suspected-adr-reporting/3/b", "parentId": "root", "path": "suspected-adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/3/b-SNH7EQ7I.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/3/c": { "id": "routes/suspected-adr-reporting/3/c", "parentId": "root", "path": "suspected-adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/3/c-762YA3D6.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/3/d": { "id": "routes/suspected-adr-reporting/3/d", "parentId": "root", "path": "suspected-adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/3/d-VVATC3U7.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/3/e": { "id": "routes/suspected-adr-reporting/3/e", "parentId": "root", "path": "suspected-adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/3/e-TYG3XMHR.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/3/index": { "id": "routes/suspected-adr-reporting/3/index", "parentId": "root", "path": "suspected-adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/3/index-XE6QNIKJ.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/suspected-adr-reporting/4/index": { "id": "routes/suspected-adr-reporting/4/index", "parentId": "root", "path": "suspected-adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/suspected-adr-reporting/4/index-YR5ZUTRB.js", "imports": ["/build/_shared/chunk-K43SQQ3V.js", "/build/_shared/chunk-L4HANESX.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-8A7C37E3.js" };

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
  "routes/suspected-adr-reporting/1/index": {
    id: "routes/suspected-adr-reporting/1/index",
    parentId: "root",
    path: "suspected-adr-reporting/1",
    index: true,
    caseSensitive: void 0,
    module: __exports10
  },
  "routes/suspected-adr-reporting/2/index": {
    id: "routes/suspected-adr-reporting/2/index",
    parentId: "root",
    path: "suspected-adr-reporting/2",
    index: true,
    caseSensitive: void 0,
    module: __exports11
  },
  "routes/suspected-adr-reporting/3/index": {
    id: "routes/suspected-adr-reporting/3/index",
    parentId: "root",
    path: "suspected-adr-reporting/3",
    index: true,
    caseSensitive: void 0,
    module: __exports12
  },
  "routes/suspected-adr-reporting/4/index": {
    id: "routes/suspected-adr-reporting/4/index",
    parentId: "root",
    path: "suspected-adr-reporting/4",
    index: true,
    caseSensitive: void 0,
    module: __exports13
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
  "routes/suspected-adr-reporting/3/b": {
    id: "routes/suspected-adr-reporting/3/b",
    parentId: "root",
    path: "suspected-adr-reporting/3/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports2
  },
  "routes/suspected-adr-reporting/3/c": {
    id: "routes/suspected-adr-reporting/3/c",
    parentId: "root",
    path: "suspected-adr-reporting/3/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports2
  },
  "routes/suspected-adr-reporting/3/d": {
    id: "routes/suspected-adr-reporting/3/d",
    parentId: "root",
    path: "suspected-adr-reporting/3/d",
    index: void 0,
    caseSensitive: void 0,
    module: d_exports2
  },
  "routes/suspected-adr-reporting/3/e": {
    id: "routes/suspected-adr-reporting/3/e",
    parentId: "root",
    path: "suspected-adr-reporting/3/e",
    index: void 0,
    caseSensitive: void 0,
    module: e_exports
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
    module: __exports14
  },
  "routes/adr-reporting/2/index": {
    id: "routes/adr-reporting/2/index",
    parentId: "root",
    path: "adr-reporting/2",
    index: true,
    caseSensitive: void 0,
    module: __exports15
  },
  "routes/adr-reporting/3/index": {
    id: "routes/adr-reporting/3/index",
    parentId: "root",
    path: "adr-reporting/3",
    index: true,
    caseSensitive: void 0,
    module: __exports16
  },
  "routes/adr-reporting/4/index": {
    id: "routes/adr-reporting/4/index",
    parentId: "root",
    path: "adr-reporting/4",
    index: true,
    caseSensitive: void 0,
    module: __exports17
  },
  "routes/adr-reporting/3/f/2": {
    id: "routes/adr-reporting/3/f/2",
    parentId: "root",
    path: "adr-reporting/3/f/2",
    index: void 0,
    caseSensitive: void 0,
    module: __exports18
  },
  "routes/adr-reporting/3/f/3": {
    id: "routes/adr-reporting/3/f/3",
    parentId: "root",
    path: "adr-reporting/3/f/3",
    index: void 0,
    caseSensitive: void 0,
    module: __exports19
  },
  "routes/adr-reporting/3/f/4": {
    id: "routes/adr-reporting/3/f/4",
    parentId: "root",
    path: "adr-reporting/3/f/4",
    index: void 0,
    caseSensitive: void 0,
    module: __exports20
  },
  "routes/adr-reporting/3/f/5": {
    id: "routes/adr-reporting/3/f/5",
    parentId: "root",
    path: "adr-reporting/3/f/5",
    index: void 0,
    caseSensitive: void 0,
    module: __exports21
  },
  "routes/adr-reporting/3/b": {
    id: "routes/adr-reporting/3/b",
    parentId: "root",
    path: "adr-reporting/3/b",
    index: void 0,
    caseSensitive: void 0,
    module: b_exports3
  },
  "routes/adr-reporting/3/c": {
    id: "routes/adr-reporting/3/c",
    parentId: "root",
    path: "adr-reporting/3/c",
    index: void 0,
    caseSensitive: void 0,
    module: c_exports3
  },
  "routes/adr-reporting/3/d": {
    id: "routes/adr-reporting/3/d",
    parentId: "root",
    path: "adr-reporting/3/d",
    index: void 0,
    caseSensitive: void 0,
    module: d_exports3
  },
  "routes/adr-reporting/3/e": {
    id: "routes/adr-reporting/3/e",
    parentId: "root",
    path: "adr-reporting/3/e",
    index: void 0,
    caseSensitive: void 0,
    module: e_exports2
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb290LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9yb290L2luZGV4LnRzeCIsICIuLi9hcHAvc3RhdGVzL3N0b3JlLnRzIiwgIi4uL2FwcC9zdGF0ZXMvU2xpY2VzL2Zvcm1PbmUvMS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24xLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24yLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24zLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXIvTGlzdEl0ZW1zLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9TaWRlYmFyVGVtcGxhdGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWwvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbC9Gb3JtTWFwLnRzIiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9pbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLnRzeCIsICIuLi9hcHAvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjIudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw1XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw2XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw3XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw4XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw5XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9zdXNwZWN0ZWRBRFJSYWRpb01lbnUvaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXHN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDRcXGIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcNFxcYy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcM1xcYi50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcXDNcXGMudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXHN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcM1xcZS50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcZlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwyXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwyLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwzLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw0LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw1LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxjLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxlLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxnLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxoLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxpLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxsb2dpblxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwzXFxcXHN1YmZvcm1zXFxcXG9wdGlvbjEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxzdWJmb3Jtc1xcXFxvcHRpb24yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDNcXFxcc3ViZm9ybXNcXFxcb3B0aW9uMy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDVcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcN1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOVxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXHN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDRcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNFxcXFxkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXHN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIyIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcXFxcM1xcXFxkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXHN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDFcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI2IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwyXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI5IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcMi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFwzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxmXFxcXDQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMyIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcNS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNDAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNDEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvN1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzhcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzEvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8yL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInN1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzJcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE0XG4gICAgfSxcbiAgXCJyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMThcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvYlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2JcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjBcbiAgICB9LFxuICBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjFcbiAgICB9LFxuICBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2RcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjJcbiAgICB9LFxuICBcInJvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2VcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjNcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8zL2ZcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8xXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMjZcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzNcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy80XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzJcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzJcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8zL2YvMlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyOVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzNcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzNcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8zL2YvM1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzRcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzRcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8zL2YvNFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzVcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8zL2YvNVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzMlxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvYlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvYlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9jXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvY1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzNFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzNlxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZ1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZ1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzN1xuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvaFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvaFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvaVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvaVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzOVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNDBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTQxXG4gICAgfVxuICB9OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxyXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXHJcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXHJcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxyXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XHJcbikge1xyXG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxyXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cclxuICApO1xyXG5cclxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xyXG5cclxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcclxuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxyXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxyXG4gIH0pO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rcywgTGl2ZVJlbG9hZCwgT3V0bGV0LCBNZXRhLCBTY3JpcHRzIH0gZnJvbSBcInJlbWl4XCI7XHJcbmltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgUm9vdExheW91dCBmcm9tIFwifi9sYXlvdXRzL3Jvb3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBEb2N1bWVudFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuLy9pbXBvcnRpbmcgc3R5bGVzaGVldFxyXG5pbXBvcnQgdGFpbHdpbmRTdHlsZSBmcm9tIFwiLi9zdHlsZXMvYXBwLmNzc1wiO1xyXG5pbXBvcnQgZ2xvYmFsU3R5bGUgZnJvbSBcIi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcclxuaW1wb3J0IGFudFN0eWxlcyBmcm9tIFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHRpdGxlOiBcIkFEUiBQb3J0YWwgfCBLTUNcIiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHRhaWx3aW5kU3R5bGUgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2xvYmFsU3R5bGUgfSxcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogYW50U3R5bGVzIH0sXHJcbiAgXTtcclxufVxyXG5cclxuY29uc3QgRG9jdW1lbnQgPSAoeyBjaGlsZHJlbiB9OiBEb2N1bWVudFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxyXG4gICAgICA8aGVhZD5cclxuICAgICAgICA8TWV0YSAvPlxyXG4gICAgICAgIDxMaW5rcyAvPlxyXG4gICAgICA8L2hlYWQ+XHJcbiAgICAgIDxib2R5PlxyXG4gICAgICAgIDxTY3JpcHRzIC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2h0bWw+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPERvY3VtZW50PlxyXG4gICAgICA8Um9vdExheW91dD5cclxuICAgICAgICA8T3V0bGV0IC8+XHJcbiAgICAgIDwvUm9vdExheW91dD5cclxuICAgIDwvRG9jdW1lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyByZWR1eC10b29sa2l0XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIn4vc3RhdGVzL3N0b3JlXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdGhlIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9uYXZiYXJcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmNvbnN0IFJvb3RMYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuXCI+XHJcbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vdExheW91dDtcclxuIiwgImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcbi8vaW1wb3J0aW5nIHNsaWNlcyBoZXJlXHJcbmltcG9ydCBmb3JtMXBhZ2UxUmVkdWNlciBmcm9tICd+L3N0YXRlcy9TbGljZXMvZm9ybU9uZS8xJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICAgIGZvcm0xcGFnZTE6IGZvcm0xcGFnZTFSZWR1Y2VyXHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cclxuLy8gSW5mZXJyZWQgdHlwZToge3Bvc3RzOiBQb3N0c1N0YXRlLCBjb21tZW50czogQ29tbWVudHNTdGF0ZSwgdXNlcnM6IFVzZXJzU3RhdGV9XHJcbmV4cG9ydCB0eXBlIEFwcERpc3BhdGNoID0gdHlwZW9mIHN0b3JlLmRpc3BhdGNoIiwgImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclN0YXRlIHtcclxuICAgIHZhbHVlOiBudW1iZXJcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlOiBDb3VudGVyU3RhdGUgPSB7XHJcbiAgICB2YWx1ZTogMCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm0xcGFnZTFTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjb3VudGVyJyxcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgaW5jcmVtZW50OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgLy8gUmVkdXggVG9vbGtpdCBhbGxvd3MgdXMgdG8gd3JpdGUgXCJtdXRhdGluZ1wiIGxvZ2ljIGluIHJlZHVjZXJzLiBJdFxyXG4gICAgICAgICAgICAvLyBkb2Vzbid0IGFjdHVhbGx5IG11dGF0ZSB0aGUgc3RhdGUgYmVjYXVzZSBpdCB1c2VzIHRoZSBJbW1lciBsaWJyYXJ5LFxyXG4gICAgICAgICAgICAvLyB3aGljaCBkZXRlY3RzIGNoYW5nZXMgdG8gYSBcImRyYWZ0IHN0YXRlXCIgYW5kIHByb2R1Y2VzIGEgYnJhbmQgbmV3XHJcbiAgICAgICAgICAgIC8vIGltbXV0YWJsZSBzdGF0ZSBiYXNlZCBvZmYgdGhvc2UgY2hhbmdlc1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSAtPSAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmNyZW1lbnRCeUFtb3VudDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS52YWx1ZSArPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IGluY3JlbWVudCwgZGVjcmVtZW50LCBpbmNyZW1lbnRCeUFtb3VudCB9ID0gZm9ybTFwYWdlMVNsaWNlLmFjdGlvbnNcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvcm0xcGFnZTFTbGljZS5yZWR1Y2VyIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLTE0IHAtMSBzaGFkb3cteGwgZm9udC1tZWRpdW0gZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICA8aW1nIHNyYz1cIi9BRFItbG9nby5wbmdcIiBjbGFzc05hbWU9XCJwLTFcIiAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibXktYXV0byBwbC04IHRleHQtcHVycGxlLTgwMFwiPkhvbWU8L2gxPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+TWVkaWNhbCBEZXZpY2U8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpbmdsZSBVc2UgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNhYmxlIGRldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzZSBvZiBtYW51ZmFjdHVyZWQgbWFya2VkIHNpbmdsZSB1c2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+UGVyc29uYWwgdXNlL2hvbWVjYXJlIHVzZSA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMTtcclxuIiwgImltcG9ydCB7IElucHV0RGVzY3JpcHRpb25Qcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmltcG9ydCBJbmZvSWNvbiBmcm9tIFwiLi9JbmZvSWNvbi5zdmdcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5jb25zdCBJbnB1dERlc2NyaXB0aW9uID0gKHByb3BzOiBJbnB1dERlc2NyaXB0aW9uUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwYi0xXCI+XHJcbiAgICAgIHtwcm9wcy5pc1JlcXVpcmVkICYmIDxzcGFuIGNsYXNzTmFtZT1cInByLTEgdGV4dC1yZWQtNTAwXCI+Kjwvc3Bhbj59XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLVswcHhdIHByLTEgdGV4dC1bMTZweF1cIj57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXREZXNjcmlwdGlvbjtcclxuIiwgImltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmZ1bmN0aW9uIE9wdGlvbjIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG15LTIgbXgtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5LaXRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Db250cm9sIE1hdGVyaWFscyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PlJlYWdlbnRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5JVkQgRWxlY3Ryb25pYyBSZWFkZXIvQW5hbHl6ZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNhbGlicmF0b3JzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+T3RoZXJzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24yO1xyXG4iLCAiaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94LCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmNvbnN0IG9wdGlvbjMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGwgcC0xMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTYgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgVGhlcmFwZXV0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgRGlhZ25vc3RpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBCb3Roe1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gSW1hZ2luZyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IE90aGVycyA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZXBvcnRlcidzIENvbW1lbnRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3B0aW9uMztcclxuIiwgIi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2UxKCkge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcIkluaXRpYWxcIiwgXCJGb2xsb3ctdXBcIiwgXCJGaW5hbFwiLCBcIlRyZW5kXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlByaW1hcnkgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJSZXBvcnRlciBSZWZlcmVuY2UgTnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlcG9ydFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlR5cGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnNbMF19XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZ3JpZCBncmlkLWNvbHMtNCBnYXAtNSBweC0xNiBwdC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwXCI+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgcC0yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gcHQtOCBwYi00IHRleHQtWzM1cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEFEUiBSZXBvcnRpbmcgRm9ybVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1MYXlvdXQ7XHJcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tIFwiLi9MaXN0SXRlbXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyBkYXRhXHJcbmltcG9ydCB7XHJcbiAgQWRyUmVwb3J0aW5nLFxyXG4gIFN1c3BlY3RlZEFkclJlcG9ydGluZyxcclxuICBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nLFxyXG59IGZyb20gXCIuL1NpZGViYXJUZW1wbGF0ZXNcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVByb3BzIH0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XHJcbiAgbGV0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcclxuICAvLyBIb2xkcyB0aGUgY3VycmVudCBmb3JtIHNpZGViYXIgZGF0YVxyXG4gIGNvbnN0IFthZHJSZXBvcnRpbmdEYXRhLCBzZXRBZHJSZXBvcnRpbmdEYXRhXSA9IHVzZVN0YXRlPFRlbXBsYXRlUHJvcHNbXT4oXHJcbiAgICBBZHJSZXBvcnRpbmcudGVtcGxhdGVcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgY29uc3QgY3VycmVudEZvcm0gPSBjdXJyZW50TG9jYXRpb25bMV07XHJcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGN1cnJlbnRMb2NhdGlvblsyXTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlU3ViID1cclxuICAgICAgY3VycmVudExvY2F0aW9uLmxlbmd0aCA+PSA0ID8gY3VycmVudExvY2F0aW9uWzNdIDogXCJcIjtcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlU3ViU3ViID1cclxuICAgICAgY3VycmVudExvY2F0aW9uLmxlbmd0aCA+PSA1ID8gY3VycmVudExvY2F0aW9uWzRdIDogXCJcIjtcclxuICAgIGlmIChjdXJyZW50Rm9ybSA9PT0gXCJhZHItcmVwb3J0aW5nXCIpIHtcclxuICAgICAgc2V0QWRyUmVwb3J0aW5nRGF0YShBZHJSZXBvcnRpbmcudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRGb3JtID09PSBcInN1c3BlY3RlZC1hZHItcmVwb3J0aW5nXCIpIHtcclxuICAgICAgc2V0QWRyUmVwb3J0aW5nRGF0YShTdXNwZWN0ZWRBZHJSZXBvcnRpbmcudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRGb3JtID09PSBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiKSB7XHJcbiAgICAgIHNldEFkclJlcG9ydGluZ0RhdGEoTWVkaWNhbERldmljZVJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3RpdmVUYWIoY3VycmVudFBhZ2UgKyBjdXJyZW50UGFnZVN1YiArIGN1cnJlbnRQYWdlU3ViU3ViKTtcclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgcGItNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIEluZGlhbiBOYXRpb25hbCBFbWJsZW1cIlxyXG4gICAgICAgICAgICBzcmM9XCIvZW1ibGVtLnBuZ1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIHRleHQteGwgbS0wIG1iLTNcIj5cclxuICAgICAgICAgICAgSU5ESUFOIFBIQVJNQUNPUE9FSUEgQ09NTUlTU0lPTlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzdweF0gYm9yZGVyLXQtMiBib3JkZXItWyM2QzU2N0JdIHB0LTIgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgIChOYXRpb25hbCBDb29yZGluYXRpb24gQ2VudHJlLVBoYXJtYWNvdmlnaWxhbmNlIFByb2dyYW1tZSBvZiBJbmRpYSlcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIE1pbmlzdHJ5IG9mIEhlYWx0aCAmIEZhbWlseSBXZWxmYXJlLCBHb3Zlcm5tZW50IG9mIEluZGlhIFNlY3Rvci0yMyxcclxuICAgICAgICAgICAgUmFqIE5hZ2FyLCBHaGF6aWFiYWQtMjAxMDAyXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCBwLTUgcm91bmRlZC1sZyB0ZXh0LVsjNkM1NjdCXSBib3JkZXJcIj5cclxuICAgICAgICB7YWRyUmVwb3J0aW5nRGF0YS5tYXAoKGl0ZW06IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbXNcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHsuLi5pdGVtfVxyXG4gICAgICAgICAgICAgIG51bWJlcj17aW5kZXh9XHJcbiAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2FjdGl2ZVRhYn1cclxuICAgICAgICAgICAgICBwYWdlTGluaz17aXRlbS5wYWdlTGlua31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XHJcbiIsICIvLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBGaUNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IEdvUHJpbWl0aXZlRG90IH0gZnJvbSBcInJlYWN0LWljb25zL2dvXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQge1xyXG4gIExpc3RJdGVtc1Byb3BzLFxyXG4gIFRlbXBsYXRlUHJvcHMsXHJcbiAgU2lkZWJhck51bWJlcmluZ0J1bGxldHMsXHJcbn0gZnJvbSBcIn4vdHlwZXMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbmNvbnN0IExpc3RJdGVtcyA9IChwcm9wczogTGlzdEl0ZW1zUHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXJOdW1iZXJpbmdCdWxsZXRcclxuICAgICAgICAgICAgaXNDdXJyZW50UGFnZT17cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMF0gPT09IHByb3BzLnBhZ2VMaW5rfVxyXG4gICAgICAgICAgICBpc0NvbXBsZXRlZD17cHJvcHMuaXNDb21wbGV0ZWR9XHJcbiAgICAgICAgICAgIGJ1bGxldE51bWJlcj17cHJvcHMubnVtYmVyfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmUgdGV4dC1iYXNlXCI+e3Byb3BzLm5hbWV9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04XCI+XHJcbiAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzBdID09PSBwcm9wcy5wYWdlTGluayAmJlxyXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW4/Lm1hcCgoY2hpbGQ6IFRlbXBsYXRlUHJvcHMsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmVUYWIgPVxyXG4gICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdID09PSBwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVsxXTtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmxleCBmbGV4LXJvdyBwYi0xIGZvbnQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiZmxleCBmbGV4LXJvdyBwYi0xIHRleHQtWyM3RTdFN0VdXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwdC0xIHByLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LW1kXCI+e2NoaWxkLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBwbC04IHB5LTFcIj5cclxuICAgICAgICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzFdID09PVxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnBhZ2VMaW5rLnNwbGl0KFwiXCIpWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4/Lm1hcChcclxuICAgICAgICAgICAgICAgICAgICAgIChzdWJDaGlsZDogVGVtcGxhdGVQcm9wcywgc3ViSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVN1YlRhYiA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMl0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzdWJJbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlU3ViVGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInB5LTEgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicHktMSB0ZXh0LVsjN0U3RTdFXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R29QcmltaXRpdmVEb3QgY2xhc3NOYW1lPVwidGV4dC1tZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMCB0ZXh0LXhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1YkNoaWxkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0ID0gKHByb3BzOiBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0cykgPT4ge1xyXG4gIGlmIChwcm9wcy5pc0NvbXBsZXRlZCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItMiBib3JkZXItWyM2QzU2N0JdIGJnLVsjNkM1NjdCXSByb3VuZGVkLWZ1bGwgaC03IHctNyB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIlwiIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuICAgICAgICAgIDxGaUNoZWNrIGNsYXNzTmFtZT1cIm14LWF1dG8gbXktYXV0byBmb250LWV4dHJhYm9sZFwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5pc0N1cnJlbnRQYWdlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWJvbGQgYm9yZGVyLTIgYm9yZGVyLVsjNkM1NjdCXSByb3VuZGVkLWZ1bGwgaC03IHctNyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql1cIj5cclxuICAgICAgICAgIHtwcm9wcy5idWxsZXROdW1iZXIgKyAxfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1bIzdFN0U3RV0gcm91bmRlZC1mdWxsIGgtNyB3LTcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayB0bz1cIlwiIGNsYXNzTmFtZT1cInRleHQtWyM3RTdFN0VdXCI+XHJcbiAgICAgICAgICB7cHJvcHMuYnVsbGV0TnVtYmVyICsgMX1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgTGlzdEl0ZW1zIH07XHJcbiIsICIvL2ltcG9ydGluZiB0eXBlc1xyXG5pbXBvcnQgeyBTaWRlYmFyUHJvcHMgfSBmcm9tIFwifi90eXBlcy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuY29uc3QgQWRyUmVwb3J0aW5nOiBTaWRlYmFyUHJvcHMgPSB7XHJcbiAgYmFzZVVybDogXCIvYWRyLXJlcG9ydGluZ1wiLFxyXG4gIHRlbXBsYXRlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUGF0aWVudCBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIxXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiB0cnVlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN1c3BlY3RlZCBBZHZlcnNlIFJlYWN0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjJcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN1c3BlY3RlZCBNZWRpY2F0aW9uKHMpXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjNcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWVkaWNhdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBY3Rpb24gVGFrZW5cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNiXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkRlY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzY1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJSZWNoYWxsZW5nZVwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2RcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiUmVhY3Rpb24gcmVhcHBlYXJlZCBhZnRlciByZWludHJvZHVjdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2VcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ2F1c2FsaXR5IEFzc2Vzc21lbnRcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJOYXJhbmpvJ3Mgc2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZlwiLFxyXG4gICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIldITyBwcm9iYWJpbGl0eSBzY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmMlwiLFxyXG4gICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIkhhcnR3aWcncyBTZXZlcml0eSBBc3Nlc3NtZW50IFNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2YzXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiTW9kaWZpZWQgU2NodW1vY2sgYW5kIFRob3JudG9uIHNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2Y0XCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiUHJlZGljdGFiaWxpdHkgJiBQcmVkaXNwb3NpbmcgZmFjdG9yc1wiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmNVwiLFxyXG4gICAgICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJUcmVhdG1lbnQgZ2l2ZW5cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNnXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkNvbmNvbWl0YW50IG1lZGljYWwgcHJvZHVjdFwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2hcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiT3V0Y29tZVwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2lcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBEZXRhaWxzXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBTdXNwZWN0ZWRBZHJSZXBvcnRpbmc6IFNpZGViYXJQcm9wcyA9IHtcclxuICBiYXNlVXJsOiBcIi9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1wiLFxyXG4gIHRlbXBsYXRlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUGF0aWVudCBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIxXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIyXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTdXNwZWN0ZWQgTWVkaWNhdGlvbihzKVwiLFxyXG4gICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk1lZGljYXRpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQWN0aW9uIFRha2VuXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzYlwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJSZWFjdGlvbiByZWFwcGVhcmVkIGFmdGVyIHJlaW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzY1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDb25jb21pdGFudCBtZWRpY2FsIHByb2R1Y3RcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNkXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFNQy9OQ0MgU2VjdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2VcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBEZXRhaWxzXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nOiBTaWRlYmFyUHJvcHMgPSB7XHJcbiAgYmFzZVVybDogXCIvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCIsXHJcbiAgdGVtcGxhdGU6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQcmltYXJ5IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjFcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlcG9ydGVyIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjJcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkRldmljZSBDYXRlZ29yeVwiLFxyXG4gICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEZXZpY2UgRGVzY3JpcHRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiNFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJNYW51ZmFjdHVyZXIgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJJbXBvcnRlciBEZXRhaWxzXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0YlwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJEaXN0cmlidXRvciBEZXRhaWxzXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0Y1wiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJGdXJ0aGVyIEluZm9ybWF0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCI0ZFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkV2ZW50IERlc2NyaXB0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjVcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlBhdGllbnQgSW5mb3JtYXRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiNlwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSGVhbHRoY2FyZSBGYWNpbGl0eSBEZXRhaWxzXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjdcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkNhc3VhbHR5IEFzc2Vzc21lbnRcIixcclxuICAgICAgcGFnZUxpbms6IFwiOFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJvZHVjdCBPd25lcidzIEludmVzdGlnYXRpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiOVwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFkclJlcG9ydGluZywgU3VzcGVjdGVkQWRyUmVwb3J0aW5nLCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nIH07XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgZW50aXRpdGVzXHJcbmltcG9ydCB7XHJcbiAgQURScmVwb3J0aW5nX3BvcnRhbE1hcCxcclxuICBTdXNwZWN0ZWRBZHJSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gIE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG59IGZyb20gXCIuL0Zvcm1NYXBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uUGFuZWxQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uUGFuZWwgPSAocHJvcHM6IE5hdmlnYXRpb25QYW5lbFByb3BzKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtuZXh0UGFnZSwgc2V0TmV4dFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcHJldmlvdXNQYWdlLCBzZXRQcmV2aW91c1BhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgY29uc3QgcGFnZVR5cGUgPVxyXG4gICAgY3VycmVudExvY2F0aW9uWzFdID09PSBcImFkci1yZXBvcnRpbmdcIlxyXG4gICAgICA/IHsgbGluazogXCIvYWRyLXJlcG9ydGluZy9cIiwgbWFwUm91dGU6IEFEUnJlcG9ydGluZ19wb3J0YWxNYXAgfVxyXG4gICAgICA6IGN1cnJlbnRMb2NhdGlvblsxXSA9PT0gXCJzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1wiXHJcbiAgICAgID8ge1xyXG4gICAgICAgICAgbGluazogXCIvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvXCIsXHJcbiAgICAgICAgICBtYXBSb3V0ZTogU3VzcGVjdGVkQWRyUmVwb3J0aW5nX3BvcnRhbE1hcCxcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgbGluazogXCIvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nL1wiLFxyXG4gICAgICAgICAgbWFwUm91dGU6IE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gICAgICAgIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3IgKGxldCByb3V0ZSA9IDA7IHJvdXRlIDwgcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoOyByb3V0ZSsrKSB7XHJcbiAgICAgIGlmIChwcm9wcy5jdXJyZW50Um91dGUgPT09IHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlXSkge1xyXG4gICAgICAgIGlmIChyb3V0ZSA8IHBhZ2VUeXBlLm1hcFJvdXRlLmxlbmd0aCAtIDEgJiYgcm91dGUgIT0gMCkge1xyXG4gICAgICAgICAgc2V0TmV4dFBhZ2UoXHJcbiAgICAgICAgICAgIHBhZ2VUeXBlLmxpbmsgKyBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZSArIDFdLnNwbGl0KFwiXCIpLmpvaW4oXCIvXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXNQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgLSAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlID09PSBwYWdlVHlwZS5tYXBSb3V0ZS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShwYWdlVHlwZSArIFwic3VibWl0XCIpO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXNQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgLSAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJvdXRlID09PSAwKSB7XHJcbiAgICAgICAgICBzZXROZXh0UGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlICsgMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRQcmV2aW91c1BhZ2UoXCIvXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTAgdy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1lbmRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgPExpbmsgdG89e3ByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyNFODU5MENdIGhvdmVyOnNoYWRvdy14bCBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBQcmV2aW91c1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxMaW5rIHRvPXtuZXh0UGFnZX0+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjRTg1OTBDXSB0ZXh0LXdoaXRlIGhvdmVyOnNoYWRvdy14bCBwLTIgdy0zMlwiPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25QYW5lbDtcclxuIiwgImNvbnN0IEFEUnJlcG9ydGluZ19wb3J0YWxNYXAgPSBbXHJcbiAgXCIxXCIsXHJcbiAgXCIyXCIsXHJcbiAgXCIzXCIsXHJcbiAgXCIzYlwiLFxyXG4gIFwiM2NcIixcclxuICBcIjNkXCIsXHJcbiAgXCIzZVwiLFxyXG4gIFwiM2ZcIixcclxuICBcIjNmMlwiLFxyXG4gIFwiM2YzXCIsXHJcbiAgXCIzZjRcIixcclxuICBcIjNmNVwiLFxyXG4gIFwiM2dcIixcclxuICBcIjNoXCIsXHJcbiAgXCIzaVwiLFxyXG4gIFwiNFwiLFxyXG5dO1xyXG5cclxuY29uc3QgU3VzcGVjdGVkQWRyUmVwb3J0aW5nX3BvcnRhbE1hcCA9IFtcclxuICBcIjFcIixcclxuICBcIjJcIixcclxuICBcIjNcIixcclxuICBcIjNiXCIsXHJcbiAgXCIzY1wiLFxyXG4gIFwiM2RcIixcclxuICBcIjNlXCIsXHJcbiAgXCI0XCIsXHJcbl07XHJcblxyXG5jb25zdCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCA9IFtcclxuICBcIjFcIixcclxuICBcIjJcIixcclxuICBcIjNcIixcclxuICBcIjRcIixcclxuICBcIjRiXCIsXHJcbiAgXCI0Y1wiLFxyXG4gIFwiNGRcIixcclxuICBcIjVcIixcclxuICBcIjZcIixcclxuICBcIjdcIixcclxuICBcIjhcIixcclxuICBcIjlcIlxyXG5dO1xyXG5cclxuZXhwb3J0IHsgQURScmVwb3J0aW5nX3BvcnRhbE1hcCwgU3VzcGVjdGVkQWRyUmVwb3J0aW5nX3BvcnRhbE1hcCwgTWVkaWNhbERldmljZVJlcG9ydGluZ19wb3J0YWxNYXAgfTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xKCkge1xyXG4gIGNvbnN0IFtyZXBvcnRlclR5cGUsIHNldFJlcG9ydGVyVHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwibWFudWZhY3R1cmVyXCIpO1xyXG4gIGNvbnN0IGNoYW5nZWRSZXBvcnRlclR5cGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRSZXBvcnRlclR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UmVwb3J0ZXIgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUeXBlIG9mIFJlcG9ydGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VkUmVwb3J0ZXJUeXBlKGUpfVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXBvcnRlclR5cGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBNYW51ZmFjdHVyZXJcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJpbXBvcnRlclwifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBJbXBvcnRlclxyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImRpc3RyaWJ1dG9yXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGlzdHJpYnV0b3JcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17XCJwYXRpZW50c1wifSBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBQYXRpZW50c1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImhlYWx0aGNhcmVwcm9mZXNzaW9uYWxzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgSGVhbHRoY2FyZSBQcm9mZXNzaW9uYWxcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSWYgT3RoZXJzXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSGFzIHRoZSByZXBvcnRlciBpbmZvcm1lZCB0aGUgaW5jaWRlbnQgdG8gdGhlIG1hbnVmYWN0dXJlcj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVwb3J0ZXJUeXBlID09PSBcIm1hbnVmYWN0dXJlclwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBOb1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBEb250IEtub3dcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIklzIHRoZSByZXBvcnRlciBhbHNvIHN1Ym1pdHRpbmcgdGhlIHJlcG9ydCBvbiBiZWhhbGYgb2YgdGhlIG1hbnVmYWN0dXJlcj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVwb3J0ZXJUeXBlID09PSBcIm1hbnVmYWN0dXJlclwifVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIFllc1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBOb1xyXG4gICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBEb250IEtub3dcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGhvbmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRW1haWwgSURcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtOCB0ZXh0LVszNXB4XSB0ZXh0LVsjNkM1NjdCXVwiPlxyXG4gICAgICAgIE1lZGljYWwgRGV2aWNlIEFEUiBSZXBvcnRpbmdcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTUgcHgtMTYgcHQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTkgcC0yXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgT3B0aW9uMSBmcm9tIFwiLi9zdWJmb3Jtcy9vcHRpb24xXCI7XHJcbmltcG9ydCBPcHRpb24yIGZyb20gXCIuL3N1YmZvcm1zL29wdGlvbjJcIjtcclxuaW1wb3J0IE9wdGlvbjMgZnJvbSBcIi4vc3ViZm9ybXMvb3B0aW9uM1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTkoKSB7XHJcbiAgY29uc3QgW29wdDEsIHNldE9wdDFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW29wdDIsIHNldE9wdDJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcHQzLCBzZXRPcHQzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaGFkb3cteGxcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTggcHktNCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5EZXZpY2UgQ2F0ZWdvcnk8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17MH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBNZWRpY2FsIERldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17MX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDIodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBJbiBWaXRybyBEaWFnbm9zdGljc1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Mn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDIoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBFcXVpcG1lbnQvTWFjaGluZXNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtvcHQxICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbjFcIj5cclxuICAgICAgICAgIDxPcHRpb24xIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7b3B0MiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb24yXCI+XHJcbiAgICAgICAgICA8T3B0aW9uMiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG5cclxuICAgICAge29wdDMgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uM1wiPlxyXG4gICAgICAgICAgPE9wdGlvbjMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5NZWRpY2FsIERldmljZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2luZ2xlIFVzZSBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2FibGUgZGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNlIG9mIG1hbnVmYWN0dXJlZCBtYXJrZWQgc2luZ2xlIHVzZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD5QZXJzb25hbCB1c2UvaG9tZWNhcmUgdXNlIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24xO1xyXG4iLCAiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXktMiBteC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PktpdHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNvbnRyb2wgTWF0ZXJpYWxzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVhZ2VudHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PklWRCBFbGVjdHJvbmljIFJlYWRlci9BbmFseXplcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q2FsaWJyYXRvcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5PdGhlcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjI7XHJcbiIsICJpbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgb3B0aW9uMyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bCBwLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBJbWFnaW5nIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gT3RoZXJzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgQ29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcHRpb24zO1xyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5NYW51ZmFjdHVyZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXszfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBJbnB1dCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTUoKSB7XHJcbiAgY29uc3QgW2lzU2VyaW91c0V2ZW50LCBzZXRJc1NlcmlvdXNFdmVudF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGVhZCwgc2V0SXNEZWFkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcclxuICAgIFwiSG9zcGl0YWwgUHJlbWlzZVwiLFxyXG4gICAgXCJNYW51ZmFjdHVyZXIgUHJlbWlzZVwiLFxyXG4gICAgXCJIb21lXCIsXHJcbiAgICBcIk90aGVyc1wiLFxyXG4gIF07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMiA9IFtcclxuICAgIFwiSGVhbHRoY2FyZSBwcm9mZXNzaW9uYWxcIixcclxuICAgIFwiUGF0aWVudFwiLFxyXG4gICAgXCJQcm9ibGVtIG5vdGVkIGJlZm9yZSB1c2VcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1xyXG4gICAgXCJSZXR1cm5lZCB0byB0aGUgY29tcGFueVwiLFxyXG4gICAgXCJJbXBsYW50ZWQgaW4gcGF0aWVudFwiLFxyXG4gICAgXCJXaXRoaW4gdGhlIGZhY2lsaXR5XCIsXHJcbiAgICBcIkF0IHBhdGllbnQgaG9tZVwiLFxyXG4gICAgXCJEZXN0cm95ZWRcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnM0ID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNSA9IFtcclxuICAgIFwiRGVhdGhcIixcclxuICAgIFwiTGlmZSBUaHJlYXRlbmluZ1wiLFxyXG4gICAgXCJEaXNhYmlsaXR5XCIsXHJcbiAgICBcIkhvc3BpdGFsaXphdGlvblwiLFxyXG4gICAgXCJDb25nZW5pdGFsIEFub21hbHlcIixcclxuICAgIFwiQW55IG1lZGljYWwgZXZlbnRcIixcclxuICAgIFwiUGVybWFuZW50IEltcGFpcm1lbnRcIixcclxuICBdO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRTdGF0ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc1NlcmlvdXNFdmVudCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzU2VyaW91c0V2ZW50KGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VTZXJpb3VzRXZlbnRWYWx1ZSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJEZWF0aFwiKSB7XHJcbiAgICAgIHNldElzRGVhZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzRGVhZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RXZlbnQgRGVzY3JpcHRpb248L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIEV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgSW1wbGFudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJMb2NhdGlvbiBvZiBldmVudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnMxWzBdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXZpY2UgT3BlcmF0b3JcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zMlswXX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGV2aWNlIGxvY2F0aW9uXCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMzfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczNbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgcmV0dXJuXCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlNlcmlvdXMgZXZlbnQ/XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM0fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczRbMV19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlU2VyaW91c0V2ZW50U3RhdGUoZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIlJlYXNvblwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnM1WzJdfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1NlcmlvdXNFdmVudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VTZXJpb3VzRXZlbnRWYWx1ZShlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgZGVhdGhcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBkaXNhYmxlZD17IWlzRGVhZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIklzIGRldmljZSBpbiB1c2UgYWZ0ZXIgdGhlIGluY2lkZW50P1wifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnM0WzBdfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXRhaWxlZCBkZXNjcmlwdGlvbiBvZiB0aGUgaW5jaWRlbnRcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgICAgRnJlcXVlbmN5IG9mIG9jY3VycmVuY2Ugb2Ygc2ltaWxhciBhZHZlcnNlIGV2ZW50cyBpbiBJbmRpYVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiWWVhclwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBwaWNrZXI9XCJ5ZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJOdW1iZXIgb2Ygc2ltaWxhciBldmVudHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVG90YWwgbnVtYmVyIHN1cGxpZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRnJlcXVlbmN5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICAgICAgRnJlcXVlbmN5IG9mIG9jY3VycmVuY2Ugb2Ygc2ltaWxhciBhZHZlcnNlIGV2ZW50cyBnbG9iYWxseVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiWWVhclwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBwaWNrZXI9XCJ5ZWFyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJOdW1iZXIgb2Ygc2ltaWxhciBldmVudHNcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVG90YWwgbnVtYmVyIHN1cGxpZWRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRnJlcXVlbmN5XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBSYWRpbywgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTYoKSB7XHJcbiAgY29uc3QgW2lzUmVjb3ZlcmVkLCBzZXRJc1JlY292ZXJlZF0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcclxuICBjb25zdCBbaXNEZWFkLCBzZXRJc0RlYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VEZWF0aERhdGEgPSAoZTogYW55KSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcclxuICAgICAgc2V0SXNEZWFkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNEZWFkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VSZWNvdmVyeURhdGEgPSAoZTogYW55KSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudmFsdWUgPT09IFwiWWVzXCIpIHtcclxuICAgICAgc2V0SXNSZWNvdmVyZWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc1JlY292ZXJlZChmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcIk1hbGVcIiwgXCJGZW1hbGVcIiwgXCJPdGhlcnNcIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMiA9IFtcIlllc1wiLCBcIk5vXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlBhdGllbnQgSW5mb3JtYXRpb248L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJQYXRpZW50IEhvc3BpdGFsIE51bWJlclwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlBhdGllbnQgSW5pdGlhbHNcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWdlXCJ9IGlzUmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJXZWlnaHRcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJTZXhcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zMVswXX1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk90aGVyIHJlbGV2YW50IGhpc3RvcnksIGluY2x1ZGluZyBwcmUtZXhpc3RpbmcgbWVkaWNhbCBjb25kaXRpb25zXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkhhcyB0aGUgcGF0aWVudCByZWNvdmVyZWQ/XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMyfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zMlswXX1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlY292ZXJ5RGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlY292ZXJ5XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgZGlzYWJsZWQ9e2lzUmVjb3ZlcmVkID09PSBmYWxzZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiSXMgdGhlIHBhdGllbnQgZGVhZD9cIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnMyWzFdfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlRGVhdGhEYXRhKGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIGRlYXRoXCJ9IGlzUmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIGRpc2FibGVkPXtpc0RlYWQgPT09IGZhbHNlfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJPdGhlciBwYXRpZW50IG91dGNvbWVzXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTcoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEhlYWx0aGNhcmUgRmFjaWxpdHkgRGV0YWlsc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIk5hbWVcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIkFkZHJlc3NcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiQ29udGFjdCBOdW1iZXIgb2YgUGVyc29uIGF0IHRoZSBzaXRlIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVGVsZXBob25lIE51bWJlclwifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjdcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlOCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5DYXN1YWx0eSBBc3Nlc3NtZW50PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnZlc3RpZ2F0aW9uIGFjdGlvbiB0YWtlblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSb290IGNhdXNlIG9mIHByb2JsZW1cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI4XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTkoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFByb2R1Y3QgT3duZXIncyBJbnZlc3RpZ2F0aW9uXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUHJvZHVjdCBPd25lcnMgZGV2aWNlIHJpc2sgYW5hbHlzaXMgcmVwb3J0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQ29ycmVjdGl2ZSAvIHByZXZlbnRpdmUgYWN0aW9uIHRha2VuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRldmljZSBoaXN0b3J5IHJldmlld1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjlcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IERhdGVQaWNrZXIsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBSYWRpb09wdGlvbnMgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9zdXNwZWN0ZWRBRFJSYWRpb01lbnVcIjtcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMnBhZ2UxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCByb3VuZGVkLXhsIGJvcmRlciBwLTEwIHNoYWRvdy1tZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5QYXRpZW50IEluZm9ybWF0aW9uPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQYXRpZW50IEluaXRpYWxzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEYXRlIG9mIEJpcnRoXCIgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFnZSBhdCB0aW1lIG9mIGV2ZW50XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJHZW5kZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJXZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdWZmaXg9e1wia2dzXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIG10LTVcIj5cclxuICAgICAgICA8UmFkaW9PcHRpb25zIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjFcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IElucHV0UmFkaW9Db21wb25lbnRQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBSYWRpb09wdGlvbnMgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgIDxJbnB1dFJhZGlvQ29tcG9uZW50XHJcbiAgICAgICAgdGl0bGU9XCJSZXBvcnQgVHlwZVwiXHJcbiAgICAgICAgcmFkaW9PcHRpb25GYWxzZT1cIlByZWRpY3RhYmxlXCJcclxuICAgICAgICByYWRpb09wdGlvblRydWU9XCJOb3QgUHJlZGljdGFibGVcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgPElucHV0UmFkaW9Db21wb25lbnRcclxuICAgICAgICB0aXRsZT1cIkFNQy9OQ0NcIlxyXG4gICAgICAgIHJhZGlvT3B0aW9uRmFsc2U9XCJBcHBsaWNhYmxlXCJcclxuICAgICAgICByYWRpb09wdGlvblRydWU9XCJOb3QgQXBwbGljYWJsZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IElucHV0UmFkaW9Db21wb25lbnQgPSAocHJvcHM6IElucHV0UmFkaW9Db21wb25lbnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUocHJvcHMucmFkaW9PcHRpb25GYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJhZGlvT25DaGFuZ2UgPSAoY2hlY2tlZDogQm9vbGVhbikgPT4ge1xyXG4gICAgY2hlY2tlZFxyXG4gICAgICA/IHNldFNlbGVjdGVkT3B0aW9uKHByb3BzLnJhZGlvT3B0aW9uVHJ1ZSlcclxuICAgICAgOiBzZXRTZWxlY3RlZE9wdGlvbihwcm9wcy5yYWRpb09wdGlvbkZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBib3JkZXIgcC04IHNoYWRvdy1tZFwiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj4ge3Byb3BzLnRpdGxlfTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYm9sZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj57cHJvcHMucmFkaW9PcHRpb25GYWxzZX08L3A+XHJcbiAgICAgICAgPFN3aXRjaCBvbkNoYW5nZT17cmFkaW9PbkNoYW5nZX0gLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj57cHJvcHMucmFkaW9PcHRpb25UcnVlfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmFkaW9PcHRpb25zO1xyXG4iLCAiLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwifi9jb21wb25lbnRzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgdHlwZXNcclxuaW1wb3J0IHsgTGF5b3V0UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG5jb25zdCBGb3JtTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogTGF5b3V0UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctc2NyZWVuIGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHQtOCB0ZXh0LVszNXB4XSB0ZXh0LVsjNkM1NjdCXVwiPlxyXG4gICAgICAgIFN1c3BlY3RlZCBBRFIgUmVwb3J0aW5nXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMyBib3JkZXItWzFweF0gYm9yZGVyLVsjNkM1NjdCXSBiZy1bIzZDNTY3Ql1cIj48L2Rpdj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XHJcbiAgICAgICAgICBGb3IgVk9MVU5UQVJZIHJlcG9ydGluZyBvZiBBZHZlcnNlIERydWcgUmVhY3Rpb25zIGJ5IEhlYWx0aGNhcmVcclxuICAgICAgICAgIFByb2Zlc3Npb25hbHNcclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGdyaWQgZ3JpZC1jb2xzLTEyIGdhcC01IHB4LTE2IHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IHAtMlwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwgImltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcImFudGQvbGliL2lucHV0L1RleHRBcmVhXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvbi9pbmRleFwiO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0ycGFnZTIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sIHJvdW5kZWQteGwgYm9yZGVyIHAtMTAgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgU3VzcGVjdGVkIEFkdmVyc2UgUmVhY3Rpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGUgb2YgUmVjb3ZlcnlcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIFJlYWN0aW9uIFN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXNjcmliZSByZWFjdGlvbiBvciBwcm9ibGVtXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgSW5wdXQsIEZvcm0gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTJwYWdlMygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XVwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPk1lZGljYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxTdWJGb3JtIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuY29uc3QgU3ViRm9ybSA9ICgpID0+IChcclxuICA8Rm9ybT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWUgKEJyYW5kL0dlbmVyaWMpXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC01XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiTWFudWZhY3R1cmVyXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiQmF0Y2ggTm8uLyBMb3QgTm8uXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNSBwdC01XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRXhwaXJ5IERhdGVcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRG9zZSBVc2VkXCIgLz5cclxuICAgICAgICA8SW5wdXQgc3VmZml4PVwia2dzXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUm91dGUgVXNlZFwiIC8+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcHQtNVwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgZGVzY3JpcHRpb249XCJGcmVxdWVuY3kgKE9ELCBCRCwgZXRjKVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNVwiPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRGF0ZSBTdGFydGVkXCIgLz5cclxuICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIFN0b3BwZWRcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcHQtNVwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbmRpY2F0aW9uXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctZnVsbCBwdC01XCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkNhc3VhbHR5IEFzc2Vzc21lbnRcIiAvPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMCBwdC01XCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICBTYXZlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bIzZDNTY3Ql0gcC0yIHctMzIgYm9yZGVyIGJvcmRlci1bIzZDNTY3Ql0gaG92ZXI6YmctWyNFODU5MENdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgID5cclxuICAgICAgICBBZGQgbW9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvRm9ybT5cclxuKTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCB7IEZvcm0sIERhdGVQaWNrZXIsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5jb25zdCBUZXh0QXJlYSA9IElucHV0LlRleHRBcmVhO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5SZXBvcnRlciBEZXRhaWxzPC9kaXY+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIHRoaXMgcmVwb3J0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGF0ZSBvZiB0aGlzIHJlcG9ydFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTQgZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJFbWFpbCBJRFwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTZcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlRlbC4gTm8uXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByb2Zlc3Npb25hbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBncmlkIGdyaWQtY29scy0xMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTZcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlBpbmNvZGVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJPY2N1cGF0aW9uXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgRm9ybSwgU2VsZWN0LCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTRiKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkltcG9ydGVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRiXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0YygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5EaXN0cmlidXRvciBkZXRhaWxzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0Y1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTRkKCkge1xyXG4gIGNvbnN0IFtyZWd1bGF0ZWRJbkluZGlhLCBzZXRSZWd1bGF0ZWRJbkluZGlhXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJZZXNcIik7XHJcbiAgY29uc3QgW2F2YWlsYWJpbGl0eVZhbHVlLCBzZXRBdmFpbGFiaWxpdHlWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiWWVzXCIpO1xyXG4gIGNvbnN0IFt1c2FnZVBlck1hbnVmYWN0dXJlciwgc2V0VXNhZ2VQZXJNYW51ZmFjdHVyZXJdID1cclxuICAgIHVzZVN0YXRlPHN0cmluZz4oXCJZZXNcIik7XHJcblxyXG4gIGNvbnN0IGNoYW5nZVN0YXRlT2ZSYWRpbyA9IChyYWRpb0lkZW50aWZpZXI6IHN0cmluZywgcmFkaW9WYWx1ZTogYW55KSA9PiB7XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjFcIikge1xyXG4gICAgICBzZXRSZWd1bGF0ZWRJbkluZGlhKHJhZGlvVmFsdWUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChyYWRpb0lkZW50aWZpZXIgPT09IFwiMlwiKSB7XHJcbiAgICAgIHNldEF2YWlsYWJpbGl0eVZhbHVlKHJhZGlvVmFsdWUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmIChyYWRpb0lkZW50aWZpZXIgPT09IFwiM1wiKSB7XHJcbiAgICAgIHNldFVzYWdlUGVyTWFudWZhY3R1cmVyKHJhZGlvVmFsdWUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYWRpb09wdGlvbnMxID0gW1wiWWVzXCIsIFwiTm9cIiwgXCJEb24ndCBrbm93XCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczIgPSBbXCJBXCIsIFwiQlwiLCBcIkNcIiwgXCJEXCJdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczMgPSBbXCJZZXNcIiwgXCJOb1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnM0ID0gW1xyXG4gICAgXCJEZXN0cm95ZWRcIixcclxuICAgIFwiU3RpbGwgaW4gdXNlXCIsXHJcbiAgICBcIlJldHVybmVkIHRvIG1hbnVmYWN0dXJlciBvciBpbXBvcnRlclwiLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkZ1cnRoZXIgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJcyB0aGUgZGV2aWNlIG5vdGlmaWVkL3JlZ3VsYXRlZCBpbiBJbmRpYT9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczF9XHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnMxWzBdfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWd1bGF0ZWRJbkluZGlhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMVwiLCBlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGV2aWNlIFJpc2sgQ2xhc3NpZmljYXRpb24gYXMgcGVyIEluZGlhIE1EUiAyMDE3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMyfVxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zMlswXX1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDYXRhbG9ndWUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk1vZGVsIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiQmF0Y2ggTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJTZXJpYWwgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNvZnR3YXJlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFjY2Vzc29yaWVzL0Fzc29jaWF0ZWQgRGV2aWNlc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkdNRE4gQ29kZSAmYW1wOyBHTUROIFRlcm1cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiVURJIE51bWJlclwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJbnN0YWxsYXRpb24gRGF0ZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRXhwaXJhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMYXN0IENhbGlicmF0aW9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWdlIG9mIGRldmljZSBmcm9tIGRhdGUgb2YgbWFudWZhY3R1cmluZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhvdyBsb25nIHdhcyBkZXZpY2UgaW4gdXNlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXZhaWxhYmlsaXR5IG9mIGRldmljZSBmb3IgZXZhbHVhdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczNbMF19XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXthdmFpbGFiaWxpdHlWYWx1ZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMlwiLCBlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldoYXQgaXMgdGhlIHN0YXR1cyBvZiB0aGUgZGV2aWNlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczRbMF19XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXthdmFpbGFiaWxpdHlWYWx1ZSA9PT0gXCJOb1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJcyB0aGUgdXNhZ2Ugb2YgZGV2aWNlIGFzIHBlciBtYW51ZmFjdHVyZXJcdTIwMTlzIGNsYWltcy9pbnN0cnVjdGlvbnMgZm9yIHVzZS91c2VyIG1hbnVhbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uczNbMF19XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2FnZVBlck1hbnVmYWN0dXJlcn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiM1wiLCBlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNwZWNpZnkgdXNhZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzYWdlUGVyTWFudWZhY3R1cmVyID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWd1bGF0b3IgLyBSZWd1bGF0b3J5IHN0YXR1cyBpbiBjb3VudHJ5IG9mIG9yaWdpblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17cmVndWxhdGVkSW5JbmRpYSA9PT0gXCJZZXNcIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0ZFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMnBhZ2UzYigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5BY3Rpb24gVGFrZW48L2Rpdj5cclxuICAgICAgICAgIDxSYWRpb0dyb3VwRHJ1Z3MgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2JcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIkRydWcgd2l0aGRyYXduXCIsXHJcbiAgICBcIkRvc2UgaW5jcmVhc2VkXCIsXHJcbiAgICBcIkRvc2UgcmVkdWNlZFwiLFxyXG4gICAgXCJEb3NlIG5vdCBjaGFuZ2VkXCIsXHJcbiAgICBcIk5vdCBhcHBsaWNhYmxlXCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnNbMF19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgIFJlYWN0aW9uIHJlYXBwZWFyZWQgYWZ0ZXIgcmVpbnRyb2R1Y3Rpb25cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8UmFkaW9Hcm91cERydWdzIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzY1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEcnVnIDFcIiAvPlxyXG4gICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMS8zXCIgdmFsdWU9ezB9PlxyXG4gICAgICAgIE5vXHJcbiAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMS8zXCIgdmFsdWU9ezF9PlxyXG4gICAgICAgIFllc1xyXG4gICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEvM1wiIHZhbHVlPXsyfT5cclxuICAgICAgICBFZmZlY3RzIFVua25vd25cclxuICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwdC01XCI+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLVswcHhdIHByLTMgdGV4dC1bMTZweF1cIj5Eb3NlPC9wPlxyXG4gICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSBjbGFzc05hbWU9XCJ3LTE2XCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCAiaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgRm9ybSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgIENvbmNvbWl0YW50IG1lZGljYWwgcHJvZHVjdCBpbmNsdWRpbmcgc2VsZi1tZWRpY2F0aW9uIGFuZCBoZXJiYWxcclxuICAgICAgICAgIHJlbWVkaWVzIHdpdGggdGhlcmFweSBkYXRlc1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxGb3JtR3JvdXAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNkXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBGb3JtR3JvdXAgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5hbWUoIEJyYW5kL0dlbmVyaWMpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRvc2UgVXNlZFwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUm91dGUgVXNlZFwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHB0LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJGcmVxdWVuY3kgKE9ELCBCRCBldGMuKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RhcnRlZFwiIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0b3BwZWRcIiAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSW5kaWNhdGlvblwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy0xMDAgcHQtNVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2QzU2N0JdIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyM2QzU2N0JdIGhvdmVyOmJnLVsjRTg1OTBDXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1bI0U4NTkwQ11cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgRGF0ZVBpY2tlciwgU3dpdGNoLCBDaGVja2JveCwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTNlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkFNQy9OQ0MgU2VjdGlvbjwvZGl2PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBweS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBTUMgUmVwb3J0IE5vLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBweS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tM1wiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXb3JsZHdpZGUgVW5pcXVlIE5vLlwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tOVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJSZWxldmFudCB0ZXN0cy8gbGFib3JhdG9yeSBkYXRhIHdpdGggZGF0ZXNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlbGV2YW50IG1lZGljYWwvIG1lZGljYXRpb24gaGlzdG9yeSAoZS5nLiBhbGxlcmdpZXMsIHJhY2UsIFxyXG4gICAgICAgICAgICAgICAgcHJlZ25hbmN5LCBzbW9raW5nLCBhbGNvaG9sIHVzZSwgaGVwYXRpYy9yZW5hbCBkeXNmdW5jdGlvbiBldGMuKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNCBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJTZXJpb3VzbmVzcyBvZiB0aGUgcmVhY3Rpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtMiBwbC01XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHItM1wiPk5vPC9wPlxyXG4gICAgICAgICAgICAgIDxTd2l0Y2ggLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwbC0zXCI+WWVzPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Db25nZW5pdGFsLWFub21hbHk8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkxpZmUgdGhyZWF0ZW5pbmcgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5Ib3NwaXRhbGl6YXRpb24vUHJvbG9uZ2VkPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5EaXNhYmlsaXR5PC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5cclxuICAgICAgICAgICAgICAgIFJlcXVpcmVkIGludGVydmVudGlvbiB0byBQcmV2ZW50IHBlcm1hbmVudCBpbXBhaXJtZW50L2RhbWFnZVxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZ3JpZCBncmlkLWNvbHMtMTJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPkRlYXRoPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJteS1hdXRvIGNvbC1zcGFuLTEwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBncmlkIGdyaWQtY29scy0xMlwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+T3RoZXIgKHNwZWNpZnkpPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwibXktYXV0byBjb2wtc3Bhbi0xMFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiT3V0Y29tZXNcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJyZWNvdmVyZWRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwicmVjb3ZlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICBSZWNvdmVyZWRcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwicmVjb3ZlcmluZ1wiPlxyXG4gICAgICAgICAgICAgICAgUmVjb3ZlcmluZ1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJub3RyZWNvdmVyZWRcIj5cclxuICAgICAgICAgICAgICAgIE5vdCByZWNvdmVyZWRcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMS8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwiZmF0YWxcIj5cclxuICAgICAgICAgICAgICAgIEZhdGFsXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0zLzEyIHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPVwicmVjb3ZlcmVkd2l0aHNlcXVlbGFlXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZWNvdmVyZWQgd2l0aCBzZXF1ZWxhZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gY2xhc3NOYW1lPVwidy0yLzEyIHRleHQtY2VudGVyXCIgdmFsdWU9XCJ1bmtub3duXCI+XHJcbiAgICAgICAgICAgICAgICBVbmtub3duXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2YxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk5hcmFuam9cdTIwMTlzIFNjYWxlPC9kaXY+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXJlIHRoZXJlIHByZXZpb3VzIGNvbmNsdXNpb24gcmVwb3J0cyBvbiB0aGlzIHJlYWN0aW9uP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFyZSB0aGVyZSBwcmV2aW91cyBjb25jbHVzaW9uIHJlcG9ydHMgb24gdGhpcyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIGFkdmVyc2UgZXZlbnQgYXBwZWFyIGFmdGVyIHRoZSBzdXNwZWN0IGRydWcgd2FzIGFkbWluaXN0ZXJlZD9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIEFSIGltcHJvdmUgd2hlbiB0aGUgZHJ1ZyB3YXMgZGlzY29udGludWVkIG9yIGEgc3BlY2lmaWMgYW50YWdvbmlzdCB3YXMgYWRtaW5pc3RlcmVkP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgQVIgcmVhcHBlYXIgd2hlbiBkcnVnIHdhcyByZS1hZG1pbmlzdGVyZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBkZWZhdWx0VmFsdWU9ezB9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQXJlIHRoZXJlIGFsdGVybmF0ZSBjYXVzZXMgW290aGVyIHRoYW4gdGhlIGRydWddIHRoYXQgY291bGQgc29sZWx5IGhhdmUgY2F1c2VkIHRoZSByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIHJlYWN0aW9uIHJlYXBwZWFyIHdoZW4gYSBwbGFjZWJvIHdhcyBnaXZlbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGRydWcgZGV0ZWN0ZWQgaW4gdGhlIGJsb29kIFtvciBvdGhlciBmbHVpZHNdIGluIGEgY29uY2VudHJhdGlvbiBrbm93biB0byBiZSB0b3hpYz9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIHJlYWN0aW9uIG1vcmUgc2V2ZXJlIHdoZW4gdGhlIGRvc2Ugd2FzIGluY3JlYXNlZCBvciBsZXNzIHNldmVyZSB3aGVuIHRoZSBkb3NlIHdhcyBkZWNyZWFzZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBkZWZhdWx0VmFsdWU9ezB9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlkIHRoZSBwYXRpZW50IGhhdmUgYSBzaW1pbGFyIHJlYWN0aW9uIHRvIHRoZSBzYW1lIG9yIHNpbWlsYXIgZHJ1Z3MgaW4gYW55IHByZXZpb3VzIGV4cG9zdXJlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgYWR2ZXJzZSBldmVudCBjb25maXJtZWQgYnkgb2JqZWN0aXZlIGV2aWRlbmNlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICB7LyogY2FsY3VsYXRlZCBzY29yZSBmb3IgdGhlIEFEUiBpcyBkaXNwbGF5ZWQgaGVyZSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdy1yZXZlcnNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAteC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtWyM2QzU2N0JdIHAtMCBtLTBcIj5Qcm9iYWJsZSBBRFI8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSBwLTAgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTR4bFwiPjA3PC9zcGFuPi8xMFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBmb250LWJvbGQgbS0wIHAtMFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibS0wIHAtMFwiPlJlc3VsdDwvcD5cclxuICAgICAgICAgICAgICAgIDxGaUhlbHBDaXJjbGUgY2xhc3NOYW1lPVwibXQtMSBtbC0xXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktYXV0byBmb250LWJvbGRcIj5TY29yZTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2ZcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgRm9ybSwgU2VsZWN0LCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlBhdGllbnQgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQYXRpZW50IEluaXRpYWxzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGF0ZSBvZiBCaXJ0aFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiQWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJXZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGFkZG9uQWZ0ZXI9e1wibWdzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJQYXRpZW50IElEXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiSVAvT1BcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlVuaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVhc29uIGZvciB0YWtpbmcgbWVkaWNhdGlvbi92YWNjaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIk1lZGljaW5lcy92YWNjaW5lcyBhZHZpc2VkIGJ5XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJBXCI+RG9jdG9yPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIkJcIj5QaGFybWFjaXN0PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIkNcIj5GcmllbmRzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIkRcIj5SZWxhdGl2ZXM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJFXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGYgKHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJGXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGYgKG5vIHBhc3QgZGlzZWFzZSBleHBlcmllbmNlZClcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJLbm93biBBbGxlcmdpZXNcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNvY2lhbCBIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIxXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBJbXBvcnQgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5TdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIHJlYWN0aW9uIHN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGF0ZSBvZiByZWNvdmVyeVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRlc2NyaWJlIHJlYWN0aW9uIG9yIHByb2JsZW1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIyXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIEZvcm0sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlMygpIHtcclxuICBjb25zdCBvbkZvcm1TdWJtaXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5NZWRpY2F0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25Gb3JtU3VibWl0fT5cclxuICAgICAgICAgIDxTdWJmb3JtIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdWJmb3JtKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTVcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTmFtZSAoQnJhbmQvR2VuZXJpYylcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0IHJlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHBiLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIk1hbnVmYWN0dXJlclwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkJhdGNoIE5vLi8gTG90IE5vLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRXhwLiBEYXRlXCIgLz5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkRvc2UgdXNlZFwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgdHlwZT17XCJudW1iZXJcIn0gc3VmZml4PVwia2dzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJvdXRlIHVzZWRcIiAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSVAvT1BcIiAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJVbml0XCIgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTVcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZyZXF1ZW5jeSAoT0QsIEJELCBldGMuKVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RhcnRlZFwiIC8+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRGF0ZSBzdG9wcGVkXCIgLz5cclxuICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItNVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkluZGljYXRpb25cIiAvPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICAgIFNhdmVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2QzU2N0JdIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyM2QzU2N0JdIGhvdmVyOmJnLVsjRTg1OTBDXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1bI0U4NTkwQ11cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCBtb3JlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIEltcG9ydCBBbnQgRGVzaWduXHJcbmltcG9ydCB7IElucHV0LCBSYWRpbywgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuLy9JbXBvcnQgSW1hZ2VzXHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlNCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UmVwb3J0ZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIHsvKiBGaXJzdCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBTZWNvbmQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJRCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUGluXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBUaGlyZCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkVtYWlsIElEXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlRlbC4gTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBGb3VydGggKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUHJvZi4gQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRmlmdGggKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMSB0ZXh0LVsxNnB4XVwiPk9jY3VwYXRpb248L3A+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBuYW1lPVwib2NjdXBhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17MX0+UGh5c2ljaWFuPC9SYWRpbz5cclxuICAgICAgICAgICAgICA8UmFkaW8gdmFsdWU9ezJ9PkRlbnRpc3Q8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17M30+TnVyc2U8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17NH0+UGhhcm1hY2lzdDwvUmFkaW8+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgcHQtMVwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17NX0+T3RoZXJzPC9SYWRpbz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHN1ZmZpeD17PEZpSGVscENpcmNsZSAvPn0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICB7LyogU2l4dGggKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEZXBhcnRtZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIFNldmVudGggKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGUgb2YgdGhpcyByZXBvcnRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogRWlnaHRoICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJlZmVyZW5jZXNcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17Mn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIE5pbnRoICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgc2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgY29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvL2ltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgQ29sbGFwc2UsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBQYW5lbCB9ID0gQ29sbGFwc2U7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjIoKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgIHsgbGFiZWw6IFwiQ2VydGFpblwiLCB2YWx1ZTogXCJjZXJ0YWluXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiUHJvYmFibHkgLyBMaWtlbHlcIiwgdmFsdWU6IFwicHJvYmFibHkvbGlrZWx5XCIgfSxcclxuICAgIHsgbGFiZWw6IFwiUG9zc2libGVcIiwgdmFsdWU6IFwicG9zc2libGVcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJVbmxpa2VseVwiLCB2YWx1ZTogXCJ1bmxpa2VseVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkNvbmRpdGlvbmFsIC8gVW5jbGFzc2lmaWVkXCIsIHZhbHVlOiBcImNvbmRpdGlvbmFsL3VuY2xhc3NpZmllZFwiIH0sXHJcbiAgICB7XHJcbiAgICAgIGxhYmVsOiBcIlVuLWFzc2Vzc2FibGUgLyBVbi1jbGFzc2lmaWFibGVcIixcclxuICAgICAgdmFsdWU6IFwidW4tYXNzZXNzYWJsZS91bi1jbGFzc2lmaWFibGVcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS00IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBXSE8gUHJvYmFiaWxpdHkgU2NhbGVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgdGhlcmUgcHJldmlvdXMgY29uY2x1c2lvbiByZXBvcnRzIG9uIHRoaXMgcmVhY3Rpb24/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtcImNlcnRhaW5cIn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gbWF4LXctZml0IG14LWF1dG8gbXQtMTAgcHgtNSBweS0xIGJvcmRlci0yIGZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5Bc3Nlc21lbnQgY3JpdGVyaWE8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtYi0xIG1sLTJcIj5cclxuICAgICAgICAgICAgICAgIDxGaUhlbHBDaXJjbGUgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBteS00XCI+XHJcbiAgICAgICAgICAgICAgPENvbGxhcHNlIGRlZmF1bHRBY3RpdmVLZXk9e1tcIjFcIl19PlxyXG4gICAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxQYW5lbCBoZWFkZXI9e29wdGlvbi5sYWJlbH0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ29tbW9kaSBub24gdml0YWUgcmF0aW9uZSBxdWlzcXVhbSBhbGlxdWlkIGVzdCBuYXR1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmFjZXJlIGhhcnVtIGVycm9yIGNvbnNlY3RldHVyIGludmVudG9yZSwgZG9sb3J1bSBxdWlzXHJcbiAgICAgICAgICAgICAgICAgICAgICBhc3BlcmlvcmVzIGl1cmUgcXVvIGVhISBVbGxhbSwgYmxhbmRpdGlpcyBleGVyY2l0YXRpb25lbS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvUGFuZWw+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZjJcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcbmltcG9ydCB7IFJhZGlvLCBQcm9ncmVzcyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBIYXJ0d2lnJ3MgU2V2ZXJpdHkgQXNzZXNzbWVudCBTY2FsZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkxldmVsIDE8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5MZXZlbCAyPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+TGV2ZWwgMzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezN9PkxldmVsIDQ8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXs0fT5MZXZlbCA1PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NX0+TGV2ZWwgNjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezZ9PkxldmVsIDc8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIG1yLTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICBwZXJjZW50PXszMH1cclxuICAgICAgICAgICAgICAgICAgc3RhdHVzPXtcIm5vcm1hbFwifVxyXG4gICAgICAgICAgICAgICAgICBzaG93SW5mbz17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yPXtcIiNFODU5MENcIn1cclxuICAgICAgICAgICAgICAgICAgdHJhaWxDb2xvcj17XCIjRTVFNUU1XCJ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPntcIk1pbGQgTGV2ZWxcIn08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LVsjRTg1OTBDXVwiPkFzc2Vzc21lbnQgY3JpdGVyaWE8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1sLTIgbWItMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgbm8gY2hhbmdlIGluIHRoZSB0cmVhdG1lbnQgd2l0aCB0aGUgc3VzcGVjdGVkXHJcbiAgICAgICAgICAgICAgICBkcnVnLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIFRoZSBBRFIgcmVxdWlyZXMgdGhhdCB0aGUgc3VzcGVjdGVkIGRydWcgYmUgd2l0aGhlbGQsXHJcbiAgICAgICAgICAgICAgICBkaXNjb250aW51ZWQgb3Igb3RoZXJ3aXNlIGNoYW5nZWQuIE5vIGFudGlkb3RlIG9yIG90aGVyXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnQgaXMgcmVxdWlyZWQsIGFuZCB0aGVyZSBpcyBubyBpbmNyZWFzZSBpbiBsZW5ndGggb2ZcclxuICAgICAgICAgICAgICAgIHN0YXlcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZXJlIGEgaGlzdG9yeSBvZiBhbGxlcmd5IG9yIHByZXZpb3VzIHJlYWN0aW9ucyB0byB0aGUgZHJ1Zz9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZSBkcnVnIGludm9sdmVkIGluYXBwcm9wcmlhdGUgZm9yIHRoZSBwYXRpZW50XHUyMDE5cyBjbGluaWNhbCBjb25kaXRpb24/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgZG9zZSwgcm91dGUgb3IgZnJlcXVlbmN5IG9mIGFkbWluaXN0cmF0aW9uIGluYXBwcm9wcmlhdGUgZm9yIHRoZSBwYXRpZW50XHUyMDE5cyBhZ2UsIHdlaWdodCBvciBkaXNlYXNlIHN0YXRlP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBkZWZhdWx0VmFsdWU9ezB9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgYSB0b3hpYyBzZXJ1bSBkcnVnIGNvbmNlbnRyYXRpb24gKG9yIGxhYm9yYXRvcnkgbW9uaXRvcmluZyB0ZXN0KSBkb2N1bWVudGVkP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBkZWZhdWx0VmFsdWU9ezB9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlcmUgYSBrbm93biB0cmVhdG1lbnQgZm9yIHRoZSBhZHZlcnNlIGRydWcgcmVhY3Rpb24/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyByZXF1aXJlZCB0aGVyYXBldXRpYyBkcnVnIG1vbml0b3Jpbmcgb3Igb3RoZXIgbmVjZXNzYXJ5IGxhYiB0ZXN0cyBub3QgcGVyZm9ybWVkP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBkZWZhdWx0VmFsdWU9ezB9IGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgYSBkcnVnIGludGVyYWN0aW9uIGludm9sdmVkIGluIHRoZSBBRFI/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTZcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gbS0wIGZvbnQtYm9sZFwiPkZpbmFsIFJlc3VsdDwvcD5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkRlZmluaXRlbHkgcHJldmVudGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5Qcm9iYWJseSBwcmV2ZW50YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9Pk5vdCBwcmV2ZW50YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmNSgpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJBZ2VcIiwgdmFsdWU6IFwiYWdlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiR2VuZGVyXCIsIHZhbHVlOiBcImdlbmRlclwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkdlbmV0aWNcIiwgdmFsdWU6IFwiZ2VuZXRpY1wiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkludGVyLWN1cnJlbnQgZGlzZWFzZVwiLCB2YWx1ZTogXCJpbnRlci1jdXJyZW50IGRpc2Vhc2VcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJNdWx0aXBsZSBEcnVnIFRoZXJhcHlcIiwgdmFsdWU6IFwibXVsdGlwbGUgZHJ1ZyB0aGVyYXB5XCIgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UHJlZGljdGFiaWxpdHk8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlByZWRpY3RhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm90IHByZWRpY3RhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCBteS00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFByZWRpc3Bvc2luZyBmYWN0b3JzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17b3B0aW9uc30+PC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIm90aGVyXCI+T3RoZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmNVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkFjdGlvbiBUYWtlbjwvZGl2PlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzYlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIFwiRHJ1ZyB3aXRoZHJhd25cIixcclxuICAgIFwiRG9zZSBpbmNyZWFzZWRcIixcclxuICAgIFwiRG9zZSByZWR1Y2VkXCIsXHJcbiAgICBcIkRvc2Ugbm90IGNoYW5nZWRcIixcclxuICAgIFwiTm90IGFwcGxpY2FibGVcIixcclxuICAgIFwiVW5rbm93blwiLFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgey8qIE1ha2UgZGVzY3JpcHRpb24gZHluYW1pYyAqL31cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEcnVnIDFcIiAvPlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBkZWZhdWx0VmFsdWU9e3JhZGlvT3B0aW9uc1swXX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+RGVjaGFsbGVuZ2U8L2Rpdj5cclxuICAgICAgICAgIDxSYWRpb0dyb3VwRHJ1Z3MgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2NcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIGRlY2hhbGxlbmdlXCIsXHJcbiAgICBcIkRlZmluaXRlIEltcHJvdmVtZW50XCIsXHJcbiAgICBcIk5vIEltcHJvdmVtZW50XCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtyYWRpb09wdGlvbnNbMF19XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlJlY2hhbGxlbmdlPC9kaXY+XHJcbiAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNkXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwRHJ1Z3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJObyByZWNoYWxsZW5nZVwiLFxyXG4gICAgXCJSZWN1cnJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIk5vIG9jY3VyYW5jZSBvZiBzeW1wdG9tc1wiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICB7LyogTWFrZSBkZXNjcmlwdGlvbiBkeW5hbWljICovfVxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkRydWcgMVwiIC8+XHJcbiAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zWzBdfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgaWNvbnNcclxuaW1wb3J0IHsgRmlIZWxwQ2lyY2xlLCBGaVBsdXMsIEZpWCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5cclxuaW1wb3J0IHsgUmFkaW8sIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFJlYWN0aW9uIFJlYXBwZWFyZWQgQWZ0ZXIgUmUtaW50cm9kdWN0aW9uXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxSYWRpb0dyb3VwRHJ1Z3MgLz5cclxuICAgICAgICAgIHsvKiBTZWN0aW9uIHRvIGFkZCBkcnVnIGluZm9ybWF0aW9uICovfVxyXG4gICAgICAgICAgPEFkZERydWdzQm94IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNlXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwRHJ1Z3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJObyByZWNoYWxsZW5nZVwiLFxyXG4gICAgXCJSZWN1cnJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIk5vIG9jY3VyYW5jZSBvZiBzeW1wdG9tc1wiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICB7LyogTWFrZSBkZXNjcmlwdGlvbiBkeW5hbWljICovfVxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkRydWcgMVwiIC8+XHJcbiAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zfVxyXG4gICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zWzBdfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcHQtNFwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBsLTEgcHItNyBteS1hdXRvXCI+RG9zZTwvcD5cclxuICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBBZGREcnVnc0JveCA9ICgpID0+IHtcclxuICBjb25zdCBbZHJ1Z3NBZGRlZCwgc2V0RHJ1Z3NBZGRlZF0gPSB1c2VTdGF0ZTxyZWFkb25seSBTdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrQWRkRHJ1ZyA9IChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERydWdzQWRkZWQoWy4uLmRydWdzQWRkZWQsIGlucHV0VmFsdWVdKTtcclxuICAgIHNldElucHV0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbGlja1JlbW92ZURydWcgPSAoZHJ1ZzogU3RyaW5nKSA9PiB7XHJcbiAgICBzZXREcnVnc0FkZGVkKGRydWdzQWRkZWQuZmlsdGVyKChkKSA9PiBkICE9PSBkcnVnKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTE2XCI+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMTIgZ2FwLTEgZ2FwLXktM1wiXHJcbiAgICAgICAgb25TdWJtaXQ9e29uQ2xpY2tBZGREcnVnfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIGRydWdcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBiZy1bIzZDNTY3Ql0gdGV4dC13aGl0ZSBwLTIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxGaVBsdXMgY2xhc3NOYW1lPVwibXgtYXV0b1wiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtMSBwdC0yXCI+XHJcbiAgICAgICAge2RydWdzQWRkZWQubWFwKChkcnVnOiBTdHJpbmcpID0+IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBjb2wtc3Bhbi0xMSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBweC01IHB5LTFcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktYXV0b1wiPntkcnVnfTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJteS1hdXRvXCIgb25DbGljaz17KCkgPT4gb25DbGlja1JlbW92ZURydWcoZHJ1Zyl9PlxyXG4gICAgICAgICAgICAgIDxGaVggLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiYW50ZC9saWIvaW5wdXQvVGV4dEFyZWFcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2coKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IFtcIlNwZWNpZmljXCIsIFwiU3ltcHRvbWF0aWNcIiwgXCJOb25lXCJdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5UcmVhdG1lbnQgR2l2ZW48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwIG9wdGlvbnM9e29wdGlvbnN9PjwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyIG10LTVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0wIHB5LTBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gbXktMCBweS0wXCI+VHJlYXRtZW50IERldGFpbHMgKGlmIGFueSk8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2dcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LTAgcHktMFwiPkNvbmNvbWl0YW50IG1lZGljYWwgcHJvZHVjdDwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgSW5jbHVkaW5nIHNlbGYtbWVkaWNhdGlvbiBhbmQgaGVyYmFsIHJlbWVkaWVzIHdpdGggdGhlcmFweSBkYXRlc1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxTdWJmb3JtIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNoXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBTdWJmb3JtID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWUgKGJyYW5kL2dlbmVyaWMpXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRvc2UgVXNlZFwiIC8+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSb3V0ZSBVc2VkXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRnJlcXVlbmN5IChPRCwgQkQpXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRGF0ZSBzdGFydGVkXCIgLz5cclxuICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRGF0ZSBzdG9wcGVkXCIgLz5cclxuICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbmRpY2F0aW9uXCIgLz5cclxuICAgICAgPElucHV0IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy0xMDAgcHQtNVwiPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHAtMiB3LTMyIGJvcmRlciBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVsjNkM1NjdCXSBib3JkZXItWyM2QzU2N0JdXCI+XHJcbiAgICAgICAgU2F2ZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtWyM2QzU2N0JdIHAtMiB3LTMyIGJvcmRlciBib3JkZXItWyM2QzU2N0JdIGhvdmVyOmJnLVsjRTg1OTBDXSBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOmJvcmRlci1bI0U4NTkwQ11cIlxyXG4gICAgICA+XHJcbiAgICAgICAgQWRkIG1vcmVcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+T3V0Y29tZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgZGVmYXVsdFZhbHVlPXswfSBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+RmF0YWw8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5SZWNvdmVyeTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkNvbnRpbnVpbmc8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXszfT5Vbmtub3duPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NH0+T3RoZXI8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzaVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IHsgSW5wdXQsIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRXllSW52aXNpYmxlT3V0bGluZWQsIEV5ZVR3b1RvbmUgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1sZyB3LTEvMiBtaW4taC0yLzQgbXgtYXV0byBtYi0zMiBwLTEwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWyM2QzU2N0JdIHRleHQtWzM1cHhdXCI+QURSIFBvcnRhbDwvaDE+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidy0xLzIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNVwiPlxyXG4gICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJleGFtcGxlQGVtYWlsLmNvbVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1iLTVcIj5cclxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyUGFzc3dvcmRIZXJlXCJcclxuICAgICAgICAgICAgICBpY29uUmVuZGVyPXsodmlzaWJsZSkgPT5cclxuICAgICAgICAgICAgICAgIHZpc2libGUgPyA8RXllVHdvVG9uZSAvPiA6IDxFeWVJbnZpc2libGVPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNSBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPlJlbWVtYmVyIG1lPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctMS8yIGJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC0yXCI+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTQgdGV4dC1ncmF5LTUwMFwiPlxyXG4gICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBwdC0xNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy0zLzQgbWluLWgtMy80IG14LWF1dG8gcC0xMCB0ZXh0LWxlZnRcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bFwiPlNlbGVjdCBhIGZvcm0gdG8gZmlsbDwvaDI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBncmlkLXJvd3MtMSBnYXAtNVwiPlxyXG4gICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgcm91dGU9XCJhZHItcmVwb3J0aW5nLzFcIlxyXG4gICAgICAgICAgICBpbWFnZT1cIjFcIlxyXG4gICAgICAgICAgICBuYW1lPVwiQURSIFJlcG9ydGluZyBGb3JtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Q2FyZFNlbGVjdFxyXG4gICAgICAgICAgICByb3V0ZT1cInN1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzFcIlxyXG4gICAgICAgICAgICBpbWFnZT1cIjJcIlxyXG4gICAgICAgICAgICBuYW1lPVwiU3VzcGVjdGVkIEFEUiBSZXBvcnRpbmcgRm9ybVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgcm91dGU9XCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiM1wiXHJcbiAgICAgICAgICAgIG5hbWU9XCJNZWRpY2FsIERldmljZSBBRFIgUmVwb3J0aW5nIEZvcm1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDYXJkU2VsZWN0ID0gKHByb3BzOiB7IG5hbWU6IHN0cmluZzsgcm91dGU6IHN0cmluZzsgaW1hZ2U/OiBzdHJpbmcgfSkgPT4gKFxyXG4gIDxMaW5rIHRvPXtwcm9wcy5yb3V0ZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktNDAwIHAtMyBoLWZ1bGwgaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTc1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9XCJQbGFjZWhvbGRlciBpbWFnZVwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMy80IHctZnVsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXhsIHRleHQtYmxhY2sgcHQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGluaz5cclxuKTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzhhN2MzN2UzJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1QU1VOR0QzSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFk0U0VHV1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MWUJXUTZSWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpNREs3RVBILmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GMkVVREVMMi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ042TDJMSVcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgtSTJWRVpSNkUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMi9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8yJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgtNEVaQ1RWQ1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iLTVMUFI2QzVFLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYy1JTkVIQlFMTi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJZTDNRR0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QtR1BJUkFUNzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lLUNUSUNWNDU3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvMicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yLVJCVU5MU1VHLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8zJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvMycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8zLVVTVFhHQVFCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvNCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi80LUxFSlpBSFRBLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi81Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvNScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi81LURLS1pVUEFRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4LTVIRVdMR0dJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZy1VSFc0TzJRWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUlXVFNYNTMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gtQUpRTlhHNVAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9pJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pLVZZM0YzWU9QLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FUllMM1FHSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleC1DVUs2WFpPRC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJZTDNRR0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy80L2luZGV4Jzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzQnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleC1YS05YV0hDNC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJZTDNRR0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSlZQSElORkouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbi9pbmRleCc6eydpZCc6J3JvdXRlcy9sb2dpbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtQlhXRkVGM0MuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEvaW5kZXgtRldaN0hMMjcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleC1PQk9YRk9PSC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUZHMkhKT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4LTdFM1BEREFYLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVVY1VVpUUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUdFQjRPWEVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstSVpXSDRZTkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay01RkcySEpPRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLVJWRVZZTENKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LVVY1VVpUUS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMic6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjInLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMi1aRVBDTEZSNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR0VCNE9YRUYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMyc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy1ZSFdaRkpQWi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSVpXSDRZTkYuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2InOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2ItUkxPVUhLMkUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MtSTc3S1gyQ1YuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QtNjNNQ1NRUFcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVSWUwzUUdKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleC1NRVgzWlRQRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstRVJZTDNRR0ouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzUvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzUvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzUnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4LU5USFdPMzc0LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01RkcySEpPRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYvaW5kZXgtWkc2SFdYRkYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVGRzJISk9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleC1RRVVKRU8ySy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNUZHMkhKT0QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84L2luZGV4LUtJUllHREFXLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01RkcySEpPRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOS9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOScsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXgtMzRaRlNaVVcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVGRzJISk9ELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzEvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMS9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8xL2luZGV4LVpGUVZMN1pRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LNDNTUVEzVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8yL2luZGV4Jzp7J2lkJzoncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMi9pbmRleC1WTUdPVkhLMy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQUlXVFNYNTMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1LNDNTUVEzVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2InOnsnaWQnOidyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2ItU05IN0VRN0kuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUs0M1NRUTNWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvYyc6eydpZCc6J3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9jJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvYy03NjJZQTNENi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSzQzU1FRM1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9kJzp7J2lkJzoncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9kLVZWQVRDM1U3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LNDNTUVEzVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2UnOnsnaWQnOidyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvZScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2UtVFlHM1hNSFIuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUs0M1NRUTNWLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTDRIQU5FU1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvMy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidzdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy8zL2luZGV4LVhFNlFOSUtKLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1LNDNTUVEzVi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUw0SEFORVNYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdXNwZWN0ZWQtYWRyLXJlcG9ydGluZy80L2luZGV4Jzp7J2lkJzoncm91dGVzL3N1c3BlY3RlZC1hZHItcmVwb3J0aW5nLzQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvNCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvc3VzcGVjdGVkLWFkci1yZXBvcnRpbmcvNC9pbmRleC1ZUjVaVVRSQi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstSzQzU1FRM1YuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MNEhBTkVTWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LThBN0MzN0UzLmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQ0E7QUFEQTtBQUFBO0FBQ0EsWUFBdUI7QUFBQTtBQUFBOzs7QUNEdkI7QUFBQTtBQUFBO0FBQUE7QUFZQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyxnQkFBZ0I7QUFBQSxNQUM3QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztB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QUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBLFlBRVo7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLFVBQVU7QUFBQSxjQUNWLGFBQWE7QUFBQSxjQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUloQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWhCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBS2hCLElBQU0sd0JBQXNDO0FBQUEsRUFDMUMsU0FBUztBQUFBLEVBQ1QsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBLElBRVo7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQSxRQUVaO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsVUFDVixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJaEI7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFLaEIsSUFBTSx5QkFBdUM7QUFBQSxFQUMzQyxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsSUFFWjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsSUFFWjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEsSUFFWjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUloQjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUEs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
