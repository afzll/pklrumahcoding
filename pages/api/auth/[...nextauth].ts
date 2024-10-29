import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    // Google Authentication
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Auth0 Authentication
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL!, // This is the base URL of the Auth0 tenant
    }),
  ],
  pages: {
    signIn: '/teslogin',  // Halaman kustom untuk login
  },
  
  secret: process.env.AUTH0_SECRET,  // Using Auth0 secret for signing tokens
});
