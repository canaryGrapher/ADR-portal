import { Links, Meta, Scripts } from "remix";

//importing components
import Sidebar from "~/components/common/sidebar";

// importing types
import { LayoutProps } from "~/types/general";

export function ErrorBoundary({ error }: any) {
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
        <pre>{error.message}</pre>
        <Scripts />
      </body>
    </html>
  );
}

const FormLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex w-screen flex-col items-center justify-center pt-8 text-[35px] text-[#6C567B]">
        Medical Device ADR Reporting
      </div>
      <div className="w-100 grid grid-cols-12 gap-5 px-16 pt-4">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 p-2">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
