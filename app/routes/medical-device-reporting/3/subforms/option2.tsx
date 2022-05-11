import { Checkbox, Form } from "antd";

// importing utilities
import { checkboxOptions } from "~/utils/medical-device-reporting/3";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/3/option2";

const Option2 = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page3Option2);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <Form
      name="Form2page3Option2"
      initialValues={newFormState}
      onFinish={(value) => console.log(value)}
      onValuesChange={(values) => {
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0]);
      }}
      layout="vertical"
    >
      <div className="option2">
        <div className="w-full shadow-xl">
          <div className="mx-8 py-16 pb-8">
            <div className="text-[24px] text-[#E8590C]">
              In Vitro Diagnostics
            </div>
            <Form.Item
              name="inVitroDiagnostic"
              label="Diagnostic"
              className="w-full"
            >
              <Checkbox.Group
                className="w-full grid grid-cols-3 gap-x-5 gap-y-2"
                options={checkboxOptions}
                name="medicineAdvised"
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Option2;
