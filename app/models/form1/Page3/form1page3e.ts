import { prop, PropType } from "@typegoose/typegoose";

const options = ["Congenital-anomaly", "Life Threatening", "Hospitalized/Prolonged", "Disability", "Required intervention to Prevent permanent impairment/damage", "Death", "Other (Mention below)"]
const options2 = ["Recovered", "Recovering", "Not Recovered", "Fatal", "Recovered with sequelae", "Unknown"]

export default class Form1Page3e {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: Boolean })
    public applicability?: Boolean;

    @prop({ type: String })
    public amcReportNumber?: String;

    @prop({ type: String })
    public worldwideUniqueNumber?: String;

    @prop({ type: String })
    public relevantTests?: String;

    @prop({ type: String })
    public relevantMedicalHistory?: String;

    @prop({ type: Boolean })
    public seriousnessOfTheReaction: Boolean;

    @prop({ type: () => String }, PropType.ARRAY)
    public seriousnessLevel?: String[];

    @prop({ type: Date })
    public dateOfDeath: Date;

    @prop({ type: String })
    public otherDetails: String;

    @prop({ type: String, enum: options2 })
    public outcome: String;
}