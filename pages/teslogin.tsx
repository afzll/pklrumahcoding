import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react'; // Import signIn dari next-auth

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State untuk melihat/senyembunyikan password
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setError('Email and password are required');
      return;
    }

    if (email === 'afzaalfyz@gmail.com' && password === 'rumahcoding') {
      alert('Login successful!');
      router.push('/Dashboard'); 
    } else {
      setError('Invalid email or password');
    }
  };

  // Fungsi untuk login dengan Google
  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/Dashboard' }); // Redirect ke /home setelah login berhasil
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          maxWidth: '500px',
          zIndex: 1,
          backgroundColor: 'white', // Warna box putih
          padding: '2rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          border: '2px solid #d1d5db' // Border abu-abu untuk box
        }}
      >
        <h2 style={{ color: 'black', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          Rumah Coding
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', color: 'black', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #d1d5db', // Border abu-abu
                borderRadius: '1.25rem'
              }}
              placeholder="Enter your email"
            />
          </div>
          <div style={{ marginBottom: '1rem', position: 'relative' }}>
            <label htmlFor="password" style={{ display: 'block', color: 'black', marginBottom: '0.5rem' }}>Password</label>
            <input
              type={showPassword ? 'text' : 'password'} // Input tipe berubah sesuai state showPassword
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '2px solid #d1d5db', // Border abu-abu
                borderRadius: '1.25rem',
                paddingRight: '2.5rem' // Beri ruang untuk ikon mata
              }}
              placeholder="Enter your password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)} // Ganti state saat diklik
              style={{
                position: 'absolute',
                right: '0.75rem',
                top: '65%',
                transform: 'translateY(-50%)',
                cursor: 'pointer',
                fontSize: '0,10rem'
              }}
            >
              {showPassword ? 'Hide' : 'Show'} {/* Gunakan ikon mata atau mata tertutup */}
            </span>
          </div>
          {error && <p style={{ color: '#f87171', textAlign: 'center', marginBottom: '1rem' }}>{error}</p>}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#409cff',
              color: 'white',
              padding: '0.4rem',
              borderRadius: '1.25rem',
              border: 'none',
              cursor: 'pointer',
              marginBottom: '1rem',
              fontSize: '1.40rem'
            }}
          >
            Login
          </button>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ flex: 1, borderBottom: '1px solid #ddd', margin: '0 1rem' }}></div>
            <span style={{ color: 'black', fontSize: '1rem' }}>or</span>
            <div style={{ flex: 1, borderBottom: '1px solid #ddd', margin: '0 1rem' }}></div>
          </div>
          <button
            onClick={handleGoogleLogin}
            style={{
              width: '100%',
              backgroundColor: '#fff',
              color: 'black',
              padding: '0.75rem',
              borderRadius: '4.25rem',
              border: '2px solid #d1d5db', // Border abu-abu
              cursor: 'pointer',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/images/google.png"
              alt="Google"
              style={{ width: '20px', height: '20px', marginRight: '0.5rem' }}
            />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}
