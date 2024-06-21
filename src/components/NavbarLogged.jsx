import { useState } from "react";
import styles from "../styles/NavbarLogged.module.css";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";
import { Link } from 'react-router-dom';

function NavbarLogged() {
    const [isActive, setIsActive] = useState(false);
    const { removeToken } = useAuth();

    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false);
    };

    const signOut = async () => {
        await api
            .post('/api/v1/token/logout/')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(JSON.stringify(error));
            });

        api.defaults.headers.common['Authorization'] = '';
        removeToken();
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav className={`${styles.navbar}`}>
                    <Link to="/lobby" className={`${styles.logo}`}>
                        <img src="circlechat_logo.png" alt="CircleChat Logo"/>
                    </Link>
                    <ul
                        className={`${styles.navMenu} ${
                            isActive ? styles.active : ""
                        }`}
                    >
                        <li onClick={removeActive}>
                            <Link to="/lobby" className={`${styles.navLink}`}>
                                CHATROOMS
                            </Link>
                        </li>
                        <li onClick={removeActive}>
                            <Link to="/faq" className={`${styles.navLink}`}>
                                FAQ
                            </Link>
                        </li>
                    </ul>
                    <ul className={`${styles.navSignOut}`}>
                        <li onClick={signOut}>
                            <Link to="/" className={`${styles.navLink}`}>
                                SIGN OUT
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={`${styles.hamburger} ${
                            isActive ? styles.active : ""
                        }`}
                        onClick={toggleActiveClass}
                    >
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavbarLogged