import { LoaderFunction, redirect } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { getUserDetails } from "~/server/services/mutations/user/get-details.server";

export let loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    if (user) {
        // @ts-ignore
        return getUserDetails(user.email);
    }
    else {
        return redirect("/login");
    }
}