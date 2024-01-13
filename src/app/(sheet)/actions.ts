"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { CharacterInfo } from "./definitions";

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

export async function updateCharacterInfo(newCharacterInfo: Omit<CharacterInfo, 'id' | 'avatar'>, id: string) {
    try {
      await sql`
          UPDATE sheet
          SET 
            player_name = ${newCharacterInfo.player_name},
            character_name = ${newCharacterInfo.character_name},
            character_class = ${newCharacterInfo.character_class},
            character_path = ${newCharacterInfo.character_path},
            nex = ${newCharacterInfo.nex}
          WHERE id = ${id}`;
    } catch (e) {
        console.log(e)
      return {
        message: "Database Error: Failed to update Avatar.",
      };
    }
  }