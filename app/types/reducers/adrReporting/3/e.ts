interface FormStateType {
    applicability: false | true;
    amcReportNumber: Number | null;
    worldwideUniqueNumber: Number | null;
    relevantTests: String | null;
    relevantMedicalHistory: String | null;
    seriousnessOfTheReaction: true | false;
    seriousnessLevel: SeriousnessLevelTypes | null;
    dateOfDeath: String | null;
    otherDetails: String | null;
    outcome: OutcomeTypes | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum SeriousnessLevelTypes {
    CongenitalAnomaly = "Congenital-anomaly",
    LifeThreatening = "Life Threatening",
    HospitalizedProlonged = "Hospitalized/Prolonged",
    Disability = "Disability",
    RequiredInterventionToPreventPermanentImpairmentDamage = "Required intervention to Prevent permanent impairment/damage",
    Death = "Death",
    OtherMentionBelow = "Other (Mention below)",
}

enum OutcomeTypes {
    Recovered = "Recovered",
    Recovering = "Recovering",
    NotRecovered = "Not recovered",
    Fatal = "Fatal",
    RecoveredWithSequelae = "Recovered with sequelae",
    Unknown = "Unknown",
}

export type { ActionType, FormStateType };