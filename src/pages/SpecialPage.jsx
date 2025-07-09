import Header from '../components/Header';
import MessageCard from '../components/MessageCard';

const SpecialPage = () => {
  return (
    <>
      <Header title="Something Special 💝" />
      
      <MessageCard>
        <p className="message">காதலித்தேனே தவிர காதலிக்கப்படவில்லை💔🌹🙂</p>
        <p className="message"></p>
        
        <div className="tamil" style={{margin: '2rem 0'}}>
         காதலுக்கு கற்பனை அழகு🌹
ஆனால் என் காதல் கற்பனையில் மட்டுமே அழகு💔
        </div>

        <div className="tamil">
         எனக்கு சொந்தமான நீ பிறருக்கு சொந்தமானால் 😢
உனக்கு சொந்தமான நான் மணனுக்கு சொந்தமாவேன் 💔🌧️
          ஒவ்வொரு பார்வையும் ஒரு கனவு
          
        </div>
        
        
        <div className="proposal-box">
          <p>Imagination is the beauty of love 🌹</p>
          <p>❤️  But my love is beautiful only in imagination ❤️</p>
        </div>
      </MessageCard>
    </>
  );
};

export default SpecialPage;