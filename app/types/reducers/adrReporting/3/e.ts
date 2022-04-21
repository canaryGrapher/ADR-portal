interface FormStateType {
    drug?: Array<DrugReintroductionTypes> | null;
    dose?: Array<String> | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum DrugReintroductionTypes {
    NoRechallenge = "No rechallenge",
    RecurranceOfSymptoms = "Recurrance of symptoms",
    NoOccuranceOfSymptoms = "No occurance of symptoms",
    Unknown = "Unknown",
}

export type { ActionType, FormStateType };