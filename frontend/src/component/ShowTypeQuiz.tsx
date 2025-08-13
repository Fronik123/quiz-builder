interface ShowTypeQuizProps {
  type: string;
}
export default function ShowTypeQuiz({ type }: ShowTypeQuizProps) {
  const options = ["yes", "no"];
  return (
    <>
      {" "}
      {type === "BOOLEAN" && (
        <label>
          {" "}
          <input type="radio" className="mt-2" disabled /> <span>Yes</span>
        </label>
      )}
      {type === "CHECKBOX" && (
        <div className="mt-2 space-y-1">
          {options?.map((opt, idx) => (
            <label key={idx} className="flex items-center space-x-2">
              <input type="checkbox" disabled />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      )}
      {type === "INPUT" && (
        <input
          disabled
          type="text"
          className="mt-2 w-full border rounded px-2 py-1"
          placeholder="Your answer"
        />
      )}
    </>
  );
}
