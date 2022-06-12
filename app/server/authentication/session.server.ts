import { createCookieSessionStorage } from "@remix-run/node";

const cookieSecret = process.env.COOKIE_SECRET || "some_fallback_secret";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session', // use any name you want here
        sameSite: 'lax', // this helps with CSRF
        // @Prod: enable these settings in production
        // expires: new Date(Date.now() + 60_000),
        // maxAge: 60,
        path: '/', // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secrets: [cookieSecret], // replace this with an actual secret
        // @Prod: enable these settings in production
        secure: process.env.NODE_ENV === 'production', // enable this in prod only
    },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;

// define the user model
export type User = {
    email: String;
    currentFormOne?: String;
    currentFormTwo?: String;
    token: string;
};