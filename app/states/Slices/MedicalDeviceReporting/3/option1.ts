import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/3/option1";

const initialState: FormStateType = {
    typeOfDevice: null,
    implantability: null,
    reuseability: null,
    sterilization: null,
    personalUse: null
}

export const form2page3Option1Slice = createSlice({
    name: 'form2page3Option1',
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

// Action creators are generated for each case reducer function
export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form2page3Option1Slice.actions

export default form2page3Option1Slice.reducer