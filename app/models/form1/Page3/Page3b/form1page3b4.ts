import { prop } from "@typegoose/typegoose";

const options = ["Yes", "No", null]
const options2 = ["Definitely Preventable", "Probably Preventable", "Not Preventable", null]

export default class Form1Page3b4 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public wasThereAHistoryOfAllergyOrPreviousReactionsToTheDrug?: String;

    @prop({ type: String, enum: options })
    public wasTheDrugInvolvedInappropriateForThePatientSClinicalCondition?: String;

    @prop({ type: String, enum: options })
    public wasTheDoseRouteOrFrequencyOfAdministrationInappropriateForThePatientSAgeWeightOrDiseaseState?: String;

    @prop({ type: String, enum: options })
    public wasAToxicSerumDrugConcentrationOrLaboratoryMonitoringTestDocumented?: String;

    @prop({ type: String, enum: options })
    public wasThereAKnownTreatmentForTheAdverseDrugReaction?: String;

    @prop({ type: String, enum: options })
    public wasRequiredTherapeuticDrugMonitoringOrOtherNecessaryLabTestsNotPerformed?: String;

    @prop({ type: String, enum: options })
    public wasADrugInteractionInvolvedInTheAdr?: String;
}