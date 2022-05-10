interface FormStateType {
    inVitroDiagnostic: String[] | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys,
    value: any
}

export type { ActionType, FormStateType }