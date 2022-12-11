import { prop } from "@typegoose/typegoose";

export default class Form1Page4 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public name!: String;

    @prop({ type: String })
    public idNumber?: String;

    @prop({ type: String })
    public pin?: String;

    @prop({ type: String, required: true })
    public email!: String;

    @prop({ type: Number, required: true })
    public telephoneNumber!: Number;

    @prop({ type: String })
    public profAddress?: String;

    @prop({ type: String })
    public occupation?: String;

    @prop({ type: String })
    public otherOccupation?: String;

    @prop({ type: String })
    public department?: String;

    @prop({ type: Date })
    public dateOfThisReport?: Date;

    @prop({ type: String })
    public references?: String;

    @prop({ type: String })
    public reportersComment?: String;
}