import { Helmet } from "react-helmet";

export default function () {
    return (
        <>
            <section class="account-section bg_img" data-background="./assets/images/account/account-bg.jpg">
                <div class="container">
                    <div class="padding-top padding-bottom">
                        <div class="account-area">
                            <div class="section-header-3">
                                <span class="cate">hello</span>
                                <h2 class="title">welcome back</h2>
                            </div>
                            <form class="account-form">
                                <div class="form-group">
                                    <label for="email2">Email<span>*</span></label>
                                    <input type="text" placeholder="Enter Your Email" id="email2" required />
                                </div>
                                <div class="form-group">
                                    <label for="pass3">Password<span>*</span></label>
                                    <input type="password" placeholder="Password" id="pass3" required />
                                </div>
                                <div class="form-group checkgroup">
                                    <input type="checkbox" id="bal2" required checked />
                                    <label for="bal2">remember password</label>
                                    <a href="#0" class="forget-pass">Forget Password</a>
                                </div>
                                <div class="form-group text-center">
                                    <input type="submit" value="log in" />
                                </div>
                            </form>
                            <div class="option">
                                Don't have an account? <a href="sign-up.html">sign up now</a>
                            </div>
                            <div class="or"><span>Or</span></div>
                            <ul class="social-icons">
                                <li>
                                    <a href="#0">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0" class="active">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#0">
                                        <i class="fab fa-google"></i>
                                    </a>
                                </li>
                            </ul>
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