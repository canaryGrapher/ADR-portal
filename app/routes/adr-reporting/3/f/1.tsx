import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Radio } from "antd";

export default function Form1page3f1() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Naranjo’s Scale</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Are there previous conclusion reports on this reaction?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Are there previous conclusion reports on this reaction?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Did the adverse event appear after the suspect drug was administered?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Did the AR improve when the drug was discontinued or a specific antagonist was administered?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Did the AR reappear when drug was re-administered?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Are there alternate causes [other than the drug] that could solely have caused the reaction?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Did the reaction reappear when a placebo was given?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was the reaction more severe when the dose was increased or less severe when the dose was decreased?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Did the patient have a similar reaction to the same or similar drugs in any previous exposure?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Was the adverse event confirmed by objective evidence?" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
              <Radio.Button value={2}>Don't know</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
