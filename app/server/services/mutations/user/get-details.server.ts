import { json, redirect } from "remix"
import LoginModel from "~/models/login.model"

const getUserDetails = async (user: string) => {
    try {
        const userDetails = await LoginModel.findOne({ email: user })
        return json({ firstName: userDetails?.firstName, lastName: userDetails?.lastName })
    } catch (err) {
        return redirect("/login")
    }
}


export { getUserDetails }