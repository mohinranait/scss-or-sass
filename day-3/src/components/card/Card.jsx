
import { useDispatch } from "react-redux";
import "./Card.scss";
import { deletePost } from "../../features/posts/postSlice";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";

const Card = ({post}) => {
    const {title, _id, description,author} = post;

    const dispatch = useDispatch();

    const handleDeletePost = id => {
        dispatch(deletePost(id));
    }
    
    return (
        <div className="card">
            <div className="content">
                <p className="title">{title}</p>
                <p className="author">Author: <span className="name">{author}</span></p>
                <p className="text">{description}</p>
            </div>
            <div className="actions">
                <Link to={`/update/${_id}`} className="btn btn-primary btn-sm">Udpate <FaPenToSquare /> </Link>
                <button onClick={() => handleDeletePost(_id)} className="btn btn-danger btn-sm">Delete <GoTrash /> </button>
            </div>
        </div>
    );
};

export default Card;