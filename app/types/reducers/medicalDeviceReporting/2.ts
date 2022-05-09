interface FormStateType {
    typeOfReporter?: ReporterTypes | null,
    ifOthers?: String | null,
    hasTheReporterInformedTheIncidentToTheManufacturer?: ChoiceTypes | null,
    isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer: ChoiceTypes | null,
    name?: string | null,
    phoneNumber?: number | null,
    emailId?: string | null,
    address?: string | null,
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum ReporterTypes {
    Manufacturer = "Manufacturer",
    Importer = "Importer",
    Distributor = "Distributor",
    Patients = "Patients",
    HealthcareProfessionals = "Healthcare Professionals",
    Other = "Other"
}

enum ChoiceTypes {
    Yes = "Yes",
    No = "No",
    DontKnow = "Don't Know"
}

export type { ActionType, FormStateType }