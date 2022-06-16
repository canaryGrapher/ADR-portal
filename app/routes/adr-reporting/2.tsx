// Import Form Layout
import { useEffect } from "react";
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";
// Import components
import { Input, DatePicker, Form, message } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing redux reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import {
  getFormData,
  setNewFormData,
} from "~/states/Slices/AdrReportingForm/2";

import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form1page2() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // converting date value to moment Object
  const formState = useSelector((state: RootState) => state.form1page2);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    const ReactionStarted = formState.data.dateOfReactionStarted
      ? moment(formState.data.dateOfReactionStarted)
      : null;
    const RecoveryDate = formState.data.dateOfRecovery
      ? moment(formState.data.dateOfRecovery)
      : null;
    let newFormState = {
      ...formState.data,
      // @ts-ignore
      dateOfRecovery: RecoveryDate,
      dateOfReactionStarted: ReactionStarted,
    };
    if (!newFormState.dateOfReactionStarted) {
      // @ts-ignore
      delete newFormState.dateOfReactionStarted;
    }
    if (!newFormState.dateOfRecovery) {
      // @ts-ignore
      delete newFormState.dateOfRecovery;
    }
    form.setFieldsValue(newFormState);
  }, [formState.status]);

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  return (
    <FormLayout>
      <Form
        form={form}
        preserve={false}
        scrollToFirstError={true}
        name="Form1Page2"
        onFinish={(values) => {
          fetch("/api/forms/form1/page2", {
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
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Suspected Adverse Reaction</h2>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Form.Item
              className="w-full"
              label="Date of reaction started"
              name="dateOfReactionStarted"
              rules={[{ required: true, message: "Date of reaction started" }]}
            >
              <DatePicker className="w-full" />
            </Form.Item>
            <Form.Item
              className="w-full"
              label="Date of recovery"
              name="dateOfRecovery"
            >
              <DatePicker className="w-full" />
            </Form.Item>
          </div>
          <Form.Item
            className="w-full"
            label="Describe reaction or problem"
            name="reactionDescription"
            rules={[
              { required: true, message: "Reaction description is mandatory" },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </div>
        <NavigationPanel currentRoute="2" />
      </Form>
    </FormLayout>
  );
}
