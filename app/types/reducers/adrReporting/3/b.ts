interface FormStateType {
    actionTaken: Array<ActionTakenForDrugs> | null;
}

type ActionTakenForDrugs = {
    actionTaken: {
        drugName: string;
        action: AvailableActions;
    }
}

enum AvailableActions {
    doseReduced = "Dose reduced",
    doseIncreased = "Dose increased",
    drugWithdrawn = "Drig withdrawn",
    doseNotChanged = "Dose not changed",
    notApplicable = "Not applicable",
    unknown = "Unknown",
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType };