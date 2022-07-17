import Forms2Model from "~/models/form2.model"
import LoginModel from "~/models/login.model"

/**
 * @function initiateForm2 - Delete a form 2 if it exists
 * @param user Email of the user
 * @param formID ObjectId of the form
 * @returns ObjectId of the deleted form
 */
const deleteForm2 = async (user: string, formID: string) => {
    try {
        // find the document and delete it
        const form2Exists = await Forms2Model.findOneAndDelete({ user: user, _id: formID })
        if (form2Exists) {
            await LoginModel.findOneAndUpdate({ email: user }, { currentFormTwo: "" })
            return form2Exists._id
        } else {
            return null
        }
    }
    catch (error) {
        return error
    }
}


export { deleteForm2 }