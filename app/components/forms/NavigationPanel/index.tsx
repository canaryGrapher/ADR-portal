import { useState, useEffect } from "react";

// importing entitites
import { ADRreporting_portalMap } from "./FormMap";

// importing types
import { NavigationPanelProps } from "~/types/forms/NavigationPanel";
import { Link } from "remix";

const NavigationPanel = (props: NavigationPanelProps) => {
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");
  const pageType = "/adr-reporting/";

  useEffect(() => {
    for (let route = 0; route < ADRreporting_portalMap.length; route++) {
      if (props.currentRoute === ADRreporting_portalMap[route]) {
        if (route < ADRreporting_portalMap.length - 1 && route != 0) {
          setNextPage(
            pageType + ADRreporting_portalMap[route + 1].split("").join("/")
          );
          setPreviousPage(
            pageType + ADRreporting_portalMap[route - 1].split("").join("/")
          );
        } else if (route == ADRreporting_portalMap.length - 1) {
          setNextPage(pageType + "submit");
          setPreviousPage(
            pageType + ADRreporting_portalMap[route - 1].split("").join("/")
          );
        } else if (route === 0) {
          setNextPage(
            pageType + ADRreporting_portalMap[route + 1].split("").join("/")
          );
          setPreviousPage("/");
        }
      }
    }
  });

  return (
    <div className="py-10 w-full flex flex-row justify-end">
      <div className="grid grid-cols-2 gap-5">
        <Link to={previousPage}>
          <button className="bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C]">
            Previous
          </button>
        </Link>
        <Link to={nextPage}>
          <button className="bg-[#E8590C] text-white hover:shadow-xl p-2 w-32">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationPanel;
