import { prop, PropType } from "@typegoose/typegoose";

export default class Form2Page3 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public deviceCategory!: String;

    @prop({ type: String })
    typeOfDevice?: String;

    @prop({ type: String })
    implantability?: String;

    @prop({ type: String })
    reuseability?: String;

    @prop({ type: String })
    sterilization?: String;

    @prop({ type: Boolean })
    public personalUse?: Boolean;

    @prop({ type: () => String }, PropType.ARRAY)
    public inVitroDiagnostic?: String[];

    @prop({ type: String },)
    public equipmentUsage?: String;

    @prop({ type: String })
    public invasibility?: String;

    @prop({ type: Boolean })
    imaging?: Boolean;

    @prop({ type: Boolean })
    others?: Boolean;

    @prop({ type: String })
    reportersComments?: String;
}