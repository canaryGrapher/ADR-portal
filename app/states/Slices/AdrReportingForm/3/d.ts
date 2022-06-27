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

export const form1page3dSlice = createSlice({
    name: "form1page3d",
    initialState,
    reducers: {
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
    setNewFormData, addField,
} = form1page3dSlice.actions;

export default form1page3dSlice.reducer;