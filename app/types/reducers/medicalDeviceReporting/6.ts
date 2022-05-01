interface FormStateType {
    patientHospitalNumber: number | null;
    patientInitials?: string | null;
    age: number | null;
    weight?: number | null;
    gender?: GenderTypes | null;
    history?: string | null;
    patientRecovered: ispatientRecovered | null;
    dateOfRecovery?: any | null;
    patientDead: ispatientdead | null;
    dateOfDeath: any | null;
    otherPatientOutcomes?: string | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum GenderTypes {
    Male = "Male",
    Female = "Female",
    Other = "Other",
}

enum ispatientRecovered {
    Yes = "Yes",
    No = "No",
}
enum ispatientdead {
    Yes = "Yes",
    No = "No",
}

export type { ActionType, FormStateType };
