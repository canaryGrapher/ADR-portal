interface FormStateType {
    isTheDeviceNotified_regulatedInIndia?: "Yes" | "No" | "Don't know" | null,
    regulator_regulatoryStatusInCountryOfOrigin?: string | null,
    deviceRiskClassificationAsPerIndiaMDR2017?: "A" | "B" | "C" | "D" | null,
    licenseNumber?: string | null,
    catalogueNumber?: string | null,
    modelNumber?: string | null,
    batchNumber?: string | null,
    serialNumber?: string | null,
    softwareNumber?: string | null,
    accessories_associatedDevices?: string | null,
    GMDNCodeGMDNTerm?: string | null,
    udiNumber?: number | null,
    installationDate?: string | null,
    expirationDate?: string | null,
    lastExpirationDate: string | null,
    lastCalibration: string | null,
    ageOfDeviceFromDateOfManufacturing?: number | null,
    howLongWasDeviceInUse?: string | null,
    availabilityOfDeviceForEvaluation?: "Yes" | "No" | null,
    whatIsTheStatusOfTheDevice?: "Still in use" | "Destroyed" | "Returned to manufacturer or importer" | null,
    isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual?: boolean | null,
    specifyUsage?: string | null,
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

export type { ActionType, FormStateType }