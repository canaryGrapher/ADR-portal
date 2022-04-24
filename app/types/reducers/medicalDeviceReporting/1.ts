interface FormStateType {
    reporterReferenceNumber?: string | null;
    dateOfReport?: any | null;
    typeOfReport?: ReportTypes | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum ReportTypes {
    Initial = "Initial",
    FollowUp = "Follow-up",
    Final = "Final",
    Trend = "Trend"
}

export type { ActionType, FormStateType }