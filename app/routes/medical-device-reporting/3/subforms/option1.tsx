import React from "react";
import { Radio, Checkbox } from "antd";
import InputDescription from "~/components/forms/inputDescription";

function Option1() {
  return (
    <div className="option1">
      <div className="w-full shadow-xl">
        <div className="mx-8 py-16 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Medical Device</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={false} description="Type of device" />
            <Radio.Group className="w-full" buttonStyle="solid">
              <Radio.Button value={0} className="w-1/3 text-center">
                Therapeutic
              </Radio.Button>
              <Radio.Button value={1} className="w-1/3 text-center">
                Diagnostic
              </Radio.Button>
              <Radio.Button value={2} className="w-1/3 text-center">
                {" "}
                Both{" "}
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={false} description="Implantability" />
            <Radio.Group className="w-full" buttonStyle="solid">
              <Radio.Button value={0} className="w-1/2 text-center">
                Implantable
              </Radio.Button>
              <Radio.Button value={1} className="w-1/2 text-center">
                Non-Implantable
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={false} description="Reusability" />
            <Radio.Group className="w-full" buttonStyle="solid">
              <Radio.Button value={0} className="w-1/4 text-center">
                Single Use Device
              </Radio.Button>
              <Radio.Button value={1} className="w-1/4 text-center">
                Reusable device
              </Radio.Button>
              <Radio.Button value={2} className="w-1/2 text-center">
                Reuse of manufactured marked single use
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="col-span-1 mx-4 py-8">
            <Checkbox>Personal use/homecare use </Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option1;
