import { LoaderFunction, redirect, Session } from "remix"
import { deleteForm1 } from "~/server/services/mutations/form1/delete.server";
import { deleteForm2 } from "~/server/services/mutations/form2/delete.server";
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
        const formType = url.searchParams.get("formType")

        // Case I: formId -> form-1 corresponds to an existing form 1: ADR reporting
        if (formType === "form-1") {
            const ObjectId = await deleteForm1(user.email, session.data.sessionKey.currentFormOne)
            console.log("This is the formId: ", ObjectId)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormOne: "" }
                }
            }
            return redirect("/", { headers: { "set-cookie": await commitSession(newSession) } });
        }

        // Case II: formId -> fors-2 corresponds to an existing form 2: Medical device reporting
        else if (formType === "form-2") {
            const ObjectId = await deleteForm2(user.email, session.data.sessionKey.currentFormTwo)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormTwo: "" }
                }
            }
            return redirect("/", { headers: { "set-cookie": await commitSession(newSession) } });
        }

        // Case III: formId -> formID corresponds to a form that is already in progress
        // To be implemented
        else {
            return redirect("/");
        }
    }
    // if user is logged out
    return redirect("/login")
}