import { useEffect, useState } from "react";
import CountryCapitalView from "./CountryCapitalView";
import { DATA, shuffleData } from "./utils";

const CountryGame = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [borderColor, setBorderColor] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [correctOptionBorder, setCorrectOptionBorder] = useState("");

  useEffect(() => {
    setOptions(shuffleData([...Object.keys(DATA), ...Object.values(DATA)]));
  }, []);

  useEffect(() => {
    if (selectedOptions.length === 2) {
      if (
        DATA[selectedOptions[0]] === selectedOptions[1] ||
        DATA[selectedOptions[1]] === selectedOptions[0]
      ) {
        setBorderColor("border-green-500");
        const filteredData = options.filter((option) => {
          if (option === selectedOptions[1] || option === selectedOptions[0]) {
            return false;
          }
          return true;
        });
        setTimeout(() => {
          setOptions(filteredData);
          setSelectedOptions([]);
        }, 1000);
      } else if (
        (DATA[selectedOptions[0]] && !DATA[selectedOptions[1]]) ||
        (DATA[selectedOptions[1]] && !DATA[selectedOptions[0]])
      ) {
        setCorrectOption(DATA[selectedOptions[0]] || DATA[selectedOptions[1]]);
        setCorrectOptionBorder("border-green-500");
        setBorderColor("border-red-500");
        setTimeout(() => {
          setCorrectOption("");
          setSelectedOptions([]);
        }, 1000);
      } else {
        setBorderColor("border-red-500");
        setTimeout(() => {
          setSelectedOptions([]);
        }, 1000);
      }
    }
  }, [selectedOptions]);

  const onHandleClick = (e: any) => {
    if (selectedOptions.length > 1) return;
    setBorderColor("border-blue-700");
    setSelectedOptions([...selectedOptions, e.target.textContent]);
  };
  return (
    <>
        {
          <CountryCapitalView
            options={options}
            onClick={onHandleClick}
            selectedOptions={selectedOptions}
            borderColor={borderColor}
            correctOption={correctOption}
            correctOptionBorder={correctOptionBorder}
          />
        }
    </>
  );
};

export default CountryGame;
