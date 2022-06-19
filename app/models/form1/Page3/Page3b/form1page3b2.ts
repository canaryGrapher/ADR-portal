import { prop } from "@typegoose/typegoose";

const options = ["certain",
    "probably/likely",
    "possible",
    "unlikely",
    "conditional/unclassified",
    "un-assessable/un-classifiable"]

export default class Form1Page3b2 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public whoProbabiltyScale?: String;
}