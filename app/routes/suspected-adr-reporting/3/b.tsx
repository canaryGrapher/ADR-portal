import InputDescription from "~/components/forms/inputDescription";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";
import InputRadioComponent from "~/components/forms/InputRadioComponent";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Input, DatePicker } from "antd";

export default function Form1page3a() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="flex flex-row ">
        <div className="w-1/2 border shadow-xl mx-2">
          <InputRadioComponent
            title="Report Type"
            radioOptionFalse="Not predictable"
            radioOptionTrue="Predictable"
          />
        </div>
        <div className="w-1/2 border shadow-xl mx-2 ">
          <InputRadioComponent
            title="AMC/NCC"
            radioOptionFalse="Not Applicable"
            radioOptionTrue="Applicable"
          />
        </div>
      </div>
      <div className="w-full shadow-xl my-8">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            Concomitant medical product including self-medication and herbal
            remedies with therapy dates
          </div>
          <div className="mx-4 min-w-full pt-4">
            <div className="mt-4 w-full px-4">
              <InputDescription
                isRequired={true}
                description="Name( Brand/Generic)"
              />
              <Input />
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription isRequired={false} description="Dose Used" />
                <Input />
              </div>
              <div className="w-1/2 pr-4">
                <InputDescription isRequired={false} description="Route Used" />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="mt-4 w-full px-4">
                <InputDescription
                  isRequired={false}
                  description="Frequency (OD, BD etc.)"
                />
                <Input />
              </div>
            </div>
            <div className="flex flex-row pt-4">
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={true}
                  description="Date started"
                />
                <DatePicker className="w-full" />
              </div>
              <div className="w-1/2 px-4">
                <InputDescription
                  isRequired={false}
                  description="Date stopped"
                />
                <DatePicker className="w-full" />
              </div>
            </div>
            <div className="mt-4 w-full px-4">
              <InputDescription isRequired={false} description="Indication" />
              <Input />
            </div>
          </div>
        </div>
      </div>

      <NavigationPanel currentRoute="3b" />
    </FormLayout>
  );
}
