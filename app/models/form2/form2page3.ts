import { prop } from "@typegoose/typegoose";

const DeviceOptions = ["Therapeutic", "Diagnostic", "Both"]
const Implantability = ["Implantable", "Non Implantable"]
const Reusability = ["Single Use Device", "Reusable Device", "Reuse of manufactured marked single use"]
const InVitroDiagnostic = ["Therapeutic", "Diagnostic", "Both"]
const EquipmentUsageTypes = ["Therapeutic", "Diagnostic", "Both"]
const InvasibilityTypes = ["Invasive", "Non-Invasive"]


export default class Form2Page3 {
    @prop({ type: String, enum: DeviceOptions })
    typeOfDevice?: String;

    @prop({ type: String, enum: Implantability })
    implantability?: String;

    @prop({ type: String, enum: Reusability })
    reuseability?: String;

    @prop({ type: Boolean })
    public personalUse?: Boolean;

    @prop({ type: String, enum: InVitroDiagnostic })
    public inVitroDiagnostic?: String[];

    @prop({ type: String, enum: EquipmentUsageTypes })
    public equipmentUsage?: String[];

    @prop({ type: String, enum: InvasibilityTypes })
    public invasibility?: String[];

    @prop({ type: Boolean })
    imaging?: Boolean;

    @prop({ type: Boolean })
    others?: Boolean;

    @prop({ type: String })
    reportersComments?: String;
}