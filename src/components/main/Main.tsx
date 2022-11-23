import React from 'react';
import './Main.scss'
import BlogItem from "../blogItem/BlogItem";
import InputComponent from "../input/InputComponent";
import Blogs from "../../pages/blogs/Blogs";


const Main = () => {
    return (
        <div className={'main'}>
           <Blogs/>
        </div>
    );
};

export default Main;