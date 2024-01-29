import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import MultiSelectOptions from "./MultiSelectOptions";
import { people } from "./data";
import { Option } from "./types";

const MultiSelect = () => {
  const [options, setOptions] = useState<Option[]>(people);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [isLastHighlited, setIsLastHighlited] = useState<boolean>(false);
  const [showList, setShowList] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const filterData = people.filter((option, i) => {
      if (selectedOptions.includes(option)) {
        return false;
      } else if (
        option.sub_text.toLowerCase().includes(searchText.toLowerCase()) ||
        option.label.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return true;
      }
      return false;
    });
    setFilteredOptions(filterData);
  }, [searchText, options, selectedOptions]);

  const inputTextUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setShowList(true);
  };

  const onAdd = (option: Option) => {
    setSelectedOptions([...selectedOptions, option]);
    const removeOption = options.filter((data) => {
      return data !== option;
    });
    setOptions(removeOption);
    setShowList(false);
  };

  const onRemove = (option: Option) => {
    const removeFromSelected = selectedOptions.filter((selectedOption) => {
      return selectedOption !== option;
    });
    setSelectedOptions(removeFromSelected);
    setOptions([...options, option]);
    setShowList(false);
    setSearchText("")
  };
  const keyPressNavigation = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowUp":
        onArrowUp();
        e.preventDefault();
        return true;
      case "ArrowDown":
        onArrowDown();
        e.preventDefault();
        return true;
      case "Enter":
        onEnter();
        return true;
      case "Backspace":
        onBackspace();
        return true;
      default:
        break;
    }
  };

  // handlers
  const onArrowUp = () => {
    setFocusedIndex(
      (i) => (i + filteredOptions.length - 1) % filteredOptions.length
    );
  };
  const onArrowDown = () => {
    setFocusedIndex((i) => (i + 1) % filteredOptions.length);
  };
  const onEnter = () => {
    if (!showList) return;
    onAdd(filteredOptions[focusedIndex]);
  };
  const onBackspace = () => {
    if (searchText.length === 0 && selectedOptions.length > 0) {
      if (!isLastHighlited) {
        setIsLastHighlited(true);
      } else {
        setSelectedOptions(selectedOptions.slice(0, -1));
        setIsLastHighlited(false);
      }
    }
  };
  return (
    <main className="flex flex-col min-h-screen items-center md:p-24 p-6 bg-gray font-mono">
      <div className="py- pl-20 pr-20 lg:w-[38rem] ">
        <h1 className="text-center font-bold text-xl">Multi-Select</h1>
        <div
          className="flex flex-wrap rounded-lg bg-white"
          onClick={() => {
            if (!showList) {
              inputRef?.current?.focus();
              setShowList(true);
            }
          }}
        >
          {selectedOptions.map((option, i) => {
            return (
              <div
                className={`m-2  ${
                  isLastHighlited && selectedOptions.length - 1 === i
                    ? "font-bold"
                    : ""
                }`}
                key={option.id}
              >
                <span className="border bg-gray-100 my-2 py-1 px-1 text-sm rounded-lg">
                  <span>{option.label} </span>
                  <span
                    className="text-center ml-1 cursor-pointer"
                    onClick={() => onRemove(option)}
                  >
                    x
                  </span>
                </span>
              </div>
            );
          })}
          <input
            ref={inputRef}
            onBlur={() => setShowList(false)}
            className="m-1 px-1 rounded-lg border-none outline-none height-1px"
            type="text"
            placeholder="serach"
            onChange={inputTextUpdate}
            onKeyDown={keyPressNavigation}
            value={searchText}
          />
        </div>

        {showList && (
          <div>
            <MultiSelectOptions
              focusedIndex={focusedIndex}
              filteredOptions={filteredOptions}
              onAdd={onAdd}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default MultiSelect;
