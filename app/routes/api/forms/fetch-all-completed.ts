import { LoaderFunction, redirect, Session, json } from "remix" 
import authenticator from "~/server/authentication/auth.server";
import { commitSession, getSession } from '~/server/authentication/session.server';
import { getCompletedForms } from "~/server/services/functions/fetchAllCompleted";

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);

    // if user is logged in
    if (user) {
        const forms = await getCompletedForms();
        console.log("form data: ", forms);
        return forms;
    }
    // if user is logged out
    return redirect("/login")
}