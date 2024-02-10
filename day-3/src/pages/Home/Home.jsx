import Card from "../../components/card/Card";
import "../../styles/home.scss";
import "../../styles/utils/_index.scss";
import { FaPlus } from "react-icons/fa6";
import "../../styles/addCard.scss"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {

    const {posts} = useSelector(state => state.posts);
    console.log(posts);

    return (
        <>
            <section className="card-section">
                <div className="container">
                    <div className="card-grids">
                        <Link to="/add" className="addCard">
                            <div className="align">
                                <FaPlus className="icon" size={50} />
                 
                                <p>Add new posts</p>
                            </div>
                        </Link>
                        {
                            posts?.map(post  => <Card key={post?._id} post={post} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;