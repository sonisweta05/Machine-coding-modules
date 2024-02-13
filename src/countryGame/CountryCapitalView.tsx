const CountryCapitalView = ({
  options,
  onClick,
  selectedOptions,
  borderColor,
  correctOption,
  correctOptionBorder,
}: any) => {
  const selectionColor = (ele: any) => {
    if (ele === correctOption) {
      return correctOptionBorder;
    }
    return selectedOptions.includes(ele) ? borderColor : "border-gray-400";
  };

  return (
    <div>
      {options.length !== 0 ? (
        <div className="flex flex-wrap">
          {options.map((ele: any, i: any) => (
            <div
              className={`m-2 p-2 border-4 cursor-pointer rounded-lg shadow-md  font-semibold ${selectionColor(
                ele
              )} `}
              key={i}
              onClick={(e) => onClick(e)}
            >
              {ele}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex text-wrap justify-center items-center min-h-screen font-extrabold text-3xl">
          Congrtaulations! You Won..!!😍
        </div>
      )}
    </div>
  );
};

export default CountryCapitalView;
