import LoginModel from "~/models/login.model"
import Forms2Model from "~/models/form2.model"

const intiateForm2 = async (user: string) => {
    try {
        const form2Exists = await Forms2Model.findOne({ user: user, isComplete: false })
        if (!form2Exists) {
            const form = new Forms2Model({
                user: user,
                isComplete: false,
            })
            await form.save()
            const data = await LoginModel.findOneAndUpdate({ email: user }, { currentFormTwo: form._id })
            console.log("Form 2 initiated successfully: ", data)
            return form._id.toString()
        } else {
            const data = await LoginModel.findOneAndUpdate({ email: user }, { currentFormTwo: form2Exists._id })
            return form2Exists._id.toString()
        }
    }
    catch (error) {
        return error
    }
}


export { intiateForm2 }