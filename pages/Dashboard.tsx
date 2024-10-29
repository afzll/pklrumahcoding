// pages/dashboard.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [showDesignLine, setShowDesignLine] = useState(false);

  const handleDesignClick = () => {
    setShowDesignLine(true);  
    router.push('/designFix'); 
  };

  const handleDashboardClick = () => {
    router.push('/dashboard'); 
  };

  return (
    <div style={{ padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header
        style={{
          width: '100vw',
          padding: '1rem 0',
          textAlign: 'center',
          background: '#0B192C',
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

          
          <div
            onClick={handleDesignClick}
            style={{
              cursor: 'pointer',
              color: '#fff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              position: 'relative',
            }}
          >
            Design
            {showDesignLine && (
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
            )}
          </div>
        </div>
      </header>

      
      <div style={{ marginTop: '100px' }}>
        <h2>Dashboard Page</h2>
      </div>
    </div>
  );
};

export default Dashboard;
