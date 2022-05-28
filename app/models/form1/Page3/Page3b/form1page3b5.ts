import { prop } from "@typegoose/typegoose";

const options = ["Predictable", "Not Predictable"]
const options2 = ["Age", "Gender", "Genetic", "Inter-current disease", "Multiple Drug Therapy", "Other"]

export default class Form1Page3b5 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public predictability?: String;

    @prop({ type: String, enum: options2 })
    public predisposingFactors?: String[];

    @prop({ type: String })
    public others?: String;
}