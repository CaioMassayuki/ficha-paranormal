"use client";

import { useState, useRef, useEffect } from "react";
import { CharacterProfile } from "../definitions";
import Image from "next/image";
import { updateProfileInfo } from "../actions";
import { LONG_DEBOUNCE } from "@/constants";
import { useDebounceCallback } from "@/app/hooks/useDebounceCallback";

const semi_circle_style = `
  w-16
  h-16
  absolute
  right-12
  bottom-4
  rounded-full
  flex
  flex-col
  items-center
  justify-center
  bg-black
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
  after:bottom-5
  after:right-1
  before:w-8
  before:h-16
  before:absolute
  before:rounded-r-full
  before:border-y-4
  before:border-r-4
  before:bottom-5
  before:right-1
  before:border-neutral-100
  before:translate-x-[1.5px]
  before:translate-y-[12px]
  before:-rotate-[28.5deg]
  before:translate-z-0
  `;

export default function characterInfo({
  id,
  profileInfo
}: {
  id: string;
  profileInfo: CharacterProfile;
}) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blobUrl, setBlobUrl] = useState<string>(profileInfo.avatar);
  const [profileChanges, setProfileChanges] = useState<Omit<CharacterProfile, "avatar">>(profileInfo);

  const handleSendAvatar = async () => {
    if (!inputFileRef.current?.files) {
      throw new Error("No file selected");
    }
    const file = inputFileRef.current.files[0];
    const response = await fetch(`/api/upload?filename=${file.name}&id=${id}`, {
      method: "POST",
      body: file,
    });
    const newBlob = await response.json();
    setBlobUrl(newBlob.blob.url);
  };

  const handleProfileChanges = useDebounceCallback(
    async (profileChanges: Omit<CharacterProfile, "avatar">) => {
      await updateProfileInfo(profileChanges, id);
    },
    LONG_DEBOUNCE
  );

  useEffect(() => {
    handleProfileChanges(profileChanges);
  }, [profileChanges]);

  return (
    <>
      <div className="w-96 p-4 rounded-t-xl flex flex-col bg-neutral-900">
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
            <input
              id="nex_input"
              className="bg-transparent z-10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center bottom-[-2px] left-4 w-10 h-8 text-2xl"
              type="number"
              value={profileChanges.nex || ''}
              onChange={(e) =>
                setProfileChanges({
                  ...profileChanges,
                  nex: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="nex_input" className="absolute -bottom-1 text-xs">
              NEX
            </label>
          </div>
        </div>
        <form className="flex flex-col">
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Nome:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileChanges.characterName || ''}
              onChange={(e) =>
                setProfileChanges({
                  ...profileChanges,
                  characterName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Jogador:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileChanges.playerName || ''}
              onChange={(e) =>
                setProfileChanges({
                  ...profileChanges,
                  playerName: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Classe:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileChanges.characterClass || ''}
              onChange={(e) =>
                setProfileChanges({
                  ...profileChanges,
                  characterClass: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col items-start mb-2">
            <label className="text-sm">Trilha:</label>
            <input
              className="bg-gray-600 text-start w-full"
              value={profileChanges.characterPath || ''}
              onChange={(e) =>
                setProfileChanges({
                  ...profileChanges,
                  characterPath: e.target.value,
                })
              }
            />
          </div>
        </form>
      </div>
    </>
  );
}
