import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/1"

export const getFormData = createAsyncThunk(
    'adrReporting/1/getFormData',
    async () => {
        return await fetch("/api/forms/form1/page1")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
    patientInitials: undefined,
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
    initialState: {
        data: initialStateData,
        status: "idle",
    },
    reducers: {
        fetchFormsFromUserProfile: (state, action: PayloadAction<FormStateType>) => {
            // Add logic to fetch incomplete/complete form data from backend API
            state.data = action.payload
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state.data[action.payload.fieldName] = action.payload.value
        },
    },
    extraReducers: {
        [getFormData.fulfilled.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "success"
            state.data = action.payload
        },
        [getFormData.rejected.toString()]: (state) => {
            state.status = "failed";
        },
        [getFormData.pending.toString()]: (state) => {
            state.status = "loading";
        },
    }
})

// Action creators are generated for each case reducer function
export const { fetchFormsFromUserProfile, setNewFormData } = form1page1Slice.actions

export default form1page1Slice.reducer