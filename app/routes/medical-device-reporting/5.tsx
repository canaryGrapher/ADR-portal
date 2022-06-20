import { useEffect } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { DatePicker, Input, Radio, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";

// importing utilities
import {
  radioOptions1,
  radioOptions2,
  radioOptions3,
  radioOptions4,
  radioOptions5,
} from "~/utils/medical-device-reporting/5";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/5";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page5() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page5);
  let newFormState = { ...formState };
  if (formState.dateOfEvent != null) {
    newFormState.dateOfEvent = moment(formState.dateOfEvent);
  } else {
    delete newFormState.dateOfEvent;
  }
  if (formState.dateOfImplant != null) {
    newFormState.dateOfImplant = moment(formState.dateOfImplant);
  } else {
    delete newFormState.dateOfImplant;
  }
  if (formState.dateOfReturn != null) {
    newFormState.dateOfReturn = moment(formState.dateOfReturn);
  } else {
    delete newFormState.dateOfReturn;
  }
  if (formState.dateOfDeath != null) {
    newFormState.dateOfDeath = moment(formState.dateOfDeath);
  } else {
    delete newFormState.dateOfDeath;
  }
  if (formState.year != null) {
    newFormState.year = moment(formState.year);
  } else {
    delete newFormState.year;
  }
  if (formState.yearGlobal != null) {
    newFormState.yearGlobal = moment(formState.yearGlobal);
  } else {
    delete newFormState.yearGlobal;
  }
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    if (fieldName === "deviceLocation" && value != "Returned to the company") {
      dispatch(setNewFormData({ fieldName: "dateOfReturn", value: null }));
      form.setFieldsValue({ ["dateOfReturn"]: null });
    }
    if (fieldName === "seriousEvent" && !(value === "Yes")) {
      form.setFieldsValue({ ["dateOfDeath"]: null, ["reason"]: null });
      dispatch(setNewFormData({ fieldName: "reason", value: null }));
      dispatch(setNewFormData({ fieldName: "dateOfDeath", value: null }));
    }
    if (fieldName === "reason" && value != "Death") {
      form.setFieldsValue({ ["dateOfDeath"]: null });
      dispatch(setNewFormData({ fieldName: "dateOfDeath", value: null }));
    }
    dispatch(setNewFormData({ fieldName, value }));
  };

  // update the initial state for editing a drug
  useEffect(() => {
    form.setFieldsValue(newFormState);
  }, [form, newFormState]);
  return (
    <FormLayout>
      <Form
        form={form}
        name="Form2page5"
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
            <div className="text-[24px] text-[#E8590C]">Event Description</div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-5">
                <Form.Item
                  label="Date of Event"
                  name="dateOfEvent"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Date of Implant"
                  name="dateOfImplant"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label="Location of event"
                  name="locationOfEvent"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions1}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device Operator"}
                  name="deviceOperator"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions2}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device location"}
                  name="deviceLocation"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions3}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item label="Date of return" name="dateOfReturn">
                  <DatePicker
                    disabled={
                      formState.deviceLocation != "Returned to the company"
                    }
                    className="w-full"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item label="Serious event?" name="seriousEvent">
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Reason"}
                  name="reason"
                  className="w-full"
                  required={formState.seriousEvent === "Yes"}
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions5}
                    optionType="button"
                    disabled={formState.seriousEvent != "Yes"}
                  />
                </Form.Item>
              </div>
              <Form.Item
                label="Date of death"
                name="dateOfDeath"
                required={
                  formState.reason === "Death" &&
                  formState.seriousEvent === "Yes"
                }
              >
                <DatePicker
                  disabled={
                    !(
                      formState.reason === "Death" &&
                      formState.seriousEvent === "Yes"
                    )
                  }
                  className="w-full"
                />
              </Form.Item>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Is device in use after the incident?"}
                  name="isDeviceInUse"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Detailed description of the incident"}
                  name="detailedDescription"
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events in India
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Year"} name="year" className="w-full">
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarIndia"
                      className="w-full"
                    >
                      <Input type="number" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedIndia"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Frequency"}
                      name="frequencyIndia"
                      className="w-full"
                    >
                      <Input className="w-full" />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events globally
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Year"}
                      name="yearGlobal"
                      className="w-full"
                    >
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarGlobal"
                      className="w-full"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedGlobal"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Frequency"} name="frequencyGlobal">
                      <Input />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="5" />
      </Form>
    </FormLayout>
  );
}
