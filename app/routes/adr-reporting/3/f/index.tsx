// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Radio } from "antd";

export default function Form1page3f1() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="">
          <div className="pl-4 text-[24px] text-[#E8590C]">Naranjo’s Scale</div>
          <form>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Are there previous conclusion reports on this reaction?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Are there previous conclusion reports on this reaction?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Did the adverse event appear after the suspect drug was administered?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Did the AR improve when the drug was discontinued or a specific antagonist was administered?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Did the AR reappear when drug was re-administered?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Are there alternate causes [other than the drug] that could solely have caused the reaction?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Did the reaction reappear when a placebo was given?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Was the drug detected in the blood [or other fluids] in a concentration known to be toxic?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Was the reaction more severe when the dose was increased or less severe when the dose was decreased?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Did the patient have a similar reaction to the same or similar drugs in any previous exposure?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
            <div className="w-full pt-4">
              <InputDescription
                isRequired={false}
                description="Was the adverse event confirmed by objective evidence?"
              />
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Yes</Radio.Button>
                <Radio.Button value={1}>No</Radio.Button>
                <Radio.Button value={2}>Don't know</Radio.Button>
              </Radio.Group>
            </div>
          </form>
          {/* calculated score for the ADR is displayed here */}
          <div className="flex flex-row-reverse">
            <div className="grid grid-cols-2 gap-x-3">
              <div className="flex flex-col justify-end">
                <p className="text-lg text-[#6C567B] p-0 m-0">Probable ADR</p>
              </div>
              <div className="flex flex-col justify-end">
                <p className="text-[#6C567B] p-0 m-0">
                  <span className="font-bold text-4xl">07</span>/10
                </p>
              </div>
              <div className="flex flex-row font-bold m-0 p-0">
                <p className="m-0 p-0">Result</p>
                <FiHelpCircle className="mt-1 ml-1" />
              </div>
              <div className="">
                <p className="my-auto font-bold">Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="3f" />
    </FormLayout>
  );
}
