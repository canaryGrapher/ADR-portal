import { SidebarProps } from "~/types/common/sidebar";

function SidebarItem({
  title,
  isActive,
  isCompleted,
  isLast,
  isParent,
  isSubSidebar,
  parentSidebarData,
  index,
}: SidebarProps) {
  return (
    <div>
      {/* circle component for the sidebar item */}
      <div
        className={` flex flex-row items-center ${
          index == 0 ? "mt-1" : isLast ? "mb-1" : ""
        }`}
      >
        {isSubSidebar
          ? renderSubCircle(isCompleted, isActive)
          : renderMainCircle(isCompleted, isActive, index)}

        <div
          className={` ml-2
          ${isSubSidebar ? "w-2/3 min-w-[100px]" : ""}
          `}
        >
          {isSubSidebar
            ? renderSubText(isCompleted, isActive, title)
            : renderMainText(isCompleted, isActive, title)}
        </div>
      </div>
      {/* line indicator for the sidebar item */}
      <div className={`flex w-fit flex-row justify-center`}>
        <div className={`flex min-w-[2rem] max-w-[2rem] justify-center`}>
          <div
            className={`
        ${
          isSubSidebar
            ? "h-fill min-h-[1.25rem] w-0 border-[1px]"
            : "h-fill mb-1 mt-1 min-h-[1.25rem] w-0 border-[1px]"
        }
        ${isLast ? "hidden" : "block"}
        ${
          isCompleted
            ? "border-[#6C567B] bg-[#6C567B]"
            : "border-[#7E7E7E] bg-[#7E7E7E]"
        }`}
          />
        </div>
        {/* sidebar generation is component is a parent */}
        {isParent && isActive ? (
          <div>
            {parentSidebarData?.map((item, index) => {
              return (
                <SidebarItem
                  title={item.title}
                  isActive={item.isActive}
                  isCompleted={item.isCompleted}
                  isLast={index == parentSidebarData.length - 1 ? true : false}
                  isParent={item.isParent == undefined ? false : true}
                  isSubSidebar={true}
                  parentSidebarData={
                    item.isParent == undefined ? [] : item.parentSidebarItemData
                  }
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
      className={`flex h-8 w-8  items-center justify-center rounded-full
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
            ? "text-[#6C567B]"
            : "text-[#7E7E7E]"
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
      className={`ml-[12.5px] h-2 w-2 rounded-full ${
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
      className={`text-base ${
        isCompleted || isActive ? "text-[#6C567B]" : "text-[#7E7E7E]"
      }`}
    >
      {title}
    </p>
  );
}

function renderSubText(isCompleted: Boolean, isActive: Boolean, title: String) {
  return (
    <p
      className={`text-xs  ${
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
