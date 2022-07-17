import LoginModel from "~/models/login.model"
import Forms2Model from "~/models/form2.model"

/**
 * @function initiateForm2 - Initiate a new form 2 if no incomplete form 1 exists
 * @param user Email of the user
 * @returns ObjectId of the new form / existing form
 */
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