import { prop } from "@typegoose/typegoose";

export default class Form2Page8 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String })
    public productOwnersDeviceRiskAnalysisReport?: String;

    @prop({ type: String })
    public correctiveActionTaken?: String;

    @prop({ type: String })
    public deviceHistoryReview?: String;
}