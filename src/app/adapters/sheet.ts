import { CharacterInfo, CharacterInfoDoc } from "../(sheet)/definitions";

export function characterInfo_DocToModel(
  characterInfoDoc: CharacterInfoDoc
): CharacterInfo {
  return {
    id: characterInfoDoc.id,
    profile: {
      playerName: characterInfoDoc.player_name,
      characterName: characterInfoDoc.character_name,
      characterClass: characterInfoDoc.character_class,
      characterPath: characterInfoDoc.character_path,
      nex: characterInfoDoc.nex,
      avatar: characterInfoDoc.avatar,
    },
    attributes: {
      agi: characterInfoDoc.attribute_agi,
      for: characterInfoDoc.attribute_for,
      int: characterInfoDoc.attribute_int,
      pre: characterInfoDoc.attribute_pre,
      vig: characterInfoDoc.attribute_vig,
    },
  };
}
