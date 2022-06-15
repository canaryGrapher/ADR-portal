import { clean } from "../../functions/clean"
import Forms1Model from "~/models/form1.model"

const addToForm = async (user: string, formID: string, formInput: any) => {
    try {
        console.log("Incoming form data: ")
        console.log(user, formID, formInput)
        const form1Pointer = await Forms1Model.findOne({ user: user, _id: formID })
        if (form1Pointer) {
            // update form1.form1Page1 based on formInput
            const sanitizedFormInput = clean({ ...formInput, isComplete: true });
            form1Pointer.form1Page1 = sanitizedFormInput;
            form1Pointer.save().then(() => {
                console.log("Form 1 page 1 updated")
            }
            ).catch(error => {
                console.log(error)
            })
            return "Form 1 modified successfully"
        } else {
            return "Form 1 does not exist"
        }
    }
    catch (error) {
        console.log("Error catch mein aaya re baba")
        console.log(error)
        return error
    }
}

const getForm = async (user: string, formID: string) => {
    try {
        const form1Pointer = await Forms1Model.findOne({ user: user, _id: formID })
        if (form1Pointer) {
            return form1Pointer.form1Page1
        } else {
            return "Form 1 does not exist"
        }
    }
    catch (error) {
    }
}


export { addToForm, getForm }


// {
//     patientInitials: 'John Doe',
//     gender: 'male',
//     age: 24,
//     weight: 76,
//     preferredTags: ["JavaScipt", "Rails", "AWS"]
// }

