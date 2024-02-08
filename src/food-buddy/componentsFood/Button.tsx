import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  onClick? :() => void,
  btnText: string,
  btnIcon?: any
}
const Button = ({ onClick, btnText, btnIcon }: Props) => {
  return (
    <div>
      <button
        className="text-white bg-black md:text-l text-sm  font-bold p-2 rounded-2xl"
        onClick={onClick}
      >
        {btnIcon && <FontAwesomeIcon icon={btnIcon} />} {btnText}
      </button>
    </div>
  );
};

export default Button;
