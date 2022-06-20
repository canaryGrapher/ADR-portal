import { prop } from "@typegoose/typegoose";

const options = ["Yes", "No", "Don't Know"];
const options2 = ["A", "B", "C", "D"];
const options3 = ["Destroyed", "Still in use", "Returned to manufacturer or importer"];
const options4 = ["Yes", "No"];

export default class Form2Page1 {
    @prop({ type: Boolean, default: false })
    public isComplete?: Boolean;

    @prop({ type: String, enum: options })
    public isTheDeviceNotified_regulatedInIndia?: String;

    @prop({ type: String, enum: options2 })
    public deviceRiskClassificationAsPerIndiaMDR2017?: String;

    @prop({ type: String })
    public licenseNumber?: string;

    @prop({ type: String })
    public catalogueNumber?: String;

    @prop({ type: String })
    public modelNumber?: String;

    @prop({ type: String })
    public batchNumber?: String;

    @prop({ type: String })
    public serialNumber?: String;

    @prop({ type: String })
    public softwareNumber?: String;

    @prop({ type: String })
    public accessories_associatedDevices?: String;

    @prop({ type: String })
    public GMDNCodeGMDNTerm?: String;

    @prop({ type: Number })
    public udiNumber?: Number;

    @prop({ type: String })
    public installationDate?: String;

    @prop({ type: String })
    public expirationDate?: String;

    @prop({ type: String })
    public lastExpirationDate: String;

    @prop({ type: String })
    public lastCalibration: String;

    @prop({ type: String })
    public ageOfDeviceFromDateOfManufacturing?: Number;

    @prop({ type: String })
    public howLongWasDeviceInUse?: String;

    @prop({ type: String, enum: options4 })
    public availabilityOfDeviceForEvaluation?: String;

    @prop({ type: String, enum: options3 })
    public whatIsTheStatusOfTheDevice?: String;

    @prop({ type: String, enum: options4 })
    public isTheUsageOfDeviceAsPerManufacturersClaims_instructionsForUse_userManual?: Boolean;

    @prop({ type: String })
    public specifyUsage?: String;

    @prop({ type: String })
    public regulator_regulatoryStatusInCountryOfOrigin?: String;
}