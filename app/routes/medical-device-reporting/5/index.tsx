import { useState } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { DatePicker, Input, Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
const { TextArea } = Input;

export default function Form3page5() {
  const [isSeriousEvent, setIsSeriousEvent] = useState<boolean>(false);
  const [isDead, setIsDead] = useState<boolean>(false);

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

  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="flex flex-col pb-8">
          <div className="text-[24px] text-[#E8590C]">Event Description</div>
          <div className="w-full grid grid-cols-2 gap-5 pt-4">
            <div className="col-span-1 flex flex-col">
              <InputDescription
                description={"Date of Event"}
                isRequired={true}
              />
              <DatePicker />
            </div>
            <div className="col-span-1 flex flex-col">
              <InputDescription
                description={"Date of Implant"}
                isRequired={true}
              />
              <DatePicker />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Location of event"}
                isRequired={true}
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions1}
                optionType="button"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Device Operator"}
                isRequired={true}
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions2}
                optionType="button"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Device location"}
                isRequired={true}
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions3}
                optionType="button"
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <InputDescription
                description={"Date of return"}
                isRequired={true}
              />
              <DatePicker />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Serious event?"}
                isRequired={true}
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions4}
                optionType="button"
                onChange={(e) => {
                  changeSeriousEventState(e);
                }}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription description={"Reason"} isRequired={true} />
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
            </div>
            <div className="col-span-1 flex flex-col">
              <InputDescription
                description={"Date of death"}
                isRequired={true}
              />
              <DatePicker disabled={!isDead} />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Is device in use after the incident?"}
                isRequired={true}
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions4}
                optionType="button"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <InputDescription
                description={"Detailed description of the incident"}
                isRequired={true}
              />
              <TextArea rows={4} />
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="text-[22px] text-[#E8590C]">
                Frequency of occurrence of similar adverse events in India
              </div>
              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col col-span-1">
                  <InputDescription description={"Year"} isRequired={true} />
                  <DatePicker picker="year" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Number of similar events"}
                    isRequired={true}
                  />
                  <Input type="number" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Total number suplied"}
                    isRequired={true}
                  />
                  <Input type="number" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Frequency"}
                    isRequired={true}
                  />
                  <Input />
                </div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col">
              <div className="text-[22px] text-[#E8590C]">
                Frequency of occurrence of similar adverse events globally
              </div>
              <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col col-span-1">
                  <InputDescription description={"Year"} isRequired={true} />
                  <DatePicker picker="year" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Number of similar events"}
                    isRequired={true}
                  />
                  <Input type="number" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Total number suplied"}
                    isRequired={true}
                  />
                  <Input type="number" />
                </div>
                <div className="flex flex-col col-span-1">
                  <InputDescription
                    description={"Frequency"}
                    isRequired={true}
                  />
                  <Input />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="5" />
    </FormLayout>
  );
}
