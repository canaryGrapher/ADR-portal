type formLayoutProps = {
    name: string;
    label: string;
    yes: number;
    no: number;
    dontKnow: number;
}

const RadioOptions = ["Yes", "No", "Don't know"];

const formLayout: formLayoutProps[] = [
    { label: "Are there previous conclusion reports on this reaction?", name: "areTherePreviousConclusionReportsOnThisReaction", yes: 1, no: 0, dontKnow: 0 },
    { label: "Did the adverse event appear after the suspect drug was administered?", name: "didTheAdverseEventAppearAfterTheSuspectDrugWasAdministered", yes: 2, no: -1, dontKnow: 0 },
    { label: "Did the AR improve when the drug was discontinued or a specific antagonist was administered?", name: "didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered", yes: 1, no: 0, dontKnow: 0 },
    { label: "Did the AR reappear when drug was re-administered?", name: "didTheARReappearWhenDrugWasReadministered", yes: 2, no: -1, dontKnow: 0 },
    { label: "Are there alternate causes [other than the drug] that could solely have caused the reaction?", name: "areThereAlternateCausesThatCouldSolelyHaveCausedTheReaction", yes: -1, no: 2, dontKnow: 0 },
    { label: "Did the reaction reappear when a placebo was given?", name: "didTheReactionReappearWhenAPlaceboWasGiven", yes: -1, no: 1, dontKnow: 0 },
    { label: "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?", name: "wasTheDrugDetectedInTheBloodInAConcentrationKnownToBeToxic", yes: 1, no: 0, dontKnow: 0 },
    { label: "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?", name: "wasTheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased", yes: 1, no: 0, dontKnow: 0 },
    { label: "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?", name: "didThePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure", yes: 1, no: 0, dontKnow: 0 },
    { label: "Was the adverse event confirmed by objective evidence?", name: "wasTheAdverseEventConfirmedByObjectiveEvidence", yes: 1, no: 0, dontKnow: 0 },
];

export { formLayout, RadioOptions };