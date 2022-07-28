import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

export default function () {
    return (
        <>
            <section className="section-404 padding-top padding-bottom">
                <div className="container">
                    <div className="thumb-404">
                        <img src="./assets/images/404.png" alt="404" />
                    </div>
                    <h3 className="title">Oops.. looks like you got lost :( </h3>
                    <NavLink to="/" className="custom-button">Back To Home <i className="flaticon-right"></i></NavLink>
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