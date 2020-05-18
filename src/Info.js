import React from "react";
import styles from "./info.module.css";

export default function Info({ setInfo }) {
    const closeInfo = () => {
        setInfo(false);
    };
    return (
        <div className={styles.container}>
            <div onClick={closeInfo}>X</div>
            <div>
                Nina Bencic /ben-cheech/ freelance Art Director & Designer based
                in Berlin. With a focus on branding and newly found interest in
                typography. Working as a Visual designer at Goldener Westen↗.
            </div>
            <div>info[at]ninabencic.com↗ Linkedin↗ Instagram↗</div>
        </div>
    );
}
