// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";
import { Link } from "remix";

export default function SubmitPage() {
  return (
    <FormLayout>
      <h1>Your form was submitted</h1>
      <Link to="/">
        <button>Go to home</button>
      </Link>
    </FormLayout>
  );
}
