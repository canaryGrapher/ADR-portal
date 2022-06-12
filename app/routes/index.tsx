import { LoaderFunction, useFetcher, useLoaderData, Link } from "remix";
import authenticator from "~/server/authentication/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
};

export default function Home() {
  const fetcher = useFetcher();
  const goToForm = async (name: number) => {
    fetcher.load(`/api/forms/form-router?formName=${name}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="rounded-lg w-3/4 min-h-3/4 mx-auto p-10 text-left">
        <h2 className="text-gray-500 text-2xl">Select a form to fill:</h2>
        <div className="grid grid-cols-1 gap-5">
          <CardSelect image="1" name={1} goToForm={goToForm} />
          <CardSelect image="2" name={2} goToForm={goToForm} />
        </div>
      </div>
    </div>
  );
}

const CardSelect = (props: {
  name: number;
  image: string;
  goToForm: (location: number) => void;
}) => {
  return (
    <div className="flex flex-row w-full select-none">
      <div className="border-2 rounded-lg border-gray-400 p-3 w-full hover:scale-105 duration-75 flex flex-between">
        <div className="w-full h-full flex flex-row justify-start">
          <img
            alt="Placeholder image"
            src="https://via.placeholder.com/150"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex flex-col justify-center ml-10">
            <p className="font-bold text-xl text-black dark:text-white pt-5 text-center">
              {props.name === 1
                ? "ADR Reporting Form"
                : "Medical Device Reporting Form"}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="text-white font-bold py-1 px-5 rounded-md bg-[#6c567b] h-8 my-auto"
            onClick={() => props.goToForm(props.name)}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};
