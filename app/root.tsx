import { Links, LiveReload, Outlet } from "remix";
import type { MetaFunction } from "remix";

// importing layouts
import RootLayout from "~/layouts/root";

// importing types
import { DocumentProps } from "~/types/general";

//importing stylesheet
import globalStyle from "~/styles/global.css";
import antStyles from "antd/dist/antd.css";

export function links() {
  return [
    { rel: "stylesheet", href: globalStyle },
    { rel: "stylesheet", href: antStyles },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
    <Document>
      <RootLayout>
        <Outlet />
      </RootLayout>
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
