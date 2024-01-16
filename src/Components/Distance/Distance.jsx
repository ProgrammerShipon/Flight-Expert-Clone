const arrowIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 256 256"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M117.66,170.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L72,188.69V48a8,8,0,0,1,16,0V188.69l18.34-18.35A8,8,0,0,1,117.66,170.34Zm96-96-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32L168,67.31V208a8,8,0,0,0,16,0V67.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z"></path>
  </svg>
);

export default function Distance() {
  return (
    <>
      <div className="flex min-w-max gap-0 items-center relative">
        {/* From */}
        <div className="w-full py-1 border border-gray-300 px-4 rounded-secondary">
          <p className="text-base font-light">From</p>
          <h3 className="text-2xl font-semibold text-black/70">Dhaka</h3>
          <p className="text-xs text font-light">
            Hazrat Shahajalal International Airport
          </p>
        </div>

        {/* Changes button */}
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="inline-block rounded-full p-2 text-3xl border rotate-90 shadow-secondary bg-white">
            {arrowIcon}
          </span>
        </button>

        {/* To */}
        <div className="w-full py-1 border border-gray-300 px-4 rounded-secondary pl-8">
          <p className="text-base font-light">To</p>
          <h3 className="text-2xl font-semibold text-black/70">Rajshahi</h3>
          <p className="text-xs text font-light">Shah Amanat International</p>
        </div>
      </div>
    </>
  );
}
