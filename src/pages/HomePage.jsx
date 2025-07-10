import { useState } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';
import LoveButton from '../components/LoveButton';

const HomePage = ({ showHiddenMessage, setShowHiddenMessage }) => {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useState(new Audio('/pookie.mp3'))[0]; // Using [0] because we don't need the setter

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


  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.pause();
      audioRef.currentTime = 0;
    } else {
      audioRef.play();
    }
    setIsPlaying(!isPlaying);
  };


  return (
    <>
      <FloatingHearts />
      <Header
        title="The eyes, they never lie ✨✨"
        subtitle="என் அழசியதினால் நான் பரிகொடுத்த என் அழகு தேவதை 🌹😢💔"
      />

      <MessageCard>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>

          <button
            onClick={toggleAudio}
            className={`audio-btn ${isPlaying ? 'playing' : ''}`}
            aria-label={isPlaying ? 'Pause song' : 'Play song'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <p className="message"><b>Pookie 💛🪽</b></p>
        </div>



        <p className="message">பொட்டு வைத்தால் மெய் எழுத்தை விட அழகாக இருப்பாள்....⚡</p>

        <p className="message">She has beautiful <span className="highlight">weapon</span> 😳</p>
        <p className="message">Damn your eyes steals my heart every second 😫</p>

        <div className="tamil">
          <>
            ஏனோ இன்று எந்தன் வாசல் காதல் ஒன்று என்னைக் காண காத்திருந்ததோ?🌹<br />
            மாலை சாயா பூத்திருந்த பூக்களெல்லாம் உன்னை சேர ஏக்கம் கொண்டதோ.🌸<br />
            என்ன வேண்டுமென்ன சொல்லத் தொன்றவில்லை...🤐<br />
            என்னுள் ஏதோ மாயம் செய்தாய், உயிரை கொள்ளும் உன் கண்கள் கொண்டு நெய்தாய், கொய்தாய்.👀❤️<br />
            மௌனம் பேசுதே...😶‍🌫️ காற்று வீசுதே...🌬️<br />
            நீயே வலையில் மாட்டிக்கொண்டாய், 🕸️<br />
            தனிமை போதுமென காதல் தேடி வந்தேன் பெண்ணே...💔<br />
            தேடாமல் தேடி வந்தேன்,🔍<br />
            கேட்காமல் எல்லாம் தந்தேன்,🎁<br />
            சொல்லாமல் விட்டுச் சென்றால் என்ன ஆகுமோ...?😔
          </>
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
          <h2 style={{ fontFamily: "'Dancing Script', cursive", color: "var(--accent)" }}>
            You make my heart skip a beat every time our eyes meet...
          </h2>
        </div>
      )}
    </>
  );
};

export default HomePage;