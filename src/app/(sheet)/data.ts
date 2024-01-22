import { CharacterInfo } from "./definitions";
import { unstable_noStore as noStore } from "next/cache";
import { connectToDatabase } from "@/config/mongodb";
import { ObjectId } from "mongodb";

export async function mongoFetchSheetData(
  // REMOVE STRING
  id: string = "65aa9fbc6caf0f25d12a1db9"
): Promise<CharacterInfo | null> {
  noStore();
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    const response = await collection.findOne<CharacterInfo>({
      _id: new ObjectId(id),
    });
    if(response) {
      console.log(response)
      return { ...response, _id: response._id.toString() };
    }
    return null
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch sheet data.");
  }
}
