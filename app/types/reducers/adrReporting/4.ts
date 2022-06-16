interface FormStateType {
    name?: String;
    idNumber?: Number | null;
    pin?: String | null;
    email?: String;
    telephoneNumber?: Number;
    profAddress?: String | null;
    occupation?: "Physician" | "Dentist" | "Nurse" | "Pharmacist" | "Other" | null;
    department?: String | null;
    dateOfThisReport?: string | null;
    references?: String | null;
    reportersComment?: String | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}


export type { ActionType, FormStateType };