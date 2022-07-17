import { prop, PropType } from "@typegoose/typegoose";


export default class Form1Page3e {
    @prop({ type: Boolean, required: true })
    public isComplete!: boolean;

    @prop({ type: Boolean })
    public applicability?: boolean;

    @prop({ type: String })
    public amcReportNumber?: string;

    @prop({ type: String })
    public worldwideUniqueNumber?: string;

    @prop({ type: String })
    public relevantTests?: string;

    @prop({ type: String })
    public relevantMedicalHistory?: string;

    @prop({ type: Boolean })
    public seriousnessOfTheReaction: boolean;

    @prop({ type: () => String }, PropType.ARRAY)
    public seriousnessLevel?: string[];

    @prop({ type: String })
    public dateOfDeath: string;

    @prop({ type: String })
    public otherDetails: string;

    @prop({ type: String })
    public outcome: string;
}