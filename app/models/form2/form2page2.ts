import { prop } from "@typegoose/typegoose";

const options = ["manufacturer", "importer", "distributor", "patients", "healthcareProfessionals", "other"];
const options2 = ["Yes", "No", "Don't Know"];

export default class Form2Page2 {
    @prop({ type: Boolean, required: true })
    public isComplete!: Boolean;

    @prop({ type: String, enum: options })
    public typeOfReporter?: String;

    @prop({ type: String })
    public other?: String;

    @prop({ type: String, enum: options2 })
    public hasTheReporterInformedTheIncidentToTheManufacturer?: String;

    @prop({ type: String, enum: options2 })
    public isTheReporterAlsoSubmittingTheReportOnBehalfOfTheManufacturer: String;

    @prop({ type: String })
    public name?: string;

    @prop({ type: Number })
    public phoneNumber?: Number;

    @prop({ type: String })
    public emailId?: string;

    @prop({ type: String })
    public address?: string;

    @prop({ type: Date })
    public dateOfReport?: Date;
}