interface FormStateType {
    firstName?: string;
    lastName?: string;
    DateOfBirth?: string | null;
    ageOfOnset: number | undefined;
    gender?: "male" | "female" | "other" | null;
    weight?: number | null;
    patientID?: number | string | null;
    ip_op?: "inPatient" | "outPatient" | null;
    unit?: "mcg" | "mg" | "gm" | "IU" | null;
    reasonForTakingMedication?: string | null;
    medicineAdvised?: string | null;
    knownAllergies?: string | null;
    socialHistory?: string | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };
