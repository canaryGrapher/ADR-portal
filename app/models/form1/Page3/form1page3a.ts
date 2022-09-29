import { prop, mongoose, PropType } from "@typegoose/typegoose"

class Form1Page3aData {
    @prop({ type: Number, required: true })
    public identifier: number;

    @prop({ type: String, required: true })
    public nameOfDrug!: string;

    @prop({ type: String })
    public manufacturer?: string;

    @prop({ type: String })
    public BatchNo_LotNo?: string;

    @prop({ type: String })
    public routeUsed?: string;

    @prop({ type: String })
    public ip_op?: string;

    @prop({ type: String })
    public unit?: string;

    @prop({ type: String })
    public frequency?: string;

    @prop({ type: String, required: true })
    public dateStarted!: string;

    @prop({ type: String })
    public expDate?: string;

    @prop({ type: String })
    public dateStopped?: string;

    @prop({ type: String })
    public indication?: string;

    @prop({ type: String })
    public actionTaken?: string;

    @prop({ type: String })
    public dechallenge?: string;

    @prop({ type: String })
    public rechallenge?: string;

    @prop({ type: String })
    public reactionCategorization?: string;

    @prop({ type: String })
    public doseAfterReintroduction?: string;

    @prop({ type: Number })
    public doseUsed?: number;
}

export default class Form1Page3a {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: () => Form1Page3aData }, PropType.ARRAY)
    public drugDetails?: Form1Page3aData[];

}



