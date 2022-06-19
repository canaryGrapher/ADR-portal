import { prop } from "@typegoose/typegoose";

const options = ["1", "2", "3", "4", "5", "6", "7"]

export default class Form1Page3b3 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public hartwigseveritytest?: String;
}