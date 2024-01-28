import { useEffect, useRef } from "react";
import { Option } from "../../types";

type Props = {
  focusedIndex: number;
  filteredOptions: Option[];
  onAdd: (option: Option) => void;
};

const MultiSelectOptions = ({
  focusedIndex,
  filteredOptions,
  onAdd,
}: Props) => {
  const ref = useRef<HTMLDivElement[]>(new Array());
  useEffect(() => {
    ref.current[focusedIndex]?.scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [focusedIndex]);

  return (
    <div className="w-full max-h-60 overflow-auto border border-gray-100 bg-white my-2 rounded-lg shadow-md divide-y divide-slate-100">
      {filteredOptions.map((option: Option, i) => {
        return (
          <div
            ref={(ele: any) => ref.current.push(ele)}
            onMouseDown={(e) => e.preventDefault()}
            className={`text-sm whitespace-nowrap p-2 hover:bg-gray-100 flex items-center justify-between cursor-pointer ${
              focusedIndex == i ? "bg-gray-100" : ""
            }`}
            key={option.id}
            onClick={() => onAdd(option)}
          >
            {option.label}
            <span className="text-xs text-gray-400 truncate">
              {option.sub_text}{" "}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelectOptions;
