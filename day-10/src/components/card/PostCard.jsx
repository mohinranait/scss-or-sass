
import { Link } from 'react-router-dom';

const PostCard = ({post}) => {

    const {body,title ,userId,id   } = post;
    return (
        <>
         <div className="card rounded bg-base-100 shadow">
          
            <div className="card-body">
                <h2 className="card-title">
                {title}
                </h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <Link to={`/posts/${id}`} className="badge btn btn-primary badge-outline">Details</Link> 
                </div>
            </div>
            </div>   
        </>
    );
};

export default PostCard;