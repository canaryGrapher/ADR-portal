import { useState,useEffect } from "react";

// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";

//importing components
import { DatePicker, Input, Radio, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";
import moment from "moment";

// importing utilities
import {
  radioOptions1,
  radioOptions2,
  radioOptions3,
  radioOptions4,
  radioOptions5,
} from "~/utils/medical-device-reporting/5";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/5";

export default function Form3page5() {
  const [isSeriousEvent, setIsSeriousEvent] = useState<boolean>();
  const [isDead, setIsDead] = useState<boolean>();
  const [isReturned, setIsReturned] = useState<boolean>();
  const changeSeriousEventState = (e: any) => {
    if (e.target.value === "Yes") {
      setIsSeriousEvent(true);
    } else {
      setIsSeriousEvent(false);
    }
  };

  const changeSeriousEventValue = (e: any) => {
    if (e.target.value === "Death") {
      setIsDead(true);
    } else {
      setIsDead(false);
    }
  };

  const changeDeviceLocation = (e: any) => {
    if (e.target.value === "Returned to the company") {
      setIsReturned(true);
    } else {
      setIsReturned(false);
    }
  };


  const [reporterType, setReporterType] = useState<string>("manufacturer");
  const changedReporterType = (e: any) => {
    setReporterType(e.target.value);
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page5);
  let newFormState = { ...formState };
  if(formState.dateOfEvent != null) {
    newFormState.dateOfEvent = moment(formState.dateOfEvent);
  } else {  
    delete newFormState.dateOfEvent;
  }
  if(formState.dateOfImplant != null) {
    newFormState.dateOfImplant = moment(formState.dateOfImplant);
  } else {  
    delete newFormState.dateOfImplant;
  }
  if(formState.dateOfReturn != null) {
    newFormState.dateOfReturn = moment(formState.dateOfReturn);
  } else {  
    delete newFormState.dateOfReturn;
  }
  if(formState.dateOfDeath != null) {
    newFormState.dateOfDeath = moment(formState.dateOfDeath);
  } else {  
    delete newFormState.dateOfDeath;
  }
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };

  const setDateNull = (e:any) => {
    if (e.target.value === "Returned to the company") {
      setIsReturned(true);
      changeDeviceLocation(e)
    } else {
      setIsReturned(false);
      changeFormData(null, "dateOfReturn");
    }
  }

  const DeathDateNull2 = (e:any) => {
    if (e.target.value === "Death") {
      setIsDead(true);
      changeSeriousEventValue(e)
    } else {
      setIsDead(false);
      changeFormData(null, "dateOfDeath");
    }
  }

  const handleNull = (e:any) => {
    if(e.target.value === "No") {
      setIsSeriousEvent(false);
      changeFormData(null, "reason")
    } else {
      setIsSeriousEvent(true);
      changeSeriousEventValue(e)
    }
  }

  const [form] = Form.useForm();
   // update the initial state for editing a drug
   useEffect(() => {
    form.setFieldsValue(newFormState)
  }, [form, newFormState])

  return (
    <FormLayout>
      <Form
        form={form}
        name="Form3page5"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }}
        layout="vertical"
      >
        <div className="shadow-xl rounded-md w-full p-10 border">
          <div className="flex flex-col pb-8">
            <div className="text-[24px] text-[#E8590C]">Event Description</div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-5">
                <Form.Item
                  label="Date of Event"
                  name="dateOfEvent"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
                <Form.Item
                  label="Date of Implant"
                  name="dateOfImplant"
                  className="w-full"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label="Location of event"
                  name="locationOfEvent"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions1}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device Operator"}
                  name="deviceOperator"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions2}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Device location"}
                  name="deviceLocation"
                  className="w-full"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions3}
                    optionType="button"
                    //onChange={(e) => {
                      //changeDeviceLocation(e);
                    //}}
                    onChange={(e) => setDateNull(e)}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item label={"Date of return"} name="dateOfReturn">
                  <DatePicker disabled={!isReturned} className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item label={"Serious event?"} name="seriousEvent">
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                    onChange={(e) => handleNull(e)}
                    /*onChange={(e) => {
                      changeSeriousEventState(e);
                    }}*/
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Reason"}
                  name="reason"
                  className="w-full"
                  required={isSeriousEvent}
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions5}
                    optionType="button"
                    disabled={!isSeriousEvent}
                    onChange={(e) => DeathDateNull2(e)}
                  />
                </Form.Item>
              </div>
              <div className="col-span-1">
                <Form.Item
                  label={"Date of death"}
                  name="dateOfDeath"
                  required={isDead}
                >
                  <DatePicker disabled={!isDead} className="w-full" />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Is device in use after the incident?"}
                  name="isDeviceInUse"
                >
                  <Radio.Group
                    size="large"
                    buttonStyle="solid"
                    options={radioOptions4}
                    optionType="button"
                  />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <Form.Item
                  label={"Detailed description of the incident"}
                  name="detailedDescription"
                >
                  <Input.TextArea rows={4} />
                </Form.Item>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events in India
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Year"} name="year" className="w-full">
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarIndia"
                      className="w-full"
                    >
                      <Input type="number" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedIndia"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Frequency"}
                      name="frequencyIndia"
                      className="w-full"
                    >
                      <Input className="w-full" />
                    </Form.Item>
                  </div>
                </div>
              </div>
              <div className="col-span-2 flex flex-col">
                <div className="text-[22px] text-[#E8590C]">
                  Frequency of occurrence of similar adverse events globally
                </div>
                <div className="grid grid-cols-4 gap-5">
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Year"} name="yearGlobal" className="w-full">
                      <DatePicker picker="year" className="w-full" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Number of similar events"}
                      name="numberOfSimilarGlobal"
                      className="w-full"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item
                      label={"Total number suplied"}
                      name="totalNumberSuppliedGlobal"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </div>
                  <div className="flex flex-col col-span-1">
                    <Form.Item label={"Frequency"} name="frequencyGlobal">
                      <Input />
                    </Form.Item>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavigationPanel currentRoute="5" />
      </Form>
    </FormLayout>
  );
}
