import React, { useState } from "react";
import { Frame, useAnimation } from "framer";

export default function BlurOutFrame() {
    function getRandom(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const [random, setRandom] = useState(0);
    const controls = useAnimation();
    controls.start({
        opacity: [0, 0, 1, 1, 0, 0],
        filter: [
            "blur(0px)",
            "blur(0px)",
            "blur(0px)",
            "blur(10px)",
            "blur(10px)",
            "blur(10px)",
        ],
    });

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + "%";
    }

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
    const loop = () => {
        console.log("looping");
        let randomNum = getRandom(21);
        return setRandom(randomNum);
    };

    return (
        <Frame
            center
            style={{ background: "none", zIndex: 2 }}
            size={"100%"}
            x={getRandomInt(80)}
            y={getRandomInt(60)}
            animate={controls}
            transition={{
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                duration: 6,
            }}
            onAnimationComplete={loop}
        >
            <img src={imagesArray[random]} alt="img" height="30%" />
        </Frame>
    );
}
