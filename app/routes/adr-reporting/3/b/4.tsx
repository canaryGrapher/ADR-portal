// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";
import { useEffect, useState } from "react";
// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { Radio, Form, message } from "antd";

//importing utilities
import {
  formLayout,
  formRadioOptions,
  formRadioOptions2,
} from "~/utils/adr-reporting/3b4";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/b/4";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3b4() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const formState = useSelector((state: RootState) => state.form1page3b4);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    form.setFieldsValue(formState.data);
  }, [formState.status]);
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  useEffect(() => {
    calculateResult();
  }, [formState.data])

  // calculate adr preventability
  const [finalResult, setFinalResult] = useState<string>("To be calculated");
  // enable or disable questions
  const [enableFurtherQues, setEnableFurtherQues] = useState<boolean>(true);
  const calculateResult = () => {
    const options = formState.data;
    const valuesArray: string[] = Object.values(options).map((value: string) => {
      return value
    });
    const anyOneYes = (arr: string[]) => arr.some(val => val != null && val.toString() === "Yes");
    const allNo = (arr: string[]) => arr.every(val => val != null && val.toString() === "No");
    const definitePrev: string[] = valuesArray.slice(0, 5);
    const probabPrev: string[] = valuesArray.slice(5, 9);
    // check if any one answer is yes in the first five questions
    if (allNo(definitePrev)) {
      // enable further questions
      setEnableFurtherQues(false);
      setFinalResult("To be calculated");
    }
    if (anyOneYes(definitePrev)) {
      // disable further questions
      setEnableFurtherQues(true);
      // definitely preventable
      setFinalResult("Definitely Preventable ADR");
    } else if (anyOneYes(probabPrev)) {
      // probably preventable
      setFinalResult("Probably Preventable ADR");
    } else if (allNo(valuesArray)) {
      // not preventable
      setFinalResult("Not Preventable ADR");
    }
  }

  return (
    <FormLayout>
      <Form
        preserve={false}
        form={form}
        scrollToFirstError={true}
        name="Form1Page3b4"
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/b/iv", {
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
          <div className="">
            <div className="text-[24px] text-[#E8590C]">
              Modified Schumock and Thornton scale
            </div>
            {formLayout.map((field, index) => (
              <Form.Item
                key={index}
                name={field.value}
                label={field.label}
                className="w-full pt-4"
              >
                <Radio.Group disabled={index >= 5 && enableFurtherQues} options={formRadioOptions} optionType="button" />
              </Form.Item>
            ))}

            <div className="w-full pt-2">
              <p className="text-[16px] m-0 font-bold text-gray-800 dark:text-gray-300">
                Final Result
              </p>
              <p className="text-[#E8590C] text-2xl">
                {finalResult}
              </p>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b4" />
      </Form>
    </FormLayout>
  );
}
