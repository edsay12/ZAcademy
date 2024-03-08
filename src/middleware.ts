import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if (req.nextUrl.pathname === "/auth" && req.nextauth.token) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
    if(req.nextUrl.pathname === "/dashboard" && req.nextauth.token?.role != "INSTRUCTOR"){
      return NextResponse.rewrite(new URL("/unauthorized", req.url));

    }
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/auth"],
};
