import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faUsers, faComments, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
    return (
        <nav className="nav-main">
            <ul>
                <li>
                    <a className="nav-button-text" href="/profile">
                        <FontAwesomeIcon icon={faUser} /> Профиль
                    </a>
                </li>
                <li>
                    <a className="nav-button-text" href="/chats">
                        <FontAwesomeIcon icon={faComments} /> Люди
                    </a>
                </li>
                <li>
                    <a className="nav-button-text" href="/relationships">
                        <FontAwesomeIcon icon={faUsers} /> Друзья
                    </a>
                </li>
                <li>
                    <a className="nav-button-text" href="/messages">
                        <FontAwesomeIcon icon={faEnvelope} /> Сообщения
                    </a>
                </li>
                <li>
                    <a className="nav-button-text" href="/trades">
                        <FontAwesomeIcon icon={faExchangeAlt} /> Входящие трейды
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
