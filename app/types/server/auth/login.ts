type AddUserProps = {
    email: String;
    password: String;
    firstName: String;
    lastName: String;
    currentFormOne?: String | null;
    completedFormsOne?: [String] | [];
    currentFormTwo?: String | null;
    completedFormsTwo?: [String] | [];
}

type CredentialsProps = {
    email: String;
    password: String;
}

export type { AddUserProps, CredentialsProps }