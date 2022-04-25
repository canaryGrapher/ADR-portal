//importing components
import { Radio, Checkbox, Form } from "antd";

//importing utilities
import {
  typeOfDeviceOptions,
  implantabilityOptions,
  reusabilityOptions,
} from "~/utils/medical-device-reporting/3";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/3/option1";

function Option1() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page3Option1);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <Form
      name="Form3page3Option1"
      initialValues={newFormState}
      onFinish={(value) => console.log(value)}
      onValuesChange={(values) => {
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
      }}
      layout="vertical"
    >
      <div className="option1">
        <div className="w-full shadow-xl">
          <div className="mx-8 w-full py-16 pb-8">
            <div className="pb-4 text-[24px] text-[#E8590C]">
              Medical Device
            </div>
            <Form.Item
              label="Type of Device"
              name="typeOfDevice"
              className="w-full"
            >
              <Radio.Group
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={typeOfDeviceOptions}
              />
            </Form.Item>
            <Form.Item
              label="Implantability"
              name="typeOfDevice"
              className="w-full"
            >
              <Radio.Group
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={implantabilityOptions}
              />
            </Form.Item>
            <Form.Item
              label="Reuseability"
              name="reuseability"
              className="w-full"
            >
              <Radio.Group
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={reusabilityOptions}
              />
            </Form.Item>
            <Form.Item name="personalUse">
              <Checkbox>Personal Use/Homecare Use</Checkbox>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Option1;
