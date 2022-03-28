// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
const { TextArea } = Input;

export default function Form3page5() {
  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="flex flex-col pb-8">
          <div className="text-[24px] text-[#E8590C]">Casualty Assessment</div>
          {/* enter form code here */}
        </div>
      </div>
      <NavigationPanel currentRoute="8" />
    </FormLayout>
  );
}
