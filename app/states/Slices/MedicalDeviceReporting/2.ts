import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/2";

const initialState: FormStateType = {
    typeOfReporter: undefined,
    ifOthers: undefined,
    hasTheReporterInformedTheIncidentToTheManufacturer: null,
    isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer: null,
    name: undefined,
    phoneNumber: undefined,
    emailId: undefined,
    address: undefined
}

export const form3page2Slice = createSlice({
    name: 'form3page2',
    initialState,
    reducers: {
        fetchIncompleteFormsFromUserProfile: (state, action: PayloadAction<FormStateType>) => {
            // Add logic to fetch incomplete/complete form data from backend API
            state = action.payload
        },
        submitFormDataToTheBackend: (state) => {
            // Add logic to submit form data to the backend API when the form is submitted
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state[action.payload.fieldName] = action.payload.value
        }
    }
});

export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form3page2Slice.actions

export default form3page2Slice.reducer;