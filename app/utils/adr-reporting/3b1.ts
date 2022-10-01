type formLayoutProps = {
    name: string;
    label: string;
}

const RadioOptionss1 = [
    { label:"Yes",value:"1"}, 
    {label:"No",value:"0"},
    {label:"Don't know",value:"0"},
];

const RadioOptionss2 = [
    { label:"Yes",value:"2"}, 
    {label:"No",value:"-1"},
    {label:"Don't know",value:"0"},
];
const RadioOptionss3 = [
    { label:"Yes",value:"-1"}, 
    {label:"No",value:"+2"},
    {label:"Don't know",value:"0"},
];

const RadioOptionss4 = [
    { label:"Yes",value:"-1"}, 
    {label:"No",value:"1"},
    {label:"Don't know",value:"0"},
];

const formLayout1: formLayoutProps[] = [
    { label: "Are there previous conclusion reports on this reaction?", name: "areTherePreviousConclusionReportsOnThisReaction" },
    
];

const formLayout2: formLayoutProps[] = [
   
    { label: "Did the adverse event appear after the suspect drug was administered?", name: "didTheAdverseEventAppearAfterTheSuspectDrugWasAdministered" },
    
];

const formLayout3: formLayoutProps[] = [
    
    { label: "Did the adverse reaction improve when the drug was discontinued, or a specific antagonist was administered?", name: "didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered" },
    
];

const formLayout4: formLayoutProps[] = [
   
    { label: "Did the adverse reaction reappear when drug was re-administered?", name: "didTheARReappearWhenDrugWasReadministered" },
    
];


const formLayout5: formLayoutProps[] = [
    
    { label: "Are there alternate causes [other than the drug] that could on their own have caused the reaction?", name: "areThereAlternateCausesThatCouldSolelyHaveCausedTheReaction" },
   
];

const formLayout6: formLayoutProps[] = [
    
    { label: "Did the reaction reappear when a placebo was given?", name: "didTheReactionReappearWhenAPlaceboWasGiven" },
    
];


const formLayout7: formLayoutProps[] = [
    { label: "Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?", name: "wasTheDrugDetectedInTheBloodInAConcentrationKnownToBeToxic" },
    { label: "Was the reaction more severe when the dose was increased or less severe when the dose was decreased?", name: "wasTheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased" },
    { label: "Did the patient have a similar reaction to the same or similar drugs in any previous exposure?", name: "didThePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure" },
    { label: "Was the adverse event confirmed by objective evidence?", name: "wasTheAdverseEventConfirmedByObjectiveEvidence" },
];

export { formLayout1,formLayout2,formLayout3,formLayout4,formLayout5,formLayout6,formLayout7, RadioOptionss1,RadioOptionss2,RadioOptionss3,RadioOptionss4 };
