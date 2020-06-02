import React from "react";
import styles from "./Header.module.css";

export default function Header({ setInfo }) {
    const showContact = () => {
        setInfo("contact");
    };
    const showAbout = () => {
        setInfo("about");
    };

    return (
        <div className={styles.container}>
            <p onClick={showContact} className={styles.contact}>
                Contact
            </p>
            <p className={styles.center}>Nina Bencic</p>
            <p onClick={showAbout} className={styles.contact}>
                About
            </p>
        </div>
    );
}
