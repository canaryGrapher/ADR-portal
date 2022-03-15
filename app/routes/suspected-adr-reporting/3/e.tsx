// importing layouts
import FormLayout from "~/layouts/forms/suspected-adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Form, Input, DatePicker, Switch, Checkbox, Radio } from "antd";
const { TextArea } = Input;

export default function Form3page3e() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-[24px] text-[#E8590C]">AMC/NCC Section</div>
        <Form>
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-3">
              <InputDescription
                isRequired={true}
                description="AMC Report No."
              />
            </div>
            <div className="col-span-9">
              <Input />
            </div>
          </div>
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-3">
              <InputDescription
                isRequired={true}
                description="Worldwide Unique No."
              />
            </div>
            <div className="col-span-9">
              <Input />
            </div>
          </div>
          <div className="py-4">
            <InputDescription
              isRequired={false}
              description="Relevant tests/ laboratory data with dates"
            />
            <TextArea rows={2} placeholder="" />
          </div>
          <div className="py-4">
            <InputDescription
              isRequired={false}
              description="Relevant medical/ medication history (e.g. allergies, race, 
                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)"
            />
            <TextArea rows={2} placeholder="" />
          </div>
          <div className="py-4 flex flex-row">
            <InputDescription
              isRequired={false}
              description="Seriousness of the reaction"
            />
            <div className="flex flex-row pt-2 pl-5">
              <p className="pr-3">No</p>
              <Switch />
              <p className="pl-3">Yes</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <Checkbox>Congenital-anomaly</Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Life threatening </Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Hospitalization/Prolonged</Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Disability</Checkbox>
            </div>
            <div className="col-span-2">
              <Checkbox>
                Required intervention to Prevent permanent impairment/damage
              </Checkbox>
            </div>
            <div className="col-span-2 grid grid-cols-12">
              <Checkbox className="col-span-2">Death</Checkbox>
              <DatePicker className="my-auto col-span-10" />
            </div>
            <div className="col-span-2 grid grid-cols-12">
              <Checkbox className="col-span-2">Other (specify)</Checkbox>
              <Input className="my-auto col-span-10" />
            </div>
          </div>
          <div className="py-4">
            <InputDescription isRequired={false} description="Outcomes" />
            <Radio.Group
              defaultValue="recovered"
              className="w-full"
              buttonStyle="solid"
            >
              <Radio.Button className="w-2/12 text-center" value="recovered">
                Recovered
              </Radio.Button>
              <Radio.Button className="w-2/12 text-center" value="recovering">
                Recovering
              </Radio.Button>
              <Radio.Button className="w-2/12 text-center" value="notrecovered">
                Not recovered
              </Radio.Button>
              <Radio.Button className="w-1/12 text-center" value="fatal">
                Fatal
              </Radio.Button>
              <Radio.Button
                className="w-3/12 text-center"
                value="recoveredwithsequelae"
              >
                Recovered with sequelae
              </Radio.Button>
              <Radio.Button className="w-2/12 text-center" value="unknown">
                Unknown
              </Radio.Button>
            </Radio.Group>
          </div>
        </Form>
      </div>

      <NavigationPanel currentRoute="3e" />
    </FormLayout>
  );
}
