import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/3/b/4";

const initialState: FormStateType = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
};

export const form1page3b4Slice = createSlice({
    name: "form1page3b4",
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
} = form1page3b4Slice.actions;

export default form1page3b4Slice.reducer;