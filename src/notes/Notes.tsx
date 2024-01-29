import { INotes } from "./types/model";
import { getCurrentDate } from "./utils/date";

const Notes = () => {
  const notes: INotes[] = [
    { title: "First note", description: "here is my first note" },
    { title: "Second note", description: "come to my second note" },
  ];
  
  return (
    <div className="flex p-5 gap-5">
      {notes.map(({ title, description }) => {
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
              <p className="cursor-pointer">...</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
