//importing components
import Sidebar from "~/components/common/sidebar";

// importing types
import { LayoutProps } from "~/types/general";

const FormLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen flex-col">
      <div className="flex w-screen flex-col items-center justify-center pt-8 text-[35px] text-[#6C567B]">
        Suspected ADR Reporting
        <div className="w-1/3 border-[1px] border-[#6C567B] bg-[#6C567B]"></div>
        <p className="text-lg">
          For VOLUNTARY reporting of Adverse Drug Reactions by Healthcare
          Professionals
        </p>
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
