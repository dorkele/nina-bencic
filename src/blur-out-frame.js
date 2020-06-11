import React, { useState } from "react";
import { Frame, useAnimation } from "framer";

export default function BlurOutFrame({ delay }) {
    const animation = {
        opacity: [0, 0, 1, 1, 1, 0.5, 0],
        filter: [
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
            "blur(10px)",
            "blur(15px)",
            "blur(15px)",
        ],
    };
    const controls = useAnimation();
    controls.start(animation);
    function getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const loop = () => {
        let randomNum = getRandom(21);
        setRandom(randomNum);
        controls.start(animation);
    };
    const [random, setRandom] = useState(getRandom(21));

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

    function getRandomPercentage(min, max) {
        return Math.random() * (max - min) + min + "%";
    }

    let left = getRandomPercentage(10, 70);
    let top = getRandomPercentage(10, 60);
    console.log(delay);

    return (
        <Frame
            style={{ background: "none", zIndex: 2 }}
            left={left}
            top={top}
            animate={controls}
            transition={{
                times: [0, 0.1, 0.4, 0.6, 0.7, 0.8, 1],
                duration: 7,
                delay: delay,
            }}
            onAnimationComplete={loop}
        >
            <img src={imagesArray[random]} alt="img" />
        </Frame>
    );
}
