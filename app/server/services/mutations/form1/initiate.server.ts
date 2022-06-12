import LoginModel from "~/models/login.model"
import Forms1Model from "~/models/form1.model"

const intiateForm1 = async (user: string) => {
    try {
        const form1Exists = await Forms1Model.findOne({ user: user, isComplete: false })
        if (!form1Exists) {
            const form = new Forms1Model({
                user: user,
                isComplete: false,
            })
            await form.save()
            const data = await LoginModel.findOneAndUpdate({ email: user }, { currentFormOne: form._id })
            console.log("Form 1 initiated successfully: ", data)
            return form._id.toString()
        } else {
            await LoginModel.findOneAndUpdate({ email: user }, { currentFormOne: form1Exists._id })
            return form1Exists._id.toString()
        }
    }
    catch (error) {
        return error
    }
}


export { intiateForm1 }