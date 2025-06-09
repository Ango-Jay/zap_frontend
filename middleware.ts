import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  const { pathname }: { pathname: string } = req.nextUrl;
  if (pathname == "/") {
    const signInUrl = new URL("/login", req.url);
    return NextResponse.redirect(signInUrl);
  }
  return NextResponse.next();
}
