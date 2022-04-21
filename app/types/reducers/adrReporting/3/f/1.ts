interface FormStateType {
    areTherePreviousConclusionReportsOnThisReaction?: BooleanOptions | null;
    didTheAdverseRventAppearAfterTheSuspectDrugWasAdministered?: BooleanOptions | null;
    didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered?: BooleanOptions | null;
    didTheARReappearWhenDrugWasReAdministered?: BooleanOptions | null;
    areThereAlternateCausesOtherThanTheDrugThatCouldSolelyHaveCausedTheReaction?: BooleanOptions | null;
    didtheReactionReappearWhenAPlaceboWasGiven?: BooleanOptions | null;
    wastheDrugDetectedInRheBloodOrOtherFluidsInAConcentrationKnownToBeToxic?: BooleanOptions | null;
    wastheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased?: BooleanOptions | null;
    didthePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure?: BooleanOptions | null;
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