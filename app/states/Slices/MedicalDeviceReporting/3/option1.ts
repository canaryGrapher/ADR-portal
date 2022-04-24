import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FormStateType = {
    typeOfDevice: null,
    implantability: null,
    reuseability: null,
    personalUse: null 
}

export const form3page3Slice = createSlice({
    name: 'Form3page3Option1',
    initialState,
    reducers: {
        
    }
})