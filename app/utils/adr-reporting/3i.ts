
const radioOptions = [
    { label: "Recovered", value: "recovered" },
    { label: "Recovering", value: "recovering" },
    { label: "Not recovered", value: "notRecovered" },
    { label: "Fatal", value: "fatal" },
    { label: "Recovered with sequelae", value: "recoveredWithSequelae" },
    { label: "Unknown", value: "unknown" },
];

const checkBoxOptions = [
    { label: "Congenital-anomaly", value: "congenitalAnamoly" },
    { label: "Life Threatening", value: "lifeThreatening" },
    { label: "Hospitalized/Prolonged", value: "Disability" },
    { label: "Disability", value: "disability" },
    {
        label: "Required intervention to Prevent permanent impairment/damage",
        value: "requiredIntervention",
    },
    { label: "Death", value: "death" },
    { label: "Other (Mention below)", value: "other" },
];

export { radioOptions, checkBoxOptions };