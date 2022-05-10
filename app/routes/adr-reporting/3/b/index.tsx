// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Form, Radio } from "antd";

//importing utilities
import { RadioOptions, formLayout } from "~/utils/adr-reporting/3f";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/3/f/1";

export default function Form1page3b1() {
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
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3"
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
            <div className="text-[24px] text-[#E8590C] pb-5">
              Naranjo’s Scale
            </div>
            {formLayout.map((field, index) => (
              <Form.Item
                key={index}
                name={index}
                label={field}
                className="w-full pt-4"
              >
                <Radio.Group options={RadioOptions} optionType="button" />
              </Form.Item>
            ))}
            {/* calculated score for the ADR is displayed here */}
            <div className="flex flex-row-reverse text-black dark:text-gray-200">
              <div className="grid grid-cols-2 gap-x-3">
                <div className="flex flex-col justify-end">
                  <p className="text-lg text-[#6C567B] p-0 m-0">Probable ADR</p>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-[#6C567B] p-0 m-0">
                    {/* Score is dynamically calculated */}
                    <span className="font-bold text-4xl">07</span>/10
                  </p>
                </div>
                <div className="flex flex-row font-bold m-0 p-0">
                  <p className="m-0 p-0">Result</p>
                  <FiHelpCircle className="mt-1 ml-1" />
                </div>
                <div className="">
                  <p className="my-auto font-bold">Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b" />
      </Form>
    </FormLayout>
  );
}
