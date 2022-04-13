// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import { Radio } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

export default function Form1page3j() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div>
          <div className="text-[24px] text-[#E8590C]">Outcome</div>
          <div className="w-full pt-4">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value={0}>Fatal</Radio.Button>
              <Radio.Button value={1}>Recovery</Radio.Button>
              <Radio.Button value={2}>Continuing</Radio.Button>
              <Radio.Button value={3}>Unknown</Radio.Button>
              <Radio.Button value={4}>Other</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      <NavigationPanel currentRoute="3j" />
    </FormLayout>
  );
}
