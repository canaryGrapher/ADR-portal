import { prop } from "@typegoose/typegoose";

export default class Form2Page7 {
    @prop({ type: String })
    public name?: String;

    @prop({ type: String })
    public address?: String;

    @prop({ type: Number })
    public contactNumber?: Number;

    @prop({ type: Number })
    public telephoneNumber?: Number;
}