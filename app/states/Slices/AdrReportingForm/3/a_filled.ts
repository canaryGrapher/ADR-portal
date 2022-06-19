// needs to be changed
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { FormStateType, ActionType, ActionType1 } from "~/types/reducers/adrReporting/3/a_filled";

export const getFormData = createAsyncThunk(
    'adrReporting/1/getFormData',
    async (dispatch, getState) => {
        return await fetch("/api/forms/form1/page3/a")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
    drugDetails: []
}

export const form1page3FilledSlice = createSlice({
    name: "form1page3Filled",
    initialState: {
        data: initialStateData,
        status: "idle",
    },
    reducers: {
        setAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state.data.drugDetails = [...state.data.drugDetails, { identifier: action.payload.id, ...action.payload.drugDetails }]
        },
        removeAdditionalFormData: (state, action: PayloadAction<ActionType1>) => {
            // logic to remove the form data in this slice. This changes everytime the form is updated
            state.data.drugDetails = state.data.drugDetails?.filter((item: any) => item.key !== action.payload.id)
        },
        editAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to edit the form data in this slice. This changes everytime the form is updated
            state.data.drugDetails = state.data.drugDetails?.map((item: any) => {
                if (item.identifier === action.payload.id) {
                    return { key: action.payload.id, ...action.payload.drugDetails }
                }
                return item
            })
        },
    },
    extraReducers: {
        [getFormData.fulfilled.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "success"
            console.log("Payload: ", action.payload)
            state.data.drugDetails = action.payload
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
export const { setAdditionalFormData, removeAdditionalFormData, editAdditionalFormData } = form1page3FilledSlice.actions;

export default form1page3FilledSlice.reducer