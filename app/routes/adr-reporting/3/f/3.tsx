import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Radio, Progress } from "antd";

export default function Form1page3f3() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Hartwig's Severity Assessment Scale</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Drug 1" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Level 1</Radio.Button>
              <Radio.Button value={1}>Level 2</Radio.Button>
              <Radio.Button value={2}>Level 3</Radio.Button>
              <Radio.Button value={3}>Level 4</Radio.Button>
              <Radio.Button value={4}>Level 5</Radio.Button>
              <Radio.Button value={5}>Level 6</Radio.Button>
              <Radio.Button value={6}>Level 7</Radio.Button>
            </Radio.Group>
            <div className="flex px-3">
              <div className="w-2/3">
                <Progress percent={30} showInfo={false} />
              </div>
              <p className="px-4">Mild Level</p>
            </div>
            <div className="w-full p-4 shadow-xl">
              <h5 className="text-xl text-[#E8590C]">Assessment criteria</h5>
              <p>The ADR requires no change in the treatment with the suspected drug.</p>
              <p>The ADR requires that the suspected drug be withheld, discontinued or otherwise changed. No antidote or other treatment is required, and there is no increase in length of stay</p>
              <p>The ADR requires no change in the treatment with the suspected drug.</p>
              <p>The ADR requires no change in the treatment with the suspected drug.</p>
              <p>The ADR requires no change in the treatment with the suspected drug.</p>
              <p>The ADR requires no change in the treatment with the suspected drug.</p>
            </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
