import { ActionFunction, LoaderFunction, json } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { submitAction, completedForms } from "~/server/services/mutations/form1/submit.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    // @ts-ignore
    const data = submitAction(user.email, user.currentFormOne)
    return data
}

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    // @ts-ignore
    const data = await completedForms(user.email, user.currentFormOne)
    return data
}