// Import Form Layout
import FormLayout from "~/layouts/forms/medical-device-reporting";
import { Link, LoaderFunction, useSearchParams, redirect } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { useEffect, useState } from "react";
import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request);
  // @ts-ignore
  if (user.currentFormOne === null || user.currentFormOne === undefined) {
    return redirect("/");
  }
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function SubmitPage() {
  const [searchParams] = useSearchParams();
  const formType = searchParams.getAll("type");
  const [completedFormsStatus, setCompletedFormsStatus] = useState<any>({
    Form1Page1: false,
    Form1Page2: false,
    form1page3a: false,
    form1page3b2: false,
    form1page3b3: false,
    form1page3d: false,
    form1page3e: false,
    Form1Page4: false,
  });
  const [completedForms, setCompletedForms] = useState<boolean>(false);
  useEffect(() => {
    const url =
      formType[0] === "adr-reporting"
        ? "/api/forms/form1/submit"
        : "/api/forms/form2/submit";
    fetch(url).then(async (res) => {
      const data = await res.json();
      setCompletedForms(Object.values(data).every((item) => item === true));
      setCompletedFormsStatus(data);
    });
  }, [setCompletedFormsStatus]);
  return (
    <FormLayout>
      <div className="border-2 p-5">
        <h1 className="text-2xl dark:text-gray-300">Submit the form</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          You are submitting the form of type{" "}
          <span className="font-bold">{formType[0]}</span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-bold">
          Form status:{" "}
          <span>
            {completedForms ? (
              <span className="text-green-600">Complete</span>
            ) : (
              <span className="text-red-600">Incomplete</span>
            )}
          </span>
        </p>
        {formType[0] === "adr-reporting" ? (
          <TableForForm1 completedFormsStatus={completedFormsStatus} />
        ) : null}
        <div className="flex">
          {completedForms && (
            <button
              className="px-5 py-2 bg-green-600 mr-10 font-bold"
              onClick={() => {
                const confirmation = window.confirm(
                  "Are you sure you want to submit the form?"
                );
                if (confirmation) {
                  fetch("/api/forms/form1/submit", {
                    method: "post",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }).then(() => {
                    window.location.href = "/";
                  });
                }
              }}
            >
              Submit
            </button>
          )}
          <Link to="/">
            <button className="px-5 py-2 bg-[#6C567B] text-white">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </FormLayout>
  );
}

const TableForForm1 = (props: any) => {
  return (
    <table className="w-1/2 border p-4 mb-10">
      <thead>
        <tr>
          <th className="text-left px-4 py-2">Form</th>
          <th className="text-center px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/1">
              <a>Patient Information</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.Form1Page1 ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/2">
              <a>Suspected Adverse Reaction</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.Form1Page2 ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/3">
              <a>Medication</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.form1page3a ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/3/b/2">
              <a>WHO Probability Scale</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.form1page3b2 ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/3/b/3">
              <a>Hartwig Severity Scale</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.form1page3b3 ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/3/d">
              <a>Concomitant medical product</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.form1page3d ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/3/e">
              <a>AMC/NCC Section</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.form1page3e ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
        <tr>
          <td className="border text-left px-4 py-2">
            <Link to="/adr-reporting/4">
              <a>Reporter Details</a>
            </Link>
          </td>
          <td className="border text-center px-4 py-2">
            {props.completedFormsStatus.Form1Page4 ? (
              <i className="text-green-600">
                <CheckCircleFilled />
              </i>
            ) : (
              <i className="text-red-600">
                <CloseCircleFilled />
              </i>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
