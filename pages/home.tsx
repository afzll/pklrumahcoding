import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import RCImage from '../lib/images/RC.png'; 
import ArrowImage from '../lib/images/arrow.png'; 
import LogoinIcon from '../lib/images/logoin.png'; 
import SerImage from '../lib/images/ser.jpg'; 
import DownloadImage from '../lib/images/download.png'; 
import VerifyImage from '../lib/images/verify1.png'; 
import MailImage from '../lib/images/mail.png';
import CopyLinkImage from '../lib/images/copylink.png';
import ShareImage from '../lib/images/share.png';

const InfoPage: React.FC = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('EN');
  const router = useRouter();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    togglePopup();
  };

  const handleImageClick = () => {
    router.push('/Dashboard');
  };

  return (
    <div className="relative h-screen">
      {/* Gambar RC di pojok kiri atas */}
      <div className="absolute top-5 left-40">
        <Image
          src={RCImage}
          alt="RC Logo"
          width={100}
          height={150}
          style={{ cursor: 'pointer' }}
          onClick={handleImageClick}
        />
      </div>

      {/* Teks bahasa dan gambar dengan gaya kustom */}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '150px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '15px',
          color: 'black',
        }}
      >
        <span className="font-semibold">{selectedLanguage}</span>
        <Image
          src={ArrowImage}
          alt="Arrow Icon"
          width={15}
          height={20}
          onClick={togglePopup}
          style={{ cursor: 'pointer' }}
        />
      </div>

      {/* Gambar ser di tengah halaman */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src={SerImage}
          alt="Ser Image"
          width={900}
          height={900}
        />
      </div>

      {/* Teks kecil abu-abu dan gambar verify di kiri bawah */}
      <div
        style={{
          position: 'absolute',
          bottom: '120px',
          left: '380px',
          display: 'flex',
          alignItems: 'center',
          fontSize: '12px',
          color: 'gray',
        }}
      >
        <span style={{ marginRight: '5px' }}>Credential ID:</span>
        <Image
          src={VerifyImage}
          alt="Verify Icon"
          width={20}
          height={20}
        />
      </div>

      {/* Teks biru tosca di samping gambar verify */}
      <div
        style={{
          position: 'absolute',
          bottom: '120px',
          left: '470px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span style={{ marginLeft: '10px', fontSize: '12px', color: '#20B2AA' }}>
          05e945f0-77e0-4132-a017-f60250e1acb3
        </span>
      </div>

      {/* Gambar RC di kanan bawah */}
      <div
        style={{
          position: 'absolute',
          bottom: '110px',
          right: '400px',
        }}
      >
        <Image
          src={RCImage}
          alt="RC Logo"
          width={50}
          height={75}
        />
      </div>

      {/* Teks "ISSUED TO" di kiri bawah dengan warna biru */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px', 
          left: '150px', 
          color: 'blue', 
          fontSize: '16px',
          fontWeight: 'bold', 
        }}
      >
        ISSUED TO
      </div>

      {/* Teks "ISSUED BY" di kiri bawah dengan warna biru */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px', 
          left: '650px',  
          color: 'blue',
          fontSize: '16px', 
          fontWeight: 'bold', 
        }}
      >
        ISSUED BY
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-15px', 
          left: '650px',  
          color: 'black', 
          fontSize: '26px', 
          fontWeight: 'bold', 
        }}
      >
        Rumah Coding
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-110px', 
          left: '650px',  
          color: 'black', 
          fontSize: '15px', 
          fontWeight: 'semibold', 
        }}
      >
        Description
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-180px', 
          left: '150px',  
          color: 'black', 
          fontSize: '15px', 
          fontWeight: 'semibold', 
        }}
      >
        Want to report a typo or a mistake?
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-220px', 
          left: '150px',  
          display: 'flex',
          alignItems: 'center',
          color: 'black', 
          fontSize: '15px', 
          cursor: 'pointer', 
          fontWeight: 'semibold', 
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 123, 255, 0.6)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.3)'}
      >
        <Image
          src={MailImage} 
          alt="Mail Icon"
          width={20}
          height={20}
          style={{ marginRight: '10px' }} 
        />
        Contact Issuer
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '-160px', 
          left: '650px',  
          color: 'black',
          fontSize: '15px', 
          fontWeight: 'semibold', 
        }}
      >
        No information provided for this award.
      </div>

      {/* Teks "Ahmad Zuhair" di bawah teks "ISSUED TO" */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15px', 
          left: '150px',  
          color: 'black', 
          fontSize: '26px', 
          fontWeight: 'bold', 
        }}
      >
        Ahmad Zuhair
      </div>

      {/* Tombol biru dengan ikon share dan teks */}
      <button
        style={{
          position: 'absolute',
          bottom: '-70px', 
          left: '150px',  
          backgroundColor: '#007BFF', 
          color: 'white', 
          border: 'none',
          borderRadius: '7px', 
          padding: '10px 90px', 
          fontSize: '14px', 
          fontWeight: 'semibold',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          cursor: 'pointer', 
        }}
        onClick={() => alert('Share button clicked')} 
      >
        <Image
          src={ShareImage}
          alt="Share Icon"
          width={20}
          height={20}
          style={{ marginRight: '10px' }}
        />
        Share Your Award
      </button>

      <button
        style={{
          position: 'absolute',
          bottom: '-130px',
          left: '150px',
          backgroundColor: '#FFFF',
          color: 'black',
          border: 'gray',
          borderRadius: '7px',
          padding: '10px 10px',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'box-shadow 0.3s ease',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/api/auth/linkedin'} 
      >
        <Image
          src={LogoinIcon}
          alt="Logoin Icon"
          width={20}
          height={20}
          style={{ marginRight: '10px' }}
        />
        Add to LinkedIn Profile
      </button>

      {/* Popup untuk pilihan bahasa */}
      {isPopupVisible && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            padding: '20px',
            zIndex: 100,
          }}
        >
          <h3>Pilih Bahasa</h3>
          <ul>
            <li onClick={() => handleLanguageSelect('EN')}>English</li>
            <li onClick={() => handleLanguageSelect('ID')}>Bahasa Indonesia</li>
            <li onClick={() => handleLanguageSelect('FR')}>Français</li>
            <li onClick={() => handleLanguageSelect('DE')}>Deutsch</li>
            {/* Tambahkan pilihan bahasa lainnya sesuai kebutuhan */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InfoPage;
