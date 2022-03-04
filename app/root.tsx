import React from "react";
import { Links, LiveReload, Outlet } from "remix";
import type { MetaFunction } from "remix";


// importing redux-toolkit
import { store } from "./states/store";
import { Provider } from "react-redux";

// importing the components
import Navbar from "./components/common/navbar";

// importing types
import { DocumentProps, LayoutProps } from "~/types/general";

//importing global stylesheet
import globalStyle from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: globalStyle }];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

const Document = ({ children, title }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : "ADR Portal | MAHE"}</title>
        <Links />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navbar />
        {children}
      </Provider>
    </React.Fragment>
  );
};
