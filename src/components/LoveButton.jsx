const LoveButton = ({ onClick, children }) => {
  return (
    <button className="heart-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default LoveButton;