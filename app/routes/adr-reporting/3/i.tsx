import { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Form, Input, DatePicker, Switch, Checkbox, Radio } from "antd";
const { TextArea } = Input;

export default function Form1page3i() {
  const [seriousReaction, setSeriousReaction] = useState<boolean>(false);
  const [isApplicable, setIsApplicable] = useState<boolean>(false);
  const changeSeriousness = (checked: boolean) => {
    setSeriousReaction(checked);
  };
  const changeApplicability = (checked: boolean) => {
    setIsApplicable(checked);
  };

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <Form
        name="Form1Page3i"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-[24px] text-[#E8590C]">AMC/NCC Section</div>

          <div className="w-full pt-4 grid grid-col-12">
            <div className="flex flex-row col-span-6">
              <p className="pr-3">Not Applicable</p>
              <Switch onChange={changeApplicability} />
              <p className="pl-3">Applicable</p>
            </div>
          </div>
          <div className="grid grid-cols-12 py-4">
            <div className="col-span-3">
              <InputDescription
                isRequired={true}
                description="AMC Report No."
              />
            </div>
            <div className="col-span-9">
              <Input disabled={!isApplicable} />
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
              <Input disabled={!isApplicable} />
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
              <Switch onChange={changeSeriousness} />
              <p className="pl-3">Yes</p>
            </div>
          </div>
          <Checkbox.Group disabled={!seriousReaction}>
            <div className="grid grid-cols-2 gap-5">
              <div className="col-span-1">
                <Checkbox value={"Congenital-anomaly"}>
                  Congenital-anomaly
                </Checkbox>
              </div>
              <div className="col-span-1">
                <Checkbox value={"Life threatening"}>
                  Life threatening{" "}
                </Checkbox>
              </div>
              <div className="col-span-1">
                <Checkbox value={"Hospitalization/Prolonged"}>
                  Hospitalization/Prolonged
                </Checkbox>
              </div>
              <div className="col-span-1">
                <Checkbox value={"Disability"}>Disability</Checkbox>
              </div>
              <div className="col-span-2">
                <Checkbox
                  value={
                    "Required intervention to Prevent permanent impairment/damage"
                  }
                >
                  Required intervention to Prevent permanent impairment/damage
                </Checkbox>
              </div>
              <div className="col-span-2 grid grid-cols-12">
                <Checkbox className="col-span-2" value={"Death"}>
                  Death
                </Checkbox>
                <DatePicker className="my-auto col-span-10" />
              </div>
              <div className="col-span-2 grid grid-cols-12">
                <Checkbox className="col-span-2" value={"Other"}>
                  Other (specify)
                </Checkbox>
                <Input className="my-auto col-span-10" />
              </div>
            </div>
          </Checkbox.Group>
          <div className="py-4">
            <InputDescription isRequired={false} description="Outcomes" />
            <Radio.Group className="w-full" buttonStyle="solid">
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
        </div>
        <NavigationPanel currentRoute="3i" />
      </Form>
    </FormLayout>
  );
}
