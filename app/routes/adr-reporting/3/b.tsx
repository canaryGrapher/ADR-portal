import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Radio } from "antd";

export default function Form1page3a() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Action Taken</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Drug 1" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Drug withdrawn</Radio.Button>
              <Radio.Button value={1}>Dose increased</Radio.Button>
              <Radio.Button value={2}>Dose reduced</Radio.Button>
              <Radio.Button value={3}>Dose not Changed</Radio.Button>
              <Radio.Button value={4}>Not applicable</Radio.Button>
              <Radio.Button value={5}>Unknown</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
