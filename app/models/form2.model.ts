import { mongoose, prop } from "@typegoose/typegoose";

// importing subform models
import Form1Page1 from './form2/form2page1';
import Form1Page2 from "./form2/form2page2"
import Form1Page3 from "./form2/form2page3";
import Form1Page4 from "./form2/form2page4";
import Form1Page5 from "./form2/form2page5";
import Form1Page6 from "./form2/form2page6";
import Form1Page7 from "./form2/form2page7";
import Form1Page8 from "./form2/form2page8";
import Form1Page9 from "./form2/form2page9";

export default class Forms2 {
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

    @prop({ type: Form1Page5 })
    public form1Page5?: Form1Page5;

    @prop({ type: Form1Page6 })
    public form1Page6?: Form1Page6;

    @prop({ type: Form1Page7 })
    public form1Page7?: Form1Page7;

    @prop({ type: Form1Page8 })
    public form1Page8?: Form1Page8;

    @prop({ type: Form1Page9 })
    public form1Page9?: Form1Page9;
}



