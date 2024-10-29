import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const DesignFix: React.FC = () => {
  const router = useRouter();
  const [showAnimation, setShowAnimation] = useState(false);
  const [lineAnimation, setLineAnimation] = useState(false);
  const [content, setContent] = useState<JSX.Element | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setLineAnimation(true);
    handleButtonClick('Template'); // Memanggil fungsi untuk mengklik tombol Template
    setSelectedImage('/images/ser1.png'); // Mengatur gambar yang dipilih secara otomatis
  }, []);

  const handleDashboardClick = () => {
    router.push('/Dashboard');
  };

  const handleDesignClick = () => {
    setShowAnimation(!showAnimation);
  };

  const handleButtonClick = (buttonType: string) => {
    if (buttonType === 'Template') {
      setContent(
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', width: '400px' }}>
          <img
            src="/images/ser1.png"
            alt="Ser 1"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser1.png')}
          />
          <img
            src="/images/ser5.png"
            alt="Ser 5"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser5.png')}
          />
          <img
            src="/images/ser6.png"
            alt="Ser 6"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser6.png')}
          />
          <img
            src="/images/ser4.png"
            alt="Ser 4"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser4.png')}
          />
          <img
            src="/images/ser9.png"
            alt="Ser 9"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser9.png')}
          />
          <img
            src="/images/ser12.png"
            alt="Ser 12"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/ser12.png')}
          />
          <img
            src="/images/Template1.png"
            alt="Template 1"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/Template1.png')}
          />
          <img
            src="/images/Template2.png"
            alt="Template 2"
            style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
            onClick={() => handleImageClick('/images/Template2.png')}
          />
        </div>
      );
    } else {
      setContent(<p>{buttonType} Content</p>);
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseImage = () => {
    setSelectedImage(null);
  };

  const handleCreateDesign = () => {
    // Navigasi ke halaman design dengan parameter gambar dan teks
    router.push({
      pathname: '/designPreview',
      query: { image: selectedImage, text: inputText }, // Mengirimkan URL gambar dan teks sebagai query
    });
  };
  

  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#F0F0F0',
    }}>
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
                animation: 'bounce 0.5s infinite alternate',
              }} />
            )}
            {lineAnimation && (
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '3px',
                backgroundColor: '#fff',
                animation: 'lineGrow 0.5s ease-out forwards',
              }} />
            )}
          </div>
        </div>
      </header>

      <div style={{
        width: '90%',
        height: '140px',
        backgroundColor: '#fff',
        marginTop: '100px',
        borderRadius: '8px',
        padding: '20px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <div>
          <h2 style={{ margin: 0, marginTop: '-40px' }}>Designs / Create Certificate Design</h2>
          <p style={{
            margin: '5px 0 0',
            position: 'absolute',
            left: '20px',
            top: '80px',
            fontSize: '1.4rem',
            fontWeight: 'bold',
          }}>
            Create Certificate Design
          </p>
        </div>

        <input
        type="text"
        placeholder="Masukkan teks..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{
          width: '250px',
          marginTop: '70px',
          marginRight: '-600px',
          height: '35px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          padding: '0 10px',
          fontSize: '1rem',
        }}
      />

<button
        onClick={handleCreateDesign}
        style={{
          marginRight: '40px',
          marginTop: '65px',
          height: '35px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '0 20px',
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        Create Design
      </button>
    </div>

    

      <div style={{
        width: '90%',
        height: '700px',
        backgroundColor: '#fff',
        marginTop: '30px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '20px',
        position: 'relative',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}>
          {/* Tombol Template */}
          <button
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px',
              cursor: 'pointer',
              margin: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100px',
              height: '50px',
              transition: 'transform 0.2s',
            }}
            onClick={() => {
              handleButtonClick('Template');
              const button = document.getElementById('templateButton');
              if (button) {
                button.style.transform = 'scale(0.95)'; // Mengurangi ukuran saat diklik
                setTimeout(() => {
                  button.style.transform = 'scale(1)'; // Mengembalikan ukuran
                }, 150);
              }
            }}
            id="templateButton"
          >
            <img src="/images/Icon Template.png" alt="Template Icon" style={{ width: '16px', height: '16px', marginBottom: '5px' }} />
            Template
          </button>

          {/* Tombol Background */}
          <button
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px',
              cursor: 'pointer',
              margin: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100px',
              height: '50px',
              transition: 'transform 0.2s',
            }}
            onClick={() => handleButtonClick('Background')}
          >
            <img src="/images/background-icon.png" alt="Background Icon" style={{ width: '16px', height: '16px', marginBottom: '5px' }} />
            Background
          </button>

          {/* Tombol Elements */}
          <button
            style={{
              backgroundColor: '#fff',
              color: '#000',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '5px',
              cursor: 'pointer',
              margin: '10px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100px',
              height: '50px',
              transition: 'transform 0.2s',
            }}
            onClick={() => handleButtonClick('Elements')}
          >
            <img src="/images/elements-icon.png" alt="Elements Icon" style={{ width: '16px', height: '16px', marginBottom: '5px' }} />
            Elements
          </button>
        </div>

        <div style={{ marginLeft: '30px' }}>
          {content}
        </div>
      </div>

      {selectedImage && (
  <div
    style={{
      position: 'absolute', // Pastikan posisi absolut
      top: '40%', // Naik ke atas halaman
      left: '65%', // Geser ke kanan
      transform: 'translate(-50%, 0)', // Hapus translateY untuk mengangkat gambar
      zIndex: 10,
      cursor: 'pointer',
    }}
    onClick={handleCloseImage} // Menutup gambar saat diklik
  >
    <img
      src={selectedImage}
      alt="Selected"
      style={{
        maxWidth: '130%',
        maxHeight: '40%', // Ketinggian gambar diatur ke 40%
        marginLeft: '0', // Atur margin kiri ke 0
      }}
    />
  </div>
)}


    </div>
  );
};

export default DesignFix;
