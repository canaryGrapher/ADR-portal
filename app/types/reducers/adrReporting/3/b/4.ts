interface FormStateType {
    wasThereAHistoryOfAllergyOrPreviousReactionsToTheDrug?: BooleanTypes | null;
    wasTheDrugInvolvedInappropriateForThePatientSClinicalCondition?: BooleanTypes | null;
    wasTheDoseRouteOrFrequencyOfAdministrationInappropriateForThePatientSAgeWeightOrDiseaseState?: BooleanTypes | null;
    wasAToxicSerumDrugConcentrationOrLaboratoryMonitoringTestDocumented?: BooleanTypes | null;
    wasThereAKnownTreatmentForTheAdverseDrugReaction?: BooleanTypes | null;
    wasRequiredTherapeuticDrugMonitoringOrOtherNecessaryLabTestsNotPerformed?: BooleanTypes | null;
    wasADrugInteractionInvolvedInTheAdr?: BooleanTypes | null;
    wasPoorComplianceInvolvedInTheAdr?: BooleanTypes | null;
    werePreventiveMeasuresNotPrescribedToThePatient?: BooleanTypes | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanTypes {
    Yes = "Yes",
    No = "No",
}

enum FinalResultTypes {
    DefinitelyPreventable = "Definitely Preventable",
    ProbablyPreventable = "Probably Preventable",
    NotPreventable = "Not Preventable",
}

export type { ActionType, FormStateType };