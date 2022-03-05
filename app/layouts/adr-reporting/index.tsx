import React from "react";

//importing components
import Sidebar from "Components/common/sidebar";

// importing types
import { LayoutProps } from "Types/general";



const AdrReportingLayout = ({ children }: LayoutProps) => {
  return (
    <React.Fragment>
      <Sidebar />
      {children}
    </React.Fragment>
  );
};




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