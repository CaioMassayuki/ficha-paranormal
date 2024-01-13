"use client";

import { useState, useRef } from "react";
import { CharacterInfo } from "../definitions";
import Image from "next/image";
import { updateCharacterInfo } from "../actions";

const semi_circle_style = `
  w-24
  h-24
  flex
  flex-col
  items-center
  absolute
  right-6
  bottom-6
  after:w-8
  after:h-16
  after:absolute
  after:rounded-l-full
  after:border-y-4
  after:border-l-4
  after:border-neutral-100
  after:bottom-0

  after:-translate-x-[26px]
  after:translate-y-[12px]
  after:rotate-[28.5deg]
  after:translate-z-0
  before:w-8
  before:h-16
  before:absolute
  before:rounded-r-full
  before:border-y-4
  before:border-r-4
  before:border-neutral-100
  before:bottom-0
  before:translate-x-[1.5px]
  before:translate-y-[12px]
  before:-rotate-[28.5deg]
  before:translate-z-0
  `;

export default function characterInfo({
  profileInfo,
}: {
  profileInfo: CharacterInfo;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobUrl, setBlobUrl] = useState<string>(profileInfo.avatar);

  const handleSendAvatar = async () => {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }
    const file = inputFileRef.current.files[0];
    const response = await fetch(
      `/api/upload?filename=${file.name}&id=${profileInfo.id}`,
      {
        method: "POST",
        body: file,
      }
    );
    const newBlob = (await response.json());
    setBlobUrl(newBlob.blob.url);
  };

  const handleProfileChanges = async (profileChanges: CharacterInfo) => {
    await updateCharacterInfo(profileChanges, profileInfo.id)
  }

  return (
    <>
      <div className="border-black w-96 p-4 rounded-xl flex flex-col bg-neutral-900">
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl">Principal</h1>
        </div>
        <div className="flex flex-col items-center relative mb-4">
          <input
            id="character_avatar"
            type="file"
            ref={inputFileRef}
            onChange={handleSendAvatar}
            className="hidden"
          />
          <label htmlFor="character_avatar">
            <Image
              priority
              unoptimized
              className="w-60 h-60 rounded-full"
              src={blobUrl}
              alt="Player character avatar"
              height={240}
              width={240}
            />
          </label>
          <div className={semi_circle_style}>
            <label className="absolute -bottom-6 left-[24px] text-xs">
              NEX
            </label>
            <input
              className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-none text-center absolute bottom-[-2px] left-4 w-10 h-8 text-2xl"
              type="number"
              defaultValue={profileInfo.nex}
              onChange={(e) =>
                handleProfileChanges({
                  ...profileInfo,
                  nex: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Nome:</label>
            <input
              className="bg-gray-600 text-start w-full"
              defaultValue={profileInfo.character_name}
              onChange={(e) =>
                handleProfileChanges({
                  ...profileInfo,
                  character_name: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Jogador:</label>
            <input
              className="bg-gray-600 text-start w-full"
              defaultValue={profileInfo.player_name}
              onChange={(e) =>
                handleProfileChanges({
                  ...profileInfo,
                  player_name: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Classe:</label>
            <input
              className="bg-gray-600 text-start w-full"
              defaultValue={profileInfo.character_class}
              onChange={(e) =>
                handleProfileChanges({
                  ...profileInfo,
                  character_class: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Trilha:</label>
            <input
              className="bg-gray-600 text-start w-full"
              defaultValue={profileInfo.character_path}
              onChange={(e) =>
                handleProfileChanges({
                  ...profileInfo,
                  character_path: e.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}
