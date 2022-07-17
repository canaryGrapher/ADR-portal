import Forms1Model from "~/models/form1.model"
import LoginModel from "~/models/login.model"

/**
 * @function initiateForm1 - Delete a form 1 if it exists
 * @param user Email of the user
 * @param formID ObjectId of the form
 * @returns ObjectId of the deleted form
 */
const deleteForm1 = async (user: string, formID: string) => {
    try {
        // find the document and delete it
        const form1Exists = await Forms1Model.findOneAndDelete({ user: user, _id: formID })
        if (form1Exists) {
            await LoginModel.findOneAndUpdate({ email: user }, { currentFormOne: "" })
            return form1Exists._id
        } else {
            return null
        }
    }
    catch (error) {
        return error
    }
}


export { deleteForm1 }