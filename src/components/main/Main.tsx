import React from 'react';
import './Main.scss'
import Blogs from "../../pages/blogs/Blogs";
import Posts from "../../pages/posts/Posts";


const Main = () => {
    return (
        <div className={'main'}>
         {/*   <Blogs/>*/}
            <Posts/>
        </div>
    );
};

export default Main;