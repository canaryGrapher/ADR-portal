// needs to be changed
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormSubStateType, ActionType } from "~/types/reducers/adrReporting/3/a";

const initialState: FormSubStateType = {
    nameOfDrug: undefined,
    manufacturer: null,
    BatchNo_LotNo: null,
    expDate: undefined,
    doseUsed: undefined,
    routeUsed: null,
    otherRouteUsed: null,
    ip_op: null,
    unit: null,
    otherUnit: null,
    frequency: null,
    otherFrequency: null,
    dateStarted: undefined,
    dateStopped: null,
    indication: null,
    actionTaken: null,
    dechallenge: null,
    rechallenge: null,
    reactionCategorization: null,
    doseAfterReintroduction: null,
}

export const form1page3Slice = createSlice({
    name: "form1page3",
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
    addField, setNewFormData
} = form1page3Slice.actions;

export default form1page3Slice.reducer