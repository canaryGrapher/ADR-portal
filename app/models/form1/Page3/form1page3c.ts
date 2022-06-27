import { prop, PropType } from "@typegoose/typegoose";

export default class Form1Page3c {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: () => String }, PropType.ARRAY)
    public treatmentGiven?: String[];

    @prop({ type: String })
    public treatmentDetails?: String;
}