interface FormStateType {
    dateOfEvent?: any | null,
    dateOfImplant?: any | null,
    locationOfEvent?: "Hospital Premise" | "Manufacturer Premise" | "Home" | "Others" | null,
    deviceOperator?: "Healthcare professional" | "Patient" | "Problem noted before use" | "Others" | null,
    deviceLocation?: "Returned to the company" | "Implanted in patient" | "Within the facility" | "At patient home" | "Destroyed" | "Others" | null,
    dateOfReturn?: any | null,
    seriousEvent?: "Yes" | "No" | null,
    reason?: "Death" | "Life Threatening" | "Disability" | "Hospitalization" | "Congenital Anomaly" | "Any medical event" | "Permanent Impairment" | null,
    dateOfDeath?: any | null,
    isDeviceInUse?: "Yes" | "No" | null,
    detailedDescription?: string | null,
    year?: any | null,
    numberOfSimilarIndia?: number | null,
    totalNumberSuppliedIndia?: number | null,
    frequencyIndia?: string | null,
    yearGlobal?: any | null,
    numberOfSimilarGlobal?: number | null,
    totalNumberSuppliedGlobal?: number | null,
    frequencyGlobal?: string | null,
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType }