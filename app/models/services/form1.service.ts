import { getModelForClass } from "@typegoose/typegoose";
import Forms from "../form1.model";

const FormModel = getModelForClass(Forms);

export async function intializeForms(): Promise<any> {
    const formItems = await FormModel.create({ user: "ffw3f32f32f", isComplete: false });
    return formItems;
}