import { LoaderFunction, redirect } from "remix";
import { createNewUser } from "~/server/services/mutations/user/create-user.server";

export let loader: LoaderFunction = async ({ request }) => {
    // @ts-ignore
    const data = await createNewUser({ firstName: "John", lastName: "Doe", email: "test@email.com", password: "test" });
    return data
}
