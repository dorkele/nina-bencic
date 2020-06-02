import React from "react";
import styles from "./info.module.css";

export default function Info({ setInfo, info }) {
    const closeInfo = () => {
        setInfo(false);
    };
    return (
        <div className={styles.container}>
            <div onClick={closeInfo} className={styles.iks}>
                X
            </div>
            {info === "about" && (
                <div className={styles.info}>
                    Nina Bencic /ben-cheech/ freelance Art Director & Designer
                    based in Berlin. With a focus on branding and newly found
                    interest in typography. Working as a Visual designer at
                    Goldener Westen↗.
                </div>
            )}
            {info === "contact" && (
                <div className={styles.info}>
                    info[at]ninabencic.com↗ Linkedin↗ Instagram↗
                </div>
            )}
        </div>
    );
}
