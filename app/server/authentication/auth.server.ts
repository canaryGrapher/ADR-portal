import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from './session.server';

import LoginModel from "~/models/login.model"

/**
 * @object authenticator
 * @extends Authenticator
 * @description This class is used to authenticate users.
 */
const authenticator = new Authenticator<User>(sessionStorage, {
    sessionKey: "sessionKey", // keep in sync
    sessionErrorKey: "sessionErrorKey", // keep in sync
});

authenticator.use(
    new FormStrategy(async ({ form }: any) => {
        let email = form.get('email');
        let password = form.get('password');
        let user = null;

        // validation to check the email and password for login
        if (!email || email?.length === 0) throw new AuthorizationError('Bad Credentials: Email is required')
        if (typeof email !== 'string') throw new AuthorizationError('Bad Credentials: Email must be a string')
        if (!password || password?.length === 0) throw new AuthorizationError('Bad Credentials: Password is required')
        if (typeof password !== 'string') throw new AuthorizationError('Bad Credentials: Password must be a string')


        // checking if the user exists in the database, if not throw an error
        const userDetails = await LoginModel.findOne({ email: email, password: password })
        if (userDetails) {
            user = {
                email: userDetails.email,
                type: userDetails.type,
                currentFormOne: userDetails.currentFormOne?.toString(),
                currentFormTwo: userDetails.currentFormTwo?.toString(),
                token: `${email}-${userDetails._id}-${new Date().getTime()}`,
            };

            return await Promise.resolve({ ...user });
        }
        else {
            // if problem with user throw error AuthorizationError
            throw new AuthorizationError("Username or password is incorrect");
        }
    }),
);

export default authenticator