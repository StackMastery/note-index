import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function PublicRoute(req) {
  const session = await auth();

  if (session?.user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
