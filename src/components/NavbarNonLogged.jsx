import { useState } from "react";
import styles from "../styles/NavbarNonLogged.module.css";
import { Link } from 'react-router-dom';

function NavbarNonLogged() {
    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => {
        setIsActive(!isActive);
    };
    const removeActive = () => {
        setIsActive(false);
    };
    return (
        <div className="App">
            <header className="App-header">
                <nav className={`${styles.navbar}`}>
                    <Link to="/" className={`${styles.logo}`}>
                        <img src="circlechat_logo.png" alt="CircleChat Logo"/>
                    </Link>
                    <ul
                        className={`${styles.navMenu} ${
                            isActive ? styles.active : ""
                        }`}
                    >
                        <li onClick={removeActive}>
                            <a className={`${styles.navLink}`}>
                                <Link to="/about">
                                    ABOUT
                                </Link>
                            </a>
                        </li>
                        <li onClick={removeActive}>
                            <a className={`${styles.navLink}`}>
                                <Link to="/signin">
                                    SIGN IN
                                </Link>
                            </a>
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

export default NavbarNonLogged