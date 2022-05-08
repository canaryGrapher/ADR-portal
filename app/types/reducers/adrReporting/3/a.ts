interface FormSubStateType {
  nameOfDrug?: String;
  manufacturer?: String | null;
  BatchNo_LotNo?: String | null;
  expDate?: String | null;
  doseUsed?: Number | null;
  routeUsed?: String | null;
  ip_op?: String | null;
  unit?: String | null;
  frequency?: String | null;
  dateStarted?: String;
  dateStopped?: String | null;
  indication?: String | null;
  actionTaken?: actionTakenState | null;
  dechallenge?: actionTakenState | null;
  rechallenge?: actionTakenState | null;
}

type PayloadKeys = keyof FormSubStateType;

interface ActionType {
  fieldName: PayloadKeys;
  value: any;
}

type actionTakenState = {
  drugName: string;
  action: AvailableActions;
};

enum AvailableActions {
  doseReduced = "Dose reduced",
  doseIncreased = "Dose increased",
  drugWithdrawn = "Drig withdrawn",
  doseNotChanged = "Dose not changed",
  notApplicable = "Not applicable",
  unknown = "Unknown",
}

export type { ActionType, FormSubStateType };
