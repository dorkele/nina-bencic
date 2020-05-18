import React from "react";
import { Frame } from "framer";

export default function BlurOutFrame({ src }) {
    const transition = {
        default: { duration: 3 },
    };
    return (
        <Frame
            center
            style={{ background: "none" }}
            size={"100%"}
            initial={{ opacity: 0, filter: "blur(0px)" }}
            animate={{ opacity: [1, 0], filter: "blur(10px)" }}
            transition={transition}
        >
            {src && <img src={src} alt="img1" height="50%" />}
        </Frame>
    );
}
