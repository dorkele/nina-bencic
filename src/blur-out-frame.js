import React, { useState } from "react";
import { Frame, useAnimation } from "framer";

export default function BlurOutFrame() {
    const [random, setRandom] = useState(0);

    const imagesArray = [
        "/images/img1.jpeg",
        "/images/img2.jpeg",
        "/images/img3.jpeg",
        "/images/img4.jpeg",
        "/images/img5.jpeg",
        "/images/img6.jpeg",
        "/images/img7.jpeg",
        "/images/img8.jpeg",
        "/images/img9.jpeg",
        "/images/img10.jpeg",
        "/images/img11.jpeg",
        "/images/img12.jpeg",
        "/images/img13.jpeg",
        "/images/img14.jpeg",
        "/images/img15.jpeg",
        "/images/img16.jpeg",
        "/images/img17.jpeg",
        "/images/img18.jpeg",
        "/images/img19.jpeg",
        "/images/img20.jpeg",
        "/images/img21.jpeg",
    ];

    function getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    function getRandomPercentage(max) {
        return Math.random() * Math.floor(max) + "%";
    }

    const controls = useAnimation();
    controls.start({
        opacity: [0, 0, 1, 1, 0.5, 0],
        filter: [
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
            "blur(10px)",
            "blur(10px)",
            "blur(15px)",
        ],
    });

    const loop = () => {
        let randomNum = getRandom(21);
        return setRandom(randomNum);
    };

    return (
        <div style={{ position: "fixed", height: "100%", width: "100%" }}>
            <Frame
                style={{ background: "none", zIndex: 2 }}
                x={getRandomPercentage(100)}
                y={getRandomPercentage(100)}
                animate={controls}
                transition={{
                    times: [0, 0.1, 0.4, 0.6, 0.8, 1],
                    duration: 6,
                }}
                onAnimationComplete={loop}
            >
                <img src={imagesArray[random]} alt="img" />
            </Frame>
        </div>
    );
}
