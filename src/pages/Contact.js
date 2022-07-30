import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";

export default function Contact() {

    const [contact, setContact] = useState({ name: "", email: "", message: "" });

    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(contact);
        axios.post("http://localhost:8000/api/contact", contact).then(
            (res) => {
                console.log(res);
                setContact({ name: "", email: "", message: "" });
            }
        ).catch((err) => {
            console.log(err);
            alert('Error sending message');
        })

    }
    return (
        <>
            <div className="container">
                <section class="contact-section padding-top">
                    <div class="contact-container">
                        <div class="bg-thumb bg_img" data-background="./assets/images/contact/contact.jpg"></div>
                        <div class="container">
                            <div class="row justify-content-between">
                                <div class="col-md-7 col-lg-6 col-xl-5">
                                    <div class="section-header-3 left-style">
                                        <span class="cate">contact us</span>
                                        <h2 class="title">get in touch</h2>
                                        <p>We’d love to talk about how we can work together. Send us a message below and we’ll respond as soon as possible.</p>
                                    </div>
                                    <form class="contact-form" id="contact_form_submit" onSubmit={handelSubmit} >
                                        <div class="form-group">

                                            <label for="name">Name <span>*</span></label>
                                            <input type="text" placeholder="Enter Your Full Name" onChange={(e) => { setContact({ ...contact, name: e.target.value }) }} value={contact.name} name="name" id="name" required />

                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email <span>*</span></label>
                                            <input type="text" placeholder="Enter Your Email" onChange={(e) => { setContact({ ...contact, email: e.target.value }) }} value={contact.email} name="email" id="email" required />
                                        </div>

                                        <div class="form-group">
                                            <label for="message">Message <span>*</span></label>
                                            <textarea name="message" id="message" placeholder="Enter Your Message" onChange={(e) => { setContact({ ...contact, message: e.target.value }) }} value={contact.message} required ></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Send Message" />
                                        </div>
                                    </form>
                                </div>
                                <div class="col-md-5 col-lg-6">
                                    <div class="padding-top padding-bottom contact-info">
                                        <div class="info-area">
                                            <div class="info-item">
                                                <div class="info-thumb">
                                                    <img src="./assets/images/contact/contact01.png" alt="contact" />
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="title">phone number</h6>
                                                    <a href="Tel:82828282034">+1234 56789</a>
                                                </div>
                                            </div>
                                            <div class="info-item">
                                                <div class="info-thumb">
                                                    <img src="./assets/images/contact/contact02.png" alt="contact" />
                                                </div>
                                                <div class="info-content">
                                                    <h6 class="title">Email</h6>
                                                    <a href="Mailto:info@gmail.com"><span class="__cf_email__" data-cfemail="0b62656d644b4964676e7f64">[email&#160;protected]</span> .com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >



                <section class="contact-counter padding-top padding-bottom">
                    <div class="container">
                        <div class="row justify-content-center mb-30-none">
                            <div class="col-sm-6 col-md-3">
                                <div class="contact-counter-item">
                                    <div class="contact-counter-thumb">
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <div class="contact-counter-content">
                                        <div class="counter-item">
                                            <h5 class="title odometer" data-odometer-final="130">0</h5>
                                            <h5 class="title">k</h5>
                                        </div>
                                        <p>Followers</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="contact-counter-item active">
                                    <div class="contact-counter-thumb">
                                        <i class="fas fa-users"></i>
                                    </div>
                                    <div class="contact-counter-content">
                                        <div class="counter-item">
                                            <h5 class="title odometer" data-odometer-final="35">0</h5>
                                            <h5 class="title">k</h5>
                                        </div>
                                        <p>Members</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="contact-counter-item">
                                    <div class="contact-counter-thumb">
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                    <div class="contact-counter-content">
                                        <div class="counter-item">
                                            <h5 class="title odometer" data-odometer-final="47">0</h5>
                                            <h5 class="title">k</h5>
                                        </div>
                                        <p>Followers</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-3">
                                <div class="contact-counter-item">
                                    <div class="contact-counter-thumb">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div class="contact-counter-content">
                                        <div class="counter-item">
                                            <h5 class="title odometer" data-odometer-final="291">0</h5>
                                            <h5 class="title">k</h5>
                                        </div>
                                        <p>Subscribers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
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