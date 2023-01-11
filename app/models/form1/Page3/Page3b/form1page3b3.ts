import { prop, PropType } from "@typegoose/typegoose";

const options = ["Level 1", "Level 2", "Level 3", "Level 4(a)", "Level 4(b)", "Level 5", "Level 6", "Level 7"]

export default class Form1Page3b3 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: () => String, enum: options }, PropType.ARRAY)
    public hartwigseveritytest?: String[];
}