//importing components
import Sidebar from "~/components/common/sidebar";

// importing types
import { LayoutProps } from "~/types/general";

const FormLayout = ({ children }: LayoutProps) => {
  return (
    <div className="grid grid-cols-12 gap-5 w-100 p-16">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="col-span-9 p-2">{children}</div>
    </div>
  );
};

export default FormLayout;
