import Forms2Model from "~/models/form2.model"

const addToForm = async (user: string, formID: string, formInput: any) => {
    try {
        console.log("Incoming form data: ")
        console.log(user, formID, formInput)
        const form2Pointer = await Forms2Model.findOne({ user: user, _id: formID })
        console.log("Form2pointer: ", form2Pointer)
        if (form2Pointer) {
            // update form2.form2Page1 based on formInput
            const sanitizedFormInput = { ...formInput, isComplete: true };
            console.log("Sanitized form input: ", sanitizedFormInput)
            form2Pointer.form2Page1 = sanitizedFormInput;
            form2Pointer.save().then(() => {
                console.log("Form 2 page 1 updated")
            }
            ).catch(error => {
                console.log(error)
            })
            return "Form 2 Page 1 modified successfully"
        } else {
            return "Form 2 does not exist"
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
        const form2Pointer = await Forms2Model.findOne({ user: user, _id: formID })
        if (form2Pointer) {
            return form2Pointer.form2Page1
        } else {
            return "Form 2 Page 1 does not exist"
        }
    }
    catch (error) {
    }
}


export { addToForm, getForm }
