import { useState } from "react";

//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

const { TextArea } = Input;

export default function Form3page4d() {
  const [regulatedInIndia, setRegulatedInIndia] = useState<string>("");
  const [availabilityValue, setAvailabilityValue] = useState<string>("");
  const [usagePerManufacturer, setUsagePerManufacturer] = useState<string>("");

  const changeStateOfRadio = (radioIdentifier: string, radioValue: any) => {
    if (radioIdentifier === "1") {
      setRegulatedInIndia(radioValue.target.value);
    }
    if (radioIdentifier === "2") {
      setAvailabilityValue(radioValue.target.value);
    }
    if (radioIdentifier === "3") {
      setUsagePerManufacturer(radioValue.target.value);
    }
  };

  const radioOptions1 = ["Yes", "No", "Don't know"];
  const radioOptions2 = ["A", "B", "C", "D"];
  const radioOptions3 = ["Yes", "No"];
  const radioOptions4 = [
    "Destroyed",
    "Still in use",
    "Returned to manufacturer or importer",
  ];

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          {/* Change the name of the form based on the form */}
          <h2 className="text-[#E8590C]">Further Information</h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col pt-4">
            <InputDescription
              isRequired={true}
              description="Is the device notified/regulated in India?"
            />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions1}
              optionType="button"
              value={regulatedInIndia}
              onChange={(e) => changeStateOfRadio("1", e)}
            />
          </div>
          <div className="flex flex-col pt-4">
            <InputDescription
              isRequired={true}
              description="Device Risk Classification as per India MDR 2017"
            />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions2}
              optionType="button"
            />
          </div>
          <div className="grid grid-cols-2 gap-5 pt-4">
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="License Number"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Catalogue Number"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription isRequired={true} description="Model Number" />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription isRequired={true} description="Batch Number" />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription isRequired={true} description="Serial Number" />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Software Number"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={true}
                description="Accessories/Associated Devices"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={true}
                description="GMDN Code &amp; GMDN Term"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription isRequired={true} description="UDI Number" />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Installation Date"
              />
              <DatePicker />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Expiration Date"
              />
              <DatePicker />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Last Calibration"
              />
              <DatePicker />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription isRequired={true} description="" />
              <DatePicker />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="Age of device from date of manufacturing"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-1">
              <InputDescription
                isRequired={true}
                description="How long was device in use"
              />
              <Input />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={true}
                description="Availability of device for evaluation"
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions3}
                defaultValue={radioOptions3[0]}
                optionType="button"
                value={availabilityValue}
                onChange={(e) => changeStateOfRadio("2", e)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={false}
                description="What is the status of the device?"
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions4}
                optionType="button"
                disabled={availabilityValue === "No"}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={true}
                description="Is the usage of device as per manufacturer’s claims/instructions for use/user manual"
              />
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions3}
                optionType="button"
                value={usagePerManufacturer}
                onChange={(e) => changeStateOfRadio("3", e)}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={false}
                description="Specify usage"
              />
              <TextArea
                rows={3}
                placeholder=""
                disabled={usagePerManufacturer === "No"}
              />
            </div>
            <div className="flex flex-col col-span-2">
              <InputDescription
                isRequired={false}
                description="Regulator / Regulatory status in country of origin"
              />
              <TextArea
                rows={3}
                placeholder=""
                disabled={regulatedInIndia === "Yes"}
              />
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="4d" />
    </FormLayout>
  );
}
