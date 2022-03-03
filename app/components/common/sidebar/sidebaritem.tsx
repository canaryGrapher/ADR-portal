import SidebarItemData from "./sidebaritemdata";

const styles = {
  top: "border-[1px] border-[#7E7E7E] h-4 w-0 mb-1 mt-1 ml-[15.5px]",
  isActiveTop: "border-[1px] border-[#6C567B] h-4 w-0 mb-1 mt-1 ml-[15.5px]",
  circle:
    "w-8 h-8 rounded-full border-2 border-[#7E7E7E] flex justify-center items-center",
  isCompletedCircle:
    "w-8 h-8 rounded-full bg-[#6C567B] flex justify-center items-center",
  isActiveCircle:
    "w-8 h-8 rounded-full border-2 border-[#6C567B] flex justify-center items-center",
  text: "text-[#7E7E7E]",
  isActiveText: "text-[#6C567B]",
  isCompletedNumber: "hidden",
};

export default function SidebarItem({
  title,
  isActive,
  isCompleted,
  index,
}: SidebarItemData) {
  return (
    <div className="sidebarItem__wrapper">
      <div
        className={`sidebaItem__top 
        ${index == 0 ? "hidden" : "block"}
        ${
          isCompleted
            ? styles.isActiveTop
            : isActive
            ? styles.isActiveTop
            : styles.top
        }`}
      />
      <div className="sidebarItem__bottom flex flex-row items-center">
        <div
          className={`sidebaItem__bottom__cicle ${
            isCompleted
              ? styles.isCompletedCircle
              : isActive
              ? styles.isActiveCircle
              : styles.circle
          }`}
        >
          <p
            className={`${
              isCompleted
                ? styles.isCompletedNumber
                : isActive
                ? styles.isActiveText
                : styles.text
            }`}
          >
            {index + 1}
          </p>
          <p className={`text-white ${isCompleted ? "block" : "hidden"}`}>
            &#10003;
          </p>
        </div>
        <div className="sidebarItem__bottom__titleWrapper ml-1">
          <p
            className={`sidebarItem__bottom__title ${
              isCompleted
                ? styles.isActiveText
                : isActive
                ? styles.isActiveText
                : styles.text
            }`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}
