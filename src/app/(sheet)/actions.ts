"use server";

import { sql } from "@vercel/postgres";
import {
  CharacterAttributes,
  CharacterProfile,
  StatusExtraValues,
  StatusValues,
} from "./definitions";

export async function uploadAvatar(imageUrl: string, id: string) {
  try {
    await sql`
        UPDATE sheet
        SET avatar = ${imageUrl}
        WHERE id = ${id}`;
  } catch (e) {
    return {
      message: "Database Error: Failed to update Avatar.",
    };
  }
}

export async function updateProfileInfo(
  newProfileInfo: Omit<CharacterProfile, "avatar">,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            player_name = ${newProfileInfo.playerName},
            character_name = ${newProfileInfo.characterName},
            character_class = ${newProfileInfo.characterClass},
            character_path = ${newProfileInfo.characterPath},
            nex = ${newProfileInfo.nex}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Profile Info.",
    };
  }
}

export async function updateAttributesInfo(
  newAttributesInfo: CharacterAttributes,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            attribute_agi = ${newAttributesInfo.agi},
            attribute_for = ${newAttributesInfo.for},
            attribute_int = ${newAttributesInfo.int},
            attribute_pre = ${newAttributesInfo.pre},
            attribute_vig = ${newAttributesInfo.vig}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Attributes Info.",
    };
  }
}

export async function updateHealthStatusInfo(
  newHealthStatus: StatusValues,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            current_health = ${newHealthStatus.currentValue},
            max_health = ${newHealthStatus.maxValue},
            extra_health = ${newHealthStatus.extra}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Health Status.",
    };
  }
}

export async function updateSanityStatusInfo(
  newSanityStatus: StatusValues,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            current_sanity = ${newSanityStatus.currentValue},
            max_sanity = ${newSanityStatus.maxValue},
            extra_sanity = ${newSanityStatus.extra}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Sanity Status.",
    };
  }
}

export async function updateEffortStatusInfo(
  newEffortStatus: StatusValues,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            current_effort = ${newEffortStatus.currentValue},
            max_effort = ${newEffortStatus.maxValue},
            extra_effort = ${newEffortStatus.extra}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Effort Status.",
    };
  }
}

export async function updateStatusExtraInfo(
  newStatusExtraValues: StatusExtraValues,
  id: string
) {
  try {
    await sql`
          UPDATE sheet
          SET 
            defense = ${newStatusExtraValues.defense},
            speed = ${newStatusExtraValues.speed},
            block = ${newStatusExtraValues.block},
            dodge = ${newStatusExtraValues.dodge}
          WHERE id = ${id}`;
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Attributes Info.",
    };
  }
}
