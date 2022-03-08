import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import { Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";

export default function Form1page3g() {
    const options = ["Specific", "Symptomatic", "None"]
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Treatment Given</div>
          <div className="mx-4 min-w-full pt-4">
            <Checkbox.Group options={options}></Checkbox.Group>
          </div>
        </div>
      </div>
      <div className="w-full my-4 shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Treatment Details</div>
          <div className="mx-4 w-2/3 pt-4">
            <TextArea rows={4}/>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
