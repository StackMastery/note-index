"use server";

import { auth } from "@/auth";
import { connectToDB } from "@/db/connectToDB";
import NewDocumentModel from "@/models/newDoc.model";
import { redirect } from "next/navigation";

export const createNewDocument = async (req) => {
  const session = await auth();

  if (!session || !session.user?.email) {
    console.error("User not authenticated or missing email");
    return;
  }

  try {
    await connectToDB();

    const newDoc = new NewDocumentModel({
      ...req,
      authorEmail: session.user.email,
    });

    const doc = await newDoc.save();
    return { succes: true, redirect: `/docs/${doc?._id}` };
  } catch (err) {
    console.error("Error creating document:", err);
  }
};
