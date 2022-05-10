const actionOptions = [
    { label: "Drug withdrawn", value: "drugWithdrawn" },
    { label: "Dose increased", value: "doseIncreased" },
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

export { actionOptions, reintroductionOptions };
