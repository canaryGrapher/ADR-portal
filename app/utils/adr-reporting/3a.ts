const actionOptions = [
    { label: "Drug withdrawn", value: "drugWithdrawn" },
    { label: "Dose reduced", value: "doseReduced" },
    { label: "Dose not changed", value: "doseNotChanged" },
    { label: "Not applicable", value: "notApplicable" },
    { label: "Unknown", value: "unknown" },
];

const reintroductionOptions = [
    { label: "No rechallenge", value: "noRechallenge" },
    { label: "Recurrance of symptoms", value: "recurranceOfSymptoms" },
    { label: "No occurance of symptoms", value: "noOccuranceOfSymptoms" },
    { label: "Unknown", value: "unknown" },
];

const unitOptions = [
    { label: "mcg", value: "mcg" },
    { label: "mg", value: "mg" },
    { label: "gm", value: "gm" },
    { label: "IU", value: "IU" },
    { label: "Other", value: "other" }
]

const routeUsedOptions = [
    { label: "Oral", value: "oral" },
    { label: "IV", value: "iv" },
    { label: "IM", value: "im" },
    { label: "SC", value: "sc" },
    { label: "Other", value: "other" }
]

const frequencyOptions = [
    { label: "OD", value: "od" },
    { label: "BID", value: "bid" },
    { label: "TID", value: "tid" },
    { label: "SOS", value: "sos" },
    { label: "Other", value: "other" }
]

export { actionOptions, reintroductionOptions, unitOptions, routeUsedOptions, frequencyOptions };
