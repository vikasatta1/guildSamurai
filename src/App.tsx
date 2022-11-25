import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import {
    Routes,
    Route,
} from "react-router-dom";
import Navigation from "./components/nav/Navigation";
import Blogs from "./pages/blogs/Blogs";
import Posts from "./pages/posts/Posts";
import BlogPage from "./pages/blogPage/BlogPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <Navigation/>
                <div className={'main'}>
                    <Routes>
                        <Route path={'/'} element={<BlogPage key={1} id={'1'} websiteUrl={'fpkpsnvk'} description={'onjcsdsounvwroubvrw'}
                          name={'LAlala'}/>}/>
                        <Route path={'/blogs'} element={<Blogs/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
