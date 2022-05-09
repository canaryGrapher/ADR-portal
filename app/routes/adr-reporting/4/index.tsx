import { useEffect, useState } from "react";
import moment from "moment";

// Import Form Layout
import FormLayout from "~/layouts/forms/adr-reporting";

// Importing components
import { Input, Radio, DatePicker, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import { radioOptions } from "~/utils/adr-reporting/4";

//Import Images
import { FiHelpCircle } from "react-icons/fi";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/AdrReportingForm/4";

export default function Form1page4() {
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

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page4);
  let newFormState = { ...formState };
  if (formState.dateOfReport != null) {
    newFormState.dateOfReport = moment(formState.dateOfReport);
  } else {
    delete newFormState.dateOfReport;
  }
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page4"
        initialValues={newFormState}
        onFinish={(values) => console.log(values)}
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
            <Form.Item name="idNumber" label="ID Number" className="col-span-1">
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
                  required: true,
                  message: "Email ID is required",
                },
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
            <Form.Item label="Date of this report" name="dateOfReport">
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
