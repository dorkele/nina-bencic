import React from "react";
import Header from "./Header";
import BlurOutFrame from "./blur-out-frame";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./Portfolio";

export default function App() {
    return (
        <div className="box">
            <Header />
            <BlurOutFrame />
            <BlurOutFrame delay={2} />
            <BrowserRouter>
                <Route exact path="/portfolio" component={Portfolio} />
            </BrowserRouter>
        </div>
    );
}
