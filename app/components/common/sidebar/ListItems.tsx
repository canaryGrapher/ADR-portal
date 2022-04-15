// importing components
import { FiCheck } from "react-icons/fi";
import { GoPrimitiveDot } from "react-icons/go";

import { Link } from "react-router-dom";

// importing types
import {
  ListItemsProps,
  TemplateProps,
  SidebarNumberingBullets,
} from "~/types/common/sidebar";

const ListItems = (props: ListItemsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="pr-3">
          <SidebarNumberingBullet
            isCurrentPage={props.currentPage.split("")[0] === props.pageLink}
            isCompleted={props.isCompleted}
            bulletNumber={props.number}
          />
        </div>
        <p className="cursor-pointer hover:underline text-base">{props.name}</p>
      </div>
      <div className="block pl-8">
        {props.currentPage.split("")[0] === props.pageLink &&
          props.children?.map((child: TemplateProps, index: number) => {
            const isActiveTab =
              child.pageLink.split("")[1] === props.currentPage.split("")[1];
            return (
              <div key={index}>
                <div
                  className={
                    isActiveTab
                      ? "flex flex-row pb-1 font-bold"
                      : "flex flex-row pb-1 text-[#7E7E7E]"
                  }
                >
                  <div className="flex flex-col justify-start pt-1 pr-2">
                    <GoPrimitiveDot className="text-md" />
                  </div>
                  <div className="flex flex-col justify-start p-0 m-0">
                    <p className="m-0 p-0 text-md">{child.name}</p>
                  </div>
                </div>
                <div className="block pl-8 py-1">
                  {props.currentPage.split("")[1] ===
                    child.pageLink.split("")[1] &&
                    child.children?.map(
                      (subChild: TemplateProps, subIndex: number) => {
                        const isActiveSubTab =
                          subChild.pageLink.split("")[2] ===
                          props.currentPage.split("")[2];
                        return (
                          <div
                            key={subIndex}
                            className={
                              isActiveSubTab
                                ? "py-1 font-bold"
                                : "py-1 text-[#7E7E7E]"
                            }
                          >
                            <div className="flex flex-row">
                              <div className="pr-3">
                                <div className="flex flex-row">
                                  <div className="flex flex-col justify-start pr-2">
                                    <GoPrimitiveDot className="text-md" />
                                  </div>
                                  <div className="flex flex-col justify-start p-0 m-0">
                                    <p className="m-0 p-0 text-xs">
                                      {subChild.name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

const SidebarNumberingBullet = (props: SidebarNumberingBullets) => {
  if (props.isCompleted) {
    return (
      <div className="border-2 border-[#6C567B] bg-[#6C567B] dark:bg-[#a262cf] dark:border-[#a262cf] rounded-full h-7 w-7 text-center text-white flex flex-col justify-center">
        <Link to="" className="text-white">
          <FiCheck className="mx-auto my-auto font-extrabold" />
        </Link>
      </div>
    );
  } else if (props.isCurrentPage) {
    return (
      <p className="font-bold border-2 border-[#6C567B] dark:border-[#a262cf] rounded-full h-7 w-7 text-center">
        <Link to="" className="text-[#6C567B] dark:text-[#a262cf]">
          {props.bulletNumber + 1}
        </Link>
      </p>
    );
  } else {
    return (
      <p className="border border-[#7E7E7E] rounded-full h-7 w-7 text-center">
        <Link to="" className="text-[#7E7E7E]">
          {props.bulletNumber + 1}
        </Link>
      </p>
    );
  }
};

export default ListItems;
