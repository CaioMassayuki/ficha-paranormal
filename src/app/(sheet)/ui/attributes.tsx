"use client";

import Image from "next/image";
import AttributesPentagram from "@/../public/attributes.png";
import { LONG_DEBOUNCE } from "@/constants";
import { CharacterAttributes } from "../definitions";
import { useEffect, useState } from "react";
import { useDebounceCallback } from "@/app/hooks/useDebounceCallback";
import { updateAttributesInfo } from "../actions";

export default function Attributes({
  id,
  attributes,
}: {
  id: string;
  attributes: CharacterAttributes;
}) {
  const [attributesChanges, setAttributesChanges] =
    useState<CharacterAttributes>(attributes);

    const handleAttributeChanges = useDebounceCallback(
      async (profileChanges: CharacterAttributes) => {
        await updateAttributesInfo(profileChanges, id);
      },
      LONG_DEBOUNCE
    );
  
    useEffect(() => {
      handleAttributeChanges(attributesChanges);
    }, [attributesChanges]);

  return (
    <>
      <div className="flex flex-col items-center justify-center rounded-b-xl py-2 bg-neutral-900">
        <div className="relative">
          <Image
            alt="Attributes symbol"
            src={AttributesPentagram}
            width={360}
            height={360}
          />
          <label className="text-center absolute top-9 left-[140px] w-20 h-20">
            <input
              id="AGI"
              className="bg-transparent text-center w-12 h-10 text-4xl bg-none"
              type="number"
              value={attributesChanges.agi}
                onChange={(e) =>
                  setAttributesChanges({
                    ...attributesChanges,
                    agi: parseInt(e.target.value),
                  })
                }
            />
          </label>
          <label className="text-center absolute top-[112px] left-7 w-20 h-20">
            <input
              id="FOR"
              className="bg-transparent text-center w-12 h-10 text-4xl bg-none"
              type="number"
              value={attributesChanges.for}
                onChange={(e) =>
                  setAttributesChanges({
                    ...attributesChanges,
                    for: parseInt(e.target.value),
                  })
                }
            />
          </label>
          <label className="text-center absolute top-[112px] right-7 w-20 h-20">
            <input
              id="INT"
              className="bg-transparent text-center w-12 h-10 text-4xl bg-none"
              type="number"
              value={attributesChanges.int}
                onChange={(e) =>
                  setAttributesChanges({
                    ...attributesChanges,
                    int: parseInt(e.target.value),
                  })
                }
            />
          </label>
          <label className="text-center absolute bottom-9 left-[60px] w-20 h-20">
            <input
              id="PRE"
              className="bg-transparent text-center w-12 h-10 text-4xl bg-none"
              type="number"
              value={attributesChanges.pre}
                onChange={(e) =>
                  setAttributesChanges({
                    ...attributesChanges,
                    pre: parseInt(e.target.value),
                  })
                }
            />
          </label>
          <label className="text-center absolute bottom-9 right-[60px] w-20 h-20">
            <input
              id="VIG"
              className="bg-transparent text-center w-12 h-10 text-4xl bg-none"
              type="number"
              value={attributesChanges.vig}
                onChange={(e) =>
                  setAttributesChanges({
                    ...attributesChanges,
                    vig: parseInt(e.target.value),
                  })
                }
            />
          </label>
        </div>
      </div>
    </>
  );
}
