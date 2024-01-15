"use client";

export default function ColoredNumberStatus({
  title = "Vida",
  color = "red",
  value = { currentValue: 0, maxValue: 0 },
}) {
  return (
    <>
      <div className="flex flex-col items-center my-2">
        <p>{title}</p>
        <div className="w-full h-8 relative outline outline-2 rounded-xl flex items-center">
          <div className="absolute w-full flex justify-center rounded-xl">
            <input className="bg-transparent w-6 text-right" />
            |
            <input className="bg-transparent w-6 text-left" />
          </div>
          <div
            className={`w-full h-full p-2 rounded-xl bg-${color}-500`}
            style={{ width: `${100}%` }}
          ></div>
          <div
            className={`w-full h-full p-2 rounded-e-xl bg-cyan-200 absolute right-0 `}
            style={{ width: `${10}px` }}
          ></div>
        </div>
      </div>
    </>
  );
}
