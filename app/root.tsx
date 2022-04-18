import { Links, LiveReload, Outlet, Meta, Scripts } from "remix";
import type { MetaFunction } from "remix";

// importing layouts
import RootLayout from "~/layouts/root";

// importing types
import { DocumentProps } from "~/types/general";

//importing stylesheet
import tailwindStyle from "./styles/app.css";
import globalStyle from "./styles/global.css";
import antStyles from "antd/dist/antd.css";

export const meta: MetaFunction = () => {
  return { title: "ADR Portal | KMC" };
};

export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyle },
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: antStyles },
  ];
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <h1>Oh no! The application is facing issues.</h1>
        <Scripts />
      </body>
    </html>
  );
}

const Document = ({ children }: DocumentProps) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Scripts />
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
};

const App = () => {
  return (
    <Document>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </Document>
  );
};

export default App;
