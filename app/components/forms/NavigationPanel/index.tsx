import { useState, useEffect } from "react";

// importing maps
import {
  ADRreporting_portalMap,
  MedicalDeviceReporting_portalMap,
} from "./FormMap";
import { useLocation } from "react-router-dom";

// importing types
import { NavigationPanelProps } from "~/types/forms/NavigationPanel";
import { Link } from "remix";

const NavigationPanel = (props: NavigationPanelProps) => {
  const location = useLocation();
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const [isFirstPage, setIsFirstPage] = useState<boolean>(false);
  const currentLocation = location.pathname.split("/");
  const pageType =
    currentLocation[1] === "adr-reporting"
      ? { link: "/adr-reporting/", mapRoute: ADRreporting_portalMap }
      : {
          link: "/medical-device-reporting/",
          mapRoute: MedicalDeviceReporting_portalMap,
        };

  useEffect(() => {
    // default settings on every page render
    setIsFirstPage(false);
    setIsLastPage(false);

    for (let route = 0; route < pageType.mapRoute.length; route++) {
      if (props.currentRoute === pageType.mapRoute[route]) {
        if (route === 0) {
          setIsFirstPage(true);
          setNextPage(
            pageType.link + pageType.mapRoute[route + 1].split("").join("/")
          );
          setPreviousPage("/");
        } else if (route === pageType.mapRoute.length - 1) {
          setIsLastPage(true);
          setNextPage(pageType + "submit");
          setPreviousPage(
            pageType.link + pageType.mapRoute[route - 1].split("").join("/")
          );
        } else if (route < pageType.mapRoute.length - 1 && route != 0) {
          setNextPage(
            pageType.link + pageType.mapRoute[route + 1].split("").join("/")
          );
          setPreviousPage(
            pageType.link + pageType.mapRoute[route - 1].split("").join("/")
          );
        }
      }
    }
  }, []);

  return (
    <div className="py-10 w-full flex flex-row justify-end">
      <div className="grid grid-cols-3 gap-2">
        <Link to={previousPage}>
          <button
            className="bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C] hover:bg-transparent font-bold"
            type="submit"
          >
            {isFirstPage ? "Home" : "Previous"}
          </button>
        </Link>
        <button
          className="bg-[#6C567B] text-[#ebebeb] hover:shadow-xl hover:bg-white hover:text-[#6C567B] p-2 w-32 border font-bold"
          type="submit"
        >
          Save
        </button>
        <Link to={nextPage}>
          <button className="bg-[#E8590C] text-white hover:shadow-xl p-2 w-32 border border-[#E8590C] font-bold hover:bg-transparent">
            {isLastPage ? "Submit" : "Next"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavigationPanel;
