import { prop } from "@typegoose/typegoose";

export default class Form2Page8 {
    @prop({ type: String })
    public investgationAction?: String;

    @prop({ type: String })
    public rootCause?: String;
}