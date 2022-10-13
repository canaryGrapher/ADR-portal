const formRadioOptions = ["Yes", "No"];
const formRadioOptions2 = [
    "Definitely preventable",
    "Probably preventable",
    "Not preventable",
];

const formLayout = [
    { label: "Was there a history of allergy or previous reactions to the drug?", value: "wasThereAHistoryOfAllergyOrPreviousReactionsToTheDrug" },
    { label: "Was the drug involved inappropriate for the patient’s clinical condition?", value: "wasTheDrugInvolvedInappropriateForThePatientSClinicalCondition" },
    { label: "Was the dose, route or frequency of administration inappropriate for the patient’s age, weight or disease state?", value: "wasTheDoseRouteOrFrequencyOfAdministrationInappropriateForThePatientSAgeWeightOrDiseaseState" },
    { label: "Was a toxic serum drug concentration (or laboratory monitoring test) documented?", value: "wasAToxicSerumDrugConcentrationOrLaboratoryMonitoringTestDocumented" },
    { label: "Was there a known treatment for the adverse drug reaction?", value: "wasThereAKnownTreatmentForTheAdverseDrugReaction" },
    { label: "Was required therapeutic drug monitoring or other necessary lab tests not performed?", value: "wasRequiredTherapeuticDrugMonitoringOrOtherNecessaryLabTestsNotPerformed" },
    { label: "Was a drug interaction involved in the ADR?", value: "wasADrugInteractionInvolvedInTheAdr" },
    { label: "Was poor compliance involved in the ADR?", value: "wasPoorComplianceInvolvedInTheAdr" },
    { label: "Were preventative measures not prescribed or administered to the patient?", value: "werePreventiveMeasuresNotPrescribedToThePatient" }, 
];

export { formRadioOptions, formRadioOptions2, formLayout };