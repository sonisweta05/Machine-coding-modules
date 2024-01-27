import React, { useEffect, useState } from "react";
import { Option } from "../../types";
import { people } from "../data";

type Props = {
  filteredOptions: Option[];
  onAdd: (option: Option) => void;
};

const MultiSelectOptions = ({ filteredOptions, onAdd }: Props) => {
  return (
    <div >
      {filteredOptions.map((option: Option) => {
        return <div key={option.id} onClick={() => onAdd(option)}>{option.label}  -  {option.sub_text} </div>;
      })}
    </div>
  );
};

export default MultiSelectOptions;
