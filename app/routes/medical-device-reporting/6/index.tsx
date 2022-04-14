// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Radio, DatePicker } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { useState } from "react";

const { TextArea } = Input;

export default function Form3page6() {
  const [isRecovered, setIsRecovered] = useState<boolean>(true);
  const [isDead, setIsDead] = useState<boolean>(false);

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
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="flex flex-col pb-8">
          <div className="text-[24px] text-[#E8590C]">Patient Information</div>
        </div>
        <div className="pt-4 grid grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col">
            <InputDescription
              description={"Patient Hospital Number"}
              isRequired={false}
            />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription
              description={"Patient Initials"}
              isRequired={false}
            />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription description={"Age"} isRequired={false} />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription description={"Weight"} isRequired={false} />
            <Input />
          </div>
          <div className="col-span-2">
            <InputDescription description={"Sex"} isRequired={false} />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions1}
              optionType="button"
            />
          </div>
          <div className="col-span-2">
            <InputDescription
              isRequired={false}
              description="Other relevant history, including pre-existing medical conditions"
            />
            <TextArea rows={4} />
          </div>
          <div className="col-span-2">
            <InputDescription
              description={"Has the patient recovered?"}
              isRequired={false}
            />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions2}
              optionType="button"
              onChange={(e) => {
                changeRecoveryData(e);
              }}
            />
          </div>
          <div className="col-span-1">
            <InputDescription
              description={"Date of recovery"}
              isRequired={false}
            />
            <DatePicker className="w-full" disabled={isRecovered === false} />
          </div>
          <div className="col-span-2">
            <InputDescription
              description={"Is the patient dead?"}
              isRequired={false}
            />
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions2}
              optionType="button"
              onChange={(e) => {
                changeDeathData(e);
              }}
            />
          </div>
          <div className="col-span-1">
            <InputDescription
              description={"Date of death"}
              isRequired={false}
            />
            <DatePicker className="w-full" disabled={isDead === false} />
          </div>
          <div className="col-span-2">
            <InputDescription
              description={"Other patient outcomes"}
              isRequired={false}
            />
            <TextArea rows={4} />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="6" />
    </FormLayout>
  );
}
