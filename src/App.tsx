import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navigation from "./components/nav/Navigation";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Navigation/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
