interface FormStateType {
    name?: string | null;
    address?: string | null;
    contactNumber?: number | null;
    telephoneNumber?: number | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };
