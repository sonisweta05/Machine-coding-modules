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
  const onAddNotes = ({ addTitle, addDesc }: any) => {
    setNotes([
      ...notes,
      {
        date: new Date(),
        title: addTitle,
        description: addDesc,
      },
    ]);
  };

  const onDelete = (date: Date | number) => {
    const filteredArray = notes.filter((note) => note.date !== date);
    setNotes(filteredArray);
  };
  return (
    <div className="bg-blue-300 min-h-screen flex p-5 gap-5 relative">
      <AddModal onAddNotes={onAddNotes} />
      {notes.map(({ date, title, description }) => {
        return (
          <div
            key={title}
            className="p-2 flex flex-col justify-between border border-gray-100 h-40 w-60 bg-white rounded-lg"
          >
            <div>
              <h1 className="text-xl font-serif">{title}</h1>
              <p className="">{description}</p>
            </div>
            <div className="flex justify-between">
              <p className="">{getCurrentDate()}</p>
              <div className="cursor-pointer flex flex-col text-sm">
                <button onClick={() => onDelete(date)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
