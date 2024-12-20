import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const roleRoutes = ["/admin"];
const protectedRoutes = [...roleRoutes, "/admin/:*"];
const authRoutes = ["/auth"];
const homeRoutes = ["/"];

export async function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  const pathname = request.nextUrl.pathname;
  const cookieStore = await cookies();
  const accessToken = await cookieStore.get("token")?.value;
  const authUser = accessToken ? jwtDecode(accessToken) : null;

  const isAuthPath = authRoutes.some((route) => pathname.startsWith(route));
  const isRolePath = roleRoutes.some((route) => pathname.startsWith(route));
  const isHomePath = homeRoutes.includes(pathname);
  const isProtectedPath = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (authUser?.userId && authUser.role) {
    const userRolePath = `/${authUser.role.toLowerCase()}`;

    if (isRolePath && !pathname.startsWith(userRolePath)) {
      const currentPath = pathname.replace(
        new RegExp(roleRoutes.join("|")),
        userRolePath
      );
      if (roleRoutes.includes(userRolePath)) {
        return NextResponse.redirect(new URL(currentPath, request.url));
      }
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (isHomePath && roleRoutes.includes(userRolePath)) {
      return NextResponse.redirect(new URL(userRolePath, request.url));
    } else if (isAuthPath) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else if (isProtectedPath) {
    return NextResponse.redirect(new URL("/auth/admin/login", request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
