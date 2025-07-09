import Header from '../components/Header';
import MessageCard from '../components/MessageCard';

const MemoriesPage = () => {
  return (
    <>
      <Header title="Our Memories ✨" />
      
      <MessageCard>
        <h3 className="section-title">First Meet</h3>
        <p className="message">The first time our eyes met, time stood still...</p>
        
        <h3 className="section-title">Special Moments</h3>
        <p className="message">Every conversation, every glance, every smile - they're all etched in my heart</p>
        
        <div className="tamil">
          ஒவ்வொரு நொடியும் ஒரு நினைவு<br />
          ஒவ்வொரு பார்வையும் ஒரு கனவு
          
        </div>

          
      </MessageCard>
      
      <MessageCard>
        <h3 className="section-title">The Eyes,They Never Lies</h3>
        <p className="message"> " ✨ கண் பார்த்து<br />
          கதைக்க முடியாமல்<br />
          நானும் தவிக்கின்ற<br />
          ஒரு பெண்ணும் நீ தான்<br />
          கண் கொட்ட முடியாமல்<br />
          முடியாமல் பார்க்கும் சலிக்காத ஒரு பெண்ணும்<br />
          நீ தான் ✨ "</p>
        {/* <p className="message">Each one more beautiful than the last 💫</p> */}
      </MessageCard>
    </>
  );
};

export default MemoriesPage;