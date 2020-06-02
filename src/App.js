import React, { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import BlurOutFrame from "./blur-out-frame";
import "./App.css";

export default function App() {
    const [info, setInfo] = useState(false);

    return (
        <div className="box">
            {info && <Info setInfo={setInfo} info={info} />}
            <BlurOutFrame />
            <Header setInfo={setInfo} />
        </div>
    );
}
