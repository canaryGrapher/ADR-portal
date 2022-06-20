import { useEffect } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { Input, Radio, DatePicker, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";
// importing utilities
import {
  radioOptions1,
  radioOptions2,
} from "~/utils/medical-device-reporting/6";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/6";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page6() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const formState = useSelector((state: RootState) => state.form2page6);
  let newFormState = { ...formState };
  if (formState.dateOfRecovery != null) {
    newFormState.dateOfRecovery = moment(formState.dateOfRecovery);
  } else {
    delete newFormState.dateOfRecovery;
  }
  if (formState.dateOfDeath != null) {
    newFormState.dateOfDeath = moment(formState.dateOfDeath);
  } else {
    delete newFormState.dateOfDeath;
  }

  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    if (fieldName === "patientRecovered" && value != "Yes") {
      dispatch(setNewFormData({ fieldName: "dateOfRecovery", value: null }));
      form.setFieldsValue({ dateOfRecovery: null });
    }
    if (fieldName === "patientDead" && value != "Yes") {
      dispatch(setNewFormData({ fieldName: "dateOfDeath", value: null }));
      form.setFieldsValue({ dateOfDeath: null });
    }
    dispatch(setNewFormData({ fieldName, value }));
  };

  // update the initial state for editing a drug
  useEffect(() => {
    dispatch(getFormData());
  }, []);
  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);
  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        name="Form2page6"
        onFinish={(values) => {
          fetch("/api/forms/form2/page6", {
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
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">
              Patient Information
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5">
              <Form.Item
                label={"Patient Hospital Number"}
                name="patientHospitalNumber"
              >
                <Input className="w-full" />
              </Form.Item>
              <Form.Item label={"Patient Initials"} name="patientInitials">
                <Input className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item label={"Age"} name="age" className="w-full">
                <Input className="w-full" />
              </Form.Item>
              <Form.Item label={"Weight"} name="weight">
                <Input className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1">
              <Form.Item label={"Sex"} name="gender" className="w-full">
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions1}
                  optionType="button"
                />
              </Form.Item>
            </div>
            <div className="grid grid-cols-1">
              <Form.Item
                name="history"
                label="Other relevant history, including pre-existing medical conditions"
                className="w-full"
              >
                <Input.TextArea rows={4} className="w-full" />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Has the patient recovered?"}
                name="patientRecovered"
              >
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions2}
                  optionType="button"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                label={"Date of recovery"}
                name="dateOfRecovery"
                className="w-full"
                required={formState.patientRecovered === "Yes"}
              >
                <DatePicker
                  className="w-full"
                  disabled={formState.patientRecovered != "Yes"}
                />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Is the patient dead?"}
                name="patientDead"
                className="w-full"
              >
                <Radio.Group
                  size="large"
                  buttonStyle="solid"
                  options={radioOptions2}
                  optionType="button"
                  className="w-full"
                />
              </Form.Item>
            </div>
            <div className="col-span-1">
              <Form.Item
                label={"Date of death"}
                name="dateOfDeath"
                className="w-full"
                required={formState.patientDead === "Yes"}
              >
                <DatePicker
                  className="w-full"
                  disabled={!(formState.patientDead === "Yes")}
                />
              </Form.Item>
            </div>
            <div className="col-span-2">
              <Form.Item
                label={"Other patient outcomes"}
                name="otherPatientOutcomes"
                className="w-full"
              >
                <Input.TextArea rows={4} className="w-full" />
              </Form.Item>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="6" />
      </Form>
    </FormLayout>
  );
}
