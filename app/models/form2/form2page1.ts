import { prop } from "@typegoose/typegoose";

const options = ["Initial", "Follow-up", "Final", "Trend"];

export default class Form2Page1 {
    @prop({ type: String })
    public reporterReferenceNumber?: String;

    @prop({ type: Date })
    public dateOfReport?: Date;

    @prop({ type: String, enum: options })
    public typeOfReport?: String;
}