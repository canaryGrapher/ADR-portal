import { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/medical-device-reporting";

// importing components
import { Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

//Importing subforms
import Option1 from "./subforms/option1";
import Option2 from "./subforms/option2";
import Option3 from "./subforms/option3";

export default function Form3page9() {
  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);

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
                  setOpt1(true);
                  setOpt2(false);
                  setOpt3(false);
                }}
              >
                Medical Device
              </Radio.Button>

              <Radio.Button
                value={1}
                className="w-1/3 text-center"
                onClick={() => {
                  setOpt1(false);
                  setOpt2(true);
                  setOpt3(false);
                }}
              >
                In Vitro Diagnostics
              </Radio.Button>

              <Radio.Button
                value={2}
                className="w-1/3 text-center"
                onClick={() => {
                  setOpt1(false);
                  setOpt2(false);
                  setOpt3(true);
                }}
              >
                Equipment/Machines
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>

      {opt1 && (
        <div className="Option1">
          <Option1 />
        </div>
      )}

      {opt2 && (
        <div className="Option2">
          <Option2 />
        </div>
      )}

      {opt3 && (
        <div className="Option3">
          <Option3 />
        </div>
      )}
      <NavigationPanel currentRoute="3" />
    </FormLayout>
  );
}
