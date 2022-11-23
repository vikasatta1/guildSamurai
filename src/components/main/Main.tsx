import React from 'react';
import './Main.scss'
import BlogItem from "../blogItem/BlogItem";
import InputComponent from "../input/InputComponent";


const Main = () => {
    return (
        <div className={'main'}>
            <div className={'h2'}>
                <h2>Blogs</h2>
            </div>
            <div className={'search'}>
                <InputComponent/>
                <select>
                    <option value="value1">New blogs first</option>
                    <option value="value2" >Old blogs first</option>
                    <option value="value3">From A to Z</option>
                    <option value="value4">From Z to A</option>
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