import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import SharePopup from '../pages/SharePopup'; 
import LanguagePopup from '../pages/LanguagePopup'; 

const DesignPreview: React.FC = () => {
  const router = useRouter();
  const { image, text } = router.query;

  const [showPopup, setShowPopup] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [copySuccess, setCopySuccess] = useState(false);
  

  const togglePopup = () => setShowPopup(!showPopup);
  const toggleSharePopup = () => setShowSharePopup(!showSharePopup);
  const handleLanguageSelect = (language: string) => setSelectedLanguage(language);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = image as string; // URL dari gambar
    link.download = 'downloaded_image.png'; // Nama file saat diunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '130px' }}>
      {image && (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div>
            <img
              src={image as string}
              alt="Selected Design"
              style={{ maxWidth: '410%', maxHeight: '500px', height: 'auto', width: 'auto' }}
            />
          </div>

          <div style={{ position: 'absolute', top: '610px', left: '-200px' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '24px' }}>{text}</h2>
          </div>

          <div style={{ position: 'absolute', bottom: '-40px', right: '100px', color: 'gray', fontSize: '12px' }}>
            Distributed by:
          </div>

          <div style={{ position: 'absolute', bottom: '-100px', left: '-200px', color: 'blue', fontSize: '15px', fontWeight: 'bold' }}>
            ISSUED TO
          </div>

          <div style={{ position: 'absolute', bottom: '-100px', left: '250px', color: 'blue', fontSize: '15px', fontWeight: 'bold' }}>
            ISSUED BY
          </div>

          <div style={{ position: 'absolute', bottom: '-140px', left: '250px', color: 'black', fontSize: '24px', fontWeight: 'bold' }}>
            RUMAH CODING
          </div>

          <div style={{ position: 'absolute', bottom: '-205px', left: '250px', color: 'black', fontSize: '15px' }}>
            Description
          </div>

          <div style={{ position: 'absolute', bottom: '-40px', left: '8px', color: 'gray', fontSize: '13px' }}>
            Credential Id:
          </div>

          <div style={{ position: 'absolute', bottom: '-245px', left: '250px', color: 'black', fontSize: '15px' }}>
            No information provided for this award.
          </div>

          {/* Tombol Share */}
          <div style={{ position: 'absolute', bottom: '-200px', left: '-200px' }}>
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'blue',
                color: 'white',
                border: 'none',
                borderRadius: '9px',
                padding: '8px 90px',
                cursor: 'pointer',
              }}
              onClick={toggleSharePopup} 
            >
              <img 
                src="/images/share.png" 
                alt="Share Icon"
                style={{ width: '20px', height: '20px', marginRight: '8px' }} 
              />
              Share your award
            </button>
          </div>

          {/* Tombol Download */}
          <div style={{ position: 'absolute', bottom: '-250px', left: '-7px' }}>
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white', // Latar belakang putih
                color: 'black',
                border: '2px solid transparent', // Border transparan
                borderRadius: '10px',
                padding: '9px 20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease', // Transisi
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid blue'; // Border saat hover
                e.currentTarget.style.color = 'white'; // Ubah warna teks
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent'; // Kembali ke border transparan
                e.currentTarget.style.backgroundColor = 'white'; // Kembali ke latar belakang putih
                e.currentTarget.style.color = 'black'; // Kembali ke warna teks hitam
              }}
              onClick={handleDownload} 
            >
              <img 
                src="/images/download.png" 
                alt="Download Icon"
                style={{ width: '20px', height: '20px', marginRight: '1px' }} 
              />
            </button>
          </div>

          {/* Tombol Copy Link */}
          <div style={{ position: 'absolute', bottom: '-250px', left: '60px' }}>
            <button 
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white', // Latar belakang putih
                color: 'black',
                border: '2px solid transparent', // Border transparan
                borderRadius: '10px',
                padding: '9px 20px',
                cursor: 'pointer',
                transition: 'all 0.3s ease', // Transisi
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.border = '2px solid blue'; // Border saat hover
                e.currentTarget.style.color = 'white'; // Ubah warna teks
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.border = '2px solid transparent'; // Kembali ke border transparan
                e.currentTarget.style.backgroundColor = 'white'; // Kembali ke latar belakang putih
                e.currentTarget.style.color = 'black'; // Kembali ke warna teks hitam
              }}
              onClick={handleCopyLink}
            >
              <img 
                src="/images/copylink.png" 
                alt="Copy Icon"
                style={{ width: '20px', height: '20px', marginRight: '1px' }} 
              />
            </button>
            {copySuccess && <span style={{ marginLeft: '10px', color: 'green' }}>Link copied!</span>}
          </div>

          {/* Komponen Popup */}
          <LanguagePopup
            isVisible={showPopup}
            togglePopup={togglePopup}
            handleLanguageSelect={handleLanguageSelect}
            selectedLanguage={selectedLanguage}
          />

          <SharePopup isVisible={showSharePopup} togglePopup={toggleSharePopup} />
        </div>
      )}

      {/* Link ke Dashboard */}
      <Link href="/Dashboard"> 
        <img
          src="/images/RC.png" 
          alt="Go to Dashboard"
          style={{
            position: 'absolute', 
            top: '20px', 
            left: '150px', 
            cursor: 'pointer',
            width: '100px', 
            height: 'auto',
          }}
        />
      </Link>

      {/* Gambar rc.png di bawah kanan */}
      <img
        src="/images/rc.png" 
        alt="RC Logo"
        style={{
          position: 'absolute',
          bottom: '140px', 
          right: '410px', 
          width: '80px', 
          height: 'auto',
        }}
      />
    </div>
  );
};

export default DesignPreview;
