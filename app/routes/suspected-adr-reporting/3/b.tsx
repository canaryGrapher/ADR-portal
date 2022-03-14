import { Radio } from "antd";
import InputDescription from "~/components/forms/inputDescription";
import RadioOptions from "~/components/forms/suspectedADRRadioMenu";
import NavigationPanel from "~/components/forms/NavigationPanel";
import FormLayout from "~/layouts/forms/suspected-adr-reporting";

export default function Form2page3b() {
  return (
    <FormLayout>
      <div className="flex w-full flex-col">
        <RadioOptions />
      </div>
      <div className="shadow-xl rounded-md w-full p-10 border mt-4">
        <div>
          <div className="text-[24px] text-[#E8590C]">Action Taken</div>
          <RadioGroupDrugs />
        </div>
      </div>
      <NavigationPanel currentRoute="3b" />
    </FormLayout>
  );
}

const RadioGroupDrugs = () => {
  const radioOptions = [
    "Drug withdrawn",
    "Dose increased",
    "Dose reduced",
    "Dose not changed",
    "Not applicable",
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
