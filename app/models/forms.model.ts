import { mongoose, prop } from "@typegoose/typegoose";

// importing subform models
import Form1Page1Schema from './forms/form1page1';
import Form1Page2 from "./forms/form1page2"

export default class Forms {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: String, required: true })
    public user!: String;

    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: Form1Page1Schema })
    public form1Page1?: Form1Page1Schema;

    @prop({ type: Form1Page2 })
    public form1Page2?: Form1Page2;
}



