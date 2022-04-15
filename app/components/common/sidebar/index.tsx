import { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// importing components
import ListItems from "./ListItems";

// importing data
import { AdrReporting, MedicalDeviceReporting } from "./SidebarTemplates";

// importing types
import { TemplateProps } from "~/types/common/sidebar";

const Sidebar = () => {
  let location = useLocation();
  // Holds the current form sidebar data
  const [SidebarData, setSidebarData] = useState<TemplateProps[]>(
    AdrReporting.template
  );
  const [activeTab, setActiveTab] = useState<string>("");

  //set next, previous and current page on every page load
  useEffect(() => {
    const currentLocation = location.pathname.split("/");
    const currentForm = currentLocation[1];
    const currentPage = currentLocation[2];
    const currentPageSub =
      currentLocation.length >= 4 ? currentLocation[3] : "";
    const currentPageSubSub =
      currentLocation.length >= 5 ? currentLocation[4] : "";
    if (currentForm === "adr-reporting") {
      setSidebarData(AdrReporting.template);
    }
    if (currentForm === "medical-device-reporting") {
      setSidebarData(MedicalDeviceReporting.template);
    }
    setActiveTab(currentPage + currentPageSub + currentPageSubSub);
  }, [location]);

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 pb-4">
        <div className="col-span-1">
          <img
            alt="Picture of Indian National Emblem"
            src="/emblem.png"
            className="p-1"
          />
        </div>
        <div className="col-span-3 text-center">
          <h2 className="text-[#6C567B] dark:text-[#a262cf] text-xl m-0 mb-3">
            MANIPAL COLLEGE OF PHARMACY
          </h2>
          <p className="text-[10px] border-t-2 border-[#6C567B] pt-2 font-medium">
            Manipal Academy of Higer Education
            <br />
            (Institution of Eminence Deemed to be University)
          </p>
        </div>
      </div>
      <div className="shadow-xl p-5 rounded-lg text-[#6C567B] dark:text-[#a262cf] border">
        {SidebarData.map((item: TemplateProps, index: number) => {
          return (
            <ListItems
              key={index}
              {...item}
              number={index}
              currentPage={activeTab}
              pageLink={item.pageLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
