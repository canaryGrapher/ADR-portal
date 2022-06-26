import { useEffect, useState } from "react";
// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";
// importing components
import { Radio, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
//Importing subforms
import Option1 from "./subforms/option1";
import Option2 from "./subforms/option2";
import Option3 from "./subforms/option3";
// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  getFormData,
  setNewFormData,
  resetFormData,
} from "~/states/Slices/MedicalDeviceReporting/3";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

const options = [
  { label: "Medical Device", value: "medicalDevice" },
  { label: "In-Vitro Diagnostics", value: "inVitroDiagnostic" },
  { label: "Equipment/Machines", value: "equipmentMachine" },
];

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form2page3() {
  const [formOptionSelector, setFormOptionSelector] = useState<
    string | null | undefined
  >();
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page3);
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  useEffect(() => {
    dispatch(getFormData());
  }, []);
  //user flow while initial fill >
  // 1) The user selects a device category
  // 2) Save this state
  useEffect(() => {
    const initialCategoryValue = formState.data.deviceCategory;
    setFormOptionSelector(formState.data.deviceCategory);
    dispatch(
      setNewFormData({
        fieldName: "deviceCategory",
        value: initialCategoryValue,
      })
    );
  }, [formState.data.deviceCategory]);
  // change redux value whenever there is change in the form
  return (
    <FormLayout>
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Device Category</div>
          <div className="mx-4 min-w-full pt-4">
            <Radio.Group
              buttonStyle="solid"
              className="w-full"
              options={options}
              optionType="button"
              value={formOptionSelector}
              onChange={(e) => {
                dispatch(resetFormData());
                dispatch(
                  setNewFormData({
                    fieldName: "deviceCategory",
                    value: e.target.value,
                  })
                );
              }}
            ></Radio.Group>
          </div>
        </div>
      </div>
      {formState.data.deviceCategory === "medicalDevice" ? (
        <div className="Option1">
          <Option1 />
        </div>
      ) : null}
      {formState.data.deviceCategory === "inVitroDiagnostic" ? (
        <div className="Option2">
          <Option2 />
        </div>
      ) : null}
      {formState.data.deviceCategory === "equipmentMachine" ? (
        <div className="Option3">
          <Option3 />
        </div>
      ) : null}
      <Form
        onFinish={() => {
          const data = { ...formState.data };
          fetch("/api/forms/form2/page3", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data }),
          })
            .then((res) => {
              info();
            })
            .catch((err) => {
              error();
            });
        }}
      >
        <NavigationPanel currentRoute="3" />
      </Form>
    </FormLayout>
  );
}
