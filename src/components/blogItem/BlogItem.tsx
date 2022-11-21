import React from 'react';
import './BlogItem.scss'
type BlogItemPropsType = {
    img:string,
    title:string,
    href:string,
    content:string
}
const BlogItem = () => {
    return (
        <div className={'blog'}>
            <div className={'blog-logo'}>
                {/* <img alt={'logo'}/>*/}
            </div>
            <div className={'content-blog'}>
                <h3>The best blog in your village</h3>
                <p className={'grey'}>Website: <a href={'#'}>https://www.youtube.com/</a></p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias atque, consectetur
                    consequuntur earum esse laborum laudantium magni, minima, molestiae mollitia nemo nisi
                    numquam obcaecati recusandae rem rerum sed vel?
                </p>
            </div>
        </div>
    );
};

export default BlogItem;