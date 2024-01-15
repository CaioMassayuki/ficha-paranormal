import { sql } from "@vercel/postgres";
import { CharacterInfo, CharacterInfoDoc } from "./definitions";
import { unstable_noStore as noStore } from 'next/cache';
import { characterInfo_DocToModel } from "../adapters/sheet";

export async function fetchSheetData(id: string): Promise<CharacterInfo> {
  noStore()
  try {
    const data = await sql<CharacterInfoDoc>`SELECT * FROM sheet WHERE id = ${id}`;
    return characterInfo_DocToModel(data.rows[0])
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
