import Forms2Model from "~/models/form2.model"

const addToForm = async (user: string, formID: string, formInput: any) => {
    try {
        console.log(user, formID, formInput)
        let form2Pointer = await Forms2Model.findOne({ user: user, _id: formID })
        if (form2Pointer) {
            if (!form2Pointer.form2Page4) {
                // creating empty object if Page4 does not exist
                form2Pointer.form2Page4 = {}
            }
            if (!form2Pointer.form2Page4.form2page4b) {
                // creating empty object if Page4b does not exist
                form2Pointer.form2Page4.form2page4b = {}
            }
            form2Pointer.form2Page4.form2page4b = { isComplete: true, ...formInput }
            form2Pointer.save()
                .then(() => {
                    console.log("Form 2 page 4b updated")
                }
                ).catch(error => {
                    console.log(error)
                })
            return "Form 2 Page 4b modified successfully"
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
            const data = form2Pointer.form2Page4
            return data?.form2page4b
        } else {
            return "Form 2 Page 4b does not exist"
        }
    }
    catch (error) {
    }
}

export { addToForm, getForm }