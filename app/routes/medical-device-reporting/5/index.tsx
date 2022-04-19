import { useState } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { DatePicker, Input, Radio, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page5() {
  const [isSeriousEvent, setIsSeriousEvent] = useState<boolean>();
  const [isDead, setIsDead] = useState<boolean>();
  const [isReturned, setIsReturned] = useState<boolean>();


  const radioOptions1 = [
    "Hospital Premise",
    "Manufacturer Premise",
    "Home",
    "Others",
  ];
  const radioOptions2 = [
    "Healthcare professional",
    "Patient",
    "Problem noted before use",
    "Others",
  ];
  const radioOptions3 = [
    "Returned to the company",
    "Implanted in patient",
    "Within the facility",
    "At patient home",
    "Destroyed",
    "Others",
  ];
  const radioOptions4 = ["Yes", "No"];
  const radioOptions5 = [
    "Death",
    "Life Threatening",
    "Disability",
    "Hospitalization",
    "Congenital Anomaly",
    "Any medical event",
    "Permanent Impairment",
  ];

  const changeSeriousEventState = (e: any) => {
    if (e.target.value === "Yes") {
      setIsSeriousEvent(true);
    } else {
      setIsSeriousEvent(false);
    }
  };

  const changeSeriousEventValue = (e: any) => {
    if (e.target.value === "Death") {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  };

  const changeDeviceLocation = (e: any) => {
    if (e.target.value === "Returned to the company") {
      setIsReturned(true);
    } else {
      setIsReturned(false);

  return (
    <FormLayout>
      <Form
        name="Form3page5"
        initialValues={{ remember: true }}
        onFinish={(value) => console.log(value)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">Event Description</div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-5">
                <Form.Item
                  label="Date of Event"
                  name="dateOfEvent"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Date of Implant"
                  name="dateOfImplant"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label="Location of event"
                  name="locationOfEvent"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions1}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device Operator"}
                  name="deviceOperator"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions2}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device location"}
                  name="deviceLocation"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions3}
                    optionType="button"
                    onChange={(e) => {
                      changeDeviceLocation(e);
                    }}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item label={"Date of return"} name="dateOfReturn">
                  <DatePicker disabled={!isReturned} className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item label={"Serious event?"} name="seriousEvent">
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                    onChange={(e) => {
                      changeSeriousEventState(e);
                    }}
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item label={"Reason"} name="reason" className="w-full" required={isSeriousEvent}>
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions5}
                    optionType="button"
                    disabled={!isSeriousEvent}
                    onChange={(e) => {
                      changeSeriousEventValue(e);
                    }}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item label={"Date of death"} name="dateOfDeath" required={isDead}>
                  <DatePicker disabled={!isDead} className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Is device in use after the incident?"}
                  name="isDeviceInUse"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Detailed description of the incident"}
                  name="detailedDescription"
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events in India
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Year"} name="year" className="w-full">
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarIndia"
                      className="w-full"
                    >
                      <Input type="number" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedIndia"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Frequency"}
                      name="frequencyIndia"
                      className="w-full"
                    >
                      <Input className="w-full" />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events globally
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Year"} name="year" className="w-full">
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarGlobal"
                      className="w-full"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedGlobal"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Frequency"} name="frequencyGlobal">
                      <Input />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="5" />
      </Form>
    </FormLayout>
  );
}
