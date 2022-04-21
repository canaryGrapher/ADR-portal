interface FormStateType {
    name?: String;
    idNumber?: Number | null;
    pin?: String | null;
    emailId?: String;
    telephoneNumber?: Number;
    profAddress?: String | null;
    occupation?: OccupationTypes | null;
    department?: String | null;
    dateOfThisReport?: Date | null;
    references?: String | null;
    reportersComments?: String | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum OccupationTypes {
    Physician = "Physician",
    Doctor = "Doctor",
    Nurse = "Nurse",
    Pharmacist = "Pharmacist",
    Other = "Other",
}

export type { ActionType, FormStateType };