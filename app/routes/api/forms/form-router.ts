import { LoaderFunction, redirect, Session } from "remix"
import { intiateForm1 } from "~/server/services/mutations/form1/initiate.server"
import { intiateForm2 } from "~/server/services/mutations/form2/initiate.server"
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

        // Case I: formId -> new-1 corresponds to a new form 1: ADR reporting
        if (formId === "new-1") {
            const ObjectId = await intiateForm1(user.email)
            console.log("This is the formId: ", ObjectId)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormOne: ObjectId }
                }
            }
            return redirect("/adr-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
        }

        // Case II: formId -> new-2 corresponds to a new form 2: Medical device reporting
        else if (formId === "new-2") {
            const ObjectId = await intiateForm2(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormTwo: ObjectId }
                }
            }
            return redirect("/medical-device-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
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