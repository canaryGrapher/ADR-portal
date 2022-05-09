import { useState, useEffect } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Radio, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

//importing utilities
import {
  radioOptions,
  radioOptionsReporter,
} from "~/utils/medical-device-reporting/2";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/2";

export default function Form1() {
  const [reporterType, setReporterType] = useState<string>("manufacturer");
  const changedReporterType = (e: any) => {
    setReporterType(e.target.value);
    if(e.target.value !== "other" ) {
      handleNull(e.target.value === "manufacturer");
    }
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page2);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const handleNull = (isManufacturer: boolean) => {
    changeFormData(null, "ifOthers");
    if(isManufacturer) {
      setReporterType("manufacturer");
      changeFormData(null, "hasTheReporterInformedTheIncidentToTheManufacturer");
      changeFormData(null, "isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer");
    }
  }
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(newFormState)
  }, [form, newFormState])
  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form3page2"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
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
