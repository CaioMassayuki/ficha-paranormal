'use client'

import Shield from "@/../public/shieldSVG";
import ColoredNumberStatus from "./coloredNumberStatus";

export default function Status({
  lifeValue = { currentValue: 0, maxValue: 0 },
  sanityValue = { currentValue: 0, maxValue: 0 },
  effortValue = { currentValue: 0, maxValue: 0 },
}) {
  return (
    <>
      <div className="w-96 ml-2 rounded-xl flex flex-col bg-neutral-900">
        <div className="m-2 flex justify-center">
          <h1 className="text-2xl">Status</h1>
        </div>
        <div className="m-4">
          <div>
            <ColoredNumberStatus
              title="Vida"
              color="red"
              value={lifeValue}
            //   handleChange={handleLifeChanges}
            />
            <ColoredNumberStatus
              title="Sanidade"
              color="blue"
              value={sanityValue}
            //   handleChange={handleSanityChanges}
            />
            <ColoredNumberStatus
              title="Pontos de Esforço"
              color="yellow"
              value={effortValue}
            //   handleChange={handleEffortChanges}
            />
          </div>
          <div className="my-4 flex justify-around items-center">
            <div className="flex flex-col items-center">
              <h1>Defesa</h1>
              <div className="relative">
                <Shield width={64} height={64} />
                <span className="absolute right-4 top-3 text-3xl">15</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center mt-1">
                <span className="mr-2">Deslocamento</span>
                <div className="flex items-center justify-center p-2 border h-6">
                  999
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="mr-2">Bloqueio</span>
                <div className="flex items-center justify-center p-2 border h-6">
                  999
                </div>
              </div>
              <div className="flex items-center mt-1">
                <span className="mr-2">Esquiva</span>
                <div className="flex items-center justify-center p-2 border h-6">
                  999
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
