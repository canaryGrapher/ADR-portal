import { Links, LiveReload, Outlet, Meta, Scripts } from "remix";
import type { MetaFunction } from "remix";
import RootLayout from "~/layouts/root";
import { DocumentProps } from "~/types/general";
import tailwindStyle from "./styles/app.css";
import globalStyle from "./styles/global.css";
import antStyles from "antd/dist/antd.css";

/**
 * @function meta
 * @description The meta tags for the app.
 * @returns MetaFunction
 */
export const meta: MetaFunction = () => {
  return { title: "ADR Portal | KMC" };
};

/**
 * @function links
 * @description Returns an array of links to be used in the head of the document.
 * @returns [] - array of {rel: string, href: string}
 */
export function links() {
  return [
    { rel: "stylesheet", href: tailwindStyle },
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: antStyles },
  ];
}

/**
 * @component Document
 * @description The root component of the app.
 * @param {DocumentProps} props
 * @returns React.ReactElement
 */
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

/**
 * @component App
 * @description The root component of the app.
 * @returns React.ReactElement
 */
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
