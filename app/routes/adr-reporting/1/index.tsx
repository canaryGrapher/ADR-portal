import Sidebar from "~/components/common/sidebar/sidebar";
import SidebarItemData from "~/components/common/sidebar/sidebaritemdata";

const sidebarItems: Array<SidebarItemData> = [
  { title: "Patient Information", isActive: false, isCompleted: true },
  { title: "Suspected Adverse Reaction", isActive: true, isCompleted: false },
  { title: "Suspected Medication(s)", isActive: false, isCompleted: false },
  { title: "Reporter Details", isActive: false, isCompleted: false },
];

export default function Form1page1() {
  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
      className="form1__wrapper flex flex-row w-screen justify-around mt-5"
    >
      <div className="form1__sidebarWrapper ">
        <div className="form1_sidebar w-fit h-fit pl-10 pt-5 pr-5 pb-5 shadow-[0_0_10px_rgba(0,0,0,0.25)] rounded-md">
          <Sidebar sidebarItems={sidebarItems} />
        </div>
      </div>
      <div className="form1__content">
        <h1>Form 1, Page 1</h1>
      </div>
    </div>
  );
}
