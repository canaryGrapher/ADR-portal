type actionTakenState = {
    drugName: string,
    action: string,
    dose: string,
}

interface FormStateType {
    reactionAfterReintroduction: [actionTakenState] | [];
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };