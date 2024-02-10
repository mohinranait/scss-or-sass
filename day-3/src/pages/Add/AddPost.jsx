
import PostForm from '../../components/form/PostForm';
import '../../styles/addPost.scss'

const AddPost = () => {
    return (
        <section>
            <div className="container">
                <div className="addForm">
                    <PostForm />
                </div>
            </div>
        </section>
    );
};

export default AddPost;