import InputDescription from "~/components/forms/inputDescription/InputDescription";
import FormLayout from "~/layouts/forms";

import cross from "./../../../components/close.svg"

import { Radio, Input, Button } from "antd";;

export default function Form1page3e() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="w-full shadow-xl">
        <div className="mx-8 py-4 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">Reaction Reappeared After Re-introduction</div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription isRequired={true} description="Drug 1" />
            <Radio.Group defaultValue={0} buttonStyle="solid">
              <Radio.Button value={0}>No rechallenge</Radio.Button>
              <Radio.Button value={1}>Recurrence of symptoms</Radio.Button>
              <Radio.Button value={2}>No occurence of symptoms</Radio.Button>
              <Radio.Button value={3}>Unkonwn</Radio.Button>
            </Radio.Group>
            <div className="flex items-center p-4">
                <p className="mb-[0px] pr-1 text-[16px]">Dose</p>
                <Input addonAfter={"?"} className="w-16"/>
            </div>
          </div>
          <div className="mx-4 min-w-full pt-4 flex flex-col justify-center">
                <div className="flex w-2/3 items-center">
                    <div className="w-full border-2 border-gray-300 py-2 px-2">
                        <p className="my-auto text-[16px]">Add a drug</p>
                    </div>
                    <Button type="primary" className="mx-1" size={"large"} onClick={() => alert("Clicked")}>
                      +
                    </Button>
                </div>
                <div className="flex w-2/3 mr-1 my-2 items-center border-2 border-gray-500 px-2">
                    <p className="my-auto py-2 w-full text-[16px]">Paracetamol</p>
                    <img src={cross} className="h-4"></img>
                </div>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}
