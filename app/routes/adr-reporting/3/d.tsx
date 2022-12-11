import React, { useState, useEffect } from "react";
import FormLayout from "~/layouts/forms/adr-reporting";
import moment from "moment";

// importing components
import { Input, DatePicker, Form, message, Select } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing types
import { FormSubStateType } from "~/types/reducers/adrReporting/3/a";

// importing redux
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData, addField } from "~/states/Slices/AdrReportingForm/3/d";
import {
  setAdditionalFormData,
  editAdditionalFormData,
  removeAdditionalFormData,
  getFormData,
} from "~/states/Slices/AdrReportingForm/3/d_filled";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { frequencyOptions, routeUsedOptions } from "~/utils/adr-reporting/3d";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Form1page3d() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form1page3d_filled);
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
          <AddedDrugs current={formState} dispatch={dispatch} />
        </div>
        <div>
          <h2 className="text-[#e1763c]">Add more drugs</h2>
          <Subform id={keyCount} submitAction={submitFinishedForms} />
        </div>
      </div>
      <Form
        onFinish={() => {
          fetch("/api/forms/form1/page3/d", {
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
        <NavigationPanel currentRoute="3d" />
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
    // remove the drug from the list of finalised drugs
    deleteFormItem(id);
  };
  return props.current.data.drugDetails.length > 0 ? (
    <React.Fragment>
      <h2 className="text-[#e1763c]">Drugs Added</h2>
      <div className="grid grid-cols-2 gap-2">
        {props.current.data &&
          props.current.data.drugDetails.map((drug: any, index: number) => {
            return (
              <div key={index} className="border">
                <div className="flex flex-row px-4 py-3 justify-between items-center">
                  <p className="my-auto">{drug.name}</p>
                  <div className="flex justify-center items-center gap-4 text-lg">
                    <div className="hover:text-neutral-500 cursor-pointer">
                      <EditFilled
                        onClick={() => editFormData(drug.identifier !== undefined ? (drug._id === undefined ? drug.identifier : drug._id) : drug._id, drug)}
                      />
                    </div>
                    <div className="hover:text-neutral-500 cursor-pointer">
                      <DeleteFilled onClick={() => deleteFormItem(drug.identifier != undefined ? drug.identifier : drug._id)} />
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
  const formState = useSelector((state: RootState) => state.form1page3d);
  let newFormState = { ...formState };

  if (formState.startDate) {
    // @ts-ignore
    const startDate = moment(new Date(formState.startDate));
    // @ts-ignore
    newFormState.startDate = startDate;
  } else {
    delete newFormState.startDate;
  }
  if (formState.stopDate) {
    // @ts-ignore
    const startDate = moment(new Date(formState.stopDate));
    // @ts-ignore
    newFormState.stopDate = startDate;
  } else {
    delete newFormState.stopDate;
  }
  // change the redux value whenever there is a change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(newFormState);
  }, [form, newFormState]);
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  const [otherRouteInputVisibility, setOtherRouteInputVisibility] = useState<boolean>(false);
  const [otherFreqInputVisibility, setOtherFreqInputVisibility] = useState<boolean>(false);
  useEffect(() => {
    if (newFormState.routeUsed === "other") {
      setOtherRouteInputVisibility(true);
    } else {
      setOtherRouteInputVisibility(false);
    }

    if (newFormState.frequency === "other") {
      setOtherFreqInputVisibility(true);
    } else {
      setOtherFreqInputVisibility(false);
    }
  }, [formState.routeUsed, formState.frequency])


  // check other input
  const checkOthers = (e: any, label: string) => {
    const input = e;
    if (input.toLowerCase() === "other") {
      if (label === "route") {
        setOtherRouteInputVisibility(true);
      } else if (label === "frequency") {
        setOtherFreqInputVisibility(true);
      }
    } else {
      if (label === "route") {
        setOtherRouteInputVisibility(false);
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
      name="Form1Page3d"
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
        <div className="flex gap-3">
          <Form.Item className="w-full" label="Route used" name="routeUsed">
            <Select allowClear={true} options={routeUsedOptions} onChange={(e: any) => checkOthers(e, "route")} />
          </Form.Item>
          <Form.Item hidden={!otherRouteInputVisibility} rules={[
            {
              required: otherRouteInputVisibility,
              message: "Entering non-listed route is mandatory",
            },
          ]} name="otherRouteUsed" label="Other route" className="w-full">
            <Input disabled={!otherRouteInputVisibility} />
          </Form.Item>
        </div>
      </div>
      <div className="flex gap-3">
        <Form.Item
          className="mt-4 w-full"
          label="Frequency (OD, BD)"
          name="frequency"
        >
          <Select allowClear={true} options={frequencyOptions} onChange={(e: any) => checkOthers(e, "frequency")} />
        </Form.Item>
        <Form.Item
          name="otherFrequency"
          hidden={!otherFreqInputVisibility}
          label="Other frequency"
          className="w-full"
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
      <div className="grid grid-cols-2 gap-5 pt-4">
        <Form.Item
          className="col-span-1"
          label="Date started"
          name="startDate"
          rules={[{ required: true, message: "Start date is mandatory" }]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
        <Form.Item
          className="col-span-1"
          label="Date stopped"
          name="stopDate"
          rules={[
            ({ getFieldValue }) => ({
              validator(_, value) {
                const stopDate: any = value;
                const startDate: any = getFieldValue("startDate");
                if (stopDate < startDate) {
                  return Promise.reject(new Error("Stop date cannot be before start date"));
                } else {
                  return Promise.resolve();
                }
              },
            }),
          ]}
        >
          <DatePicker className="w-full" />
        </Form.Item>
      </div>
      <Form.Item className="mt-4 w-full" label="Indication" name="indication">
        <Input />
      </Form.Item>
      <div className="flex flex-row-reverse w-100">
        <button className="bg-[#6C567B] text-white p-2 w-32 border hover:bg-white hover:text-[#6C567B] border-[#6C567B]">
          Add
        </button>
      </div>
    </Form>
  );
};
