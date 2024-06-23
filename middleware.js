// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";

// export function middleware(request) {
//   const session = request.cookies.get("session");

//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
