import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostForm from '../../components/form/PostForm';

const Update = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const {posts}= useSelector(state => state.posts);
    useEffect(() => {
        const findPosts = posts?.find(item => item?._id == id);
        setPost(findPosts)
    },[id,posts])
    return (
        <section>
            <div className="container">
                <div className="addForm">
                    <PostForm  post={post}/>
                </div>
            </div>
        </section>
    );
};

export default Update;