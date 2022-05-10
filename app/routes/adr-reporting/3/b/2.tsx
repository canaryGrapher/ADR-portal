//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Collapse, Form, Radio } from "antd";

//importing utilities
import { options } from "~/utils/adr-reporting/3f2";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/f/2";

export default function Form1page3b2() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3f2);
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
        name="Form1Page3f2"
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
            <div className="text-[24px] text-[#E8590C]">
              WHO Probability Scale
            </div>
            <Form.Item
              name="whoProbabiltyScale"
              label="Scale value"
              className="mx-4 min-w-full pt-4"
            >
              <Radio.Group
                optionType="button"
                buttonStyle="solid"
                size="large"
                options={options}
              />
            </Form.Item>
            <div>
              <div className="text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md">
                <h2 className="text-[#E8590C] my-auto mr-2">
                  Assesment criteria
                </h2>
                <div className="flex flex-col justify-center my-auto">
                  <FiHelpCircle className="text-black dark:text-white" />
                </div>
              </div>
              <div className="px-4 my-4">
                <Collapse defaultActiveKey={["1"]}>
                  {options.map((option, index) => (
                    <Collapse.Panel header={option.label} key={index}>
                      <p>{option.info}</p>
                    </Collapse.Panel>
                  ))}
                </Collapse>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b2" />
      </Form>
    </FormLayout>
  );
}
