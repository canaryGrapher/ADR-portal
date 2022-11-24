// importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";
import { useEffect, useState } from "react";
// importing components
import NavigationPanel from "~/components/forms/NavigationPanel";
import { FiHelpCircle } from "react-icons/fi";
import { Form, Radio, message } from "antd";

//importing utilities
import { RadioOptions, formLayout } from "~/utils/adr-reporting/3b1";

import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/b/1";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form1page3b1() {
  const [form] = Form.useForm();
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page3b1);
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
    calculateAdrScore();
  }, [formState.data]);

  // calculate adr score based on naranjo’s scale
  const [score, setScore] = useState<number>(0);
  const calculateAdrScore = () => {
    const options: any = formLayout;
    // create an array of the values
    let valueArray = Object.values(formState.data).map((value: string, index: number) => {
      return value
    });
    // remove unnecessary values or values that are not accepted
    valueArray = valueArray.filter((val) => {
      if (val === "Yes" || val === "No" || val === "Don't know"){
        return val
      }
    });
    let tempScore:number = 0;
    Object.keys(formState.data).map((key: string, index: number) => {
      if (valueArray[index] === "Yes") {
        tempScore += options[index]["yes"];
      } else if (valueArray[index] === "No") {
        tempScore += options[index]["no"];
      } else if (valueArray[index] === "Don't know") {
        tempScore += options[index]["dontKnow"];
      }
    });
    setScore(tempScore);
    calculateAdrProbability();
  }
  // calculate probability of adr
  const [adrProbability, setAdrProbability] = useState<string>("");
  const calculateAdrProbability = () => {
    if(score >= 9) {
      setAdrProbability("Definite");
    } else if (score >= 5 && score <= 8) {
      setAdrProbability("Probable");
    } else if (score >= 1 && score <=4) {
      setAdrProbability("Possible");
    } else if (score <= 0) {
      setAdrProbability("Doubtful");
    } else {
      setAdrProbability("");
    }
  }

  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page3b"
        onFinish={(values) => {
          fetch("/api/forms/form1/page3/b/i", {
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
            <div className="text-[24px] text-[#E8590C] pb-5">
              Naranjo’s Scale
            </div>
            {formLayout.map((field, index) => (
              <Form.Item
                key={index}
                name={field.name}
                label={field.label}
                className="w-full pt-4"
              >
                <Radio.Group options={RadioOptions} optionType="button" />
              </Form.Item>
            ))}
            {/* calculated score for the ADR is displayed here */}
            <div className="flex flex-row-reverse text-black dark:text-gray-200">
              <div className="grid grid-cols-2 gap-x-3">
                <div className="flex flex-col justify-end">
                  {adrProbability !== "" && <p className="text-lg text-[#6C567B] p-0 m-0">{adrProbability} ADR</p>}
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-[#6C567B] p-0 m-0">
                    {/* Score is dynamically calculated */}
                    <span className="font-bold text-4xl">{score}</span>/10
                  </p>
                </div>
                <div className="flex flex-row font-bold m-0 p-0">
                  <p className="m-0 p-0">Result</p>
                  <FiHelpCircle className="mt-1 ml-1" />
                </div>
                <div className="">
                  <p className="my-auto font-bold">Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="3b" />
      </Form>
    </FormLayout>
  );
}
