// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Form, Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3a() {
  return (
    <FormLayout>
      <Form
        name="Form1Page3c"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="mx-auto">
            <div className="text-[24px] text-[#E8590C]">Dechallenge</div>
            <RadioGroupDrugs />
          </div>
        </div>
        <NavigationPanel currentRoute="3c" />
      </Form>
    </FormLayout>
  );
}

const RadioGroupDrugs = () => {
  const radioOptions = [
    "No dechallenge",
    "Definite Improvement",
    "No Improvement",
    "Unknown",
  ];
  return (
    <div className="w-full pt-2">
      {/* Make description dynamic */}
      <InputDescription isRequired={false} description="Drug 1" />
      <Radio.Group
        size="large"
        buttonStyle="solid"
        options={radioOptions}
        optionType="button"
      />
    </div>
  );
};
