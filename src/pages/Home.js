import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, addMovie } from "../store/MoviesSlice";

function Home() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      {/* <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div> */}

      <div className="overlay"></div>
      <a href="#0" className="scrollToTop">
        <i className="fas fa-angle-up"></i>
      </a>

      <section className="banner-section">
        <div
          className="banner-bg bg_img bg-fixed"
          data-background="./assets/images/banner/home.jfif"
        ></div>
        <div className="container">
          <div className="banner-content">
            <h1 className="title  cd-headline clip">
              <span className="d-block">book your</span> tickets for
              <span className="color-theme cd-words-wrapper p-0 m-0">
                <b className="is-visible">Movie</b>
                <b>Event</b>
                <b>Sport</b>
              </span>
            </h1>

            <p>
              Safe, secure, reliable ticketing.Your ticket to live
              entertainment!
            </p>
          </div>
        </div>
      </section>

      {/* {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
            />
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
          </div>
        );
      })} */}
      <section className="search-ticket-section padding-top pt-lg-0">
        <div className="container">
          <div
            className="search-tab bg_img"
            data-background="./assets/images/ticket/ticket-bg01.jpg"
          >
            <div className="row align-items-center mb--20">
              <div className="col-lg-6 mb-20">
                <div className="search-ticket-header">
                  <h6 className="category">welcome to Boleto </h6>
                  <h3 className="title">what are you looking for</h3>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <ul className="tab-menu ticket-tab-menu">
                  <li className="active">
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab01.png"
                        alt="ticket"
                      />
                    </div>
                    <span>movie</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab02.png"
                        alt="ticket"
                      />
                    </div>
                    <span>events</span>
                  </li>
                  <li>
                    <div className="tab-thumb">
                      <img
                        src="./assets/images/ticket/ticket-tab03.png"
                        alt="ticket"
                      />
                    </div>
                    <span>sports</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-area">
              <div className="tab-item active">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Movies" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2019</option>
                      <option value="26-12-19">24/10/2019</option>
                      <option value="26-12-19">25/10/2019</option>
                      <option value="26-12-19">26/10/2019</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img
                        src="./assets/images/ticket/cinema.png"
                        alt="ticket"
                      />
                    </div>
                    <span className="type">cinema</span>
                    <select className="select-bar">
                      <option value="Awaken">Awaken</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Events" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2019</option>
                      <option value="26-12-19">24/10/2019</option>
                      <option value="26-12-19">25/10/2019</option>
                      <option value="26-12-19">26/10/2019</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img
                        src="./assets/images/ticket/cinema.png"
                        alt="ticket"
                      />
                    </div>
                    <span className="type">event</span>
                    <select className="select-bar">
                      <option value="angular">angular</option>
                      <option value="startup">startup</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="Last-First">Last-First</option>
                      <option value="wish">wish</option>
                    </select>
                  </div>
                </form>
              </div>
              <div className="tab-item">
                <form className="ticket-search-form">
                  <div className="form-group large">
                    <input type="text" placeholder="Search fo Sports" />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/city.png" alt="ticket" />
                    </div>
                    <span className="type">city</span>
                    <select className="select-bar">
                      <option value="london">London</option>
                      <option value="dhaka">dhaka</option>
                      <option value="rosario">rosario</option>
                      <option value="madrid">madrid</option>
                      <option value="koltaka">kolkata</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img src="./assets/images/ticket/date.png" alt="ticket" />
                    </div>
                    <span className="type">date</span>
                    <select className="select-bar">
                      <option value="26-12-19">23/10/2019</option>
                      <option value="26-12-19">24/10/2019</option>
                      <option value="26-12-19">25/10/2019</option>
                      <option value="26-12-19">26/10/2019</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <div className="thumb">
                      <img
                        src="./assets/images/ticket/cinema.png"
                        alt="ticket"
                      />
                    </div>
                    <span className="type">sports</span>
                    <select className="select-bar">
                      <option value="football">football</option>
                      <option value="cricket">cricket</option>
                      <option value="cabadi">cabadi</option>
                      <option value="madrid">madrid</option>
                      <option value="gadon">gadon</option>
                      <option value="rome">rome</option>
                      <option value="khoksa">khoksa</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
<<<<<<< HEAD
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie"
            />
=======
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movie" />
>>>>>>> 89fb0cbe7dfb984dd057221f18d44659a437be67
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
          </div>
        );
      })} */}

      <section className="movie-section padding-top padding-bottom">
        <div className="container">
          <div className="tab">
            <div className="section-header-2">
              <div className="left">
                <h2 className="title">movies</h2>
                <p>Be sure not to miss these Movies today.</p>
              </div>
              <ul className="tab-menu">
                <li className="active">now showing</li>
                <li>coming soon</li>
                <li>exclusive</li>
              </ul>
            </div>
            <div className="tab-area mb-30-none">
              <div className="tab-item active">

                <div className="row">
                  {movies.map((movie) => (
                    <>
                      <div class="col-sm-6 col-lg-4">
                        <div class="movie-grid">
                          <div class="movie-thumb c-thumb">
                            <a href="movie-details.html">
                              {
                                movie.from == 2 ?
                                  <img
                                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                  />
                                  :
                                  <img
                                    src={`http://127.0.0.1:8000/images/${movie.poster_path}`}
                                    height="540px"
                                  />
                              }
                            </a>
                          </div>
                          <div class="movie-content bg-one">
                            <h5 class="title m-0">
                              <a href="movie-details.html">{movie.title}</a>
                            </h5>
                            <ul class="movie-rating-percent">
                              <li>
                                {/* <span class="content">{movie.description}</span> */}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div className="item">
                        <div className="movie-grid">
                          <div className="movie-thumb c-thumb">
                            <a href="#0">
                              <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt="movie"
                              />
                            </a>
                          </div>

                          <div className="movie-content bg-one">
                            <h5 className="title m-0">
                              <a href="#0">{movie.title}</a>
                            </h5>
                            <ul className="movie-rating-percent">
                              <li>
                                <span className="content">
                                  {movie.description}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div> */}
                    </>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      <section class="client-section padding-bottom padding-top bg_img" data-background="./assets/images/client/home1.jfif">
        <div class="container">
          <div class="section-header-3">
            <span class="cate">testimonials</span>
            <h2 class="title">the fans have spoken</h2>
          </div>
          <div class="client-slider owl-carousel owl-theme">
            <div class="client-item">
              <div class="client-thumb">
                <img src="./assets/images/client/client01.jpg" alt="client" />
              </div>
              <div class="client-content">
                <h5 class="title">
                  <a href="#0">Rafuz</a>
                </h5>
                <span class="info"><i class="fas fa-check"></i> Verified</span>
                <blockquote class="client-quote">
                  "Great prices and Cheaper than other sites! Easy to use."
                </blockquote>
              </div>
            </div>
            <div class="client-item">
              <div class="client-thumb">
                <img src="./assets/images/client/client03.jpg" alt="client" />
              </div>
              <div class="client-content">
                <h5 class="title">
                  <a href="#0">Rudra</a>
                </h5>
                <span class="info"><i class="fas fa-check"></i> Verified</span>
                <blockquote class="client-quote">
                  "Id iure est sint at illum ipsum non beatae cumque"
                </blockquote>
              </div>
            </div>
            <div class="client-item">
              <div class="client-thumb">
                <img src="./assets/images/client/client02.jpg" alt="client" />
              </div>
              <div class="client-content">
                <h5 class="title">
                  <a href="#0">Raihan</a>
                </h5>
                <span class="info"><i class="fas fa-check"></i> Verified</span>
                <blockquote class="client-quote">
                  "amet consectetur adipisicing elit. Animi, ut consequuntur"
                </blockquote>
              </div>
            </div>
            <div class="client-item">
              <div class="client-thumb">
                <img src="./assets/images/client/client04.jpg" alt="client" />
              </div>
              <div class="client-content">
                <h5 class="title">
                  <a href="#0">Shahidul</a>
                </h5>
                <span class="info"><i class="fas fa-check"></i> Verified</span>
                <blockquote class="client-quote">
                  "Quia voluptatum animi libero recusandae error."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Helmet>
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
      </Helmet>
    </>
  );
}

export default Home;
