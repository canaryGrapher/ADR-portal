// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Form } from "antd";

//importing utilities
import { radioOptions } from "~/utils/adr-reporting/3d";

export default function Form1page3a() {
  //temporary variable
  const drugs = ["drug1", "drug2", "drug3"];

  return (
    <FormLayout>
      <Form
        name="Form1Page3d"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="mx-auto">
            <div className="text-[24px] text-[#E8590C]">Rechallenge</div>
            <RadioGroupDrugs drugOptions={drugs} />
          </div>
        </div>
        <NavigationPanel currentRoute="3d" />
      </Form>
    </FormLayout>
  );
}

const RadioGroupDrugs = (props: { drugOptions: string[] }) => {
  const radioFields = props.drugOptions.map((drug, index) => (
    <Form.Item name={drug} label={drug} className="w-full" key={index}>
      <Radio.Group
        size="large"
        buttonStyle="solid"
        options={radioOptions}
        optionType="button"
      />
    </Form.Item>
  ));
  return <>{radioFields}</>;
};
