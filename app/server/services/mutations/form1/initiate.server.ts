import LoginModel from "~/models/login.model"
import Forms1Model from "~/models/form1.model"

const intiateForm1 = async (user: string) => {
    try {
        // check if a form1 already exists for this user that is not complete
        const form1Exists = await Forms1Model.findOne({ user: user, isComplete: false })
        // if form1 does not exist, create a new one
        if (!form1Exists) {
            const form = new Forms1Model({
                user: user,
                isComplete: false,
            })
            await form.save()
            return form._id.toString()
        } else {
            // if form1 exists, return the id of the form1
            await LoginModel.findOne({ email: user })
            return form1Exists._id.toString()
        }
    }
    catch (error) {
        return error
    }
}


export { intiateForm1 }