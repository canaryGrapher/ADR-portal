// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormSubStateType, ActionType } from "~/types/reducers/users/users";

const initialState: FormSubStateType = {
    firstName: null,
    lastName: null,
    email: null,
}

export const userSlice = createSlice({
    name: "user",
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
        resetData: () => {
            return initialState;
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    fetchIncompleteFormsFromUserProfile,
    submitFormDataToTheBackend,
    setNewFormData,
    resetData,
} = userSlice.actions;

export default userSlice.reducer