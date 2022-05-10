import { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Checkbox, Input, Form } from "antd";
import { FiHelpCircle } from "react-icons/fi";

// importing utilities
import { options, radioOptions } from "~/utils/adr-reporting/3f5";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/f/5";

export default function Form1page3b5() {
  const [predisposingFactorsValues, setPredisposingFactorsValues] = useState<
    string[]
  >([""]);

  const onChangeCheckBoxGroup = (values: any[]) => {
    setPredisposingFactorsValues(values);
  };

  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3f5);
  let newFormState = { ...formState };

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3f5"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="mx-8 py-4 pb-8">
            <div className="text-[24px] text-[#E8590C]">Predictability</div>
            <Form.Item
              name="predictability"
              label="Predictability"
              className="mx-4 min-w-full pt-4"
            >
              <Radio.Group
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
            <div className="my-4 text-[24px] text-[#E8590C]">
              Predisposing factors
            </div>
            <Form.Item name="preDisposingFactors" label="Predisposing factors">
              <Checkbox.Group
                options={options}
                onChange={(e) => onChangeCheckBoxGroup(e)}
              />
            </Form.Item>
            <Form.Item
              name="otherInformation"
              label="If other, mention the factor"
            >
              <Input
                suffix={<FiHelpCircle />}
                disabled={!predisposingFactorsValues.includes("other")}
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3b5" />
      </Form>
    </FormLayout>
  );
}
