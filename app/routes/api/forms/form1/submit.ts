import { ActionFunction, LoaderFunction, redirect, Session } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { submitAction, completedForms } from "~/server/services/mutations/form1/submit.server";
import { commitSession, getSession } from '~/server/authentication/session.server';

export const action: ActionFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    const session: Session = await getSession(
        request.headers.get('Cookie')
    );
    // @ts-ignore
    const data = await submitAction(user.email, user.currentFormOne)
    console.log("Form 1 submitted successfully: ", data)
    const newSession = {
        ...session, data: {
            ...session.data, sessionKey: { ...session.data.sessionKey, currentFormOne: null }
        }
    }
    throw redirect("/", {
        status: 302,
        headers: {
            "Set-Cookie": await commitSession(newSession),
        },
    });

}

export const loader: LoaderFunction = async ({ request }) => {
    const user = await authenticator.isAuthenticated(request);
    // @ts-ignore
    const data = await completedForms(user.email, user.currentFormOne)
    return data
}