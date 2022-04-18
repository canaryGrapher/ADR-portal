// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { useState } from "react";
import { Input, Radio, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

const { TextArea } = Input;

export default function Form1() {
  const [reporterType, setReporterType] = useState<string>("manufacturer");
  const changedReporterType = (e: any) => {
    setReporterType(e.target.value);
  };

  const radioOptionsReporter = [
    { label: "Manufacturer", value: "manufacturer" },
    { label: "Importer", value: "importer" },
    { label: "Distributor", value: "distributor" },
    { label: "Patients", value: "patients" },
    { label: "Healthcare Professionals", value: "healthcareProfessionals" },
  ];

  const radioOptions = ["Yes", "No", "Don't Know"];

  return (
    <FormLayout>
      <Form
        name="Form3page2"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
        layout="vertical"
      >
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Reporter Information</h2>
          </div>
          <div className="w-full">
            <Form.Item
              label="Type of Reporter"
              name="typeOfReporter"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptionsReporter}
                optionType="button"
                value={reporterType}
                onChange={(value) => changedReporterType(value)}
              />
            </Form.Item>
            <Form.Item label="If Others" name="ifOthers">
              <Input />
            </Form.Item>
            <Form.Item
              label="Has the reporter informed the incident to the manufacturer?"
              name="hasTheReporterInformedTheIncidentToTheManufacturer"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
            <Form.Item
              label="Is the reporter also submitting the report on behalf of the manufacturer?"
              name="isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item label="Name" name="name" className="w-full">
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item label="Email Id" name="emailId" className="w-full">
              <Input />
            </Form.Item>
            <Form.Item label="Address" name="address" className="w-full">
              <TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="2" />
      </Form>
    </FormLayout>
  );
}
