import { useState } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';
import LoveButton from '../components/LoveButton';

const HomePage = ({ showHiddenMessage, setShowHiddenMessage }) => {
  const handleButtonClick = () => {
    setShowHiddenMessage(true);
    
    // Create heart explosion
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.style.position = 'fixed';
      heart.style.fontSize = `${Math.random() * 20 + 10}px`;
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.top = `${Math.random() * window.innerHeight}px`;
      heart.style.zIndex = '9999';
      heart.style.animation = `float 3s ease-out forwards`;
      heart.style.animationDelay = `${Math.random() * 0.5}s`;
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  };

  return (
    <>
      <FloatingHearts />
      <Header 
        title="The eyes, they never lie ✨✨" 
        subtitle="என் அழசியதினால் நான் பரிகொடுத்த என் அழகு தேவதை 🌹😢💔" 
      />
      
      <MessageCard>
        <p className="message">பொட்டு வைத்தால் மெய் எழுத்தை விட அழகாக இருப்பாள்....⚡</p>
        
        <p className="message">She has beautiful <span className="highlight">weapon</span> 😳</p>
        <p className="message">Damn your eyes steals my heart every second 😫</p>
        
        <div className="tamil">
          " ✨ கண் பார்த்து<br />
          கதைக்க முடியாமல்<br />
          நானும் தவிக்கின்ற<br />
          ஒரு பெண்ணும் நீ தான்<br />
          கண் கொட்ட முடியாமல்<br />
          முடியாமல் பார்க்கும் சலிக்காத ஒரு பெண்ணும்<br />
          நீ தான் ✨ "
        </div>
        
        <p className="message">She have most <span className="highlight">dangerous weapon</span> 😳</p>
        <p className="message">If she steals my heart with her eye's 💛🪽</p>
        
        <div className="tamil">
          நிலவு இருக்கும் தூரத்தை விட நீ இருக்கும் தூரம் குறைவு தான் அதை பார்க்க முடியந்த என்னால் உன்னை பார்க்க முடியவில்லை🥺🌹
        </div>
        
        <p className="message">I know your eyes killing me. But I am <span className="highlight">addicted</span> to your eyes. My eyes never get bored of see you 💫</p>
        
        <div className="tamil">
          நான் யாரிடமும் பகிராத ரகசியம் நீ.<br />
          அவள் கண்களில் பேசினால், மொழி தெரியாத ஊரில் மாட்டிக்கொண்டது போல் தவிப்பேன்...Those Eye contact 🫨
        </div>
        
        <p className="message"><span className="highlight">Love is not rare</span> but the person who truly love are rare. The moment I saw you like in a novel 😶‍🌫</p>
        
        <div className="tamil">
          ✨
          காற்றாக வந்தவள் 🍃 காற்றாகவே போனாள் 💨💔🥺
        </div>
        
        <p className="last-line">Last... incomplete, but beautiful 🥀</p>
      </MessageCard>
      
      <LoveButton onClick={handleButtonClick}>For You ❤️</LoveButton>
      
      {showHiddenMessage && (
        <div className="hidden-message">
          <h2 style={{fontFamily: "'Dancing Script', cursive", color: "var(--accent)"}}>
            You make my heart skip a beat every time our eyes meet...
          </h2>
        </div>
      )}
    </>
  );
};

export default HomePage;