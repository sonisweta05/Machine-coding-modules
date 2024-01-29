const AddModal = () => {
  return (
    <div className="flex flex-col border bg-white rounded-lg w-[50vw] divide-y divide-slate-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1">
      <div className="flex gap-9 justify-between text-xl p-4">
        <h3 className="font-bold font-sans ">Add a New Note</h3>
        <button className="mr-2">x</button>
      </div>
      <form className="p-4">
        <div className="flex flex-col text-lg">
          <div className="flex flex-col">
            <label htmlFor="search">Title</label>
            <input
              name="search"
              className=" border border-gray-200"
              type="text"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label>Description</label>
            <textarea className="border border-gray-200 h-[130px]"></textarea>
          </div>
        </div>
        <button className="w-full border bg-blue-300 rounded-l font-bold text-white">
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default AddModal;
