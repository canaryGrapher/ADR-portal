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

        // formId -> 1 corresponds to form 1: ADR reporting
        if (formId === "1") {
            const formID = await intiateForm1(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormOne: formID }
                }
            }
            return redirect("/adr-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
        }

        // Else case: formId -> 2 corresponds to form 2: Medical device reporting
        else {
            const formID = await intiateForm2(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormTwo: formID }
                }
            }
            return redirect("/medical-device-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
        }
    }
    // if user is logged out
    return redirect("/login")
}