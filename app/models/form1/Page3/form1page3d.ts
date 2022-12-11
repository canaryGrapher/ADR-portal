import { prop, PropType, mongoose } from "@typegoose/typegoose";

class Form1Page3dData {

    @prop({ type: String, required: true })
    public name!: String;

    @prop({ type: String })
    public doseUsed?: String;

    @prop({ type: String })
    public routeUsed?: String;

    @prop({ type: String })
    public otherRouteUsed?: String;

    @prop({ type: String })
    public frequency?: String;

    @prop({ type: String })
    public otherFrequency?: String;

    @prop({ type: Date, required: true })
    public startDate!: Date;

    @prop({ type: Date })
    public stopDate?: Date;

    @prop({ type: String })
    public Indication?: String;
}

export default class Form1Page3d {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: () => Form1Page3dData }, PropType.ARRAY)
    public drugDetails?: Form1Page3dData[];
}