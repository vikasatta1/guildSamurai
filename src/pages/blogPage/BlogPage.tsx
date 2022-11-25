import React from 'react';
import './BlogPage.scss'
import BlogItem, {BlogPropsType} from "../../components/blogItem/BlogItem";
import arrowR from '../../assets/arrow_right.svg'
import PostItem from "../../components/postItem/PostItem";
import ButtonShowMore from "../../components/button/showMore/ButtonShowMore";
const BlogPage = (props:BlogPropsType) => {
    return (
        <>
            <div className={'h2'}>
                <h2>Blogs</h2><span><img src={arrowR} alt={'arrow'}/></span>
                <p>{props.name}</p>
            </div>
            <div className={'backTo'}><span>&larr;</span><p>Back to blogs</p></div>
            <div className="imgBlog">
            </div>
            <div className={'border'}>
            <BlogItem id={props.id} name={props.name} description={props.description} websiteUrl={props.websiteUrl} />
            </div>
            <div className={'wrapper-blogs'}>

            </div>

            <ButtonShowMore/>
        </>
    );
};

export default BlogPage;