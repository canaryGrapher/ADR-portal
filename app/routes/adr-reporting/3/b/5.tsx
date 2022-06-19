import { useState, useEffect } from "react";

// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Checkbox, Input, Form, message } from "antd";
import { FiHelpCircle } from "react-icons/fi";

// importing utilities
import { options, radioOptions } from "~/utils/adr-reporting/3b5";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/b/5";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3b5() {
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [predisposingFactorsValues, setPredisposingFactorsValues] = useState<
    string[]
  >([""]);

  const onChangeCheckBoxGroup = (values: any[]) => {
    setPredisposingFactorsValues(values);
  };

  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3b5);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    form.setFieldsValue(formState.data);
    if (formState.status === "success") {
      // @ts-ignore
      setPredisposingFactorsValues(formState.data.preDisposingFactors);
    }
  }, [formState.status]);

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3b5"
        form={form}
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/b/v", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values }),
          })
            .then((res) => {
              info();
            })
            .catch((err) => {
              error();
            });
        }}
        onValuesChange={(values) =>
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }
        layout="vertical"
      >
        {/* Anything between the <FormLayout> tag can be changed */}
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="mx-8 py-4 pb-8">
            <div className="text-[24px] text-[#E8590C]">Predictability</div>
            <Form.Item
              name="predictability"
              label="Predictability"
              className="mx-4 min-w-full pt-4"
            >
              <Radio.Group
                buttonStyle="solid"
                options={radioOptions}
                optionType="button"
              />
            </Form.Item>
            <div className="my-4 text-[24px] text-[#E8590C]">
              Predisposing factors
            </div>
            <Form.Item name="preDisposingFactors" label="Predisposing factors">
              <Checkbox.Group
                options={options}
                onChange={(e) => onChangeCheckBoxGroup(e)}
              />
            </Form.Item>
            <Form.Item
              name="otherInformation"
              label="If other, mention the factor"
              required={predisposingFactorsValues.includes("other")}
            >
              <Input
                suffix={<FiHelpCircle />}
                disabled={!predisposingFactorsValues.includes("other")}
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="3b5" />
      </Form>
    </FormLayout>
  );
}
