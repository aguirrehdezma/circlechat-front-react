import { useState } from "react";
import styles from "../styles/NavbarNonLogged.module.css";

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
                    <a href="/" className={`${styles.logo}`}>
                        <img src="circlechat_logo.png" alt="CircleChat Logo"/>
                    </a>
                    <ul
                        className={`${styles.navMenu} ${
                            isActive ? styles.active : ""
                        }`}
                    >
                        <li onClick={removeActive}>
                            <a href="/about" className={`${styles.navLink}`}>
                                ABOUT
                            </a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="/signin" className={`${styles.navLink}`}>
                                SIGN IN
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