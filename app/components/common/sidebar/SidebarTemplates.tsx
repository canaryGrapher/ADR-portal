//importinf types
import { SidebarProps } from "~/types/common/sidebar";

const AdrReporting: SidebarProps = {
  baseUrl: "/adr-reporting",
  template: [
    {
      name: "Patient Information",
      isActive: false,
      isCompleted: false,
      children: [],
    },
    {
      name: "Suspected Adverse Reaction",
      isActive: false,
      isCompleted: false,
      children: [],
    },
    {
      name: "Suspected Medication(s)",
      isActive: false,
      isCompleted: false,
      children: [
        {
          name: "Medication",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Action Taken",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Dechallenge",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Rechallenge",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Reaction reappeared after reintroduction",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Causality Assessment",
          isActive: false,
          isCompleted: false,
          children: [
            {
              name: "Naranjo's scale",
              isActive: false,
              isCompleted: false,
              children: [],
            },
            {
              name: "WHO probability scale",
              isActive: false,
              isCompleted: false,
              children: [],
            },
            {
              name: "Hartwig's Severity Assessment Scale",
              isActive: false,
              isCompleted: false,
              children: [],
            },
            {
              name: "Modified Schumock and Thornton scale",
              isActive: false,
              isCompleted: false,
              children: [],
            },
            {
              name: "Predictability & Predisposing factors",
              isActive: false,
              isCompleted: false,
              children: [],
            },
          ],
        },
        {
          name: "Treatment given",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Concomitant medical product",
          isActive: false,
          isCompleted: false,
          children: [],
        },
        {
          name: "Outcome",
          isActive: false,
          isCompleted: false,
          children: [],
        },
      ],
    },
    {
      name: "Reporter Details",
      isActive: false,
      isCompleted: false,
      children: [],
    },
  ],
};

export { AdrReporting };
