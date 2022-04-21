// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Radio, Progress, Form } from "antd";

//importing utilities
import { radioOptions } from "~/utils/adr-reporting/3f3";

export default function Form1page3f3() {
  return (
    <FormLayout>
      <Form
        name="Form1Page3f3"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="">
            <div className="text-[24px] text-[#E8590C]">
              Hartwig's Severity Assessment Scale
            </div>
            <div className="min-w-full pt-4">
              <Form.Item name="hartwigseveritytest" label="Select a level">
                <Radio.Group
                  optionType="button"
                  buttonStyle="solid"
                  size="large"
                  options={radioOptions}
                />
              </Form.Item>
              <div className="flex flex-col pt-4">
                <p className="m-0 p-0 text-gray-800 dark:text-gray-300 font-medium">
                  Mild Level
                </p>
                <div className="w-full m-0 p-0">
                  <Progress
                    // make percentage value dynamic
                    percent={30}
                    status={"normal"}
                    showInfo={false}
                    strokeColor={"#E8590C"}
                    trailColor={"#E5E5E5"}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full pt-5">
                <div className="text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row rounded-md mb-5">
                  <h2 className="text-[#E8590C] my-auto mr-2">
                    Assesment criteria
                  </h2>
                  <div className="flex flex-col justify-center my-auto">
                    <FiHelpCircle className="text-black dark:text-white" />
                  </div>
                </div>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires that the suspected drug be withheld,
                  discontinued or otherwise changed. No antidote or other
                  treatment is required, and there is no increase in length of
                  stay
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
                <p>
                  The ADR requires no change in the treatment with the suspected
                  drug.
                </p>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3f3" />
      </Form>
    </FormLayout>
  );
}
