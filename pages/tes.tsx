import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Design: React.FC = () => {
  const router = useRouter();
  const [showDesignLine, setShowDesignLine] = useState(true);
  const [animationClass, setAnimationClass] = useState('');

  const handleDashboardClick = () => {
    setShowDesignLine(false);
    router.push('/Dashboard');
  };

  const handleDesignClick = () => {
    setShowDesignLine(true);
  };

  useEffect(() => {
    setShowDesignLine(true);
    setAnimationClass('animate-line');
    const timeout = setTimeout(() => {
      setAnimationClass('');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header
        style={{
          width: '100vw',
          padding: '1rem 0',
          textAlign: 'center',
          background: '#666',
          margin: '0',
          position: 'absolute',
          top: '0',
          right: '0',
          left: '0',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '2rem',
        }}
      >
        <img
          src="/images/RC.png"
          alt="Logo RC"
          style={{ width: '80px', height: '40px', marginRight: '7em', marginLeft: '4rem' }}
        />

        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
          <div
            onClick={handleDashboardClick}
            style={{
              cursor: 'pointer',
              color: '#fff',
              marginRight: '10rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              position: 'relative',
            }}
          >
            Dashboard
            <div
              style={{
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '4px',
                backgroundColor: '#fff',
                bottom: '-10px',
                left: '0',
              }}
            />
          </div>

          {/* Menambahkan teks "Template" dengan gambar di atasnya */}
          <div
            style={{
              textAlign: 'center', // Menyelaraskan teks ke tengah
              cursor: 'pointer',
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              position: 'relative',
              marginLeft: '10rem', // Menyisakan jarak antara "Dashboard" dan "Template"
            }}
            onClick={handleDesignClick}
          >
            {/* Gambar ditambahkan di sini */}
            <img
              src="/images/template.png" // Ganti dengan path yang sesuai
              alt="Template"
              style={{ width: '50px', height: '50px', display: 'block', margin: '0 auto 0.5rem' }} // Sesuaikan ukuran dan margin
            />
            Template
            {showDesignLine && (
              <div
                className={animationClass}
                style={{
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '4px',
                  backgroundColor: '#fff',
                  bottom: '-10px',
                  left: '0',
                  transition: 'width 0.5s ease-in-out',
                }}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Design;
