import FormLayout from "~/layouts/forms/adr-reporting";
import { Input, DatePicker, Form, Select, Checkbox } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

const { TextArea } = Input;

export default function Form1() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Patient Information</h2>
        </div>
        <div className="w-full">
          <div className="mx-4 min-w-full pt-4">
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Patient Initials"
              />
              <Input />
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="Date of Birth"
                />
                <DatePicker className="w-full" />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription isRequired={true} description="Age" />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription isRequired={false} description="Gender" />
                <Form.Item>
                  <Select allowClear>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Select>
                </Form.Item>
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription isRequired={false} description="Weight" />
                <Input addonAfter={"mgs"} />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription isRequired={false} description="Patient ID" />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription isRequired={true} description="IP/OP" />
                <Input />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription isRequired={true} description="Unit" />
                <Input />
              </div>
            </div>
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Reason for taking medication/vaccination"
              />
              <TextArea rows={4} />
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-3/4 px-4">
                <InputDescription
                  isRequired={true}
                  description="Medicines/vaccines advised by"
                />
                <Checkbox.Group className="w-full grid grid-cols-1">
                  <div className="grid grid-cols-4">
                    <div className="col-span-1">
                      <Checkbox value="A">Doctor</Checkbox>
                    </div>
                    <div className="col-span-1">
                      <Checkbox value="B">Pharmacist</Checkbox>
                    </div>
                    <div className="col-span-1">
                      <Checkbox value="C">Friends</Checkbox>
                    </div>
                    <div className="col-span-1">
                      <Checkbox value="D">Relatives</Checkbox>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <Checkbox value="E">
                        Self (past disease experienced)
                      </Checkbox>
                    </div>
                    <div className="col-span-1">
                      <Checkbox value="F">
                        Self (no past disease experienced)
                      </Checkbox>
                    </div>
                  </div>
                </Checkbox.Group>
              </div>
            </div>
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Known Allergies"
              />
              <Input />
            </div>

            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Social History"
              />
              <Input />
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="1" />
    </FormLayout>
  );
}
