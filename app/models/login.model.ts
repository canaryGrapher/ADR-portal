import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

class Login {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: String, required: true })
    public email!: String;

    @prop({ type: String, required: true })
    public password!: String;

    @prop({ type: String, required: true })
    public firstName!: String;

    @prop({ type: String, required: true })
    public lastName!: String;

    @prop({ type: String || null, default: null })
    public currentFormOne?: String | null;

    @prop({ type: [mongoose.Types.ObjectId] })
    public completedFormsOne?: [mongoose.Types.ObjectId];

    @prop({ type: String || null, default: null })
    public currentFormTwo?: String | null;

    @prop({ type: [mongoose.Types.ObjectId] })
    public completedFormsTwo?: [mongoose.Types.ObjectId];
}

const LoginModel = getModelForClass(Login);
export default LoginModel;