import { prop } from "@typegoose/typegoose";

const locations = ["Hospital Premise", "Manufacturer Premise", "Home", "Others", null];
const deviceLocation = ["Returned to the company", "Implanted in patient", "Within the facility", "At patient home", "Destroyed", "Others", null];
const reason = ["Death", "Life Threatening", "Disability", "Hospitalization", "Congenital Anomaly", "Any medical event", "Permanent Impairment", null];
const deviceOperator = ["Healthcare professional", "Patient", "Problem noted before use", "Others", null];

export default class Form2Page5 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String })
    public dateOfEvent?: String;

    @prop({ type: String })
    public dateOfImplant?: String;

    @prop({ type: String, enum: locations })
    public locationOfEvent?: String;

    @prop({ type: String, enum: deviceOperator })
    public deviceOperator?: String;

    @prop({ type: String, enum: deviceLocation })
    public deviceLocation?: String;

    @prop({ type: String })
    public dateOfReturn?: String;

    @prop({ type: String })
    public seriousEvent?: String;

    @prop({ type: String, enum: reason })
    public reason?: String;

    @prop({ type: String })
    public dateOfDeath?: String;

    @prop({ type: String })
    public isDeviceInUse?: String;

    @prop({ type: String })
    public detailedDescription?: string;

    @prop({ type: String })
    public year?: String;

    @prop({ type: Number })
    public numberOfSimilarIndia?: Number;

    @prop({ type: Number })
    public totalNumberSuppliedIndia?: Number;

    @prop({ type: String })
    public frequencyIndia?: String;

    @prop({ type: String })
    public yearGlobal?: String;

    @prop({ type: Number })
    public numberOfSimilarGlobal?: Number;

    @prop({ type: Number })
    public totalNumberSuppliedGlobal?: Number;

    @prop({ type: String })
    public frequencyGlobal?: String;
}