import { uploadAvatar } from "@/app/(sheet)/actions";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");
  const id = searchParams.get("id");

  if (filename && request.body && id) {
    const blob = await put(filename, request.body, {
      access: "public",
    });

    const response = await uploadAvatar(blob.url, id)

    return NextResponse.json({blob, response});
  }

  return NextResponse.json({message: 'No file selected.'})
}
