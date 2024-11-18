

function Header()
{
    const API_URL = "http://localhost:8080/api";

    return(
        <header>
            <div class="header-logo">
                <a class="header-logo-text">Skin Swap</a>
            </div>
            <div class="login-button">
                <form action="http://localhost:8080/api/login">
                    <button>Вход</button>
                </form>
            </div>
        </header>
    )
}

export default Header