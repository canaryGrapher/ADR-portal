interface FormStateType {
    level: LevelTypes | null;
}

type PayloadKeys = keyof FormStateType;

interface ActionType {
    fieldName: PayloadKeys;
    value: any;
}

enum LevelTypes {
    Level1 = "Level 1",
    Level2 = "Level 2",
    Level3 = "Level 3",
    Level4 = "Level 4",
    Level5 = "Level 5",
    Level6 = "Level 6",
    Level7 = "Level 7",
}

export type { ActionType, FormStateType };