import { prop } from "@typegoose/typegoose";

import Form2Page4a from "./Page4/form2page4a";
import Form2Page4b from "./Page4/form2page4b";
import Form2Page4c from "./Page4/form2page4c";
import Form2Page4d from "./Page4/form2page4d";

export default class Form2Page4 {
    @prop({ type: Form2Page4a })
    public form2page4a?: Form2Page4a;

    @prop({ type: Form2Page4b })
    public form2page4b?: Form2Page4b;

    @prop({ type: Form2Page4c })
    public form2page4c?: Form2Page4c;

    @prop({ type: Form2Page4d })
    public form2page4d?: Form2Page4d;
}