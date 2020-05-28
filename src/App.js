import React, { useState } from "react";
import Header from "./Header";
import Info from "./Info";
import BlurOutFrame from "./blur-out-frame";

import "./App.css";

export default function App() {
    const [info, setInfo] = useState(false);

    return (
        <React.Fragment>
            {info && <Info setInfo={setInfo} />}
            <BlurOutFrame />
            <Header setInfo={setInfo} />
        </React.Fragment>
    );
}
