//importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";
import { useEffect } from "react";
//importing components
import { Input, DatePicker, Form, Radio, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";

//importing utilities
import { radioOptions } from "~/utils/medical-device-reporting/1";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/1";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form2page1() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };

  // converting date value to moment object
  const formState = useSelector((state: RootState) => state.form2page1);

  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    const _DateOfReport = formState.data.dateOfReport
      ? moment(formState.data.dateOfReport)
      : null;
    let newFormState = {
      ...formState.data,
      dateOfReport: _DateOfReport,
    };
    if (!newFormState.dateOfReport) {
      // @ts-ignore
      delete newFormState.dateOfReport;
    }
    form.setFieldsValue(newFormState);
  }, [formState.status]);

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
        form={form}
        onFinish={(values) => {
          fetch("/api/forms/form2/page1", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values }),
          })
            .then((res) => {
              info();
            })
            .catch((err) => {
              error();
            });
        }}
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
