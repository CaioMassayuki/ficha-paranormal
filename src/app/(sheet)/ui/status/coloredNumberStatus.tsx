"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { StatusType, StatusValues } from "../../definitions";
import { useDebounceCallback } from "@/app/hooks/useDebounceCallback";
import { updateHealthStatusInfo } from "../../actions";
import { MEDIUM_DEBOUNCE } from "@/constants";

export default function ColoredNumberStatus({
  title = "Vida",
  color = "red",
  value = { currentValue: 0, maxValue: 0, extra: 0 },
  handleStatusChange,
}: {
  title: string;
  color: string;
  value: StatusValues;
  handleStatusChange: Function;
}) {
  const [statusValues, setStatusValues] = useState<StatusValues>(value);
  const [isExtra, setIsExtra] = useState<Boolean>(false);
  const currentPercentage: number =
    (statusValues.currentValue * 100) / statusValues.maxValue;

  const handleDecreaseCurrentValue = () => {
    if (statusValues.extra !== 0) {
      setStatusValues({
        ...statusValues,
        extra: statusValues.extra - 1,
      });
    } else if (statusValues.currentValue > 0) {
      setStatusValues({
        ...statusValues,
        currentValue: statusValues.currentValue - 1,
      });
    }
  };

  const handleIncreaseCurrentValue = () => {
    if (statusValues.currentValue < statusValues.maxValue) {
      setStatusValues({
        ...statusValues,
        currentValue: statusValues.currentValue + 1,
      });
    }
  };

  const handleDecreaseMaxValue = () => {
    if (statusValues.maxValue > 1)
      if (statusValues.maxValue === statusValues.currentValue) {
        setStatusValues({
          ...statusValues,
          maxValue: statusValues.maxValue - 1,
          currentValue: statusValues.currentValue - 1,
        });
      } else {
        setStatusValues({
          ...statusValues,
          maxValue: statusValues.maxValue - 1,
        });
      }
  };

  const handleIncreaseMaxValue = () => {
    isExtra
      ? handleIncreaseExtraValue()
      : setStatusValues({
          ...statusValues,
          maxValue: statusValues.maxValue + 1,
        });
  };

  const handleDecreaseExtraValue = () => {
    if (statusValues.extra > 0) {
      setStatusValues({
        ...statusValues,
        extra: statusValues.extra - 1,
      });
    }
  };

  const handleIncreaseExtraValue = () => {
    setStatusValues({
      ...statusValues,
      extra: statusValues.extra + 1,
    });
  };

  useEffect(() => {
    handleStatusChange(statusValues)
  }, [statusValues])

  return (
    <>
      <div className="flex flex-col items-center my-2">
        <div className="w-full flex justify-between">
          <div className="text-lg w-11 flex justify-between">
            <button
              className="border rounded-md h-5 w-5 flex items-center justify-center"
              onClick={handleDecreaseCurrentValue}
            >
              -
            </button>
            <button
              className="border rounded-md h-5 w-5 flex items-center justify-center"
              onClick={handleIncreaseCurrentValue}
            >
              +
            </button>
          </div>
          <p className="ml-5">{title}</p>
          <div className="text-lg w-16 flex justify-between">
            <button
              className={clsx(
                "border rounded-md h-5 w-5 flex items-center justify-center",
                {
                  "bg-cyan-300 text-black": isExtra,
                }
              )}
              onClick={() => {
                isExtra ? handleDecreaseExtraValue() : handleDecreaseMaxValue();
              }}
            >
              -
            </button>
            <button
              className={clsx(
                "border rounded-md h-5 w-5 flex items-center justify-center",
                {
                  "bg-cyan-300 text-black": isExtra,
                }
              )}
              onClick={handleIncreaseMaxValue}
            >
              +
            </button>
            <button
              className={clsx(
                "border text-base rounded-md h-5 w-5 flex items-center justify-center",
                {
                  "bg-cyan-300 text-black": isExtra,
                }
              )}
              onClick={() => setIsExtra(!isExtra)}
            >
              @
            </button>
          </div>
        </div>
        <div className="w-full h-8 relative outline outline-2 rounded-xl flex items-center">
          <div className="z-10 absolute w-full flex justify-center rounded-xl">
            <label className="w-full flex justify-end">
              <input
                className="w-28 text-right"
                value={statusValues.currentValue || 0}
                onChange={(e) => {
                  setStatusValues({
                    ...statusValues,
                    currentValue: parseInt(e.target.value),
                  });
                }}
              />
            </label>
            <span className="text-cyan-500">
              {statusValues.extra !== 0 && `+${statusValues.extra}`}
            </span>
            |
            <label className="w-full">
              <input
                className="w-28 text-left"
                value={statusValues.maxValue || 1}
                onChange={(e) => {
                  setStatusValues({
                    ...statusValues,
                    maxValue: parseInt(e.target.value),
                  });
                }}
              />
            </label>
          </div>
          <div
            className={`w-full h-full p-2 rounded-xl bg-${color}-500`}
            style={{ width: `${currentPercentage}%` }}
          ></div>
          <div
            className={clsx(
              `h-full p-2 rounded-e-xl bg-cyan-200 absolute right-0 flex justify-end items-center`,
              { invisible: statusValues.extra === 0 }
            )}
            style={{ width: `${statusValues.extra * 2}px` }}
          ></div>
        </div>
      </div>
    </>
  );
}
