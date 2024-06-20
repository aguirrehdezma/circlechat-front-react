import React from 'react';
import NavbarNonLogged from "../components/NavbarNonLogged"
import styles from "../styles/Home.module.css"

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
                    <button 
                        className={styles.button}
                        onClick={() => window.location.href='/signup'}
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home