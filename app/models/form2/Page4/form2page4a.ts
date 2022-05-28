import { prop } from "@typegoose/typegoose";

export default class Form2Page4a {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String })
    public name?: String;

    @prop({ type: Date })
    public licenseNumber?: Date;

    @prop({ type: String })
    public address?: String;
}