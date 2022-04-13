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
var app_default = "/build/_assets/app-MARAJH4W.css";

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
  const currentLocation = location.pathname.split("/");
  const pageType = currentLocation[1] === "adr-reporting" ? { link: "/adr-reporting/", mapRoute: ADRreporting_portalMap } : {
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
    isRequired: true,
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
    isRequired: true,
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
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device Operator",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions2,
    optionType: "button"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-2 flex flex-col"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    description: "Device location",
    isRequired: true
  }), /* @__PURE__ */ React.createElement(import_antd12.Radio.Group, {
    size: "large",
    buttonStyle: "solid",
    options: radioOptions3,
    optionType: "button"
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
    optionType: "button"
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd17.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd17.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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
    isRequired: true,
    description: "Name"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, {
    placeholder: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd18.Input, {
    placeholder: ""
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col pt-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
    description: "License Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Catalogue Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Model Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Batch Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Serial Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Software Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Accessories/Associated Devices"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "GMDN Code & GMDN Term"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "UDI Number"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Installation Date"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Expiration Date"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Last Calibration"
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: ""
  }), /* @__PURE__ */ React.createElement(import_antd19.DatePicker, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Age of device from date of manufacturing"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-1"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "How long was device in use"
  }), /* @__PURE__ */ React.createElement(import_antd19.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col col-span-2"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
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
    isRequired: true,
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
  default: () => Form12
});
init_react();
var import_antd21 = require("antd");
var { TextArea: TextArea12 } = import_antd21.Input;
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
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Date of Birth"
  }), /* @__PURE__ */ React.createElement(import_antd21.DatePicker, {
    className: "w-full"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Age of onset"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Gender"
  }), /* @__PURE__ */ React.createElement(import_antd21.Form.Item, null, /* @__PURE__ */ React.createElement(import_antd21.Select, {
    allowClear: true
  }, /* @__PURE__ */ React.createElement("option", null, "Male"), /* @__PURE__ */ React.createElement("option", null, "Female"), /* @__PURE__ */ React.createElement("option", null, "Other")))), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Weight"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, {
    addonAfter: "mgs"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Patient ID"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "IP/OP"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "w-1/2 pr-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Unit"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Reason for taking medication/vaccination"
  }), /* @__PURE__ */ React.createElement(TextArea12, {
    rows: 4
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-3/4 px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Medicines/vaccines advised by"
  }), /* @__PURE__ */ React.createElement(import_antd21.Checkbox.Group, {
    className: "w-full grid grid-cols-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "A"
  }, "Doctor")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "B"
  }, "Pharmacist")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "C"
  }, "Friends")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "D"
  }, "Relatives"))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "E"
  }, "Self (past disease experienced)")), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-1"
  }, /* @__PURE__ */ React.createElement(import_antd21.Checkbox, {
    value: "F"
  }, "Self (no past disease experienced)")))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Known Allergies"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 w-full px-4"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: false,
    description: "Social History"
  }), /* @__PURE__ */ React.createElement(import_antd21.Input, null))))), /* @__PURE__ */ React.createElement(NavigationPanel_default, {
    currentRoute: "1"
  }));
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
    isRequired: false,
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
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
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
    isRequired: true,
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
  isRequired: true,
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
  isRequired: true,
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
  const changeSeriousness = (checked) => {
    setSeriousReaction(checked);
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
  }, "Not Applicable"), /* @__PURE__ */ React.createElement(import_antd35.Switch, null), /* @__PURE__ */ React.createElement("p", {
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
  }, /* @__PURE__ */ React.createElement(import_antd35.Input, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-12 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-span-3"
  }, /* @__PURE__ */ React.createElement(inputDescription_default, {
    isRequired: true,
    description: "Worldwide Unique No."
  })), /* @__PURE__ */ React.createElement("div", {
    className: "col-span-9"
  }, /* @__PURE__ */ React.createElement(import_antd35.Input, null))), /* @__PURE__ */ React.createElement("div", {
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
var assets_manifest_default = { "version": "93ad2176", "entry": { "module": "/build/entry.client-PSUNGD3I.js", "imports": ["/build/_shared/chunk-LY4SEGWT.js", "/build/_shared/chunk-LYBWQ6RX.js", "/build/_shared/chunk-JMDK7EPH.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-FRFJ6BXF.js", "imports": ["/build/_shared/chunk-CN6L2LIW.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/1/index": { "id": "routes/adr-reporting/1/index", "parentId": "root", "path": "adr-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/1/index-FAH43P5V.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/2/index": { "id": "routes/adr-reporting/2/index", "parentId": "root", "path": "adr-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/2/index-6T3BXBHP.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/b": { "id": "routes/adr-reporting/3/b", "parentId": "root", "path": "adr-reporting/3/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/b-BXHNOOIC.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/c": { "id": "routes/adr-reporting/3/c", "parentId": "root", "path": "adr-reporting/3/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/c-3UM7DMUY.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/d": { "id": "routes/adr-reporting/3/d", "parentId": "root", "path": "adr-reporting/3/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/d-QLVVOY5J.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/e": { "id": "routes/adr-reporting/3/e", "parentId": "root", "path": "adr-reporting/3/e", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/e-72K5XBSP.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/2": { "id": "routes/adr-reporting/3/f/2", "parentId": "root", "path": "adr-reporting/3/f/2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/2-ZSUVEIQR.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/3": { "id": "routes/adr-reporting/3/f/3", "parentId": "root", "path": "adr-reporting/3/f/3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/3-CN6FN6KE.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/4": { "id": "routes/adr-reporting/3/f/4", "parentId": "root", "path": "adr-reporting/3/f/4", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/4-TN3BR3LM.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/5": { "id": "routes/adr-reporting/3/f/5", "parentId": "root", "path": "adr-reporting/3/f/5", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/5-LJ2BDVCO.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/f/index": { "id": "routes/adr-reporting/3/f/index", "parentId": "root", "path": "adr-reporting/3/f", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/f/index-RKPABNYZ.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/g": { "id": "routes/adr-reporting/3/g", "parentId": "root", "path": "adr-reporting/3/g", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/g-7TGS7KZR.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/h": { "id": "routes/adr-reporting/3/h", "parentId": "root", "path": "adr-reporting/3/h", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/h-XSFY6SS5.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/i": { "id": "routes/adr-reporting/3/i", "parentId": "root", "path": "adr-reporting/3/i", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/i-45L443VM.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/index": { "id": "routes/adr-reporting/3/index", "parentId": "root", "path": "adr-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/index-DJD54V2K.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/3/j": { "id": "routes/adr-reporting/3/j", "parentId": "root", "path": "adr-reporting/3/j", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/3/j-L2OBPGD7.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/adr-reporting/4/index": { "id": "routes/adr-reporting/4/index", "parentId": "root", "path": "adr-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/adr-reporting/4/index-57FTTORU.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-UJ3G473I.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/build/routes/login/index-BXWFEF3C.js", "imports": ["/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/1/index": { "id": "routes/medical-device-reporting/1/index", "parentId": "root", "path": "medical-device-reporting/1", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/1/index-5DN6YGPI.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/2/index": { "id": "routes/medical-device-reporting/2/index", "parentId": "root", "path": "medical-device-reporting/2", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/2/index-ULV4RMNO.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/index": { "id": "routes/medical-device-reporting/3/index", "parentId": "root", "path": "medical-device-reporting/3", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/index-LPHAAWZE.js", "imports": ["/build/_shared/chunk-7APZO223.js", "/build/_shared/chunk-GEB4OXEF.js", "/build/_shared/chunk-MY4CM7P4.js", "/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option1": { "id": "routes/medical-device-reporting/3/subforms/option1", "parentId": "root", "path": "medical-device-reporting/3/subforms/option1", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option1-YTVJAFT5.js", "imports": ["/build/_shared/chunk-7APZO223.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option2": { "id": "routes/medical-device-reporting/3/subforms/option2", "parentId": "root", "path": "medical-device-reporting/3/subforms/option2", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option2-ZEPCLFR5.js", "imports": ["/build/_shared/chunk-GEB4OXEF.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/3/subforms/option3": { "id": "routes/medical-device-reporting/3/subforms/option3", "parentId": "root", "path": "medical-device-reporting/3/subforms/option3", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/3/subforms/option3-KCH5FSYQ.js", "imports": ["/build/_shared/chunk-MY4CM7P4.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/b": { "id": "routes/medical-device-reporting/4/b", "parentId": "root", "path": "medical-device-reporting/4/b", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/b-P4S7Y4N5.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/c": { "id": "routes/medical-device-reporting/4/c", "parentId": "root", "path": "medical-device-reporting/4/c", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/c-ROKPL7PD.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/d": { "id": "routes/medical-device-reporting/4/d", "parentId": "root", "path": "medical-device-reporting/4/d", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/d-XTF3NQWQ.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/4/index": { "id": "routes/medical-device-reporting/4/index", "parentId": "root", "path": "medical-device-reporting/4", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/4/index-QXPQ3WE7.js", "imports": ["/build/_shared/chunk-NFJETAVD.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/5/index": { "id": "routes/medical-device-reporting/5/index", "parentId": "root", "path": "medical-device-reporting/5", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/5/index-6TQK7G4R.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/6/index": { "id": "routes/medical-device-reporting/6/index", "parentId": "root", "path": "medical-device-reporting/6", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/6/index-MEOJHGIB.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/7/index": { "id": "routes/medical-device-reporting/7/index", "parentId": "root", "path": "medical-device-reporting/7", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/7/index-NWY3PWS6.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/8/index": { "id": "routes/medical-device-reporting/8/index", "parentId": "root", "path": "medical-device-reporting/8", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/8/index-KYJ5CV7Y.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/medical-device-reporting/9/index": { "id": "routes/medical-device-reporting/9/index", "parentId": "root", "path": "medical-device-reporting/9", "index": true, "caseSensitive": void 0, "module": "/build/routes/medical-device-reporting/9/index-SV6SROG7.js", "imports": ["/build/_shared/chunk-5W5SLQKX.js", "/build/_shared/chunk-LLBYU7ET.js", "/build/_shared/chunk-FIU3JSTZ.js", "/build/_shared/chunk-6CFM2QNG.js", "/build/_shared/chunk-33APSDS7.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-93AD2176.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb290LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9yb290L2luZGV4LnRzeCIsICIuLi9hcHAvc3RhdGVzL3N0b3JlLnRzIiwgIi4uL2FwcC9zdGF0ZXMvU2xpY2VzL2Zvcm1PbmUvMS50cyIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24xLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uL2luZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24yLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDNcXHN1YmZvcm1zXFxvcHRpb24zLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICIuLi9hcHAvbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXIvTGlzdEl0ZW1zLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb21tb24vc2lkZWJhci9TaWRlYmFyVGVtcGxhdGVzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWwvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbC9Gb3JtTWFwLnRzIiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcMlxcaW5kZXgudHN4IiwgIi4uL2FwcC9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9pbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFwzXFxpbmRleC50c3giLCAiLi4vYXBwL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xLnRzeCIsICIuLi9hcHAvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjIudHN4IiwgIi4uL2FwcC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMy50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw1XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw2XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw3XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw4XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw5XFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFw0XFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXDRcXGMudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcNFxcZC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcZlxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDFcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwyXFxpbmRleC50c3giLCAicm91dGU6RDpcXFByb2plY3RzXFxBRFItcG9ydGFsXFxhcHBcXHJvdXRlc1xcYWRyLXJlcG9ydGluZ1xcM1xcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGFkci1yZXBvcnRpbmdcXDRcXGluZGV4LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwyLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFwzLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw0LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxmXFw1LnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxiLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxjLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxkLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxlLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxnLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxoLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxpLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxhZHItcmVwb3J0aW5nXFwzXFxqLnRzeCIsICJyb3V0ZTpEOlxcUHJvamVjdHNcXEFEUi1wb3J0YWxcXGFwcFxccm91dGVzXFxsb2dpblxcaW5kZXgudHN4IiwgInJvdXRlOkQ6XFxQcm9qZWN0c1xcQURSLXBvcnRhbFxcYXBwXFxyb3V0ZXNcXGluZGV4LnRzeCIsICJzZXJ2ZXItYXNzZXRzLW1hbmlmZXN0OkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMy40XG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG5cbiIsICJleHBvcnQgKiBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkXCI7IiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwzXFxcXHN1YmZvcm1zXFxcXG9wdGlvbjEudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxzdWJmb3Jtc1xcXFxvcHRpb24yLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDNcXFxcc3ViZm9ybXNcXFxcb3B0aW9uMy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFwxXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDJcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDVcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcN1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOFxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcOVxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxtZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcXFxcNFxcXFxiLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXG1lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1xcXFw0XFxcXGMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE1IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXFxcXDRcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDFcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE4IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwyXFxcXGluZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxOSBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDRcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIxIGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcMi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZlxcXFwzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyMyBmcm9tIFwiRDpcXFxcUHJvamVjdHNcXFxcQURSLXBvcnRhbFxcXFxhcHBcXFxccm91dGVzXFxcXGFkci1yZXBvcnRpbmdcXFxcM1xcXFxmXFxcXDQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTI0IGZyb20gXCJEOlxcXFxQcm9qZWN0c1xcXFxBRFItcG9ydGFsXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWRyLXJlcG9ydGluZ1xcXFwzXFxcXGZcXFxcNS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjUgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjYgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcYy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjcgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjggZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMjkgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcZy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzAgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzEgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcaS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzIgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxhZHItcmVwb3J0aW5nXFxcXDNcXFxcai50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzMgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxsb2dpblxcXFxpbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMzQgZnJvbSBcIkQ6XFxcXFByb2plY3RzXFxcXEFEUi1wb3J0YWxcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjFcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNFwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNVwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOVxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy83L2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvN1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzgvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzhcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85XCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMlxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2JcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYlwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvY1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2RcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZlwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTZcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzFcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTE3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8yL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiYWRyLXJlcG9ydGluZy8yXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxOFxuICAgIH0sXG4gIFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvM1wiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTlcbiAgICB9LFxuICBcInJvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzRcIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMlwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8yXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvM1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi8zXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi80XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTIzXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJhZHItcmVwb3J0aW5nLzMvZi81XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI0XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2JcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9iXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI1XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9jXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI2XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2RcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9kXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI3XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2VcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9lXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI4XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2dcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9nXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTI5XG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2hcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9oXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMwXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2lcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9pXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMxXG4gICAgfSxcbiAgXCJyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2pcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Fkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImFkci1yZXBvcnRpbmcvMy9qXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTMyXG4gICAgfSxcbiAgXCJyb3V0ZXMvbG9naW4vaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2xvZ2luL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ2luXCIsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUzM1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMzRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXHJcbiAgcmVxdWVzdDogUmVxdWVzdCxcclxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcclxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXHJcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcclxuKSB7XHJcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXHJcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxyXG4gICk7XHJcblxyXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XHJcblxyXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xyXG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXHJcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXHJcbiAgfSk7XHJcbn1cclxuIiwgImltcG9ydCB7IExpbmtzLCBMaXZlUmVsb2FkLCBPdXRsZXQsIE1ldGEsIFNjcmlwdHMgfSBmcm9tIFwicmVtaXhcIjtcclxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBSb290TGF5b3V0IGZyb20gXCJ+L2xheW91dHMvcm9vdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IERvY3VtZW50UHJvcHMgfSBmcm9tIFwifi90eXBlcy9nZW5lcmFsXCI7XHJcblxyXG4vL2ltcG9ydGluZyBzdHlsZXNoZWV0XHJcbmltcG9ydCB0YWlsd2luZFN0eWxlIGZyb20gXCIuL3N0eWxlcy9hcHAuY3NzXCI7XHJcbmltcG9ydCBnbG9iYWxTdHlsZSBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xyXG5pbXBvcnQgYW50U3R5bGVzIGZyb20gXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdGl0bGU6IFwiQURSIFBvcnRhbCB8IEtNQ1wiIH07XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogdGFpbHdpbmRTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZSB9LFxyXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBhbnRTdHlsZXMgfSxcclxuICBdO1xyXG59XHJcblxyXG5jb25zdCBEb2N1bWVudCA9ICh7IGNoaWxkcmVuIH06IERvY3VtZW50UHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgIDxoZWFkPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPExpbmtzIC8+XHJcbiAgICAgIDwvaGVhZD5cclxuICAgICAgPGJvZHk+XHJcbiAgICAgICAgPFNjcmlwdHMgLz5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvaHRtbD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RG9jdW1lbnQ+XHJcbiAgICAgIDxSb290TGF5b3V0PlxyXG4gICAgICAgIDxPdXRsZXQgLz5cclxuICAgICAgPC9Sb290TGF5b3V0PlxyXG4gICAgPC9Eb2N1bWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHJlZHV4LXRvb2xraXRcclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdGF0ZXMvc3RvcmVcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0aGUgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL25hdmJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgUm9vdExheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9Qcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb290TGF5b3V0O1xyXG4iLCAiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuLy9pbXBvcnRpbmcgc2xpY2VzIGhlcmVcclxuaW1wb3J0IGZvcm0xcGFnZTFSZWR1Y2VyIGZyb20gJ34vc3RhdGVzL1NsaWNlcy9mb3JtT25lLzEnXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgZm9ybTFwYWdlMTogZm9ybTFwYWdlMVJlZHVjZXJcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBJbmZlciB0aGUgYFJvb3RTdGF0ZWAgYW5kIGBBcHBEaXNwYXRjaGAgdHlwZXMgZnJvbSB0aGUgc3RvcmUgaXRzZWxmXHJcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHN0b3JlLmdldFN0YXRlPlxyXG4vLyBJbmZlcnJlZCB0eXBlOiB7cG9zdHM6IFBvc3RzU3RhdGUsIGNvbW1lbnRzOiBDb21tZW50c1N0YXRlLCB1c2VyczogVXNlcnNTdGF0ZX1cclxuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSB0eXBlb2Ygc3RvcmUuZGlzcGF0Y2giLCAiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb3VudGVyU3RhdGUge1xyXG4gICAgdmFsdWU6IG51bWJlclxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IENvdW50ZXJTdGF0ZSA9IHtcclxuICAgIHZhbHVlOiAwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybTFwYWdlMVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2NvdW50ZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBpbmNyZW1lbnQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBSZWR1eCBUb29sa2l0IGFsbG93cyB1cyB0byB3cml0ZSBcIm11dGF0aW5nXCIgbG9naWMgaW4gcmVkdWNlcnMuIEl0XHJcbiAgICAgICAgICAgIC8vIGRvZXNuJ3QgYWN0dWFsbHkgbXV0YXRlIHRoZSBzdGF0ZSBiZWNhdXNlIGl0IHVzZXMgdGhlIEltbWVyIGxpYnJhcnksXHJcbiAgICAgICAgICAgIC8vIHdoaWNoIGRldGVjdHMgY2hhbmdlcyB0byBhIFwiZHJhZnQgc3RhdGVcIiBhbmQgcHJvZHVjZXMgYSBicmFuZCBuZXdcclxuICAgICAgICAgICAgLy8gaW1tdXRhYmxlIHN0YXRlIGJhc2VkIG9mZiB0aG9zZSBjaGFuZ2VzXHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlICs9IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlY3JlbWVudDogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlIC09IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluY3JlbWVudEJ5QW1vdW50OiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnZhbHVlICs9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbn0pXHJcblxyXG4vLyBBY3Rpb24gY3JlYXRvcnMgYXJlIGdlbmVyYXRlZCBmb3IgZWFjaCBjYXNlIHJlZHVjZXIgZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHsgaW5jcmVtZW50LCBkZWNyZW1lbnQsIGluY3JlbWVudEJ5QW1vdW50IH0gPSBmb3JtMXBhZ2UxU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZm9ybTFwYWdlMVNsaWNlLnJlZHVjZXIiLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTQgcC0xIHNoYWRvdy14bCBmb250LW1lZGl1bSBmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgIDxpbWcgc3JjPVwiL0FEUi1sb2dvLnBuZ1wiIGNsYXNzTmFtZT1cInAtMVwiIC8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJteS1hdXRvIHBsLTggdGV4dC1wdXJwbGUtODAwXCI+SG9tZTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24xXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5NZWRpY2FsIERldmljZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbXBsYW50YWJsZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgU2luZ2xlIFVzZSBEZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2FibGUgZGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFJldXNlIG9mIG1hbnVmYWN0dXJlZCBtYXJrZWQgc2luZ2xlIHVzZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgbXgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD5QZXJzb25hbCB1c2UvaG9tZWNhcmUgdXNlIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcHRpb24xO1xyXG4iLCAiaW1wb3J0IHsgSW5wdXREZXNjcmlwdGlvblByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuaW1wb3J0IEluZm9JY29uIGZyb20gXCIuL0luZm9JY29uLnN2Z1wiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmNvbnN0IElucHV0RGVzY3JpcHRpb24gPSAocHJvcHM6IElucHV0RGVzY3JpcHRpb25Qcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHBiLTFcIj5cclxuICAgICAge3Byb3BzLmlzUmVxdWlyZWQgJiYgPHNwYW4gY2xhc3NOYW1lPVwicHItMSB0ZXh0LXJlZC01MDBcIj4qPC9zcGFuPn1cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItWzBweF0gcHItMSB0ZXh0LVsxNnB4XVwiPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxGaUhlbHBDaXJjbGUgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dERlc2NyaXB0aW9uO1xyXG4iLCAiaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZnVuY3Rpb24gT3B0aW9uMigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSW4gVml0cm8gRGlhZ25vc3RpY3NcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXktMiBteC00IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PktpdHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PkNvbnRyb2wgTWF0ZXJpYWxzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+UmVhZ2VudHM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94PklWRCBFbGVjdHJvbmljIFJlYWRlci9BbmFseXplcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q2FsaWJyYXRvcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5PdGhlcnM8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjI7XHJcbiIsICJpbXBvcnQgeyBSYWRpbywgQ2hlY2tib3gsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuY29uc3Qgb3B0aW9uMyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb24zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bCBwLTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xNiBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgRXF1aXBtZW50L01hY2hpbmVzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBUaGVyYXBldXRpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBEaWFnbm9zdGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIEJvdGh7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS8yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBOb24tSW52YXNpdmVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBJbWFnaW5nIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00XCI+XHJcbiAgICAgICAgICAgIDxDaGVja2JveD4gT3RoZXJzIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlcG9ydGVyJ3MgQ29tbWVudHNcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcHRpb24zO1xyXG4iLCAiLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3gsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTEoKSB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1wiSW5pdGlhbFwiLCBcIkZvbGxvdy11cFwiLCBcIkZpbmFsXCIsIFwiVHJlbmRcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UHJpbWFyeSBJbmZvcm1hdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlJlcG9ydGVyIFJlZmVyZW5jZSBOdW1iZXJcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgcmVwb3J0XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiVHlwZSBvZiByZXBvcnRcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIxXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvY29tbW9uL3NpZGViYXJcIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2dlbmVyYWxcIjtcclxuXHJcbmNvbnN0IEZvcm1MYXlvdXQgPSAoeyBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBncmlkIGdyaWQtY29scy00IGdhcC01IHB4LTE2IHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjBcIj5cclxuICAgICAgICAgICAgPFNpZGViYXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBwLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBwdC04IHBiLTQgdGV4dC1bMzVweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgQURSIFJlcG9ydGluZyBGb3JtXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IExpc3RJdGVtcyB9IGZyb20gXCIuL0xpc3RJdGVtc1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGRhdGFcclxuaW1wb3J0IHsgQWRyUmVwb3J0aW5nLCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nIH0gZnJvbSBcIi4vU2lkZWJhclRlbXBsYXRlc1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IFRlbXBsYXRlUHJvcHMgfSBmcm9tIFwifi90eXBlcy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuY29uc3QgU2lkZWJhciA9ICgpID0+IHtcclxuICBsZXQgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIC8vIEhvbGRzIHRoZSBjdXJyZW50IGZvcm0gc2lkZWJhciBkYXRhXHJcbiAgY29uc3QgW2FkclJlcG9ydGluZ0RhdGEsIHNldEFkclJlcG9ydGluZ0RhdGFdID0gdXNlU3RhdGU8VGVtcGxhdGVQcm9wc1tdPihcclxuICAgIEFkclJlcG9ydGluZy50ZW1wbGF0ZVxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgICBjb25zdCBjdXJyZW50Rm9ybSA9IGN1cnJlbnRMb2NhdGlvblsxXTtcclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gY3VycmVudExvY2F0aW9uWzJdO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VTdWIgPVxyXG4gICAgICBjdXJyZW50TG9jYXRpb24ubGVuZ3RoID49IDQgPyBjdXJyZW50TG9jYXRpb25bM10gOiBcIlwiO1xyXG4gICAgY29uc3QgY3VycmVudFBhZ2VTdWJTdWIgPVxyXG4gICAgICBjdXJyZW50TG9jYXRpb24ubGVuZ3RoID49IDUgPyBjdXJyZW50TG9jYXRpb25bNF0gOiBcIlwiO1xyXG4gICAgaWYgKGN1cnJlbnRGb3JtID09PSBcImFkci1yZXBvcnRpbmdcIikge1xyXG4gICAgICBzZXRBZHJSZXBvcnRpbmdEYXRhKEFkclJlcG9ydGluZy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEZvcm0gPT09IFwibWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCIpIHtcclxuICAgICAgc2V0QWRyUmVwb3J0aW5nRGF0YShNZWRpY2FsRGV2aWNlUmVwb3J0aW5nLnRlbXBsYXRlKTtcclxuICAgIH1cclxuICAgIHNldEFjdGl2ZVRhYihjdXJyZW50UGFnZSArIGN1cnJlbnRQYWdlU3ViICsgY3VycmVudFBhZ2VTdWJTdWIpO1xyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNCBwYi00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgSW5kaWFuIE5hdGlvbmFsIEVtYmxlbVwiXHJcbiAgICAgICAgICAgIHNyYz1cIi9lbWJsZW0ucG5nXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql0gdGV4dC14bCBtLTAgbWItM1wiPlxyXG4gICAgICAgICAgICBJTkRJQU4gUEhBUk1BQ09QT0VJQSBDT01NSVNTSU9OXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bN3B4XSBib3JkZXItdC0yIGJvcmRlci1bIzZDNTY3Ql0gcHQtMiBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgKE5hdGlvbmFsIENvb3JkaW5hdGlvbiBDZW50cmUtUGhhcm1hY292aWdpbGFuY2UgUHJvZ3JhbW1lIG9mIEluZGlhKVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgTWluaXN0cnkgb2YgSGVhbHRoICYgRmFtaWx5IFdlbGZhcmUsIEdvdmVybm1lbnQgb2YgSW5kaWEgU2VjdG9yLTIzLFxyXG4gICAgICAgICAgICBSYWogTmFnYXIsIEdoYXppYWJhZC0yMDEwMDJcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHAtNSByb3VuZGVkLWxnIHRleHQtWyM2QzU2N0JdIGJvcmRlclwiPlxyXG4gICAgICAgIHthZHJSZXBvcnRpbmdEYXRhLm1hcCgoaXRlbTogVGVtcGxhdGVQcm9wcywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExpc3RJdGVtc1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgey4uLml0ZW19XHJcbiAgICAgICAgICAgICAgbnVtYmVyPXtpbmRleH1cclxuICAgICAgICAgICAgICBjdXJyZW50UGFnZT17YWN0aXZlVGFifVxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rPXtpdGVtLnBhZ2VMaW5rfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcclxuIiwgIi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IEZpQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgR29QcmltaXRpdmVEb3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvZ29cIjtcclxuXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7XHJcbiAgTGlzdEl0ZW1zUHJvcHMsXHJcbiAgVGVtcGxhdGVQcm9wcyxcclxuICBTaWRlYmFyTnVtYmVyaW5nQnVsbGV0cyxcclxufSBmcm9tIFwifi90eXBlcy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuY29uc3QgTGlzdEl0ZW1zID0gKHByb3BzOiBMaXN0SXRlbXNQcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci0zXCI+XHJcbiAgICAgICAgICA8U2lkZWJhck51bWJlcmluZ0J1bGxldFxyXG4gICAgICAgICAgICBpc0N1cnJlbnRQYWdlPXtwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVswXSA9PT0gcHJvcHMucGFnZUxpbmt9XHJcbiAgICAgICAgICAgIGlzQ29tcGxldGVkPXtwcm9wcy5pc0NvbXBsZXRlZH1cclxuICAgICAgICAgICAgYnVsbGV0TnVtYmVyPXtwcm9wcy5udW1iZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZSB0ZXh0LWJhc2VcIj57cHJvcHMubmFtZX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHBsLThcIj5cclxuICAgICAgICB7cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMF0gPT09IHByb3BzLnBhZ2VMaW5rICYmXHJcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlbj8ubWFwKChjaGlsZDogVGVtcGxhdGVQcm9wcywgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpc0FjdGl2ZVRhYiA9XHJcbiAgICAgICAgICAgICAgY2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMV0gPT09IHByb3BzLmN1cnJlbnRQYWdlLnNwbGl0KFwiXCIpWzFdO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVUYWJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJmbGV4IGZsZXgtcm93IHBiLTEgZm9udC1ib2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJmbGV4IGZsZXgtcm93IHBiLTEgdGV4dC1bIzdFN0U3RV1cIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHB0LTEgcHItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHb1ByaW1pdGl2ZURvdCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IHAtMCBtLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wIHRleHQtbWRcIj57Y2hpbGQubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHBsLTggcHktMVwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvcHMuY3VycmVudFBhZ2Uuc3BsaXQoXCJcIilbMV0gPT09XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucGFnZUxpbmsuc3BsaXQoXCJcIilbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlbj8ubWFwKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKHN1YkNoaWxkOiBUZW1wbGF0ZVByb3BzLCBzdWJJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlU3ViVGFiID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJDaGlsZC5wYWdlTGluay5zcGxpdChcIlwiKVsyXSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jdXJyZW50UGFnZS5zcGxpdChcIlwiKVsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3N1YkluZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVTdWJUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicHktMSBmb250LWJvbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJweS0xIHRleHQtWyM3RTdFN0VdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBwci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHb1ByaW1pdGl2ZURvdCBjbGFzc05hbWU9XCJ0ZXh0LW1kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcC0wIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtLTAgcC0wIHRleHQteHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3ViQ2hpbGQubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFNpZGViYXJOdW1iZXJpbmdCdWxsZXQgPSAocHJvcHM6IFNpZGViYXJOdW1iZXJpbmdCdWxsZXRzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmlzQ29tcGxldGVkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1bIzZDNTY3Ql0gYmctWyM2QzU2N0JdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgPEZpQ2hlY2sgY2xhc3NOYW1lPVwibXgtYXV0byBteS1hdXRvIGZvbnQtZXh0cmFib2xkXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHByb3BzLmlzQ3VycmVudFBhZ2UpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBib3JkZXItMiBib3JkZXItWyM2QzU2N0JdIHJvdW5kZWQtZnVsbCBoLTcgdy03IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPExpbmsgdG89XCJcIiBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXVwiPlxyXG4gICAgICAgICAge3Byb3BzLmJ1bGxldE51bWJlciArIDF9XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLVsjN0U3RTdFXSByb3VuZGVkLWZ1bGwgaC03IHctNyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxMaW5rIHRvPVwiXCIgY2xhc3NOYW1lPVwidGV4dC1bIzdFN0U3RV1cIj5cclxuICAgICAgICAgIHtwcm9wcy5idWxsZXROdW1iZXIgKyAxfVxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9wPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBMaXN0SXRlbXMgfTtcclxuIiwgIi8vaW1wb3J0aW5mIHR5cGVzXHJcbmltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2NvbW1vbi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBBZHJSZXBvcnRpbmc6IFNpZGViYXJQcm9wcyA9IHtcclxuICBiYXNlVXJsOiBcIi9hZHItcmVwb3J0aW5nXCIsXHJcbiAgdGVtcGxhdGU6IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjFcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IHRydWUsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIEFkdmVyc2UgUmVhY3Rpb25cIixcclxuICAgICAgcGFnZUxpbms6IFwiMlwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VzcGVjdGVkIE1lZGljYXRpb24ocylcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJNZWRpY2F0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIkFjdGlvbiBUYWtlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2JcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGVjaGFsbGVuZ2VcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNjXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlJlY2hhbGxlbmdlXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJSZWFjdGlvbiByZWFwcGVhcmVkIGFmdGVyIHJlaW50cm9kdWN0aW9uXCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzZVwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJDYXVzYWxpdHkgQXNzZXNzbWVudFwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2ZcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiBcIk5hcmFuam8ncyBzY2FsZVwiLFxyXG4gICAgICAgICAgICAgIHBhZ2VMaW5rOiBcIjNmXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiV0hPIHByb2JhYmlsaXR5IHNjYWxlXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2YyXCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiSGFydHdpZydzIFNldmVyaXR5IEFzc2Vzc21lbnQgU2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjNcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJNb2RpZmllZCBTY2h1bW9jayBhbmQgVGhvcm50b24gc2NhbGVcIixcclxuICAgICAgICAgICAgICBwYWdlTGluazogXCIzZjRcIixcclxuICAgICAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogXCJQcmVkaWN0YWJpbGl0eSAmIFByZWRpc3Bvc2luZyBmYWN0b3JzXCIsXHJcbiAgICAgICAgICAgICAgcGFnZUxpbms6IFwiM2Y1XCIsXHJcbiAgICAgICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIlRyZWF0bWVudCBnaXZlblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiM2dcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiQ29uY29taXRhbnQgbWVkaWNhbCBwcm9kdWN0XCIsXHJcbiAgICAgICAgICBwYWdlTGluazogXCIzaFwiLFxyXG4gICAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZTogXCJBTUMvTkNDIFNlY3Rpb25cIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNpXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lOiBcIk91dGNvbWVcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjNqXCIsXHJcbiAgICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW10sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVwb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI0XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgTWVkaWNhbERldmljZVJlcG9ydGluZzogU2lkZWJhclByb3BzID0ge1xyXG4gIGJhc2VVcmw6IFwiL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiLFxyXG4gIHRlbXBsYXRlOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUHJpbWFyeSBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIxXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXBvcnRlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCIyXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJEZXZpY2UgQ2F0ZWdvcnlcIixcclxuICAgICAgcGFnZUxpbms6IFwiM1wiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiRGV2aWNlIERlc2NyaXB0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiTWFudWZhY3R1cmVyIERldGFpbHNcIixcclxuICAgICAgICAgIHBhZ2VMaW5rOiBcIjRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiSW1wb3J0ZXIgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGJcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRGlzdHJpYnV0b3IgRGV0YWlsc1wiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGNcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWU6IFwiRnVydGhlciBJbmZvcm1hdGlvblwiLFxyXG4gICAgICAgICAgcGFnZUxpbms6IFwiNGRcIixcclxuICAgICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJFdmVudCBEZXNjcmlwdGlvblwiLFxyXG4gICAgICBwYWdlTGluazogXCI1XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJQYXRpZW50IEluZm9ybWF0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjZcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIkhlYWx0aGNhcmUgRmFjaWxpdHkgRGV0YWlsc1wiLFxyXG4gICAgICBwYWdlTGluazogXCI3XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJDYXN1YWx0eSBBc3Nlc3NtZW50XCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjhcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlByb2R1Y3QgT3duZXIncyBJbnZlc3RpZ2F0aW9uXCIsXHJcbiAgICAgIHBhZ2VMaW5rOiBcIjlcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBBZHJSZXBvcnRpbmcsIE1lZGljYWxEZXZpY2VSZXBvcnRpbmcgfTtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBlbnRpdGl0ZXNcclxuaW1wb3J0IHtcclxuICBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG4gIE1lZGljYWxEZXZpY2VSZXBvcnRpbmdfcG9ydGFsTWFwLFxyXG59IGZyb20gXCIuL0Zvcm1NYXBcIjtcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8vIGltcG9ydGluZyB0eXBlc1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uUGFuZWxQcm9wcyB9IGZyb20gXCJ+L3R5cGVzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uUGFuZWwgPSAocHJvcHM6IE5hdmlnYXRpb25QYW5lbFByb3BzKSA9PiB7XHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xyXG4gIGNvbnN0IFtuZXh0UGFnZSwgc2V0TmV4dFBhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbcHJldmlvdXNQYWdlLCBzZXRQcmV2aW91c1BhZ2VdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIik7XHJcbiAgY29uc3QgcGFnZVR5cGUgPVxyXG4gICAgY3VycmVudExvY2F0aW9uWzFdID09PSBcImFkci1yZXBvcnRpbmdcIlxyXG4gICAgICA/IHsgbGluazogXCIvYWRyLXJlcG9ydGluZy9cIiwgbWFwUm91dGU6IEFEUnJlcG9ydGluZ19wb3J0YWxNYXAgfVxyXG4gICAgICA6IHtcclxuICAgICAgICAgIGxpbms6IFwiL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy9cIixcclxuICAgICAgICAgIG1hcFJvdXRlOiBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCxcclxuICAgICAgICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZm9yIChsZXQgcm91dGUgPSAwOyByb3V0ZSA8IHBhZ2VUeXBlLm1hcFJvdXRlLmxlbmd0aDsgcm91dGUrKykge1xyXG4gICAgICBpZiAocHJvcHMuY3VycmVudFJvdXRlID09PSBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZV0pIHtcclxuICAgICAgICBpZiAocm91dGUgPCBwYWdlVHlwZS5tYXBSb3V0ZS5sZW5ndGggLSAxICYmIHJvdXRlICE9IDApIHtcclxuICAgICAgICAgIHNldE5leHRQYWdlKFxyXG4gICAgICAgICAgICBwYWdlVHlwZS5saW5rICsgcGFnZVR5cGUubWFwUm91dGVbcm91dGUgKyAxXS5zcGxpdChcIlwiKS5qb2luKFwiL1wiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldFByZXZpb3VzUGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlIC0gMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZSA9PT0gcGFnZVR5cGUubWFwUm91dGUubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgc2V0TmV4dFBhZ2UocGFnZVR5cGUgKyBcInN1Ym1pdFwiKTtcclxuICAgICAgICAgIHNldFByZXZpb3VzUGFnZShcclxuICAgICAgICAgICAgcGFnZVR5cGUubGluayArIHBhZ2VUeXBlLm1hcFJvdXRlW3JvdXRlIC0gMV0uc3BsaXQoXCJcIikuam9pbihcIi9cIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyb3V0ZSA9PT0gMCkge1xyXG4gICAgICAgICAgc2V0TmV4dFBhZ2UoXHJcbiAgICAgICAgICAgIHBhZ2VUeXBlLmxpbmsgKyBwYWdlVHlwZS5tYXBSb3V0ZVtyb3V0ZSArIDFdLnNwbGl0KFwiXCIpLmpvaW4oXCIvXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0UHJldmlvdXNQYWdlKFwiL1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHctZnVsbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktZW5kXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgIDxMaW5rIHRvPXtwcmV2aW91c1BhZ2V9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LVsjRTg1OTBDXSBob3ZlcjpzaGFkb3cteGwgcC0yIHctMzIgYm9yZGVyIGJvcmRlci1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayB0bz17bmV4dFBhZ2V9PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1bI0U4NTkwQ10gdGV4dC13aGl0ZSBob3ZlcjpzaGFkb3cteGwgcC0yIHctMzJcIj5cclxuICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uUGFuZWw7XHJcbiIsICJjb25zdCBBRFJyZXBvcnRpbmdfcG9ydGFsTWFwID0gW1xyXG4gIFwiMVwiLFxyXG4gIFwiMlwiLFxyXG4gIFwiM1wiLFxyXG4gIFwiM2JcIixcclxuICBcIjNjXCIsXHJcbiAgXCIzZFwiLFxyXG4gIFwiM2VcIixcclxuICBcIjNmXCIsXHJcbiAgXCIzZjJcIixcclxuICBcIjNmM1wiLFxyXG4gIFwiM2Y0XCIsXHJcbiAgXCIzZjVcIixcclxuICBcIjNnXCIsXHJcbiAgXCIzaFwiLFxyXG4gIFwiM2lcIixcclxuICBcIjNqXCIsXHJcbiAgXCI0XCIsXHJcbl07XHJcblxyXG5jb25zdCBNZWRpY2FsRGV2aWNlUmVwb3J0aW5nX3BvcnRhbE1hcCA9IFtcclxuICBcIjFcIixcclxuICBcIjJcIixcclxuICBcIjNcIixcclxuICBcIjRcIixcclxuICBcIjRiXCIsXHJcbiAgXCI0Y1wiLFxyXG4gIFwiNGRcIixcclxuICBcIjVcIixcclxuICBcIjZcIixcclxuICBcIjdcIixcclxuICBcIjhcIixcclxuICBcIjlcIlxyXG5dO1xyXG5cclxuZXhwb3J0IHsgQURScmVwb3J0aW5nX3BvcnRhbE1hcCwgTWVkaWNhbERldmljZVJlcG9ydGluZ19wb3J0YWxNYXAgfTtcclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElucHV0LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xKCkge1xyXG4gIGNvbnN0IFtyZXBvcnRlclR5cGUsIHNldFJlcG9ydGVyVHlwZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwibWFudWZhY3R1cmVyXCIpO1xyXG4gIGNvbnN0IGNoYW5nZWRSZXBvcnRlclR5cGUgPSAoZTogYW55KSA9PiB7XHJcbiAgICBzZXRSZXBvcnRlclR5cGUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+UmVwb3J0ZXIgSW5mb3JtYXRpb248L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUeXBlIG9mIFJlcG9ydGVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VkUmVwb3J0ZXJUeXBlKGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e1wibWFudWZhY3R1cmVyXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgTWFudWZhY3R1cmVyXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1wiaW1wb3J0ZXJcIn0gY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgSW1wb3J0ZXJcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJkaXN0cmlidXRvclwifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIERpc3RyaWJ1dG9yXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9e1wicGF0aWVudHNcIn0gY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgUGF0aWVudHNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XCJoZWFsdGhjYXJlcHJvZmVzc2lvbmFsc1wifVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvNCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEhlYWx0aGNhcmUgUHJvZmVzc2lvbmFsXHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIklmIE90aGVyc1wiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkhhcyB0aGUgcmVwb3J0ZXIgaW5mb3JtZWQgdGhlIGluY2lkZW50IHRvIHRoZSBtYW51ZmFjdHVyZXI/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlcG9ydGVyVHlwZSA9PT0gXCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgRG9udCBLbm93XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJcyB0aGUgcmVwb3J0ZXIgYWxzbyBzdWJtaXR0aW5nIHRoZSByZXBvcnQgb24gYmVoYWxmIG9mIHRoZSBtYW51ZmFjdHVyZXI/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlcG9ydGVyVHlwZSA9PT0gXCJtYW51ZmFjdHVyZXJcIn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBZZXNcclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgTm9cclxuICAgICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgRG9udCBLbm93XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBob25lIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkVtYWlsIElEXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjJcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IFNpZGViYXIgZnJvbSBcIn4vY29tcG9uZW50cy9jb21tb24vc2lkZWJhclwiO1xyXG5cclxuLy8gaW1wb3J0aW5nIHR5cGVzXHJcbmltcG9ydCB7IExheW91dFByb3BzIH0gZnJvbSBcIn4vdHlwZXMvZ2VuZXJhbFwiO1xyXG5cclxuY29uc3QgRm9ybUxheW91dCA9ICh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LXNjcmVlbiBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB0LTggdGV4dC1bMzVweF0gdGV4dC1bIzZDNTY3Ql1cIj5cclxuICAgICAgICBNZWRpY2FsIERldmljZSBBRFIgUmVwb3J0aW5nXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIGdyaWQgZ3JpZC1jb2xzLTEyIGdhcC01IHB4LTE2IHB0LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTNcIj5cclxuICAgICAgICAgIDxTaWRlYmFyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05IHAtMlwiPntjaGlsZHJlbn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxheW91dDtcclxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IE9wdGlvbjEgZnJvbSBcIi4vc3ViZm9ybXMvb3B0aW9uMVwiO1xyXG5pbXBvcnQgT3B0aW9uMiBmcm9tIFwiLi9zdWJmb3Jtcy9vcHRpb24yXCI7XHJcbmltcG9ydCBPcHRpb24zIGZyb20gXCIuL3N1YmZvcm1zL29wdGlvbjNcIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U5KCkge1xyXG4gIGNvbnN0IFtvcHQxLCBzZXRPcHQxXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3B0Miwgc2V0T3B0Ml0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wdDMsIHNldE9wdDNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNoYWRvdy14bFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtOCBweS00IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkRldmljZSBDYXRlZ29yeTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiIGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIE1lZGljYWwgRGV2aWNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0Mih0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEluIFZpdHJvIERpYWdub3N0aWNzXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIHZhbHVlPXsyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRPcHQxKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0T3B0MihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIHNldE9wdDModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEVxdWlwbWVudC9NYWNoaW5lc1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge29wdDEgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiT3B0aW9uMVwiPlxyXG4gICAgICAgICAgPE9wdGlvbjEgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHtvcHQyICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk9wdGlvbjJcIj5cclxuICAgICAgICAgIDxPcHRpb24yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICB7b3B0MyAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJPcHRpb24zXCI+XHJcbiAgICAgICAgICA8T3B0aW9uMyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmFkaW8sIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBPcHRpb24xKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjFcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPk1lZGljYWwgRGV2aWNlPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgVGhlcmFwZXV0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgRGlhZ25vc3RpY1xyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9IGNsYXNzTmFtZT1cInctMS8zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBCb3Roe1wiIFwifVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiXCIgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbFwiIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW1wbGFudGFibGVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgTm9uLUltcGxhbnRhYmxlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgY2xhc3NOYW1lPVwidy1mdWxsXCIgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9IGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTaW5nbGUgVXNlIERldmljZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9IGNsYXNzTmFtZT1cInctMS80IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBSZXVzYWJsZSBkZXZpY2VcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgUmV1c2Ugb2YgbWFudWZhY3R1cmVkIG1hcmtlZCBzaW5nbGUgdXNlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBteC00IHB5LThcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PlBlcnNvbmFsIHVzZS9ob21lY2FyZSB1c2UgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE9wdGlvbjE7XHJcbiIsICJpbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5mdW5jdGlvbiBPcHRpb24yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBJbiBWaXRybyBEaWFnbm9zdGljc1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBteS0yIG14LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+S2l0czwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+Q29udHJvbCBNYXRlcmlhbHMgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5SZWFnZW50czwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3g+SVZEIEVsZWN0cm9uaWMgUmVhZGVyL0FuYWx5emVyPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveD5DYWxpYnJhdG9yczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94Pk90aGVyczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uMjtcclxuIiwgImltcG9ydCB7IFJhZGlvLCBDaGVja2JveCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5jb25zdCBvcHRpb24zID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbjNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc2hhZG93LXhsIHAtMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTE2IHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlxyXG4gICAgICAgICAgICBFcXVpcG1lbnQvTWFjaGluZXNcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIFRoZXJhcGV1dGljXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIERpYWdub3N0aWNcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfSBjbGFzc05hbWU9XCJ3LTEvMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgQm90aHtcIiBcIn1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIEludmFzaXZlXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0gY2xhc3NOYW1lPVwidy0xLzIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vbi1JbnZhc2l2ZVxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTQgcHktOFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3g+IEltYWdpbmcgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIG14LTRcIj5cclxuICAgICAgICAgICAgPENoZWNrYm94PiBPdGhlcnMgPC9DaGVja2JveD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3J0ZXIncyBDb21tZW50c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9wdGlvbjM7XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPk1hbnVmYWN0dXJlciBEZXRhaWxzPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIk5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezN9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI0XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIElucHV0LCBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNSgpIHtcclxuICBjb25zdCBbaXNTZXJpb3VzRXZlbnQsIHNldElzU2VyaW91c0V2ZW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbaXNEZWFkLCBzZXRJc0RlYWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCByYWRpb09wdGlvbnMxID0gW1xyXG4gICAgXCJIb3NwaXRhbCBQcmVtaXNlXCIsXHJcbiAgICBcIk1hbnVmYWN0dXJlciBQcmVtaXNlXCIsXHJcbiAgICBcIkhvbWVcIixcclxuICAgIFwiT3RoZXJzXCIsXHJcbiAgXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1xyXG4gICAgXCJIZWFsdGhjYXJlIHByb2Zlc3Npb25hbFwiLFxyXG4gICAgXCJQYXRpZW50XCIsXHJcbiAgICBcIlByb2JsZW0gbm90ZWQgYmVmb3JlIHVzZVwiLFxyXG4gICAgXCJPdGhlcnNcIixcclxuICBdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczMgPSBbXHJcbiAgICBcIlJldHVybmVkIHRvIHRoZSBjb21wYW55XCIsXHJcbiAgICBcIkltcGxhbnRlZCBpbiBwYXRpZW50XCIsXHJcbiAgICBcIldpdGhpbiB0aGUgZmFjaWxpdHlcIixcclxuICAgIFwiQXQgcGF0aWVudCBob21lXCIsXHJcbiAgICBcIkRlc3Ryb3llZFwiLFxyXG4gICAgXCJPdGhlcnNcIixcclxuICBdO1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9uczQgPSBbXCJZZXNcIiwgXCJOb1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnM1ID0gW1xyXG4gICAgXCJEZWF0aFwiLFxyXG4gICAgXCJMaWZlIFRocmVhdGVuaW5nXCIsXHJcbiAgICBcIkRpc2FiaWxpdHlcIixcclxuICAgIFwiSG9zcGl0YWxpemF0aW9uXCIsXHJcbiAgICBcIkNvbmdlbml0YWwgQW5vbWFseVwiLFxyXG4gICAgXCJBbnkgbWVkaWNhbCBldmVudFwiLFxyXG4gICAgXCJQZXJtYW5lbnQgSW1wYWlybWVudFwiLFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNlcmlvdXNFdmVudFN0YXRlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIlllc1wiKSB7XHJcbiAgICAgIHNldElzU2VyaW91c0V2ZW50KHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNTZXJpb3VzRXZlbnQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVNlcmlvdXNFdmVudFZhbHVlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnZhbHVlID09PSBcIkRlYXRoXCIpIHtcclxuICAgICAgc2V0SXNEZWFkKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0SXNEZWFkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5FdmVudCBEZXNjcmlwdGlvbjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgRXZlbnRcIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBJbXBsYW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkxvY2F0aW9uIG9mIGV2ZW50XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRldmljZSBPcGVyYXRvclwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEZXZpY2UgbG9jYXRpb25cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczN9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiByZXR1cm5cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RGF0ZVBpY2tlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiU2VyaW91cyBldmVudD9cIn1cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczR9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2VTZXJpb3VzRXZlbnRTdGF0ZShlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiUmVhc29uXCJ9IGlzUmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM1fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzU2VyaW91c0V2ZW50fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZVNlcmlvdXNFdmVudFZhbHVlKGUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiRGF0ZSBvZiBkZWF0aFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIGRpc2FibGVkPXshaXNEZWFkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiSXMgZGV2aWNlIGluIHVzZSBhZnRlciB0aGUgaW5jaWRlbnQ/XCJ9XHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnM0fVxyXG4gICAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIkRldGFpbGVkIGRlc2NyaXB0aW9uIG9mIHRoZSBpbmNpZGVudFwifVxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIycHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgICBGcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzaW1pbGFyIGFkdmVyc2UgZXZlbnRzIGluIEluZGlhXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJZZWFyXCJ9IGlzUmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHBpY2tlcj1cInllYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIk51bWJlciBvZiBzaW1pbGFyIGV2ZW50c1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUb3RhbCBudW1iZXIgc3VwbGllZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJGcmVxdWVuY3lcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzIycHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgICAgICBGcmVxdWVuY3kgb2Ygb2NjdXJyZW5jZSBvZiBzaW1pbGFyIGFkdmVyc2UgZXZlbnRzIGdsb2JhbGx5XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC01XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJZZWFyXCJ9IGlzUmVxdWlyZWQ9e3RydWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIHBpY2tlcj1cInllYXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIk51bWJlciBvZiBzaW1pbGFyIGV2ZW50c1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUb3RhbCBudW1iZXIgc3VwbGllZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJGcmVxdWVuY3lcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI1XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIFJhZGlvLCBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNigpIHtcclxuICBjb25zdCBbaXNSZWNvdmVyZWQsIHNldElzUmVjb3ZlcmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpO1xyXG4gIGNvbnN0IFtpc0RlYWQsIHNldElzRGVhZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGNoYW5nZURlYXRoRGF0YSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc0RlYWQodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRJc0RlYWQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVJlY292ZXJ5RGF0YSA9IChlOiBhbnkpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJZZXNcIikge1xyXG4gICAgICBzZXRJc1JlY292ZXJlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldElzUmVjb3ZlcmVkKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByYWRpb09wdGlvbnMxID0gW1wiTWFsZVwiLCBcIkZlbWFsZVwiLCBcIk90aGVyc1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UGF0aWVudCBJbmZvcm1hdGlvbjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIlBhdGllbnQgSG9zcGl0YWwgTnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiUGF0aWVudCBJbml0aWFsc1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTEgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBkZXNjcmlwdGlvbj17XCJBZ2VcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIldlaWdodFwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIlNleFwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczF9XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJPdGhlciByZWxldmFudCBoaXN0b3J5LCBpbmNsdWRpbmcgcHJlLWV4aXN0aW5nIG1lZGljYWwgY29uZGl0aW9uc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJIYXMgdGhlIHBhdGllbnQgcmVjb3ZlcmVkP1wifVxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zMn1cclxuICAgICAgICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVJlY292ZXJ5RGF0YShlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJEYXRlIG9mIHJlY292ZXJ5XCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgZGlzYWJsZWQ9e2lzUmVjb3ZlcmVkID09PSBmYWxzZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249e1wiSXMgdGhlIHBhdGllbnQgZGVhZD9cIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uczJ9XHJcbiAgICAgICAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VEZWF0aERhdGEoZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGRlc2NyaXB0aW9uPXtcIkRhdGUgb2YgZGVhdGhcIn0gaXNSZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgZGlzYWJsZWQ9e2lzRGVhZCA9PT0gZmFsc2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtcIk90aGVyIHBhdGllbnQgb3V0Y29tZXNcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCI2XCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgSGVhbHRoY2FyZSBGYWNpbGl0eSBEZXRhaWxzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTQgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiTmFtZVwifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gZGVzY3JpcHRpb249e1wiQWRkcmVzc1wifSBpc1JlcXVpcmVkPXt0cnVlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJDb250YWN0IE51bWJlciBvZiBQZXJzb24gYXQgdGhlIHNpdGUgb2YgZXZlbnRcIn1cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XCJUZWxlcGhvbmUgTnVtYmVyXCJ9XHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiN1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gSW1wb3J0IEZvcm0gTGF5b3V0XHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtM3BhZ2U4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkNhc3VhbHR5IEFzc2Vzc21lbnQ8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkludmVzdGlnYXRpb24gYWN0aW9uIHRha2VuXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJvb3QgY2F1c2Ugb2YgcHJvYmxlbVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXs0fSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjhcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIEltcG9ydCBGb3JtIExheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZ1wiO1xyXG5cclxuLy9pbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlOSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLThcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUHJvZHVjdCBPd25lcidzIEludmVzdGlnYXRpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJQcm9kdWN0IE93bmVycyBkZXZpY2UgcmlzayBhbmFseXNpcyByZXBvcnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJDb3JyZWN0aXZlIC8gcHJldmVudGl2ZSBhY3Rpb24gdGFrZW5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGV2aWNlIGhpc3RvcnkgcmV2aWV3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezR9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiOVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyLCBGb3JtLCBTZWxlY3QsIENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+SW1wb3J0ZXIgRGV0YWlsczwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwdC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiTGljZW5zZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiQWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXszfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiNGJcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgRm9ybSwgU2VsZWN0LCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0zcGFnZTRjKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkRpc3RyaWJ1dG9yIGRldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxpY2Vuc2UgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17M30gcGxhY2Vob2xkZXI9XCJcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRjXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9pbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmNvbnN0IHsgVGV4dEFyZWEgfSA9IElucHV0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTNwYWdlNGQoKSB7XHJcbiAgY29uc3QgW3JlZ3VsYXRlZEluSW5kaWEsIHNldFJlZ3VsYXRlZEluSW5kaWFdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCBbYXZhaWxhYmlsaXR5VmFsdWUsIHNldEF2YWlsYWJpbGl0eVZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgW3VzYWdlUGVyTWFudWZhY3R1cmVyLCBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBjaGFuZ2VTdGF0ZU9mUmFkaW8gPSAocmFkaW9JZGVudGlmaWVyOiBzdHJpbmcsIHJhZGlvVmFsdWU6IGFueSkgPT4ge1xyXG4gICAgaWYgKHJhZGlvSWRlbnRpZmllciA9PT0gXCIxXCIpIHtcclxuICAgICAgc2V0UmVndWxhdGVkSW5JbmRpYShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjJcIikge1xyXG4gICAgICBzZXRBdmFpbGFiaWxpdHlWYWx1ZShyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmFkaW9JZGVudGlmaWVyID09PSBcIjNcIikge1xyXG4gICAgICBzZXRVc2FnZVBlck1hbnVmYWN0dXJlcihyYWRpb1ZhbHVlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmFkaW9PcHRpb25zMSA9IFtcIlllc1wiLCBcIk5vXCIsIFwiRG9uJ3Qga25vd1wiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMyID0gW1wiQVwiLCBcIkJcIiwgXCJDXCIsIFwiRFwiXTtcclxuICBjb25zdCByYWRpb09wdGlvbnMzID0gW1wiWWVzXCIsIFwiTm9cIl07XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zNCA9IFtcclxuICAgIFwiRGVzdHJveWVkXCIsXHJcbiAgICBcIlN0aWxsIGluIHVzZVwiLFxyXG4gICAgXCJSZXR1cm5lZCB0byBtYW51ZmFjdHVyZXIgb3IgaW1wb3J0ZXJcIixcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5GdXJ0aGVyIEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXMgdGhlIGRldmljZSBub3RpZmllZC9yZWd1bGF0ZWQgaW4gSW5kaWE/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMxfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtyZWd1bGF0ZWRJbkluZGlhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY2hhbmdlU3RhdGVPZlJhZGlvKFwiMVwiLCBlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGV2aWNlIFJpc2sgQ2xhc3NpZmljYXRpb24gYXMgcGVyIEluZGlhIE1EUiAyMDE3XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnMyfVxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMaWNlbnNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkNhdGFsb2d1ZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTW9kZWwgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJCYXRjaCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIlNlcmlhbCBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU29mdHdhcmUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiQWNjZXNzb3JpZXMvQXNzb2NpYXRlZCBEZXZpY2VzXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiR01ETiBDb2RlICZhbXA7IEdNRE4gVGVybVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJVREkgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkluc3RhbGxhdGlvbiBEYXRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJFeHBpcmF0aW9uIERhdGVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkxhc3QgQ2FsaWJyYXRpb25cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPERhdGVQaWNrZXIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDxEYXRlUGlja2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZ2Ugb2YgZGV2aWNlIGZyb20gZGF0ZSBvZiBtYW51ZmFjdHVyaW5nXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSG93IGxvbmcgd2FzIGRldmljZSBpbiB1c2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBdmFpbGFiaWxpdHkgb2YgZGV2aWNlIGZvciBldmFsdWF0aW9uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zM31cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmFkaW9PcHRpb25zM1swXX1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2F2YWlsYWJpbGl0eVZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VTdGF0ZU9mUmFkaW8oXCIyXCIsIGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2hhdCBpcyB0aGUgc3RhdHVzIG9mIHRoZSBkZXZpY2U/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zNH1cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2F2YWlsYWJpbGl0eVZhbHVlID09PSBcIk5vXCJ9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIklzIHRoZSB1c2FnZSBvZiBkZXZpY2UgYXMgcGVyIG1hbnVmYWN0dXJlclx1MjAxOXMgY2xhaW1zL2luc3RydWN0aW9ucyBmb3IgdXNlL3VzZXIgbWFudWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17cmFkaW9PcHRpb25zM31cclxuICAgICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzYWdlUGVyTWFudWZhY3R1cmVyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBjaGFuZ2VTdGF0ZU9mUmFkaW8oXCIzXCIsIGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU3BlY2lmeSB1c2FnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNhZ2VQZXJNYW51ZmFjdHVyZXIgPT09IFwiTm9cIn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlZ3VsYXRvciAvIFJlZ3VsYXRvcnkgc3RhdHVzIGluIGNvdW50cnkgb2Ygb3JpZ2luXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtyZWd1bGF0ZWRJbkluZGlhID09PSBcIlllc1wifVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRkXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZjEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+TmFyYW5qb1x1MjAxOXMgU2NhbGU8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBcmUgdGhlcmUgcHJldmlvdXMgY29uY2x1c2lvbiByZXBvcnRzIG9uIHRoaXMgcmVhY3Rpb24/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFyZSB0aGVyZSBwcmV2aW91cyBjb25jbHVzaW9uIHJlcG9ydHMgb24gdGhpcyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGlkIHRoZSBhZHZlcnNlIGV2ZW50IGFwcGVhciBhZnRlciB0aGUgc3VzcGVjdCBkcnVnIHdhcyBhZG1pbmlzdGVyZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgQVIgaW1wcm92ZSB3aGVuIHRoZSBkcnVnIHdhcyBkaXNjb250aW51ZWQgb3IgYSBzcGVjaWZpYyBhbnRhZ29uaXN0IHdhcyBhZG1pbmlzdGVyZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgQVIgcmVhcHBlYXIgd2hlbiBkcnVnIHdhcyByZS1hZG1pbmlzdGVyZWQ/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFyZSB0aGVyZSBhbHRlcm5hdGUgY2F1c2VzIFtvdGhlciB0aGFuIHRoZSBkcnVnXSB0aGF0IGNvdWxkIHNvbGVseSBoYXZlIGNhdXNlZCB0aGUgcmVhY3Rpb24/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRpZCB0aGUgcmVhY3Rpb24gcmVhcHBlYXIgd2hlbiBhIHBsYWNlYm8gd2FzIGdpdmVuP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGRydWcgZGV0ZWN0ZWQgaW4gdGhlIGJsb29kIFtvciBvdGhlciBmbHVpZHNdIGluIGEgY29uY2VudHJhdGlvbiBrbm93biB0byBiZSB0b3hpYz9cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkRvbid0IGtub3c8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIHRoZSByZWFjdGlvbiBtb3JlIHNldmVyZSB3aGVuIHRoZSBkb3NlIHdhcyBpbmNyZWFzZWQgb3IgbGVzcyBzZXZlcmUgd2hlbiB0aGUgZG9zZSB3YXMgZGVjcmVhc2VkP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEaWQgdGhlIHBhdGllbnQgaGF2ZSBhIHNpbWlsYXIgcmVhY3Rpb24gdG8gdGhlIHNhbWUgb3Igc2ltaWxhciBkcnVncyBpbiBhbnkgcHJldmlvdXMgZXhwb3N1cmU/XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Eb24ndCBrbm93PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgYWR2ZXJzZSBldmVudCBjb25maXJtZWQgYnkgb2JqZWN0aXZlIGV2aWRlbmNlP1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17Mn0+RG9uJ3Qga25vdzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgey8qIGNhbGN1bGF0ZWQgc2NvcmUgZm9yIHRoZSBBRFIgaXMgZGlzcGxheWVkIGhlcmUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLXgtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LVsjNkM1NjdCXSBwLTAgbS0wXCI+UHJvYmFibGUgQURSPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bIzZDNTY3Ql0gcC0wIG0tMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC00eGxcIj4wNzwvc3Bhbj4vMTBcclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZm9udC1ib2xkIG0tMCBwLTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm0tMCBwLTBcIj5SZXN1bHQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8RmlIZWxwQ2lyY2xlIGNsYXNzTmFtZT1cIm10LTEgbWwtMVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm15LWF1dG8gZm9udC1ib2xkXCI+U2NvcmU8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuaW1wb3J0IHsgSW5wdXQsIERhdGVQaWNrZXIsIEZvcm0sIFNlbGVjdCwgQ2hlY2tib3ggfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5cclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5QYXRpZW50IEluZm9ybWF0aW9uPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC00IG1pbi13LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGF0aWVudCBJbml0aWFsc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIEJpcnRoXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHItNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBZ2Ugb2Ygb25zZXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkdlbmRlclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8U2VsZWN0IGFsbG93Q2xlYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NYWxlPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5GZW1hbGU8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPk90aGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJXZWlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IGFkZG9uQWZ0ZXI9e1wibWdzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBwci00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJQYXRpZW50IElEXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIklQL09QXCIgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHItNFwiPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiVW5pdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCB3LWZ1bGwgcHgtNFwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVhc29uIGZvciB0YWtpbmcgbWVkaWNhdGlvbi92YWNjaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBweC00XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJNZWRpY2luZXMvdmFjY2luZXMgYWR2aXNlZCBieVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94Lkdyb3VwIGNsYXNzTmFtZT1cInctZnVsbCBncmlkIGdyaWQtY29scy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiQVwiPkRvY3RvcjwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJCXCI+UGhhcm1hY2lzdDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJDXCI+RnJpZW5kczwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9XCJEXCI+UmVsYXRpdmVzPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiRVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxmIChwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPVwiRlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxmIChubyBwYXN0IGRpc2Vhc2UgZXhwZXJpZW5jZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3guR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIktub3duIEFsbGVyZ2llc1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsIHB4LTRcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNvY2lhbCBIaXN0b3J5XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIxXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBJbXBvcnQgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBJbnB1dCwgRGF0ZVBpY2tlciwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTQgdGV4dC0zeGxcIj5cclxuICAgICAgICAgIHsvKiBDaGFuZ2UgdGhlIG5hbWUgb2YgdGhlIGZvcm0gYmFzZWQgb24gdGhlIGZvcm0gKi99XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1bI0U4NTkwQ11cIj5TdXNwZWN0ZWQgQWR2ZXJzZSBSZWFjdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzIgcHgtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEYXRlIG9mIHJlYWN0aW9uIHN0YXJ0ZWRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIHByLTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkRhdGUgb2YgcmVjb3ZlcnlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbCBweC00XCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJEZXNjcmliZSByZWFjdGlvbiBvciBwcm9ibGVtXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IElucHV0LCBGb3JtLCBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTMoKSB7XHJcbiAgY29uc3Qgb25Gb3JtU3VibWl0ID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtM3hsXCI+XHJcbiAgICAgICAgICB7LyogQ2hhbmdlIHRoZSBuYW1lIG9mIHRoZSBmb3JtIGJhc2VkIG9uIHRoZSBmb3JtICovfVxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtWyNFODU5MENdXCI+TWVkaWNhdGlvbjwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uRm9ybVN1Ym1pdH0+XHJcbiAgICAgICAgICA8U3ViZm9ybSAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3ViZm9ybSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi01XCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIk5hbWUgKEJyYW5kL0dlbmVyaWMpXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dCByZXF1aXJlZD17dHJ1ZX0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNSBwYi01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJNYW51ZmFjdHVyZXJcIiAvPlxyXG4gICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJCYXRjaCBOby4vIExvdCBOby5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC01IHBiLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkV4cC4gRGF0ZVwiIC8+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEb3NlIHVzZWRcIiAvPlxyXG4gICAgICAgICAgPElucHV0IHR5cGU9e1wibnVtYmVyXCJ9IHN1ZmZpeD1cImtnc1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJSb3V0ZSB1c2VkXCIgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHBiLTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIklQL09QXCIgLz5cclxuICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiVW5pdFwiIC8+XHJcbiAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi01XCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJGcmVxdWVuY3kgKE9ELCBCRCwgZXRjLilcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPElucHV0IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcGItNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0YXJ0ZWRcIiAvPlxyXG4gICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRhdGUgc3RvcHBlZFwiIC8+XHJcbiAgICAgICAgICA8RGF0ZVBpY2tlciBjbGFzc05hbWU9XCJ3LWZ1bGxcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBiLTVcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJJbmRpY2F0aW9uXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy0xMDBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHAtMiB3LTMyIGJvcmRlciBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LVsjNkM1NjdCXSBib3JkZXItWyM2QzU2N0JdXCI+XHJcbiAgICAgICAgICBTYXZlXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSB0ZXh0LVsjNkM1NjdCXSBwLTIgdy0zMiBib3JkZXIgYm9yZGVyLVsjNkM1NjdCXSBob3ZlcjpiZy1bI0U4NTkwQ10gaG92ZXI6dGV4dC13aGl0ZSBob3Zlcjpib3JkZXItWyNFODU5MENdXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgbW9yZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59XHJcbiIsICIvLyBJbXBvcnQgRm9ybSBMYXlvdXRcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBJbXBvcnQgQW50IERlc2lnblxyXG5pbXBvcnQgeyBJbnB1dCwgUmFkaW8sIERhdGVQaWNrZXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFRleHRBcmVhIH0gPSBJbnB1dDtcclxuXHJcbi8vSW1wb3J0IEltYWdlc1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCB0ZXh0LTN4bFwiPlxyXG4gICAgICAgICAgey8qIENoYW5nZSB0aGUgbmFtZSBvZiB0aGUgZm9ybSBiYXNlZCBvbiB0aGUgZm9ybSAqL31cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPlJlcG9ydGVyIERldGFpbHM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwYi04XCI+XHJcbiAgICAgICAgICB7LyogRmlyc3QgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZVwiIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogU2Vjb25kICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC01IHB0LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiSUQgTnVtYmVyXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlBpblwiIC8+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogVGhpcmQgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTUgcHQtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXt0cnVlfSBkZXNjcmlwdGlvbj1cIkVtYWlsIElEXCIgLz5cclxuICAgICAgICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiVGVsLiBOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIEZvdXJ0aCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJQcm9mLiBBZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBGaWZ0aCAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0xIHRleHQtWzE2cHhdXCI+T2NjdXBhdGlvbjwvcD5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIG5hbWU9XCJvY2N1cGF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXsxfT5QaHlzaWNpYW48L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT17Mn0+RGVudGlzdDwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXszfT5OdXJzZTwvUmFkaW8+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXs0fT5QaGFybWFjaXN0PC9SYWRpbz5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBwdC0xXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvIHZhbHVlPXs1fT5PdGhlcnM8L1JhZGlvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3VmZml4PXs8RmlIZWxwQ2lyY2xlIC8+fSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01XCI+XHJcbiAgICAgICAgICAgIHsvKiBTaXh0aCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkRlcGFydG1lbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogU2V2ZW50aCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRGF0ZSBvZiB0aGlzIHJlcG9ydFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwidy1mdWxsXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiBFaWdodGggKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiUmVmZXJlbmNlc1wiIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogTmludGggKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVwb3J0ZXIncyBjb21tZW50c1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjRcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IEZpSGVscENpcmNsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSwgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IFBhbmVsIH0gPSBDb2xsYXBzZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmMigpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJDZXJ0YWluXCIsIHZhbHVlOiBcImNlcnRhaW5cIiB9LFxyXG4gICAgeyBsYWJlbDogXCJQcm9iYWJseSAvIExpa2VseVwiLCB2YWx1ZTogXCJwcm9iYWJseS9saWtlbHlcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJQb3NzaWJsZVwiLCB2YWx1ZTogXCJwb3NzaWJsZVwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIlVubGlrZWx5XCIsIHZhbHVlOiBcInVubGlrZWx5XCIgfSxcclxuICAgIHsgbGFiZWw6IFwiQ29uZGl0aW9uYWwgLyBVbmNsYXNzaWZpZWRcIiwgdmFsdWU6IFwiY29uZGl0aW9uYWwvdW5jbGFzc2lmaWVkXCIgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiVW4tYXNzZXNzYWJsZSAvIFVuLWNsYXNzaWZpYWJsZVwiLFxyXG4gICAgICB2YWx1ZTogXCJ1bi1hc3Nlc3NhYmxlL3VuLWNsYXNzaWZpYWJsZVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFdITyBQcm9iYWJpbGl0eSBTY2FsZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTQgbWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cFxyXG4gICAgICAgICAgICAgIG9wdGlvblR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSBtYXgtdy1maXQgbXgtYXV0byBtdC0xMCBweC01IHB5LTEgYm9yZGVyLTIgZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LVsjRTg1OTBDXVwiPkFzc2VzbWVudCBjcml0ZXJpYTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1iLTEgbWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgPEZpSGVscENpcmNsZSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IG15LTRcIj5cclxuICAgICAgICAgICAgICA8Q29sbGFwc2UgZGVmYXVsdEFjdGl2ZUtleT17W1wiMVwiXX0+XHJcbiAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPFBhbmVsIGhlYWRlcj17b3B0aW9uLmxhYmVsfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICBDb21tb2RpIG5vbiB2aXRhZSByYXRpb25lIHF1aXNxdWFtIGFsaXF1aWQgZXN0IG5hdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWNlcmUgaGFydW0gZXJyb3IgY29uc2VjdGV0dXIgaW52ZW50b3JlLCBkb2xvcnVtIHF1aXNcclxuICAgICAgICAgICAgICAgICAgICAgIGFzcGVyaW9yZXMgaXVyZSBxdW8gZWEhIFVsbGFtLCBibGFuZGl0aWlzIGV4ZXJjaXRhdGlvbmVtLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmMlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgUmFkaW8sIFByb2dyZXNzIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmMygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIEhhcnR3aWcncyBTZXZlcml0eSBBc3Nlc3NtZW50IFNjYWxlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5MZXZlbCAxPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+TGV2ZWwgMjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9PkxldmVsIDM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXszfT5MZXZlbCA0PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17NH0+TGV2ZWwgNTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezV9PkxldmVsIDY8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXs2fT5MZXZlbCA3PC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvMyBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgICAgcGVyY2VudD17MzB9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cz17XCJub3JtYWxcIn1cclxuICAgICAgICAgICAgICAgICAgc2hvd0luZm89e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICBzdHJva2VDb2xvcj17XCIjRTg1OTBDXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHRyYWlsQ29sb3I9e1wiI0U1RTVFNVwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj57XCJNaWxkIExldmVsXCJ9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1bI0U4NTkwQ11cIj5Bc3Nlc3NtZW50IGNyaXRlcmlhPC9oNT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtbC0yIG1iLTFcIj5cclxuICAgICAgICAgICAgICAgICAgPEZpSGVscENpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIG5vIGNoYW5nZSBpbiB0aGUgdHJlYXRtZW50IHdpdGggdGhlIHN1c3BlY3RlZFxyXG4gICAgICAgICAgICAgICAgZHJ1Zy5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGUgQURSIHJlcXVpcmVzIHRoYXQgdGhlIHN1c3BlY3RlZCBkcnVnIGJlIHdpdGhoZWxkLFxyXG4gICAgICAgICAgICAgICAgZGlzY29udGludWVkIG9yIG90aGVyd2lzZSBjaGFuZ2VkLiBObyBhbnRpZG90ZSBvciBvdGhlclxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50IGlzIHJlcXVpcmVkLCBhbmQgdGhlcmUgaXMgbm8gaW5jcmVhc2UgaW4gbGVuZ3RoIG9mXHJcbiAgICAgICAgICAgICAgICBzdGF5XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgVGhlIEFEUiByZXF1aXJlcyBubyBjaGFuZ2UgaW4gdGhlIHRyZWF0bWVudCB3aXRoIHRoZSBzdXNwZWN0ZWRcclxuICAgICAgICAgICAgICAgIGRydWcuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZjNcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25QYW5lbCBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL05hdmlnYXRpb25QYW5lbFwiO1xyXG5pbXBvcnQgSW5wdXREZXNjcmlwdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL2Zvcm1zL2lucHV0RGVzY3JpcHRpb25cIjtcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2Y0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgTW9kaWZpZWQgU2NodW1vY2sgYW5kIFRob3JudG9uIHNjYWxlXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGVyZSBhIGhpc3Rvcnkgb2YgYWxsZXJneSBvciBwcmV2aW91cyByZWFjdGlvbnMgdG8gdGhlIGRydWc/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGJ1dHRvblN0eWxlPVwic29saWRcIj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXswfT5ZZXM8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5ObzwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC00XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dERlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgaXNSZXF1aXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXYXMgdGhlIGRydWcgaW52b2x2ZWQgaW5hcHByb3ByaWF0ZSBmb3IgdGhlIHBhdGllbnRcdTIwMTlzIGNsaW5pY2FsIGNvbmRpdGlvbj9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGUgZG9zZSwgcm91dGUgb3IgZnJlcXVlbmN5IG9mIGFkbWluaXN0cmF0aW9uIGluYXBwcm9wcmlhdGUgZm9yIHRoZSBwYXRpZW50XHUyMDE5cyBhZ2UsIHdlaWdodCBvciBkaXNlYXNlIHN0YXRlP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIGEgdG94aWMgc2VydW0gZHJ1ZyBjb25jZW50cmF0aW9uIChvciBsYWJvcmF0b3J5IG1vbml0b3JpbmcgdGVzdCkgZG9jdW1lbnRlZD9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyB0aGVyZSBhIGtub3duIHRyZWF0bWVudCBmb3IgdGhlIGFkdmVyc2UgZHJ1ZyByZWFjdGlvbj9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlllczwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezF9Pk5vPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldhcyByZXF1aXJlZCB0aGVyYXBldXRpYyBkcnVnIG1vbml0b3Jpbmcgb3Igb3RoZXIgbmVjZXNzYXJ5IGxhYiB0ZXN0cyBub3QgcGVyZm9ybWVkP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2FzIGEgZHJ1ZyBpbnRlcmFjdGlvbiBpbnZvbHZlZCBpbiB0aGUgQURSP1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MH0+WWVzPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm88L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNlwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBtLTAgZm9udC1ib2xkXCI+RmluYWwgUmVzdWx0PC9wPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkRlZmluaXRlbHkgcHJldmVudGFibGU8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsxfT5Qcm9iYWJseSBwcmV2ZW50YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezJ9Pk5vdCBwcmV2ZW50YWJsZTwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmNFwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IFJhZGlvLCBDaGVja2JveCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNmNSgpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgeyBsYWJlbDogXCJBZ2VcIiwgdmFsdWU6IFwiYWdlXCIgfSxcclxuICAgIHsgbGFiZWw6IFwiR2VuZGVyXCIsIHZhbHVlOiBcImdlbmRlclwiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkdlbmV0aWNcIiwgdmFsdWU6IFwiZ2VuZXRpY1wiIH0sXHJcbiAgICB7IGxhYmVsOiBcIkludGVyLWN1cnJlbnQgZGlzZWFzZVwiLCB2YWx1ZTogXCJpbnRlci1jdXJyZW50IGRpc2Vhc2VcIiB9LFxyXG4gICAgeyBsYWJlbDogXCJNdWx0aXBsZSBEcnVnIFRoZXJhcHlcIiwgdmFsdWU6IFwibXVsdGlwbGUgZHJ1ZyB0aGVyYXB5XCIgfSxcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC04IHB5LTQgcGItOFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UHJlZGljdGFiaWxpdHk8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNCBtaW4tdy1mdWxsIHB0LTRcIj5cclxuICAgICAgICAgICAgPFJhZGlvLkdyb3VwIGRlZmF1bHRWYWx1ZT17MH0gYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PlByZWRpY3RhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+Tm90IHByZWRpY3RhYmxlPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNCBteS00IHRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+XHJcbiAgICAgICAgICAgIFByZWRpc3Bvc2luZyBmYWN0b3JzXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtNFwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17b3B0aW9uc30+PC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHB0LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCB2YWx1ZT1cIm90aGVyXCI+T3RoZXI8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNmNVwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vL2ltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkFjdGlvbiBUYWtlbjwvZGl2PlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzYlwiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgUmFkaW9Hcm91cERydWdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJhZGlvT3B0aW9ucyA9IFtcclxuICAgIFwiRHJ1ZyB3aXRoZHJhd25cIixcclxuICAgIFwiRG9zZSBpbmNyZWFzZWRcIixcclxuICAgIFwiRG9zZSByZWR1Y2VkXCIsXHJcbiAgICBcIkRvc2Ugbm90IGNoYW5nZWRcIixcclxuICAgIFwiTm90IGFwcGxpY2FibGVcIixcclxuICAgIFwiVW5rbm93blwiLFxyXG4gIF07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTJcIj5cclxuICAgICAgey8qIE1ha2UgZGVzY3JpcHRpb24gZHluYW1pYyAqL31cclxuICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dHNcclxuaW1wb3J0IEZvcm1MYXlvdXQgZnJvbSBcIn4vbGF5b3V0cy9mb3Jtcy9hZHItcmVwb3J0aW5nXCI7XHJcblxyXG4vLyBpbXBvcnRpbmcgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBSYWRpbyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzYSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPkRlY2hhbGxlbmdlPC9kaXY+XHJcbiAgICAgICAgICA8UmFkaW9Hcm91cERydWdzIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2aWdhdGlvblBhbmVsIGN1cnJlbnRSb3V0ZT1cIjNjXCIgLz5cclxuICAgIDwvRm9ybUxheW91dD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBSYWRpb0dyb3VwRHJ1Z3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgcmFkaW9PcHRpb25zID0gW1xyXG4gICAgXCJObyBkZWNoYWxsZW5nZVwiLFxyXG4gICAgXCJEZWZpbml0ZSBJbXByb3ZlbWVudFwiLFxyXG4gICAgXCJObyBJbXByb3ZlbWVudFwiLFxyXG4gICAgXCJVbmtub3duXCIsXHJcbiAgXTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICB7LyogTWFrZSBkZXNjcmlwdGlvbiBkeW5hbWljICovfVxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEcnVnIDFcIiAvPlxyXG4gICAgICA8UmFkaW8uR3JvdXBcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGJ1dHRvblN0eWxlPVwic29saWRcIlxyXG4gICAgICAgIG9wdGlvbnM9e3JhZGlvT3B0aW9uc31cclxuICAgICAgICBvcHRpb25UeXBlPVwiYnV0dG9uXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+UmVjaGFsbGVuZ2U8L2Rpdj5cclxuICAgICAgICAgIDxSYWRpb0dyb3VwRHJ1Z3MgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2RcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIHJlY2hhbGxlbmdlXCIsXHJcbiAgICBcIlJlY3VycmFuY2Ugb2Ygc3ltcHRvbXNcIixcclxuICAgIFwiTm8gb2NjdXJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuXHJcbi8vIGltcG9ydGluZyBpY29uc1xyXG5pbXBvcnQgeyBGaUhlbHBDaXJjbGUsIEZpUGx1cywgRmlYIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XHJcblxyXG5pbXBvcnQgeyBSYWRpbywgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybTFwYWdlM2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgUmVhY3Rpb24gUmVhcHBlYXJlZCBBZnRlciBSZS1pbnRyb2R1Y3Rpb25cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFJhZGlvR3JvdXBEcnVncyAvPlxyXG4gICAgICAgICAgey8qIFNlY3Rpb24gdG8gYWRkIGRydWcgaW5mb3JtYXRpb24gKi99XHJcbiAgICAgICAgICA8QWRkRHJ1Z3NCb3ggLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2VcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFJhZGlvR3JvdXBEcnVncyA9ICgpID0+IHtcclxuICBjb25zdCByYWRpb09wdGlvbnMgPSBbXHJcbiAgICBcIk5vIHJlY2hhbGxlbmdlXCIsXHJcbiAgICBcIlJlY3VycmFuY2Ugb2Ygc3ltcHRvbXNcIixcclxuICAgIFwiTm8gb2NjdXJhbmNlIG9mIHN5bXB0b21zXCIsXHJcbiAgICBcIlVua25vd25cIixcclxuICBdO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0yXCI+XHJcbiAgICAgIHsvKiBNYWtlIGRlc2NyaXB0aW9uIGR5bmFtaWMgKi99XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiRHJ1ZyAxXCIgLz5cclxuICAgICAgPFJhZGlvLkdyb3VwXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBidXR0b25TdHlsZT1cInNvbGlkXCJcclxuICAgICAgICBvcHRpb25zPXtyYWRpb09wdGlvbnN9XHJcbiAgICAgICAgb3B0aW9uVHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtMSBwci03IG15LWF1dG9cIj5Eb3NlPC9wPlxyXG4gICAgICAgIDxJbnB1dCBzdWZmaXg9ezxGaUhlbHBDaXJjbGUgLz59IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEFkZERydWdzQm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkcnVnc0FkZGVkLCBzZXREcnVnc0FkZGVkXSA9IHVzZVN0YXRlPHJlYWRvbmx5IFN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChlOiBhbnkpID0+IHtcclxuICAgIHNldElucHV0VmFsdWUoZS50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tBZGREcnVnID0gKGU6IGFueSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RHJ1Z3NBZGRlZChbLi4uZHJ1Z3NBZGRlZCwgaW5wdXRWYWx1ZV0pO1xyXG4gICAgc2V0SW5wdXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsaWNrUmVtb3ZlRHJ1ZyA9IChkcnVnOiBTdHJpbmcpID0+IHtcclxuICAgIHNldERydWdzQWRkZWQoZHJ1Z3NBZGRlZC5maWx0ZXIoKGQpID0+IGQgIT09IGRydWcpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMTZcIj5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xMiBnYXAtMSBnYXAteS0zXCJcclxuICAgICAgICBvblN1Ym1pdD17b25DbGlja0FkZERydWd9XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTExXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIGEgZHJ1Z1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xIGJnLVsjNkM1NjdCXSB0ZXh0LXdoaXRlIHAtMiBib3JkZXIgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1bIzZDNTY3Ql0gYm9yZGVyLVsjNkM1NjdCXVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEZpUGx1cyBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIGdhcC0xIHB0LTJcIj5cclxuICAgICAgICB7ZHJ1Z3NBZGRlZC5tYXAoKGRydWc6IFN0cmluZykgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIGNvbC1zcGFuLTExIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHB4LTUgcHktMVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJteS1hdXRvXCI+e2RydWd9PC9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm15LWF1dG9cIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrUmVtb3ZlRHJ1ZyhkcnVnKX0+XHJcbiAgICAgICAgICAgICAgPEZpWCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsICIvLyBpbXBvcnRpbmcgbGF5b3V0c1xyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gXCJhbnRkL2xpYi9pbnB1dC9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzZygpIHtcclxuICBjb25zdCBvcHRpb25zID0gW1wiU3BlY2lmaWNcIiwgXCJTeW1wdG9tYXRpY1wiLCBcIk5vbmVcIl07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICB7LyogQW55dGhpbmcgYmV0d2VlbiB0aGUgPEZvcm1MYXlvdXQ+IHRhZyBjYW4gYmUgY2hhbmdlZCAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXJcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyNHB4XSB0ZXh0LVsjRTg1OTBDXVwiPlRyZWF0bWVudCBHaXZlbjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtMlwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3guR3JvdXAgb3B0aW9ucz17b3B0aW9uc30+PC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3cteGwgcm91bmRlZC1tZCB3LWZ1bGwgcC0xMCBib3JkZXIgbXQtNVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTAgcHktMFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSBteS0wIHB5LTBcIj5UcmVhdG1lbnQgRGV0YWlscyAoaWYgYW55KTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8VGV4dEFyZWEgcm93cz17NH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5hdmlnYXRpb25QYW5lbCBjdXJyZW50Um91dGU9XCIzZ1wiIC8+XHJcbiAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iLCAiLy8gaW1wb3J0aW5nIGxheW91dFxyXG5pbXBvcnQgRm9ybUxheW91dCBmcm9tIFwifi9sYXlvdXRzL2Zvcm1zL2Fkci1yZXBvcnRpbmdcIjtcclxuXHJcbi8vIGltcG9ydGluZyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dERlc2NyaXB0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvaW5wdXREZXNjcmlwdGlvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcbmltcG9ydCB7IElucHV0LCBEYXRlUGlja2VyIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0xcGFnZTNoKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUxheW91dD5cclxuICAgICAgey8qIEFueXRoaW5nIGJldHdlZW4gdGhlIDxGb3JtTGF5b3V0PiB0YWcgY2FuIGJlIGNoYW5nZWQgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbWQgdy1mdWxsIHAtMTAgYm9yZGVyXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktMCBweS0wXCI+Q29uY29taXRhbnQgbWVkaWNhbCBwcm9kdWN0PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICBJbmNsdWRpbmcgc2VsZi1tZWRpY2F0aW9uIGFuZCBoZXJiYWwgcmVtZWRpZXMgd2l0aCB0aGVyYXB5IGRhdGVzXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPFN1YmZvcm0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2hcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IFN1YmZvcm0gPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXctZnVsbCBwdC00XCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e3RydWV9IGRlc2NyaXB0aW9uPVwiTmFtZSAoYnJhbmQvZ2VuZXJpYylcIiAvPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17ZmFsc2V9IGRlc2NyaXB0aW9uPVwiRG9zZSBVc2VkXCIgLz5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIlJvdXRlIFVzZWRcIiAvPlxyXG4gICAgICAgIDxJbnB1dCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHctZnVsbFwiPlxyXG4gICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJGcmVxdWVuY3kgKE9ELCBCRClcIiAvPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdhcC01IHB0LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgPElucHV0RGVzY3JpcHRpb24gaXNSZXF1aXJlZD17dHJ1ZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0YXJ0ZWRcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj5cclxuICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJEYXRlIHN0b3BwZWRcIiAvPlxyXG4gICAgICAgIDxEYXRlUGlja2VyIGNsYXNzTmFtZT1cInctZnVsbFwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgdy1mdWxsXCI+XHJcbiAgICAgIDxJbnB1dERlc2NyaXB0aW9uIGlzUmVxdWlyZWQ9e2ZhbHNlfSBkZXNjcmlwdGlvbj1cIkluZGljYXRpb25cIiAvPlxyXG4gICAgICA8SW5wdXQgLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LTEwMCBwdC01XCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctWyM2QzU2N0JdIHRleHQtd2hpdGUgcC0yIHctMzIgYm9yZGVyIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtWyM2QzU2N0JdIGJvcmRlci1bIzZDNTY3Ql1cIj5cclxuICAgICAgICBTYXZlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1bIzZDNTY3Ql0gcC0yIHctMzIgYm9yZGVyIGJvcmRlci1bIzZDNTY3Ql0gaG92ZXI6YmctWyNFODU5MENdIGhvdmVyOnRleHQtd2hpdGUgaG92ZXI6Ym9yZGVyLVsjRTg1OTBDXVwiXHJcbiAgICAgID5cclxuICAgICAgICBBZGQgbW9yZVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG4iLCAiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0RGVzY3JpcHRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9pbnB1dERlc2NyaXB0aW9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uUGFuZWwgZnJvbSBcIn4vY29tcG9uZW50cy9mb3Jtcy9OYXZpZ2F0aW9uUGFuZWxcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIERhdGVQaWNrZXIsIFN3aXRjaCwgQ2hlY2tib3gsIFJhZGlvIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaSgpIHtcclxuICBjb25zdCBbc2VyaW91c1JlYWN0aW9uLCBzZXRTZXJpb3VzUmVhY3Rpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IGNoYW5nZVNlcmlvdXNuZXNzID0gKGNoZWNrZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgIHNldFNlcmlvdXNSZWFjdGlvbihjaGVja2VkKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gdGV4dC1bI0U4NTkwQ11cIj5BTUMvTkNDIFNlY3Rpb248L2Rpdj5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTQgZ3JpZCBncmlkLWNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgY29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByLTNcIj5Ob3QgQXBwbGljYWJsZTwvcD5cclxuICAgICAgICAgICAgICA8U3dpdGNoIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtM1wiPkFwcGxpY2FibGU8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkFNQyBSZXBvcnQgTm8uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEyIHB5LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldvcmxkd2lkZSBVbmlxdWUgTm8uXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi05XCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTRcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlJlbGV2YW50IHRlc3RzLyBsYWJvcmF0b3J5IGRhdGEgd2l0aCBkYXRlc1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0QXJlYSByb3dzPXsyfSBwbGFjZWhvbGRlcj1cIlwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgIGlzUmVxdWlyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUmVsZXZhbnQgbWVkaWNhbC8gbWVkaWNhdGlvbiBoaXN0b3J5IChlLmcuIGFsbGVyZ2llcywgcmFjZSwgXHJcbiAgICAgICAgICAgICAgICBwcmVnbmFuY3ksIHNtb2tpbmcsIGFsY29ob2wgdXNlLCBoZXBhdGljL3JlbmFsIGR5c2Z1bmN0aW9uIGV0Yy4pXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRBcmVhIHJvd3M9ezJ9IHBsYWNlaG9sZGVyPVwiXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IGZsZXggZmxleC1yb3dcIj5cclxuICAgICAgICAgICAgPElucHV0RGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICBpc1JlcXVpcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlcmlvdXNuZXNzIG9mIHRoZSByZWFjdGlvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwdC0yIHBsLTVcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwci0zXCI+Tm88L3A+XHJcbiAgICAgICAgICAgICAgPFN3aXRjaCBvbkNoYW5nZT17Y2hhbmdlU2VyaW91c25lc3N9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGwtM1wiPlllczwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxDaGVja2JveC5Hcm91cCBkaXNhYmxlZD17IXNlcmlvdXNSZWFjdGlvbn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPXtcIkNvbmdlbml0YWwtYW5vbWFseVwifT5cclxuICAgICAgICAgICAgICAgICAgQ29uZ2VuaXRhbC1hbm9tYWx5XHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPXtcIkxpZmUgdGhyZWF0ZW5pbmdcIn0+XHJcbiAgICAgICAgICAgICAgICAgIExpZmUgdGhyZWF0ZW5pbmd7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMVwiPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IHZhbHVlPXtcIkhvc3BpdGFsaXphdGlvbi9Qcm9sb25nZWRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIEhvc3BpdGFsaXphdGlvbi9Qcm9sb25nZWRcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0xXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggdmFsdWU9e1wiRGlzYWJpbGl0eVwifT5EaXNhYmlsaXR5PC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17XHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZXF1aXJlZCBpbnRlcnZlbnRpb24gdG8gUHJldmVudCBwZXJtYW5lbnQgaW1wYWlybWVudC9kYW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlcXVpcmVkIGludGVydmVudGlvbiB0byBQcmV2ZW50IHBlcm1hbmVudCBpbXBhaXJtZW50L2RhbWFnZVxyXG4gICAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgZ3JpZCBncmlkLWNvbHMtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCIgdmFsdWU9e1wiRGVhdGhcIn0+XHJcbiAgICAgICAgICAgICAgICAgIERlYXRoXHJcbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2xhc3NOYW1lPVwibXktYXV0byBjb2wtc3Bhbi0xMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIGdyaWQgZ3JpZC1jb2xzLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiIHZhbHVlPXtcIk90aGVyXCJ9PlxyXG4gICAgICAgICAgICAgICAgICBPdGhlciAoc3BlY2lmeSlcclxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwibXktYXV0byBjb2wtc3Bhbi0xMFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DaGVja2JveC5Hcm91cD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxyXG4gICAgICAgICAgICA8SW5wdXREZXNjcmlwdGlvbiBpc1JlcXVpcmVkPXtmYWxzZX0gZGVzY3JpcHRpb249XCJPdXRjb21lc1wiIC8+XHJcbiAgICAgICAgICAgIDxSYWRpby5Hcm91cCBjbGFzc05hbWU9XCJ3LWZ1bGxcIiBidXR0b25TdHlsZT1cInNvbGlkXCI+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIvMTIgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cInJlY292ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgUmVjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTIvMTIgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cInJlY292ZXJpbmdcIj5cclxuICAgICAgICAgICAgICAgIFJlY292ZXJpbmdcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwibm90cmVjb3ZlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICBOb3QgcmVjb3ZlcmVkXHJcbiAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEvMTIgdGV4dC1jZW50ZXJcIiB2YWx1ZT1cImZhdGFsXCI+XHJcbiAgICAgICAgICAgICAgICBGYXRhbFxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMy8xMiB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cInJlY292ZXJlZHdpdGhzZXF1ZWxhZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVjb3ZlcmVkIHdpdGggc2VxdWVsYWVcclxuICAgICAgICAgICAgICA8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIGNsYXNzTmFtZT1cInctMi8xMiB0ZXh0LWNlbnRlclwiIHZhbHVlPVwidW5rbm93blwiPlxyXG4gICAgICAgICAgICAgICAgVW5rbm93blxyXG4gICAgICAgICAgICAgIDwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2lcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgIi8vIGltcG9ydGluZyBsYXlvdXRzXHJcbmltcG9ydCBGb3JtTGF5b3V0IGZyb20gXCJ+L2xheW91dHMvZm9ybXMvYWRyLXJlcG9ydGluZ1wiO1xyXG5cclxuLy8gaW1wb3J0aW5nIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgUmFkaW8gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblBhbmVsIGZyb20gXCJ+L2NvbXBvbmVudHMvZm9ybXMvTmF2aWdhdGlvblBhbmVsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtMXBhZ2UzaigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgIHsvKiBBbnl0aGluZyBiZXR3ZWVuIHRoZSA8Rm9ybUxheW91dD4gdGFnIGNhbiBiZSBjaGFuZ2VkICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy14bCByb3VuZGVkLW1kIHctZnVsbCBwLTEwIGJvcmRlclwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzI0cHhdIHRleHQtWyNFODU5MENdXCI+T3V0Y29tZTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8uR3JvdXAgYnV0dG9uU3R5bGU9XCJzb2xpZFwiPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezB9PkZhdGFsPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17MX0+UmVjb3Zlcnk8L1JhZGlvLkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8UmFkaW8uQnV0dG9uIHZhbHVlPXsyfT5Db250aW51aW5nPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFJhZGlvLkJ1dHRvbiB2YWx1ZT17M30+VW5rbm93bjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxSYWRpby5CdXR0b24gdmFsdWU9ezR9Pk90aGVyPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgIDwvUmFkaW8uR3JvdXA+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZpZ2F0aW9uUGFuZWwgY3VycmVudFJvdXRlPVwiM2pcIiAvPlxyXG4gICAgPC9Gb3JtTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuIiwgImltcG9ydCB7IElucHV0LCBDaGVja2JveCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEV5ZUludmlzaWJsZU91dGxpbmVkLCBFeWVUd29Ub25lIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LXhsIHJvdW5kZWQtbGcgdy0xLzIgbWluLWgtMi80IG14LWF1dG8gbWItMzIgcC0xMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVsjNkM1NjdCXSB0ZXh0LVszNXB4XVwiPkFEUiBQb3J0YWw8L2gxPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctMS8yIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1iLTVcIj5cclxuICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiZXhhbXBsZUBlbWFpbC5jb21cIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtYi01XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91clBhc3N3b3JkSGVyZVwiXHJcbiAgICAgICAgICAgICAgaWNvblJlbmRlcj17KHZpc2libGUpID0+XHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlID8gPEV5ZVR3b1RvbmUgLz4gOiA8RXllSW52aXNpYmxlT3V0bGluZWQgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IG1iLTUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Q2hlY2tib3ggY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5SZW1lbWJlciBtZTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTBcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3LTEvMiBiZy1bIzZDNTY3Ql0gdGV4dC13aGl0ZSByb3VuZGVkLWxnIHAtMlwiPlxyXG4gICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ1bmRlcmxpbmUgdW5kZXJsaW5lLW9mZnNldC00IHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHctMy80IG1pbi1oLTMvNCBteC1hdXRvIHAtMTAgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC0yeGxcIj5TZWxlY3QgYSBmb3JtIHRvIGZpbGw8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTEgZ2FwLTVcIj5cclxuICAgICAgICAgIDxDYXJkU2VsZWN0XHJcbiAgICAgICAgICAgIHJvdXRlPVwiYWRyLXJlcG9ydGluZy8xXCJcclxuICAgICAgICAgICAgaW1hZ2U9XCIxXCJcclxuICAgICAgICAgICAgbmFtZT1cIkFEUiBSZXBvcnRpbmcgRm9ybVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPENhcmRTZWxlY3RcclxuICAgICAgICAgICAgcm91dGU9XCJtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMVwiXHJcbiAgICAgICAgICAgIGltYWdlPVwiMlwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJNZWRpY2FsIERldmljZSBBRFIgUmVwb3J0aW5nIEZvcm1cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBDYXJkU2VsZWN0ID0gKHByb3BzOiB7IG5hbWU6IHN0cmluZzsgcm91dGU6IHN0cmluZzsgaW1hZ2U/OiBzdHJpbmcgfSkgPT4gKFxyXG4gIDxMaW5rIHRvPXtwcm9wcy5yb3V0ZX0gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHJvdW5kZWQtbGcgYm9yZGVyLWdyYXktNDAwIHAtMyBoLWZ1bGwgaG92ZXI6c2NhbGUtMTA1IGR1cmF0aW9uLTc1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnRcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBhbHQ9XCJQbGFjZWhvbGRlciBpbWFnZVwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMy80IHctZnVsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXhsIHRleHQtYmxhY2sgcHQtNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge3Byb3BzLm5hbWV9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvTGluaz5cclxuKTtcclxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzkzYWQyMTc2JywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC1QU1VOR0QzSS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTFk0U0VHV1QuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MWUJXUTZSWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUpNREs3RVBILmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1GUkZKNkJYRi5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstQ042TDJMSVcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMS9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8xJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzEvaW5kZXgtRkFINDNQNVYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMi9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8yJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzIvaW5kZXgtNlQzQlhCSFAuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9iJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9iLUJYSE5PT0lDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvYy0zVU03RE1VWS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTkZKRVRBVkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2QnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2QtUUxWVk9ZNUouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9lJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9lLTcySzVYQlNQLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzInLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2YvMicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8yLVpTVVZFSVFSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMyc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi8zJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9mLzMnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvMy1DTjZGTjZLRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTkZKRVRBVkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi80JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzQtVE4zQlIzTE0uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvNScsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZi81JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9mLzUtTEoyQkRWQ08uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvZi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvZicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2YvaW5kZXgtUktQQUJOWVouanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9nJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9nLTdUR1M3S1pSLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy8zL2gnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2gtWFNGWTZTUzUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJzp7J2lkJzoncm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMy9pJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Fkci1yZXBvcnRpbmcvMy9pLTQ1TDQ0M1ZNLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Fkci1yZXBvcnRpbmcvMycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvYWRyLXJlcG9ydGluZy8zL2luZGV4LURKRDU0VjJLLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaic6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvaicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidhZHItcmVwb3J0aW5nLzMvaicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzMvai1MMk9CUEdENy5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstTkZKRVRBVkQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Fkci1yZXBvcnRpbmcvNC9pbmRleCc6eydpZCc6J3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonYWRyLXJlcG9ydGluZy80JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9hZHItcmVwb3J0aW5nLzQvaW5kZXgtNTdGVFRPUlUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVVKM0c0NzNJLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2xvZ2luL2luZGV4LUJYV0ZFRjNDLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzEnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8xL2luZGV4LTVETjZZR1BJLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzIvaW5kZXgtVUxWNFJNTk8uanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXNVNMUUtYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zJywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9pbmRleC1MUEhBQVdaRS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN0FQWk8yMjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1HRUI0T1hFRi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLU1ZNENNN1A0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNVc1U0xRS1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMSc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24xJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjEnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMS1ZVFZKQUZUNS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstN0FQWk8yMjMuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjInOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMicsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24yJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjItWkVQQ0xGUjUuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUdFQjRPWEVGLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzMvc3ViZm9ybXMvb3B0aW9uMycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvMy9zdWJmb3Jtcy9vcHRpb24zJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy8zL3N1YmZvcm1zL29wdGlvbjMtS0NINUZTWVEuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1ZNENNN1A0LmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2InLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYicsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9iLVA0UzdZNE41LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvYycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9jLVJPS1BMN1BELmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kJzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy80L2QnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvZCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9kLVhURjNOUVdRLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1ORkpFVEFWRC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNC9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNCcsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzQvaW5kZXgtUVhQUTNXRTcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU5GSkVUQVZELmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy81JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNS9pbmRleC02VFFLN0c0Ui5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVc1U0xRS1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzYnLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy82L2luZGV4LU1FT0pIR0lCLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01VzVTTFFLWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleCc6eydpZCc6J3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidtZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvNycsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzcvaW5kZXgtTldZM1BXUzYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLTVXNVNMUUtYLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstTExCWVU3RVQuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1GSVUzSlNUWi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTZDRk0yUU5HLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstMzNBUFNEUzcuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84L2luZGV4Jzp7J2lkJzoncm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84L2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6J21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy84JywnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9tZWRpY2FsLWRldmljZS1yZXBvcnRpbmcvOC9pbmRleC1LWUo1Q1Y3WS5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstNVc1U0xRS1guanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1MTEJZVTdFVC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUZJVTNKU1RaLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstNkNGTTJRTkcuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay0zM0FQU0RTNy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXgnOnsnaWQnOidyb3V0ZXMvbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzkvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbWVkaWNhbC1kZXZpY2UtcmVwb3J0aW5nLzknLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL21lZGljYWwtZGV2aWNlLXJlcG9ydGluZy85L2luZGV4LVNWNlNST0c3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay01VzVTTFFLWC5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUxMQllVN0VULmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstRklVM0pTVFouanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay02Q0ZNMlFORy5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLTMzQVBTRFM3LmpzJ10sJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtOTNBRDIxNzYuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxv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QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNSO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQSxZQUVaO0FBQUEsY0FDRSxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsY0FDVixhQUFhO0FBQUEsY0FDYixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJaEI7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBLFFBRVo7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxVQUNWLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUloQjtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUtoQixJQUFNLHlCQUF1QztBQUFBLEVBQzNDLFNBQVM7QUFBQSxFQUNULFVBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUEsUUFFWjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFVBQ1YsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSWhCO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUE7QUFBQSxJQUVaO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixhQUFhO0FBQUEsTUFD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QUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxRQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxPQUN4QixvQ0FBQyxvQkFBTSxRQUFQO0FBQUEsSUFBYyxPQUFPO0FBQUEsS0FBRyxpQkFHNUIsb0NBQUMsT0FBRDtBQUFBLElBQUssV0FBVTtBQUFBLEtBQ2Isb0NBQUMsMEJBQUQ7QUFBQSxJQUNFLFlBQVk7QUFBQSxJQUNaLGFBQVk7QUFBQSxNQUVkLG9DQUFDLG9CQUFNLE9BQVA7QUFBQSxJQUFhLGFBQVk7QUFBQSxLQUN2Qixv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
