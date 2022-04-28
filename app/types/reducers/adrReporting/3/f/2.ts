interface FormStateType {
    whoProbabiltyScale: ScaleValueOptions | null
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum ScaleValueOptions {
    Certain = "Certain",
    ProbablyLikely = "Probably/Likely",
    Possible = "Possible",
    Unlikely = "Unlikely",
    ConditionalUnclassified = "Conditional/Unclassified",
    UnassesableUnclassifiable = "Un-Assesable/Un-Classifiable",
}

export type { ActionType, FormStateType };