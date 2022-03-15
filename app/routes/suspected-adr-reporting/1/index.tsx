import { DatePicker, Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import RadioOptions from "~/components/forms/suspectedADRRadioMenu";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form2page1() {
  return (
    <FormLayout>
      <div className="flex w-full flex-col rounded-xl border p-10 shadow-md">
        <div className="text-[24px] text-[#E8590C]">Patient Information</div>
        <div className="py-4">
          <div className="w-full">
            <InputDescription
              isRequired={true}
              description="Patient Initials"
            />
            <Input />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div>
              <InputDescription isRequired={true} description="Date of Birth" />
              <DatePicker style={{ width: "100%" }} />
            </div>
            <div>
              <InputDescription
                isRequired={true}
                description="Age at time of event"
              />
              <Input />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-5">
            <div>
              <InputDescription isRequired={false} description="Gender" />
              <Input />
            </div>
            <div>
              <InputDescription isRequired={false} description="Weight" />
              <Input suffix={"kgs"} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col mt-5">
        <RadioOptions />
      </div>
      <NavigationPanel currentRoute="1" />
    </FormLayout>
  );
}
