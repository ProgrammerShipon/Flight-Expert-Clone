export default function InputRadio({
  labelText,
  id,
  name,
  setHandle,
  radioValue,
}) {
  console.log("input radioValue ", { radioValue, id });

  return (
    <div className="cursor-pointer items-center justify-start gap-2 inline-flex">
      <span
        className={`rounded-full inline-flex items-center justify-center text-black/50 ${
          radioValue === id ? "p-1 bg-primary " : "p-0.5 bg-black/50"
        }`}
      >
        <span
          className={`rounded-full inline-block bg-white ${
            radioValue === id ? "w-2 h-2" : "w-3 h-3"
          }`}
        ></span>
      </span>
      <input
        className="hidden"
        type="radio"
        name={name}
        id={id}
        onClick={() => setHandle(id)}
      />
      <label
        className="text-black/50 text-lg font-semibold capitalize cursor-pointer"
        htmlFor={id}
      >
        {labelText}
      </label>
    </div>
  );
}
