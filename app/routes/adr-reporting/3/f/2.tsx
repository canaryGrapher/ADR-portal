import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Collapse } from 'antd';
const { Panel } = Collapse;

import { Radio } from "antd";

export default function Form1page3f2() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
        <div className="w-full shadow-xl">
            <div className="mx-8 py-4 pb-8">
              <div className="pl-4 text-[24px] text-[#E8590C]">WHO Probability Scale</div>
              <div className="mx-4 min-w-full pt-4">
                <InputDescription isRequired={true} description="Are there previous conclusion reports on this reaction?" />
                <Radio.Group defaultValue={0} buttonStyle="solid">
                  <Radio.Button value={0}>Certain</Radio.Button>
                  <Radio.Button value={1}>Probably</Radio.Button>
                  <Radio.Button value={2}>Possible</Radio.Button>
                  <Radio.Button value={3}>Unlikely</Radio.Button>
                  <Radio.Button value={4}>Conditional</Radio.Button>
                  <Radio.Button value={5}>Un-classifiable</Radio.Button>
                </Radio.Group>
              </div>
              <div className="px-4 my-4">
                <Collapse defaultActiveKey={['1']} >
                  <Panel header="This is panel header 1" key="1">
                    <p>College</p>
                  </Panel>
                  <Panel header="This is panel header 2" key="2">
                    <p>College</p>
                  </Panel>
                  <Panel header="This is panel header 3" key="3">
                    <p>College</p>
                  </Panel>
                </Collapse>
              </div>
            </div>
        </div>
    </FormLayout>
  );
}
