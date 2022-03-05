import FormLayout from "~/layouts/forms";

export default function Form1() {
  return (
    <FormLayout>
      {/* Anything between the <FormLayout> tag can be changed */}
      <div className="form1_wrapper flex flex-col items-center">
        <div className="text-[35px] text-[#E8590C]">ADR Reporting Form</div>
      </div>
    </FormLayout>
  );
}
