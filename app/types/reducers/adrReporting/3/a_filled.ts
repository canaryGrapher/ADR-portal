interface FormStateType {
    drugDetails?: [] | [

        {
            nameOfDrug?: String,
            manufacturer?: String | null,
            BatchNo_LotNo?: String | null,
            expDate?: String | null,
            doseUsed?: Number | null,
            routeUsed?: String | null,
            ip_op?: String | null,
            unit?: String | null,
            frequency?: String | null,
            dateStarted?: String,
            dateStopped?: String | null,
            indication?: String | null,
        }]
}

interface ActionType {
    drugDetails: FormStateType;
    id: number;
}

interface ActionType1 {
    id: number;
}

export type { ActionType, ActionType1, FormStateType };