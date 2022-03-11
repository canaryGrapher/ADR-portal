// importing layouts
import FormLayout from "~/layouts/forms";

// importing components
import { Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3a() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="mx-auto">
          <div className="pl-4 text-[24px] text-[#E8590C]">Dechallenge</div>
          <RadioGroupDrugs />
        </div>
      </div>
      <NavigationPanel currentRoute="3c" />
    </FormLayout>
  );
}

const RadioGroupDrugs = () => {
  const radioOptions = [
    "No dechallenge",
    "Definite Improvement",
    "No Improvement",
    "Unknown",
  ];
  const onChangeRadioSelection = (e: any) => {
    console.log("radio1 checked", e.target.value);
  };
  return (
    <div className="w-full pt-2">
      {/* Make description dynamic */}
      <InputDescription isRequired={true} description="Drug 1" />
      <Radio.Group
        size="large"
        buttonStyle="solid"
        options={radioOptions}
        optionType="button"
        defaultValue={radioOptions[0]}
        onChange={onChangeRadioSelection}
      />
    </div>
  );
};
