import { ObjectId } from "mongodb";

export type CharacterProfile = {
  playerName: string;
  characterName: string;
  characterClass: string;
  characterPath: string;
  nex: number;
  avatar: string;
};
export type CharacterAttributes = {
  agi: number;
  for: number;
  int: number;
  pre: number;
  vig: number;
};

export type CharacterInfo = {
  _id: string;
  profile: CharacterProfile;
  attributes: CharacterAttributes;
  status: {
    health: StatusValues;
    sanity: StatusValues;
    effort: StatusValues;
    extraStatus: StatusExtraValues;
  };
};

export type CharacterInfoDoc = {
  id: string;
  player_name: string;
  character_name: string;
  character_class: string;
  character_path: string;
  nex: number;
  avatar: string;
  attribute_agi: number;
  attribute_for: number;
  attribute_int: number;
  attribute_pre: number;
  attribute_vig: number;
  current_health: number;
  max_health: number;
  extra_health: number;
  current_sanity: number;
  max_sanity: number;
  extra_sanity: number;
  current_effort: number;
  max_effort: number;
  extra_effort: number;
  defense: number;
  speed: number;
  block: number;
  dodge: number;
};

export type StatusType = "health" | "sanity" | "effort";

export type StatusValues = {
  currentValue: number;
  maxValue: number;
  extra: number;
};

export type StatusInfo = {
  health: StatusValues;
  sanity: StatusValues;
  effort: StatusValues;
  extraStatus: StatusExtraValues;
};

export type StatusExtraValues = {
  defense: number;
  speed: number;
  block: number;
  dodge: number;
};
