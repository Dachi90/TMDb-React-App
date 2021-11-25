import logo from "../assets/logo.svg";

const Header = ({ handleSubmit }) => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="search" name="search" id="search" className="inputForm" />
        <button type="submit" className="buttonSearch">
          🔍
        </button>
      </form>
    </header>
  );
};

export default Header;
