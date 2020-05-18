import React, { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import Images from "./Images";
import "./App.css";

export default function App() {
    const [info, setInfo] = useState(false);

    return (
        <React.Fragment>
            {info && <Info setInfo={setInfo} />}
            <Images />
            <Header setInfo={setInfo} />
        </React.Fragment>
    );
}
