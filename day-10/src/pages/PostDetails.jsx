import { useParams } from "react-router-dom";
import { useGetSinglePostsByIdQuery } from "../redux/features/api/baseApi";


const PostDetails = () => {
    const {id} = useParams();
    const {data:post,isLoading,isError,error} = useGetSinglePostsByIdQuery(id);
    
    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }
    return (
        <div>
            <h1 className="text-center text-xl font-semibold py-8">Details page </h1>
            <div className="card w-[800px] glass mx-auto">
             
                <div className="card-body">
                    <h2 className="card-title">{post?.title}</h2>
                    <p>{post?.body}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;