import React from 'react'
import NavbarNonLogged from "../components/NavbarNonLogged"
import styles from '../styles/About.module.css';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <NavbarNonLogged/>
            <div className={styles.container}>
                <section className={styles.section}>
                    <h1 className={styles.title}>About</h1>
                    <p className={styles.body}>Welcome to CircleChat, your new home for connecting, sharing, and engaging with people</p>
                    <p className={styles.body}>from all walks of life around the globe. Our platform is designed to bring</p>
                    <p className={styles.body}>individuals together through the power of conversation.</p>
                </section>
                <section className={styles.section}>
                    <h1 className={styles.title}>Our Mission</h1>
                    <p className={styles.body}>Our mission is simple: to provide a safe, inclusive, and vibrant online community where users can</p>
                    <p className={styles.body}>freely express themselves, exchange ideas, and build connections without borders.</p>
                </section>
                <section className={styles.section}>
                    <h1 className={styles.title}>Join Us</h1>
                    <p className={styles.body}>Ready to dive into the conversation? Sign up today</p>
                    <p className={styles.body}>and discover a world of discussions waiting for you at CircleChat.</p>
                </section>
                <button className={styles.button}>
                    <Link to="/signup">
                        Join CircleChat
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default About