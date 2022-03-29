import { Checkbox } from "antd";

function Option2() {
  return (
    <div className="option2">
      <div className="w-full shadow-xl">
        <div className="mx-8 py-16 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            In Vitro Diagnostics
          </div>
          <div className=" my-2 mx-4 grid grid-cols-2 gap-5">
            <div className="col-span-1">
              <Checkbox>Kits</Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Control Materials </Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Reagents</Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>IVD Electronic Reader/Analyzer</Checkbox>
            </div>
            <div className="col-span-1">
              <Checkbox>Calibrators</Checkbox>
            </div>

            <div className="col-span-1">
              <Checkbox>Others</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Option2;
