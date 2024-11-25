function Header() 
{
  const API_URL = "http://localhost:8080/api";
  const handleLoginButton = async () =>
  {
    try
    {
        const response = await fetch(API_URL+"/auth/steam/login");
        const data = await response.json();

        if (data.steamLoginUrl) 
        {
            window.location.href = data.steamLoginUrl;
        }
    }
    catch (error) 
    {
        console.error("Error fetching Steam login URL:", error);
    }
  }

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
          <form className="login-form">
            <button onClick={handleLoginButton} className="login-button">Вход</button>
          </form>
          <ul className="menu">
            <li><a href="profile">Profile</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
   