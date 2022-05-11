// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/9";

export default function Form2page9() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page9);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        name="Form2page9"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(
            values[Object.keys(values)[0]],
            Object.keys(values)[0]
          );
        }}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">
              Product Owner's Investigation
            </div>
            <Form.Item
              label={"Product Owner's device risk analysis report"}
              name="productOwnersDeviceRiskAnalysisReport"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Corrective / preventive action taken"}
              name="correctiveActionTaken"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              label={"Device history review"}
              name="deviceHistoryReview"
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="9" />
      </Form>
    </FormLayout>
  );
}
