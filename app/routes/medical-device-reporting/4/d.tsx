import { useState, useEffect } from "react";
import moment from "moment";
//importing layouts
import FormLayout from "~/layouts/forms/adr-reporting";

//importing components
import { Input, DatePicker, Radio, Form, message } from "antd";
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
import {
  setNewFormData,
  getFormData,
} from "~/states/Slices/MedicalDeviceReporting/4/d";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};
export default function Form2page4d() {
  const info = () => {
    message.success("Form successfully submitted");
  };
  const error = () => {
    message.error("Form submission failed");
  };
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form2page4d);
  // if (formState.lastCalibration) {
  //   const lastCalibration = moment(new Date(formState.lastCalibration));
  //   // @ts-ignore
  //   newFormState.lastCalibration = lastCalibration;
  // } else {
  //   newFormState.lastCalibration = null;
  // }
  useEffect(() => {
    dispatch(getFormData());
  }, []);

  useEffect(() => {
    const _DateOfInstallation = formState.data.installationDate
      ? moment(formState.data.installationDate)
      : null;
    const _DateOfExpiration = formState.data.expirationDate
      ? moment(formState.data.expirationDate)
      : null;
    const _DateOfLastExpiration = formState.data.lastExpirationDate
      ? moment(formState.data.lastExpirationDate)
      : null;
    const _DateOfLastCalibration = formState.data.lastCalibration
      ? moment(formState.data.lastCalibration)
      : null;

    let newFormState = {
      ...formState.data,
      installationDate: _DateOfInstallation,
      expirationDate: _DateOfExpiration,
      lastExpirationDate: _DateOfLastExpiration,
      lastCalibration: _DateOfLastCalibration,
    };
    if (!newFormState.installationDate) {
      // @ts-ignore
      delete newFormState.installationDate;
    }
    if (!newFormState.expirationDate) {
      // @ts-ignore
      delete newFormState.expirationDate;
    }
    if (!newFormState.lastExpirationDate) {
      // @ts-ignore
      delete newFormState.lastExpirationDate;
    }
    if (!newFormState.lastCalibration) {
      // @ts-ignore
      delete newFormState.lastCalibration;
    }
    form.setFieldsValue(newFormState);
  }, [formState.status]);
  // change redux value whenever there is change in the form
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

  const [form] = Form.useForm();
  // update the initial state for editing a drug

  const changeFormData = (value: any, fieldName: any) => {
    if (fieldName === "availabilityOfDeviceForEvaluation" && value === "No") {
      dispatch(
        setNewFormData({ fieldName: "whatIsTheStatusOfTheDevice", value: null })
      );
    }
    if (
      fieldName === "isTheDeviceNotified_regulatedInIndia" &&
      (value === "Yes" || value === "Don't know")
    ) {
      dispatch(
        setNewFormData({
          fieldName: "regulator_regulatoryStatusInCountryOfOrigin",
          value: null,
        })
      );
    }
    if (
      fieldName ===
        "isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual" &&
      value === "Yes"
    ) {
      dispatch(
        setNewFormData({
          fieldName: "specifyUsage",
          value: null,
        })
      );
    }
    dispatch(setNewFormData({ fieldName, value }));
  };

  return (
    <FormLayout>
      <Form
        form={form}
        name="Form2page4d"
        onFinish={(values) => {
          fetch("/api/forms/form2/page4/d", {
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
        onValuesChange={(values) => {
          changeFormData(
            values[Object.keys(values)[0]],
            Object.keys(values)[0]
          );
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
              name="isTheDeviceNotified_regulatedInIndia"
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
              label="Regulator / Regulatory status in country of origin"
              name="regulator_regulatoryStatusInCountryOfOrigin"
              className="w-full"
            >
              <Input.TextArea
                rows={3}
                placeholder=""
                disabled={
                  formState.data.isTheDeviceNotified_regulatedInIndia ===
                    "Yes" ||
                  !formState.data.isTheDeviceNotified_regulatedInIndia ||
                  formState.data.isTheDeviceNotified_regulatedInIndia ===
                    "Don't know"
                }
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
              name="accessories_associatedDevices"
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
                disabled={
                  formState.data.availabilityOfDeviceForEvaluation === "No" ||
                  !formState.data.availabilityOfDeviceForEvaluation
                }
              />
            </Form.Item>
            <Form.Item
              label="Is the usage of device as per manufacturer’s claims/instructions for use/user manual"
              name="isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual"
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
                disabled={
                  usagePerManufacturer === "Yes" ||
                  !formState.data
                    .isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual
                }
              />
            </Form.Item>
          </div>
        </div>
        <NavigationPanel currentRoute="4d" />
      </Form>
    </FormLayout>
  );
}
