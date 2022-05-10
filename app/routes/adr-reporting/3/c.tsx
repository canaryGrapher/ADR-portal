// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Checkbox, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { options } from "~/utils/adr-reporting/3c";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/c";

export default function Form1page3c() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3c);
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
        name="Form1Page3c"
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
            <div className="text-[24px] text-[#E8590C] pb-5">
              Treatment Given
            </div>
            <Form.Item
              name="treatmentGiven"
              label="Select the treatment given"
              className="w-full"
            >
              <Checkbox.Group options={options} />
            </Form.Item>
            <Form.Item
              label="Treatment details (if any)"
              name="treatmentDetails"
            >
              <TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3c" />
      </Form>
    </FormLayout>
  );
}
