"use client";
import { useState } from "react";
import { ATTRIBUTES_ENUM, TRAINING_ENUM } from "@/constants";
import { GRID_STYLE } from "./expertiseInfo";
import D20 from "@/../public/d20.svg";
import Image from "next/image";
import { useSheetContext } from "../../sheetContext";
import { Expertise } from "../../definitions";

const ATTRIBUTE_SELECT_CLASS = `
flex
items-center
rounded-sm
relative
px-1
h-full
w-[42px]
before:absolute
before:w-full
before:left-[-7.5px]
before:content-['{______}']
before:whitespace-pre
before:text-2xl
after:content-['▼']
after:text-[8px]
after:absolute
after:right-[3px]
hover:cursor-pointer
`;
const TRAINING_SELECT_CLASS = `
flex
items-center
rounded-sm
relative
px-1
h-full
w-[80px]
before:absolute
before:w-full
before:left-1
before:content-['{____________}']
before:whitespace-pre
before:text-2xl
after:content-['▼']
after:text-[8px]
after:absolute
after:right-[-10px]
hover:cursor-pointer
`;

export default function ExpertiseRow({ expertise }: { expertise: Expertise }) {
  const { attributes } = useSheetContext();

  const [expertiseChanges, setExpertiseChanges] =
    useState<Expertise>(expertise);

  return (
    <tr className={`h-9 ${GRID_STYLE}`}>
      <td className="flex items-center ">
        <button className="rounded-sm size-6 mr-4 flex justify-center items-center">
          <Image src={D20} width={24} height={24} alt="20 sided dice" />
        </button>
        <p>{expertiseChanges.name}</p>
      </td>
      <td className="flex items-center justify-around">
        <label
          htmlFor={`${expertiseChanges.name}_attribute_select`}
          className={ATTRIBUTE_SELECT_CLASS}
        >
          <select
            id={`${expertiseChanges.name}_attribute_select`}
            value={expertiseChanges.dice}
            className="absolute left-0 text-start z-10 pl-[2px] hover:outline hover:outline-2 hover:rounded-sm hover:outline-neutral-50/50"
            onChange={(e) =>
              setExpertiseChanges({
                ...expertiseChanges,
                dice: e.target.value,
              })
            }
          >
            <option className="text-black" value={ATTRIBUTES_ENUM.FOR}>
              FOR
            </option>
            <option className="text-black" value={ATTRIBUTES_ENUM.AGI}>
              AGI
            </option>
            <option className="text-black" value={ATTRIBUTES_ENUM.INT}>
              INT
            </option>
            <option className="text-black" value={ATTRIBUTES_ENUM.VIG}>
              VIG
            </option>
            <option className="text-black" value={ATTRIBUTES_ENUM.PRE}>
              PRE
            </option>
          </select>
        </label>
        <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
          {attributes[expertiseChanges.dice]}
        </p>
      </td>
      <td className="flex items-center before:content-['|']">
        <p className="mx-2 text-center whitespace-nowrap overflow-hidden overflow-ellipsis">
          {expertiseChanges.exp}
        </p>
        <div className={TRAINING_SELECT_CLASS}>
          <select
            className="absolute left-3 text-start z-10 pl-[2px] hover:outline hover:outline-2 hover:rounded-sm hover:outline-neutral-50/50"
            onChange={(e) =>
              setExpertiseChanges({
                ...expertiseChanges,
                exp: parseInt(e.target.value),
              })
            }
          >
            <option className="text-black" value={TRAINING_ENUM.NENHUM}>
              Iniciante
            </option>
            <option className="text-black" value={TRAINING_ENUM.TREINADO}>
              Treinado
            </option>
            <option className="text-black" value={TRAINING_ENUM.VETERANO}>
              Veterano
            </option>
            <option className="text-black" value={TRAINING_ENUM.EXPERT}>
              Expert
            </option>
          </select>
        </div>
      </td>
      <td className="flex items-center">
        <input
          className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis"
          type="number"
          value={expertiseChanges.bonus}
          onChange={(e) =>
            setExpertiseChanges({
              ...expertiseChanges,
              bonus: parseInt(e.target.value),
            })
          }
        />
      </td>
    </tr>
  );
}
