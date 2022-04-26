import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/7"

const initialState: FormStateType = {
     name: undefined,
    address: undefined,
    contactNumber:null,
    telephoneNumber:null
}

export const form3page7Slice = createSlice({
    name: 'form3page7',
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
        },
    },
})

// Action creators are generated for each case reducer function
export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form3page7Slice.actions

export default form3page7Slice.reducer