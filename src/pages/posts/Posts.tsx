import React from 'react';
import './Posts.scss'
import img from '../../assets/postImg.png'

const Posts = () => {
    return (
        <>
            <div className={'h2'}>
                <h2>Posts</h2>
            </div>
            <div className={'select'}>

                <select>
                    <option value="value1">New posts first</option>
                    <option value="value2">Old posts first</option>
                </select>
            </div>
            <div className={'wrapper-posts'}>
                <div className="post">
                    <div className={'posts_img'}>
                        <img src={img}/>
                    </div>
                    <div className={'posts_description'}>
                        <div className={'description_img'}>
                            <img src={img} className={'small'}/>
                        </div>
                        <div className="description_text">
                            <h3>Let's fly into space</h3>
                            <p>The best blog in our village</p>
                            <p>12.12.2022</p>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className={'posts_img'}>
                        <img src={img}/>
                    </div>
                    <div className={'posts_description'}>
                        <div className={'description_img'}>
                            <img src={img} className={'small'}/>
                        </div>
                        <div className="description_text">
                            <h3>Let's fly into space</h3>
                            <p>The best blog in our village</p>
                            <p>12.12.2022</p>
                        </div>
                    </div>
                </div>
                <div className="post">
                    <div className={'posts_img'}>
                        <img src={img}/>
                    </div>
                    <div className={'posts_description'}>
                        <div className={'description_img'}>
                            <img src={img} className={'small'}/>
                        </div>
                        <div className="description_text">
                            <h3>Let's fly into space</h3>
                            <p>The best blog in our village</p>
                            <p>12.12.2022</p>
                        </div>
                    </div>
                </div>


            </div>
            <div className={'buttonS'}>
                <button>Show more</button>
            </div>
        </>
    );
};

export default Posts;