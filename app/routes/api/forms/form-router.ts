import { LoaderFunction, redirect, json, Session } from "remix"
import { intiateForm1 } from "~/server/services/mutations/form1/initiate.server"
import { intiateForm2 } from "~/server/services/mutations/form2/initiate.server"
import authenticator from "~/server/authentication/auth.server";
import { sessionStorage, commitSession, getSession } from '~/server/authentication/session.server';

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    if (user) {
        const url = new URL(request.url)
        const session: Session = await getSession(
            request.headers.get('Cookie')
        );
        const formId = url.searchParams.get("formName")
        if (formId === "1") {
            // @ts-ignore
            const formID = await intiateForm1(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormOne: formID }
                }
            }
            // add logic to check what was the last form being filled out and then redirect to that form
            return redirect("/adr-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
        }
        else if (formId === "2") {
            // @ts-ignore
            const formID = await intiateForm2(user.email)
            const newSession = {
                ...session, data: {
                    ...session.data, sessionKey: { ...session.data.sessionKey, currentFormTwo: formID }
                }
            }
            // add logic to check what was the last form being filled out and then redirect to that form
            return redirect("/medical-device-reporting/1", { headers: { "set-cookie": await commitSession(newSession) } });
        }
        else {
            return redirect("/login")
        }
    }
    return redirect("/login")
}