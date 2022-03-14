import { DatePicker, Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import InputRadioComponent from "~/components/forms/InputRadioComponent";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form2page1() {
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
          <div className="w-full">
            <InputDescription
              isRequired={true}
              description="Patient Initials"
            />
            <Input />
          </div>
          <div className="mt-5 flex w-full flex-row">
            <div className="w-1/2 pr-4">
              <InputDescription isRequired={true} description="Date of Birth" />
              <DatePicker style={{ width: "100%" }} />
            </div>
            <div className="w-1/2">
              <InputDescription
                isRequired={true}
                description="Age at time of event"
              />
              <Input />
            </div>
          </div>
          <div className="mt-5 flex w-full flex-row">
            <div className="w-1/2 pr-4">
              <InputDescription isRequired={false} description="Gender" />
              <Input />
            </div>
            <div className="w-1/2">
              <InputDescription isRequired={false} description="Weight" />
              <Input suffix={"kgs"} />
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="1" />
    </FormLayout>
  );
}
