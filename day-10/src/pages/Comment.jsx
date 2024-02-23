
import CommentCard from '../components/card/CommentCard';
import { useGetCommentByIdQuery } from '../redux/features/api/baseApi';
import { useParams } from 'react-router-dom';

const Comment = () => {
    const {id} = useParams();
    const {data:comment,isLoading} = useGetCommentByIdQuery(id);

    if(isLoading){
        return <div className='text-center text-2xl font-bold text-red-600 mt-4'>Loading...</div>
    }
    return (
        <div className='mt-4'>
            <div className='w-[800px] mx-auto'>
                    <CommentCard comment={comment} />
            </div>
        </div>
    );
};

export default Comment;