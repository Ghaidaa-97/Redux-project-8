export default function Footer() {

    return (
        <footer className="footer-section mt-5">
            {/* <div className="newslater-section padding-bottom">
                <div className="container">
                    <div className="newslater-container bg_img" data-background="./assets/images/newslater/newslater-bg01.jpg">
                        <div className="newslater-wrapper">
                            <h5 className="cate">subscribe to Boleto </h5>
                            <h3 className="title">to get exclusive benifits</h3>
                            <form className="newslater-form">
                                <input type="text" placeholder="Your Email Address" />
                                <button type="submit">subscribe</button>
                            </form>
                            <p>We respect your privacy, so we never share your info</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="footer-top">
                    <div className="logo">
                        <a href="/">
                            <img src="./assets/images/footer/footer-logo.png" alt="footer" />
                        </a>
                    </div>
                    <ul className="social-icons">
                        <li>
                            <a href="www.facebook.com">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.twitter.com" className="active">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.google.com">
                                <i className="fab fa-google"></i>
                            </a>
                        </li>
                        <li>
                            <a href="www.instagram.com">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-area">
                        <div className="left">
                            <p>Copyright © 2022.All Rights Reserved By <a href="#0">Boleto </a></p>
                        </div>
                        <ul className="links">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}