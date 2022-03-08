import FormLayout from "~/layouts/forms";

import { Radio, Checkbox, Input } from "antd";

export default function Form1page3f5() {
  const options = [
    { label: 'Age', value: 'Age' },
    { label: 'Gender', value: 'Gender' },
    { label: 'Genetic', value: 'Genetic' },
    { label: 'Multiple Drug Therapy', value: 'Multiple Drug Therapy' },
    { label: 'Others', value: 'Others' }
  ];
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Predictability</div>
          <div className="mx-4 min-w-full pt-4">
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Predictable</Radio.Button>
              <Radio.Button value={1}>Not predictable</Radio.Button>
            </Radio.Group>
          </div>
          <div className="pl-4 my-4 text-[24px] text-[#E8590C]">Predisposing factors</div>
          <div className="pl-4">
            <Checkbox.Group options={options}></Checkbox.Group>
            <Input addonAfter="?"/>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
