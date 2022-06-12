import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { sessionStorage } from "~/server/authentication/session.server";

import {
  ActionFunction,
  Form,
  json,
  LoaderFunction,
  useLoaderData,
} from "remix";
import authenticator from "~/server/authentication/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );

  const error = session.get("sessionErrorKey");
  return json<any>({ error });
};

export const action: ActionFunction = async ({ request, context }) => {
  // call my authenticator
  const resp = await authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/login",
    throwOnError: true,
    context,
  });
  console.log(resp);
  return resp;
};

export default function Login() {
  const loaderData = useLoaderData();
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <div className="shadow-xl rounded-lg w-1/2 min-h-2/4 mx-auto mb-32 p-10 text-center">
        <h1 className="text-[#6C567B] text-[35px]">ADR Portal</h1>
        <Form method="post" className="w-1/2 mx-auto">
          <div className="text-left mb-5">
            <label>Email</label>
            <Input placeholder="example@email.com" name="email" />
          </div>
          <div className="text-left mb-5">
            <Input.Password
              placeholder="YourPasswordHere"
              type="password"
              name="password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          {/* <div className="text-left mb-5 flex flex-row justify-center"> */}
          {/* <Checkbox className="font-medium">Remember me</Checkbox> */}
          {/* </div> */}
          <div className="mb-10">
            <button className="w-1/2 bg-[#6C567B] text-white rounded-lg p-2">
              Login
            </button>
          </div>
          <div>
            {loaderData?.error ? (
              <p className="text-red-600">
                ERROR: {loaderData?.error?.message}
              </p>
            ) : null}
          </div>
          <div>
            <p className="underline underline-offset-4 text-gray-500">
              Forgot password?
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
