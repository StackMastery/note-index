import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function PrivateRoutes(req) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.redirect(new URL("/api/continue", req.url));
  }

  return NextResponse.next();
}
