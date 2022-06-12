import { LoaderFunction, redirect } from "remix";
import { addUser } from "~/server/services/mutations/user/user.server";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    console.log("Here is the user details: ", user);
    if (user) {
        console.log("Here is the user details of the user: ", user);
        // @ts-ignore
        return addUser(user.email);
    }
    else {
        return redirect("/login");
    }
}