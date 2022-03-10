import { Links, LiveReload, Outlet, Meta, Scripts } from "remix";
import type { MetaFunction } from "remix";

// importing layouts
import RootLayout from "~/layouts/root";

// importing types
import { DocumentProps } from "~/types/general";

//importing stylesheet
import globalStyle from "~/styles/global.css";
import antStyles from "antd/dist/antd.css";

export const meta: MetaFunction = () => {
  return { title: "ADR Portal | KMC" };
};

export function links() {
  return [
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: antStyles },
  ];
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
