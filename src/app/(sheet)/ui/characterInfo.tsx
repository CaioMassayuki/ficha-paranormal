import { IMG } from "@/constants";
import Image from "next/image";

const profileInfo = {
  nex: 1,
  characterName: "A",
  playerName: "A",
  characterPath: "A",
  characterClass: "A",
};

const a = `
  w-24
  h-24
  flex
  flex-col
  items-center
  absolute
  right-0
  bottom-0
  after:w-8
  after:h-16
  after:absolute
  after:rounded-l-full
  after:border-y-4
  after:border-l-4
  after:border-neutral-100
  after:bottom-0
  after:-translate-x-[27px]
  after:translate-y-[24px]
  after:-rotate-[22.5deg]
  after:translate-z-0
  before:w-8
  before:h-16
  before:absolute
  before:rounded-r-full
  before:border-y-4
  before:border-r-4
  before:border-neutral-100
  before:bottom-0
  before:translate-x-[2.5px]
  before:translate-y-[24px]
  before:rotate-[22.5deg]
  before:translate-z-0
  `;

export default function characterInfo() {
  return (
    <>
      <div className="border-black w-96 p-4 rounded-xl flex flex-col bg-neutral-900">
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl">Principal</h1>
        </div>
        <div className="flex flex-col items-center relative mb-4">
          <Image
            className="w-60 h-60 rounded-full"
            src={IMG}
            alt="Player character avatar"
            height={240}
            width={240}
          />
          <div className={a}>
            <label className="absolute top-11 left-[25px] text-xs">NEX</label>
            <input
              className="absolute bottom-0 left-4 w-10 h-8 text-2xl"
              type="number"
              value={profileInfo.nex}
              // onChange={(e) =>
              //   handleProfileChanges({
              //     ...profileInfo,
              //     nex: parseInt(e.target.value),
              //   })
              // }
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Nome:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileInfo.characterName}
              // onChange={(e) =>
              //   handleProfileChanges({
              //     ...profileInfo,
              //     characterName: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Jogador:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileInfo.playerName}
              // onChange={(e) =>
              //   handleProfileChanges({
              //     ...profileInfo,
              //     playerName: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Classe:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileInfo.characterClass}
              // onChange={(e) =>
              //   handleProfileChanges({
              //     ...profileInfo,
              //     characterClass: e.target.value,
              //   })
              // }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Trilha:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileInfo.characterPath}
              // onChange={(e) =>
              //   handleProfileChanges({
              //     ...profileInfo,
              //     characterPath: e.target.value,
              //   })
              // }
            />
          </div>
        </div>
      </div>
    </>
  );
}
