interface FormStateType {
    name?: string | null,
    licenseNumber?: string | null,
    address?: string | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType }