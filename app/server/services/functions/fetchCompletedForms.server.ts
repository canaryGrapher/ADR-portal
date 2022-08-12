import Forms1Model from "~/models/form1.model"
import Forms2Model from "~/models/form2.model";

/**
 * @function getCompletedForms1
 * @param user email address of the user
 * @returns array of form1 data
 */
const getCompletedForm1 = async (user: string) => {
    try {
        const form1Pointer = await Forms1Model.find({ user: user, isComplete: true }).select({ _id: 1, isApproved: 1 })
        if (form1Pointer) {
            return form1Pointer
        } else {
            return []
        }
    }
    catch (error) {
    }
}

/**
 * @function getCompletedForms2
 * @param user email address of the user
 * @returns array of form2 data
 */
const getCompletedForm2 = async (user: string) => {
    try {
        const form2Pointer = await Forms2Model.find({ user: user, isComplete: true }).select({ _id: 1, isApproved: 1 })
        if (form2Pointer) {
            return form2Pointer
        } else {
            return []
        }
    }
    catch (error) {
    }
}

/**
 * @function getCompletedForms1
 * @param user email address of the user
 * @returns array of form1 data
 */
const getCompletedForm1Data = async (user: string) => {
    try {
        const form1Pointer = await Forms1Model.find({ user: user, isComplete: true })
        if (form1Pointer) {
            return form1Pointer
        } else {
            return []
        }
    }
    catch (error) {
    }
}

export { getCompletedForm1, getCompletedForm2, getCompletedForm1Data }
