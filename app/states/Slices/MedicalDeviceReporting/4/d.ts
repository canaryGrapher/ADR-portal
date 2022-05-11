import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/4/d";

const initialState: FormStateType = {
    isTheDeviceNotified_regulatedInIndia: null,
    regulator_regulatoryStatusInCountryOfOrigin: null,
    deviceRiskClassificationAsPerIndiaMDR2017: null,
    licenseNumber: null,
    catalogueNumber: null,
    modelNumber: null,
    batchNumber: null,
    serialNumber: null,
    softwareNumber: null,
    accessories_associatedDevices: null,
    GMDNCodeGMDNTerm: null,
    udiNumber: null,
    installationDate: null,
    expirationDate: null,
    lastExpirationDate: null,
    lastCalibration: null,
    ageOfDeviceFromDateOfManufacturing: null,
    howLongWasDeviceInUse: null,
    availabilityOfDeviceForEvaluation: null,
    whatIsTheStatusOfTheDevice: null,
    isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual: null,
    specifyUsage: null,
}

export const form2page4dSlice = createSlice({
    name: 'form2page4d',
    initialState,
    reducers: {
        fetchIncompleteFormsFromUserProfile: (state, action: PayloadAction<FormStateType>) => {
            // Add logic to fetch incomplete/complete form data from backend API
            state = action.payload
        },
        submitFormDataToTheBackend: (state) => {
            // Add logic to submit form data to the backend API when the form is submitted
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state[action.payload.fieldName] = action.payload.value
        }
    }
});

export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form2page4dSlice.actions

export default form2page4dSlice.reducer;