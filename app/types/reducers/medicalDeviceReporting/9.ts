interface FormStateType {
    productOwnersDeviceRiskAnalysisReport?: string | null;
    correctiveActionTaken?: string | null;
    deviceHistoryReview?: string | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}


export type { ActionType, FormStateType };
