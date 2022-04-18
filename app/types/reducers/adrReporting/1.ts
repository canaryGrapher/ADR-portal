interface FormStateType {
    patientInitials?: string;
    DateOfBirth?: any | null;
    ageOfOnset: number | undefined;
    gender?: GenderTypes | null;
    weight?: number | null;
    patientID?: number | string | null;
    ip_op?: string | null;
    unit?: string | null;
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

enum GenderTypes {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

export type { ActionType, FormStateType };
