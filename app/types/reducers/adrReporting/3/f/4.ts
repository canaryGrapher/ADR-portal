interface FormStateType {
    0?: BooleanTypes | null;
    1?: BooleanTypes | null;
    2?: BooleanTypes | null;
    3?: BooleanTypes | null;
    4?: BooleanTypes | null;
    5?: BooleanTypes | null;
    6?: BooleanTypes | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanTypes {
    Yes = "Yes",
    No = "No",
}

enum FinalResultTypes {
    DefinitelyPreventable = "Definitely Preventable",
    ProbablyPreventable = "Probably Preventable",
    NotPreventable = "Not Preventable",
}

export type { ActionType, FormStateType };