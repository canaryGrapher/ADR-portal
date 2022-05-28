import dbConnect from "./mongo.server"
import LoginModel from "~/models/login.model"

// importing types
import { AddUserProps, CredentialsProps } from "~/types/server/login"

const addUser = async (user: AddUserProps) => {
    const userModel = new LoginModel(user)
    await userModel.save()
}

const fetchUser = async (credentials: CredentialsProps) => {
    const user = await LoginModel.findOne({ email: credentials.email })
    console.log(user)
    return user
}

export { addUser, fetchUser }