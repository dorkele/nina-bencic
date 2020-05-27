import React from "react";
import BlurOutFrame from "./blur-out-frame";

export default function Images() {
    const imagesArray = [
        "/images/img1.jpeg",
        "/images/img2.jpeg",
        "/images/img3.jpeg",
        // "/images/img4.jpeg",
        // "/images/img5.jpeg",
        // "/images/img6.jpeg",
        // "/images/img7.jpeg",
        // "/images/img8.jpeg",
        // "/images/img9.jpeg",
        // "/images/img10.jpeg",
        // "/images/img11.jpeg",
        // "/images/img12.jpeg",
        // "/images/img13.jpeg",
        // "/images/img14.jpeg",
        // "/images/img15.jpeg",
        // "/images/img16.jpeg",
        // "/images/img17.jpeg",
        // "/images/img18.jpeg",
        // "/images/img19.jpeg",
        // "/images/img20.jpeg",
        // "/images/img21.jpeg",
    ];
    let randomXArray = [];

    for (let i = 0; i < 3; i++) {
        randomXArray.push(Math.round(Math.random() * 900));
    }
    let randomYArray = [];
    for (let i = 0; i < 21; i++) {
        randomYArray.push(Math.round(Math.random() * 500));
    }
    let delay = [
        0,
        3,
        6,
        // 10,
        // 15,
        // 25,
        // 35,
        // 45,
        // 55,
        // 65,
        // 70,
        // 80,
        // 85,
        // 90,
        // 100,
        // 110,
        // 120,
        // 130,
        // 140,
        // 150,
        // 155,
        // 160,
        // 170,
    ];

    // let random = [];

    // for (let i = 0; i < 21; i++) {
    //     random.push(Math.round(Math.random() * 21));
    // }
    return (
        <React.Fragment>
            {randomXArray.map((val, index) => {
                return (
                    <BlurOutFrame
                        src={imagesArray[index]}
                        x={randomXArray[index]}
                        y={randomYArray[index]}
                        delay={delay[index]}
                    />
                );
            })}
        </React.Fragment>
    );
}
