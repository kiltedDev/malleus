export { default } from 'next-auth/middleware';
export const config = {
  matcher: ['/characters/:path*'],
};
