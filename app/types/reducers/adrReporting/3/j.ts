interface FormStateType {
    outcome: OutcomeTypes | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum OutcomeTypes {
    Fatal = "Fatal",
    Recovery = "Recovery",
    Continuing = "Continuing",
    Unknown = "Unknown",
    Other = "Other",
}

export type { ActionType, FormStateType };