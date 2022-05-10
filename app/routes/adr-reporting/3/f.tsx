// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Form, Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { radioOptions } from "~/utils/adr-reporting/3f";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/f";

export default function Form1page3f() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3f);
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
        <div className="shadow-xl rounded-md w-full p-10 border">
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
        <NavigationPanel currentRoute="3f" />
      </Form>
    </FormLayout>
  );
}
