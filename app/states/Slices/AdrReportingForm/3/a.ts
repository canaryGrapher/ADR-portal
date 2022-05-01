// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/3/a";

const initialState: FormStateType = {
    nameOfDrug: undefined,
    manufacturer: null,
    BatchNo_LotNo: null,
    expDate: undefined,
    doseUsed: undefined,
    routeUsed: null,
    ip_op: null,
    unit: null,
    frequency: null,
    dateStarted: undefined,
    dateStopped: null,
    indication: null,
}

export const form1page3Slice = createSlice({
    name: "form1page3",
    initialState,
    reducers: {
        fetchIncompleteFormsFromUserProfile: (
            state,
            action: PayloadAction<FormStateType>
        ) => {
            // Add logic to fetch incomplete/complete form data from backend API
            state = action.payload;
        },
        submitFormDataToTheBackend: (state) => {
            // Add logic to submit form data to the backend API when the form is submitted
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state[action.payload.fieldName] = action.payload.value;
        },
        addField: () => {
            return initialState;
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    fetchIncompleteFormsFromUserProfile,
    submitFormDataToTheBackend,
    setNewFormData,
    addField
} = form1page3Slice.actions;

export default form1page3Slice.reducer