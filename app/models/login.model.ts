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

}

const LoginModel = getModelForClass(Login);
export default LoginModel;