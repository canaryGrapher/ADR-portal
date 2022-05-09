// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Input, Form } from "antd";

// importing icons
import { FiHelpCircle } from "react-icons/fi";

//importing utilities
import { radioOptions } from "~/utils/adr-reporting/3e";

export default function Form1page3e() {
  //temporary variable
  const drugs = ["drug1", "drug2", "drug3"];

  return (
    <FormLayout>
      <Form
        name="Form1Page3e"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="mx-auto">
            <div className="text-[24px] text-[#E8590C]">
              Reaction Reappeared After Re-introduction
            </div>
            <RadioGroupDrugs drugOptions={drugs} />
          </div>
        </div>
        <NavigationPanel currentRoute="3e" />
      </Form>
    </FormLayout>
  );
}

const RadioGroupDrugs = (props: { drugOptions: string[] }) => {
  const componentsForDrugs = props.drugOptions.map((drug, index) => (
    <div key={index}>
      <Form.Item name={drug} label={drug} className="w-full" key={index}>
        <Radio.Group
          size="large"
          buttonStyle="solid"
          options={radioOptions}
          optionType="button"
        />
      </Form.Item>
      <Form.Item name={"drugDose_" + drug} label={"Dose"} className="w-full">
        <Input suffix={<FiHelpCircle />} />
      </Form.Item>
    </div>
  ));

  return <>{componentsForDrugs}</>;
};
