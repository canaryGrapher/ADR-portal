import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Radio } from "antd";

export default function Form1page3i() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Outcome</div>
          <div className="mx-4 min-w-full pt-4">
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Fatal</Radio.Button>
              <Radio.Button value={1}>Recovery</Radio.Button>
              <Radio.Button value={2}>Continuing</Radio.Button>
              <Radio.Button value={3}>Unknown</Radio.Button>
              <Radio.Button value={4}>Other</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
