import React, { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Form, Input, DatePicker, Switch, Checkbox, Radio } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";
const { TextArea } = Input;

export default function Form1page3i() {
  const [seriousReaction, setSeriousReaction] = useState<boolean>(false);
  const [isApplicable, setIsApplicable] = useState<boolean>(false);
  const [seriousnessLevelState, setSeriousnessLevelState] =
    useState<CheckboxValueType[]>();

  const changeSeriousness = (checked: boolean) => {
    setSeriousReaction(checked);
  };
  const changeApplicability = (checked: boolean) => {
    setIsApplicable(checked);
  };

  const radioOptions = [
    { label: "Recovered", value: "recovered" },
    { label: "Recovering", value: "recovering" },
    { label: "Not recovered", value: "notRecovered" },
    { label: "Fatal", value: "fatal" },
    { label: "Recovered with sequelae", value: "recoveredWithSequelae" },
    { label: "Unknown", value: "unknown" },
  ];

  const checkBoxOptions = [
    { label: "Congenital-anomaly", value: "congenitalAnamoly" },
    { label: "Life Threatening", value: "lifeThreatening" },
    { label: "Hospitalized/Prolonged", value: "Disability" },
    { label: "Disability", value: "disability" },
    {
      label: "Required intervention to Prevent permanent impairment/damage",
      value: "requiredIntervention",
    },
    { label: "Death", value: "death" },
    { label: "Other (Mention below)", value: "other" },
  ];

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
          <div className="text-[24px] text-[#E8590C] mb-5">AMC/NCC Section</div>
          <Form.Item
            name="applicability"
            label="Applicability"
            className="w-full flex"
          >
            <Switch
              checkedChildren="Applicable"
              unCheckedChildren="Not applicable"
              onChange={changeApplicability}
              checked={isApplicable}
            />
          </Form.Item>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              className="w-full"
              name="amcReportNumber"
              label="AMC Report Number"
              rules={[
                {
                  required: isApplicable,
                  message: "AMC Report number is mandatory",
                },
              ]}
              hidden={!isApplicable}
            >
              <Input disabled={!isApplicable} />
            </Form.Item>
            <Form.Item
              label="Worldwide Unique Number"
              name="worldwideUniqueNumber"
              className="w-full"
              rules={[
                {
                  required: isApplicable,
                  message: "Worldwide Unique number is mandatory",
                },
              ]}
              hidden={!isApplicable}
            >
              <Input disabled={!isApplicable} />
            </Form.Item>
          </div>
          <Form.Item
            className="w-full"
            label="Relevant tests/ laboratory data with dates"
            name="relevantTests"
          >
            <TextArea rows={2} placeholder="" />
          </Form.Item>
          <Form.Item
            className="w-full"
            label="Relevant medical/ medication history (e.g. allergies, race, 
                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)"
            name="relevantMedicalHistory"
          >
            <TextArea rows={2} placeholder="" />
          </Form.Item>
          <Form.Item
            label="Was it a serious reaction?"
            name="seriousnessOfTheReaction"
            className="w-full"
          >
            <Switch
              checkedChildren="Yes"
              unCheckedChildren="No"
              onChange={changeSeriousness}
              checked={seriousReaction}
            />
          </Form.Item>
          <Form.Item
            label="Seriousness level"
            name="seriousnessLevel"
            className="w-full"
            hidden={!seriousReaction}
            rules={[
              {
                required: seriousReaction,
                message: "Selecting an option is mandatory",
              },
            ]}
          >
            <Checkbox.Group
              disabled={!seriousReaction}
              options={checkBoxOptions}
              onChange={(value: CheckboxValueType[]) =>
                setSeriousnessLevelState(value)
              }
            />
          </Form.Item>

          <Form.Item
            label="Date of death"
            name="dateOfDeath"
            className="w-full"
            hidden={
              !seriousReaction || !seriousnessLevelState?.includes("death")
            }
            rules={[
              {
                required:
                  seriousReaction && seriousnessLevelState?.includes("death"),
                message: "Date of death is required",
              },
            ]}
          >
            <DatePicker className="w-full" disabled={false} />
          </Form.Item>
          <Form.Item
            label="Mention details of other"
            name="dateOfDeath"
            className="w-full"
            hidden={
              !seriousReaction || !seriousnessLevelState?.includes("other")
            }
            rules={[
              {
                required:
                  seriousReaction && seriousnessLevelState?.includes("other"),
                message: "You need to mention other details",
              },
            ]}
          >
            <Input className="my-auto col-span-10" />
          </Form.Item>

          <Form.Item label="Outcome" name="outcome" className="w-full">
            <Radio.Group
              size="large"
              buttonStyle="solid"
              optionType="button"
              options={radioOptions}
            />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="3i" />
      </Form>
    </FormLayout>
  );
}
