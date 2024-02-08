import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CircularBtn = ({ onClick, disabled, icon }: any) => {
  return (
    <div>
      <button
        className="bg-black h-10 w-10 text-white cursor-pointer hover:scale-90 rounded-full drop-shadow-xl active:scale-105 focus:ring-4 ring-yellow-300 disabled:opacity-25 disabled:cursor-not-allowed"
        onClick={onClick}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default CircularBtn;
