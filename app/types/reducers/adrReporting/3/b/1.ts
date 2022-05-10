interface FormStateType {
    areTherePreviousConclusionReportsOnThisReaction?: BooleanOptions | null;
    didTheAdverseEventAppearAfterTheSuspectDrugWasAdministered?: BooleanOptions | null;
    didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered?: BooleanOptions | null;
    didTheARReappearWhenDrugWasReadministered?: BooleanOptions | null;
    areThereAlternateCausesThatCouldSolelyHaveCausedTheReaction?: BooleanOptions | null;
    didTheReactionReappearWhenAPlaceboWasGiven?: BooleanOptions | null;
    wasTheDrugDetectedInTheBloodInAConcentrationKnownToBeToxic?: BooleanOptions | null;
    wasTheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased?: BooleanOptions | null;
    didThePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure?: BooleanOptions | null;
    wasTheAdverseEventConfirmedByObjectiveEvidence?: BooleanOptions | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanOptions {
    Yes = "Yes",
    No = "No",
    DontKnow = "Don't Know",
}

export type { ActionType, FormStateType };

