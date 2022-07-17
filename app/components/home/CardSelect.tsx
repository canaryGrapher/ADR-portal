const CardSelect = (props: { name: string; goToForm: () => void }) => {
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
            <p className="font-bold text-xl text-black dark:text-white pt-5 text-left">
              {props.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="text-white font-bold py-1 px-5 rounded-md bg-[#6c567b] h-8 my-auto"
            onClick={props.goToForm}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSelect;
