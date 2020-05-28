import React from "react";
import { Frame } from "framer";

export default function BlurOutFrame() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    let randomXArray = [];

    for (let i = 0; i < 21; i++) {
        randomXArray.push(Math.round(Math.random() * 900));
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
    return randomXArray.map((val, index) => {
        return (
            <Frame
                center
                style={{ background: "none" }}
                size={"100%"}
                x={getRandomInt(900)}
                y={getRandomInt(500)}
                animate={{
                    opacity: [0, 0.5, 1, 0, 0],
                    filter: [
                        "blur(0px)",
                        "blur(4x)",
                        "blur(10px)",
                        "blur(0px)",
                        "blur(0px)",
                    ],
                }}
                transition={{
                    times: [0, 0.005, 0.01, 0.2, 1],
                    duration: 50,
                    delay: 5 * index,
                    loop: Infinity,
                }}
            >
                <img src={imagesArray[index]} alt="img" height="30%" />
            </Frame>
        );
    });
}
