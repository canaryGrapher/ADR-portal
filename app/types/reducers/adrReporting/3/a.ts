interface FormSubStateType {
    nameOfDrug?: String,
    manufacturer?: String | null,
    BatchNo_LotNo?: String | null,
    expDate?: String | null,
    doseUsed?: Number | null,
    routeUsed?: String | null,
    ip_op?: "inPatient" | "outPatient" | null,
    unit?: String | null,
    frequency?: String | null,
    dateStarted?: String,
    dateStopped?: String | null,
    indication?: String | null,
    actionTaken?: "drugWithdrawn" | "doseIncreased" | "doseReduced" | "doseNotChanged" | "notApplicable" | "unknown" | null,
    dechallenge?: "drugWithdrawn" | "doseIncreased" | "doseReduced" | "doseNotChanged" | "notApplicable" | "unknown" | null,
    rechallenge?: "drugWithdrawn" | "doseIncreased" | "doseReduced" | "doseNotChanged" | "notApplicable" | "unknown" | null,
    reactionCategorization?: "noRechallenge" | "recurranceOfSymptoms" | "noOccuranceOfSymptoms" | "unknown" | null,
    doseAfterReintroduction?: String | null;
}

type PayloadKeys = keyof FormSubStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}


export type { ActionType, FormSubStateType };