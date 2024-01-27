import React, { ChangeEvent, useEffect, useState } from "react";
import MultiSelectOptions from "./MultiSelectOptions";
import { people } from "../data";
import { Option } from "../../types";

const MultiSelect = () => {
  const [options, setOptions] = useState<Option[]>(people);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

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
  }, [searchText, options]);

  const inputTextUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onAdd = (option: Option) => {
    setSelectedOptions([...selectedOptions, option]);
    const removeOption = options.filter((data) => {
      return data !== option;
    });
    setOptions(removeOption);
  };

  const onRemove = (option: Option) => {
    const removeFromSelected = selectedOptions.filter((selectedOption) => {
      return selectedOption !== option;
    });
    setSelectedOptions(removeFromSelected);
    setOptions([...options, option]);
  };
  return (
    <div>
      <div style={{ border: "1px solid black", height: "200px" }}>
        {selectedOptions.map((option) => {
          return (
            <div key={option.id}>
              <span>{option.label} </span>
              <span onClick={() => onRemove(option)}>x</span>
            </div>
          );
        })}
      </div>
      <input type="text" placeholder="serach" onChange={inputTextUpdate} />
      <div>
        <MultiSelectOptions filteredOptions={filteredOptions} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default MultiSelect;
