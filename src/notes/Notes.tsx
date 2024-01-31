import AddModal from "./Modal";
import { INotes } from "./types/model";
import { getCurrentDate } from "./utils/date";
import { useState } from "react";
const notesList: INotes[] = [
  { date: 1, title: "First note", description: "here is my first note" },
  { date: 2, title: "Second note", description: "come to my second note" },
];
const Notes = () => {
  const [notes, setNotes] = useState(notesList);
  const [showModal, setShowModal] = useState(false);
  const [isAddForm, setIsAddForm] = useState(true);
  const [addOrEditNote, setAddOrEditNote] = useState<INotes>({
    date: "",
    title: "",
    description: "",
  });

  const onAddNotes = (note: INotes) => {
    console.log(note);
    
    setNotes([...notes,note]);
    setShowModal(false);
  };

  const onEditBtnClick = (note: INotes) => {
    setIsAddForm(false);
    setShowModal(true);
    setAddOrEditNote(note);
  };

  const onUpdateNotes = ({ date, title, description }: INotes) => {
    const result = notes.map((note: INotes) => {
      if (note.date === date) {
        note.title = title;
        note.description = description;
      }
      return note;
    });
    setNotes(result);
    setShowModal(false);
  };

  const onDelete = (date: Date) => {
    const filteredArray = notes.filter((note) => note.date !== date);
    setNotes(filteredArray);
  };

  return (
    <div
      className={`bg-blue-300 min-h-screen flex flex-wrap p-5 gap-5  ${
        showModal ? "bg-red-100" : "bg-opacity-100"
      }`}
    >
      <div className="cursor-pointer flex items-center justify-center border border-gray-100 h-[200px] w-60 bg-white rounded-lg">
        <div
          onClick={() => {
            setIsAddForm(true);
            setShowModal(true);
            setAddOrEditNote({
              title: "",
              description: "",
              date: "",
            });
          }}
          className="flex items-center justify-center text-7xl text-blue-300 border-2 border-dashed border-blue-300 w-[110px] h-[110px] bg-white rounded-full"
        >
          <span>+</span>
        </div>
      </div>
      {showModal && (
        <AddModal
          onAddNotes={onAddNotes}
          setShowModal={setShowModal}
          notes={addOrEditNote}
          isAddForm={isAddForm}
          onUpdateNotes={onUpdateNotes}
        />
      )}
      {notes.map(({ date, title, description }) => {
        return (
          <div
            key={title}
            className="p-2 flex flex-col justify-between border border-gray-100 h-[200px] w-60 bg-white rounded-lg divide-y divide-slate-200 "
          >
            <div>
              <h1 className="text-xl font-serif">{title}</h1>
              <p className="text-wrap truncate h-[100px]">
                {description}
              </p>
            </div>
            <div className="flex justify-between ">
              <p className="">{getCurrentDate()}</p>
              <div className="cursor-pointer flex flex-col text-sm">
                <button onClick={() => onEditBtnClick({ date, title, description })}>
                  Edit
                </button>
                <button onClick={() => onDelete(date as Date)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
