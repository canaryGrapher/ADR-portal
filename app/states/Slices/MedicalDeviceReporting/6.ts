import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/6"

const initialState: FormStateType = {
    patientHospitalNumber: undefined,
    patientInitials: undefined,
    age: undefined,
    weight: null,
    gender: null,
    history: null,
    patientRecovered: null,
    dateOfRecovery: null,
    patientDead: null,
    dateOfDeath: null,
    otherPatientOutcomes: undefined
}

export const form3page6Slice = createSlice({
    name: 'form3page6',
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
export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form3page6Slice.actions

export default form3page6Slice.reducer