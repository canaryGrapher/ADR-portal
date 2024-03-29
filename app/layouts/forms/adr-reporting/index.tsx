import { Links, Meta, Scripts, Outlet } from "remix";

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
      <div className="w-100 grid grid-cols-4 gap-5 px-16 pt-4">
        <div className="col-span-1">
          <div className="pt-20">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-3 p-2">
          <div className="flex w-screen pt-8 pb-4 text-[35px] font-bold text-[#6C567B]">
            ADR Reporting Form
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormLayout;
