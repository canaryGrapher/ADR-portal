type formLayoutProps = {
    name: string;
    label: string;
}

const RadioOptions = ["Yes", "No", "Don't know"];

const formLayout: formLayoutProps[] = [
    { label: "Are there previous conclusion reports on this reaction?", name: "areTherePreviousConclusionReportsOnThisReaction" },
    { label: "Did the adverse event appear after the suspect drug was administered?", name: "didTheAdverseEventAppearAfterTheSuspectDrugWasAdministered" },
    { label: "Did the AR improve when the drug was discontinued or a specific antagonist was administered?", name: "didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered" },
    { label: "Did the AR reappear when drug was re-administered?", name: "didTheARReappearWhenDrugWasReadministered" },
    { label: "Are there alternate causes [other than the drug] that could solely have caused the reaction?", name: "areThereAlternateCausesThatCouldSolelyHaveCausedTheReaction" },
    { label: "Did the reaction reappear when a placebo was given?", name: "didTheReactionReappearWhenAPlaceboWasGiven" },
    { label: "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?", name: "wasTheDrugDetectedInTheBloodInAConcentrationKnownToBeToxic" },
    { label: "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?", name: "wasTheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased" },
    { label: "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?", name: "didThePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure" },
    { label: "Was the adverse event confirmed by objective evidence?", name: "wasTheAdverseEventConfirmedByObjectiveEvidence" },
];

export { formLayout, RadioOptions };