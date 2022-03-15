// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Checkbox, Input } from "antd";
import { FiHelpCircle } from "react-icons/fi";

export default function Form1page3f5() {
  const options = [
    { label: "Age", value: "age" },
    { label: "Gender", value: "gender" },
    { label: "Genetic", value: "genetic" },
    { label: "Inter-current disease", value: "inter-current disease" },
    { label: "Multiple Drug Therapy", value: "multiple drug therapy" },
  ];
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Predictability</div>
          <div className="mx-4 min-w-full pt-4">
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Predictable</Radio.Button>
              <Radio.Button value={1}>Not predictable</Radio.Button>
            </Radio.Group>
          </div>
          <div className="pl-4 my-4 text-[24px] text-[#E8590C]">
            Predisposing factors
          </div>
          <div className="pl-4">
            <Checkbox.Group options={options}></Checkbox.Group>
            <div className="flex flex-row pt-2">
              <div className="flex flex-col justify-center">
                <Checkbox value="other">Other</Checkbox>
              </div>
              <Input suffix={<FiHelpCircle />} />
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="3f5" />
    </FormLayout>
  );
}
