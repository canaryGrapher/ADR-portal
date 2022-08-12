import { Link } from "remix";

const CompletedForm = (props: {
  name: string;
  ID: string;
}) => {
  return (
    <div className="flex flex-row w-full select-none px-10 mb-5">
      <div className="border-2 rounded-lg border-gray-400 p-3 w-full flex flex-between">
        <div className="w-full h-full flex flex-row justify-start items-center">
          <img
            alt="Placeholder image"
            src="https://via.placeholder.com/150"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex flex-col justify-center ml-10">
            <p className="my-0">Started</p>
            <p className="my-0 font-medium text-lg text-black dark:text-white text-left">
              {props.name}
            </p>
            <p className="text-xs">Form ID: {props.ID}</p>
          </div>
          <Link to={`/pdf/${props.ID}`}>Click</Link>
        </div>
      </div>
    </div>
  );
};

export default CompletedForm;
