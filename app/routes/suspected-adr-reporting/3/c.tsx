import InputDescription from "~/components/forms/inputDescription";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import InputRadioComponent from "~/components/forms/InputRadioComponent";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Input } from "antd";

export default function Form1page3c() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="flex flex-row ">
        <div className="w-1/2 border shadow-xl mx-2">
          <InputRadioComponent
            title="Report Type"
            radioOptionFalse="Not predictable"
            radioOptionTrue="Predictable"
          />
        </div>
        <div className="w-1/2 border shadow-xl mx-2 ">
          <InputRadioComponent
            title="AMC/NCC"
            radioOptionFalse="Not Applicable"
            radioOptionTrue="Applicable"
          />
        </div>
      </div>
      <br />

      <div className="w-full border shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            Reaction reappeared after reintroduction
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Drug 1" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button className="w-48" value={0}>
                No
              </Radio.Button>
              <Radio.Button className="w-48" value={1}>
                Yes
              </Radio.Button>
              <Radio.Button className="w-48" value={3}>
                Effects Unknown
              </Radio.Button>
            </Radio.Group>
            <div className="flex items-center p-4">
              <p className="mb-[0px] pr-1 text-[16px]">Dose</p>
              <Input addonAfter={"?"} className="w-16" />
            </div>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Drug 2" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button className="w-48" value={0}>
                No
              </Radio.Button>
              <Radio.Button className="w-48" value={1}>
                Yes
              </Radio.Button>
              <Radio.Button className="w-48" value={3}>
                Effects Unknown
              </Radio.Button>
            </Radio.Group>
            <div className="flex items-center p-4">
              <p className="mb-[0px] pr-1 text-[16px]">Dose</p>
              <Input addonAfter={"?"} className="w-16" />
            </div>
          </div>
        </div>
      </div>

      <NavigationPanel currentRoute="3c" />
    </FormLayout>
  );
}
