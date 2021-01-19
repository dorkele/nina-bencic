import React from "react";
import pdf from "./Portfolio_2021_ninabencic.pdf";
import styles from "./info.module.css";

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={pdf}
                    className={styles.links}
                >
                    Portfolio
                    <img
                        src="/images/NB_icons-02.png"
                        alt="arrow icon"
                        className={styles.icon}
                    />
                </a>
            </div>
        </div>
    );
}
