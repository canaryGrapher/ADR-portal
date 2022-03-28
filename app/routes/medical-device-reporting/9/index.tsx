// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
const { TextArea } = Input;

export default function Form3page9() {
  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="flex flex-col pb-8">
          <div className="text-[24px] text-[#E8590C]">
            Product Owner's Investigation
          </div>
          <div className="mt-4 w-full">
            <InputDescription
              isRequired={true}
              description="Product Owners device risk analysis report"
            />
            <TextArea rows={4} />
          </div>
          <div className="mt-4 w-full">
            <InputDescription
              isRequired={true}
              description="Corrective / preventive action taken"
            />
            <TextArea rows={4} />
          </div>
          <div className="mt-4 w-full">
            <InputDescription
              isRequired={false}
              description="Device history review"
            />
            <TextArea rows={4} />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="9" />
    </FormLayout>
  );
}
