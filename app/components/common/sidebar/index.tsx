import { useState } from "react";

// importing components
import { ListItems } from "./ListItems";

// importing data
import { AdrReporting } from "./SidebarTemplates";

// importing types
import { TemplateProps } from "~/types/common/sidebar";

const Sidebar = () => {
  const [adrReportingData, setAdrReportingData] = useState<TemplateProps[]>(
    AdrReporting.template
  );

  const changeData = (changeElement: string) => {
    const currentState = adrReportingData;
    console.log(changeElement);
    const newState = currentState.map((element: TemplateProps) => {
      if (element.name === changeElement) {
        element.isActive = !element.isActive;
      } else {
        element.isActive = false;
      }
      return element;
    });
    setAdrReportingData(newState);
  };

  return (
    <div className="shadow-xl p-5 rounded-lg text-[#6C567B]">
      {adrReportingData.map((item: TemplateProps, index: number) => {
        return (
          <ListItems
            key={index}
            {...item}
            number={index}
            clicker={() => changeData(item.name)}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
