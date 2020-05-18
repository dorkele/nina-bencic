import React from "react";
import styles from "./Header.module.css";

export default function Header({ setInfo }) {
    const showInfo = () => {
        setInfo(true);
    };

    return (
        <div className={styles.container}>
            <p onClick={showInfo} className={styles.contact}>
                Contact
            </p>
            <p className={styles.center}>Nina Bencic</p>
            <p className={styles.contact}>About</p>
        </div>
    );
}
