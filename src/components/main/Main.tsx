import React from 'react';
import './Main.scss'
import BlogItem from "../blogItem/BlogItem";


const Main = () => {
    return (
        <div className={'main'}>
            <div className={'h2'}>
                <h2>Blogs</h2>
            </div>
            <div className={'search'}>
                <input/>
                <select>
                    <option value="value1">Значение 1</option>
                    <option value="value2" selected>Значение 2</option>
                    <option value="value3">Значение 3</option>
                </select>
            </div>
            <div className={'blogs'}>

                <BlogItem />
                <BlogItem/>
                <BlogItem/>
                <BlogItem/>



            </div>

            <div className={'button'}>
                <button>Show more</button>
            </div>
        </div>
    );
};

export default Main;