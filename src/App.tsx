import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="nav">
                <div className={'navigation'}>
                   Navigation
                </div>
                <Main/>
            </div>
        </div>
    );
}

export default App;
