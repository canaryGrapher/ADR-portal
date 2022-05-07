import { prop } from "@typegoose/typegoose";

const options = ["Congenital-anomaly", "Life Threatening", "Hospitalized/Prolonged", "Disability", "Required intervention to Prevent permanent impairment/damage", "Death", "Other (Mention below)"]
const options2 = ["Recovered", "Recovering", "Not recovered", "Fatal", "Recovered with sequelae", "Unknown"]

export default class Form1Page3e {
    @prop({ type: Boolean })
    public applicability?: Boolean;

    @prop({ type: String })
    public AMCReportNumber?: String;

    @prop({ type: String })
    public worldwideUniqueNumber?: String;

    @prop({ type: String })
    public relevantTestData?: String;

    @prop({ type: String })
    public relevantMedicalHistory?: String;

    @prop({ type: Boolean })
    public seriousReaction: Boolean;

    @prop({ type: String, enum: options })
    public seriousLevel?: String[];

    @prop({ type: Date })
    public dateOfDeath: Date;

    @prop({ type: String })
    public otherDetails: String;

    @prop({ type: String, enum: options2 })
    public outcome: String;
}