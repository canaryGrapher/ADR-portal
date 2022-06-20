import { prop } from "@typegoose/typegoose";

export default class Form2Page8 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String })
    public investigationAction?: String;

    @prop({ type: String })
    public rootCause?: String;
}