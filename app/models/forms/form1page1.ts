import { prop } from '@typegoose/typegoose';

const genders = ["Male", "Female", "Other"]

export default class Form1Page1 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public patientInitials!: String;

    @prop({ type: String })
    public DateOfBirth?: String;

    @prop({ type: String, required: true })
    public ageOfOnset!: String;

    @prop({ type: String, enum: genders })
    public gender?: String;

    @prop({ type: Number })
    public weight?: Number;

    @prop({ type: String })
    public patientID?: String;

    @prop({ type: String })
    public ip_op?: String;

    @prop({ type: String })
    public unit?: String;

    @prop({ type: String })
    public reasonForTakingMedication?: String;

    @prop({ type: String })
    public medicineAdvised?: String;

    @prop({ type: String })
    public knownAllergies?: String;

    @prop({ type: String })
    public socialHistory?: String;
}

