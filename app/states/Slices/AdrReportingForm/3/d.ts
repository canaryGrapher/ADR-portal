// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    FormSubStateType,
    ActionType,
} from "~/types/reducers/adrReporting/3/d";

const initialState: FormSubStateType = {
    name: undefined,
    doseUsed: null,
    routeUsed: null,
    frequency: null,
    startDate: undefined,
    stopDate: null,
    indication: null,
};

export const form1page3hSlice = createSlice({
    name: "form1page3d",
    initialState,
    reducers: {
        fetchIncompleteFormsFromUserProfile: (
            state,
            action: PayloadAction<FormSubStateType>
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
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    fetchIncompleteFormsFromUserProfile,
    submitFormDataToTheBackend,
    setNewFormData,
    addField,
} = form1page3hSlice.actions;

export default form1page3hSlice.reducer;