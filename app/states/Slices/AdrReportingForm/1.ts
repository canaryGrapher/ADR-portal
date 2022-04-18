import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/1"

const initialState: FormStateType = {
    patientInitials: "Adam Levine",
    DateOfBirth: null,
    ageOfOnset: undefined,
    gender: null,
    weight: null,
    patientID: null,
    ip_op: null,
    unit: null,
    reasonForTakingMedication: null,
    medicineAdvised: null,
    knownAllergies: null,
    socialHistory: null
}

export const form1page1Slice = createSlice({
    name: 'form1page1',
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
export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form1page1Slice.actions

export default form1page1Slice.reducer