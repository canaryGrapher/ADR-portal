const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const advisedMedicineOptions = [
  { label: "Doctor", value: "doctor" },
  { label: "Pharmacist", value: "pharmacist" },
  { label: "Family", value: "family" },
  { label: "Friends", value: "friends" },
  {
    label: "Self (past disease experienced)",
    value: "self(past disease experienced)",
  },
  {
    label: "Self (no past disease experienced)",
    value: "self(no past disease experienced)",
  },
  { label: "Others", value: "others" },
];

const ip_op = [
  { label: "In-patient", value: "inPatient" },
  { label: "Out-patient", value: "outPatient" }
]
// mcg, mg, gm, IU
const unit_op = [
  { label: "mcg", value: "mcg" },
  { label: "mg", value: "mg" },
  { label: "gm", value: "gm" },
  { label: "IU", value: "IU" },
  { label: "Other", value: "other" }
]

export { advisedMedicineOptions, genderOptions, ip_op, unit_op };
