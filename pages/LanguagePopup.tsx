import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ArrowImage from '../public/images/arrow.png';

interface LanguagePopupProps {
  isVisible: boolean;
  togglePopup: () => void;
  handleLanguageSelect: (language: string) => void;
  selectedLanguage: string;
}

const LanguagePopup: React.FC<LanguagePopupProps> = ({
  isVisible,
  togglePopup,
  handleLanguageSelect,
  selectedLanguage,
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  // Event listener to close the popup when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        togglePopup(); // Close popup
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, togglePopup]);

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: '20px',
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

      {isVisible && (
        <div
          ref={popupRef}
          style={{
            position: 'absolute',
            top: '40px',
            right: '150px',
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '10px',
            borderRadius: '5px',
            zIndex: 100,
            minWidth: '250px', // Menambah lebar minimum popup
            maxHeight: '700px', // Membatasi tinggi maksimum
            
          }}
        >
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li
              onClick={() => handleLanguageSelect('AR')}
              style={{ padding: '5px 0' }} // Memberikan jarak antar teks
            >
              Arabic (عربى)
            </li>
            <li
              onClick={() => handleLanguageSelect('EN')}
              style={{ padding: '5px 0' }}
            >
              English (US)
            </li>
            <li
              onClick={() => handleLanguageSelect('FI')}
              style={{ padding: '5px 0' }}
            >
              Finnish (Suomi)
            </li>
            <li
              onClick={() => handleLanguageSelect('FR')}
              style={{ padding: '5px 0' }}
            >
              French (Français)
            </li>
            <li
              onClick={() => handleLanguageSelect('DE')}
              style={{ padding: '5px 0' }}
            >
              German (Deutsch)
            </li>
            <li
              onClick={() => handleLanguageSelect('GR')}
              style={{ padding: '5px 0' }}
            >
              Greek (Ελληνικά)
            </li>
            <li
              onClick={() => handleLanguageSelect('IT')}
              style={{ padding: '5px 0' }}
            >
              Italian (Italiano)
            </li>
            <li
              onClick={() => handleLanguageSelect('KO')}
              style={{ padding: '5px 0' }}
            >
              Korean (한국어)
            </li>
            <li
              onClick={() => handleLanguageSelect('PL')}
              style={{ padding: '5px 0' }}
            >
              Polish (Polski)
            </li>
            <li
              onClick={() => handleLanguageSelect('PT')}
              style={{ padding: '5px 0' }}
            >
              Portuguese (Português)
            </li>
            <li
              onClick={() => handleLanguageSelect('ZH')}
              style={{ padding: '5px 0' }}
            >
              Simplified Chinese (简体中文)
            </li>
            <li
              onClick={() => handleLanguageSelect('ES')}
              style={{ padding: '5px 0' }}
            >
              Spanish (Español)
            </li>
            <li
              onClick={() => handleLanguageSelect('UA')}
              style={{ padding: '5px 0' }}
            >
              Ukrainian (Українська)
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguagePopup;
