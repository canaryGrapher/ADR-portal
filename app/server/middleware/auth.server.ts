import authenticator from "../authentication/auth.server";

const getSessionID = async (request: Request,
) => {
  let user = await authenticator.isAuthenticated(request);
  console.log("Here it is: ", user);
}

export default getSessionID;