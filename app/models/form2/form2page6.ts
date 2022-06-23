import { prop } from "@typegoose/typegoose";

const gender = ["Male", "Female", "Other", null]
const options = ["Yes", "No", null]

export default class Form2Page6 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String })
    public patientHospitalNumber?: String;

    @prop({ type: String })
    public patientInitials?: String;

    @prop({ type: Number })
    public age?: Number;

    @prop({ type: Number })
    public weight?: Number;

    @prop({ type: String, enum: gender })
    public gender?: String;

    @prop({ type: String })
    public history?: String;

    @prop({ type: String, enum: options })
    public patientRecovered?: String;

    @prop({ type: Date })
    public dateOfRecovery?: Date;

    @prop({ type: String, enum: options })
    public patientDead?: String;

    @prop({ type: Date })
    public dateOfDeath?: Date;

    @prop({ type: String })
    public otherPatientOutcomes?: String;
}