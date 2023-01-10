import React, { useState } from "react";
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";

//importing components
import { Input, Form, DatePicker, Radio, message, Select } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing types
import { FormSubStateType } from "~/types/reducers/adrReporting/3/a";

import { actionOptions, frequencyOptions, reintroductionOptions, routeUsedOptions, unitOptions } from "~/utils/adr-reporting/3a";

// importing redux
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData, addField } from "~/states/Slices/AdrReportingForm/3/a";
import {
  setAdditionalFormData,
  editAdditionalFormData,
  removeAdditionalFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/a_filled";

import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useEffect } from "react";

import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form1page3() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page3_filled);
  const [keyCount, setKeyCount] = useState<number>(0);

  const submitFinishedForms = (values: FormSubStateType) => {
    dispatch(setAdditionalFormData({ id: keyCount, drugDetails: values }));
    setKeyCount(keyCount + 1);
  };

  return (
    <FormLayout>
      <div className="w-full rounded-md border p-10 shadow-xl">
        <div className="text-3xl">
          <h2 className="text-[#E8590C]">Medication</h2>
        </div>
        <div className="mb-5">
          <AddedDrugs current={formState} dispatch={dispatch} />
        </div>
        <div>
          <h2 className="text-[#e1763c]">Add more drugs</h2>
          <Subform id={keyCount} submitAction={submitFinishedForms} />
        </div>
      </div>
      <Form
        onFinish={() => {
          fetch("/api/forms/form1/page3/a", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formState.data }),
          })
            .then((res) => {
              info();
            })
            .catch((err) => {
              error();
            });
        }}
      >
        <NavigationPanel currentRoute="3" />
      </Form>
    </FormLayout>
  );
}

function AddedDrugs(props: any) {
  // delete the drug from the finalised list
  const deleteFormItem = (id: number) => {
    props.dispatch(removeAdditionalFormData({ id: id }));
  };
  const changeFormData = (value: any, fieldName: any) => {
    props.dispatch(setNewFormData({ fieldName, value }));
  };
  const editFormData = (id: number, details: any) => {
    let item = props.dispatch(
      editAdditionalFormData({ id, drugDetails: details })
    );
    // populate the form state with the drug details to be edited
    Object.keys(item.payload.drugDetails).forEach((key) => {
      changeFormData(item.payload.drugDetails[key], key);
    });
    // remove the drug from the list fo finalised drugs
    deleteFormItem(id);
  };
  return props.current.data.drugDetails.length > 0 ? (
    <React.Fragment>
      <h2 className="text-[#e1763c]">Drugs Added</h2>
      <div className="grid grid-cols-2 gap-2">
        {props.current.data &&
          props.current.data.drugDetails.map((drug: any, index: number) => {
            console.log(drug)
            return (
              <div key={index} className="border">
                <div className="flex flex-row items-center justify-between px-4 py-3">
                  <p className="my-auto">{drug.nameOfDrug}</p>
                  <div className="flex items-center justify-center gap-4 text-lg">
                    <div className="cursor-pointer hover:text-neutral-500">
                      <EditFilled
                        onClick={() => editFormData(drug.identifier !== undefined ? (drug._id === undefined ? drug.identifier : drug._id) : drug._id, drug)}
                      />
                    </div>
                    <div className="cursor-pointer hover:text-neutral-500">
                      <DeleteFilled onClick={() => deleteFormItem(drug.identifier !== undefined ? (drug._id === undefined ? drug.identifier : drug._id) : drug._id)} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
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

  const [otherRouteInputVisibility, setOtherRouteInputVisibility] = useState<boolean>(true);
  const [otherUnitInputVisibility, setOtherUnitInputVisibility] = useState<boolean>(true);
  const [otherFreqInputVisibility, setOtherFreqInputVisibility] = useState<boolean>(true);
  useEffect(() => {
    if (newFormState.routeUsed === "other") {
      setOtherRouteInputVisibility(true);
    } else {
      setOtherRouteInputVisibility(false);
    }

    if (newFormState.unit === "other") {
      setOtherUnitInputVisibility(true);
    } else {
      setOtherUnitInputVisibility(false);
    }

    if (newFormState.frequency === "other") {
      setOtherFreqInputVisibility(true);
    } else {
      setOtherFreqInputVisibility(false);
    }
  }, [formState.routeUsed, formState.unit, formState.frequency]);

  console.log(otherRouteInputVisibility);

  if (formState.expDate) {
    // @ts-ignore
    const expiryDate = moment(new Date(formState.expDate));
    // @ts-ignore
    newFormState.expDate = expiryDate;
  } else {
    delete newFormState.expDate;
  }
  if (formState.dateStarted) {
    // @ts-ignore
    const startDate = moment(new Date(formState.dateStarted));
    // @ts-ignore
    newFormState.dateStarted = startDate;
  } else {
    delete newFormState.dateStarted;
  }
  if (formState.dateStopped) {
    // @ts-ignore
    const stopDate = moment(new Date(formState.dateStopped));
    // @ts-ignore
    newFormState.dateStopped = stopDate;
  } else {
    delete newFormState.dateStopped;
  }

  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const [form] = Form.useForm();
  // update the initial state for editing a drug
  useEffect(() => {
    form.setFieldsValue(newFormState);
  }, [form, newFormState]);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  // check other input
  const checkOthers = (e: any, label: string) => {
    const input = e;
    if (input.toLowerCase() === "other") {
      if (label === "route") {
        setOtherRouteInputVisibility(true);
      } else if (label === "unit") {
        setOtherUnitInputVisibility(true);
      } else if (label === "frequency") {
        setOtherFreqInputVisibility(true);
      }
    } else {
      if (label === "route") {
        setOtherRouteInputVisibility(false);
      } else if (label === "unit") {
        setOtherUnitInputVisibility(false);
      } else if (label === "frequency") {
        setOtherFreqInputVisibility(false);
      }
    }
  }

  return (
    <Form
      form={form}
      preserve={false}
      scrollToFirstError={true}
      name="Form1Page3"
      initialValues={newFormState}
      onValuesChange={(values) => {
        changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0]);
        console.log(Object.keys(values));
      }}
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
        <div className="flex gap-3">
          <Form.Item name="routeUsed" label="Route used" className="w-full">
            <Select allowClear={true} options={routeUsedOptions} onChange={(e: any) => checkOthers(e, "route")} />
          </Form.Item>
          <Form.Item name="otherRouteUsed" label="Other route" hidden={!otherRouteInputVisibility} rules={[
            {
              required: otherRouteInputVisibility,
              message: "Entering non-listed route is mandatory",
            },
          ]} className="w-full">
            <Input disabled={!otherRouteInputVisibility} />
          </Form.Item>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item name="ip_op" label="IP_OP" className="w-full">
          <Input />
        </Form.Item>
        <div className="flex gap-3">
          <Form.Item name="unit" label="Unit" className="w-full">
            <Select allowClear={true} options={unitOptions} onChange={(e: any) => checkOthers(e, "unit")} />
          </Form.Item>
          <Form.Item name="otherUnit" label="Other unit" hidden={!otherUnitInputVisibility} rules={[
            {
              required: otherUnitInputVisibility,
              message: "Entering non-listed route is mandatory",
            },
          ]} className="w-full">
            <Input disabled={!otherUnitInputVisibility} />
          </Form.Item>
        </div>
      </div>
      <div className="flex gap-3">
        <Form.Item
          name="frequency"
          label="Frequency (OD, BD, etc.)"
          className="w-full"
        >
          <Select allowClear={true} options={frequencyOptions} onChange={(e: any) => checkOthers(e, "frequency")} />
        </Form.Item>
        <Form.Item
          name="otherFrequency"
          label="Other frequency"
          className="w-full"
          hidden={!otherFreqInputVisibility}
          rules={[
            {
              required: otherFreqInputVisibility,
              message: "Entering non-listed frequency is mandatory",
            },
          ]}
        >
          <Input disabled={!otherFreqInputVisibility} />
        </Form.Item>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Form.Item
          name="dateStarted"
          label="Date started"
          className="w-full"
          rules={[{ required: true, message: "Start date is mandatory" }]}
        >
          <DatePicker format="DD-MM-YYYY" className="w-full" />
        </Form.Item>
        <Form.Item
          name="dateStopped"
          label="Date stopped"
          className="w-full"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const stopDate: any = value;
                const startDate: any = getFieldValue("dateStarted");
                if (stopDate < startDate) {
                  return Promise.reject(new Error("Date of recovery cannot be before date of reaction"));
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <DatePicker format="DD-MM-YYYY" className="w-full" />
        </Form.Item>
      </div>
      <Form.Item name="indication" label="Indication" className="w-full">
        <Input />
      </Form.Item>
      <Form.Item name="actionTaken" label="Action Taken" className="w-full">
        <Radio.Group
          size="large"
          buttonStyle="solid"
          options={actionOptions}
          optionType="button"
        />
      </Form.Item>
      <Form.Item name="dechallenge" label="Dechallenge" className="w-full">
        <Radio.Group
          size="large"
          buttonStyle="solid"
          options={actionOptions}
          optionType="button"
        />
      </Form.Item>
      <Form.Item name="rechallenge" label="Rechallenge" className="w-full">
        <Radio.Group
          size="large"
          buttonStyle="solid"
          options={actionOptions}
          optionType="button"
        />
      </Form.Item>
      <h2 className="text-[#e1763c]">
        Reaction Reappeared after reintroduction
      </h2>
      <Form.Item
        name="reactionCategorization"
        label="Reaction reappeared"
        className="w-full"
      >
        <Radio.Group
          size="large"
          buttonStyle="solid"
          options={reintroductionOptions}
          optionType="button"
        />
      </Form.Item>
      <Form.Item
        name="doseAfterReintroduction"
        label="Dose used after reintroduction"
        className="w-full"
      >
        <Input />
      </Form.Item>
      <div className="w-100 flex flex-row-reverse">
        <button
          className="w-32 border border-[#6C567B] bg-[#6C567B] p-2 text-white hover:bg-white hover:text-[#6C567B]"
          type="submit"
        >
          Add
        </button>
      </div>
    </Form>
  );
};
