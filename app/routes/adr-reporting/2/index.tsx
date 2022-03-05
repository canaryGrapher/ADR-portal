// Import Form Layout
import FormLayout from "~/layouts/forms";

// Import Ant Design Elements
import { Input, DatePicker, Button } from "antd";
const { TextArea } = Input;

//Import Images
import InfoIcon from "./InfoIcon.svg";

export default function Form1page2() {
  return (
    <FormLayout>
      <div className="form2__wrapper w-full rounded-md shadow-xl">
        <div className="mx-8 flex flex-col pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            Patient Information
          </div>
          <div className="flex flex-row pt-2">
            <div className="w-1/2 px-4">
              {formInputDescription(true, "Date of reaction started")}
              <DatePicker className="w-full" />
            </div>
            <div className="w-1/2 pr-4">
              {formInputDescription(true, "Date of recovery")}
              <DatePicker className="w-full" />
            </div>
          </div>
          <div className="mt-4 w-full px-4">
            {formInputDescription(false, "Describe reaction or problem")}
            <TextArea rows={4} />
          </div>
        </div>
        <div className="form2_buttons"></div>
      </div>
    </FormLayout>
  );
}

function formInputDescription(isRequired: Boolean, description: String) {
  return (
    <div className="flex flex-row items-center pb-1">
      {isRequired && <span className="pr-1 text-red-500">*</span>}
      <p className="mb-[0px] pr-1 text-[16px]">{description}</p>
      <img src={InfoIcon} alt="info icon" />
    </div>
  );
}
