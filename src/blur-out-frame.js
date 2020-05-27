import React from "react";
import { Frame } from "framer";

export default function BlurOutFrame({ src, x, y, delay }) {
    return (
        <Frame
            center
            style={{ background: "none" }}
            size={"100%"}
            transition={{ loop: Infinity }}
        >
            <Frame
                center
                style={{ background: "none" }}
                size={"100%"}
                x={x}
                y={y}
                animate={{
                    opacity: [0, 0.5, 1, 1, 0],
                    filter: [
                        "blur(0px)",
                        "blur(0px)",
                        "blur(0px)",
                        "blur(4x)",
                        "blur(10px)",
                    ],
                }}
                transition={{
                    times: [0.2, 0.4, 0.6, 0.8, 1],
                    duration: 3,
                    delay: delay,
                }}
            >
                {src && <img src={src} alt="img1" height="30%" />}
            </Frame>
        </Frame>
    );
}
