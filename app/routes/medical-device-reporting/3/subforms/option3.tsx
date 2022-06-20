import { Radio, Input, Form, Switch, message } from "antd";
import { useEffect } from "react";

// importing utilities
import {
  radioOptions2,
  typeOfDeviceOptions,
} from "~/utils/medical-device-reporting/3";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/3/option3";

const Option3 = () => {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const formState = useSelector((state: RootState) => state.form2page3Option3);
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
  return (
    <Form
      name="Form2page3Option1"
      form={form}
      onValuesChange={(values) => {
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0]);
      }}
      layout="vertical"
    >
      {" "}
      <div className="option3">
        <div className="w-full shadow-xl">
          <div className="mx-8 py-16 pb-8">
            <div className="pb-4 text-[24px] text-[#E8590C]">
              Equipment/Machines
            </div>
            <Form.Item
              label="Equipment usage"
              name="equipmentUsage"
              className="w-full"
            >
              <Radio.Group
                className="w-full"
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={typeOfDeviceOptions}
              />
            </Form.Item>
            <Form.Item
              label="Invasibility"
              name="invasibility"
              className="w-full"
            >
              <Radio.Group
                className="w-full"
                buttonStyle="solid"
                size="large"
                optionType="button"
                options={radioOptions2}
              />
            </Form.Item>
            <div className="grid grid-cols-2">
              <Form.Item
                name="imaging"
                label="Imaging"
                className="w-full mx-auto"
              >
                <Switch />
              </Form.Item>
              <Form.Item
                name="others"
                label="Others"
                className="w-full mx-auto"
              >
                <Switch />
              </Form.Item>
            </div>
            <Form.Item
              label="Reporter's Comments"
              name="reportersComments"
              className="w-full"
            >
              <Input.TextArea rows={2} />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Option3;
