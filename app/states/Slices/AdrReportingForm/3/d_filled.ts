// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType, ActionType1 } from "~/types/reducers/adrReporting/3/d_filled";

const initialState: FormStateType = {
    drugDetails: []
}

export const form1page3dFilledSlice = createSlice({
    name: "form1page3dFilled",
    initialState,
    reducers: {
        setAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            // @ts-ignore
            state.drugDetails = [...state.drugDetails, { key: action.payload.id, ...action.payload.drugDetails }]
        },
        removeAdditionalFormData: (state, action: PayloadAction<ActionType1>) => {
            // logic to remove the form data in this slice. This changes everytime the form is updated
            // @ts-ignore
            state.drugDetails = state.drugDetails?.filter((item: any) => item.key !== action.payload.id)
        },
        editAdditionalFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to edit the form data in this slice. This changes everytime the form is updated
            // @ts-ignore
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
export const { setAdditionalFormData, removeAdditionalFormData, editAdditionalFormData } = form1page3dFilledSlice.actions;

export default form1page3dFilledSlice.reducer