import React from "react";
import BlurOutFrame from "./blur-out-frame";

export default function Images() {
    //const imagesArray = ["img1", "img2", "img3", "img4", "img5"];
    let randomXArray = [];

    for (let i = 0; i < 5; i++) {
        randomXArray.push(Math.round(Math.random() * 500));
    }
    let randomYArray = [];
    for (let i = 0; i < 5; i++) {
        randomYArray.push(Math.round(Math.random() * 1250));
    }
    let src = "/images/img1.jpeg";
    return <BlurOutFrame src={src} />;
}
