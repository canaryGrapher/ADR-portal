import { DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import InputDescription from "~/components/forms/inputDescription/index";
import InputRadioComponent from "~/components/forms/InputRadioComponent";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form2page2() {
  return (
    <FormLayout>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row gap-4">
          <div className="w-1/2">
            <InputRadioComponent
              title="Report Type"
              radioOptionFalse="Predictable"
              radioOptionTrue="Not Predictable"
            />
          </div>
          <div className="w-1/2">
            <InputRadioComponent
              title="AMC/NCC"
              radioOptionFalse="Applicable"
              radioOptionTrue="Not Applicable"
            />
          </div>
        </div>
        <div className="flex w-full flex-col"></div>
      </div>
      <div className="mt-5 flex w-full flex-col rounded-xl border py-5 shadow-md">
        <div className="mx-8 py-4">
          <div className="flex w-full flex-row">
            <div className="w-1/2 pr-4">
              <InputDescription
                isRequired={true}
                description="Date of Recovery"
              />
              <DatePicker style={{ width: "100%" }} />
            </div>
            <div className="w-1/2">
              <InputDescription
                isRequired={true}
                description="Date of Reaction Started"
              />
              <DatePicker style={{ width: "100%" }} />
            </div>
          </div>
          <div className="mt-5 w-full">
            <InputDescription
              isRequired={false}
              description="Describe reaction or problem"
            />
            <TextArea rows={4} />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="2" />
    </FormLayout>
  );
}
