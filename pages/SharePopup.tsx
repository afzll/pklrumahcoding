import React, { useState } from 'react';

interface SharePopupProps {
  isVisible: boolean;
  togglePopup: () => void;
}

const SharePopup: React.FC<SharePopupProps> = ({ isVisible, togglePopup }) => {
  const [selected, setSelected] = useState<string>('Social');
  const [text, setText] = useState<string>('');
  const [isHoveredLinkedIn, setIsHoveredLinkedIn] = useState<boolean>(false);
  const [isHoveredFacebook, setIsHoveredFacebook] = useState<boolean>(false);
  const [isHoveredTwitter, setIsHoveredTwitter] = useState<boolean>(false);
  const [isHoveredEmail, setIsHoveredEmail] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);

  if (!isVisible) return null;

  const handleTextClick = (type: string) => {
    setSelected(type);
    setText('');
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleBoxClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        width: '80%',
        maxWidth: '500px',
        height: '490px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <span onClick={togglePopup} style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          cursor: 'pointer',
          fontSize: '20px',
          fontWeight: 'bold',
        }}>
          &times;
        </span>

        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <h2
            style={{
              marginRight: '20px',
              cursor: 'pointer',
              position: 'relative',
              color: selected === 'Social' ? 'blue' : 'black',
            }}
            onClick={() => handleTextClick('Social')}
          >
            Social
            {selected === 'Social' && (
              <div style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'blue',
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                transition: 'width 0.3s ease',
              }} />
            )}
          </h2>
          <p
            style={{
              cursor: 'pointer',
              position: 'relative',
              color: selected === 'Email' ? 'blue' : 'black',
            }}
            onClick={() => handleTextClick('Email')}
          >
            Email Emblem
            {selected === 'Email' && (
              <div style={{
                width: '100%',
                height: '2px',
                backgroundColor: 'blue',
                position: 'absolute',
                bottom: '-5px',
                left: 0,
                transition: 'width 0.3s ease',
              }} />
            )}
          </p>
        </div>

        {selected === 'Email' && (
          <div style={{ marginTop: '20px' }}>
            
            <div
              onMouseEnter={() => setIsHoveredEmail(true)}
              onMouseLeave={() => setIsHoveredEmail(false)}
              style={{
                marginTop: '20px',
                textAlign: 'left',
                border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
                padding: '10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                backgroundColor: isHoveredEmail ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
              }}>
                <img
                  src="/images/gmail logo.png" // Ganti dengan path gambar email.png Anda
                  alt="Email"
                  style={{ width: '30px', height: '30px', marginRight: '20px' }} // Gaya untuk gambar
                />
                <span style={{ textAlign: 'left', marginBottom: '12px' }}>Gmail Signature</span>
              </div>
              <p style={{
                fontSize: '12px',
                marginLeft: '50px',
                width: '100%',
                marginTop: '-15px',
                marginBottom: '0px'
              }}>
                 See how to add your credential to a signature
              </p>
            </div>

            <div
              onMouseEnter={() => setIsHoveredFacebook(true)}
              onMouseLeave={() => setIsHoveredFacebook(false)}
              style={{
                marginTop: '20px',
                textAlign: 'left',
                border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
                padding: '10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                backgroundColor: isHoveredFacebook ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
              }}>
                <img
                  src="/images/logo outlook.png"
                  alt="Facebook"
                  style={{ width: '30px', height: '30px', marginRight: '12px' }}
                />
                <span style={{ textAlign: 'left', marginBottom: '15px', marginLeft: '10px' }}>Outlook Signature</span>
              </div>
              <p style={{
                fontSize: '12px',
                marginLeft: '54px',
                width: '100%',
                marginTop: '-22px',
                marginBottom: '0px'
              }}>
                See how to add your credential to a signature
              </p>
            </div>
            <div
  style={{
    marginTop: '20px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-end', 
  }}
>
  <img
    src="https://vectorified.com/images/share-link-icon-35.png"
    alt="react logo"
    style={{ width: '30px', height: '30px', marginLeft: '100px' }} 
  />
  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Copy Link</p>
</div>
         </div>
        )}

        {selected === 'Social' && (
          <>
            <div
              onClick={handleBoxClick}
              style={{
                marginTop: '30px',
                textAlign: 'left',
                border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
                padding: '10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                backgroundColor: isHoveredLinkedIn ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
              }}
              onMouseEnter={() => setIsHoveredLinkedIn(true)}
              onMouseLeave={() => setIsHoveredLinkedIn(false)}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
                marginBottom: '0px',
              }}>
                <img
                  src="/images/linkedln.png"
                  alt="LinkedIn"
                  style={{ width: '30px', height: '30px', marginRight: '20px' }}
                />
                <span style={{ textAlign: 'left', marginBottom: '12px' }}>Share on LinkedIn</span>
              </div>
              <p style={{
                fontSize: '12px',
                marginLeft: '50px',
                width: '100%',
                marginTop: '-15px',
                marginBottom: '0px'
              }}>
                Share your credential in a LinkedIn post
              </p>
            </div>

            
            <div
              onMouseEnter={() => setIsHoveredFacebook(true)}
              onMouseLeave={() => setIsHoveredFacebook(false)}
              style={{
                marginTop: '20px',
                textAlign: 'left',
                border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
                padding: '10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                backgroundColor: isHoveredFacebook ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
              }}>
                <img
                  src="/images/facebook.png"
                  alt="Facebook"
                  style={{ width: '45px', height: '45px', marginRight: '12px' }}
                />
                <span style={{ textAlign: 'left', marginBottom: '12px', marginLeft: '-3px' }}>Share on Facebook</span>
              </div>
              <p style={{
                fontSize: '12px',
                marginLeft: '54px',
                width: '100%',
                marginTop: '-15px',
                marginBottom: '0px'
              }}>
                Share your credential in a Facebook post
              </p>
            </div>

           
            <div
              onMouseEnter={() => setIsHoveredTwitter(true)}
              onMouseLeave={() => setIsHoveredTwitter(false)}
              style={{
                marginTop: '20px',
                textAlign: 'left',
                border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
                padding: '10px',
                borderRadius: '5px',
                transition: 'border-color 0.3s ease, background-color 0.3s ease',
                backgroundColor: isHoveredTwitter ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '5px 0',
                cursor: 'pointer',
              }}>
                <img
                  src="/images/x logo.png"
                  alt="Twitter"
                  style={{ width: '50px', height: '30px', marginRight: '10px' }}
                />
                <span style={{ textAlign: 'left', marginBottom: '12px' }}>Share on X</span>
              </div>
              <p style={{
                fontSize: '12px',
                marginLeft: '60px',
                width: '100%',
                marginTop: '-15px',
                marginBottom: '0px'
              }}>
                Share your credential in a X post
              </p>
            </div>

<div
  style={{
    marginTop: '20px',
    textAlign: 'left',
    border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
    padding: '10px',
    borderRadius: '5px',
    width: '60px', 
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0px', 
      cursor: 'pointer',
    }}
  >
    <img
      src="https://logodownload.org/wp-content/uploads/2017/04/facebook-messenger-logo-0-1.png"
      alt="Messenger"
      style={{ width: '50px', height: '40px', marginRight: '10px' }} 
    />
  </div>
</div>

<div
  style={{
    marginTop: '-63px',
    textAlign: 'left',
    marginLeft: '120px',
    border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
    padding: '10px',
    borderRadius: '5px',
    width: '60px',
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0px', 
      cursor: 'pointer',
    }}
  >
    <img
      src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png-0.png"
      alt="WhatsApp"
      style={{ width: '50px', height: '40px', marginRight: '80px' }} 
    />
  </div>
</div>


<div
  style={{
    marginTop: '-63px',
    marginLeft: '240px',
    textAlign: 'left',
    border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
    padding: '10px',
    borderRadius: '5px',
    width: '60px', 
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0px',
      cursor: 'pointer',
    }}
  >
    <img
      src="https://tse4.mm.bing.net/th?id=OIP.DepK0wMEZ-L2XN4Ak1umKwHaHa&pid=Api&P=0&h=180"
      alt="pintrest"
      style={{ width: '50px', height: '40px', marginRight: '10px' }}
    />
  </div>
</div>

<div
  style={{
    marginTop: '-63px',
    marginLeft: '359px',
    textAlign: 'left',
    border: `2px solid ${isActive ? 'blue' : '#ccc'}`,
    padding: '10px',
    borderRadius: '5px',
    width: '60px', 
  }}
>
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '0px', 
      cursor: 'pointer',
    }}
  >
    <img
      src="https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-8.png"
      alt="telegram"
      style={{ width: '50px', height: '40px', marginRight: '10px' }}
    />
  </div>
</div>

<div
  style={{
    marginTop: '30px',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'flex-end', 
  }}
>
  <img
    src="https://vectorified.com/images/share-link-icon-35.png"
    alt="react logo"
    style={{ width: '30px', height: '30px', marginLeft: '90px' }} 
  />
  <p style={{ fontSize: '14px', fontWeight: 'bold' }}>Copy Link</p>
</div>
  </>
   )}
      </div>
    </div>
  );
};

export default SharePopup;
