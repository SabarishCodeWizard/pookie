import Header from '../components/Header';
import MessageCard from '../components/MessageCard';

const ReasonsPage = () => {
  return (
    <>
      <Header title="Reasons I Love You ❤️" />
      
      <MessageCard>
       <ul className="reasons-list">
  <li>அவள் கண்கள் சொல்லாத காதலையா...🦋என் கவிதைகள் சொல்லி விட போறுது 😪</li>
  <li>உணர்ச்சிகளின் உருவமும் 🧠</li>
  <li>இயற்கை என்னும் உடை அணிந்து 🍃</li>
  <li>காதல் என்னும் மொழியில் 💌</li>
  <li>என்னை வசியப்படுத்தியவள் ✨❤️</li>
</ul>

        
        <div className="tamil" style={{marginTop: '2rem'}}>
          காரணங்கள் எண்ணற்றவை...<br />
          ஆனால் ஒன்று மட்டும் உறுதி - நீ என் இதயத்தில் என்றும்
        </div>




      </MessageCard>
    </>
  );
};

export default ReasonsPage;