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
        <>
        <section class="main-page-header speaker-banner bg_img" data-background="./assets/images/banner/banner07.jpg">
        <div class="container">
            <div class="speaker-banner-content">
                <h2 class="title">Movies</h2>
                <ul class="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Movies adding</li>
                </ul>
            </div>
        </div>
    </section>
    <section class="account-section bg_img" data-background="./assets/images/account/account-bg.jpeg">
            <div class="container">
                <div class="padding-top padding-bottom">
                    <div class="account-area">
                        <div class="section-header-3">
                            <h2 class="title"></h2>
                        </div>

<div class="form-group text-center">
                                <input type="button"  value="Press me to get Movies" onClick={handelClick}/>
                            </div>
                                                {/* <small className="form-text text-muted">Enter Movie Title</small> */}
                        </div>
                    </div>
                </div>
            </section>
</>
    );

}