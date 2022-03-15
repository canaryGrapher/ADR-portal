import { DatePicker } from "antd";
import TextArea from "antd/lib/input/TextArea";
import InputDescription from "~/components/forms/inputDescription/index";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form2page2() {
  return (
    <FormLayout>
      <div className="flex w-full flex-col rounded-xl border p-10 shadow-md">
        <div className="">
          <div className="text-[24px] text-[#E8590C]">
            Suspected Adverse Reaction
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <InputDescription
                isRequired={true}
                description="Date of Recovery"
              />
              <DatePicker style={{ width: "100%" }} />
            </div>
            <div>
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
