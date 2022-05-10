import { useEffect } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

// importing components
import { Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

//Importing subforms
import Option1 from "./subforms/option1";
import Option2 from "./subforms/option2";
import Option3 from "./subforms/option3";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/3";
import { setNewFormData as setNewFormDataOption1 } from "~/states/Slices/MedicalDeviceReporting/3/option1";
import { setNewFormData as setNewFormDataOption2 } from "~/states/Slices/MedicalDeviceReporting/3/option2";
import { setNewFormData as setNewFormDataOption3 } from "~/states/Slices/MedicalDeviceReporting/3/option3";

export default function Form3page9() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page3);

  useEffect(() => {
    if (formState.deviceCategory != "medicalDevice") {
      dispatch(
        setNewFormDataOption1({ fieldName: "typeOfDevice", value: null })
      );
      dispatch(
        setNewFormDataOption1({ fieldName: "implantability", value: null })
      );
      dispatch(
        setNewFormDataOption1({ fieldName: "reuseability", value: null })
      );
      dispatch(
        setNewFormDataOption1({ fieldName: "sterilization", value: null })
      );
      dispatch(
        setNewFormDataOption1({ fieldName: "personalUse", value: null })
      );
    }
    if (formState.deviceCategory != "inVitroDiagnostic") {
      dispatch(
        setNewFormDataOption2({ fieldName: "inVitroDiagnostic", value: null })
      );
    }
    if (formState.deviceCategory != "equipment_machine") {
      dispatch(
        setNewFormDataOption3({ fieldName: "equipmentUsage", value: null })
      );
      dispatch(
        setNewFormDataOption3({ fieldName: "invasibility", value: null })
      );
      dispatch(setNewFormDataOption3({ fieldName: "imaging", value: null }));
      dispatch(setNewFormDataOption3({ fieldName: "others", value: null }));
      dispatch(
        setNewFormDataOption3({ fieldName: "reportersComments", value: null })
      );
    }
  }, [formState]);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form

  return (
    <FormLayout>
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Device Category</div>
          <div className="mx-4 min-w-full pt-4">
            <Radio.Group buttonStyle="solid" className="w-full">
              <Radio.Button
                value={0}
                className="w-1/3 text-center"
                onClick={() => {
                  dispatch(
                    setNewFormData({
                      fieldName: "deviceCategory",
                      value: "medicalDevice",
                    })
                  );
                }}
              >
                Medical Device
              </Radio.Button>

              <Radio.Button
                value={1}
                className="w-1/3 text-center"
                onClick={() => {
                  dispatch(
                    setNewFormData({
                      fieldName: "deviceCategory",
                      value: "inVitroDiagnostic",
                    })
                  );
                }}
              >
                In Vitro Diagnostics
              </Radio.Button>

              <Radio.Button
                value={2}
                className="w-1/3 text-center"
                onClick={() => {
                  dispatch(
                    setNewFormData({
                      fieldName: "deviceCategory",
                      value: "equipment_machine",
                    })
                  );
                }}
              >
                Equipment/Machines
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>

      {formState.deviceCategory === "medicalDevice" && (
        <div className="Option1">
          <Option1 />
        </div>
      )}

      {formState.deviceCategory === "inVitroDiagnostic" && (
        <div className="Option2">
          <Option2 />
        </div>
      )}

      {formState.deviceCategory === "equipment_machine" && (
        <div className="Option3">
          <Option3 />
        </div>
      )}
      <NavigationPanel currentRoute="3" />
    </FormLayout>
  );
}
