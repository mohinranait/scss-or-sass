import { Link } from "react-router-dom";


const CommentCard = ({comment}) => {
    const {name,email ,body ,id  } = comment;

    return (
        <div className="card  bg-base-100 shadow rounded ">
      
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-sm text-gray-600">{email}</p>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <Link to={`/comments/${id}`} className="btn btn-primary btn-sm">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;