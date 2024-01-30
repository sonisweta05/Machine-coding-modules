import { ChangeEvent, useState } from "react";
import { INotes } from "./types/model";

type props = {
  onAddNotes: ({ addId, addTitle, addDesc }: any) => void;
};
const AddModal = ({ onAddNotes }: props) => {
  const [addTitle, setAddTitle] = useState("");
  const [addDesc, setAddDesc] = useState("");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitle(e.target.value);
  };
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddDesc(e.target.value);
  };

  return (
    <div className=" flex flex-col border bg-white rounded-lg md:w-[25vw] w-[50vw] divide-y divide-slate-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1">
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
              onChange={onChangeTitle}
              value={addTitle}
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label>Description</label>
            <textarea
              className="border border-gray-200 h-[130px]"
              onChange={onChangeDescription}
              value={addDesc}
            ></textarea>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddNotes({ addTitle, addDesc });
          }}
          className="w-full border bg-blue-300 rounded-l font-bold text-white"
        >
          Add Notes
        </button>
      </form>
    </div>
  );
};

export default AddModal;
