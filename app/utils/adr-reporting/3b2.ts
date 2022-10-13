const options = [
    {
        label: "Certain",
        value: "certain",
        info: [
            "Event or laboratory test abnormality, with plausible time relationship to drug intake",
            "Cannot be explained by disease or other drugs",
            "Response to withdrawal plausible (pharmacologically, pathologically)",
            "Event definitive pharmacologically or phenomenologically (ie, an objective and specific medical disorder or a recognized pharmacologic phenomenon)",
            "Rechallenge satisfactory, if necessary"
        ]
    },
    {
        label: "Probably / Likely",
        value: "probably/likely",
        info: [
            "Event or laboratory test abnormality, with reasonable time relationship to drug intake",
            "Unlikely to be attributed to disease or other drugs",
            "Response to withdrawal clinically reasonable",
            "Rechallenge not required"
        ]
    },
    {
        label: "Possible",
        value: "possible",
        info: [
            "Event or laboratory test abnormality, with reasonable time relationship to drug intake",
            "Could also be explained by disease or other drugs",
            "Information on drug withdrawal may be lacking or unclear"
        ]
    },
    {
        label: "Unlikely",
        value: "unlikely",
        info: [
            "Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible)",
            "Disease or other drugs provide plausible explanation"
        ]
    },
    {
        label: "Conditional / Unclassified",
        value: "conditional/unclassified",
        info: [
            "Event or laboratory test abnormality",
            "More data for proper assessment needed",
            "Additional data under examination"
        ]
    },
    {
        label: "Un-assessable / Un-classifiable",
        value: "un-assessable/un-classifiable",
        info: [
            "Report suggesting an adverse reaction",
            "Cannot be judged because information is insufficient or contradictory",
            "Data cannot be supplemented or verified"
        ]
    },
];

export { options }