import Header from '../components/Header';
import MessageCard from '../components/MessageCard';

const ReasonsPage = () => {
  return (
    <>
      <Header title="Reasons ❤️" />
      
      <MessageCard>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* CSS Doll Animation */}
          <div style={{ 
            position: 'relative',
            height: '200px',
            width: '150px',
            margin: '2rem 0'
          }}>
            {/* Doll Head */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#FFD5C8',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              animation: 'float 3s ease-in-out infinite'
            }}>
              {/* Eyes */}
              <div style={{
                position: 'absolute',
                top: '30px',
                left: '20px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#333'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '30px',
                right: '20px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#333'
              }}></div>
              {/* Blush */}
              <div style={{
                position: 'absolute',
                top: '40px',
                left: '10px',
                width: '15px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255,105,180,0.3)'
              }}></div>
              <div style={{
                position: 'absolute',
                top: '40px',
                right: '10px',
                width: '15px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(255,105,180,0.3)'
              }}></div>
              {/* Mouth */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '10px',
                borderRadius: '0 0 10px 10px',
                background: '#FF6B8B'
              }}></div>
            </div>
            
            {/* Doll Body */}
            <div style={{
              position: 'absolute',
              top: '80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '80px',
              borderRadius: '20px',
              background: '#FF9AA3',
              animation: 'float 3s ease-in-out infinite 0.2s'
            }}></div>
            
            {/* Arms */}
            <div style={{
              position: 'absolute',
              top: '90px',
              left: '10px',
              width: '40px',
              height: '15px',
              borderRadius: '10px',
              background: '#FFD5C8',
              transform: 'rotate(-30deg)',
              animation: 'swing 3s ease-in-out infinite'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '90px',
              right: '10px',
              width: '40px',
              height: '15px',
              borderRadius: '10px',
              background: '#FFD5C8',
              transform: 'rotate(30deg)',
              animation: 'swing 3s ease-in-out infinite 0.2s'
            }}></div>
          </div>

          {/* Your existing content */}
          <ul className="reasons-list" style={{ 
            listStyleType: 'none', 
            padding: 0,
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: '2rem'
          }}>
            <li>அவள் கண்கள் சொல்லாத காதலையா...🦋என் கவிதைகள் சொல்லி விட போறுது 😪</li>
            <i>உணர்ச்சிகளின் உருவமும் 🧠</i>
            <i>இயற்கை என்னும் உடை அணிந்து 🍃</i>
            <i>காதல் என்னும் மொழியில் 💌</i>
            <i>என்னை வசியப்படுத்தியவள் ✨❤️</i>
          </ul>
          
          <div className="tamil" style={{
            marginTop: '2rem', 
            textAlign: 'center',
            fontSize: '1.1rem',
            lineHeight: '1.8rem'
          }}>
            <p>என் கண்களுக்கு தெரிந்த அதிசயம் நீ...😍👀</p>
            <p>அதை என்றென்றும் ரசிக்கும் ரசிகன்</p>
            
            <p style={{
              fontStyle: 'italic', 
              marginTop: '1rem',
              color: '#d23669',
              fontWeight: 500
            }}>
              "மறக்கும் இடத்தில் நீயும் இல்லை,<br />
              உன்னை மறக்கும் எண்ணத்தில் நானும் இல்லை..!"
            </p>
            
            <p style={{
              marginTop: '2rem',
              fontWeight: 500
            }}>
              காரணங்கள் எண்ணற்றவை...<br />
              ஆனால் ஒன்று மட்டும் உறுதி - நீ என் இதயத்தில் என்றும்
            </p>
          </div>
        </div>
      </MessageCard>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes swing {
          0%, 100% { transform: rotate(-30deg); }
          50% { transform: rotate(30deg); }
        }
        
        .reasons-list li {
          margin: 0.8rem 0;
          position: relative;
          padding-left: 1.5rem;
        }
        .reasons-list li:before {
          content: '❤️';
          position: absolute;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default ReasonsPage;