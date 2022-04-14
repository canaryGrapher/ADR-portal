// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Checkbox, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3g() {
  const options = ["Specific", "Symptomatic", "None"];
  return (
    <FormLayout>
      <Form
        name="Form1Page3g"
        initialValues={{ remember: true }}
        onFinish={(values) => console.log(values)}
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div>
            <div className="text-[24px] text-[#E8590C]">Treatment Given</div>
            <div className="w-full pt-2">
              <Checkbox.Group options={options}></Checkbox.Group>
            </div>
          </div>
        </div>
        <div className="shadow-xl rounded-md w-full p-10 border mt-5">
          <div>
            <div className="my-0 py-0">
              <p className="font-medium my-0 py-0">
                Treatment Details (if any)
              </p>
            </div>
            <div className="w-full pt-4">
              <TextArea rows={4} />
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3g" />
      </Form>
    </FormLayout>
  );
}
