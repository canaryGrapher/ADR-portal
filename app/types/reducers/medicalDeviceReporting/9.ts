interface FormStateType {
    productOwnersDeviceRiskAnalysisReport?: string | undefined;
    correctiveActionTaken?: string | undefined;
    deviceHistoryReview?: string | undefined;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}


export type { ActionType, FormStateType };
