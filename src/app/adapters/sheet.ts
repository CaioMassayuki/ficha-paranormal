import { CharacterInfo, CharacterInfoDoc } from "../(sheet)/definitions";

export function characterInfo_DocToModel(
  characterInfoDoc: CharacterInfoDoc
): CharacterInfo {
  return {
    id: characterInfoDoc.id,
    profile: {
      playerName: characterInfoDoc.player_name || '',
      characterName: characterInfoDoc.character_name || '',
      characterClass: characterInfoDoc.character_class || '',
      characterPath: characterInfoDoc.character_path || '',
      nex: characterInfoDoc.nex || 0,
      avatar: characterInfoDoc.avatar || '',
    },
    attributes: {
      agi: characterInfoDoc.attribute_agi || 0,
      for: characterInfoDoc.attribute_for || 0,
      int: characterInfoDoc.attribute_int || 0,
      pre: characterInfoDoc.attribute_pre || 0,
      vig: characterInfoDoc.attribute_vig || 0,
    },
    status: {
      health: {
        currentValue: characterInfoDoc.current_health || 0,
        maxValue: characterInfoDoc.max_health || 0,
        extra: characterInfoDoc.extra_health || 0,
      },
      sanity: {
        currentValue: characterInfoDoc.current_sanity || 0,
        maxValue: characterInfoDoc.max_sanity || 0,
        extra: characterInfoDoc.extra_sanity || 0,
      },
      effort: {
        currentValue: characterInfoDoc.current_effort || 0,
        maxValue: characterInfoDoc.max_effort || 0,
        extra: characterInfoDoc.extra_effort || 0,
      },
    },
    extraStatus: {
      defense: characterInfoDoc.defense || 0,
      speed: characterInfoDoc.speed || 0,
      block: characterInfoDoc.block || 0,
      dodge: characterInfoDoc.dodge || 0,
    },
  };
}
