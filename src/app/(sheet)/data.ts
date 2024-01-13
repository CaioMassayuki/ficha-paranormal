import { sql } from "@vercel/postgres";
import { CharacterInfo } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchCharacterInfo(id: string) {
  noStore()
  try {
    const data = await sql<CharacterInfo>`SELECT * FROM sheet WHERE id = ${id}`;
    return data.rows[0]
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
