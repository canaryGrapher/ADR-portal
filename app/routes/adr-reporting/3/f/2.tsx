//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Collapse, Radio } from "antd";
const { Panel } = Collapse;

export default function Form1page3f2() {
  const options = [
    { label: "Certain", value: "certain" },
    { label: "Probably / Likely", value: "probably/likely" },
    { label: "Possible", value: "possible" },
    { label: "Unlikely", value: "unlikely" },
    { label: "Conditional / Unclassified", value: "conditional/unclassified" },
    {
      label: "Un-assessable / Un-classifiable",
      value: "un-assessable/un-classifiable",
    },
  ];
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            WHO Probability Scale
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription
              isRequired={true}
              description="Are there previous conclusion reports on this reaction?"
            />
            <Radio.Group
              defaultValue={"certain"}
              optionType="button"
              buttonStyle="solid"
              size="large"
              options={options}
            />
          </div>
          <div>
            <div className="text-[24px] max-w-fit mx-auto mt-10 px-5 py-1 border-2 flex flex-row">
              <h2 className="text-[#E8590C]">Assesment criteria</h2>
              <div className="flex flex-col justify-center mb-1 ml-2">
                <FiHelpCircle />
              </div>
            </div>
            <div className="px-4 my-4">
              <Collapse defaultActiveKey={["1"]}>
                {options.map((option, index) => (
                  <Panel header={option.label} key={index}>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Commodi non vitae ratione quisquam aliquid est natus
                      facere harum error consectetur inventore, dolorum quis
                      asperiores iure quo ea! Ullam, blanditiis exercitationem.
                    </p>
                  </Panel>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="3f2" />
    </FormLayout>
  );
}
