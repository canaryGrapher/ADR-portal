import { useState, useEffect } from "react";
import { LoaderFunction, useFetcher } from "remix";
import authenticator from "~/server/authentication/auth.server";
import { ConvertMongoDBObjectToDate } from "~/utils/functions/ConvertMongoDBObjectToDate";
import CardSelect from "~/components/home/CardSelect";
import CompletedForm from "~/components/home/CompletedForm";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Home() {
  const [form1data, setForm1Data] = useState<any>();
  const [form2data, setForm2Data] = useState<any>();

  const fetcher = useFetcher();
  const allFormsDataFetcher = useFetcher();
  const goToForm = (identifier: string) => {
    fetcher.load(`/api/forms/form-router?formName=${identifier}`);
  };

  const getCompletedFormData = (identifier: number) => {
    return fetch(
      `/api/forms/fetch-completed-forms?formName=${identifier}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    const fetchData = async () => {
      setForm1Data(await getCompletedFormData(1));
      setForm2Data(await getCompletedFormData(2));
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col pb-10">
      <div className="rounded-lg w-3/4 min-h-3/4 mx-auto p-10 text-left">
        <h2 className="text-white text-2xl font-medium">
          Select a form to fill:
        </h2>
        <div className="grid grid-cols-2 gap-5">
          <CardSelect
            name={"ADR Reporting Form"}
            goToForm={() => goToForm("new-1")}
          />
          <CardSelect
            name={"Medical Device Reporting Form"}
            goToForm={() => goToForm("new-2")}
          />
        </div>
        {/* Showing all completed forms */}
        <p className="text-xl text-center mt-10 font-bold px-10 underline">
          Completed forms
        </p>
        <div className="grid grid-cols-2 mt-2">
          <div className="border-r-2">
            <p className="text-center text-lg font-bold px-10">
              ADR Reporting Form
            </p>
            {form1data && form1data.length > 0 ? (
              form1data.map((data: any, index: number) => (
                <CompletedForm
                  key={index}
                  ID={data._id}
                  name={ConvertMongoDBObjectToDate(data._id)}
                  goToForm={() => goToForm(data._id)}
                />
              ))
            ) : (
              <div className="w-full py-5">
                <p className="text-center border-2 border-white py-10 mx-10">
                  No ADR reporting forms completed yet
                </p>
              </div>
            )}
          </div>
          <div className="border-l-2">
            <p className="text-center text-lg font-bold px-10">
              Medical Device Reporting Form
            </p>
            {form2data && form2data.length > 0 ? (
              form2data.map((data: any, index: number) => (
                <CompletedForm
                  key={index}
                  ID={data._id}
                  name={ConvertMongoDBObjectToDate(data._id)}
                  goToForm={() => goToForm(data._id)}
                />
              ))
            ) : (
              <div className="w-full py-5">
                <p className="text-center border-2 border-white py-10 mx-10">
                  No Medical device reporting forms completed yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
