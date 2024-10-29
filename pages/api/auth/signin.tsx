import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-blue-500 p-12 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">Sign In</h2>
        <button
          onClick={() => signIn('auth0')}
          className="w-full bg-green-500 text-white py-3 px-4 rounded hover:bg-green-600 mb-4"
        >
          Sign in with Auth0
        </button>
        <button
          onClick={() => signIn('google')}
          className="w-full bg-red-500 text-white py-3 px-4 rounded hover:bg-red-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
