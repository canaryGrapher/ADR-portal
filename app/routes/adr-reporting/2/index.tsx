// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";
// Import components
import { Input, DatePicker, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/2";

export default function Form1page2() {
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page2);
  let newFormState = { ...formState };

  if (formState.dateOfReactionStarted != null) {
    newFormState.dateOfReactionStarted = moment(
      formState.dateOfReactionStarted
    );
  } else {
    delete newFormState.dateOfReactionStarted;
  }
  if (formState.dateOfRecovery != null) {
    newFormState.dateOfRecovery = moment(formState.dateOfRecovery);
  } else {
    delete newFormState.dateOfRecovery;
  }

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <FormLayout>
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page2"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Suspected Adverse Reaction</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              className="w-full"
              label="Date of reaction started"
              name="dateOfReactionStarted"
              rules={[{ required: true, message: "Date of reaction started" }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              className="w-full"
              label="Date of recovery"
              name="dateOfRecovery"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </div>
          <Form.Item
            className="w-full"
            label="Describe reaction or problem"
            name="reactionDescription"
            rules={[
              { required: true, message: "Reaction description is mandatory" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="2" />
      </Form>
    </FormLayout>
  );
}
