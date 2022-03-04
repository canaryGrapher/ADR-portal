import MainSidebarItem from "./MainSidebarItem";
import SidebarItemData from "./SidebarItemData";

type Props = {
  sidebarItems: Array<SidebarItemData>;
};

export default function Sidebar({ sidebarItems }: Props) {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        {sidebarItems.map((item, index) => {
          return (
            <MainSidebarItem
              title={item.title}
              isActive={item.isActive}
              isCompleted={item.isCompleted}
              isLast={sidebarItems.length - 1 == index}
              isParent={item.isParent == undefined ? false : item.isParent}
              parentSidebarData={
                item.isParent == undefined ? [] : item.parentSidebarItemData
              }
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
