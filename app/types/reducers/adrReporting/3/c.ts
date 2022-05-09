interface FormStateType {
    treatmentGiven: [TreatmentTypes] | [];
    treatmentDetails: String | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum TreatmentTypes {
    Specific = "Specific",
    Symptomatic = "Symptomatic",
    None = "None",
}

export type { ActionType, FormStateType };