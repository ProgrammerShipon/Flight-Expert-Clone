const thickIcons = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M 19.28125 5.28125 L 9 15.5625 L 4.71875 11.28125 L 3.28125 12.71875 L 8.28125 17.71875 L 9 18.40625 L 9.71875 17.71875 L 20.71875 6.71875 Z"></path>
  </svg>
);

export default function InputRadioThik({
  labelText,
  id,
  name,
  setHandle,
  radioValue,
}) {
  return (
    <div className="cursor-pointer items-center justify-start gap-2 inline-flex bg-primary/5 py-1 px-2 rounded-secondary">
      {/* circle */}
      <div
        className={`rounded-full inline-flex items-center justify-center text-black/50 ${
          radioValue === id ? " bg-primary p-0.5" : "p-0.5 bg-black/50"
        }`}
      >
        {radioValue === id ? (
          <span className="text-white w-3 h-3">{thickIcons} </span>
        ) : (
          <span className={`rounded-full inline-block bg-white w-3 h-3`}></span>
        )}
      </div>

      {/* text */}
      <label
        className="text-black/50 text-lg font-semibold capitalize cursor-pointer"
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        className="hidden"
        type="radio"
        name={name}
        id={id}
        onClick={() => setHandle(id)}
      />
    </div>
  );
}
