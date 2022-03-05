// Import Form Layout
import FormLayout from "~/layouts/forms";

// Import Ant Design Elements
import { Input, DatePicker, Button } from "antd";
const { TextArea } = Input;

import InputDescription from "~/components/forms/inputDescription/InputDescription";

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
              <InputDescription
                isRequired={true}
                description="Date of reaction started"
              />
              <DatePicker className="w-full" />
            </div>
            <div className="w-1/2 pr-4">
              <InputDescription
                isRequired={true}
                description="Date of recovery"
              />
              <DatePicker className="w-full" />
            </div>
          </div>
          <div className="mt-4 w-full px-4">
            <InputDescription
              isRequired={false}
              description="Describe reaction or problem"
            />
            <TextArea rows={4} />
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
