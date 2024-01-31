import { ChangeEvent, useState } from "react";
import { INotes } from "./types/model";

type props = {
  onAddNotes: ({ addTitle, addDesc }: any) => void;
  setShowModal: (val: boolean) => void;
  notes: INotes;
  isAddForm: boolean;
  onUpdateNotes: (val: INotes) => void;
};
const AddModal = ({
  setShowModal,
  onAddNotes,
  notes,
  isAddForm,
  onUpdateNotes,
}: props) => {
  const [title, setTitle] = useState(notes.title);
  const [description, setDescription] = useState(notes.description);
  const [descCount, setDescCount] = useState("");
  const date = notes.date;
  const maxTitleLength = 50;
  const maxTextLength = 200;

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxTitleLength - 1) {
      return;
    } else {
      setTitle(e.target.value);
    }
  };
  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > maxTextLength - 1) {
      return;
    } else {
      setDescCount(e.target.value);
      setDescription(e.target.value);
    }
  };

  return (
    <div className="flex flex-col border bg-white rounded-lg md:w-[25vw] w-[50vw] divide-y divide-slate-200 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-1 ">
      <div className="flex gap-9 justify-between text-xl p-4">
        <h3 className="font-bold font-sans ">
          {isAddForm ? "Add a New Note" : "Update a Note"}
        </h3>
        <button onClick={() => setShowModal(false)} className="mr-2">
          x
        </button>
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
              value={title}
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label>Description</label>
            <textarea
              className="border border-gray-200 h-[130px] overflow-hidden"
              // onClick={() =>setIsDescSelected(true)}
              onChange={onChangeDescription}
              value={description}
            ></textarea>
            {
              <p className="text-right font-extralight text-xs">
              {descCount.length+1}/{maxTextLength}
              </p>
            }
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            const trimTitle:string = title.trim();
            const trimDescription:string = description.trim();

            if (title.trim() === "" || description.trim() === "") {
              alert("Title and Description must be filled out.");
            } else {
              if (isAddForm) {
                onAddNotes({ title:trimTitle, description:trimDescription , date: new Date()});
              } else {
                onUpdateNotes({ date, title:trimTitle, description:trimDescription });
              }
            }
          }}
          className="w-full border bg-blue-300 rounded-l font-bold text-white"
        >
          {isAddForm ? "Add Note" : "Update Note"}
        </button>
      </form>
    </div>
  );
};

export default AddModal;
