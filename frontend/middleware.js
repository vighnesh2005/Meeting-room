// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/upcoming',
  '/previous',
  '/settings',
  '/profile',
  '/meetings(.*)',
]);

const isPublicRoute = createRouteMatcher([
  '/',
  '/login',
  '/signup',
  '/api(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) return;

  if (isProtectedRoute(req)) {
    await auth.protect(); // or unauthenticatedUrl: '/sign-in'
  }
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
