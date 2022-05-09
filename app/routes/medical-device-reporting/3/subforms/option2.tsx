import { Checkbox, Form } from "antd";

// importing utilities
import { checkboxOptions } from "~/utils/medical-device-reporting/3";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/3/option2";

function Option2() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page3Option2);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <Form
      name="Form3page3Option2"
      initialValues={newFormState}
      onFinish={(value) => console.log(value)}
      onValuesChange={(values) => {
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
      }}
      layout="vertical"
    >
      <div className="option2">
        <div className="w-full shadow-xl">
          <div className="mx-8 py-16 pb-8">
            <div className="text-[24px] text-[#E8590C]">
              In Vitro Diagnostics
            </div>
            <div className="grid grid-cols-3">
              {checkboxOptions.map((option) => {
                return (
                  <div className="col-span-1" key={option}>
                    <Form.Item name={option.toLowerCase().replace(" ", "")}>
                      <Checkbox value={false}>{option}</Checkbox>
                    </Form.Item>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}

export default Option2;
