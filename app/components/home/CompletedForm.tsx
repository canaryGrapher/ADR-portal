import { FilePdfOutlined } from "@ant-design/icons";
import { Link } from "remix";

const CompletedForm = (props: {
  name: string;
  ID: string;
  isAdmin: boolean;
}) => {
  return (
    <div className="flex flex-row select-none px-10 mb-5">
      <div className="border-2 rounded-lg border-gray-400 p-3 w-full flex flex-between">
        <div className="w-full h-full flex flex-row justify-start items-center">
          <img
            alt="Placeholder image"
            src="https://via.placeholder.com/150"
            className="h-24 w-24 rounded-full"
          />
          <div className="flex flex-col justify-center ml-10">
            <p className="my-0 text-green-300">Completed</p>
            <p className="my-0 font-medium text-lg text-black dark:text-white text-left">
              {props.name}
            </p>
            <p className="text-xs">Form ID: {props.ID}</p>
            {props?.isAdmin &&
              <Link to={`/pdf/${props.ID}`} target="_blank">
                <div className="flex bg-[#6C567b] text-neutral-100 py-2 px-4 rounded w-fit items-center">
                  <p className="my-auto mr-2">View PDF</p>
                  <FilePdfOutlined />
                </div>
              </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedForm;
