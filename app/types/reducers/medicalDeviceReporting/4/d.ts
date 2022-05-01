interface FormStateType {
    "isTheDeviceNotified/regulatedInIndia"?: BooleanTypes | null,
    deviceRiskClassificationAsPerIndiaMDR2017?: RiskClassificationTypes | null,
    licenseNumber?: string | null,
    catalogueNumber?: string | null,
    modelNumber?: string | null,
    batchNumber?: string | null,
    serialNumber?: string | null,
    softwareNumber?: string | null,
    "accessories/associatedDevices"?: string | null,
    GMDNCodeGMDNTerm?: string | null,
    udiNumber?: number | null,
    installationDate?: string | null,
    expirationDate?: string | null,
    lastExpirationDate: string | null,
    lastCalibration: string | null,
    ageOfDeviceFromDateOfManufacturing?: number | null,
    howLongWasDeviceInUse?: string | null,
    availabilityOfDeviceForEvaluation?: boolean | null,
    whatIsTheStatusOfTheDevice?: StatusTypes | null,
    "isTheUsageOfDeviceAsPerManufacturersClaims/instructionsForUse/userManual"?: boolean | null,
    specifyUsage?: string | null,
    "regulator/regulatoryStatusInCountryOfOrigin"?: string | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum BooleanTypes {
    Yes = "Yes",
    No = "No",
    DontKnow = "Don't Know"
}

enum RiskClassificationTypes {
    A = "A",
    B = "B",
    C = "C",
    D = "D"
}

enum StatusTypes {
    Destroyed = "Destroyed",
    StillInUse = "Still in use",
    ReturnedToManufacturerOrImporter = "Returned to manufacturer or importer"
}

export type { ActionType, FormStateType }