// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Form } from "antd";

//importing utilities
import {
  formLayout,
  formRadioOptions,
  formRadioOptions2,
} from "~/utils/adr-reporting/3b4";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/b/4";

export default function Form1page3b4() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3b4);
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
        name="Form1Page3b4"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="">
            <div className="text-[24px] text-[#E8590C]">
              Modified Schumock and Thornton scale
            </div>
            {formLayout.map((field, index) => (
              <Form.Item
                key={index}
                name={index}
                label={field}
                className="w-full pt-4"
              >
                <Radio.Group options={formRadioOptions} optionType="button" />
              </Form.Item>
            ))}

            <div className="w-full pt-2">
              <p className="text-[16px] m-0 font-bold text-gray-800 dark:text-gray-300">
                Final Result
              </p>
              <Radio.Group options={formRadioOptions2} optionType="button" />
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b4" />
      </Form>
    </FormLayout>
  );
}
