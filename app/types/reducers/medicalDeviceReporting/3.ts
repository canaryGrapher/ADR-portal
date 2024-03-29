interface FormStateType {
    deviceCategory?: "medicalDevice" | "inVitroDiagnostic" | "equipmentMachine" | null;
    typeOfDevice?: DeviceOptions | null,
    implantability?: Implantability | null,
    reuseability?: Reusability | null,
    sterilization?: "sterile" | "non-sterile" | null,
    personalUse?: boolean | null,
    inVitroDiagnostic: String[] | null,
    equipmentUsage?: "therapeutic" | "diagnostic" | "both" | null,
    invasibility?: "invasive" | "nonInvasive" | null,
    imaging?: boolean | null,
    others?: boolean | null,
    reportersComments?: string | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum DeviceOptions {
    Therapeutic = "Therapeutic",
    Diagnostic = "Diagnostic",
    Both = "Both"
}

enum Implantability {
    Implantable = "Implantable",
    NonImplantable = "Non Implantable"
}

enum Reusability {
    SingleUse = "Single Use Device",
    Reusable = "Reusable Device",
    ReuseofManufactured = "Reuse of manufactured marked single use"
}

export type { ActionType, FormStateType };