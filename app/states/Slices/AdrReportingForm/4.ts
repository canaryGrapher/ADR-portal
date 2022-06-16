import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/4";

export const getFormData = createAsyncThunk(
    'adrReporting/1/getFormData',
    async (dispatch, getState) => {
        return await fetch("/api/forms/form1/page4")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
    name: undefined,
    idNumber: null,
    pin: null,
    email: undefined,
    telephoneNumber: undefined,
    profAddress: null,
    occupation: null,
    department: null,
    dateOfThisReport: null,
    references: null,
    reportersComment: null,
};

export const form1page4Slice = createSlice({
    name: "form1page4",
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
export const {
    setNewFormData,
} = form1page4Slice.actions;

export default form1page4Slice.reducer;