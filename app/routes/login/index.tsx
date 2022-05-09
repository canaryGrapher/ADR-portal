import { Input, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Form, ActionFunction, LoaderFunction, redirect } from "remix";
// app/routes/login.tsx
// import { authenticator } from "../../auth.server";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <div className="shadow-xl rounded-lg w-1/2 min-h-2/4 mx-auto mb-32 p-10 text-center">
        <h1 className="text-[#6C567B] text-[35px]">ADR Portal</h1>
        <Form className="w-1/2 mx-auto" method="post">
          <div className="text-left mb-5">
            <label>Email</label>
            <Input placeholder="example@email.com" />
          </div>
          <div className="text-left mb-5">
            <label>Password</label>
            <Input.Password
              placeholder="YourPasswordHere"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div className="text-left mb-5 flex flex-row justify-center">
            <Checkbox className="font-medium">Remember me</Checkbox>
          </div>
          <div className="mb-10">
            <button className="w-1/2 bg-[#6C567B] text-white rounded-lg p-2">
              Login
            </button>
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

// Second, we need to export an action function, here we will use the
// `authenticator.authenticate method`
// export let action: ActionFunction = async ({ request }) => {
// we call the method with the name of the strategy we want to use and the
// request object, optionally we pass an object with the URLs we want the user
// to be redirected to after a success or a failure
//   return await authenticator.authenticate("user-pass", request, {
//     successRedirect: "/",
//     failureRedirect: "/login",
//   });
// };

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
// export let loader: LoaderFunction = async ({ request }) => {
//   // If the user is already authenticated redirect to /dashboard directly
//   return await authenticator.isAuthenticated(request, {
//     successRedirect: "/",
//   });
// };
