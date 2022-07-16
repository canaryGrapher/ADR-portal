import { getModelForClass, mongoose, prop } from "@typegoose/typegoose";

class Login {
    _id?: mongoose.Types.ObjectId;

    @prop({ type: String, required: true })
    public email!: string;

    @prop({ type: String, required: true })
    public type!: string;

    @prop({ type: String, required: true })
    public password!: string;

    @prop({ type: String, required: true })
    public firstName!: string;

    @prop({ type: String, required: true })
    public lastName!: string;

    @prop({ type: String || null, default: null })
    public currentFormOne?: string | null;

    @prop({ type: [mongoose.Types.ObjectId] })
    public completedFormsOne?: [mongoose.Types.ObjectId];

    @prop({ type: String || null, default: null })
    public currentFormTwo?: string | null;

    @prop({ type: [mongoose.Types.ObjectId] })
    public completedFormsTwo?: [mongoose.Types.ObjectId];
}

const LoginModel = getModelForClass(Login);
export default LoginModel;