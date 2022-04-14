// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Import Ant Design
import { Input, Radio, DatePicker } from "antd";
const { TextArea } = Input;

//Import Images
import { FiHelpCircle } from "react-icons/fi";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page4() {
  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="pl-4 text-3xl">
          <h2 className="text-[#E8590C]">Reporter Details</h2>
        </div>
        <div className="flex flex-col pb-8">
          {/* First */}
          <div className="mt-4 w-full">
            <InputDescription isRequired={true} description="Name" />
            <Input />
          </div>
          {/* Second */}
          <div className="grid grid-cols-1 gap-5 pt-4">
            <div className="col-span-1">
              <InputDescription isRequired={false} description="ID Number" />
              <Input />
            </div>
            <div className="col-span-1">
              <InputDescription isRequired={false} description="Pin" />
              <Input />
            </div>
            <div></div>
          </div>
          {/* Third */}
          <div className="grid grid-cols-2 gap-5 pt-4">
            <div className="col-span-1">
              <InputDescription isRequired={true} description="Email ID" />
              <Input />
            </div>
            <div className="col-span-1">
              <InputDescription isRequired={true} description="Tel. Number" />
              <Input />
            </div>
            <div></div>
          </div>
          {/* Fourth */}
          <div className="pt-4">
            <InputDescription isRequired={false} description="Prof. Address" />
            <TextArea rows={2} />
          </div>
          {/* Fifth */}
          <div className="pt-4">
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
                <Input suffix={<FiHelpCircle />} />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {/* Sixth */}
            <div className="pt-4">
              <div>
                <InputDescription isRequired={false} description="Department" />
                <Input />
              </div>
            </div>
            {/* Seventh */}
            <div className="pt-4">
              <div>
                <InputDescription
                  isRequired={false}
                  // defaultValue={Number(Date.now())} value is today's date
                  description="Date of this report"
                />
                <DatePicker className="w-full" />
              </div>
            </div>
          </div>
          {/* Eighth */}
          <div className="pt-4">
            <InputDescription isRequired={false} description="References" />
            <TextArea rows={2} />
          </div>
        </div>
      </div>
      {/* Ninth */}
      <div className="mt-6 shadow-xl rounded-md w-full p-10 border">
        <div>
          <InputDescription
            isRequired={false}
            description="Reporter's comments"
          />
          <TextArea rows={2} />
        </div>
      </div>
      <NavigationPanel currentRoute="4" />
    </FormLayout>
  );
}
