interface FormStateType {
    equipmentUsage?: "therapeutic" | "diagnostic" | "both" | null,
    invasibility?: "invasive" | "nonInvasive" | null,
    imaging?: boolean | null,
    others?: boolean | null,
    reportersComments?: string | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys,
    value: any
}

export type { ActionType, FormStateType }

