import { Input, Checkbox } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

export default function Login() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <div className="shadow-xl rounded-lg w-1/2 min-h-2/4 mx-auto mb-32 p-10 text-center">
        <h1 className="text-[#6C567B] text-[35px]">ADR Portal</h1>
        <form className="w-1/2 mx-auto">
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
        </form>
      </div>
    </div>
  );
}
