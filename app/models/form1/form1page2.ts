import { prop } from "@typegoose/typegoose";

export default class Form1Page2 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public dateOfReactionStarted!: String;

    @prop({ type: Date })
    public dateOfRecovery?: Date;

    @prop({ type: String, required: true })
    public reactionDescription!: String;
}