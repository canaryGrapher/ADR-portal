import { useState, useEffect } from "react";

//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Radio, Form } from "antd";
import NavigationPanel from "~/components/forms/NavigationPanel";

// importing utilities
import {
  radioOptions1,
  radioOptions2,
  radioOptions3,
  radioOptions4,
} from "~/utils/medical-device-reporting/4";

// importing reduc reducers
import { RootState } from "~/states/store";
import { useSelector, useDispatch } from "react-redux";
import { setNewFormData } from "~/states/Slices/MedicalDeviceReporting/4/d";


export default function Form3page4d() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form3page4d);
  let newFormState = { ...formState };
  // change redux value whenever there is change in the form
  const changeFormData = (value: any, fieldName: any) => {
    dispatch(setNewFormData({ fieldName, value }));
  };
  const [regulatedInIndia, setRegulatedInIndia] = useState<string>("");
  const [availabilityValue, setAvailabilityValue] = useState<string>("");
  const [usagePerManufacturer, setUsagePerManufacturer] = useState<string>("");

  const changeStateOfRadio = (radioIdentifier: string, radioValue: any) => {
    if (radioIdentifier === "1") {
      setRegulatedInIndia(radioValue.target.value);
    }
    if (radioIdentifier === "2") {
      setAvailabilityValue(radioValue.target.value);
    }
    if (radioIdentifier === "3") {
      setUsagePerManufacturer(radioValue.target.value);
    }
  };

  const handleNull = (e:any) => {
    if(e.target.value === "No") {
      setAvailabilityValue("No")
      changeFormData(null, "whatIsTheStatusOfTheDevice")
    } else {
      changeStateOfRadio("2", e)
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
        name="Form3page4d"
        initialValues={newFormState}
        onFinish={(value) => console.log(value)}
        onValuesChange={(values) => {
          changeFormData(values[Object.keys(values)[0]], Object.keys(values)[0])
        }}
        layout="vertical"
      >
        <div className="w-full rounded-md border p-10 shadow-xl">
          <div className="text-3xl">
            <h2 className="text-[#E8590C]">Further Information</h2>
          </div>
          <div className="w-full">
            <Form.Item
              label="Is the device notified/regulated in India?"
              name="isTheDeviceNotified/regulatedInIndia"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions1}
                optionType="button"
                value={regulatedInIndia}
                onChange={(e) => changeStateOfRadio("1", e)}
              />
            </Form.Item>
            <Form.Item
              label="Device Risk Classification as per India MDR 2017"
              name="deviceRiskClassificationAsPerIndiaMDR2017"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions2}
                optionType="button"
              />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="License Number"
                name="licenseNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Catalogue Number"
                name="catalogueNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Model Number"
                name="modelNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Batch Number"
                name="batchNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Serial Number"
                name="serialNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Software Number"
                name="softwareNumber"
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Accessories/Associated Devices"
              name="accessories/associatedDevices"
              className="w-full"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="GMDN Code &amp; GMDN Term"
              name="GMDNCodeGMDNTerm"
              className="w-full"
            >
              <Input />
            </Form.Item>
            <Form.Item label="UDI Number" name="udiNumber" className="w-full">
              <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Installation Date"
                name="installationDate"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                label="Expiration Date"
                name="expirationDate"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Last Preventive Date"
                name="lastExpirationDate"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                label="Last Calibration"
                name="lastCalibration"
                className="w-full"
              >
                <DatePicker className="w-full" />
              </Form.Item>
            </div>
            <div className="grid grid-cols-2 gap-5 pt-4">
              <Form.Item
                label="Age of device from date of manufacturing"
                name="ageOfDeviceFromDateOfManufacturing"
                className="w-full"
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="How long was device in use"
                name="howLongWasDeviceInUse"
                className="w-full"
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Availability of device for evaluation"
              name="availabilityOfDeviceForEvaluation"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions3}
                optionType="button"
                value={availabilityValue}
                // onChange={(e) => changeStateOfRadio("2", e)}
                onChange={(e) => handleNull(e)}
              />
            </Form.Item>
            <Form.Item
              label="What is the status of the device?"
              name="whatIsTheStatusOfTheDevice"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions4}
                optionType="button"
                disabled={availabilityValue === "No"}
              />
            </Form.Item>
            <Form.Item
              label="Is the usage of device as per manufacturer’s claims/instructions for use/user manual"
              name="isTheUsageOfDeviceAsPerManufacturersClaims/instructionsForUse/userManual"
              className="w-full"
            >
              <Radio.Group
                size="large"
                buttonStyle="solid"
                options={radioOptions3}
                optionType="button"
                value={usagePerManufacturer}
                onChange={(e) => changeStateOfRadio("3", e)}
              />
            </Form.Item>
            <Form.Item
              label="Specify usage"
              name="specifyUsage"
              className="w-full"
            >
              <Input.TextArea
                rows={3}
                placeholder=""
                disabled={usagePerManufacturer === "No"}
              />
            </Form.Item>
            <Form.Item
              label="Regulator / Regulatory status in country of origin"
              name="regulator/regulatoryStatusInCountryOfOrigin"
              className="w-full"
            >
              <Input.TextArea
                rows={3}
                placeholder=""
                disabled={regulatedInIndia === "Yes"}
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="4d" />
      </Form>
    </FormLayout>
  );
}
