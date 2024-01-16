export default function DepartureReturn() {
  return (
    <>
      <div className="flex gap-0 items-center">
        {/* Departure */}
        <div className="w-full py-1 border border-gray-300 px-4 rounded-l-secondary">
          <p className="text-base font-light">Departure</p>
          <h3 className="text-2xl font-semibold text-black/70">15 Jan 24 </h3>
          <p className="text-xs text font-light">Monday</p>
        </div>

        {/* Return */}
        <div className="w-full py-1 border-l-0 border border-gray-300 px-4 rounded-r-secondary">
          <p className="text-base font-light">Return</p>
          <h3 className="text-2xl font-semibold text-black/70">16 Jan 24 </h3>
          <p className="text-xs text font-light">Tuesday</p>
        </div>
      </div>
    </>
  );
}
