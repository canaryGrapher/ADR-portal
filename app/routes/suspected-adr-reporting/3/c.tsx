import InputDescription from "~/components/forms/inputDescription";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import RadioOptions from "~/components/forms/suspectedADRRadioMenu";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Input } from "antd";

import { FiHelpCircle } from "react-icons/fi";

export default function Form1page3c() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="flex w-full flex-col">
        <RadioOptions />
      </div>

      <div className="shadow-xl rounded-md w-full p-10 border mt-4">
        <div className="text-[24px] text-[#E8590C]">
          Reaction reappeared after reintroduction
        </div>
        <RadioGroupDrugs />
      </div>

      <NavigationPanel currentRoute="3c" />
    </FormLayout>
  );
}

const RadioGroupDrugs = () => (
  <div className="pt-4">
    <InputDescription isRequired={true} description="Drug 1" />
    <Radio.Group defaultValue={0} buttonStyle="solid" className="w-full">
      <Radio.Button className="w-1/3" value={0}>
        No
      </Radio.Button>
      <Radio.Button className="w-1/3" value={1}>
        Yes
      </Radio.Button>
      <Radio.Button className="w-1/3" value={2}>
        Effects Unknown
      </Radio.Button>
    </Radio.Group>
    <div className="flex items-center pt-5">
      <p className="mb-[0px] pr-3 text-[16px]">Dose</p>
      <Input suffix={<FiHelpCircle />} className="w-16" />
    </div>
  </div>
);
