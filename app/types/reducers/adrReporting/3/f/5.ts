interface FormStateType {
    predictability: PredictabilityTypes | null;
    preDisposingFactors: Array<PreDisposingFactorsTypes> | null;
    others: String | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum PredictabilityTypes {
    Predictable = "Predictable",
    NonPredictable = "Non Predictable",
}

enum PreDisposingFactorsTypes {
    Age = "Age",
    Gender = "Gender",
    Genetics = "Genetics",
    InterCurrentDisease = "Inter Current Disease",
    MultipleDrugTherapy = "Multiple Drug Therapy",
    Other = "Other",
}

export type { ActionType, FormStateType };