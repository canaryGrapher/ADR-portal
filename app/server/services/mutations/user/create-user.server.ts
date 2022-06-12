import { json, redirect } from "remix"
import LoginModel from "~/models/login.model"

interface UserDetails {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

const createNewUser = async (details: UserDetails) => {
    const user = new LoginModel(details)
    await user.save()
    return redirect("/login")
}

export { createNewUser }