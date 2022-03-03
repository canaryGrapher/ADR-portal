import SidebarItem from "./sidebaritem";
import SidebarItemData from "./sidebaritemdata";

interface SidebarProps {
  sidebarItems: Array<SidebarItemData>;
}

export default function Sidebar({ sidebarItems }: SidebarProps) {
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__content">
        {sidebarItems.map((item, index) => {
          return (
            <SidebarItem
              title={item.title}
              isActive={item.isActive}
              isCompleted={item.isCompleted}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
