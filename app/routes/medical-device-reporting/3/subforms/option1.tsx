import React from "react";

//importing components
import { Radio, Checkbox, Form } from "antd";

//importing utilities
import {
  typeOfDeviceOptions,
  implantabilityOptions,
  reusabilityOptions,
} from "~/utils/medical-device-reporting/3";

function Option1() {
  return (
    <Form
      name="Form3page3Option1"
      initialValues={{ remember: true }}
      onFinish={(value) => console.log(value)}
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
            <Form.Item name="personalUse/homecareUse">
              <Checkbox>Personal Use/Homecare Use</Checkbox>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Option1;
