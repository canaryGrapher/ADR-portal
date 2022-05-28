// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";
import { Link } from "remix";
import { LoaderFunction } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

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
