import { InputRadioComponentProps } from "~/types/general";

import { Switch } from "antd";
import { useState } from "react";

const RadioOptions = () => (
  <div className="w-full grid grid-cols-2 gap-4">
    <div className="col-span-1">
      <InputRadioComponent
        title="Report Type"
        radioOptionFalse="Predictable"
        radioOptionTrue="Not Predictable"
      />
    </div>
    <div className="col-span-1">
      <InputRadioComponent
        title="AMC/NCC"
        radioOptionFalse="Applicable"
        radioOptionTrue="Not Applicable"
      />
    </div>
  </div>
);

const InputRadioComponent = (props: InputRadioComponentProps) => {
  const [selectedOption, setSelectedOption] = useState(props.radioOptionFalse);

  const radioOnChange = (checked: Boolean) => {
    checked
      ? setSelectedOption(props.radioOptionTrue)
      : setSelectedOption(props.radioOptionFalse);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center rounded-lg border p-8 shadow-md">
      <p className="text-xl font-semibold"> {props.title}</p>
      <div className="flex flex-row gap-4">
        <p className="bold text-base font-medium">{props.radioOptionFalse}</p>
        <Switch onChange={radioOnChange} />
        <p className="text-base font-medium">{props.radioOptionTrue}</p>
      </div>
    </div>
  );
};

export default RadioOptions;
