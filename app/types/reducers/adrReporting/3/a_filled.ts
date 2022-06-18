import { FormSubStateType } from "./a"

interface FormStateType {
    drugDetails?: [] | [FormSubStateType]
}

interface FormStateTypeAdditional extends FormSubStateType {
    identifier: number;
}

interface ActionType {
    drugDetails: FormSubStateType;
    id: number;
}

interface ActionType1 {
    id: number;
}

export type { ActionType, ActionType1, FormStateType, FormStateTypeAdditional };