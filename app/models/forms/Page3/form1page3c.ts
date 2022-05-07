import { prop } from "@typegoose/typegoose";

const options = ["Specific", "Symptomatic", "None"]

export default class Form1Page3c {
    @prop({ type: String, enum: options })
    public predisposingFactors?: String[];

    @prop({ type: String })
    public treatmentDetails?: String;
}