import React, { useState } from 'react';
import { useRouter } from 'next/router';
import LanguagePopup from '../pages/LanguagePopup'; 
import SharePopup from '../pages/SharePopup'; 

const DesignPreview: React.FC = () => {
  const router = useRouter();
  const { imageSrc, text } = router.query; // Get image source and text from router query
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN'); 
  const [showSharePopup, setShowSharePopup] = useState(false); 

  const handleImageClick = () => {
    router.push('/Dashboard'); 
  };  

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    togglePopup(); 
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh', backgroundColor: '#FFFF', position: 'relative' }}>
      <img 
        src="/images/RC.png" 
        alt="Logo"
        style={{ position: 'absolute', top: '20px', left: '120px', cursor: 'pointer', width: '90px', height: '55px' }}
        onClick={handleImageClick}
      />

      <img 
        src="/images/RC.png" 
        alt="Logo"
        style={{ position: 'absolute', top: '635px', right: '430px', cursor: 'pointer', width: '50px', height: '25px' }}
      />

      <div style={{ position: 'absolute', bottom: '90px', left: '420px', color: 'gray', fontSize: '12px' }}>
        Credential Id:
      </div>

      <div style={{ position: 'absolute', bottom: '90px', right: '490px', color: 'gray', fontSize: '12px' }}>
        Distributed by:
      </div>

      <div style={{ position: 'absolute', bottom: '10px', left: '150px', color: 'blue', fontSize: '15px', fontWeight: 'bold' }}>
        ISSUED TO
      </div>

      <div style={{ position: 'absolute', bottom: '10px', left: '550px', color: 'blue', fontSize: '15px', fontWeight: 'bold' }}>
        ISSUED BY
      </div>

      <div style={{ position: 'absolute', bottom: '-45px', left: '150px', color: 'black', fontSize: '25px', fontWeight: 'bold' }}>
        Ahmad Zuhair
      </div>

      <div style={{ position: 'absolute', bottom: '-45px', left: '550px', color: 'black', fontSize: '25px', fontWeight: 'bold' }}>
        Rumah Coding
      </div>

      <div style={{ position: 'absolute', bottom: '-155px', left: '550px', color: 'black', fontSize: '15px' }}>
        Description
      </div>

      <div style={{ position: 'absolute', bottom: '-195px', left: '550px', color: 'black', fontSize: '15px' }}>
        No information provided for this award.
      </div>

      <div style={{ position: 'absolute', bottom: '-95px', left: '150px' }}>
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

      {/* Displaying the selected image and text input */}
      {imageSrc && (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Design Preview</h1>
          <img
            src={imageSrc as string}
            alt="Selected Design"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          {text && <h2>{text}</h2>} {/* Displaying the input text */}
        </div>
      )}

      <LanguagePopup
        isVisible={showPopup}
        togglePopup={togglePopup}
        handleLanguageSelect={handleLanguageSelect}
        selectedLanguage={selectedLanguage}
      />

      <SharePopup isVisible={showSharePopup} togglePopup={toggleSharePopup} />
    </div>
  );
};

export default DesignPreview;
