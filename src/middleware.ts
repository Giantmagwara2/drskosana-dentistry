// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Supported locales and default locale
const locales = ['en', 'fr', 'es']; // Add or remove locales as needed
const defaultLocale = 'en';

/**
 * Determines the best matching locale based on the request's `Accept-Language` header.
 */
function getLocale(request: NextRequest): string {
  const headers = Object.fromEntries(request.headers.entries());
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

/**
 * Middleware to handle locale redirection.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the current path already includes a supported locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // Redirect to the correct locale if no locale is present in the URL
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Continue processing the request if the locale is already present
  return NextResponse.next();
}

/**
 * Configuration for the middleware.
 * Ensures the middleware only runs on relevant paths.
 */
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - API routes
     * - Files in `_next/static` (static assets)
     * - Files in `_next/image` (image optimization)
     * - Favicon (`favicon.ico`)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};