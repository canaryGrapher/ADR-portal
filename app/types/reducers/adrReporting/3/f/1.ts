interface FormStateType {
    0?: BooleanOptions | null;
    1?: BooleanOptions | null;
    2?: BooleanOptions | null;
    3?: BooleanOptions | null;
    4?: BooleanOptions | null;
    5?: BooleanOptions | null;
    6?: BooleanOptions | null;
    7?: BooleanOptions | null;
    8?: BooleanOptions | null;
    9?: BooleanOptions | null;
    10?: BooleanOptions | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanOptions {
    Yes = "Yes",
    No = "No",
    DontKnow = "Don't Know",
}

export type { ActionType, FormStateType };