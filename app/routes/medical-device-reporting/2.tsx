import { useState, useEffect } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Radio, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

//importing utilities
import {
  radioOptions,
  radioOptionsReporter,
} from "~/utils/medical-device-reporting/2";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/2";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2Page2() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [reporterType, setReporterType] = useState<string>("manufacturer");
  const changedReporterType = (e: any) => {
    setReporterType(e.target.value);
    if (e.target.value !== "other") {
      handleNull(e.target.value === "manufacturer");
    }
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page2);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const handleNull = (isManufacturer: boolean) => {
    changeFormData(null, "ifOthers");
    if (isManufacturer) {
      setReporterType("manufacturer");
      changeFormData(
        null,
        "hasTheReporterInformedTheIncidentToTheManufacturer"
      );
      changeFormData(
        null,
        "isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer"
      );
    }
  };
  const [form] = Form.useForm();
  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form2page2"
        onFinish={(values) => {
          fetch("/api/forms/form2/page2", {
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
            <h2 className="text-[#E8590C]">Reporter Information</h2>
          </div>
          <div className="w-full">
            <Form.Item
              label="Type of Reporter"
              name="typeOfReporter"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Selecting a type of reporter is required",
                },
              ]}
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptionsReporter}
                optionType="button"
                defaultValue={"manufacturer"}
                value={reporterType}
                onChange={(value) => changedReporterType(value)}
              />
            </Form.Item>
            <Form.Item
              label="If Others"
              name="ifOthers"
              rules={[
                {
                  required: reporterType === "other",
                  message: "You need to mention the other type of reporter",
                },
              ]}
            >
              <Input disabled={reporterType != "other"} />
            </Form.Item>
            <Form.Item
              label="Has the reporter informed the incident to the manufacturer?"
              name="hasTheReporterInformedTheIncidentToTheManufacturer"
              className="w-full"
              rules={[
                {
                  required: reporterType != "manufacturer",
                  message: "This field is required",
                },
              ]}
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
                disabled={reporterType === "manufacturer"}
              />
            </Form.Item>
            <Form.Item
              label="Is the reporter also submitting the report on behalf of the manufacturer?"
              name="isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer"
              className="w-full"
              rules={[
                {
                  required: reporterType != "manufacturer",
                  message: "This field is required",
                },
              ]}
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
                disabled={reporterType === "manufacturer"}
              />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Name"
                name="name"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Name is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phoneNumber"
                className="w-full"
                rules={[
                  {
                    required: true,
                    message: "Phone number is required",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Email Id"
              name="emailId"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Email ID is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              className="w-full"
              rules={[
                {
                  required: true,
                  message: "Address is required",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="2" />
      </Form>
    </FormLayout>
  );
}
