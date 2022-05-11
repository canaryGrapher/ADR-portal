//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Form, Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";

//importing utilities
import { radioOptions } from "~/utils/medical-device-reporting/1";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/1";

export default function Form2page1() {
  const dispatch = useDispatch();

  // converting date value to moment object
  const formState = useSelector((state: RootState) => state.form2page1);
  let newFormState = { ...formState };
  if (formState.dateOfReport != null) {
    newFormState.dateOfReport = moment(formState.dateOfReport);
  } else {
    delete newFormState.dateOfReport;
  }

  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form2page1"
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
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Primary Information</h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Reporter Reference Number"
                name="reporterReferenceNumber"
                className="w-full"
              >
                <Input className="w-full" />
              </Form.Item>
              <Form.Item
                label="Date of Report"
                name="dateOfReport"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <Form.Item
              label="Type of Report"
              name="typeOfReport"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="1" />
      </Form>
    </FormLayout>
  );
}
