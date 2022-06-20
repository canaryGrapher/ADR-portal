import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/5";

export const getFormData = createAsyncThunk(
    'medicalDeviceReporting/1/getFormData',
    async (dispatch, getState) => {
        return await fetch("/api/forms/form2/page5")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
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
    detailedDescription: null,
    year: null,
    numberOfSimilarIndia: null,
    totalNumberSuppliedIndia: null,
    frequencyIndia: null,
    numberOfSimilarGlobal: null,
    totalNumberSuppliedGlobal: null,
    frequencyGlobal: null,
    yearGlobal: null,
}

export const form2page5Slice = createSlice({
    name: 'form2page5',
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
export const { setNewFormData } = form2page5Slice.actions

export default form2page5Slice.reducer;