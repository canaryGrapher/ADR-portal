interface FormStateType {
    dateOfReactionStarted?: Date;
    dateOfRecovery?: Date | null;
    describeReactionOrProblem?: String;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };