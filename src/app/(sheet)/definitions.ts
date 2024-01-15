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
  id: string;
  profile: CharacterProfile;
  attributes: CharacterAttributes;
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
};
