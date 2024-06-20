import React from 'react';
import NavbarNonLogged from "../components/NavbarNonLogged"
import styles from "../styles/Home.module.css"
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <NavbarNonLogged />
            <div className={styles.container}>
                <div className={styles.left}>
                    <img src="conversation.png" alt="Conversation" />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>A NEW WAY TO CHAT</h1>
                    <p className={styles.body}>
                        CircleChat connects you with people who share your 
                    </p>
                    <p className={styles.body}>
                        interests, making it the perfect platform to expand your
                    </p>
                    <p className={styles.body}>
                        social circle and discover like-minded individuals.
                    </p>
                    <button className={styles.button}>
                        <Link to="/signup">
                            Create Account
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home