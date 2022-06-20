import { prop } from "@typegoose/typegoose";

export default class Form2Page4c {
    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: String })
    public name?: String;

    @prop({ type: String })
    public licenseNumber?: String;

    @prop({ type: String })
    public address?: String;
}