interface FormSubStateType {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
}

type PayloadKeys = keyof FormSubStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}


export type { ActionType, FormSubStateType };