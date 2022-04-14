// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { useState } from "react";
import { Input, Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

const { TextArea } = Input;

export default function Form1() {
  const [reporterType, setReporterType] = useState<string>("manufacturer");
  const changedReporterType = (e: any) => {
    setReporterType(e.target.value);
  };
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          <h2 className="text-[#E8590C]">Reporter Information</h2>
        </div>
        <div className="w-full">
          <div className="mx-4 min-w-full pt-4">
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={false}
                description="Type of Reporter"
              />
              <Radio.Group
                buttonStyle="solid"
                className="w-full"
                onChange={(e) => changedReporterType(e)}
              >
                <Radio.Button
                  value={"manufacturer"}
                  className="w-1/6 text-center"
                >
                  Manufacturer
                </Radio.Button>
                <Radio.Button value={"importer"} className="w-1/6 text-center">
                  Importer
                </Radio.Button>
                <Radio.Button
                  value={"distributor"}
                  className="w-1/6 text-center"
                >
                  Distributor
                </Radio.Button>
                <Radio.Button value={"patients"} className="w-1/6 text-center">
                  Patients
                </Radio.Button>
                <Radio.Button
                  value={"healthcareprofessionals"}
                  className="w-1/4 text-center"
                >
                  Healthcare Professional
                </Radio.Button>
              </Radio.Group>
            </div>

            <div className="mt-4 w-full px-4">
              <InputDescription isRequired={false} description="If Others" />
              <Input />
            </div>

            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={false}
                description="Has the reporter informed the incident to the manufacturer?"
              />
              <Radio.Group
                buttonStyle="solid"
                className="w-full"
                disabled={reporterType === "manufacturer"}
              >
                <Radio.Button value={0} className="w-1/3 text-center">
                  Yes
                </Radio.Button>
                <Radio.Button value={1} className="w-1/3 text-center">
                  No
                </Radio.Button>
                <Radio.Button value={2} className="w-1/3 text-center">
                  Dont Know
                </Radio.Button>
              </Radio.Group>
            </div>

            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={false}
                description="Is the reporter also submitting the report on behalf of the manufacturer?"
              />
              <Radio.Group
                buttonStyle="solid"
                className="w-full"
                disabled={reporterType === "manufacturer"}
              >
                <Radio.Button value={0} className="w-1/3 text-center">
                  Yes
                </Radio.Button>
                <Radio.Button value={1} className="w-1/3 text-center">
                  No
                </Radio.Button>
                <Radio.Button value={2} className="w-1/3 text-center">
                  Dont Know
                </Radio.Button>
              </Radio.Group>
            </div>

            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription isRequired={false} description="Name" />
                <Input />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription
                  isRequired={false}
                  description="Phone Number"
                />
                <Input />
              </div>
            </div>

            <div className="flex flex-row pt-4">
              <div className="w-full px-4">
                <InputDescription isRequired={false} description="Email ID" />
                <Input />
              </div>
            </div>

            <div className="mt-4 w-full px-4">
              <InputDescription isRequired={false} description="Address" />
              <TextArea rows={4} />
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="2" />
    </FormLayout>
  );
}
