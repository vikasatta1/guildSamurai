import React from 'react';
import './BlogItem.scss'

export type BlogPropsType = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string
}
const BlogItem = (props: BlogPropsType) => {
    return (
        <div className={'blog'}>
            <div className={'blog-logo'}>
                {/* <img alt={'logo'}/>*/}
            </div>
            <div className={'content-blog'}>
                <h3>{props.name}</h3>
                <p className={'grey'}>Website: <a href={'#'}>{props.websiteUrl}</a></p>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default BlogItem;