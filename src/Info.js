import React from "react";
import styles from "./info.module.css";

export default function Info({ setInfo, info }) {
    const closeInfo = () => {
        setInfo(false);
    };
    return (
        <div className={styles.container}>
            <img
                src="/images/NB_icons-01.png"
                alt="x"
                onClick={closeInfo}
                className={styles.iks}
            />
            {info === "about" && (
                <div className={styles.info}>
                    Nina Bencic /ben-cheech/ freelance Art Director & Designer
                    based in Berlin. With a focus on branding and newly found
                    interest in typography. Working as a Visual designer at{" "}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.goldenerwesten.net"
                        className={styles.links}
                    >
                        Goldener Westen
                        <img
                            src="/images/NB_icons-02.png"
                            alt="arrow icon"
                            className={styles.icon}
                        />
                    </a>
                </div>
            )}
            {info === "contact" && (
                <div className={styles.info}>
                    <p>info[at]ninabencic.com</p>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/nina-bencic-88645763/"
                            className={styles.links}
                        >
                            Linkedin
                            <img
                                src="/images/NB_icons-02.png"
                                alt="arrow icon"
                                className={styles.icon}
                            />
                        </a>
                    </p>
                    <p>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/ninaninabencic/"
                            className={styles.links}
                        >
                            Instagram
                            <img
                                src="/images/NB_icons-02.png"
                                alt="arrow icon"
                                className={styles.icon}
                            />
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
}
