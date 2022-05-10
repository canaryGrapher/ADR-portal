interface FormStateType {
    deviceCategory?: "medicalDevice" | "inVitroDiagnostic" | "equipment_machine" | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType }