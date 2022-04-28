interface FormStateType {
    dateOfEvent?: any | null,
    dateOfImplant?: any | null,
    locationOfEvent?: LocationTypes | null,
    deviceOperator?: DeviceOperatorTypes | null,
    deviceLocation?: DeviceLocationTypes | null,
    dateOfReturn?: any | null,
    seriousEvent?: boolean | null,
    reason?: ReasonTypes | null,
    dateOfDeath?: any | null,
    isDeviceInUse?: boolean | null,
    detailedDescription?: string | null,
    year?:  any | null,
    numberOfSimilarIndia?: number | null,
    totalNumberSuppliedIndia?: number | null,
    frequencyIndia?: string | null,
    yearGlobal?: any | null,
    numberOfSimilarGlobal?: number | null,
    totalNumberSuppliedGlobal?: number | null,
    frequencyGlobal?: string | null,
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum LocationTypes {
    HospitalPremise = "Hospital Premise",
    ManufacturerPremise = "Manufacturer Premise",
    Home = "Home",
    Others = "Others"
}

enum DeviceOperatorTypes {
    HealthcareProfessional = "Healthcare professional",
    Patient = "Patient",
    ProblemNotedBeforeUse = "Problem noted before use",
    Others = "Others"
}

enum DeviceLocationTypes {
    ReturnedToTheCompany = "Returned to the company",
    ImplantedInPatient = "Implanted in patient",
    WithinTheFacility = "Within the facility",
    AtPatientHome = "At patient home",
    Destroyed = "Destroyed",
    Others = "Others"
}

enum ReasonTypes {
    Death = "Death",
    LifeThreatening = "Life Threatening",
    Disability = "Disability",
    Hospitalization = "Hospitalization",
    CongenitalAnomaly = "Congenital Anomaly",
    AnyMedicalEvent = "Any medical event",
    PermanentImpairment = "Permanent Impairment"
}

export type { ActionType, FormStateType }