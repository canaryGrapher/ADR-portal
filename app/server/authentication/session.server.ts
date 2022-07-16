import { createCookieSessionStorage } from "@remix-run/node";

const cookieSecret = process.env.COOKIE_SECRET || "some_fallback_secret";

/**
 * @Object sessionStorage
 * @description This object is used to store the session.
 */
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: '_session',
        sameSite: 'lax',
        path: '/', // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secrets: [cookieSecret],
        // @Prod: enable these settings in production
        // expires: new Date(Date.now() + 60_000),
        // maxAge: 60,
        secure: process.env.NODE_ENV === 'production', // enable this in prod only
    },
});


export let { getSession, commitSession, destroySession } = sessionStorage;

// User model
export type User = {
    email: string;
    type: string;
    currentFormOne?: string;
    currentFormTwo?: string;
    token: string;
};