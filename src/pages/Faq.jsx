import React from 'react'
import NavbarLogged from "../components/NavbarLogged"
import styles from '../styles/Faq.module.css';
import { Link } from 'react-router-dom';

function Faq () {
    return <div>
        <NavbarLogged/>
        <div className={styles.container}>
            <section className={styles.section}>
                <h1 className={styles.title}>How can I join a chatroom?</h1>
                <p className={styles.body}>To join a chat room, navigate to the "Chatrooms" section. You can browse</p>
                <p className={styles.body}>through the list of available rooms to find a specific room by name or topic.</p>
                <p className={styles.body}>Once you find a chat room that interests you, click on it to enter.</p>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>Can I create my own chatroom?</h1>
                <p className={styles.body}>Yes, you can create your own chat room. Simply go to the "Create Chatroom" option</p>
                <p className={styles.body}>in the "Chatrooms" section. You will be prompted to provide a name for the room.</p>
                <p className={styles.body}>After that, your chat room will be created, and you can invite others to join.</p>
            </section>
            <section className={styles.section}>
                <h1 className={styles.title}>What are the rules to participating in chatrooms?</h1>
                <p className={styles.body}>Generally, participants are expected to behave respectfully towards others,</p>
                <p className={styles.body}>refrain from posting harmful or offensive content, and not spam the chat.</p>
            </section>
            <button className={styles.button}>
                <Link to="/lobby">
                    Start to chat
                </Link>
            </button>
        </div>
    </div>
}

export default Faq