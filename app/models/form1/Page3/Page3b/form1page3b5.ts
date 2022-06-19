import { prop, PropType } from "@typegoose/typegoose";

const options = ["predictable", "notPredictable"]


export default class Form1Page3b5 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public predictability?: String;

    @prop({ type: () => String }, PropType.ARRAY)
    public preDisposingFactors?: String[];

    @prop({ type: String })
    public otherInformation?: String;
}