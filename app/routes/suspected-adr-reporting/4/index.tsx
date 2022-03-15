// importing layouts
import FormLayout from "~/layouts/forms/suspected-adr-reporting";

//importing components
import InputDescription from "~/components/forms/inputDescription";
import { Form, DatePicker, Input } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
const TextArea = Input.TextArea;

export default function Form3page4() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-[24px] text-[#E8590C]">Reporter Details</div>
        <Form>
          <div className="py-4 flex flex-col">
            <InputDescription
              isRequired={true}
              description="Date of this report"
            />
            <DatePicker />
          </div>
          <div className="py-4 flex flex-col">
            <InputDescription
              isRequired={true}
              description="Date of this report"
            />
            <Input />
          </div>
          <div className="py-4 grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <InputDescription isRequired={true} description="Email ID" />
              <Input />
            </div>
            <div className="col-span-6">
              <InputDescription isRequired={true} description="Tel. No." />
              <Input />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <InputDescription
              isRequired={true}
              description="Professional Address"
            />
            <TextArea rows={2} />
          </div>
          <div className="py-4 grid grid-cols-12 gap-5">
            <div className="col-span-6">
              <InputDescription isRequired={true} description="Pincode" />
              <Input />
            </div>
            <div className="col-span-6">
              <InputDescription isRequired={true} description="Occupation" />
              <Input />
            </div>
          </div>
        </Form>
      </div>
      <NavigationPanel currentRoute="4" />
    </FormLayout>
  );
}
