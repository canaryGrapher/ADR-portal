import { Link } from "remix";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="rounded-lg w-3/4 min-h-3/4 mx-auto p-10 text-left">
        <h2 className="text-gray-500 text-2xl">Select a form to fill</h2>

        <div className="grid grid-cols-2 grid-rows-1 gap-5">
          <CardSelect
            route="adr-reporting/1"
            image="1"
            name="ADR Reporting Form"
          />
          <CardSelect
            route="medical-device-reporting/1"
            image="2"
            name="Medical Device ADR Reporting Form"
          />
        </div>
      </div>
    </div>
  );
}

const CardSelect = (props: { name: string; route: string; image?: string }) => (
  <Link to={props.route} className="">
    <div className="border-2 rounded-lg border-gray-400 p-3 h-full hover:scale-105 duration-75">
      <div className="w-full h-full flex flex-col justify-start">
        <img
          alt="Placeholder image"
          src="https://via.placeholder.com/150"
          className="h-3/4 w-full"
        />
        <p className="font-medium text-xl text-black pt-5 text-center">
          {props.name}
        </p>
      </div>
    </div>
  </Link>
);
