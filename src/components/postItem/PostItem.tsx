import React from 'react';
import img from "../../assets/postImg.png";
import './PostItem.scss'
const PostItem = () => {
    return (
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
    );
};

export default PostItem;