// middleware.js
import { PrivateRoutes } from "./middlewares/PrivateRoutes";
import { NextResponse } from "next/server";
import { PublicRoute } from "./middlewares/PublicRoute";

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (pathname === "/new") {
    return PrivateRoutes(req);
  }

  if (pathname === "/auth/continue") {
    return PublicRoute(req);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/new", "/auth/continue"],
};
