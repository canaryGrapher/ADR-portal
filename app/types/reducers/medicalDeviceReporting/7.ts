interface FormStateType {
    name?: string | undefined;
    address?: string | undefined;
    contactNumber?: number | null;
    telephoneNumber?: number | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };
