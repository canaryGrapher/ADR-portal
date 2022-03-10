const NavigationPanel = () => {
  return (
    <div className="py-10 w-full flex flex-row justify-end">
      <div className="grid grid-cols-2 gap-5">
        <button className="bg-white text-[#E8590C] hover:shadow-xl p-2 w-32 border border-[#E8590C]">
          Previous
        </button>
        <button className="bg-[#E8590C] text-white hover:shadow-xl p-2 w-32">
          Next
        </button>
      </div>
    </div>
  );
};

export default NavigationPanel;
