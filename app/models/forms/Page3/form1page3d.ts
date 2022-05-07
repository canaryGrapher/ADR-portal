import { prop } from "@typegoose/typegoose";

export default class Form1Page3d {
    @prop({ type: String, required: true })
    public name!: String;

    @prop({ type: String })
    public doseUsed?: String;

    @prop({ type: String })
    public routeUsed?: String;

    @prop({ type: String })
    public frequency?: String;

    @prop({ type: Date, required: true })
    public dateStarted!: Date;

    @prop({ type: Date })
    public dateStopped?: Date;

    @prop({ type: String })
    public Indication?: String;
}