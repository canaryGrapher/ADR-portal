// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import InputDescription from "~/components/forms/inputDescription";
import { Radio, Form } from "antd";

export default function Form1page3f4() {
  const formRadioOptions = ["Yes", "No"];
  const formRadioOptions2 = [
    "Definitely preventable",
    "Probably preventable",
    "Not preventable",
  ];

  const formLayout = [
    "Was there a history of allergy or previous reactions to the drug?",
    "Was the drug involved inappropriate for the patient’s clinical condition?",
    "Was the dose, route or frequency of administration inappropriate for the patient’s age, weight or disease state?",
    "Was a toxic serum drug concentration (or laboratory monitoring test) documented?",
    "Was there a known treatment for the adverse drug reaction?",
    "Was required therapeutic drug monitoring or other necessary lab tests not performed?",
    "Was a drug interaction involved in the ADR?",
  ];

  return (
    <FormLayout>
      <Form
        name="Form1Page3f4"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
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
        <NavigationPanel currentRoute="3f4" />
      </Form>
    </FormLayout>
  );
}
