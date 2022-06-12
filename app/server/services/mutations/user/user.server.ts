import { redirect } from "remix"
import LoginModel from "~/models/login.model"

// importing types
import { AddUserProps, CredentialsProps } from "~/types/server/auth/login"

const addUser = async (user: AddUserProps) => {
    try {
        const userModel = new LoginModel(user)
        await userModel.save()
        console.log("User added successfully: ", userModel)
        return redirect("/login")
    } catch (error) {
        return error
    }
}

const fetchUser = async (credentials: CredentialsProps) => {
    const user = await LoginModel.findOne({ email: credentials.email })
    console.log(user)
    return user
}

export { addUser, fetchUser }