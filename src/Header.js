import React, { useState } from "react";
import styles from "./Header.module.css";
import Info from "./Info";

export default function Header() {
    const [info, setInfo] = useState(false);

    const contactSet = () => {
        setInfo("contact");
    };
    const aboutSet = () => {
        setInfo("about");
    };

    return (
        <React.Fragment>
            {info && <Info info={info} setInfo={setInfo} />}
            <div className={styles.container}>
                <p onClick={contactSet} className={styles.contact}>
                    Contact
                </p>
                <p className={styles.center}>Nina Bencic</p>
                <p onClick={aboutSet} className={styles.contact}>
                    About
                </p>
            </div>
        </React.Fragment>
    );
}
