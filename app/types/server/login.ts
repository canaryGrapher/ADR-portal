type AddUserProps = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

type CredentialsProps = {
    email: string;
    password: string;
}

export type { AddUserProps, CredentialsProps }