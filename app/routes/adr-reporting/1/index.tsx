import Sidebar from "~/components/common/sidebar/Sidebar";
import SidebarItemData from "~/components/common/sidebar/SidebarItemData";
import Page1 from "./Page1";

const sidebarItems: Array<SidebarItemData> = [
  { title: "Patient Information", isActive: false, isCompleted: true },
  { title: "Suspected Adverse Reaction", isActive: true, isCompleted: true },
  {
    title: "Suspected Medication(s)",
    isActive: false,
    isCompleted: false,
    isParent: true,
    parentSidebarItemData: [
      { title: "Medication", isActive: false, isCompleted: true },
      { title: "Action Taken", isActive: false, isCompleted: true },
      { title: "Dechallenge", isActive: false, isCompleted: true },
      { title: "Rechallenge", isActive: false, isCompleted: true },
      {
        title: "Reaction reappeared after reintroduction",
        isActive: false,
        isCompleted: true,
      },
      { title: "Causality Assessment", isActive: false, isCompleted: true },
      { title: "Treatement Given", isActive: false, isCompleted: true },
      {
        title: "Concomitant medical product",
        isActive: true,
        isCompleted: false,
        isParent: true,
        parentSidebarItemData: [
          { title: "Medication", isActive: true, isCompleted: false },
          { title: "Action Taken", isActive: false, isCompleted: false },
        ],
      },
      { title: "Outcome", isActive: false, isCompleted: false },
    ],
  },
  { title: "Reporter Details", isActive: false, isCompleted: false },
];

export default function Form1() {
  return (
    <div className="form1_wrapper flex flex-col items-center">
      <div className="text-[35px] text-[#E8590C]">ADR Reporting Form</div>
      <div
        style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
        className="form1__content mt-5 flex w-screen flex-row justify-around"
      >
        <div className="form1__sidebarWrapper ">
          <div className="form1_sidebar h-fit w-fit rounded-md pl-10 pt-5 pb-5 pr-5 shadow-[0_0_10px_rgba(0,0,0,0.25)]">
            <Sidebar sidebarItems={sidebarItems} />
          </div>
        </div>
        <div className="form1__content">
          <Page1 />
        </div>
      </div>
    </div>
  );
}
