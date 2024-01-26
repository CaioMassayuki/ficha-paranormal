"use server";

import { ObjectId } from "mongodb";
import {
  CharacterAttributes,
  CharacterProfile,
  StatusExtraValues,
  StatusValues,
} from "./definitions";
import { connectToDatabase } from "@/config/mongodb";

export async function uploadAvatar(imageUrl: string, id: string) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { 'profile.avatar': imageUrl } }
    );
  } catch (e) {
    return {
      message: "Database Error: Failed to update Avatar.",
    };
  }
}

export async function updateAttributesInfo(
  newAttributesInfo: CharacterAttributes,
  id: string
) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { attributes: newAttributesInfo } }
    );
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
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { "status.health": newHealthStatus } }
    );
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
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { "status.sanity": newSanityStatus } }
    );
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
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { "status.effort": newEffortStatus } }
    );
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
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { "status.extraStatus": newStatusExtraValues } }
    );
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Attributes Info.",
    };
  }
}

export async function updateProfileInfo(
  newProfileInfo: Omit<CharacterProfile, "avatar">,
  id: string
) {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection("sheet");
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { profile: newProfileInfo } }
    );
  } catch (e) {
    console.log(e);
    return {
      message: "Database Error: Failed to update Profile Info.",
    };
  }
}
