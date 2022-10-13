import { LoaderFunction, redirect } from "remix";
import { getSession, destroySession } from "~/server/authentication/session.server";

export const loader: LoaderFunction = async ({ request }) => {
    const session = await getSession(
        request.headers.get("Cookie")
    );
    console.log("Logging out");
    return redirect("/", {
        headers: {
            "Set-Cookie": await destroySession(session),
        },
    });
};
