import { prop } from "@typegoose/typegoose";

const locations = ["Hospital Premises", "Manufacturer Premise", "Home", "Others"];
const deviceLocation = ["Returned to the company", "Implanted in patient", "Within the facility", "At patient home", "Destroyed", "Others"];
const reason = ["Death", "Life Threatening", "Disability", "Hospitalization", "Congenital Anomaly", "Any medical event", "Permanent Impairment"];
const deviceOperator = ["Healthcare professional", "Patient", "Problem noted before use", "Others"];

export default class Form2Page5 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: Date })
    public dateOfEvent?: Date;

    @prop({ type: Date })
    public dateOfImplant?: Date;

    @prop({ type: String, enum: locations })
    public locationOfEvent?: String;

    @prop({ type: String, enum: deviceOperator })
    public deviceOperator?: String;

    @prop({ type: String, enum: deviceLocation })
    public deviceLocation?: String;

    @prop({ type: Date })
    public dateOfReturn?: Date;

    @prop({ type: Boolean })
    public seriousEvent?: Boolean;

    @prop({ type: String, enum: reason })
    public reason?: String;

    @prop({ type: Date })
    public dateOfDeath?: Date;

    @prop({ type: Boolean })
    public isDeviceInUse?: Boolean;

    @prop({ type: String })
    public detailedDescription?: string;

    @prop({ type: Number })
    public year?: Number;

    @prop({ type: Number })
    public numberOfSimilarIndia?: Number;

    @prop({ type: Number })
    public totalNumberSuppliedIndia?: Number;

    @prop({ type: String })
    public frequencyIndia?: String;

    @prop({ type: Number })
    public yearGlobal?: Number;

    @prop({ type: Number })
    public numberOfSimilarGlobal?: Number;

    @prop({ type: Number })
    public totalNumberSuppliedGlobal?: Number;

    @prop({ type: String })
    public frequencyGlobal?: String;
}