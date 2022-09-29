import { LogoutOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useFetcher } from "remix";

export default function Navbar(props: { location: any }) {
  const fetcher = useFetcher();
  const [path, setPath] = useState<string>();
  const [FormID, setFormID] = useState<string>();

  const discardForm = () => {
    const confirmation = window.confirm(
      "Are you sure you want to discard this form?\nYou will lose all your changes. This is action is not reversible."
    );
    if (confirmation) {
      const formName = path === "adr-reporting" ? "form-1" : "form-2";
      fetch(`/api/forms/deleteForm?formType=${formName}`).then((res) => {
        if (res.status === 200) {
          window.location.replace("/");
        } else {
          alert("Something went wrong. Please try again.");
        }
      });
    }
  };

  const logoutUser = async () => {
    const res = await fetch('api/user/logout-user');
    if(res.status === 200) {
      window.location.replace("/");
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  useEffect(() => {
    console.log(props.location)
    fetcher.load("/api/user/fetch-details");
    const currentPath = window.location.pathname;

    if (currentPath.includes("/adr-reporting")) {
      setPath(currentPath.split("/")[1]);
      fetch("/api/user/current-forms?formIdentifier=adr-reporting").then(
        (res) => {
          res.json().then((data) => {
            setFormID(data);
          });
        }
      );
    } else if (currentPath.includes("/medical-device-reporting")) {
      setPath(currentPath.split("/")[1]);
      fetch(
        "/api/user/current-forms?formIdentifier=medical-device-reporting"
      ).then((res) => {
        res.json().then((data) => {
          setFormID(data);
        });
      });
    } else {
      setPath("");
    }    
  }, [props?.location.pathname]);

  return (
    <div className="h-14 p-1 shadow-xl font-medium flex flex-row justify-between">
      <div className="flex flex-row">
        <img src="/KMCLogo.png" className="p-1" />
        {path != "" && (path != undefined && path?.split("/")?.length >= 1) ? (
          <>
            <Link to="/" className="text-md my-auto ml-5">
              <button className="text-white font-bold py-1 px-5 bg-[#6c567b] h-8 my-auto">
                Home
              </button>
            </Link>
            <div className="text-md my-auto ml-5 mr-2">
              <button
                className="text-white font-bold py-1 px-5 bg-[#E8590C] h-8 my-auto"
                onClick={() => discardForm()}
              >
                Abandon form
              </button>
            </div>
            <p className="my-auto ml-2 border-2 border-gray-500 py-1 px-5">
              FormID: <span className="text-gray-300">{FormID}</span>
            </p>
          </>
        ) : null}
      </div>
      <div className="flex flex-row mr-5">
        <p className="text-white my-auto font-medium">
          {fetcher.data
            ? fetcher.data.firstName + " " + fetcher.data.lastName + " "
            : null}
        </p>
        {/* <div className="h-8 w-8 rounded-full bg-gray-700 my-auto ml-2"></div> */}
        {fetcher.data ? <Tooltip placement="bottom" title="Logout">
          <div className="h-8 w-8 rounded-full text-center bg-gray-900 my-auto ml-2 cursor-pointer hover:scale-105" onClick={logoutUser}>
            <LogoutOutlined />
          </div>
        </Tooltip> : null}
      </div>
    </div>
  );
}
