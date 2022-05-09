import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/4/d";

const initialState: FormStateType = {
    "isTheDeviceNotified/regulatedInIndia": null,
    deviceRiskClassificationAsPerIndiaMDR2017: null,
    licenseNumber: null,
    catalogueNumber: null,
    modelNumber: null,
    batchNumber: null,
    serialNumber: null,
    softwareNumber: null,
    "accessories/associatedDevices": null,
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
    "isTheUsageOfDeviceAsPerManufacturersClaims/instructionsForUse/userManual": null,
    specifyUsage: null,
    "regulator/regulatoryStatusInCountryOfOrigin": null
}

export const form3page4dSlice = createSlice({
    name: 'form3page4d',
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

export const { fetchIncompleteFormsFromUserProfile, submitFormDataToTheBackend, setNewFormData } = form3page4dSlice.actions

export default form3page4dSlice.reducer;