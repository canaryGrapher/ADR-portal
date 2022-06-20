import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FormStateType, ActionType } from "~/types/reducers/medicalDeviceReporting/4/d";

export const getFormData = createAsyncThunk(
    'medicalDeviceReporting/1/getFormData',
    async (dispatch, getState) => {
        return await fetch("/api/forms/form2/page4/d")
            .then(async response => {
                const data = await response.json();
                console.log("Here is the data: ", data)
                return data;
            })
    })

const initialStateData: FormStateType = {
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
    initialState: {
        data: initialStateData,
        status: "idle",
    },
    reducers: {
        fetchFormsFromUserProfile: (state, action: PayloadAction<FormStateType>) => {
            // Add logic to fetch incomplete/complete form data from backend API
            state.data = action.payload
        },
        setNewFormData: (state, action: PayloadAction<ActionType>) => {
            // logic to set the new form data in this slice. This changes everytime the form is updated
            state.data[action.payload.fieldName] = action.payload.value
        },
    },
    extraReducers: {
        [getFormData.fulfilled.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "success"
            state.data = action.payload
        },
        [getFormData.rejected.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "failed";
        },
        [getFormData.pending.toString()]: (state, action: PayloadAction<FormStateType>) => {
            state.status = "loading";
        },
    }
})

export const { setNewFormData } = form2page4dSlice.actions

export default form2page4dSlice.reducer;