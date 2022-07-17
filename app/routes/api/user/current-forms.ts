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
        const formIdentifier = url.searchParams.get("formIdentifier")
        if (formIdentifier === 'adr-reporting') {
            return session.data.sessionKey.currentFormOne
        } else if (formIdentifier === 'medical-device-reporting') {
            return session.data.sessionKey.currentFormTwo
        } else {
            return null
        }

    } else {
        return redirect("/login")
    }
} 