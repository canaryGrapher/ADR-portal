import React, { useState } from "react";
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";

//importing components
import { Input, Form, DatePicker } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing types
import { FormSubStateType } from "~/types/reducers/adrReporting/3/a";

// importing redux
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData, addField } from "~/states/Slices/AdrReportingForm/3/a";
import { setAdditionalFormData } from "~/states/Slices/AdrReportingForm/3/a_filled";

export default function Form1page3() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page3_filled);
  const [keyCount, setKeyCount] = useState<number>(0);

  const submitFinishedForms = (values: FormSubStateType) => {
    dispatch(setAdditionalFormData({ id: keyCount, drugDetails: values }));
    setKeyCount(keyCount + 1);
  };

  return (
    <FormLayout>
      <div className="shadow-xl rounded-md w-full p-10 border">
        <div className="text-3xl">
          <h2 className="text-[#E8590C]">Medication</h2>
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
              <p>{drug.nameOfDrug}</p>
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
  const formState = useSelector((state: RootState) => state.form1page3);
  let newFormState = { ...formState };

  if (formState.expDate) {
    const expiryDate = moment(new Date(formState.expDate));
    newFormState.expDate = expiryDate;
  } else {
    delete newFormState.expDate;
  }
  if (formState.dateStarted) {
    const startDate = moment(new Date(formState.dateStarted));
    newFormState.dateStarted = startDate;
  } else {
    delete newFormState.dateStarted;
  }
  if (formState.dateStopped) {
    const stopDate = moment(new Date(formState.dateStopped));
    newFormState.dateStopped = stopDate;
  } else {
    delete newFormState.dateStopped;
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
      name="Form1Page3"
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
        className="w-full"
        label="Name (Brand/Generic)"
        name="nameOfDrug"
        rules={[{ required: true, message: "Drug name is mandatory" }]}
      >
        <Input required={true} />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="manufacturer" label="Manufacturer" className="w-full">
          <Input />
        </Form.Item>
        <Form.Item
          label="Batch No. / Lot No."
          name="BatchNo_LotNo"
          className="w-full"
        >
          <Input />
        </Form.Item>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Form.Item name="expDate" label="Exp. Date" className="w-full">
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="doseUsed" label="Dose used" className="w-full">
          <Input type={"number"} suffix="kgs" />
        </Form.Item>
        <Form.Item name="routeUsed" label="Route used" className="w-full">
          <Input />
        </Form.Item>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="ip_op" label="IP_OP" className="w-full">
          <Input />
        </Form.Item>
        <Form.Item name="unit" label="Unit" className="w-full">
          <Input />
        </Form.Item>
      </div>
      <Form.Item
        name="frequency"
        label="Frequency (OD, BD, etc.)"
        className="w-full"
      >
        <Input />
      </Form.Item>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name="dateStarted"
          label="Date started"
          className="w-full"
          rules={[{ required: true, message: "Start date is mandatory" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item name="dateStopped" label="Date stopped" className="w-full">
          <DatePicker className="w-full" />
        </Form.Item>
      </div>
      <Form.Item name="indication" label="Indication" className="w-full">
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
