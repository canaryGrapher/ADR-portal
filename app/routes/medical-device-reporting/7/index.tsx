// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form3page7() {
  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="flex flex-col pb-8">
          <div className="text-[24px] text-[#E8590C]">
            Healthcare Facility Details
          </div>
        </div>
        <div className="pt-4 grid grid-cols-2 gap-5">
          <div className="col-span-1 flex flex-col">
            <InputDescription description={"Name"} isRequired={false} />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription description={"Address"} isRequired={false} />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription
              description={"Contact Number of Person at the site of event"}
              isRequired={false}
            />
            <Input />
          </div>
          <div className="col-span-1 flex flex-col">
            <InputDescription
              description={"Telephone Number"}
              isRequired={false}
            />
            <Input />
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="7" />
    </FormLayout>
  );
}
