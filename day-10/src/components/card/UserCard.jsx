import { Link } from "react-router-dom";


const UserCard = ({user}) => {

    const {name,username,email,id} = user;
    return (
        <div className="card rounded   bg-white">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
            <div className="card-actions justify-end">
            <Link to={`/users/${id}`} className="btn btn-primary btn-sm">Details</Link>
            </div>
        </div>
        </div>
    );
};

export default UserCard;