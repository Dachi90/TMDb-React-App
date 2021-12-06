import logo from "../assets/logo.svg";

const Header = ({ handleSubmit, goHome }) => {
  return (
    <header className="header">
      <div className="logoContainer" onClick={goHome}>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="search" name="search" id="search" className="inputForm" />
        <button type="submit" className="buttonSearch">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
