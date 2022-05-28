import { prop } from "@typegoose/typegoose"

const availableActions = ["Dose reduced", "Dose increased", "Drug withdrawn", "Dose not changed", "Not applicable", "Unknown"]
const availableActions2 = ["No rechallenge", "Recurrence of symptoms", "No occurance of symptomps", "Unknown"]

export default class Form1Page3a {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public nameOfDrug!: String;

    @prop({ type: String })
    public manufacturer?: String;

    @prop({ type: String })
    public BatchNo_LotNo?: String;

    @prop({ type: String })
    public expDate?: String;

    @prop({ type: Number })
    public doseUsed?: Number;

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
    public dateStopped?: String;

    @prop({ type: String })
    public indication?: String;

    @prop({ type: String, enum: availableActions })
    public actionTaken?: String;

    @prop({ type: String, enum: availableActions })
    public dechallenge?: String;

    @prop({ type: String, enum: availableActions })
    public rechallenge?: String;

    @prop({ type: String, enum: availableActions2 })
    public reactionReappearedAction?: String;

    @prop({ type: String })
    public reactionReappearedDose?: String;
}