import React from 'react';
import './Navigation.scss'
import blogsImg from './assetsNav/list.svg'
import postsImg from './assetsNav/grid_view.svg'
import { Link } from "react-router-dom";
const Navigation = () => {
    return (
        <div className={'navigation'}>
           <Link to={'blogs'}><div className={'blogsNav'}><img src={blogsImg} color={'red'}/> <p>Blogs</p></div></Link>
            <Link to={'posts'}> <div className={'posts'}><img src={postsImg}/> <p>Posts</p></div></Link>

        </div>
    );
};

export default Navigation;