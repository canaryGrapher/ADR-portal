// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Radio, DatePicker, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { useState } from "react";

export default function Form3page6() {
  const [isRecovered, setIsRecovered] = useState<boolean>();
  const [isDead, setIsDead] = useState<boolean>();

  const changeDeathData = (e: any) => {
    if (e.target.value === "Yes") {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  };

  const changeRecoveryData = (e: any) => {
    if (e.target.value === "Yes") {
      setIsRecovered(true);
    } else {
      setIsRecovered(false);
    }
  };

  const radioOptions1 = ["Male", "Female", "Others"];
  const radioOptions2 = ["Yes", "No"];
  return (
    <FormLayout>
      <Form
        name="Form3page6"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">
              Patient Information
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                label={"Patient Hospital Number"}
                name="patientHospitalNumber"
              >
                <Input className="w-full" />
              </Form.Item>
              <Form.Item label={"Patient Initials"} name="patientInitials">
                <Input className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item label={"Age"} name="age" className="w-full">
                <Input className="w-full" />
              </Form.Item>
              <Form.Item label={"Weight"} name="weight">
                <Input className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1">
              <Form.Item label={"Sex"} name="sex" className="w-full">
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions1}
                  optionType="button"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1">
              <Form.Item
                name="history"
                label="Other relevant history, including pre-existing medical conditions"
                className="w-full"
              >
                <Input.TextArea rows={4} className="w-full" />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Has the patient recovered?"}
                name="patientRecovered"
              >
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions2}
                  optionType="button"
                  onChange={(e) => {
                    changeRecoveryData(e);
                  }}
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                label={"Date of recovery"}
                name="dateOfRecovery"
                className="w-full"
                required={isRecovered}
              >
                <DatePicker className="w-full" disabled={!isRecovered} />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Is the patient dead?"}
                name="patientDead"
                className="w-full"
              >
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions2}
                  optionType="button"
                  onChange={(e) => {
                    changeDeathData(e);
                  }}
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                label={"Date of death"}
                name="dateOfDeath"
                className="w-full"
                required={isDead}
              >
                <DatePicker className="w-full" disabled={!isDead} />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Other patient outcomes"}
                name="otherPatientOutcomes"
                className="w-full"
              >
                <Input.TextArea rows={4} className="w-full" />
              </Form.Item>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="6" />
      </Form>
    </FormLayout>
  );
}
