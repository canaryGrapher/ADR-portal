import { ActionFunction, LoaderFunction, json } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { addToForm, getForm } from "~/server/services/mutations/form1/page3/page3b/page3b5.server";

export const action: ActionFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    const formData = await request.json();
    // @ts-ignore
    addToForm(user.email, user.currentFormOne, formData)
        .then(() => {
            return "SUCCESS"
        })
        .catch(error => {
            console.log(error)
            return "ERROR";
        })
    return "DONE"
}


export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    // @ts-ignore
    const formData = await getForm(user.email, user.currentFormOne);
    console.log(formData)
    return json(formData, 200);
}