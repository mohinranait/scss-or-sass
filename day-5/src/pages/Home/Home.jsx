import { useEffect } from "react";
import MoviCard from "../../components/card/MoviCard";
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../../redux/movie/movieSlice";

const Home = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie())
    },[dispatch])

    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="movieWrap">
                            {
                                movies?.map((movie,index) => <MoviCard key={index} index={index} movie={movie} /> )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;