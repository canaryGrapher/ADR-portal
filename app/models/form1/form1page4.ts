import { prop } from "@typegoose/typegoose";

export default class Form1Page4 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public name!: String;

    @prop({ type: String })
    public IDnumber?: String;

    @prop({ type: String })
    public PIN?: String;

    @prop({ type: String, required: true })
    public emailID!: String;

    @prop({ type: Number, required: true })
    public TelephoneNumber!: Number;

    @prop({ type: String })
    public profAddress?: String;

    @prop({ type: String })
    public occupation?: String;

    @prop({ type: String })
    public department?: String;

    @prop({ type: Date })
    public dateOfThisReport?: Date;

    @prop({ type: String })
    public references?: String;

    @prop({ type: String })
    public reportersComment?: String;
}