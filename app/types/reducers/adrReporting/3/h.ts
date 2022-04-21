interface FormStateType {
    name?: String;
    doseUsed?: String | null;
    routeUsed?: String | null;
    frequency?: String | null;
    dateStarted?: Date;
    indication?: String | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };