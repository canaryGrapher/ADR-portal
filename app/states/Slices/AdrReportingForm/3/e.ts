import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/adrReporting/3/e";

const initialState: FormStateType = {
  applicability: null,
  amcReportNumber: null,
  worldwideUniqueNumber: null,
  relevantTests: null,
  relevantMedicalHistory: null,
  seriousnessOfTheReaction: null,
  seriousnessLevel: null,
  dateOfDeath: null,
  otherDetails: null,
  outcome: null,
};

export const form1page3iSlice = createSlice({
  name: "form1page3e",
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
} = form1page3iSlice.actions;

export default form1page3iSlice.reducer;
