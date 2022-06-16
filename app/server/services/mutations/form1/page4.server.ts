import Forms1Model from "~/models/form1.model"

const addToForm = async (user: string, formID: string, formInput: any) => {
    try {
        console.log(user, formID, formInput)
        const form1Pointer = await Forms1Model.findOne({ user: user, _id: formID })
        if (form1Pointer) {
            // update form1.form1Page4 based on formInput
            const sanitizedFormInput = { ...formInput, isComplete: true };
            form1Pointer.form1Page4 = sanitizedFormInput;
            console.log("Sanitized form data: ", form1Pointer)
            form1Pointer.save().then(() => {
                console.log("Form 1 page 2 updated")
            }
            ).catch(error => {
                console.log(error)
            })
            return "Form 1 Page 2 modified successfully"
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
            return form1Pointer.form1Page4
        } else {
            return "Form 1 Page 4 does not exist"
        }
    }
    catch (error) {
    }
}


export { addToForm, getForm }