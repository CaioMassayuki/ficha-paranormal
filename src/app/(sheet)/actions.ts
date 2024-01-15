"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { CharacterAttributes, CharacterProfile } from "./definitions";

// export async function createInvoice(formData: FormData) {
//     const validatedFields = {
//       customerId: formData.get('customerId'),
//       amount: formData.get('amount'),
//       status: formData.get('status'),
//     }

//     try {
//       await sql`
//     INSERT INTO invoices (customer_id, amount, status, date)
//     VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;
//     } catch (e) {
//       return {
//         message: 'Database Error: Failed to Create Invoice.',
//       };
//     }
//     revalidatePath('/dashboard/invoices');
//   }

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
