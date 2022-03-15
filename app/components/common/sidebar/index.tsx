import { useEffect, useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// importing components
import { ListItems } from "./ListItems";

// importing data
import { AdrReporting, SuspectedAdrReporting } from "./SidebarTemplates";

// importing types
import { TemplateProps } from "~/types/common/sidebar";

const Sidebar = () => {
  let location = useLocation();
  // Holds the current form sidebar data
  const [adrReportingData, setAdrReportingData] = useState<TemplateProps[]>(
    AdrReporting.template
  );
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const currentLocation = location.pathname.split("/");
    const currentForm = currentLocation[1];
    const currentPage = currentLocation[2];
    const currentPageSub =
      currentLocation.length >= 4 ? currentLocation[3] : "";
    const currentPageSubSub =
      currentLocation.length >= 5 ? currentLocation[4] : "";
    if (currentForm === "adr-reporting") {
      setAdrReportingData(AdrReporting.template);
    }
    if (currentForm === "suspected-adr-reporting") {
      setAdrReportingData(SuspectedAdrReporting.template);
    }
    setActiveTab(currentPage + currentPageSub + currentPageSubSub);
  }, [location]);

  const changeData = (changeElement: string) => {
    // alert(changeElement);
    // const currentState = adrReportingData;
    // console.log(changeElement);
    // const newState = currentState.map((element: TemplateProps) => {
    //   if (element.name === changeElement) {
    //     element.isActive = !element.isActive;
    //   } else {
    //     element.isActive = false;
    //   }
    //   return element;
    // });
    // setAdrReportingData(newState);
  };

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-4 pb-4">
        <div className="col-span-1">
          <img src="/emblem.png" className="p-1" />
        </div>
        <div className="col-span-3 text-center">
          <h2 className="text-[#6C567B] text-xl m-0 mb-3">
            INDIAN PHARMACOPOEIA COMMISSION
          </h2>
          <p className="text-[7px] border-t-2 border-[#6C567B] pt-2 font-bold">
            (National Coordination Centre-Pharmacovigilance Programme of India)
            <br />
            Ministry of Health & Family Welfare, Government of India Sector-23,
            Raj Nagar, Ghaziabad-201002
          </p>
        </div>
      </div>
      <div className="shadow-xl p-5 rounded-lg text-[#6C567B] border">
        {adrReportingData.map((item: TemplateProps, index: number) => {
          return (
            <ListItems
              key={index}
              {...item}
              number={index}
              clicker={() => changeData(item.name)}
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
