// Import Form Layout
import FormLayout from "~/layouts/forms";

// Import Ant Design
import { Input, Radio, DatePicker, Button } from "antd";
const { TextArea } = Input;

//Import Images
import { AiOutlineInfoCircle } from "react-icons/ai";
import InputDescription from "~/components/forms/inputDescription/InputDescription";

export default function Form1page4() {
  return (
    <FormLayout>
      <div className="w-full shadow-xl">
        <div className="mx-8 flex flex-col pb-8">
          {/* First */}
          <div className="mt-4 w-full px-4">
            <InputDescription isRequired={true} description="Name" />
            <Input />
          </div>
          {/* Second */}
          <div className="flex flex-row px-4 pt-4">
            <div className="w-1/2 pr-4">
              <InputDescription isRequired={false} description="Id Number" />
              <Input />
            </div>
            <div className="w-1/2 px-4">
              <InputDescription isRequired={false} description="Pin" />
              <Input />
            </div>
            <div></div>
          </div>
          {/* Third */}
          <div className="flex flex-row px-4 pt-4">
            <div className="w-1/2 pr-4">
              <InputDescription isRequired={false} description="Email Id" />
              <Input />
            </div>
            <div className="w-1/2 px-4">
              <InputDescription isRequired={false} description="Tel. Number" />
              <Input />
            </div>
            <div></div>
          </div>
          {/* Fourth */}
          <div className="px-4 pt-4">
            <InputDescription isRequired={false} description="Prof. Address" />
            <TextArea rows={2} />
          </div>
          {/* Fifth */}
          <div className="px-4 pt-4">
            <p className="mb-1 text-[16px]">Occupation</p>
            <Radio.Group name="occupation">
              <Radio value={1}>Physician</Radio>
              <Radio value={2}>Dentist</Radio>
              <Radio value={3}>Nurse</Radio>
              <Radio value={4}>Pharmacist</Radio>
            </Radio.Group>
            <div className="flex flex-row items-center pt-1">
              <Radio value={5}>Others</Radio>
              <div className="w-full">
                <Input suffix={<AiOutlineInfoCircle />} />
              </div>
            </div>
          </div>
          {/* Sixth */}
          <div className="px-4 pt-4">
            <div className="w-1/2">
              <InputDescription isRequired={false} description="Department" />
              <Input />
            </div>
          </div>
          {/* Seventh */}
          <div className="px-4 pt-4">
            <div className="w-1/2">
              <InputDescription
                isRequired={true}
                description="Date of this report"
              />
              <DatePicker className="w-full" />
            </div>
          </div>
          {/* Eighth */}
          <div className="px-4 pt-4">
            <InputDescription isRequired={false} description="References" />
            <TextArea rows={2} />
          </div>
        </div>
      </div>
      {/* Ninth */}
      <div className="mt-4 w-full shadow-xl">
        <div className="mx-8 py-8">
          <div className="px-4 pt-4">
            <InputDescription
              isRequired={false}
              description="Reporter's comments"
            />
            <TextArea rows={2} />
          </div>
        </div>
      </div>
    </FormLayout>
  );
}