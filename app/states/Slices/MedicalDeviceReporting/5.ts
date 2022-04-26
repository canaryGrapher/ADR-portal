import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/5";

const initialState: FormStateType = {
    dateOfEvent: null,
    dateOfImplant: null,
    locationOfEvent: null,
    deviceOperator: null,
    deviceLocation: null,
    dateOfReturn: null,
    seriousEvent: null,
    reason: null,
    dateOfDeath: null,
    isDeviceInUse: null,
    detailedDescription: undefined,
    year: null,
    numberOfSimilarIndia: null,
    totalNumberSuppliedIndia: null,
    frequencyIndia: undefined,
    numberOfSimilarGlobal: null,
    totalNumberSuppliedGlobal: null,
    frequencyGlobal: undefined,
}

export const form3page5Slice = createSlice({
    name: 'form3page5',
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

export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form3page5Slice.actions

export default form3page5Slice.reducer;