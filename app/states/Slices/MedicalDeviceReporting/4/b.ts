import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/4/b";

const initialState: FormStateType = {
    name: null,
    licenseNumber: null,
    address: null
}

export const form2page4bSlice = createSlice({
    name: 'form2page4b',
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

export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form2page4bSlice.actions

export default form2page4bSlice.reducer;
