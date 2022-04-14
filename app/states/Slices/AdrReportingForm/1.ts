import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    forms: {
        patientInitials?: string;
        DateOfBirth?: string | null;
        ageOfOnset: number | null;
        gender?: "Male" | "Female" | "Other" | null;
        weight?: number | null;
        patientID?: number | string | null;
        ip_op?: string | null;
        unit?: string | null;
        reasonForTakingMedication?: string | null;
        medicineAdvised?: string | null;
        knownAllergies?: string | null;
        socialHistory?: string | null;
    }
}

export interface ActionType {
    fieldName: fieldNameTypes;
    value: undefined;
}

enum fieldNameTypes {
    patientInitials = "patientInitials",
    DateOfBirth = "DateOfBirth",
    ageOfOnset = "ageOfOnset",
    gender = "gender",
    weight = "weight",
    patientID = "patientID",
    ip_op = "ip_op",
    unit = "unit",
    reasonForTakingMedication = "reasonForTakingMedication",
    medicineAdvised = "medicineAdvised",
    knownAllergies = "knownAllergies",
    socialHistory = "socialHistory"
}

const initialState: CounterState = {
    forms: {
        patientInitials: "",
        DateOfBirth: null,
        ageOfOnset: null,
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
}

export const form1page1Slice = createSlice({
    name: 'form1page1',
    initialState,
    reducers: {
        fetchIncompleteFormUserProfile: (state) => {
            // Add logic to fetch incomplete/complete form data from backend API
        },
        submitFormDataToTheBackend: (state) => {
            // Add logic to submit form data to the backend API
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this reducer and eventually in the backend API using the above function
            state.forms[`${action.payload.fieldName}`] = action.payload.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { fetchIncompleteFormUserProfile, submitFormDataToTheBackend, setNewFormData } = form1page1Slice.actions

export default form1page1Slice.reducer