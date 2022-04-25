interface FormStateType {
    equipmentUsage?: EquipmentUsageTypes | null,
    invasibility?: InvasibilityTypes | null,
    imaging?: boolean | null,
    others?: boolean | null,
    reportersComments?: string | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys,
    value: any
}

enum EquipmentUsageTypes {
    Therapeutic = "Therapeutic",
    Diagnostic = "Diagnostic",
    Both = "Both"
}

enum InvasibilityTypes {
    Invasive = "Invasive",
    NonInvasive = "Non-Invasive"
}

export type { ActionType, FormStateType }

