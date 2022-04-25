interface FormStateType {
    therapeutic?: boolean | null,
    diagnostic?: boolean | null,
    both?: boolean | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys,
    value: any
}

export type { ActionType, FormStateType }