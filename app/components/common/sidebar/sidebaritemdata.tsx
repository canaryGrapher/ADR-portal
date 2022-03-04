export default interface SidebarItemData {
  title: String;
  isActive: Boolean;
  isCompleted: Boolean;
  isParent?: Boolean;
  parentSidebarItemData?: Array<SidebarItemData>;
}
