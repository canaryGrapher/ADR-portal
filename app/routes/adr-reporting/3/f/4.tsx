// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import InputDescription from "~/components/forms/inputDescription";
import { Radio } from "antd";

export default function Form1page3f4() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="">
          <div className="text-[24px] text-[#E8590C]">
            Modified Schumock and Thornton scale
          </div>
          <div className="w-full pt-2">
            <InputDescription
              isRequired={false}
              description="Was there a history of allergy or previous reactions to the drug?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was the drug involved inappropriate for the patient’s clinical condition?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was the dose, route or frequency of administration inappropriate for the patient’s age, weight or disease state?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was a toxic serum drug concentration (or laboratory monitoring test) documented?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was there a known treatment for the adverse drug reaction?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was required therapeutic drug monitoring or other necessary lab tests not performed?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Was a drug interaction involved in the ADR?"
            />
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Yes</Radio.Button>
              <Radio.Button value={1}>No</Radio.Button>
            </Radio.Group>
          </div>
          <div className="w-full pt-6">
            <p className="text-[16px] m-0 font-bold">Final Result</p>
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Definitely preventable</Radio.Button>
              <Radio.Button value={1}>Probably preventable</Radio.Button>
              <Radio.Button value={2}>Not preventable</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="3f4" />
    </FormLayout>
  );
}
