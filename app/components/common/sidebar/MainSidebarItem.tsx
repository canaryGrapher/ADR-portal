import Sidebar from "./Sidebar";
import SidebarItemData from "./SidebarItemData";
import SubSidebarItem from "./SubSidebarItem";

const styles = {
  bottom: "border-[1px] h-fill min-h-[1.25rem] w-0 mb-1 mt-1 ph-[16px]",
  circle: "w-8 h-8 rounded-full  flex justify-center items-center",
  inactiveText: "text-[#7E7E7E]",
  activeText: "text-[#6C567B]",
};

type Props = {
  title: String;
  isActive: Boolean;
  isCompleted: Boolean;
  isLast: Boolean;
  isParent: Boolean;
  parentSidebarData?: Array<SidebarItemData>;
  index: number;
};

function MainSidebarItem({
  title,
  isActive,
  isCompleted,
  isLast,
  isParent,
  parentSidebarData,
  index,
}: Props) {
  return (
    <div className="sidebarItem__wrapper">
      <div className="sidebarItem__bottom flex flex-row items-center">
        <div
          className={`sidebarItem__bottom__cicle 
          ${styles.circle}
          ${
            isCompleted
              ? "bg-[#6C567B]"
              : isActive
              ? "border-2 border-[#6C567B]"
              : "border-2 border-[#7E7E7E]"
          }`}
        >
          <p
            className={`${
              isCompleted
                ? "hidden"
                : isActive
                ? styles.activeText
                : styles.inactiveText
            }`}
          >
            {index + 1}
          </p>
          <p className={`text-white ${isCompleted ? "block" : "hidden"}`}>
            &#10003;
          </p>
        </div>
        <div className="sidebarItem__bottom__titleWrapper ml-2">
          <p
            className={`sidebarItem__bottom__title text-base ${
              isCompleted
                ? styles.activeText
                : isActive
                ? styles.activeText
                : styles.inactiveText
            }`}
          >
            {title}
          </p>
        </div>
      </div>
      <div
        className={`sidebarItem__bottomWrapper w-fit flex flex-row justify-center`}
      >
        <div className={`min-w-[2rem] max-w-[2rem] flex justify-center`}>
          <div
            className={`sidebarItem__bottom
        ${styles.bottom}
        ${isLast ? "hidden" : "block"}
        ${
          isCompleted
            ? "border-[#6C567B] bg-[#6C567B]"
            : "border-[#7E7E7E] bg-[#7E7E7E]"
        }`}
          />
        </div>
        {isParent && isActive ? (
          <div>
            {parentSidebarData?.map((item, index) => {
              return (
                <SubSidebarItem
                  isActive={item.isActive}
                  isCompleted={item.isCompleted}
                  isLast={index == parentSidebarData.length - 1 ? true : false}
                  isParent={item.isParent == undefined ? false : true}
                  parentSidebarData={
                    item.isParent == undefined ? [] : item.parentSidebarItemData
                  }
                  title={item.title}
                  index={index}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MainSidebarItem;
