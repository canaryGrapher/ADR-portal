interface FormStateType {
    dateOfReactionStarted?: string;
    dateOfRecovery?: string | null;
    reactionDescription?: string;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };