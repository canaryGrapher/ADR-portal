import Forms1Model from "~/models/form1.model"
import Forms2Model from "~/models/form2.model";

/**
 * @function getCompletedForms
 * @returns object containing form1 and form2 data
 */
const getCompletedForms = async () => {
    try {
        const form1Pointer = await Forms1Model.find({ isComplete: true }).select({ _id: 1, isApproved: 1 })
        const form2Pointer = await Forms2Model.find({ isComplete: true }).select({ _id: 1, isApproved: 1 })
        const forms = { form1Pointer, form2Pointer };

        if (forms) {
            return forms
        } else {
            return []
        }
    }
    catch (error) {
    }
}

export {getCompletedForms} 
