import { useState, useEffect } from "react";

// importing entitites
import {
  ADRreporting_portalMap,
  SuspectedAdrReporting_portalMap,
  MedicalDeviceReporting_portalMap,
} from "./FormMap";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

// importing types
import { NavigationPanelProps } from "~/types/forms/NavigationPanel";
import { Link } from "remix";

const NavigationPanel = (props: NavigationPanelProps) => {
  const location = useLocation();
  const [nextPage, setNextPage] = useState<string>("");
  const [previousPage, setPreviousPage] = useState<string>("");
  const currentLocation = location.pathname.split("/");
  const pageType =
    currentLocation[1] === "adr-reporting"
      ? { link: "/adr-reporting/", mapRoute: ADRreporting_portalMap }
      : currentLocation[1] === "suspected-adr-reporting"
      ? {
          link: "/suspected-adr-reporting/",
          mapRoute: SuspectedAdrReporting_portalMap,
        }
      : {
          link: "/medical-device-reporting/",
          mapRoute: MedicalDeviceReporting_portalMap,
        };

  useEffect(() => {
    for (let route = 0; route < pageType.mapRoute.length; route++) {
      if (props.currentRoute === pageType.mapRoute[route]) {
        if (route < pageType.mapRoute.length - 1 && route != 0) {
          setNextPage(
            pageType.link + pageType.mapRoute[route + 1].split("").join("/")
          );
          setPreviousPage(
            pageType.link + pageType.mapRoute[route - 1].split("").join("/")
          );
        } else if (route === pageType.mapRoute.length - 1) {
          setNextPage(pageType + "submit");
          setPreviousPage(
            pageType.link + pageType.mapRoute[route - 1].split("").join("/")
          );
        } else if (route === 0) {
          setNextPage(
            pageType.link + pageType.mapRoute[route + 1].split("").join("/")
          );
          setPreviousPage("/");
        }
      }
    }
  }, []);

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
