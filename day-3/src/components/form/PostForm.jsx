

import './PostForm.scss'
import { useDispatch } from 'react-redux';
import { addPosts, updatePost } from '../../features/posts/postSlice';
import { useNavigate } from 'react-router-dom';

const PostForm = ({post}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleAddPost = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
       
      

        if(!post){
            const author = form.author.value;
            dispatch(addPosts({title,author, description}))
        }else{
            dispatch(updatePost({
                _id: post?._id,
                title, 
                description,
            }))
        }
        form.reset()
        navigate('/')

    }
    return (
        <>
            <form onSubmit={handleAddPost} className='postForm'>
                <p className='formtitle'> {post ? "Update Post": "Add     new Post"}</p>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" name='title' defaultValue={post?.title || ''} placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="description" defaultValue={post?.description || ''} id="" cols="30" rows="3" placeholder='Desciption'></textarea>
                </div>
                
                {
                    !post &&  <div>
                    <label htmlFor="">Author name</label>
                    <input type="text" name='author' defaultValue={post?.author || ''} placeholder='Author'/>
                </div>
                }
               
                <div>
                    <button type='submit' className='btn btn-lg btn-primary w-full'> {post ? "Update":"Save"}</button>
                </div>
            </form>   
        </>
    );
};

export default PostForm;