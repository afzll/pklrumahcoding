// pages/_app.tsx
import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import '../styles/globals.css'; // Sesuaikan dengan path gaya global Anda

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
