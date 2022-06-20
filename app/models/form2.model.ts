import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

// importing subform models
import Form2Page1 from './form2/form2page1';
import Form2Page2 from "./form2/form2page2"
import Form2Page3 from "./form2/form2page3";
import Form2Page4 from "./form2/form2page4";
import Form2Page5 from "./form2/form2page5";
import Form2Page6 from "./form2/form2page6";
import Form2Page7 from "./form2/form2page7";
import Form2Page8 from "./form2/form2page8";
import Form2Page9 from "./form2/form2page9";

class Forms2 {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: String, required: true })
    public user!: String;

    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: Form2Page1 })
    public form2Page1?: Form2Page1;

    @prop({ type: Form2Page2 })
    public form2Page2?: Form2Page2;

    @prop({ type: Form2Page3 })
    public form2Page3?: Form2Page3;

    @prop({ type: Form2Page4 })
    public form2Page4?: Form2Page4;

    @prop({ type: Form2Page5 })
    public form2Page5?: Form2Page5;

    @prop({ type: Form2Page6 })
    public form2Page6?: Form2Page6;

    @prop({ type: Form2Page7 })
    public form2Page7?: Form2Page7;

    @prop({ type: Form2Page8 })
    public form2Page8?: Form2Page8;

    @prop({ type: Form2Page9 })
    public form2Page9?: Form2Page9;
}

const Forms2Model = getModelForClass(Forms2);
export default Forms2Model;