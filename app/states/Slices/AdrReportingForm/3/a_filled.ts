// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType, ActionType1, FormStateTypeAdditional } from "~/types/reducers/adrReporting/3/a_filled";

const initialState: FormStateType = {
    drugDetails: []
}

export const form1page3FilledSlice = createSlice({
    name: "form1page3Filled",
    initialState,
    reducers: {
        setAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state.drugDetails = [...state.drugDetails, { key: action.payload.id, ...action.payload.drugDetails }]
        },
        removeAdditionalFormData: (state, action: PayloadAction<ActionType1>) => {
            // logic to remove the form data in this slice. This changes everytime the form is updated
            state.drugDetails = state.drugDetails?.filter((item: any) => item.key !== action.payload.id)
        },
        editAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to edit the form data in this slice. This changes everytime the form is updated
            state.drugDetails = state.drugDetails?.map((item: any) => {
                if (item.key === action.payload.id) {
                    return { key: action.payload.id, ...action.payload.drugDetails }
                }
                return item
            })
        },
    }
})

// Action creators are generated for each case reducer function
export const { setAdditionalFormData, removeAdditionalFormData } = form1page3FilledSlice.actions;

export default form1page3FilledSlice.reducer