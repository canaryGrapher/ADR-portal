// needs to be changed

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/4";

const initialState: FormStateType = {
    name: undefined,
    idNumber: null,
    pin: null,
    emailId: undefined,
    telephoneNumber: undefined,
    profAddress: null,
    occupation: null,
    department: null,
    dateOfThisReport: null,
    references: null,
    reportersComments: null,
};

export const form1page3dSlice = createSlice({
    name: "form1page4",
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
    },
});

// Action creators are generated for each case reducer function
export const {
    fetchIncompleteFormsFromUserProfile,
    submitFormDataToTheBackend,
    setNewFormData,
} = form1page3dSlice.actions;

export default form1page3dSlice.reducer;