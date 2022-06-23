import { prop, mongoose, PropType } from "@typegoose/typegoose"

// const availableActions = ["Dose reduced", "Dose increased", "Drug withdrawn", "Dose not changed", "Not applicable", "Unknown"]
// const availableActions2 = ["No rechallenge", "Recurrence of symptoms", "No occurance of symptomps", "Unknown"]

class Form1Page3aData {
    @prop({ type: Number, required: true, unique: true })
    public identifier: number;

    @prop({ type: String, required: true })
    public nameOfDrug!: String;

    @prop({ type: String })
    public manufacturer?: String;

    @prop({ type: String })
    public BatchNo_LotNo?: String;

    @prop({ type: String })
    public routeUsed?: String;

    @prop({ type: String })
    public ip_op?: String;

    @prop({ type: String })
    public unit?: String;

    @prop({ type: String })
    public frequency?: String;

    @prop({ type: String, required: true })
    public dateStarted!: String;

    @prop({ type: String })
    public indication?: String;

    @prop({ type: String })
    public actionTaken?: String;

    @prop({ type: String })
    public dechallenge?: String;

    @prop({ type: String })
    public rechallenge?: String;

    @prop({ type: String })
    public reactionCategorization?: String;

    @prop({ type: String })
    public doseAfterReintroduction?: String;

    @prop({ type: String })
    public expDate?: String;

    @prop({ type: Number })
    public doseUsed?: number;

    @prop({ type: String })
    public dateStopped?: String;
}

export default class Form1Page3a {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: () => Form1Page3aData }, PropType.ARRAY)
    public drugDetails?: Form1Page3aData[];

}



