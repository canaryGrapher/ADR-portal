import authenticator from "../authentication/auth.server";

const getSessionID = async (request: Request,
) => {
  return await authenticator.isAuthenticated(request);
}

export default getSessionID;