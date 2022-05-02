import React, { useState } from "react";
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";

// importing components
import { Input, DatePicker, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing types
import { FormSubStateType } from "~/types/reducers/adrReporting/3/a";

// importing redux
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData, addField } from "~/states/Slices/AdrReportingForm/3/h";
import { setAdditionalFormData } from "~/states/Slices/AdrReportingForm/3/h_filled";

export default function Form1page3h() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page3h_filled);
  const [keyCount, setKeyCount] = useState<number>(0);

  const submitFinishedForms = (values: FormSubStateType) => {
    dispatch(setAdditionalFormData({ id: keyCount, drugDetails: values }));
    setKeyCount(keyCount + 1);
  };

  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          <p className="my-0 py-0">Concomitant medical product</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Including self-medication and herbal remedies with therapy dates
          </p>
        </div>
        <div className="mb-5">
          <AddedDrugs current={formState} />
        </div>
        <div>
          <h2 className="text-[#e1763c]">Add more drugs</h2>
          <Subform id={keyCount} submitAction={submitFinishedForms} />
        </div>
      </div>
      <NavigationPanel currentRoute="3" />
    </FormLayout>
  );
}

function AddedDrugs(props: any) {
  console.log(props.current.drugDetails);
  return props.current.drugDetails.length > 0 ? (
    <React.Fragment>
      <h2 className="text-[#e1763c]">Drugs Added</h2>
      {props.current.drugDetails.map((drug: any, index: number) => {
        console.log(drug);
        return (
          <div key={index} className="flex flex-col border">
            <div className="flex flex-row">
              <p>{drug.name}</p>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  ) : null;
}

type PropTypes = {
  id: number;
  submitAction: (arg0: FormSubStateType) => void;
};

const Subform = (props: PropTypes) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page3h);
  let newFormState = { ...formState };

  if (formState.startDate) {
    const startDate = moment(new Date(formState.startDate));
    newFormState.startDate = startDate;
  } else {
    delete newFormState.startDate;
  }
  if (formState.stopDate) {
    const startDate = moment(new Date(formState.stopDate));
    newFormState.stopDate = startDate;
  } else {
    delete newFormState.stopDate;
  }
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const [form] = Form.useForm();
  return (
    <Form
      form={form}
      preserve={false}
      scrollToFirstError={true}
      name="Form1Page3h"
      initialValues={newFormState}
      onValuesChange={(values) =>
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
      }
      onFinish={(values) => {
        dispatch(addField());
        form.resetFields();
        props.submitAction(values);
      }}
      layout="vertical"
    >
      <Form.Item name="id" hidden={true}>
        <Input value={props.id} />
      </Form.Item>
      <Form.Item
        className="min-w-full pt-4"
        label="Name (brand/generic)"
        name="name"
        rules={[{ required: true, message: "Drug name is mandatory" }]}
      >
        <Input />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5 pt-4">
        <Form.Item className="col-span-1" label="Dose used" name="doseUsage">
          <Input />
        </Form.Item>
        <Form.Item className="col-span-1" label="Route used" name="routeUsed">
          <Input />
        </Form.Item>
      </div>
      <Form.Item
        className="mt-4 w-full"
        label="Frequency (OD, BD)"
        name="frequency"
      >
        <Input />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5 pt-4">
        <Form.Item
          className="col-span-1"
          label="Date started"
          name="startDate"
          rules={[{ required: true, message: "Start date is mandatory" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item className="col-span-1" label="Date stopped" name="stopDate">
          <DatePicker className="w-full" />
        </Form.Item>
      </div>
      <Form.Item className="mt-4 w-full" label="Indication" name="indication">
        <Input />
      </Form.Item>
      <div className="flex flex-row-reverse w-100">
        <button className="bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]">
          Add more
        </button>
      </div>
    </Form>
  );
};
