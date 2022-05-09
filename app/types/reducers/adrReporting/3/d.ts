interface FormSubStateType {
    name?: string;
    doseUsed?: string | null;
    routeUsed?: string | null;
    frequency?: string | null;
    startDate?: string;
    stopDate?: string;
    indication?: string | null;
}

type PayloadKeys = keyof FormSubStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormSubStateType };