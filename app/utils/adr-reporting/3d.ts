const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
    "Unknown",
];

const routeUsedOptions = [
    { label: "Oral", value: "oral" },
    { label: "IV", value: "iv" },
    { label: "IM", value: "im" },
    { label: "SC", value: "sc" },
    { label: "Other", value: "other" },
]

const frequencyOptions = [
    { label: "OD", value: "od" },
    { label: "BID", value: "bid" },
    { label: "TID", value: "tid" },
    { label: "SOS", value: "sos" },
    { label: "Other", value: "other" },
]

export { radioOptions, routeUsedOptions, frequencyOptions };