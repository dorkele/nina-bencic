import React from "react";
import Header from "./Header";
import BlurOutFrame from "./blur-out-frame";
import "./App.css";

export default function App() {
    return (
        <div className="box">
            <Header />
            <BlurOutFrame />
            <BlurOutFrame delay={2} />
        </div>
    );
}
