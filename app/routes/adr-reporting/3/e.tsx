import { useState } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import InputDescription from "~/components/forms/inputDescription";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing icons
import { FiHelpCircle, FiPlus, FiX } from "react-icons/fi";

import { Radio, Input } from "antd";

export default function Form1page3e() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="mx-auto">
          <div className="text-[24px] text-[#E8590C]">
            Reaction Reappeared After Re-introduction
          </div>
          <RadioGroupDrugs />
          {/* Section to add drug information */}
          <AddDrugsBox />
        </div>
      </div>
      <NavigationPanel currentRoute="3e" />
    </FormLayout>
  );
}

const RadioGroupDrugs = () => {
  const radioOptions = [
    "No rechallenge",
    "Recurrance of symptoms",
    "No occurance of symptoms",
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
      <div className="flex flex-row pt-4">
        <p className="pl-1 pr-7 my-auto">Dose</p>
        <Input suffix={<FiHelpCircle />} />
      </div>
    </div>
  );
};

const AddDrugsBox = () => {
  const [drugsAdded, setDrugsAdded] = useState<readonly String[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const onClickAddDrug = (e: any) => {
    e.preventDefault();
    setDrugsAdded([...drugsAdded, inputValue]);
    setInputValue("");
  };

  const onClickRemoveDrug = (drug: String) => {
    setDrugsAdded(drugsAdded.filter((d) => d !== drug));
  };

  return (
    <div className="w-full pt-16">
      <form
        className="grid grid-cols-12 gap-1 gap-y-3"
        onSubmit={onClickAddDrug}
      >
        <Input
          className="col-span-11"
          placeholder="Add a drug"
          onChange={onChangeInput}
          value={inputValue}
        />
        <button
          type="submit"
          className="col-span-1 bg-[#6C567B] text-white p-2 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]"
        >
          <FiPlus className="mx-auto" />
        </button>
      </form>
      <div className="grid grid-cols-12 gap-1 pt-2">
        {drugsAdded.map((drug: String) => (
          <div className="border border-gray-400 col-span-11 flex flex-row justify-between px-5 py-1">
            <p className="my-auto">{drug}</p>
            <button className="my-auto" onClick={() => onClickRemoveDrug(drug)}>
              <FiX />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
