import { useEffect, useState } from "react";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";
import FormLayout from "~/layouts/forms/adr-reporting";
import { Input, Form, InputNumber, DatePicker, Select, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";
// importing utilities
import {
  genderOptions,
  advisedMedicineOptions,
  ip_op,
  unit_op,
} from "~/utils/adr-reporting/1";
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/1";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form1page1() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page1);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    const BirthDate = formState.data.DateOfBirth
      ? moment(formState.data.DateOfBirth)
      : null;
    let newFormState = {
      ...formState.data,
      // @ts-ignore
      DateOfBirth: BirthDate,
    };
    if (!newFormState.DateOfBirth) {
      // @ts-ignore
      delete newFormState.DateOfBirth;
    }
    if (formState.data.unit === "other") {
      setOthersInputVisibility(true);
    } else {
      setOthersInputVisibility(false);
    }
    form.setFieldsValue(newFormState);
  }, [formState.status]);

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  // check other input for Unit field
  const [othersInputVisibility, setOthersInputVisibility] = useState<boolean>(false);
  const checkOthers = (e: any) => {
    const unitInput = e;
    if (unitInput.toLowerCase() === "other") {
      setOthersInputVisibility(true);
    } else {
      setOthersInputVisibility(false);
    }
  }

  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page1"
        onFinish={(values) => {
          fetch("/api/forms/form1/page1", {
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
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Patient Information</h2>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Patient first name is required" },
                ]}
                className="w-full"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Patient last name is required" },
                ]}
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                label="Date of Birth"
                name="DateOfBirth"
                className="w-full"
              >
                <DatePicker className="w-full" format="DD/MM/YYYY" />
              </Form.Item>

              <Form.Item
                className="w-full"
                label="Age of Onset"
                name="ageOfOnset"
                rules={[
                  { required: true, message: "Age of onset is required" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const enteredAge: number = value;
                      const currentDate = moment(new Date());
                      const enteredDob: any = getFieldValue("DateOfBirth");
                      const actualAge = currentDate.diff(enteredDob, 'years');
                      if (enteredAge > actualAge) {
                        return Promise.reject(new Error("Your age cannot exceed actual age"));
                      } else {
                        return Promise.resolve();
                      }
                    },
                  }),
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Form.Item label="Gender" name="gender" className="w-full">
                <Select allowClear options={genderOptions} />
              </Form.Item>
              <Form.Item className="w-full" label="Weight" name="weight">
                <InputNumber addonAfter={"kgs"} />
              </Form.Item>
              <Form.Item name="patientID" label="Patient ID" className="w-full">
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item label="IP/OP" name="ip_op" className="w-full">
                <Select allowClear={true} options={ip_op} />
              </Form.Item>
              <div className="flex gap-3">
                <Form.Item label="Unit" name="unit" className="w-full">
                  <Select allowClear={true} options={unit_op} onChange={(e: any) => checkOthers(e)} />
                </Form.Item>
                <Form.Item hidden={!othersInputVisibility} rules={[
                  {
                    required: true,
                    message: "Entering non-listed unit is mandatory",
                  },
                ]} label="Other unit" name="otherUnit" className="w-full">
                  <Input disabled={!othersInputVisibility} />
                </Form.Item>
              </div>
            </div>
            <Form.Item
              label="Reason for taking medication/vaccination"
              name="reasonForTakingMedication"
              className="w-full py-4"
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Medicines/vaccines advised by"
              name="medicineAdvised"
              className="w-full"
            >
              <Select allowClear options={advisedMedicineOptions} />
            </Form.Item>

            <Form.Item
              label="Known Allergies"
              name="knownAllergies"
              className="w-full"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Social History"
              name="socialHistory"
              className="w-full"
            >
              <Input />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="1" />
      </Form>
    </FormLayout>
  );
}
