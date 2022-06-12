import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { sessionStorage, User } from './session.server';

import LoginModel from "~/models/login.model"

// Create an instance of the authenticator, pass a Type, User,  with what
// strategies will return and will store in the session
const authenticator = new Authenticator<User | Error | null>(sessionStorage, {
    sessionKey: "sessionKey", // keep in sync
    sessionErrorKey: "sessionErrorKey", // keep in sync
});

authenticator.use(
    new FormStrategy(async ({ form }: any) => {

        // get the data from the form...
        let email = form.get('email') as string;
        let password = form.get('password') as string;
        let user = null;

        // do some validation, errors are in the sessionErrorKey
        if (!email || email?.length === 0) throw new AuthorizationError('Bad Credentials: Email is required')
        if (typeof email !== 'string')
            throw new AuthorizationError('Bad Credentials: Email must be a string')
        if (!password || password?.length === 0) throw new AuthorizationError('Bad Credentials: Password is required')
        if (typeof password !== 'string')
            throw new AuthorizationError('Bad Credentials: Password must be a string')


        // checking if the user exists in the database
        const userDetails = await LoginModel.findOne({ email: email, password: password })
        if (userDetails) {
            user = {
                email: userDetails.email,
                currentFormOne: userDetails.currentFormOne?.toString(),
                currentFormTwo: userDetails.currentFormTwo?.toString(),
                token: `${email}-${userDetails._id}-${new Date().getTime()}`,
            };

            return await Promise.resolve({ ...user });
        }
        else {
            // if problem with user throw error AuthorizationError
            throw new AuthorizationError("Bad Credentials")
        }

    }),
);

export default authenticator