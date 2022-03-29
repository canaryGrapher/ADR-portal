//importinf types
import { SidebarProps } from "~/types/common/sidebar";

const AdrReporting: SidebarProps = {
  baseUrl: "/adr-reporting",
  template: [
    {
      name: "Patient Information",
      pageLink: "1",
      isCompleted: true,
      children: [],
    },
    {
      name: "Suspected Adverse Reaction",
      pageLink: "2",
      isCompleted: false,
      children: [],
    },
    {
      name: "Suspected Medication(s)",
      pageLink: "3",
      isCompleted: false,
      children: [
        {
          name: "Medication",
          pageLink: "3",
          isCompleted: false,
          children: [],
        },
        {
          name: "Action Taken",
          pageLink: "3b",
          isCompleted: false,
          children: [],
        },
        {
          name: "Dechallenge",
          pageLink: "3c",
          isCompleted: false,
          children: [],
        },
        {
          name: "Rechallenge",
          pageLink: "3d",
          isCompleted: false,
          children: [],
        },
        {
          name: "Reaction reappeared after reintroduction",
          pageLink: "3e",
          isCompleted: false,
          children: [],
        },
        {
          name: "Causality Assessment",
          pageLink: "3f",
          isCompleted: false,
          children: [
            {
              name: "Naranjo's scale",
              pageLink: "3f",
              isCompleted: false,
              children: [],
            },
            {
              name: "WHO probability scale",
              pageLink: "3f2",
              isCompleted: false,
              children: [],
            },
            {
              name: "Hartwig's Severity Assessment Scale",
              pageLink: "3f3",
              isCompleted: false,
              children: [],
            },
            {
              name: "Modified Schumock and Thornton scale",
              pageLink: "3f4",
              isCompleted: false,
              children: [],
            },
            {
              name: "Predictability & Predisposing factors",
              pageLink: "3f5",
              isCompleted: false,
              children: [],
            },
          ],
        },
        {
          name: "Treatment given",
          pageLink: "3g",
          isCompleted: false,
          children: [],
        },
        {
          name: "Concomitant medical product",
          pageLink: "3h",
          isCompleted: false,
          children: [],
        },
        {
          name: "Outcome",
          pageLink: "3i",
          isCompleted: false,
          children: [],
        },
      ],
    },
    {
      name: "Reporter Details",
      pageLink: "4",
      isCompleted: false,
      children: [],
    },
  ],
};

const SuspectedAdrReporting: SidebarProps = {
  baseUrl: "/suspected-adr-reporting",
  template: [
    {
      name: "Patient Information",
      pageLink: "1",
      isCompleted: false,
      children: [],
    },
    {
      name: "Suspected Adverse Reaction",
      pageLink: "2",
      isCompleted: false,
      children: [],
    },
    {
      name: "Suspected Medication(s)",
      pageLink: "3",
      isCompleted: false,
      children: [
        {
          name: "Medication",
          pageLink: "3",
          isCompleted: false,
          children: [],
        },
        {
          name: "Action Taken",
          pageLink: "3b",
          isCompleted: false,
          children: [],
        },
        {
          name: "Reaction reappeared after reintroduction",
          pageLink: "3c",
          isCompleted: false,
          children: [],
        },
        {
          name: "Concomitant medical product",
          pageLink: "3d",
          isCompleted: false,
          children: [],
        },
        {
          name: "AMC/NCC Section",
          pageLink: "3e",
          isCompleted: false,
          children: [],
        },
      ],
    },
    {
      name: "Reporter Details",
      pageLink: "4",
      isCompleted: false,
      children: [],
    },
  ],
};

const MedicalDeviceReporting: SidebarProps = {
  baseUrl: "/medical-device-reporting",
  template: [
    {
      name: "Primary Information",
      pageLink: "1",
      isCompleted: false,
      children: [],
    },
    {
      name: "Reporter Information",
      pageLink: "2",
      isCompleted: false,
      children: [],
    },
    {
      name: "Device Category",
      pageLink: "3",
      isCompleted: false,
      children: [],
    },
    {
      name: "Device Description",
      pageLink: "4",
      isCompleted: false,
      children: [
        {
          name: "Manufacturer Details",
          pageLink: "4",
          isCompleted: false,
          children: [],
        },
        {
          name: "Importer Details",
          pageLink: "4b",
          isCompleted: false,
          children: [],
        },
        {
          name: "Distributor Details",
          pageLink: "4c",
          isCompleted: false,
          children: [],
        },
        {
          name: "Further Information",
          pageLink: "4d",
          isCompleted: false,
          children: [],
        },
      ],
    },
    {
      name: "Event Description",
      pageLink: "5",
      isCompleted: false,
      children: [],
    },
    {
      name: "Patient Information",
      pageLink: "6",
      isCompleted: false,
      children: [],
    },
    {
      name: "Healthcare Facility Details",
      pageLink: "7",
      isCompleted: false,
      children: [],
    },
    {
      name: "Casualty Assessment",
      pageLink: "8",
      isCompleted: false,
      children: [],
    },
    {
      name: "Product Owner's Investigation",
      pageLink: "9",
      isCompleted: false,
      children: [],
    },
  ],
};

export { AdrReporting, SuspectedAdrReporting, MedicalDeviceReporting };
