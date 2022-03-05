import { InputDescriptionProps } from "~/types/general";

import InfoIcon from "./InfoIcon.svg";

const InputDescription = (props: InputDescriptionProps) => {
  return (
    <div className="flex flex-row items-center pb-1">
      {props.isRequired && <span className="pr-1 text-red-500">*</span>}
      <p className="mb-[0px] pr-1 text-[16px]">{props.description}</p>
      <img src={InfoIcon} alt="info icon" />
    </div>
  );
};

export default InputDescription;
