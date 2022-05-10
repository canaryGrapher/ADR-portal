interface FormSubStateType {
    name?: String;
    doseUsed?: String | null;
    routeUsed?: String | null;
    frequency?: String | null;
    startDate?: String;
    stopDate?: String | null;
    indication?: String | null;
}

type PayloadKeys = keyof FormSubStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormSubStateType };