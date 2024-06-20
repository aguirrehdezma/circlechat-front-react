import { useState } from "react";
import styles from "../styles/NavbarLogged.module.css";

function NavbarLogged() {
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
                    <a href="/lobby" className={`${styles.logo}`}>
                        <img src="circlechat_logo.png" alt="CircleChat Logo"/>
                    </a>
                    <ul
                        className={`${styles.navMenu} ${
                            isActive ? styles.active : ""
                        }`}
                    >
                        <li onClick={removeActive}>
                            <a href="/lobby" className={`${styles.navLink}`}>
                                CHATROOMS
                            </a>
                        </li>
                        <li onClick={removeActive}>
                            <a href="/faq" className={`${styles.navLink}`}>
                                FAQ
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

export default NavbarLogged