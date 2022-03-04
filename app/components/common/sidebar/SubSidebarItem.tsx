import SidebarItemData from "./SidebarItemData";

const styles = {
  bottom: "border-[1px] h-fill min-h-[1.25rem] w-0",
  circle: "w-2 h-2 ml-[12.5px] rounded-full",
  inactiveText: "text-[#7E7E7E]",
  activeText: "text-[#E8590C]",
  completeText: "text-[#6C567B]",
};

type Props = {
  title: String;
  isActive: Boolean;
  isCompleted: Boolean;
  isLast: Boolean;
  isParent: Boolean;
  parentSidebarData?: Array<SidebarItemData>;
  index: Number;
};

function SubSidebarItem({
  title,
  isActive,
  isCompleted,
  isLast,
  isParent,
  parentSidebarData,
  index,
}: Props) {
  return (
    <div
      className={`sidebarItem__wrapper flex flex-col ${
        index == 0 ? "mt-2" : ""
      }`}
    >
      <div className="sidebarItem__title flex flex-row items-center">
        <div
          className={`sidebarItem__circle ${styles.circle} ${
            isCompleted
              ? "bg-[#6C567B]"
              : isActive
              ? "bg-[#E8590C]"
              : "bg-[#7E7E7E]"
          }`}
        ></div>
        <div className={`sidebarItem__title w-[225px]`}>
          <p
            className={`ml-2 text-xs  ${
              isCompleted
                ? "text-[#6C567B]"
                : isActive
                ? "text-[#E8590C]"
                : "text-[#7E7E7E]"
            }`}
          >
            {title}
          </p>
        </div>
      </div>
      <div
        className={`sidebarItem__bottomWrapper w-fit min-w-[2rem] flex flex-row justify-center ${
          isLast ? "mb-2" : ""
        }`}
      >
        <div className={`min-w-[2rem] max-w-[2rem] flex justify-center`}>
          <div
            className={`sidebarItem__bottom
         ${styles.bottom}
         ${isLast == true ? "hidden" : "visible"}
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

export default SubSidebarItem;
