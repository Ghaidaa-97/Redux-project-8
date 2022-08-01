import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../store/MoviesSlice";

export default function AddMoviesApi() {
    const [movies, setMovies] = useState([]);
    const [counter, setCounter] = useState(0);
    const [movie, setMovie] = useState({ title: "", description: "", genre: "", release_date: "", rating: "", poster_path: "", backdrop_path: "", trailer: "", from: 2 });
    const dispatch = useDispatch();
    const handelClick = async () => {
        alert("Movie added successfully");

        for (let counter = 0; counter < movies.length; counter++) {



            console.log(movies[counter]);
            let move = movies[counter];
            console.log(move);


            await axios(
                {
                    method: "post",
                    url: "http://localhost:8000/api/movies",
                    data: {
                        from: 2,
                        title: move.original_title,
                        description: move.overview,
                        release_date: move.release_date,
                        rating: move.vote_average,
                        poster_path: move.poster_path,
                        backdrop_path: move.backdrop_path,
                        trailer: "https://www.youtube.com/watch?v=DoSlom_wbrA"
                    },
                }
            ).then((res) => {
                console.log(res);
            }
            ).catch((err) => {
                console.log(err);
            }
            );
        }

    }

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page=1")
            .then((response) => {
                setMovies(response.data.results);
            })
    }, []);
    console.log(movies);

    return (
        <div className="container mt-5 mt-5">
            <div className="row">
                <div className="col-md-12">
                    <h1>Add Movies API</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Movie Title</label>
                                                <input type="button" className="form-control" value="getMovies" onClick={handelClick} />
                                                <small className="form-text text-muted">Enter Movie Title</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}