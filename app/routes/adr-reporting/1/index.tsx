import FormLayout from "~/layouts/forms/adr-reporting";
import { Input, DatePicker, Form, Select, Checkbox, InputNumber } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/1";

const { TextArea } = Input;

export default function Form1page1() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page1);
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        name="Form1Page1"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
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
                <Select allowClear>
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>
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
              <Checkbox.Group className="w-full">
                <div className="grid grid-cols-4 gap-x-5 gap-y-2">
                  <div className="col-span-1">
                    <Checkbox value="Doctor">Doctor</Checkbox>
                  </div>
                  <div className="col-span-1">
                    <Checkbox value="Pharmacist">Pharmacist</Checkbox>
                  </div>
                  <div className="col-span-1">
                    <Checkbox value="Friends">Friends</Checkbox>
                  </div>
                  <div className="col-span-1">
                    <Checkbox value="Relative">Relatives</Checkbox>
                  </div>
                  <div className="col-span-2">
                    <Checkbox value="Self (past disease experienced)">
                      Self (past disease experienced)
                    </Checkbox>
                  </div>
                  <div className="col-span-2">
                    <Checkbox value="Self (no past disease experienced)">
                      Self (no past disease experienced)
                    </Checkbox>
                  </div>
                </div>
              </Checkbox.Group>
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
