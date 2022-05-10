import React, { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Form, Input, DatePicker, Switch, Checkbox, Radio } from "antd";
import { CheckboxValueType } from "antd/lib/checkbox/Group";

// importing utilities
import { radioOptions, checkBoxOptions } from "~/utils/adr-reporting/3i";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/i";

export default function Form1page3e() {
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

  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3i);
  let newFormState = { ...formState };
  if (formState.dateOfDeath != null) {
    newFormState.dateOfDeath = moment(formState.dateOfDeath);
  } else {
    delete newFormState.dateOfDeath;
  }
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  const onChangeFormEvent = (values: any) => {
    changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0]);
    if (
      Object.keys(values)[0] === "applicability" &&
      values[Object.keys(values)[0]] === false
    ) {
      changeFormData(null, "amcReportNumber");
      changeFormData(null, "worldwideUniqueNumber");
    }
    if (
      Object.keys(values)[0] === "seriousnessOfTheReaction" &&
      values[Object.keys(values)[0]] === false
    ) {
      changeFormData(null, "seriousnessLevel");
      changeFormData(null, "dateOfDeath");
      changeFormData(null, "otherDetails");
    }
    if (
      Object.keys(values)[0] === "seriousnessLevel" &&
      !values[Object.keys(values)[0]].includes("other")
    ) {
      changeFormData(null, "otherDetails");
    }
    if (
      Object.keys(values)[0] === "seriousnessLevel" &&
      !values[Object.keys(values)[0]].includes("death")
    ) {
      changeFormData(null, "dateOfDeath");
    }
  };

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3i"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) => onChangeFormEvent(values)}
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
            <Input.TextArea rows={2} placeholder="" />
          </Form.Item>
          <Form.Item
            className="w-full"
            label="Relevant medical/ medication history (e.g. allergies, race, 
                pregnancy, smoking, alcohol use, hepatic/renal dysfunction etc.)"
            name="relevantMedicalHistory"
          >
            <Input.TextArea rows={2} placeholder="" />
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
            <DatePicker
              clearable={true}
              className="w-full"
              disabled={!seriousReaction}
            />
          </Form.Item>
          <Form.Item
            label="Mention details of other"
            name="otherDetails"
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
            <Input
              className="my-auto col-span-10"
              disabled={!seriousReaction}
              clearable={true}
            />
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
        <NavigationPanel currentRoute="3e" />
      </Form>
    </FormLayout>
  );
}
