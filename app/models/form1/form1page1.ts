import { prop, mongoose } from '@typegoose/typegoose';

export default class Form1Page1 {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: String, required: true })
    public firstName!: String;

    @prop({ type: String, required: true })
    public lastName!: String;

    @prop({ type: String })
    public DateOfBirth?: String;

    @prop({ type: String, required: true })
    public ageOfOnset!: String;

    @prop({ type: String })
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
    public otherUnit?: String;

    @prop({ type: String })
    public reasonForTakingMedication?: String;

    @prop({ type: String })
    public medicineAdvised?: String;

    @prop({ type: String })
    public knownAllergies?: String;

    @prop({ type: String })
    public socialHistory?: String;
}

