const Header = ({ title, subtitle }) => {
  return (
    <header>
      <h1>{title}</h1>
      {subtitle && <p className="intro">{subtitle}</p>}
    </header>
  );
};

export default Header;