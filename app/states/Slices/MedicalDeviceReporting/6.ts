import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/6"

export const getFormData = createAsyncThunk(
    'medicalDeviceReporting/1/getFormData',
    async (dispatch, getState) => {
        return await fetch("/api/forms/form2/page6")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
    patientHospitalNumber: null,
    patientInitials: null,
    age: null,
    weight: null,
    gender: null,
    history: null,
    patientRecovered: null,
    dateOfRecovery: null,
    patientDead: null,
    dateOfDeath: null,
    otherPatientOutcomes: null
}

export const form2page6Slice = createSlice({
    name: 'form2page6',
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
        [getFormData.rejected.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "failed";
        },
        [getFormData.pending.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "loading";
        },
    }
})

// Action creators are generated for each case reducer function
export const { setNewFormData } = form2page6Slice.actions

export default form2page6Slice.reducer