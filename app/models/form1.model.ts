import { mongoose, prop } from "@typegoose/typegoose";

// importing subform models
import Form1Page1 from './form1/form1page1';
import Form1Page2 from "./form1/form1page2"
import Form1Page3 from "./form1/form1page3";
import Form1Page4 from "./form1/form1page4";

export default class Forms1 {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: String, required: true })
    public user!: String;

    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: Form1Page1 })
    public form1Page1?: Form1Page1;

    @prop({ type: Form1Page2 })
    public form1Page2?: Form1Page2;

    @prop({ type: Form1Page3 })
    public form1Page3?: Form1Page3;

    @prop({ type: Form1Page4 })
    public form1Page4?: Form1Page4;
}



