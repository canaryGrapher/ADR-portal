import { useEffect, useState } from "react";
import moment from "moment";
import {
  getFormData as getFormData2,
  
} from "~/states/Slices/AdrReportingForm/2";

// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Importing components
import { Input, Radio, DatePicker, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { radioOptions } from "~/utils/adr-reporting/4";

//Import Images
import { FiHelpCircle } from "react-icons/fi";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/4";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form1page4() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const [occupationState, setOccupationState] = useState<string>("");
  const [isOccupationApplicable, setIsOccupationApplicable] =
    useState<boolean>(false);

  useEffect(() => {
    if (occupationState === "other") {
      setIsOccupationApplicable(true);
    } else {
      setIsOccupationApplicable(false);
    }
  }, [occupationState]);

  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page4);
  const formStateimp= useSelector((state:RootState) => state.form1page2);
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  useEffect(() => {
    dispatch(getFormData());
    dispatch(getFormData2());
  }, []);

  useEffect(() => {
    const ReportDate = formState.data.dateOfThisReport
      ? moment(formState.data.dateOfThisReport)
      : null;
    let newFormState = {
      ...formState.data,
      dateOfThisReport: ReportDate,
    };
    if (!newFormState.dateOfThisReport) {
      // @ts-ignore
      delete newFormState.dateOfThisReport;
    }
    form.setFieldsValue(newFormState);
  }, [formState.status]);

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page4"
        onFinish={(values) => {
          fetch("/api/forms/form1/page4", {
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
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="pl-4 text-3xl">
            <h2 className="text-[#E8590C]">Reporter Details</h2>
          </div>
          {/* First */}
          <div className="grid grid-cols-2 gap-5 pb-8">
            <Form.Item
              name="name"
              label="Name"
              className="w-full col-span-2"
              rules={[
                {
                  required: true,
                  message: "Date of death is required",
                },
              ]}
            >
              <Input />
            </Form.Item>
            {/* Second */}
            <Form.Item
              name="idNumber"
              label="Registration Number"
              className="col-span-1"
              required={true}
            >
              <Input />
            </Form.Item>
            <Form.Item name="pin" label="Pin" className="col-span-1">
              <Input />
            </Form.Item>
            {/* Third */}
            <Form.Item
              name="email"
              label="Email ID"
              rules={[
                {
                  
                  type:"email",
                  message: "Invalid Email",
                },
                {
                  required: true,
                  message:"Enter Email ID"

                }
              ]}
              className="col-span-1"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="telephoneNumber"
              label="Telephone Number"
              rules={[
                {
                  required: true,
                  message: "Telephone is required",
                },

                ({  }) => ({
                  validator(_, value) {
                    const phoneNumber: any = value;
                    const phoneLength: any = phoneNumber.length;
                    console.log(phoneLength);
                    if (phoneLength < 10 ) {
                      return Promise.reject(new Error("Invalid Phone Number")); 
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),

              ]}
              className="col-span-1"
            >
              <Input />
            </Form.Item>
          </div>
          {/* Fourth */}
          <Form.Item
            label="Prof. Address"
            name="profAddress"
            className="w-full"
          >
            <Input.TextArea rows={2} />
          </Form.Item>
          {/* Fifth */}
          <Form.Item name="occupation" label="Occupation" className="pt-4">
            <Radio.Group
              size="large"
              buttonStyle="solid"
              options={radioOptions}
              optionType="button"
              onChange={() =>
                setOccupationState(form.getFieldValue("occupation"))
              }
            />
          </Form.Item>
          <Form.Item
            className="w-full"
            name="other"
            label="Mention the occupation"
            hidden={occupationState !== "other"}
            rules={[
              {
                required: isOccupationApplicable,
                message: "Entering non-listed occupation is mandatory",
              },
            ]}
          >
            <Input
              suffix={<FiHelpCircle />}
              disabled={occupationState !== "other"}
            />
          </Form.Item>
          <div className="grid grid-cols-2 gap-5 pt-4">
            {/* Sixth */}

            <Form.Item name="department" label="Department">
              <Input />
            </Form.Item>
            {/* Seventh */}
            <Form.Item label="Date of this report" name="dateOfThisReport"
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  const stopDate: any = value;
                  const startDate: any = formStateimp.data.dateOfReactionStarted;
                  console.log(startDate);
                  console.log(stopDate);
                  if (stopDate < startDate) {
                    return Promise.reject(new Error("Date of recovery cannot be before date of reaction"));
                  } else {
                    return Promise.resolve();
                  }
                },
              }),
            ]}
            >
              <DatePicker className="w-full" />

            </Form.Item>
          </div>
          {/* Eighth */}
          <Form.Item label="References" name="references" className="pt-4">
            <Input.TextArea rows={2} />
          </Form.Item>
        </div>
        {/* Ninth */}
        <div className="mt-6 shadow-xl rounded-md w-full p-10 border">
          <Form.Item label="Reporter's Comment" name="reportersComment">
            <Input.TextArea rows={2} />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="4" />
      </Form>
    </FormLayout>
  );
}
