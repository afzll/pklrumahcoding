import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Background from './Background';
import Elements from './Elements';
import Texts from './Texts';
import Attributes from './Attributes';
import QrCodes from './QrCodes';
import DesignTemplate from './DesignTemplate'; // Pastikan ini diimpor

interface DesignProps {
  initialTab?: string;
}

const Design: React.FC<DesignProps> = ({ initialTab = 'Texts' }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(initialTab);
  const [showAnimation, setShowAnimation] = React.useState(false);
  const [activeBox, setActiveBox] = React.useState('');

  useEffect(() => {
    setActiveBox(activeTab);
  }, [activeTab]);

  const handleDashboardClick = () => {
    setActiveTab('Dashboard');
    router.push('/Dashboard');
    setShowAnimation(false);
    setActiveBox('');
  };

  const handleDesignClick = () => {
    setActiveTab('Design');
    setShowAnimation(true);
  };

  const handleTemplateClick = () => {
    setActiveTab('Templates');
    setActiveBox('Templates');
    router.push('/DesignTemplate'); // Arahkan ke halaman DesignTemplate
  };

  const handleBackgroundClick = () => {
    setActiveTab('Background');
    setActiveBox('Background');
    router.push('/Background'); 
  };

  const handleElementsClick = () => {
    setActiveTab('Elements');
    setActiveBox('Elements');
    router.push('/Elements'); // Arahkan ke halaman Elements
  };

  const handleTextsClick = () => {
    setActiveTab('Texts');
    setActiveBox('Texts');
    router.push('/Texts'); // Arahkan ke halaman Texts
  };

  const handleAttributesClick = () => {
    setActiveTab('Attributes');
    setActiveBox('Attributes');
    router.push('/Attributes'); // Arahkan ke halaman Attributes
  };

  const handleQrCodesClick = () => {
    setActiveTab('QR Codes');
    setActiveBox('QR Codes');
    router.push('/QRCodes');
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'Background':
        return <Background />;
      case 'Elements':
        return <Elements />;
      case 'Texts':
        return <Texts />;
      case 'Attributes':
        return <Attributes />;
      case 'QR Codes':
        return <QrCodes />;
      case 'Templates':
      default:
        return <DesignTemplate />;
    }
  };

  const renderBox = (label: string) => {
    const isActive = activeBox === label;

    let imageSrc = '';
    switch (label) {
      case 'Templates':
        imageSrc = '/images/Icon Template.png';
        break;
      case 'Background':
        imageSrc = '/images/Icon Brush.png';
        break;
      case 'Elements':
        imageSrc = '/images/Icon Element.png';
        break;
      case 'Texts':
        imageSrc = '/images/Icon Text.png';
        break;
      case 'Attributes':
        imageSrc = '/images/Icon Atribute.png';
        break;
      case 'QR Codes':
        imageSrc = '/images/Icon Qr.png';
        break;
      default:
        imageSrc = '';
    }

    return (
      <div
        onClick={() => {
          if (label === 'Templates') handleTemplateClick();
          else if (label === 'Background') handleBackgroundClick();
          else if (label === 'Elements') handleElementsClick();
          else if (label === 'Texts') handleTextsClick();
          else if (label === 'Attributes') handleAttributesClick();
          else if (label === 'QR Codes') handleQrCodesClick();
        }}
        style={{
          cursor: 'pointer',
          padding: '0.5rem',
          marginBottom: '-0.1rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '80px',
            height: '70px',
            backgroundColor: isActive ? '#add8e6' : '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            transition: 'background-color 0.3s ease, transform 0.3s ease',
            transform: isActive ? 'scale(1.1)' : 'scale(1)',
            boxShadow: isActive ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
          }}
        >
          <img
            src={imageSrc}
            alt={label}
            style={{ width: '30px', height: '30px' }}
          />
          <span style={{ marginTop: '0.5rem', fontSize: '13px', fontWeight: 'bold' }}>
            {label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <aside style={{ width: '200px', padding: '1rem', marginTop: '250px', marginLeft: '10px' }}>
        {renderBox('Templates')}
        {renderBox('Background')}
        {renderBox('Elements')}
        {renderBox('Texts')}
        {renderBox('Attributes')}
        {renderBox('QR Codes')}
      </aside>

      <div style={{ flex: 1, padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px' }}>
        <header style={{
          width: '100%',
          padding: '1rem 0',
          textAlign: 'center',
          background: '#0B192C',
          margin: '0',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '2rem',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10,
        }}>
          <img
            src="/images/RC.png"
            alt="Logo RC"
            style={{ width: '80px', height: '40px', marginRight: '7em', marginLeft: '4rem' }}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '1.5rem' }}>
            <div onClick={handleDashboardClick} style={{ cursor: 'pointer', color: '#fff', marginRight: '10rem', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative' }}>
              Dashboard
            </div>

            <div onClick={handleDesignClick} style={{ cursor: 'pointer', color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', position: 'relative' }}>
              Design
              {showAnimation && (
                <span style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  animation: 'bounce 0.5s infinite alternate',
                }} />
              )}
            </div>
          </div>
        </header>

      </div>
    </div>
  );
};

export default Design;
