import { Radio, Checkbox, Input } from "antd";
import InputDescription from "~/components/forms/inputDescription";
const { TextArea } = Input;

const option3 = () => {
  return (
    <div className="option3">
      <div className="w-full shadow-xl p-10">
        <div className="py-16 pb-8">
          <div className="pl-4 text-[24px] text-[#E8590C]">
            Equipment/Machines
          </div>
          <div className="mx-4 min-w-full pt-4">
            <InputDescription
              isRequired={false}
              description="Equipment usage"
            />
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
            <InputDescription isRequired={false} description="Invasibility" />
            <Radio.Group className="w-full" buttonStyle="solid">
              <Radio.Button value={0} className="w-1/2 text-center">
                Invasive
              </Radio.Button>
              <Radio.Button value={1} className="w-1/2 text-center">
                Non-Invasive
              </Radio.Button>
            </Radio.Group>
          </div>

          <div className="col-span-1 mx-4 py-8">
            <Checkbox> Imaging </Checkbox>
          </div>
          <div className="col-span-1 mx-4">
            <Checkbox> Others </Checkbox>
          </div>
        </div>
        <div className="mt-4 w-full px-4">
          <InputDescription
            isRequired={false}
            description="Reporter's Comments"
          />
          <TextArea rows={2} />
        </div>
      </div>
    </div>
  );
};

export default option3;
