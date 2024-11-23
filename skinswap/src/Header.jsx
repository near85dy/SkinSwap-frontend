function Header() {
    return (
      <header>
        <div className="header-logo">
          <span className="logo-large-s">S</span>
          <div className="logo-text">
            <span className="logo-kin">kin</span>
            <span className="logo-wap">wap</span>
          </div>
        </div>
        <nav className="header-links" id="header-links">
          <form action="http://localhost:8080/api/login" className="login-form">
            <button type="submit" className="login-button">Вход</button>
          </form>
          <ul className="menu">
            <li><a href="profile.html">Profile</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  