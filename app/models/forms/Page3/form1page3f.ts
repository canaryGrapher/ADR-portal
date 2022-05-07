import { prop } from "@typegoose/typegoose";

const options = ["Fatal", "Recovery", "Continuing", "Unknown", "Other"]

export default class Form1Page3f {
    @prop({ type: String, enum: options })
    public outcome?: String;
}