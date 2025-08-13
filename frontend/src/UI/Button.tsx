interface Button {
  title: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  border?: boolean;
  red?: boolean;
  blue?: boolean;
}

export default function Button({
  title,
  handleClick,
  type,
  border,
  red,
  blue,
}: Button) {
  return (
    <>
      {border ? (
        <button
          className={`border-2 border-yellow-300  shadow-lg text-black px-4 py-2 text-yellow-300 rounded hover:text-white  hover:bg-yellow-500 cursor-pointer w-full transition-colors duration-300`}
          onClick={handleClick}
          type={type}
        >
          {title}
        </button>
      ) : (
        <button
          className={` ${
            red
              ? `text-red-600 bg-white-500 hover:text-red-400 `
              : blue
              ? `bg-blue-500 text-white border border-blue-500 rounded-lg p-4 shadow-md hover:bg-blue-400 hover:text-blue-500 `
              : `text-white bg-yellow-400 border-yellow-300 hover:text-yellow-400  hover:border-yellow-300`
          } border-2 shadow-lg text-black px-4 py-2 rounded hover:bg-white  cursor-pointer w-full transition-colors duration-300`}
          onClick={handleClick}
          type={type}
        >
          {title}
        </button>
      )}
    </>
  );
}
