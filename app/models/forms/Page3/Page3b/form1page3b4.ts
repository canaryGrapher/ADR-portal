import { prop } from "@typegoose/typegoose";

const options = ["Yes", "No"]
const options2 = ["Definitely Preventable", "Probably Preventable", "Not Preventable"]

export default class Form1Page3b4 {
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

    @prop({ type: String, enum: options2 })
    public finalResult?: String
}