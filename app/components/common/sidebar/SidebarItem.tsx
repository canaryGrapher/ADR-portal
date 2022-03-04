import SidebarItemData from "./SidebarItemData";

const styles = {
  mainBottom: "border-[1px] h-fill min-h-[1.25rem] w-0 mb-1 mt-1",
  subBottom: "border-[1px] h-fill min-h-[1.25rem] w-0",
  mainCircle: "w-8 h-8 rounded-full  flex justify-center items-center",
  subCircle: "w-2 h-2 ml-[12.5px] rounded-full",
  inactiveText: "text-[#7E7E7E]",
  activeText: "text-[#6C567B]",
  completeText: "text-[#6C567B]",
};

type Props = {
  title: String;
  isActive: Boolean;
  isCompleted: Boolean;
  isLast: Boolean;
  isParent: Boolean;
  isSubSidebar: Boolean;
  parentSidebarData?: Array<SidebarItemData>;
  index: number;
};

function SidebarItem({
  title,
  isActive,
  isCompleted,
  isLast,
  isParent,
  isSubSidebar,
  parentSidebarData,
  index,
}: Props) {
  return (
    <div className="sidebarItem__wrapper">
      <div
        className={`sidebarItem__top flex flex-row items-center ${
          index == 0 ? "mt-1" : isLast ? "mb-1" : ""
        }`}
      >
        {isSubSidebar
          ? renderSubCircle(isCompleted, isActive)
          : renderMainCircle(isCompleted, isActive, index)}

        <div
          className={`sidebarItem__titleWrapper ml-2 
          ${isSubSidebar ? "w-[225px]" : ""}
          `}
        >
          {isSubSidebar
            ? renderSubText(isCompleted, isActive, title)
            : renderMainText(isCompleted, isActive, title)}
        </div>
      </div>
      <div
        className={`sidebarItem__bottomWrapper w-fit flex flex-row justify-center`}
      >
        <div className={`min-w-[2rem] max-w-[2rem] flex justify-center`}>
          <div
            className={`sidebarItem__bottom
        ${isSubSidebar ? styles.subBottom : styles.mainBottom}
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
                <SidebarItem
                  isActive={item.isActive}
                  isCompleted={item.isCompleted}
                  isLast={index == parentSidebarData.length - 1 ? true : false}
                  isParent={item.isParent == undefined ? false : true}
                  isSubSidebar={true}
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

function renderMainCircle(
  isCompleted: Boolean,
  isActive: Boolean,
  index: number
) {
  return (
    <div
      className={`sidebarItem__cicle 
  ${styles.mainCircle}
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
  );
}

function renderSubCircle(isCompleted: Boolean, isActive: Boolean) {
  return (
    <div
      className={`sidebarItem__circle ${styles.subCircle} ${
        isCompleted
          ? "bg-[#6C567B]"
          : isActive
          ? "bg-[#E8590C]"
          : "bg-[#7E7E7E]"
      }`}
    />
  );
}

function renderMainText(
  isCompleted: Boolean,
  isActive: Boolean,
  title: String
) {
  return (
    <p
      className={`sidebarItem__title text-base ${
        isCompleted || isActive ? styles.activeText : styles.inactiveText
      }`}
    >
      {title}
    </p>
  );
}

function renderSubText(isCompleted: Boolean, isActive: Boolean, title: String) {
  return (
    <p
      className={`sidebarItem_title text-xs  ${
        isCompleted
          ? "text-[#6C567B]"
          : isActive
          ? "text-[#E8590C]"
          : "text-[#7E7E7E]"
      }`}
    >
      {title}
    </p>
  );
}

export default SidebarItem;
