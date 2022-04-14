// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Radio, Progress, Form } from "antd";

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
            <div className="mx-4 min-w-full pt-4">
              <Radio.Group buttonStyle="solid">
                <Radio.Button value={0}>Level 1</Radio.Button>
                <Radio.Button value={1}>Level 2</Radio.Button>
                <Radio.Button value={2}>Level 3</Radio.Button>
                <Radio.Button value={3}>Level 4</Radio.Button>
                <Radio.Button value={4}>Level 5</Radio.Button>
                <Radio.Button value={5}>Level 6</Radio.Button>
                <Radio.Button value={6}>Level 7</Radio.Button>
              </Radio.Group>
              <div className="flex flex-row pt-4">
                <div className="w-2/3 mr-3">
                  <Progress
                    percent={30}
                    status={"normal"}
                    showInfo={false}
                    strokeColor={"#E8590C"}
                    trailColor={"#E5E5E5"}
                  />
                </div>
                <p className="">{"Mild Level"}</p>
              </div>
              <div className="w-full pt-5">
                <div className="flex flex-row">
                  <h5 className="text-xl text-[#E8590C]">
                    Assessment criteria
                  </h5>
                  <div className="flex flex-col justify-center ml-2 mb-1">
                    <FiHelpCircle />
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
