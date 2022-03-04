import SidebarItemData from "~/components/common/sidebar/SidebarItemData";

export type SidebarProps = {
  title: String;
  isActive: Boolean;
  isCompleted: Boolean;
  isLast: Boolean;
  isParent: Boolean;
  isSubSidebar: Boolean;
  parentSidebarData?: Array<SidebarItemData>;
  index: number;
};
