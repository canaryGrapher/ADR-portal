import { prop, mongoose } from "@typegoose/typegoose";

export default class Form1Page2 {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: Boolean, required: true, default: false })
    public isComplete!: Boolean;

    @prop({ type: String, required: true })
    public dateOfReactionStarted!: String;

    @prop({ type: String })
    public dateOfRecovery?: String;

    @prop({ type: String, required: true })
    public reactionDescription!: String;
}