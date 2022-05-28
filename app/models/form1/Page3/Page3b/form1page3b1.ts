import { prop } from "@typegoose/typegoose";

const options = ["Yes", "No", "Don't Know"]

export default class Form1Page3b1 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public areTherePreviousConclusionReportsOnThisReaction?: String;

    @prop({ type: String, enum: options })
    public didTheAdverseEventAppearAfterTheSuspectDrugWasAdministered?: String;

    @prop({ type: String, enum: options })
    public didTheARImproveWhenTheDrugWasDiscontinuedOrASpecificAntagonistWasAdministered?: String;

    @prop({ type: String, enum: options })
    public didTheARReappearWhenDrugWasReadministered?: String;

    @prop({ type: String, enum: options })
    public areThereAlternateCausesThatCouldSolelyHaveCausedTheReaction?: String;

    @prop({ type: String, enum: options })
    public didTheReactionReappearWhenAPlaceboWasGiven?: String;

    @prop({ type: String, enum: options })
    public wasTheDrugDetectedInTheBloodInAConcentrationKnownToBeToxic?: String;

    @prop({ type: String, enum: options })
    public wasTheReactionMoreSevereWhenTheDoseWasIncreasedOrLessSevereWhenTheDoseWasDecreased?: String;

    @prop({ type: String, enum: options })
    public didThePatientHaveASimilarReactionToTheSameOrSimilarDrugsInAnyPreviousExposure?: String;

    @prop({ type: String, enum: options })
    public wasTheAdverseEventConfirmedByObjectiveEvidence?: String;
}