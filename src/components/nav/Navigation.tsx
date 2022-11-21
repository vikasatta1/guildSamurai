import React from 'react';
import './Navigation.scss'
import blogsImg from './assetsNav/list.svg'
import postsImg from './assetsNav/grid_view.svg'
const Navigation = () => {
    return (
        <div className={'navigation'}>
            <div className={'blogsNav'}><img src={blogsImg}/> <p>Blogs</p></div>
            <div className={'posts'}><img src={postsImg}/> <p>Posts</p></div>

        </div>
    );
};

export default Navigation;