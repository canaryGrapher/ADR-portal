import { LoaderFunction, redirect, Session, json } from "remix"
import { getCompletedForm1, getCompletedForm2 } from '~/server/services/functions/fetchCompletedForms.server'
import authenticator from "~/server/authentication/auth.server";
import { commitSession, getSession } from '~/server/authentication/session.server';

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);

    // if user is logged in
    if (user) {
        const url = new URL(request.url)
        const session: Session = await getSession(
            request.headers.get('Cookie')
        );
        const formId = url.searchParams.get("formName")

        // formId -> 1 corresponds to form 1: ADR reporting
        if (formId === "1") {
            const formID = await getCompletedForm1(user.email)
            console.log(formID)
            return formID;
        }

        // Else case: formId -> 2 corresponds to form 2: Medical device reporting
        else {
            const formID = await getCompletedForm2(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormTwo: formID }
                }
            }
            return formID
        }
    }
    // if user is logged out
    return redirect("/login")
}