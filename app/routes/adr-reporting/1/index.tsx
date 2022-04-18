import FormLayout from "~/layouts/forms/adr-reporting";
import { Input, DatePicker, Form, Select, Checkbox, InputNumber } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { useLoaderData } from "remix";
// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  fetchIncompleteFormsFromUserProfile,
} from "~/states/Slices/AdrReportingForm/1";
import moment from "moment";

const { TextArea } = Input;

export const loader = async () => {
  const data = {
    patientInitials: "Adam Levine",
    DateOfBirth: "2022-04-18T17:27:37.758Z",
    ageOfOnset: 25,
    gender: null,
    weight: null,
    patientID: null,
    ip_op: null,
    unit: null,
    reasonForTakingMedication: null,
    medicineAdvised: null,
    knownAllergies: null,
    socialHistory: null,
  };
  return data;
};

export default function Form1page1() {
  const data = useLoaderData();
  data.DateOfBirth = moment(data.DateOfBirth);
  const formState = useSelector((state: RootState) => state.form1page1);
  const dispatch = useDispatch();

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  // options for form items
  const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
  const advisedMedicineOptions = [
    { label: "Doctor", value: "doctor" },
    { label: "Pharmacist", value: "pharmacist" },
    { label: "Friends", value: "friends" },
    {
      label: "Self (past disease experienced)",
      value: "self(past disease experienced)",
    },
    {
      label: "Self (no past disease experienced)",
      value: "self(no past disease experienced)",
    },
  ];

  return (
    <FormLayout>
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page1"
        initialValues={formState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Patient Information</h2>
          </div>
          <div className="w-full">
            <Form.Item
              label="Patient Initials"
              name="patientInitials"
              rules={[
                { required: true, message: "Patient initials is required" },
              ]}
              className="w-full"
            >
              <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                label="Date of Birth"
                name="DateOfBirth"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>

              <Form.Item
                className="w-full"
                label="Age of Onset"
                name="ageOfOnset"
                rules={[
                  { required: true, message: "Age of onset is required" },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Form.Item label="Gender" name="gender" className="w-full">
                <Select allowClear options={genderOptions} />
              </Form.Item>
              <Form.Item className="w-full" label="Weight" name="weight">
                <InputNumber addonAfter={"mgs"} />
              </Form.Item>
              <Form.Item name="patientID" label="Patient ID" className="w-full">
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item label="IP/OP" name="ip_op" className="w-full">
                <Input />
              </Form.Item>
              <Form.Item label="Unit" name="unit" className="w-full">
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Reason for taking medication/vaccination"
              name="reasonForTakingMedication"
              className="w-full py-4"
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Medicines/vaccines advised by"
              name="medicineAdvised"
              className="w-3/4"
            >
              <Checkbox.Group
                className="w-full grid grid-cols-3 gap-x-5 gap-y-2"
                options={advisedMedicineOptions}
                name="medicineAdvised"
              />
            </Form.Item>

            <Form.Item
              label="Known Allergies"
              name="knownAllergies"
              className="w-full"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Social History"
              name="socialHistory"
              className="w-full"
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="1" />
      </Form>
    </FormLayout>
  );
}
