import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../store/MoviesSlice";
import { NavLink, useParams } from "react-router-dom";
export default function Single_movie() {
    const dispatch = useDispatch();
    const movie = useSelector((state) => state.movies.movie);
    const { id } = useParams();
    const [b, setB] = useState("");




    useEffect(() => {
        dispatch(getMovie(id));

    }, [id]);
    useEffect(() => {
        console.log(movie);
        if (!movie.from == 2) {
            setB('http://127.0.0.1:8000/images/' + movie.backdrop_path);
        }
        else {
            setB('https://image.tmdb.org/t/p/w500/' + movie.backdrop_path);
        }
    }, [movie]);
    return (
        <>
            {/*     

   
    {/* <!-- ==========Header-Section========== -->

    <!-- ==========Banner-Section========== --> */}
            <section className="details-banner bg_img " data-background=
                {
                    movie.from == 2 ? b

                        :
                        b

                }>
                <div className="container " >
                    <div className="details-banner-wrapper">
                        <div className="details-banner-thumb">
                            {
                                movie.from == 2 ?
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                    />
                                    :
                                    <img
                                        src={`http://127.0.0.1:8000/images/${movie.poster_path}`}
                                        height="240px"
                                    />
                            }

                        </div>
                        <div className="details-banner-content offset-lg-3">
                            <h3 className="title">{movie.title}</h3>
                            <div className="tags">
                                <a href="#0">English</a>
                                <a href="#0">Hindi</a>
                                <a href="#0">Telegu</a>
                                <a href="#0">Tamil</a>
                            </div>
                            <div className="container my-5">
                            <p>{movie.description}</p>
                            </div>
                            <div className="social-and-duration">
                                <div className="duration-area">
                                    <div className="item">
                                        <i className="fas fa-calendar-alt"></i><span>06 Dec, 2020</span>
                                    </div>
                                    <div className="item">
                                        <i className="far fa-clock"></i><span>2 hrs 50 mins</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div >

                </div >
            </section >
            {/* <!-- ==========Banner-Section========== -->

    <!-- ==========Book-Section========== --> */}

            < section class="book-section bg-one" >
                <div class="container">
                    <div class="book-wrapper offset-lg-3">
                        <div class="left-side">


                            <div class="item">
                                <div class="item-header">
                                    <h5 class="title">{movie.rating}</h5>
                                    <div class="rated">
                                        <i class="fas fa-heart"></i>
                                        <i class="fas fa-heart"></i>
                                        <i class="fas fa-heart"></i>
                                        <i class="fas fa-heart"></i>

                                    </div>
                                </div>
                                <p>Users Rating</p>
                            </div>

                        </div>
                        <NavLink to="/checkout" className="custom-button">book tickets</NavLink>
                    </div>
                </div>
            </section >
           

            {/* <!-- ==========Book-Section========== --></> */}
            < Helmet >
                <script src="assets/js/jquery-3.3.1.min.js"></script>
                <script src="assets/js/modernizr-3.6.0.min.js"></script>
                <script src="assets/js/plugins.js"></script>
                <script src="assets/js/bootstrap.min.js"></script>
                <script src="assets/js/heandline.js"></script>
                <script src="assets/js/isotope.pkgd.min.js"></script>
                <script src="assets/js/magnific-popup.min.js"></script>
                <script src="assets/js/owl.carousel.min.js"></script>
                <script src="assets/js/wow.min.js"></script>
                <script src="assets/js/countdown.min.js"></script>
                <script src="assets/js/odometer.min.js"></script>
                <script src="assets/js/viewport.jquery.js"></script>
                <script src="assets/js/nice-select.js"></script>
                <script src="assets/js/main.js"></script>
            </Helmet >
        </>
    );
}

