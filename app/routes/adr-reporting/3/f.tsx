// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Form, Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { radioOptions } from "~/utils/adr-reporting/3j";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/j";

export default function Form1page3j() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3j);
  let newFormState = { ...formState };

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3j"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div>
            <div className="text-[24px] text-[#E8590C]">Outcome</div>
            <Form.Item name="outcome" className="w-full pt-4">
              <Radio.Group
                options={radioOptions}
                optionType="button"
                buttonStyle="solid"
                size="large"
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3j" />
      </Form>
    </FormLayout>
  );
}
