import { InputRadioComponentProps } from "~/types/general";

import { Switch } from "antd";
import { useState } from "react";

const InputRadioComponent = (props: InputRadioComponentProps) => {
  const [selectedOption, setSelectedOption] = useState(props.radioOptionFalse);

  const radioOnChange = (checked: Boolean) => {
    checked
      ? setSelectedOption(props.radioOptionTrue)
      : setSelectedOption(props.radioOptionFalse);
    console.log(selectedOption);
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

export default InputRadioComponent;
